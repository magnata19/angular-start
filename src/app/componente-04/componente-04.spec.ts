import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente04 } from './componente-04';

describe('Componente04', () => {
  let component: Componente04;
  let fixture: ComponentFixture<Componente04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente04]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
