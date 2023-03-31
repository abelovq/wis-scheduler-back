import { Test, TestingModule } from '@nestjs/testing';
import { VacationMoneyController } from './vacation-money.controller';
import { VacationMoneyService } from './vacation-money.service';

describe('VacationMoneyController', () => {
  let controller: VacationMoneyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacationMoneyController],
      providers: [VacationMoneyService],
    }).compile();

    controller = module.get<VacationMoneyController>(VacationMoneyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
