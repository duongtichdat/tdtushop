namespace TdtuShop.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        private TdtuShopDbContext dbContext;

        public TdtuShopDbContext Init()
        {
            return dbContext ?? (dbContext = new TdtuShopDbContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}