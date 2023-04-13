﻿using OrderServer.Shared.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderServer.Shared.Dispatcher.Queries
{
    public class QueryDispatcher : IQueryDispatcher
    {
        public Task<TResult> DispatchAsync<TResult>(IQuery<TResult> query) where TResult : IQuery
        {
            throw new NotImplementedException();
        }
    }
}
