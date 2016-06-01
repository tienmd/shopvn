using System;

namespace ProjectShop.Data.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        ProjectShopDbContext Init();
    }
}