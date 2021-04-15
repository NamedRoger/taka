using System.Threading.Tasks;
using server.Models;

namespace server.Helpers.Classroom
{
    public class GrupoManager : IGrupoManager
    {
        public Task AddClass(Grupo grupo, Clase clase)
        {
            throw new System.NotImplementedException();
        }

        public Task AddHorario(Grupo grupo, Periodo periodo, Horario horario)
        {
            throw new System.NotImplementedException();
        }

        public Task RemoveClass(Grupo grupo, Clase clase)
        {
            throw new System.NotImplementedException();
        }

        public Task RemoveHorario(Grupo grupo, Periodo periodo, Horario horario)
        {
            throw new System.NotImplementedException();
        }
    }
}