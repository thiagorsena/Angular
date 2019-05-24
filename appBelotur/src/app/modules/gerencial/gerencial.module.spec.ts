import { GerencialModule } from './gerencial.module';

describe('GerencialModule', () => {
  let gerencialModule: GerencialModule;

  beforeEach(() => {
    gerencialModule = new GerencialModule();
  });

  it('should create an instance', () => {
    expect(gerencialModule).toBeTruthy();
  });
});
