import { Component, OnInit } from '@angular/core';
import { Foyer } from '../model/foyer.model';
import { FoyerService } from '../services/foyer.service';

@Component({
  selector: 'app-foyer-controller',
  templateUrl: './foyer-controller.component.html',
})
export class FoyerControllerComponent implements OnInit {
  foyers: Foyer[] = [];
  selectedFoyer: Foyer = {} as Foyer;
  showForm = false;
  isEditing = false;

  constructor(private foyerService: FoyerService) {}

  ngOnInit(): void {
    this.loadFoyers();
  }

  loadFoyers(): void {
    this.foyerService.getAllFoyers().subscribe((data) => {
      this.foyers = data;
      console.log(this.foyers);
    });
  }

  addFoyer(): void {
    this.foyerService.addFoyer(this.selectedFoyer).subscribe(() => {
      this.loadFoyers();
      this.resetForm();
    });
  }

  updateFoyer(): void {
    this.foyerService.updateFoyer(this.selectedFoyer).subscribe(() => {
      this.loadFoyers();
      this.resetForm();
    });
  }

  deleteFoyer(id: number): void {
    this.foyerService.deleteFoyer(id).subscribe(() => {
      this.loadFoyers();
    });
  }

  editFoyer(foyer: Foyer): void {
    this.selectedFoyer = { ...foyer };
    this.showForm = true;
    this.isEditing = true;
  }

  submitForm(): void {
    if (this.isEditing) {
      this.updateFoyer();
    } else {
      this.addFoyer();
    }
  }

  resetForm(): void {
    this.selectedFoyer = {} as Foyer;
    this.showForm = false;
    this.isEditing = false;
  }
}
