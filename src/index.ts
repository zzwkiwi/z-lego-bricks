import { App } from "vue"
import LText from "./components/LText"
import LImage from "./components/LImage"
import LShape from "./components/LShape"
const components = [
  LText,
  LImage,
  LShape
]

//所有组件进行导入导出
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
//按需导出
export {
  LText,
  LImage,
  LShape,
  install
}
//全部导出
export default {
  install
}