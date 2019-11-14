import { Source } from 'webpack-sources';

// eslint-disable-next-line max-classes-per-file
class WrappedScript extends Source {
  constructor(scriptSource) {
    super();
    this.scriptSource = scriptSource;
  }

  size() {
    return this.source().length;
  }

  source() {
    return `<script>${this.scriptSource}</script>`;
  }
}

export default WrappedScript;
