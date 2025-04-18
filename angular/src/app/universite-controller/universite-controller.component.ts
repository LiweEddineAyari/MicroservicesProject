// universite-controller.component.ts
import { Component, OnInit } from '@angular/core';
import { Universite } from '../model/universite.model';
import { UniversiteService } from '../services/universite.service';

@Component({
  selector: 'app-universite-controller',
  templateUrl: './universite-controller.component.html'
})
export class UniversiteControllerComponent implements OnInit {
  universites: Universite[] = [];
  selectedUniversite: Universite = {} as Universite;
  showForm = false;
  isEditing = false;

  constructor(private universiteService: UniversiteService) { }

  ngOnInit(): void {
    this.loadUniversites();
  }

  loadUniversites(): void {
    this.universiteService.getAllUniversites().subscribe(data => {
      this.universites = data;
    });
  }

  addUniversite(): void {
    this.universiteService.createUniversite(this.selectedUniversite).subscribe(() => {
      this.loadUniversites();
      this.resetForm();
    });
  }

  updateUniversite(): void {
    if (this.selectedUniversite._id) {
      this.universiteService.updateUniversite(this.selectedUniversite._id, this.selectedUniversite)
        .subscribe(() => {
          this.loadUniversites();
          this.resetForm();
        });
    }
  }

  deleteUniversite(id: string): void {
    this.universiteService.deleteUniversite(id).subscribe(() => {
      this.loadUniversites();
    });
  }

  editUniversite(universite: Universite): void {
    this.selectedUniversite = { ...universite };
    this.showForm = true;
    this.isEditing = true;
  }

  submitForm(): void {
    if (this.isEditing) {
      this.updateUniversite();
    } else {
      this.addUniversite();
    }
  }

  resetForm(): void {
    this.selectedUniversite = {} as Universite;
    this.showForm = false;
    this.isEditing = false;
  }
}