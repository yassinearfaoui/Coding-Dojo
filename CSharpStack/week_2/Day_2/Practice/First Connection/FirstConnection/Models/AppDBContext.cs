#pragma  warning disable CS8618
using FirstConnection.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstConnection.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options) : base(options){}

      public DbSet<Pet> Users { get; set; } 

}