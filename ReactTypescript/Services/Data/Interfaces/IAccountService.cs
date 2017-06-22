using ReactTypescript.Persistence.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTypescript.Services.Data.Interfaces
{
    internal interface IAccountService
    {
        Task<bool> IsLoginValid(string email, string password);

        Task CreateLogin(Staff staff, string password);
             
    }
}
