/**
 * Represents a 2D vertex with x and y coordinates.
 */
export default class Vertex2D {
  /**
   * The x coordinate of the vertex.
   */
  x: number
  /**
   * The y coordinate of the vertex.
   */
  y: number

  /**
   * Creates a new instance of Vertex2D.
   * @param x - The x coordinate of the vertex.
   * @param y - The y coordinate of the vertex.
   */
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  /**
   * Returns a string representation of the vertex in the format "(x, y)".
   * @returns A string representation of the vertex.
   */
  toString(): string {
    return `(${this.x}, ${this.y})`
  }
}
