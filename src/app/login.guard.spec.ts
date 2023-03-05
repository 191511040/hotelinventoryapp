import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LoginGuard } from './guards/login.guard';



describe('LoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[AppModule,LoginGuard]
    });
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
