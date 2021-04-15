using System.Threading.Tasks;
using server.Infraestructura;
using server.Models;

namespace server.Helpers.Alumno
{
    public interface IAlumnoManager
    {
        Task AddToClass(Usuario usuario, Clase clase);
        Task RemoveToClass(Usuario usuario, Clase clase);
        Task AddHorario(Usuario usuario, Horario horario);
        Task AddCalification(Usuario usuario, Clase clase,TypeCalificacion typeCalificacion);
    }
}