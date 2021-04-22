using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Helpers.Classroom;
using server.Models;

namespace server.Controllers
{
    [Authorize(Roles = "Administrador")]
    [Route("api/[controller]")]
    [ApiController]
    public class HorarioController : ControllerBase
    {
        private readonly takaContext context;
        private readonly IGrupoManager grupoManager;

        public HorarioController(takaContext context, IGrupoManager grupoManager)
        {
            this.context = context;
            this.grupoManager = grupoManager;
        }
    }
}