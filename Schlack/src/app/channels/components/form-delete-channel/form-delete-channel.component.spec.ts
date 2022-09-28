import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteChannelComponent } from './form-delete-channel.component';

describe('FormDeleteChannelComponent', () => {
  let component: FormDeleteChannelComponent;
  let fixture: ComponentFixture<FormDeleteChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDeleteChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDeleteChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
