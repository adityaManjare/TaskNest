import { Test, TestingModule } from '@nestjs/testing';
import { userService } from './user.service';

describe('User', () => {
  let provider: userService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [userService],
    }).compile();

    provider = module.get<userService>(userService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
