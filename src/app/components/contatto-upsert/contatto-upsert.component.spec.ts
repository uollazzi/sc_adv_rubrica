import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattoUpsertComponent } from './contatto-upsert.component';

describe('ContattoUpsertComponent', () => {
  let component: ContattoUpsertComponent;
  let fixture: ComponentFixture<ContattoUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContattoUpsertComponent]
    });
    fixture = TestBed.createComponent(ContattoUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
