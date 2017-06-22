using ReactTypescript.Persistence.DBContext;
using ReactTypescript.Services.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ReactTypescript.Services.Data.Imps
{
    public class AccountService : IAccountService
    {
        private readonly AppDbContext _appContext;

        public AccountService(AppDbContext appContext)
        {
            _appContext = appContext;
        }

        public async Task<bool> IsLoginValid(string email, string password)
        {
            var exist = await _appContext.Logins.FirstOrDefaultAsync(d => d.Username == email && d.Password == password && !d.IsDelete);

            return exist == null ? true : false;
        }

        public async Task CreateLogin(Staff staff, string password)
        {
            var newLogin = new Login()
            {
                IsDelete = false,
                Username = staff.Email,
                Password = password,
                Staff = staff
            };

            _appContext.Logins.Add(newLogin);

           await _appContext.SaveChangesAsync();

        }

    }
}
