// universite-controller.component.ts
import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-universite-controller',
  templateUrl: './etudiant-controller.component.html'
})
export class EtudiantControllerComponent implements OnInit {
  etudiants: Etudiant[] = [];
  selectedEtudiant: Etudiant = {} as Etudiant;
  showForm = false;
  isEditing = false;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants(): void {
    this.etudiantService.getAllEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }

  addEtudiant(): void {
    this.etudiantService.addEtudiant(this.selectedEtudiant).subscribe(() => {
      this.loadEtudiants();
      this.resetForm();
    });
  }

  updateEtudiant(): void {
    this.etudiantService.updateEtudiant(this.selectedEtudiant).subscribe(() => {
      this.loadEtudiants();
      this.resetForm();
    });
  }

  deleteEtudiant(id: number): void {
    this.etudiantService.deleteEtudiant(id).subscribe(() => {
      this.loadEtudiants();
    });
  }

  editEtudiant(etudiant: Etudiant): void {
    this.selectedEtudiant = { ...etudiant };
    this.showForm = true;
    this.isEditing = true;
  }

  submitForm(): void {
    if (this.isEditing) {
      this.updateEtudiant();
    } else {
      this.addEtudiant();
    }
  }

  resetForm(): void {
    this.selectedEtudiant = {} as Etudiant;
    this.showForm = false;
    this.isEditing = false;
  }
}