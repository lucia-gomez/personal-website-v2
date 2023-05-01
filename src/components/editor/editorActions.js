import { Button, ButtonLink } from "../button"
import {
  closeDraft,
  createDraft,
  createPost,
  publishDraft,
  resetLikes,
  updatePost,
} from "../../scripts/api"

import Delete from "../blog/delete"
import styled from "styled-components"

const isButtonValid = payload => {
  const isValid = x => x !== undefined && x.length > 0
  return !(
    isValid(payload.title) &&
    isValid(payload.summary) &&
    isValid(payload.slug)
  )
}

const PublishPostButton = payload => (
  <Button
    onClick={() => createPost(payload)}
    sameTab={true}
    disabled={isButtonValid(payload)}
    key={0}
  >
    Publish Post
  </Button>
)

const PublishDraftButton = payload => (
  <Button
    onClick={() => publishDraft(payload)}
    sameTab={true}
    disabled={isButtonValid(payload)}
    href="/"
    key={1}
  >
    Publish Draft
  </Button>
)

const SaveDraftButton = payload => (
  <Button
    onClick={() => createDraft(payload)}
    disabled={isButtonValid(payload)}
    key={2}
  >
    Save as Draft
  </Button>
)

const CloseDraftButton = (payload, setOpenDraft) => {
  const onClick = () => closeDraft(payload).then(setOpenDraft(undefined))
  return (
    <Button onClick={onClick} disabled={isButtonValid(payload)} key={3}>
      Close Draft
    </Button>
  )
}

const UpdatePostButton = (payload, closeEditor) => {
  const onClick = () => updatePost(payload).then(closeEditor)
  return (
    <Button onClick={onClick} disabled={isButtonValid(payload)} key={4}>
      Update post
    </Button>
  )
}

const ResetLikesButton = payload => (
  <Button onClick={() => resetLikes(payload.id)} key={5}>
    Reset Likes
  </Button>
)

const DeleteIcon = styled(Delete)`
  color: ${props => props.theme.text};
  text-shadow: none;
  margin-top: 4px;
`
const DeletePostButton = payload => {
  return (
    <ButtonLink to="/blog" sameTab={true} key={6}>
      <DeleteIcon postID={payload.id} />
    </ButtonLink>
  )
}

export default function getButtons(payload, isDraft, isNew, actions) {
  if (isDraft) {
    return [
      PublishDraftButton(payload),
      CloseDraftButton(payload, actions.setOpenDraft),
    ]
  } else if (isNew) {
    return [PublishPostButton(payload), SaveDraftButton(payload)]
  } else {
    return [
      UpdatePostButton(payload, actions.closeEditor),
      ResetLikesButton(payload),
      DeletePostButton(payload),
    ]
  }
}
