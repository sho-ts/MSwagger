const getComponent = require('../getComponent');

describe('getComponent Test', () => {
  it('正しく取得できること', () => {
    const mockItem = {
      type: 'object',
      properties: {
        message: 'here',
      }
    }
    const schema = {
      components: {
        schemas: {
          MockItem: mockItem
        }
      }
    }
    const ref = '#/components/schemas/MockItem';
    const result = getComponent(schema, ref);

    expect(result).toEqual(mockItem);
  });
})