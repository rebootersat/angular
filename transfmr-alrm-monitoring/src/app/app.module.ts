import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PowerSummaryComponent } from './home/power-summary/power-summary.component';
import { TransformersListComponent } from './home/transformers-list/transformers-list.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { SearchTransformerComponent } from './alarms/search-transformer/search-transformer.component';
import { TransformerDetailsComponent } from './alarms/transformer-details/transformer-details.component';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: AlarmsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PowerSummaryComponent,
    TransformersListComponent,
    AlarmsComponent,
    SearchTransformerComponent,
    TransformerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
