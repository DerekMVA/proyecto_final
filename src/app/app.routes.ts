import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inventario',
    loadChildren: () => import('./inventario/inventario.routes').then(r => r.INVENTARIO_ROUTES)
  },
  {
    path: 'entradas',
    loadChildren: () => import('./entradas/entradas.routes').then(r => r.ENTRADAS_ROUTES)
  },
  {
    path: 'salidas',
    loadChildren: () => import('./salidas/salidas.routes').then(r => r.SALIDAS_ROUTES)
  },
  {
    path: 'ordenes',
    loadChildren: () => import('./ordenes/ordenes.routes').then(r => r.ORDENES_ROUTES)
  },
  {
    path: 'ensamble',
    loadChildren: () => import('./ensamble/ensamble.routes').then(r => r.ENSAMBLE_ROUTES)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./mantenimiento/mantenimiento.routes').then(r => r.MANTENIMIENTO_ROUTES)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(r => r.ADMIN_ROUTES)
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];