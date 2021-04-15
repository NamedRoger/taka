using System.Threading.Tasks;
using server.Infraestructura;
using server.Models;

namespace server.Helpers.Alumno
{
    public class AlumnoManager : IAlumnoManager
    {
        public Task AddCalification(Usuario usuario, Clase clase, TypeCalificacion typeCalificacion)
        {
            throw new System.NotImplementedException();
        }

        public Task AddHorario(Usuario usuario, Horario horario)
        {
            throw new System.NotImplementedException();
        }

        public Task AddToClass(Usuario usuario, Clase clase)
        {
            throw new System.NotImplementedException();
        }

        public Task RemoveToClass(Usuario usuario, Clase clase)
        {
            throw new System.NotImplementedException();
        }
    }
}