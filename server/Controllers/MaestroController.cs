using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers
{
    [Authorize(Roles = "Administrador")]
    [Route("api/[controller]")]
    [ApiController]
    public class MaestroController : ControllerBase
    {
        private readonly takaContext context;

        public MaestroController(takaContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Usuario>> GetMaestrosAsync()
        {
            var maestros = await context.Usuarios.Include(u => u.Role)
                .Where(u => u.Role.Nombre == "Maestro" && u.Activo)
                .ToListAsync();
            maestros.ForEach(m => m.Password = null);
            return maestros;
        }
    }
}
