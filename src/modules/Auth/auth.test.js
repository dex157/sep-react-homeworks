import reducer from './auth';
import { addKey } from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer auth', () => {
  const state0 = reducer(undefined, randomAction);

  describe('action addKey', () => {
    it('Добавляет ключ в reducer apiKey', () => {
      const testValue = '123';
      const state1 = reducer(state0, addKey(testValue));

      expect(state1.apiKey).toBe(testValue);
    });
  });
});
