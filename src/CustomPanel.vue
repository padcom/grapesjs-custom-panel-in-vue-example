<template>
  {{ devices }}
</template>

<script lang="ts" setup>
import type { Editor } from 'grapesjs'
import { ref, type PropType, computed } from 'vue'

const props = defineProps({
  editor: { type: Object as PropType<Editor>, required: true },
})

const devices = computed(() => props.editor.Devices.getAll().map((device: any) => device.id))
</script>

<style>
/**
 * This name is detived from the ID of the panel as given during panel creation,
 * for example: editor.Panels.addPanel({ id: 'custom-panel' })
 */
.gjs-pn-custom-panel {
  left: 200px;
  height: 40px;

  display: flex;
  align-items: center;
}
</style>
