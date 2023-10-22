import ColoredNode, { Color } from '../ColoredNode'
import Vertex2D from '../../geometry/Vertex2D'

export default abstract class CircleNode extends ColoredNode {
  radius: number

  constructor(position: Vertex2D, color: Color, radius: number) {
    super(position, color)
    this.radius = radius
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx)
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
    ctx.fill()
  }

  getBounds(): [Vertex2D, Vertex2D, Vertex2D, Vertex2D] {
    return [
      new Vertex2D(
        this.position.x - this.radius,
        this.position.y - this.radius
      ),
      new Vertex2D(
        this.position.x + this.radius,
        this.position.y - this.radius
      ),
      new Vertex2D(
        this.position.x + this.radius,
        this.position.y + this.radius
      ),
      new Vertex2D(
        this.position.x - this.radius,
        this.position.y + this.radius
      ),
    ]
  }

  getCenter(): Vertex2D {
    return this.position
  }
}
