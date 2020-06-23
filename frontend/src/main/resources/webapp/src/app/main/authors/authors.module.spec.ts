import {AuthorsModule} from './authors.module';

describe('AuthorsModule', () => {
  let authorsModule: AuthorsModule;

  beforeEach(() => {
    authorsModule = new AuthorsModule();
  });

  it('should create an instance', () => {
    expect(authorsModule).toBeTruthy();
  });
});
