import {OpinionsModule} from './opinions.module';

describe('OpinionsModule', () => {
  let opinionsModule: OpinionsModule;

  beforeEach(() => {
    opinionsModule = new OpinionsModule();
  });

  it('should create an instance', () => {
    expect(opinionsModule).toBeTruthy();
  });
});
