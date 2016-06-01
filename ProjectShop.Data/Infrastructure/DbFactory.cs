using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectShop.Data.Infrastructure
{
    class DbFactory : Disposable, IDbFactory
    {
        private ProjectShopDbContext dbContext;
        public ProjectShopDbContext Init()
        {
            return dbContext ?? (dbContext = new ProjectShopDbContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
