import { Test, TestingModule } from '@nestjs/testing';
import {MynefeshService} from "./app.service";

describe('MynefeshService', () => {
  let service: MynefeshService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MynefeshService],
    }).compile();

    service = module.get<MynefeshService>(MynefeshService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
