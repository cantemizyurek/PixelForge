import Vertex2D from '../geometry/Vertex2D'

export default interface Collisional {
  getBounds(): [Vertex2D, Vertex2D, Vertex2D, Vertex2D]
  onCollide(node: Collisional): void
}
