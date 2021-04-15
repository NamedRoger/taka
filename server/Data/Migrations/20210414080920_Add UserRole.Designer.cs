﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using server;

namespace server.Data.Migrations
{
    [DbContext(typeof(takaContext))]
    [Migration("20210414080920_Add UserRole")]
    partial class AddUserRole
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("server.Models.Clase", b =>
                {
                    b.Property<int>("IdClase")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_clase");

                    b.Property<sbyte?>("Activo")
                        .HasColumnType("tinyint(4)")
                        .HasColumnName("activo");

                    b.Property<TimeSpan?>("HoraFin")
                        .HasColumnType("time")
                        .HasColumnName("hora_fin");

                    b.Property<TimeSpan?>("HoraInicio")
                        .HasColumnType("time")
                        .HasColumnName("hora_inicio");

                    b.Property<int?>("HorarioIdHorario")
                        .HasColumnType("int(11)");

                    b.Property<int?>("IdHorario")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_horario");

                    b.Property<int?>("IdMaestro")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_maestro");

                    b.Property<int?>("IdMateria")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_materia");

                    b.Property<int?>("MaestroIdUsuario")
                        .HasColumnType("int(11)");

                    b.Property<int?>("MateriaIdMateria")
                        .HasColumnType("int(11)");

                    b.Property<string>("Nombre")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("nombre")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.HasKey("IdClase")
                        .HasName("PRIMARY");

                    b.HasIndex("HorarioIdHorario");

                    b.HasIndex("MaestroIdUsuario");

                    b.HasIndex("MateriaIdMateria");

                    b.ToTable("clase");
                });

            modelBuilder.Entity("server.Models.ClaseAlumno", b =>
                {
                    b.Property<int>("IdClaseAlumno")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_clase_alumno");

                    b.Property<int?>("AlumnoIdUsuario")
                        .HasColumnType("int(11)");

                    b.Property<int?>("ClaseIdClase")
                        .HasColumnType("int(11)");

                    b.Property<int>("IdAlumno")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_alumno");

                    b.Property<int>("IdClase")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_clase");

                    b.Property<double?>("Parcial1")
                        .HasColumnType("double")
                        .HasColumnName("parcial_1");

                    b.Property<double?>("Parcial2")
                        .HasColumnType("double")
                        .HasColumnName("parcial_2");

                    b.Property<double?>("Parcial3")
                        .HasColumnType("double")
                        .HasColumnName("parcial_3");

                    b.HasKey("IdClaseAlumno")
                        .HasName("PRIMARY");

                    b.HasIndex("AlumnoIdUsuario");

                    b.HasIndex("ClaseIdClase");

                    b.ToTable("clase_alumno");
                });

            modelBuilder.Entity("server.Models.Especialidad", b =>
                {
                    b.Property<int>("IdEspecialidad")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_especialidad");

                    b.Property<sbyte?>("Activo")
                        .HasColumnType("tinyint(4)")
                        .HasColumnName("activo");

                    b.Property<string>("Codigo")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("codigo")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<string>("Nombre")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("nombre")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.HasKey("IdEspecialidad")
                        .HasName("PRIMARY");

                    b.ToTable("especialidades");
                });

