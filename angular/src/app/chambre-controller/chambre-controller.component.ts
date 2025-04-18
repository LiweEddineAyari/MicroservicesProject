import { Component, OnInit } from '@angular/core';
import { Chambre, TypeChambre } from '../model/chambre.model';
import { ChambreService } from '../services/chambre.service';
import { Bloc } from '../model/bloc.model';
import { BlocService } from '../services/bloc.service';

@Component({
  selector: 'app-chambrecontroler',
  templateUrl: './chambre-controller.component.html'
})
export class ChambreControllerComponent implements OnInit {
  chambres: Chambre[] = [];
  selectedChambre: Chambre = {} as Chambre;
  showForm = false;
  isEditing = false;
  blocs: Bloc[] = [];
  typeOptions = Object.values(TypeChambre);

  constructor(
    private chambreService: ChambreService,
    private blocService: BlocService
  ) {}

  ngOnInit(): void {
    this.loadChambres();
    this.loadBlocs();
  }

  loadChambres(): void {
    this.chambreService.getAllChambres().subscribe(data => {
      this.chambres = data;
    });
  }

  loadBlocs(): void {
    this.blocService.getAllBlocs().subscribe({
      next: (data) => this.blocs = data,
      error: (err) => console.error('Error loading blocs:', err)
    });
  }

  addChambre(): void {
    this.chambreService.addChambre(this.selectedChambre).subscribe(() => {
      this.loadChambres();
      this.resetForm();
    });
  }

  updateChambre(): void {
    if (this.selectedChambre.idChambre) {
      this.chambreService.updateChambre(this.selectedChambre).subscribe(() => {
        this.loadChambres();
        this.resetForm();
      });
    }
  }

  deleteChambre(id: number): void {
    this.chambreService.deleteChambre(id).subscribe(() => {
      this.loadChambres();
    });
  }

  editChambre(chambre: Chambre): void {
    this.selectedChambre = { ...chambre };
    this.showForm = true;
    this.isEditing = true;
  }

  submitForm(): void {
    if (this.isEditing) {
      this.updateChambre();
    } else {
      this.addChambre();
    }
  }

  resetForm(): void {
    this.selectedChambre = {} as Chambre;
    this.showForm = false;
    this.isEditing = false;
  }
}