import { Routes } from '@angular/router';
import { DashboardReportes } from './components/dashboard-reportes/dashboard-reportes';
import { GestionUsuarios } from './components/gestion-usuarios/gestion-usuarios';

export const ADMIN_ROUTES: Routes = [
        { path: '', component: DashboardReportes },
    { path: 'usuarios', component: GestionUsuarios }
];