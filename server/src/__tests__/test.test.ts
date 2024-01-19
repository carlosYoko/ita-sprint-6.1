function addNumbers(a: number, b: number): number {
  return a + b;
}

describe('Test de testing', () => {
  test('Deberia sumar 6 + 6 y devolver 12', () => {
    expect(addNumbers(6, 6)).toBe(12);
  });
});
