import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { ContentComponent } from './layout/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'users', component: UsersComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
