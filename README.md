Setup inicial
1. yarn add -D styled-components
2. yarn add -D babel-plugin-styled-components
3. yarn add -D @types/styled-components

Para que pille typescript:
4. Instalar 'yarn add -D react-app-rewired'

https://stackoverflow.com/questions/49584827/setting-up-babel-plugin-styled-components-typescript-create-react-app
5. Instalar 'typescript-plugin-styled-components'
6. Crear 'config-overrides.js' en raiz del proyecto
```js
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = function override(config, env) {

const rule = config.module.rules.filter(l => l.oneOf)[0];
const tsLoader = rule.oneOf.filter(l => String(l.test) === String(/\.(ts|tsx)$/))[0];
tsLoader.use[0].options.getCustomTransformers = () => ({
before: [styledComponentsTransformer]
  });

return config;
}

```
