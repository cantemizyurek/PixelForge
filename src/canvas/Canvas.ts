import Camera from '../engine/Camera'
import Dimension from '../geometry/Dimension'

export interface Drawable {
  draw(ctx: CanvasRenderingContext2D): void
}

/**
 * Represents a canvas element with a 2D rendering context.
 */
export default class Canvas {
  private size: Dimension
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  /**
   * Creates a new Canvas instance.
   * @param canvas - The HTML canvas element to use.
   * @param size - The size of the canvas.
   */
  constructor(canvas: HTMLCanvasElement, size: Dimension) {
    this.size = size
    this.canvas = canvas
    this.canvas.width = size.width
    this.canvas.height = size.height
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
  }

  /**
   * Draws a drawable object onto the canvas.
   * @param drawable - The object to draw.
   */
  draw(drawable: Drawable, camera: Camera): void {
    this.ctx.save()
    this.ctx.translate(
      this.size.width / 2 - camera.position.x,
      this.size.height / 2 - camera.position.y
    )
    drawable.draw(this.ctx)
    this.ctx.restore()
  }

  /**
   * Clears the canvas.
   */
  clear(): void {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height)
  }
}
