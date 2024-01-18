import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AxiosRequest, createRequest } from 'tiny-crud';
import axios from 'axios';

export let GithubRequest: AxiosRequest;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  GithubRequest = createRequest({
    httpLib: 'axios',
    httpClient: axios,
    accessToken: configService.get('TEST_GITHUB_TOKEN') as string,

    platform: 'github',
    owner: configService.get('TEST_GITHUB_OWNER') as string,
    repo: configService.get('TEST_GITHUB_REPO') as string,

    issueNumber: configService.get('TEST_GITHUB_NUMBER') as string
  }) as AxiosRequest;

  await app.listen(3000);
}
bootstrap();
