import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { DetailContratComponent } from './detail-contrat/detail-contrat.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
}, {
  path: 'detail/:id',
  component: DetailContratComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    ListContratComponent,
    DetailContratComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
