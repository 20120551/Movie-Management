﻿using OrderServer.Shared.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderServer.Application.Exceptions
{
    internal class NotFoundCartException : OrderException
    {
        public NotFoundCartException() : base("Cart was not found")
        {
        }
    }
}
