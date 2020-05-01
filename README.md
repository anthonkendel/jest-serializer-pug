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
- `jest` >= v22

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

## Example

### html

```html
<div>
  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
    <p class="help is-success">This username is available</p>
  </div>

  <div class="field">
    <label class="label">Message</label>
    <div class="control">
      <textarea class="textarea" placeholder="Textarea"></textarea>
    </div>
  </div>

  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" />
        I agree to the <a href="#">terms and conditions</a>
      </label>
    </div>
  </div>

  <div class="field">
    <div class="control">
      <label class="radio">
        <input type="radio" name="question" />
        Yes
      </label>
      <label class="radio">
        <input type="radio" name="question" />
        No
      </label>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</div>
```

### pug

```pug
div
  .field
    label.label Username
    .control.has-icons-left.has-icons-right
      input.input.is-success(type="text", placeholder="Text input", value="bulma")
      span.icon.is-small.is-left
        i.fas.fa-user
      span.icon.is-small.is-right
        i.fas.fa-check
    p.help.is-success This username is available
  .field
    label.label Message
    .control
      textarea.textarea(placeholder="Textarea")
  .field
    .control
      label.checkbox
        input(type="checkbox")
        |
I agree to the
        a(href="#") terms and conditions
  .field
    .control
      label.radio
        input(type="radio", name="question")
        |
Yes

      label.radio
        input(type="radio", name="question")
        |
No

  .field.is-grouped
    .control
      button.button.is-link Submit
    .control
      button.button.is-link.is-light Cancel
```

## Contributing

If you want to contribute and make our project better, your help is very welcome.

## License

[MIT © anthonkendel](https://choosealicense.com/licenses/mit/)
