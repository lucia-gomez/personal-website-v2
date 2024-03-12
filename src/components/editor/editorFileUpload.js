import { Button } from "../button"
import EditorFileUploadPopup from "./editorFileUploadPopup"
import { ImageKitApi } from "../../scripts/api"
import ModalWrapper from "../modalPopup"
import styled from "styled-components"
import { useState } from "react"

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

export default function EditorFileUpload({ slug, onUploadComplete }) {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [uploadResult, setUploadResult] = useState()

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
          onUploadComplete(res.data.imageKitResult.url + " ")
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
          <EditorFileUploadPopup
            {...{ onStartUpload, loading, uploadResult }}
          />
        </UploadModal>
      )}
    </>
  )
}
