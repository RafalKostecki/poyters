import { Test, TestingModule } from '@nestjs/testing';
import { NewsService } from './news.service';

describe('NewsService', () => {
  let provider: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsService],
    }).compile();

    provider = module.get<NewsService>(NewsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
