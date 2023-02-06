import indicator from '../indicators';

test.each([
  [
    {
      name: 'Маг',
      health: 80,
    },
    'healthy',
  ],
  [
    {
      name: 'Var',
      health: 30,
    },
    'wounded',
  ],
  [
    {
      name: 'Car',
      health: 5,
    },
    'critical',
  ],
])('testing indicator function', (object, expected) => {
  const result = indicator(object);
  expect(result).toBe(expected);
});
