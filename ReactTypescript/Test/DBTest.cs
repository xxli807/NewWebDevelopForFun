using ReactTypescript.Persistence.DBContext;
using ReactTypescript.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace ReactTypescript.Test
{
   
    public class DbTest
    { 
        [Fact]
        public void InitDbCreate()
        {
            var appSetting = new AppSetting()
            {
                DbConnectionString = "Data Source=.; user id=test; password=test; Initial Catalog=ReactTypescript;Trusted_Connection=True;MultipleActiveResultSets=true"
            };

            using(var ctx = new AppDbContext(appSetting))
            {
                ctx.Database.EnsureCreated();
                Assert.True(true);
            }
        }

    }
}
