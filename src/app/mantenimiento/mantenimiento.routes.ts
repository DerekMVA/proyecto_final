import { Route } from "@angular/router";
import { ColaMantenimiento } from "./components/cola-mantenimiento/cola-mantenimiento";
import { DiagnosticoReparacion } from "./components/diagnostico-reparacion/diagnostico-reparacion";

export const MANTENIMIENTO_ROUTES: Route[] = [
    {path: '', component: ColaMantenimiento },
    {path: 'diagnostico', component: DiagnosticoReparacion }
];  