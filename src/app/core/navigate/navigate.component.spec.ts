import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { NavigateComponent } from './navigate.component';
import { AuthorizationService } from "../authorization/authorization.service";

describe('NavigateComponent', () => {
  let component: NavigateComponent;
  let fixture: ComponentFixture<NavigateComponent>;

  let authorizationService: AuthorizationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [ AuthorizationService ],
      declarations: [ NavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateComponent);
    component = fixture.componentInstance;

    authorizationService = TestBed.get(AuthorizationService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct title', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain(component.title);
  });

  it('should display logout', () => {
    let compiled = fixture.debugElement.nativeElement;
    authorizationService.isLoggedIn = true;
    fixture.detectChanges();
    expect(compiled.querySelector('.nav-end').textContent).toContain('注销');
  });

  it('should display logoin', () => {
    let compiled = fixture.debugElement.nativeElement;
    authorizationService.isLoggedIn = false;
    fixture.detectChanges();
    expect(compiled.querySelector('.nav-end').textContent).toContain('登录');
  });
});
