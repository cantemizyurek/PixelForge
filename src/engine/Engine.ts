/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import Node from '../node/Node'
import Canvas from '../canvas/Canvas'
import CollusionDetector from '../collusion/CollisionDetector'
import Camera from './Camera'
import Listener from './Listener'

/**
 * The main game engine that manages the game loop, nodes, canvas, and collision detection.
 */
export default class Engine {
  private nodes: Node[] = []
  private canvas: Canvas
  private collusionDetector: CollusionDetector = new CollusionDetector()

  camera: Camera = new Camera({
    x: 0,
    y: 0,
  })

  private listener: Listener = new Listener(this.nodes, this.camera)

  private lastTime: number = 0

  /**
   * Creates an instance of Engine.
   * @param {Canvas} canvas - The canvas to draw on.
   */
  constructor(canvas: Canvas) {
    this.canvas = canvas
  }

  /**
   * Adds a node to the engine.
   * @param {Node} node - The node to add.
   */
  addNode(node: Node): void {
    this.nodes.push(node)
    node.setEngine(this)
  }

  /**
   * Removes a node from the engine.
   * @param {Node} node - The node to remove.
   */
  removeNode(node: Node): void {
    this.nodes = this.nodes.filter(n => n !== node)
    node.setEngine()
  }

  /**
   * The main game loop that updates and draws the nodes.
   */
  private loop(): void {
    this.update()
    this.draw()
  }

  /**
   * Starts the game loop.
   */
  start(): void {
    this.listener.keyDown()
    this.listener.keyUp()
    requestAnimationFrame(() => this.loop())
  }

  /**
   * Updates the nodes and checks for collisions.
   */
  private update(): void {
    const deltaTime = this.calculateDeltaTime()
    this.nodes.forEach(node => node.update(deltaTime))
    this.collusionDetector.check(this.nodes)
    requestAnimationFrame(() => this.loop())
  }

  /**
   * Clears the canvas and draws the nodes.
   */
  private draw(): void {
    this.canvas.clear()
    this.nodes.forEach(node => {
      this.canvas.draw(node, this.camera)
    })
  }

  /**
   * Calculates the time between frames.
   * @returns {number} - The time between frames in seconds.
   */
  private calculateDeltaTime(): number {
    const now = performance.now()
    const deltaTime = this.lastTime ? (now - this.lastTime) / 1000 : 0
    this.lastTime = now
    return deltaTime
  }
}
