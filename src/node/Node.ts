/* eslint-disable max-lines */
import Vertex2D from '../geometry/Vertex2D'
import { Drawable } from '../canvas/Canvas'
import Collisional from '../collusion/Collisional'
import Engine from '../engine/Engine'
import { CollisionDirection } from '../collusion/CollisionDetector'

/**
 * The abstract Node class represents a node in a game or application.
 * @abstract
 */
export default abstract class Node implements Drawable, Collisional {
  /**
   * The position of the node.
   */
  position: Vertex2D

  engine: Engine | null = null

  /**
   * Creates a new Node instance.
   * @param position - The position of the node.
   */
  constructor(position: Vertex2D) {
    this.position = position
  }

  /**
   * Draws the node on a canvas context.
   * @param ctx - The canvas rendering context to draw on.
   */
  abstract draw(ctx: CanvasRenderingContext2D): void

  /**
   * Updates the node's state.
   * @param deltaTime - The time elapsed since the last update.
   */
  abstract update(deltaTime: number): void

  /**
   * Handles keydown events on the node.
   * @param e - The key event.
   */
  abstract onKeydown(e: string): void

  /**
   * Handles keyup events on the node.
   * @param e - The key event.
   */
  abstract onKeyup(e: string): void

  /**
   * Handles collision events on the node.
   * @param target - The collisional target.
   */
  abstract onCollide(target: Collisional, direction: CollisionDirection): void

  /**
   * Returns the bounding vertices of the node.
   * @returns An array of vertices representing the bounding box of the node.
   */
  abstract getBounds(): [Vertex2D, Vertex2D, Vertex2D, Vertex2D]

  /**
   * Returns the center vertex of the node.
   * @returns The center vertex of the node.
   */
  abstract getCenter(): Vertex2D

  /**
   * Sets the engine for the node.
   * @param engine - The engine to set.
   */
  setEngine(engine?: Engine): void {
    if (engine) {
      this.engine = engine
    } else {
      this.engine = null
    }
  }

  /**
   * Destroys the node and removes it from the engine.
   */
  destroy(): void {
    if (this.engine) {
      this.engine.removeNode(this)
    }
  }
}
