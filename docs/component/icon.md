# Icon 图标

z-ui 推荐使⽤ xicons 作为图标库。

```
$ pnpm install @vicons/ionicons5
```

## 使⽤图标

- 如果你想像⽤例⼀样直接使⽤，你需要全局注册组件，才能够
  直接在项⽬⾥使⽤。

<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5'
</script>

<ZIcon color="red" size="40"> <CashOutline/></ZIcon>
<ZIcon color="green" size="40"> <CashOutline/></ZIcon>
<ZIcon color="blue" size="40"> <CashOutline/></ZIcon>

<ZIcon color="red" size="60"><CashOutline/></ZIcon>

```vue
<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5'
</script>
<template>
  <ZIcon color="red" size="40"> <CashOutline /> </ZIcon>
</template>
```

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
|       |
| color | string           | undefined | 图标颜⾊ |
|       |
| size  | number \| string | undefined | 图⽚⼤⼩ |
