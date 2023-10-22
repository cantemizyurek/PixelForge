import Vertex2D from '../geometry/Vertex2D'

export default class Camera {
  position: Vertex2D

  constructor(position: Vertex2D) {
    this.position = position
  }
}
