using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Helpers.User;
using server.Models;

namespace server.Controllers
{
    [Authorize(Roles = "Administrador")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IUserManager<Usuario,int> userMananger;
        private readonly takaContext context;

        public UsuariosController(IUserManager<Usuario, int> userMananger, takaContext context)
        {
            this.userMananger = userMananger;
            this.context = context;
        }

        // GET: api/Usuarios
        [HttpGet]
        public async Task<IEnumerable<Usuario>> Get()
        {
            var usuarios = await context.Usuarios.ToListAsync();
            usuarios.ForEach(u => u.Password = null);
            return  usuarios;
        }

        // GET: api/Usuarios/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Usuarios
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Usuario usuario)
        {
            if(usuario.Email == null)
                return BadRequest("Llene el campo UserName");

            try{
                await userMananger.AddUser(usuario);
                return Ok();
            }catch(Exception e){
                return BadRequest(e.Message);
            }
        }

        // PUT: api/Usuarios/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Usuarios/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            
        }
    }
}
