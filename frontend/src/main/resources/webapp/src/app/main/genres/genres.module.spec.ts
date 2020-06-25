import { GenresModule } from './genres.module';

describe('GenresModule', () => {
  let genresModule: GenresModule;

  beforeEach(() => {
    genresModule = new GenresModule();
  });

  it('should create an instance', () => {
    expect(genresModule).toBeTruthy();
  });
});
