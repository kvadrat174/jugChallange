import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const request1 = {
  x: 2,
  y: 10,
  z: 4
}

const request2 = {
  x: 2,
  y: 10,
  z: 12
}

const request3 = {
  x: 2,
  y: 5,
  z: 6
}

const request4 = {
  x: 3,
  y: 5,
  z: 4
}

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {

    it('should contain answer with 4 steps solving', () => {
      const caseOne = appController.solve(request1)
      expect(caseOne).toHaveProperty('fastestWay')
      expect(Object.keys(caseOne['fastestWay'])).toHaveLength(4)
    });

    it('should return "No Solution" because Z is bigger than X and Y', () => {
      const caseOne = appController.solve(request2)
      expect(caseOne).toEqual("No Solution")
    });

    it('should return "No Solution" because it could not be solved', () => {
      const caseOne = appController.solve(request3)
      expect(caseOne).toEqual("No Solution")
    });

    it('should contain answer with 8 steps solving', () => {
      const caseOne = appController.solve(request4)
      expect(caseOne).toHaveProperty('fastestWay')
      expect(Object.keys(caseOne['fastestWay'])).toHaveLength(8)
    });

  });

});
