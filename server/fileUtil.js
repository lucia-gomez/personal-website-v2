const fs = require("fs")
const sharp = require("sharp")

const OUTPUT_FILE_PREFIX = "./tmp."

function splitFileNameAndExtension(fileName) {
  const dotIdx = fileName.lastIndexOf(".")
  const name = fileName.substring(0, dotIdx)
  const extension = fileName.substring(dotIdx + 1).toLowerCase()
  return [name, extension]
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

async function compressPng(inputPath, outputPath) {
  return sharp(inputPath).webp({ quality: 50 }).toFile(outputPath)
}

async function compressJpeg(inputPath, outputPath) {
  return sharp(inputPath).jpeg({ quality: 50 }).toFile(outputPath)
}

async function noCompress(inputPath, outputPath) {
  return sharp(inputPath).toFile(outputPath)
}

function compressedFileName(fileType, fileExtension) {
  let name = OUTPUT_FILE_PREFIX
  switch (fileType) {
    case "image/png":
      name += "webp"
      break
    default:
      name += fileExtension
  }
  return name
}

async function compressFile(originalName, fileExtension, fileType) {
  const originalSize = await getFileSizeAsync(originalName)

  return new Promise((resolve, reject) => {
    let fn
    switch (fileType) {
      case "image/png":
        fn = compressPng
        break
      case "image/jpg":
      case "image/jpeg":
        fn = compressJpeg
        break
      default:
        fn = noCompress
    }

    const outputPath = compressedFileName(fileType, fileExtension)
    fn(originalName, outputPath)
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
