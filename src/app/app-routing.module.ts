import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  { path: '', component: UserInformationComponent , pathMatch:'full'},
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
