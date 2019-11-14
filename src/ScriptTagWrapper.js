import WrappedScript from './WrappedScript';

class ScriptTagWrapperWebpackPlugin {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.afterCompile.tap('ScriptTagWrapperWebpackPlugin', (compilation) => {
      const assets = compilation.getAssets();
      assets.forEach((asset) => {
        // eslint-disable-next-line no-underscore-dangle
        const wrappedJs = new WrappedScript(asset.source._value);
        compilation.emitAsset(asset.name.replace('.js', '.txt'), wrappedJs);
      });
    });
  }
}

export default ScriptTagWrapperWebpackPlugin;
