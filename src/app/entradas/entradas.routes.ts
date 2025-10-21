import { Routes } from '@angular/router';
import { ListaCompras } from './components/lista-compras/lista-compras';
import { RegistrarCompra } from './components/registrar-compra/registrar-compra';
import { GestionProveedores } from './components/gestion-proveedores/gestion-proveedores';

export const ENTRADAS_ROUTES: Routes = [
    { path: '', component: ListaCompras },
    { path: 'nueva', component: RegistrarCompra },
    { path: 'proveedores', component: GestionProveedores }
];