using ProjectShop.Data.Infrastructure;
using ProjectShop.Model.Models;

namespace ProjectShop.Data.Repositores
{
    public interface IProductRepository
    {
    }

    public class ProductRepository : RepositoryBase<Product>
    {
        public ProductRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}