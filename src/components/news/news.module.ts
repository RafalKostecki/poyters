import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';


@Module({
  imports: [],
  providers: [NewsService],
  exports: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}