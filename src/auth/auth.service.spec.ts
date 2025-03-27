import { Test, TestingModule } from '@nestjs/testing';
import { Authservice } from './auth.service';

describe('Auth', () => {
  let provider: Authservice;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Authservice],
    }).compile();

    provider = module.get<Authservice>(Authservice);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
