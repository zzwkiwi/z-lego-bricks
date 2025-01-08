import { App } from "vue"
import LText from "./LText.vue"
//单个组件进行导入导出
LText.install = (app: App) => {
  app.component(LText.name, LText)
}

export default LText