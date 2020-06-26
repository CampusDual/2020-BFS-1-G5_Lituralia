import { PublishersModule } from './publishers.module';

describe('PublishersModule', () => {
  let publishersModule: PublishersModule;

  beforeEach(() => {
    publishersModule = new PublishersModule();
  });

  it('should create an instance', () => {
    expect(publishersModule).toBeTruthy();
  });
});
