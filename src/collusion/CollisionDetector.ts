/* eslint-disable complexity */
import Collisional from './Collisional'

interface Box {
  xMin: number
  xMax: number
  yMin: number
  yMax: number
}

/**
 * Detects collisions between collisional objects.
 */
export default class CollisionDetector {
  /**
   * Checks for collisions between the given collisional objects.
   * @param nodes The collisional objects to check for collisions.
   */
  check(nodes: Collisional[] = []): void {
    nodes.forEach(node1 => {
      // eslint-disable-next-line max-nested-callbacks
      nodes.forEach(node2 => {
        if (node1 !== node2 && this.isColliding(node1, node2)) {
          node1.onCollide(node2)
        }
      })
    })
  }

  /**
   * Checks if two collisional objects are colliding.
   * @param node1 The first collisional object.
   * @param node2 The second collisional object.
   * @returns True if the objects are colliding, false otherwise.
   */
  private isColliding(node1: Collisional, node2: Collisional): boolean {
    const box1 = this.getBox(node1)
    const box2 = this.getBox(node2)

    return this.checkCollision(box1, box2)
  }

  /**
   * Checks if two boxes are colliding.
   * @param box1 The first box.
   * @param box2 The second box.
   * @returns True if the boxes are colliding, false otherwise.
   */
  private checkCollision(box1: Box, box2: Box): boolean {
    const xOverlap = this.checkXCollision(box1, box2)
    const yOverlap = this.checkYCollision(box1, box2)

    return xOverlap && yOverlap
  }

  /**
   * Checks if two boxes are colliding on the x-axis.
   * @param box1 The first box.
   * @param box2 The second box.
   * @returns True if the boxes are colliding on the x-axis, false otherwise.
   */
  private checkXCollision(box1: Box, box2: Box): boolean {
    return box1.xMax >= box2.xMin && box1.xMin <= box2.xMax
  }

  /**
   * Checks if two boxes are colliding on the y-axis.
   * @param box1 The first box.
   * @param box2 The second box.
   * @returns True if the boxes are colliding on the y-axis, false otherwise.
   */
  private checkYCollision(box1: Box, box2: Box): boolean {
    return box1.yMax >= box2.yMin && box1.yMin <= box2.yMax
  }

  /**
   * Gets the bounding box of a collisional object.
   * @param node The collisional object.
   * @returns The bounding box of the object.
   */
  private getBox(node: Collisional): Box {
    const [a, b, c, d] = node.getBounds()
    return {
      xMin: Math.min(a.x, b.x, c.x, d.x),
      xMax: Math.max(a.x, b.x, c.x, d.x),
      yMin: Math.min(a.y, b.y, c.y, d.y),
      yMax: Math.max(a.y, b.y, c.y, d.y),
    }
  }
}
