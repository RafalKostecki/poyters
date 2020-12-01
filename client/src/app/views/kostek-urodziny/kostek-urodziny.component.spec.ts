import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KostekUrodzinyComponent } from './kostek-urodziny.component';

describe('KostekUrodzinyComponent', () => {
  let component: KostekUrodzinyComponent;
  let fixture: ComponentFixture<KostekUrodzinyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostekUrodzinyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KostekUrodzinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
