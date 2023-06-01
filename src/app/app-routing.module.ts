import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat/chat.component';
import { AppComponent } from './app.component';

const routes: Routes = 
  [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'chat', component: ChatComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
