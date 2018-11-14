import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoBissextoComponent } from './ano-bissexto.component';

describe('AnoBissextoComponent', () => {
  let component: AnoBissextoComponent;
  let fixture: ComponentFixture<AnoBissextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnoBissextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoBissextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return success', () => {
    expect(component.anoBissexto(2000)).toBeTruthy(true);
  });

  it('should return error', () => {
    expect(component.anoBissexto(2000.44)).toBeTruthy(false);
  });

  it('should return false', () => {
    expect(component.anoBissexto(2001)).toBeTruthy(true);
  });

  it('should return XXX', () => {
    expect(component.converterNumerosRomanos(30)).toBeTruthy('XXX');
  });

  it('should return MM', () => {
    expect(component.converterNumerosRomanos(2000)).toBeTruthy('MM');
  });

  it('should return IV', () => {
    expect(component.converterNumerosRomanos(4)).toBeTruthy('IV');
  });
});
