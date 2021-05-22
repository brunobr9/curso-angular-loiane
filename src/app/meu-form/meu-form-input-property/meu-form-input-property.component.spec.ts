import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuFormInputPropertyComponent } from './meu-form-input-property.component';

describe('MeuFormInputPropertyComponent', () => {
  let component: MeuFormInputPropertyComponent;
  let fixture: ComponentFixture<MeuFormInputPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuFormInputPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuFormInputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
