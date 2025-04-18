import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BloccontrolerComponent } from './bloccontroler/bloccontroler.component';
import { FoyerControllerComponent } from './foyer-controller/foyer-controller.component';
import { ChambreControllerComponent } from './chambre-controller/chambre-controller.component';
import { UniversiteControllerComponent } from './universite-controller/universite-controller.component';
import { ReservationControllerComponent } from './reservation-controller/reservation-controller.component';
import { EtudiantControllerComponent } from './etudiant-controller/etudiant-controller.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ChambreControllerComponent,
    UniversiteControllerComponent,
    ReservationControllerComponent,
    EtudiantControllerComponent,
    BloccontrolerComponent,
    FoyerControllerComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
