﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace myProducts.Web.TestData
{
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class northwindEntities : DbContext
    {
        public northwindEntities()
            : base("name=northwindEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<Products> Products { get; set; }
    }
}
