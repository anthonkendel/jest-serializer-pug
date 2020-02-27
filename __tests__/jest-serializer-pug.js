const jestSerializerPug = require('../jest-serializer-pug');
const html = require('../html');

expect.addSnapshotSerializer(jestSerializerPug);
test('type: string', () => {
  expect(html.string).toMatchSnapshot();
});

test('type: String', () => {
  expect(html.stringClass).toMatchSnapshot();
});

test('type: Element', () => {
  expect(html.element).toMatchSnapshot();
});
