const html2pug = require('html2pug');

/**
 * @param {unknown} value
 * @returns {value is string}
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * @param {unknown} value
 * @returns {value is Element}
 */
function isHTML(value) {
  return value instanceof Element;
}


module.exports = {
  test(value) {
    return isString(value) || isHTML(value);
  },

  print(value) {
    const options = { doubleQuotes: true, fragment: true };

    if (isHTML(value)) {
      return html2pug(value.outerHTML, options);
    }

    return html2pug(value, options);
  },
};
