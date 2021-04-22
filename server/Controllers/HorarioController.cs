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

        [HttpGet]
        [Route("grupo/{idGrupo}/periodo/{idPeriodo}/clases")]
        public async Task<IEnumerable<Clase>> ObtenerHorario(int idGrupo,int idPeriodo){
            return await grupoManager.ObtenerHorario(idGrupo,idPeriodo);
        }

        [HttpPost]
        [Route("grupo/{idGrupo}/periodo/{idPeriodo}/clases")]
        public async Task<ActionResult<Clase>> AgregarClase(int idGrupo, int idPeriodo,[FromBody]Clase clase)
        {
            try{
                await grupoManager.AgregarClase(idGrupo,idPeriodo,clase);
                return Ok(clase);
            }catch(Exception e){
                return BadRequest(e.Message);
            }   
        } 

        [HttpPut]
        [Route("grupo/{idGrupo}/periodo/{idPeriodo}/clases/{idClase}")]
        public async Task<IActionResult> ActualizarClase(int idGrupo, int idPeriodo,int idClase ,[FromBody] Clase clase)
        {
            try{
                await grupoManager.ActualizarClase(idClase,clase);
                return NoContent();
            }catch(Exception e){
                return BadRequest(e.Message);
            }   
        }

        [HttpDelete]
        [Route("grupo/{idGrupo}/periodo/{idPeriodo}/clases/{idClase}")]
        public async Task<IActionResult> BorrarClase(int idGrupo, int idPeriodo,int idClase ){
            try{
                var clase = await grupoManager.ObtenerClase(idClase);
                await grupoManager.DesactivarClase(clase);

                return NoContent();
            }catch(Exception e){
                return BadRequest(e.Message);
            }
        } 
    }
}