import { useEffect, useState } from "react"

import { Button } from "../button"
import EditorFileUploadPopup from "./editorFileUploadPopup"
import { ImageKitApi } from "../../scripts/api"
import ModalWrapper from "../modalPopup"
import Toast from "../toast"
import { formatBytes } from "../../scripts/util"
import styled from "styled-components"

const UploadModal = styled(ModalWrapper)`
  max-width: 70vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .modal-content {
    border-radius: 48px;
  }

  @media screen and (max-width: 876px) {
    max-width: inherit;
  }
`

export default function EditorFileUpload({ onUploadComplete }) {
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const [loading, setLoading] = useState(false)
  const [uploadResult, setUploadResult] = useState()

  useEffect(() => {
    if (uploadResult != null && uploadResult.data != null) {
      setShowToast(true)
    }
  }, [uploadResult])

  const insertMedia = (file, result) => {
    switch (file.type) {
      case "image/png":
      case "image/jpg":
      case "image/jpeg":
        return `![](${result.data.imageKitResult.url})`
      case "video/quicktime":
        return `<iframe style="aspect-ratio: 16/9" src="${result.data.imageKitResult.url}" frameborder="0" allowfullscreen muted>
</iframe>`
      default:
        return result.data.imageKitResult.url
    }
  }

  const onStartUpload = (file, imageKitFolder) => {
    if (file && imageKitFolder) {
      setLoading(true)

      const formData = new FormData()
      formData.append("file", file)
      formData.append("fileName", file.name)
      formData.append("fileType", file.type)
      formData.append("imageKitFolder", imageKitFolder)

      ImageKitApi.upload(formData)
        .then(res => {
          console.log(res)
          setUploadResult(res)
          setLoading(false)
          setShowModal(false)
          onUploadComplete(insertMedia(file, res) + " ")
        })
        .catch(err => {
          console.error(err)
          setLoading(false)
        })
    }
  }

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Upload Media</Button>
      {showModal && (
        <UploadModal
          show={showModal}
          onHide={() => {
            setShowModal(false)
          }}
          data-test-id="blog-post-upload-modal"
        >
          <EditorFileUploadPopup {...{ onStartUpload, loading }} />
        </UploadModal>
      )}
      {uploadResult != null && uploadResult.data != null && (
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <div>
            Uploaded {uploadResult.data.imageKitResult.name}:{" "}
            {formatBytes(uploadResult.data.stats?.originalSize)} to{" "}
            {formatBytes(uploadResult.data.stats?.compressedSize)}
          </div>
        </Toast>
      )}
    </>
  )
}
