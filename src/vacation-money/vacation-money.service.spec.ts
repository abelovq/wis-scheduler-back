import { Test, TestingModule } from '@nestjs/testing';
import { VacationMoneyService } from './vacation-money.service';

describe('VacationMoneyService', () => {
  let service: VacationMoneyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VacationMoneyService],
    }).compile();

    service = module.get<VacationMoneyService>(VacationMoneyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
