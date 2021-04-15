using System.Threading.Tasks;
using server.Models;

namespace server.Helpers.Classroom
{
    public interface IGrupoManager
    {
        Task AddClass(Grupo grupo, Clase clase);
        Task RemoveClass(Grupo grupo,Clase clase);
        Task AddHorario(Grupo grupo, Periodo periodo, Horario horario);
        Task RemoveHorario(Grupo grupo, Periodo periodo, Horario horario);
    }
}