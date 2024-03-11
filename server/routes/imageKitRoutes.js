const express = require("express")
const fs = require("fs")
const https = require("https")
const ImageKit = require("imagekit")
const { compressFile, splitFileNameAndExtension } = require("../fileUtil")

const router = express.Router()

const imagekit = new ImageKit({
  publicKey: "public_CJFqG4/4bWXjKN1kfmDaT7UlKC4=",
  privateKey: process.env.IMAGEKIT_PRIVATE,
  urlEndpoint: "https://ik.imagekit.io/5xtlzx2c3y",
})
console.log("DEBUG", "imagekit")

/* istanbul ignore next */
router.get("/auth", (req, res) => {
  const authParams = imagekit.getAuthenticationParameters()
  res.status(200).send(authParams)
})

/* istanbul ignore next */
router.post("/", (req, res) => {
  const path = req.body.path
  imagekit.listFiles({ path }, function (error, result) {
    if (error) {
      console.log(error)
      res.send(error)
    } else {
      res.send(result)
    }
  })
})

router.post("/upload", (req, res) => {
  const [fileName, fileExtension] = splitFileNameAndExtension(req.body.filename)
  const imageKitFolder = req.body.imageKitFolder

  fs.readFile(
    "./corgi.jpeg",
    { encoding: "base64" },
    async (err, base64Data) => {
      if (err) {
        console.error(err)
        res
          .status(500)
          .send("ImageKit upload error, couldn't read received file: " + err)
      }

      // create temp file for received data
      const tmpFilePath = "./tmp." + fileExtension
      const compressionResult = await compressFile(
        base64Data,
        tmpFilePath,
        fileExtension
      )

      fs.readFile(compressionResult.outputFileName, (readErr, outputFile) => {
        if (readErr) {
          console.error(readErr)
          res.status(500).send("Error reading compressed file:", readErr)
        }

        imagekit
          .upload({
            file: outputFile,
            fileName,
            folder: imageKitFolder,
            useUniqueFileName: false,
          })
          .then(uploadResult => {
            res
              .status(200)
              .send({ imageKitResult: uploadResult, stats: compressionResult })
          })
          .catch(uploadErr => {
            console.error(uploadErr)
            res.status(500).send("Error uploading to ImageKit:", uploadErr)
          })
      })
      fs.unlink(tmpFilePath, unlinkError => {
        if (unlinkError) {
          console.error(unlinkError)
        }
      })
      fs.unlink(compressionResult.outputFileName, unlinkError => {
        if (unlinkError) {
          console.error(unlinkError)
        }
      })
    }
  )
})

/* istanbul ignore next */
router.get("/usage", (req, res) => {
  const formatDate = date => date.toISOString().split("T")[0]
  const endDate = formatDate(new Date()) // today
  const startDate = formatDate(new Date(Date.now() - 864e5)) // yesterday

  const url = `https://api.imagekit.io/v1/accounts/usage?startDate=${startDate}&endDate=${endDate}`

  const httpRequest = https.request(
    url,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(process.env.IMAGEKIT_PRIVATE + ":").toString("base64"),
      },
    },
    response => {
      let responseData = ""

      response.on("data", chunk => {
        responseData += chunk
      })

      response.on("end", () => {
        res.status(200).json(JSON.parse(responseData))
      })
    }
  )

  httpRequest.on("error", error => {
    console.error("Error:", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  })

  httpRequest.end()
})

module.exports = router
