import Vertex2D from '../geometry/Vertex2D'
import { CollisionDirection } from './CollisionDetector'

export default interface Collisional {
  getBounds(): [Vertex2D, Vertex2D, Vertex2D, Vertex2D]
  onCollide(node: Collisional, direction: CollisionDirection): void
}
