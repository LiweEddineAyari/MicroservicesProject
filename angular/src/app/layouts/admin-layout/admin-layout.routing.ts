import { Routes } from '@angular/router';
import { BloccontrolerComponent } from 'app/bloccontroler/bloccontroler.component';
import { ChambreControllerComponent } from 'app/chambre-controller/chambre-controller.component';
import { EtudiantControllerComponent } from 'app/etudiant-controller/etudiant-controller.component';
import { FoyerControllerComponent } from 'app/foyer-controller/foyer-controller.component';
import { ReservationControllerComponent } from 'app/reservation-controller/reservation-controller.component';
import { UniversiteControllerComponent } from 'app/universite-controller/universite-controller.component';




export const AdminLayoutRoutes: Routes = [
    { path: 'bloc-list',     component: BloccontrolerComponent },
    { path: 'foyer-list',     component: FoyerControllerComponent },
    { path: 'universite-list',     component: UniversiteControllerComponent },
    { path: 'reservation-list',     component: ReservationControllerComponent },
    { path: 'chambre-list',     component: ChambreControllerComponent },
    { path: 'etudiant-list',     component: EtudiantControllerComponent },

];
