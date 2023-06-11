import { inject, injectable, multiInject, unmanaged } from "inversify";
import { TYPES } from "./type";

export const Injectable = injectable();
export const Unmanaged = unmanaged();
export const AmqpConnection = inject(TYPES.AmqpConnection);
export const ILogger = inject(TYPES.ILogger);
export const IEventHandlerModule = multiInject(TYPES.IEventHandlerModule);
export const ContainerModule = inject(TYPES.ContainerModule);
export const IQueryHandlerModule = inject(TYPES.IQueryHandlerModule);
export const ICommandHandlerModule = inject(TYPES.ICommandHandlerModule);
export const RedisClient = inject(TYPES.RedisClient);
export const ICommandBusModule = inject(TYPES.ICommandBusModule);
export const IEventBusModule = inject(TYPES.IEventBusModule);
export const IQueryBusModule = inject(TYPES.IQueryBusModule);
export const StripeClient = inject(TYPES.StripeClient);
export const PaypalClient = inject(TYPES.PaypalClient);
export const IPaymentCheckoutSessionFactoryModule = inject(TYPES.IPaymentCheckoutSessionFactoryModule);
export const IConsul = inject(TYPES.IConsul);
export const IConsulClientModule = inject(TYPES.IConsulClientModule);
export const ICacheServiceModule = inject(TYPES.ICacheServiceModule);