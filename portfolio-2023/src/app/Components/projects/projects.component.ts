import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{

  showModal: boolean = false;
  selectedCardId: number | null = null;
  modalPosition: { top: string, bottom: string } = { top: '0', bottom: '0' };


  calculateModalPosition(event: MouseEvent) {
    if (event.target instanceof HTMLElement) {
      const cardRect = event.target.getBoundingClientRect();
      this.modalPosition.top = `${cardRect.top}px`;
      this.modalPosition.bottom = `${cardRect.bottom}px`;
    }
  }

  openModal(cardId: number, event:MouseEvent) {
    this.selectedCardId = cardId;
    this.calculateModalPosition(event);
    this.showModal = true;
    console.log("open modal");
  }

  closeModal() {
    this.showModal = false;
    this.selectedCardId = null;
  }
}





