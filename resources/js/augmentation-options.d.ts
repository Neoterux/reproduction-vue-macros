import type Vue from 'vue'
// Agumentation example for vue options

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        $exampleProp: string
    }
}
