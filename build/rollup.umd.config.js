
import basicConfig, { name, file } from './rollup.config'
export default {
  ...basicConfig,
  output: {
    name: 'ZYLegoComponents',
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'vue',
      'lodash-es': '_'
    },
    exports: 'named'
  }
}