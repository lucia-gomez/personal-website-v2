const { info } = require("console")
const fs = require("fs")
const sharp = require("sharp")

const OUTPUT_FILE_PREFIX = "./tmpProcessed."

function splitFileNameAndExtension(fileName) {
  const dotIdx = fileName.lastIndexOf(".")
  const name = fileName.substring(0, dotIdx)
  const extension = fileName.substring(dotIdx + 1).toLowerCase()
  return [name, extension]
}

function writeFileAsync(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, "binary", err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

function getFileSizeAsync(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        resolve(stats.size)
      }
    })
  })
}

async function writeAndGetSize(path, binary) {
  try {
    await writeFileAsync(path, binary)
    const fileSize = await getFileSizeAsync(path)
    return fileSize
  } catch (err) {
    console.error("Error writing tmp file and getting file size:", err)
    throw err
  }
}

async function compressPng(inputPath, outputPath) {
  return sharp(inputPath).webp({ quality: 50 }).toFile(outputPath)
}

async function compressJpeg(inputPath, outputPath) {
  return sharp(inputPath).jpeg({ quality: 50 }).toFile(outputPath)
}

async function noCompress(inputPath, outputPath) {
  return sharp(inputPath).toFile(outputPath)
}

function compressedFileName(extension) {
  let name = OUTPUT_FILE_PREFIX
  switch (extension) {
    case "png":
      name += "webp"
    default:
      name += extension
  }
  return name
}

async function compressFile(base64Data, inputPath, fileExtension) {
  const binaryData = Buffer.from(base64Data, "base64")
  const originalSize = await writeAndGetSize(inputPath, binaryData)

  return new Promise((resolve, reject) => {
    let fn
    switch (fileExtension) {
      case "png":
        fn = compressPng
        break
      case "jpg":
      case "jpeg":
        fn = compressJpeg
        break
      default:
        fn = noCompress
    }

    const outputPath = compressedFileName(fileExtension)
    fn(inputPath, outputPath)
      .then(info => {
        const res = {
          originalSize,
          compressedSize: info?.size,
          outputFileName: outputPath,
        }
        resolve(res)
      })
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

module.exports = { compressFile, splitFileNameAndExtension }
