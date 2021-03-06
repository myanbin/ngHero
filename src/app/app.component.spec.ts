import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, CoreModule ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});

describe('Custom Test', () => {
  it('should 1 + 1 = 2', () => {
    expect(1 + 1).toBe(2);
  });
});