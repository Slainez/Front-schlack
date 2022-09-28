import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <p>Hello, {{ name }}!</p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() name!: string;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}