using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public class Horario
    {
        public int IdHorario { get; set; }
        public int IdGrupo { get; set; }
        public Grupo Grupo {get;set;}
        public int IdPeriodo { get; set; }
        public Periodo Periodo {get;set;}
        public sbyte? Activo { get; set; }

        public ICollection<Usuario> Alumnos {get;set;}
    }
}
