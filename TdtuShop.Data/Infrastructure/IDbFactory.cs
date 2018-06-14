using System;

namespace TdtuShop.Data.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        TdtuShopDbContext Init();
    }
}