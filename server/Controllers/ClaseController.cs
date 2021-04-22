using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClaseController : ControllerBase
    {
        private readonly takaContext context;

        public ClaseController(takaContext context)
        {
            this.context = context;
        }

        // GET: api/Clase
        [HttpGet("{idClase}")]
        public async Task<Clase> Get(int idClase)
        {
            var clase = await context.Clases.Where(c => c.Activo)
                .Include(c => c.Alumnos)
                .Include(c => c.ClaseAlumnos)
                .FirstOrDefaultAsync(c => c.IdClase == idClase);

                return clase;   
        }

    }
}
