const parseComponentRef = require('../parseComponentRef');

describe('parseComponentRef', () => {
  it('文字列を渡した場合、配列に変換されること', () => {
    const ref = '#/components/schemas/MockItem';
    const result = parseComponentRef(ref);

    expect(result).toEqual(['components', 'schemas', 'MockItem']);
  })

  it('配列を渡した場合、そのまま返却されること', () => {
    const ref = ['components', 'schemas', 'MockItem'];
    const result = parseComponentRef(ref);

    expect(result).toEqual(ref);
  })
});