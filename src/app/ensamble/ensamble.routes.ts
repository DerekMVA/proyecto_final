import { Route } from "@angular/router";
import { ColaEnsamble } from "./components/cola-ensamble/cola-ensamble";
import { ProcesoEnsamble } from "./components/proceso-ensamble/proceso-ensamble";

export const ENSAMBLE_ROUTES: Route[] = [
    {path: '', component: ColaEnsamble },
    {path: 'proceso', component: ProcesoEnsamble }
];