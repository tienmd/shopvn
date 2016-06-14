using ProjectShop.Data.Infrastructure;
using ProjectShop.Model.Models;

namespace ProjectShop.Data.Repositores
{
    public interface IErrorRepository : IRepository<Error>
    {
    }

    public class ErrorRepository : RepositoryBase<Error>, IErrorRepository
    {
        public ErrorRepository(IDbFactory dbFacetory) : base(dbFacetory)
        {
        }
    }
}