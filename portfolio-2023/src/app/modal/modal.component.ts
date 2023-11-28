import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() showModal: boolean = false;
  @Input() selectedCardId: string = '';
  @Input() modalId: string = '';
  @Input() cardId: string = '';
  @Output() modalClosed= new EventEmitter<void>();

  onCloseClick() {
    this.showModal = false;
    this.modalClosed.emit();
  }
}
