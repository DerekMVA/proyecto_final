import { Routes } from '@angular/router';
import { InventarioGeneral } from './components/inventario-general/inventario-general';
import { ProductoDetalle } from './components/producto-detalle/producto-detalle';
import { AjusteInventario } from './components/ajuste-inventario/ajuste-inventario';

export const INVENTARIO_ROUTES: Routes = [
    { path: '', component: InventarioGeneral },
    { path: 'detalle/:id', component: ProductoDetalle },
    { path: 'ajuste', component: AjusteInventario }
];