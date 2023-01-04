import { helloWorld } from './hello-world';

describe('typeScript test suite', () => {
  it('should return "Hello, World!"', () => {
    expect.assertions(1);
    expect(helloWorld()).toBe('Hello, World!');
  });
});