            modelBuilder.Entity("server.Models.Grupo", b =>
                {
                    b.Property<int>("IdGrupo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_grupo");

                    b.Property<sbyte?>("Activo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("tinyint(4)")
                        .HasColumnName("activo")
                        .HasDefaultValueSql("'1'");

                    b.Property<string>("Codigo")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("codigo")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<int?>("EspecialidadIdEspecialidad")
                        .HasColumnType("int(11)");

                    b.Property<int?>("IdEspecialidad")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_especialidad");

                    b.Property<string>("Nombre")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("nombre")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.HasKey("IdGrupo")
                        .HasName("PRIMARY");

                    b.HasIndex("EspecialidadIdEspecialidad");

                    b.ToTable("grupos");
                });

            modelBuilder.Entity("server.Models.Horario", b =>
                {
                    b.Property<int>("IdHorario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_horario");

                    b.Property<sbyte?>("Activo")
                        .HasColumnType("tinyint(4)")
                        .HasColumnName("activo");

                    b.Property<int?>("GrupoIdGrupo")
                        .HasColumnType("int(11)");

                    b.Property<int>("IdGrupo")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_grupo");

                    b.Property<int>("IdPeriodo")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_periodo");

                    b.Property<int?>("PeriodoIdPeriodo")
                        .HasColumnType("int(11)");

                    b.HasKey("IdHorario")
                        .HasName("PRIMARY");

                    b.HasIndex("GrupoIdGrupo");

                    b.HasIndex("PeriodoIdPeriodo");

                    b.ToTable("horario");
                });

            modelBuilder.Entity("server.Models.HorarioAlumno", b =>
                {
                    b.Property<int>("IdHorarioAlumno")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_horario_alumno");

                    b.Property<int?>("AlumnoIdUsuario")
                        .HasColumnType("int(11)");

                    b.Property<int?>("HorarioIdHorario")
                        .HasColumnType("int(11)");

                    b.Property<int>("IdAlumno")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_alumno");

                    b.Property<int>("IdHorario")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_horario");

                    b.HasKey("IdHorarioAlumno")
                        .HasName("PRIMARY");

                    b.HasIndex("AlumnoIdUsuario");

                    b.HasIndex("HorarioIdHorario");

                    b.ToTable("horario_alumno");
                });

            modelBuilder.Entity("server.Models.Materia", b =>
                {
                    b.Property<int>("IdMateria")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_materia");

                    b.Property<sbyte?>("Activo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("tinyint(4)")
                        .HasColumnName("activo")
                        .HasDefaultValueSql("'1'");

                    b.Property<string>("Codigo")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("codigo")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<string>("Nombre")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("nombre")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.HasKey("IdMateria")
                        .HasName("PRIMARY");

                    b.ToTable("materias");
                });

            modelBuilder.Entity("server.Models.Periodo", b =>
                {
                    b.Property<int>("IdPeriodo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_periodo");

                    b.Property<sbyte?>("Activo")
                        .HasColumnType("tinyint(4)")
                        .HasColumnName("activo");

                    b.Property<DateTime?>("FechaFin")
                        .HasColumnType("date")
                        .HasColumnName("fecha_fin");

                    b.Property<DateTime?>("FechaInicio")
                        .HasColumnType("date")
                        .HasColumnName("fecha_inicio");

                    b.Property<string>("Nombre")
                        .HasColumnType("varchar(100)")
                        .HasColumnName("nombre")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.HasKey("IdPeriodo")
                        .HasName("PRIMARY");

                    b.ToTable("periodos");
                });

            modelBuilder.Entity("server.Models.Role", b =>
                {
                    b.Property<int>("IdRol")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_rol");

                    b.Property<sbyte?>("Activo")
                        .HasColumnType("tinyint(4)")
                        .HasColumnName("activo");

                    b.Property<string>("Codigo")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("codigo")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<string>("Nombre")
                        .HasColumnType("varchar(100)")
                        .HasColumnName("nombre")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.HasKey("IdRol")
                        .HasName("PRIMARY");

                    b.ToTable("roles");
                });

            modelBuilder.Entity("server.Models.Usuario", b =>
                {
                    b.Property<int>("IdUsuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_usuario");

                    b.Property<sbyte?>("Activo")
                        .HasColumnType("tinyint(4)")
                        .HasColumnName("activo");

                    b.Property<string>("ApellidoMaterno")
                        .HasColumnType("varchar(100)")
                        .HasColumnName("apellido_materno")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<string>("ApellidoPaterno")
                        .HasColumnType("varchar(100)")
                        .HasColumnName("apellido_paterno")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<string>("Curp")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("curp")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<string>("Email")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("email")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<int?>("IdRole")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_role");

                    b.Property<string>("Matricula")
                        .HasColumnType("varchar(100)")
                        .HasColumnName("matricula")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<string>("Nombre")
                        .HasColumnType("varchar(100)")
                        .HasColumnName("nombre")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<string>("Password")
                        .HasColumnType("varchar(255)")
                        .HasColumnName("password")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.Property<string>("Username")
                        .HasColumnType("varchar(50)")
                        .HasColumnName("username")
                        .UseCollation("latin1_swedish_ci")
                        .HasCharSet("latin1");

                    b.HasKey("IdUsuario")
                        .HasName("PRIMARY");

                    b.HasIndex("IdRole");

                    b.ToTable("usuarios");
                });

            modelBuilder.Entity("server.Models.Clase", b =>
                {
                    b.HasOne("server.Models.Horario", "Horario")
                        .WithMany()
                        .HasForeignKey("HorarioIdHorario");

                    b.HasOne("server.Models.Usuario", "Maestro")
                        .WithMany()
                        .HasForeignKey("MaestroIdUsuario");

                    b.HasOne("server.Models.Materia", "Materia")
                        .WithMany()
                        .HasForeignKey("MateriaIdMateria");

                    b.Navigation("Horario");

                    b.Navigation("Maestro");

                    b.Navigation("Materia");
                });

            modelBuilder.Entity("server.Models.ClaseAlumno", b =>
                {
                    b.HasOne("server.Models.Usuario", "Alumno")
                        .WithMany()
                        .HasForeignKey("AlumnoIdUsuario");

                    b.HasOne("server.Models.Clase", "Clase")
                        .WithMany()
                        .HasForeignKey("ClaseIdClase");

                    b.Navigation("Alumno");

                    b.Navigation("Clase");
                });

            modelBuilder.Entity("server.Models.Grupo", b =>
                {
                    b.HasOne("server.Models.Especialidad", "Especialidad")
                        .WithMany()
                        .HasForeignKey("EspecialidadIdEspecialidad");

                    b.Navigation("Especialidad");
                });

            modelBuilder.Entity("server.Models.Horario", b =>
                {
                    b.HasOne("server.Models.Grupo", "Grupo")
                        .WithMany()
                        .HasForeignKey("GrupoIdGrupo");

                    b.HasOne("server.Models.Periodo", "Periodo")
                        .WithMany()
                        .HasForeignKey("PeriodoIdPeriodo");

                    b.Navigation("Grupo");

                    b.Navigation("Periodo");
                });

            modelBuilder.Entity("server.Models.HorarioAlumno", b =>
                {
                    b.HasOne("server.Models.Usuario", "Alumno")
                        .WithMany()
                        .HasForeignKey("AlumnoIdUsuario");

                    b.HasOne("server.Models.Horario", "Horario")
                        .WithMany()
                        .HasForeignKey("HorarioIdHorario");

                    b.Navigation("Alumno");

                    b.Navigation("Horario");
                });

            modelBuilder.Entity("server.Models.Usuario", b =>
                {
                    b.HasOne("server.Models.Role", "Role")
                        .WithMany()
                        .HasForeignKey("IdRole");

                    b.Navigation("Role");
                });
#pragma warning restore 612, 618
        }
    }
}
