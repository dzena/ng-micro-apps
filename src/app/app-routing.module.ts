import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('../../projects/app1/src/app/app.module').then( module => module.AppModule )
  },
  {
    path: 'app2',
    loadChildren: () => import('../../projects/app2/src/app/app.module').then( module => module.AppModule )
  },
  { path: '**', redirectTo: '/app1/one' }
];

@NgModule( {
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // preloadingStrategy: PreloadAllModules,
      }
    )
  ],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
