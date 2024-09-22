<template>
    <div>
        Hello World
        {{ refWithMacro }}
    </div>
</template>

<script setup lang="ts">

const refWithMacro = $ref('hola')
</script>
