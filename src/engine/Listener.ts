/* eslint-disable max-nested-callbacks */
import Node from '../node/Node'
import Camera from './Camera'

export default class Listener {
  private nodes: Node[]
  private camera: Camera

  private pressing: Set<string> = new Set()

  constructor(nodes: Node[], camera: Camera) {
    this.nodes = nodes
    this.camera = camera
  }

  keyDown(): void {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.pressing.has(e.key)) return
      this.pressing.add(e.key)
      this.nodes.forEach(node => node.onKeydown(e.key))
    })
  }

  keyUp(): void {
    window.addEventListener('keyup', (e: KeyboardEvent) => {
      this.pressing.delete(e.key)
      this.nodes.forEach(node => node.onKeyup(e.key))
    })
  }
}
