import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { ShoopingEditComponent } from './shooping-list/shooping-edit/shooping-edit.component';

//const appRoutes: Routes=[
 // { path: 'home', component: HomeComponent },
 // { path: 'products', component: ProductsComponent  },

//]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepieDetailComponent,
    RecepieListComponent,
    RecepieItemComponent,
    ShoopingListComponent,
    ShoopingEditComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(
   //   appRoutes,
    //  { enableTracing: true } // <-- debugging purposes only
    //)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
