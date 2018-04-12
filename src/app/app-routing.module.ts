import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { HelpPageComponent } from './help-page/help-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'profile', component: ProfilePageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'resources', component: ResourcesPageComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { 

}
