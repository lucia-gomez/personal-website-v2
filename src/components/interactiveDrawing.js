import { useEffect, useRef } from "react"

export default function InteractiveDrawing() {
  const canvasRef = useRef()
  const p5Instance = useRef()

  const initialize = () => {
    p5Instance.current = new window.p5(p5 => sketch(p5, canvasRef.current))

    setTimeout(() => {
      document.elementFromPoint(0, 0).click()
    }, 0)
  }

  useEffect(() => {
    if (!window.p5) {
      console.error("p5 not loaded. loading it...")
      const script = document.createElement("script")
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"
      script.async = true
      document.body.appendChild(script)
      script.addEventListener("load", () => {
        initialize()
      })
    }

    if (window.p5) {
      initialize()
    } else {
      console.error("p5 not loaded")
    }
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove()
      }
    }
  }, [])
  return <div ref={canvasRef}></div>
}

function sketch(p5, parent) {
  let img
  let pixelation = 4
  let dotSize
  let cells = [] // Array to store cell information
  let numClicks = 0

  let time = 0
  const timeIncrement = 0.0005
  let seedOffset = 866

  let isTransitioning = false
  let transitionSpeed = 0.2
  let transitionStartTime

  // Define the minimum and maximum values for the p5.noise scale
  let minNoiseScale = 0.0005
  let maxNoiseScale = 0.003
  let noiseScale = 0.001

  let repelStrengthIncrement = 0.5
  let repelStrengthMax = 2.0
  let repelStrength = repelStrengthMax

  let centerX, centerY, maxDistanceFromCenter

  let offsetX, offsetY

  p5.preload = () => {
    img = p5.loadImage("dots.jpg")
  }

  p5.setup = () => {
    p5.noiseSeed(47552.60000002384)

    let heightScale = 2,
      widthScale = 2
    dotSize = 2
    offsetX = 100
    offsetY = 50
    if (p5.windowWidth < 450) {
      dotSize = 2
      widthScale = 2.5
      heightScale = 2
      offsetX = -50
      offsetY = -100
    }
    let canvasWidth = p5.windowWidth * widthScale
    let canvasHeight = p5.windowHeight * heightScale

    p5.createCanvas(canvasWidth, canvasHeight)
      .position(
        (p5.windowWidth - canvasWidth) / widthScale,
        (p5.windowHeight - canvasHeight) / heightScale
      )
      .parent(parent)
    p5.noSmooth()

    // Initialize the cells array with color and position
    for (let y = 0; y < img.height * 0.75; y += 3 * pixelation) {
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
    seedOffset = numClicks < 2 ? 711 : Math.floor(p5.random() * 1000)
    transitionStartTime = p5.millis()
    isTransitioning = true
    repelStrength = 0
    numClicks++
  }

  function displayCells() {
    for (let cell of cells) {
      p5.fill(cell.color)
      p5.ellipse(cell.x + offsetX, cell.y + offsetY, dotSize, dotSize)
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
