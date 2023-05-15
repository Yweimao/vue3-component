// 用来整合组件的 最终实现导出组件

import _Icon from "./src/icon.vue";
import { withInstall } from "@yeweimao/utils/with-install";
const Icon = withInstall(_Icon);
export default Icon;

export * from "./src/icon";

// 这里添加的类型 可以在模版中被解析
declare module "vue" {
  export interface GlobalComponents {
    // 我们的接口可以自动合并
    ZIcon: typeof Icon;
  }
}
