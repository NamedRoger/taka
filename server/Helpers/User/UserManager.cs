using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Helpers.User
{
    public class UserManager : IUserManager<Usuario, int>
    {
        private readonly takaContext context;

        public UserManager(takaContext context)
        {
            this.context = context;
        }

        public async Task AddUser(Usuario user)
        {
            if((await FindUser(user.Email)) != null) throw new System.Exception("Ya existe el usuario");
            var role = await FindRole(user.IdRole);
            user.Email = user.Email.Trim();
            user.Role = role;
            user.Password = HashPassword(user.Password);
            user.UserNameNormalize = user.Email.ToUpper().Trim();
            user.Activo = true;

            await context.AddAsync(user);
            await context.SaveChangesAsync();
        }

        public Task ChangePassword(Usuario user, string password)
        {
            throw new System.NotImplementedException();
        }

        public async Task DesactiveUser(Usuario usuario)
        {
            var foundUser = await FindUser(usuario.Email);
            if(foundUser == null) throw new System.Exception("No se encontro el usuario");
            foundUser.Activo = false;
            await context.SaveChangesAsync();
        }

        public async Task<Usuario> FindUser(string username)
        {
            username = username.ToUpper();
            var usuario = await context.Usuarios.Where(u => u.Activo && u.UserNameNormalize == username)
            .Include(u => u.Role)
            .FirstOrDefaultAsync();
            return usuario;
        }

        public Task UpdateUser(int key, Usuario user)
        {
            throw new System.NotImplementedException();
        }

        private async Task<Role> FindRole(int id){
            var role =  await context.Roles.FindAsync(id);
            if(role == null) throw new System.Exception("No existe el rol");
            return role;
        }  

        private string HashPassword(string password){
            return BCrypt.Net.BCrypt.HashPassword(password);
        } 
    }
}