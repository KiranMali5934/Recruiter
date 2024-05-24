import { Routes } from "@angular/router";

export const fullRoutes: Routes = [
    {
        path: 'error-page',
        loadChildren: () => import('../../component/pages/error-pages/error-pages.module').then(m => m.ErrorPagesModule),
    },
    {
        path: 'authentication',
        loadChildren: () => import('../../component/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'coming-soon',
        loadChildren: () => import('../../component/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)
    }
]