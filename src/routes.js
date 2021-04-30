
export const Routes = {
    // pages
    Presentation: { path: "/" },
    DashboardOverview: { path: "/tablero",children: {
        clase:'/tablero/periodo/:idPeriodo/clase/:idClase'
    }},
    Transactions: { path: "/transactions" },
    Settings: { path: "/settings" },
    Upgrade: { path: "/upgrade" },
    BootstrapTables: { path: "/tables/bootstrap-tables" },
    Billing: { path: "/examples/billing" },
    Invoice: { path: "/examples/invoice" },
    Signin: { path: "/login" },
    ForgotPassword: { path: "/examples/forgot-password" },
    ResetPassword: { path: "/examples/reset-password" },
    Lock: { path: "/examples/lock" },
    NotFound: { path: "/examples/404" },
    ServerError: { path: "/examples/500" },

    Usuarios:{ path:'/admin/usuarios'},
    Especialidad: { path: "/classroom/especialidades" },
    Materias: { path: "/classroom/materias" },
    Grupos: { 
        path: "/classroom/grupos",
        children:{
            horarios:"/classroom/grupos/:idGrupo/horarios",
            clase:"/classroom/grupos/:idGrupo/periodo/:idPeriodo/clase/:idClase"
        }
    },
    Periodos: {
        path:"/classroom/periodos"
    }
};