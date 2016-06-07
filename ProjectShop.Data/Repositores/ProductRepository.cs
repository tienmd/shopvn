using ProjectShop.Data.Infrastructure;
using ProjectShop.Model.Models;

namespace ProjectShop.Data.Repositores
{
    public interface IProductRepository : IRepository<Product>
    {
    }

    public class ProductRepository : RepositoryBase<Product>,IProductRepository
    {
        public ProductRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}