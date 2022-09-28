import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditChannelComponent } from './form-edit-channel.component';

describe('FormEditChannelComponent', () => {
  let component: FormEditChannelComponent;
  let fixture: ComponentFixture<FormEditChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
