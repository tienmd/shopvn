using ProjectShop.Data.Infrastructure;
using ProjectShop.Model.Models;
using System.Collections.Generic;
using System;
using System.Linq;

namespace ProjectShop.Data.Repositores
{
    public interface IProductCategoryRepositores
    {
        IEnumerable<ProductCategory> GetByAlias(string alias);
    }
    public class ProductCategoryRepositores : RepositoryBase<ProductCategory>, IProductCategoryRepositores
    {


        public ProductCategoryRepositores(IDbFactory dbFactory) : base(dbFactory)
        {

        }

        public IEnumerable<ProductCategory> GetByAlias(string alias)
        {
            return this.DbContext.ProductCategories.Where(a => a.Alias == alias);
        }
    }
}