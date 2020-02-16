import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasDetalheComponent } from './receitas-detalhe.component';

describe('ReceitasDetalheComponent', () => {
  let component: ReceitasDetalheComponent;
  let fixture: ComponentFixture<ReceitasDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitasDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
