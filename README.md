NOTE: This package is in maintanance mode. I'll merge in security updates but I won't be doing much else with it, and I don't think anybody but me is using it.

# script-tag-wrapper-webpack-plugin

Webpack plugin to take compiled modules and wrap them in `<script>` tags. I built this for a very specific usecase, so it's probably not that useful to most people.

## Usage

webpack.config.js
```js
const ScriptTagWrapper = require('@tdukart/script-tag-wrapper-webpack-plugin');
module.exports = {
  plugins: [
    ScriptTagWrapper,
  ],
}
```

On run, it will output all modules as `[name].txt` with `<script>` tags, ready for your workflow.
