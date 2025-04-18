import { Component, OnInit } from '@angular/core';
import { Bloc } from '../model/bloc.model';
import { BlocService } from '../services/bloc.service';
import { Foyer } from 'app/model/foyer.model';
import { FoyerService } from 'app/services/foyer.service';

@Component({
  selector: 'app-bloccontroler',
  templateUrl: './bloccontroler.component.html'
})
export class BloccontrolerComponent implements OnInit {
  blocs: Bloc[] = [];
  selectedBloc: Bloc = {} as Bloc;
  showForm = false;
  isEditing = false;
  foyers: Foyer[] = [];

  constructor(private blocService: BlocService , private foyerService: FoyerService) {}

  ngOnInit(): void {
    this.loadBlocs();
    this.loadFoyers();
  }

  loadFoyers(): void {
    this.foyerService.getAllFoyers().subscribe({
      next: (data) => this.foyers = data,
      error: (err) => console.error('Error loading foyers:', err)
    });
  }
  loadBlocs(): void {
    this.blocService.getAllBlocs().subscribe(data => {
      this.blocs = data;
      console.log(this.blocs);
    });
  }

  addBloc(): void {
    this.blocService.addBloc(this.selectedBloc).subscribe(() => {
      this.loadBlocs();
      this.resetForm();
    });
  }

  updateBloc(): void {
    if (this.selectedBloc.idBloc) {
      this.blocService.updateBloc(this.selectedBloc).subscribe(() => {
        this.loadBlocs();
        this.resetForm();
      });
    }
  }

  deleteBloc(id: number): void {
    this.blocService.deleteBloc(id).subscribe(() => {
      this.loadBlocs();
    });
  }

  editBloc(bloc: Bloc): void {
    this.selectedBloc = { ...bloc };
    this.showForm = true;
    this.isEditing = true;
  }

  submitForm(): void {
    if (this.isEditing) {
      this.updateBloc();
    } else {
      this.addBloc();
    }
  }

  resetForm(): void {
    this.selectedBloc = {} as Bloc;
    this.showForm = false;
    this.isEditing = false;
  }
}
