import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/PC/Desktop/New folder (4)/nuxt3-shop/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}