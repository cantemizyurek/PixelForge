import Node from './Node'
import Vertex2D from '../geometry/Vertex2D'

export interface Color {
  green: number
  blue: number
  red: number
}

export default abstract class ColoredNode extends Node {
  color: Color

  constructor(position: Vertex2D, color: Color) {
    super(position)
    this.color = color
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = `rgb(${this.color.red}, ${this.color.green}, ${this.color.blue})`
  }
}
