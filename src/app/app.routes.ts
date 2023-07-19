import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import('./features/components/test1/test1.component').then(c=>c.Test1Component),
        title:'Test1'
    },
    {
        path:'test2',
        loadComponent:()=> import('./features/components/test2/test2.component').then(c=>c.Test2Component),
        title:'Test2'
    },
    {
        path:'**',
        redirectTo:''
    }
];
