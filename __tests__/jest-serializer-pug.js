const jestSerializerPug = require('../jest-serializer-pug');

expect.addSnapshotSerializer(jestSerializerPug);

it('should work on HTML', () => {
  expect('<div></div>').toMatchInlineSnapshot('div');
});
