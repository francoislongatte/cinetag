import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TheaterComponent} from './theater/theater.component';
import {TaglineAdminComponent} from './tagline-admin/tagline-admin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'cinetag',
    pathMatch: 'full'
  },
  {
    path: 'cinetag',
    component: TheaterComponent,
  },
  {
    path: 'tagline',
    children: [
      {
        path: 'list',
        component: TaglineAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
