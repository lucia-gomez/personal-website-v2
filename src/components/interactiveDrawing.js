import { ReactP5Wrapper } from "@p5-wrapper/react"

export default function InteractiveDrawing() {
  return <ReactP5Wrapper sketch={sketch} />
}

function sketch(p5) {
  let img
  let pixelation = 4
  let cells = [] // Array to store cell information
  let time = 0
  let seedOffset = 0
  let isTransitioning = false
  let transitionSpeed = 0.2
  let transitionStartTime

  // Define the minimum and maximum values for the p5.noise scale
  let minNoiseScale = 0.0005
  let maxNoiseScale = 0.004
  let noiseScale = maxNoiseScale

  const timeIncrement = 0.0005

  let repelStrengthIncrement = 0.5
  let repelStrengthMax = 2.0
  let repelStrength = repelStrengthMax

  let centerX, centerY, maxDistanceFromCenter

  p5.preload = () => {
    img = p5.loadImage("aurora.jpg")
  }

  p5.setup = () => {
    p5.noiseSeed(47552.60000002384)

    let heightScale = 2,
      widthScale = 2
    if (p5.windowWidth < 450) {
      widthScale = 3
      heightScale = 3
    }
    let canvasWidth = p5.windowWidth * widthScale
    let canvasHeight = p5.min(1200, p5.windowHeight * heightScale)

    p5.createCanvas(canvasWidth, canvasHeight).position(
      (p5.windowWidth - canvasWidth) / 2,
      (p5.windowHeight - canvasHeight) / 1.5
    )
    p5.noSmooth()

    // Initialize the cells array with color and position
    for (let y = 0; y < img.height; y += 3 * pixelation) {
      for (let x = 0; x < img.width; x += 3 * pixelation) {
        let color = img.get(x + pixelation / 2, y + pixelation / 2)
        cells.push({ x, y, color, originalX: x, originalY: y })
      }
    }

    centerX = p5.width / 2
    centerY = p5.height / 2
    maxDistanceFromCenter = p5.dist(0, 0, centerX, centerY)
    p5.noStroke()
  }

  p5.draw = () => {
    p5.clear()

    if (isMouseInBounds()) {
      let distanceFromCenter = p5.dist(p5.mouseX, p5.mouseY, centerX, centerY)
      noiseScale = p5.map(
        distanceFromCenter,
        0,
        maxDistanceFromCenter,
        minNoiseScale,
        maxNoiseScale
      )
    }
    time += timeIncrement

    if (!isTransitioning) {
      repelStrength = p5.min(
        repelStrength + repelStrengthIncrement,
        repelStrengthMax
      )
    }

    for (let cell of cells) {
      let noiseOffsetX = p5.noise(
        seedOffset + cell.originalX * noiseScale,
        cell.originalY * noiseScale,
        time
      )
      let noiseOffsetY = p5.noise(
        seedOffset + cell.originalY * noiseScale,
        cell.originalX * noiseScale,
        time
      )

      if (isTransitioning) {
        cell.x = p5.lerp(cell.x, noiseOffsetX * p5.width, transitionSpeed)
        cell.y = p5.lerp(cell.y, noiseOffsetY * p5.height, transitionSpeed)
      } else {
        cell.x = noiseOffsetX * p5.width
        cell.y = noiseOffsetY * p5.height
      }

      if (isMouseInBounds()) {
        let distanceToMouse = p5.dist(p5.mouseX, p5.mouseY, cell.x, cell.y)
        let repulsionFactor = p5.exp((-distanceToMouse / p5.width) * 15)
        let repelAmount = repelStrength * repulsionFactor

        cell.x = p5.lerp(cell.x, p5.mouseX, -repelAmount)
        cell.y = p5.lerp(cell.y, p5.mouseY, -repelAmount)
      }
    }

    if (isTransitioning && p5.millis() - transitionStartTime > 1500) {
      isTransitioning = false
      transitionStartTime = 0
    }

    displayCells()
  }

  p5.mouseClicked = () => {
    seedOffset = Math.floor(p5.random() * 1000)
    transitionStartTime = p5.millis()
    isTransitioning = true
    repelStrength = 0
  }

  function displayCells() {
    for (let cell of cells) {
      p5.fill(cell.color)
      p5.ellipse(cell.x + 100, cell.y + 100, 3, 3)
    }
  }

  function isMouseInBounds() {
    return (
      p5.mouseX > 0 &&
      p5.mouseX < p5.width &&
      p5.mouseY > 0 &&
      p5.mouseY < p5.height
    )
  }
}
