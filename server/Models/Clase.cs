using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public class Clase
    {
        public int IdClase { get; set; }
        public string Nombre { get; set; }
        public int? IdMateria { get; set; }
        public Materia Materia {get;set;}
        public int? IdMaestro { get; set; }
        public Usuario Maestro {get;set;}
        public TimeSpan? HoraInicio { get; set; }
        public TimeSpan? HoraFin { get; set; }
        public sbyte? Activo { get; set; }
        public int? IdHorario { get; set; }
        public Horario Horario {get;set;}

        public ICollection<Usuario> Alumnos {get;set;}
        public List<ClaseAlumno> ClaseAlumnos {get;set;}
    }
}
