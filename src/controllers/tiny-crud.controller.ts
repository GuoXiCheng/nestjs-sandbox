import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { createRequest } from 'tiny-crud';
import { AxiosRequest } from 'tiny-crud/dist/request-lib/axios/axios-request';

@Controller('/tiny-crud')
export class TinyCRUDController {
    private readonly githubRequest: AxiosRequest;
    constructor(private configService: ConfigService) {
        this.githubRequest = createRequest({
            httpLib: 'axios',
            httpClient: axios,
            accessToken: this.configService.get('TEST_GITHUB_TOKEN') as string,
        
            platform: 'github',
            owner: this.configService.get('TEST_GITHUB_OWNER') as string,
            repo: this.configService.get('TEST_GITHUB_REPO') as string,
        }) as AxiosRequest;
    }
    
    @Get('/')
    async findAll(): Promise<string> {
        const result = await this.githubRequest.authenticate();
        console.log(result);
        return 'This action returns all cats';
    }
}
