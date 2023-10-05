import 'grapesjs/dist/css/grapes.min.css'
import grapesjs from 'grapesjs'

import { createApp } from 'vue'
import CustomPanel from './CustomPanel.vue'

/**
 * @param {import("grapesjs").Editor} editor
 */
function example(editor) {
  const panel = editor.Panels.addPanel({ id: 'custom-panel' })
  editor.onReady(() => {
    console.log('Panel el:', panel.view.el)
    createApp(CustomPanel, { editor }).mount(panel.view.el)
  })
}

grapesjs.init({
  container: '#gjs',
  height: '100vh',
  storageManager: false,
  plugins: [
    example,
  ],
})
