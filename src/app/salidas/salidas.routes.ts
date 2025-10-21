import { Routes } from '@angular/router';
import { ListaVentas } from './components/lista-ventas/lista-ventas';
import { RegistrarVenta } from './components/registrar-venta/registrar-venta';
import { GestionClientes } from './components/gestion-clientes/gestion-clientes';

export const SALIDAS_ROUTES: Routes = [
    { path: '', component: ListaVentas },
    { path: 'nueva', component: RegistrarVenta },
    { path: 'clientes', component: GestionClientes }
];