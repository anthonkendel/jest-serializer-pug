# [`jest-serializer-pug`](https://github.com/anthonkendel/jest-serializer-pug)

Pug Jest snapshot serializer

[![latest git version](https://img.shields.io/github/v/tag/anthonkendel/jest-serializer-pug?label=version)](https://github.com/anthonkendel/jest-serializer-pug)
[![latest npm version](https://img.shields.io/npm/v/jest-serializer-pug)](https://www.npmjs.com/package/jest-serializer-pug)
[![license](https://img.shields.io/github/license/anthonkendel/jest-serializer-pug)](https://github.com/anthonkendel/jest-serializer-pug/blob/master/LICENSE)
[![Actions](https://github.com/anthonkendel/jest-serializer-pug/workflows/Actions/badge.svg)](https://github.com/anthonkendel/jest-serializer-pug/actions)


## Installation

### Requirements

- `node` >= v10
- `npm` >= v5
- `jest` >= v22.x

```bash
npm install --save-dev jest-serializer-pug
```

## Usage

Once the `jest-serializer-pug` package is installed, you can use it by specifying the `jest-serializer-pug` serializer for the [`snapshotSerializers`](https://jestjs.io/docs/en/configuration#snapshotserializers-arraystring) property in the [Jest configuration](https://jestjs.io/docs/en/configuration).

```js
{
  "snapshotSerializers": ["jest-serializer-pug"]
}
```

The serializer support values that are of type [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element). Internally it uses [`html2pug`](https://github.com/izolate/html2pug) to convert HTML to Pug template.

## Contributing

If you want to contribute and make our project better, your help is very welcome.

Our contribution guide is right now a bit empty but will be improved in the future. If you have any requests or suggestions please create an issue with the necessary information and we will get back to you.

## License

[MIT © anthonkendel](https://choosealicense.com/licenses/mit/)
