import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { of } from 'rxjs';

describe('AuthService (modern)', () => {
  let service: AuthService;
  let httpSpy: Spy<HttpClient>;

  const baseUrl = `${environment.apiUrl}/auth`;

  beforeEach(() => {
    httpSpy = createSpyFromClass(HttpClient);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: HttpClient, useValue: httpSpy },
        provideHttpClient(withInterceptorsFromDi())
      ]
    });

    service = TestBed.inject(AuthService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar HttpClient POST no logout', () => {
    service.logout().subscribe();
    expect(httpSpy.post).toHaveBeenCalledWith(`${baseUrl}/logout`, {});
  });

  it('deve chamar HttpClient GET no getUser', () => {
    const dummyUser = { name: 'Maria', email: 'maria@example.com' };
    httpSpy.get.and.returnValue(of(dummyUser));

    service.getUser().subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    expect(httpSpy.get).toHaveBeenCalledWith(`${baseUrl}/me`);
  });

  it('deve redirecionar no loginWithProvider', () => {
    const provider = 'google';
    spyOnProperty(window, 'location').and.returnValue({ href: '' } as Location);
    service.loginWithProvider(provider);
    expect(window.location.href).toBe(`${baseUrl}/${provider}`);
  });
});
