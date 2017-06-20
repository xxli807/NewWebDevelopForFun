using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactTypescript.Settings;

namespace ReactTypescript.Persistence.DBContext
{
    public class AppDbContext : DbContext
    {
        private readonly AppSetting _dbSetting;

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){
        }

        public AppDbContext(AppSetting dbSetting)
        {
            this._dbSetting = dbSetting;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(_dbSetting.DbConnectionString);
            base.OnConfiguring(optionBuilder);
        }

        public DbSet<Login> Logins { get; set; }
        public DbSet<Staff> Staffs { get; set; }
        public DbSet<Template> Templates { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<Signer> Signers { get; set; }
        public DbSet<Attachment> Attachments { get; set; }


        //this is used to set up the entity dependency
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Document>().HasKey(d => d.Id);
            modelBuilder.Entity<Document>().Property(d => d.CreateAt).HasDefaultValueSql("getdate()");
            modelBuilder.Entity<Document>().HasMany(d => d.Signers);
            modelBuilder.Entity<Document>().HasMany(d => d.Attachments);

            modelBuilder.Entity<Login>().HasKey(d => d.Id);
            modelBuilder.Entity<Login>().Property(d => d.CreateAt).HasDefaultValueSql("getdate()"); 

            modelBuilder.Entity<Staff>().HasKey(d => d.Id);
            modelBuilder.Entity<Staff>().Property(d => d.CreateAt).HasDefaultValueSql("getdate()");
             
            modelBuilder.Entity<Template>().HasKey(d => d.Id);
            modelBuilder.Entity<Template>().Property(d => d.CreateAt).HasDefaultValueSql("getdate()"); 


            modelBuilder.Entity<Signer>().HasKey(d => d.Id);
            modelBuilder.Entity<Signer>().HasOne(d => d.Document); 
            modelBuilder.Entity<Signer>().Property(d => d.CreateAt).HasDefaultValueSql("getdate()");

            modelBuilder.Entity<Attachment>().HasKey(d => d.Id);
            modelBuilder.Entity<Attachment>().Property(d => d.CreateAt).HasDefaultValueSql("getdate()");

            base.OnModelCreating(modelBuilder);
        }



    }
}
