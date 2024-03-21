import styled, { css } from "styled-components"

import { Button } from "../button"
import Input from "../input"
import Spinner from "../spinner"
import { formatBytes } from "../../scripts/util"
import { hexToRGB } from "../../style/theme"
import { useState } from "react"

const svgCss = props => css`
  ${`url("data:image/svg+xml,${`<svg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='15' width='96%25' height='96%25' fill='${encodeURIComponent(
    "none"
  )}' rx='36' ry='36' stroke='${encodeURIComponent(
    hexToRGB(props.theme.medium, 0.2)
  )}' stroke-width='10' stroke-dasharray='60 20' stroke-dashoffset='2' stroke-linecap='round'/></svg>`}")`}
`

const UploadWrapper = styled.div`
  position: relative;
  height: 85vh;
  background-color: ${props => hexToRGB(props.theme.bg, 0.9)};

  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;

  background-image: ${svgCss};
  border-radius: 48px;
`

const UploadButton = styled(Button)`
  transform: scale(1.5);
`

const lastImageKitFolderKey = "imagekit-upload-path"

export default function EditorFileUploadPopup({
  onStartUpload,
  loading,
  uploadResult,
}) {
  const [file, setFile] = useState()
  const [imageKitFolder, setImageKitFolder] = useState(
    window.localStorage.getItem(lastImageKitFolderKey) || "/website/blog"
  )

  const onFileChange = event => {
    setFile(event.target.files[0])
  }

  const onImageKitFolderChange = event => {
    setImageKitFolder(event.target.value)
    window.localStorage.setItem(lastImageKitFolderKey, event.target.value)
  }

  return (
    <UploadWrapper>
      {/* file input */}
      <input type="file" onChange={onFileChange} />

      {/* folder path */}
      <div>
        <h4>ImageKit - Destination Folder</h4>
        <Input
          value={imageKitFolder}
          onChange={onImageKitFolderChange}
          width={300}
        />
      </div>

      {/* upload button */}
      <div>
        {loading && <Spinner />}
        {!loading && (
          <UploadButton
            onClick={() => onStartUpload(file, imageKitFolder)}
            disabled={!(file && imageKitFolder)}
          >
            Upload
          </UploadButton>
        )}
      </div>

      {/* results */}
      {uploadResult && (
        <div>
          <p>Original: {formatBytes(uploadResult.data.stats?.originalSize)}</p>
          <p>
            Compressed: {formatBytes(uploadResult.data.stats?.compressedSize)}
          </p>
        </div>
      )}
    </UploadWrapper>
  )
}
