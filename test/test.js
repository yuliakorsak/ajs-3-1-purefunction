import characterHealth from '../src/js/app';

/* eslint-env jest */
test.each([
  [{ name: 'Маг', health: 10 }, 'critical'],
  [{ name: 'Воин', health: 35 }, 'wounded'],
  [{ name: 'Маг', health: 60 }, 'healthy']
])('characterHealth() test', (input, expected) => {
  const result = characterHealth(input);
  expect(result).toBe(expected);
}); 