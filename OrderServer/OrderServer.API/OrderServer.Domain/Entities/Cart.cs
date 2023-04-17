﻿using OrderServer.Domain.ValueObjects;

namespace OrderServer.Domain.Entities
{
    public class Cart
    {
        public Guid Id { get; private set; }
        public Receiver Receiver { get; private set; }
        public ICollection<MovieItem> MovieItems = new List<MovieItem>();

        private Cart() { }
    }
}
