const html2pug = require('html2pug');

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}


module.exports = {
  test(value) {
    return isString(value);
  },

  print(value, serialize) {
    if (isString(value)) {
      return html2pug(value, {
        doubleQuotes: true,
        fragment: true,
      });
    }

    return serialize(value);
  },
};
