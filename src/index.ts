import { App } from "vue"
import LText from "./components/LText"
import LImage from "./components/LImage"
const components = [
  LText,
  LImage
]

//所有组件进行导入导出
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  LText,
  LImage,
  install
}

export default {
  install
}