using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Authorize(Roles = "Administrador,Alumno,Maestro")]
    [Route("api/[controller]")]
    [ApiController]
    public class CalificacionController : ControllerBase
    {
        
    }
}
