import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'contactanos',
        loadComponent : () => import("./contactanos/contactanos.component")
    },
    {
        path: 'inicio',
        loadComponent : () => import('./home/inicio/inicio.component')
    },
    {
        path: '**',
        redirectTo: 'inicio'
    }
];
