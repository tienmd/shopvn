using ProjectShop.Data.Infrastructure;
using ProjectShop.Model.Models;

namespace ProjectShop.Data.Repositores
{
    public interface IFooterRepository: IRepository<Footer>
    {
    
    }
    public class FooterRepository : RepositoryBase<Footer>,IFooterRepository
    {
        public FooterRepository(IDbFactory dbFacetory) : base(dbFacetory)
        {

        }
    }
}