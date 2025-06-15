using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PlanifyAPI.Models;

namespace PlanifyAPI.Data
{
    public class PlanifyContext : IdentityDbContext<IdentityUser>
    {
        public PlanifyContext(DbContextOptions<PlanifyContext> options) : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
