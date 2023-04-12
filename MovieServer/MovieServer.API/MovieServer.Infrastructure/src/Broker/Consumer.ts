import { IConsumer } from "@Shared/Broker";
import { AmqpClient, Injectable } from "@Shared/IoC";
import { AMQPConnection } from "./AmqpClient";

@Injectable
export default class Consumer implements IConsumer {
    private readonly _amqpClient: AMQPConnection;
    // inject connection here
    constructor(
        @AmqpClient amqpClient: AMQPConnection
    ) {
        this._amqpClient = amqpClient;
    }
    async Subscribe<THandler>(
        exchange: string,
        type: string,
        bindingKey: string,
        handler: (data: THandler) => Promise<void | null>): Promise<void> {
        // create channel
        const channel = await this._amqpClient.createChannel();
        // assert exchange
        await channel.assertExchange(exchange, type, { durable: false });
        // assert queue
        const queue = await channel.assertQueue('', { exclusive: true });
        // bind queue
        await channel.bindQueue(queue.queue, exchange, bindingKey);
        // consume event with handler method
        await channel.consume(queue.queue, async function (msg) {
            if (!msg) {
                throw new Error('Message was not send to queue');
            }
            const content = msg.content.toString();
            const jsonContent = JSON.parse(content);
            await handler(jsonContent);

        }, { noAck: true });
    }
}

/*
    - consum between read and write side (write side publish -> read side listen)
        +) Handle on infrastructure layer (because not relevant to domain layer)
    - consum between write side and other service (other service publish -> write side listen)
        +) Handle on application layer (because write side relevant to domain layer)
        +) Write handler for each topic
        
    => all consumer listen on presentation layer (.API layer)
*/