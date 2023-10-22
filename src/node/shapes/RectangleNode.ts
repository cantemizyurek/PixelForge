import ColoredNode, { Color } from '../ColoredNode'
import Dimension from '../../geometry/Dimension'
import Vertex2D from '../../geometry/Vertex2D'

export default abstract class RectangleNode extends ColoredNode {
  size: Dimension

  constructor(position: Vertex2D, color: Color, size: Dimension) {
    super(position, color)
    this.size = size
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx)
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    )
  }

  getBounds(): [Vertex2D, Vertex2D, Vertex2D, Vertex2D] {
    return [
      this.position,
      new Vertex2D(this.position.x + this.size.width, this.position.y),
      new Vertex2D(
        this.position.x + this.size.width,
        this.position.y + this.size.height
      ),
      new Vertex2D(this.position.x, this.position.y + this.size.height),
    ]
  }

  getCenter(): Vertex2D {
    return new Vertex2D(
      this.position.x + this.size.width / 2,
      this.position.y + this.size.height / 2
    )
  }
}
