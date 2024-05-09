import { Button, ButtonLinkAsync } from "../button"
import { DraftApi, LikeApi, PostApi } from "../../scripts/api"

import Delete from "../blog/delete"

const isButtonValid = payload => {
  const isValid = x => x !== undefined && x.length > 0
  return !(
    isValid(payload.title) &&
    isValid(payload.summary) &&
    isValid(payload.slug)
  )
}

const PublishPostButton = payload => (
  <ButtonLinkAsync
    onClick={async () => await PostApi.createPost(payload)}
    to="/blog"
    sameTab={true}
    disabled={isButtonValid(payload)}
    key={0}
    data-test-id="publish-post-btn"
  >
    Publish Post
  </ButtonLinkAsync>
)

const PublishDraftButton = payload => (
  <ButtonLinkAsync
    onClick={() => DraftApi.publishDraft(payload)}
    to="/blog"
    sameTab={true}
    disabled={isButtonValid(payload)}
    key={1}
    data-test-id="publish-draft-btn"
  >
    Publish Draft
  </ButtonLinkAsync>
)

const CreateDraftButton = (payload, setOpenDraft) => (
  <Button
    onClick={() =>
      DraftApi.createDraft(payload).then(result =>
        setOpenDraft({
          ...payload,
          id: result.data._id,
          _id: result.data._id,
        })
      )
    }
    disabled={isButtonValid(payload)}
    id="editor-create-draft"
    key={2}
    data-test-id="create-draft-btn"
  >
    Create Draft
  </Button>
)

const CloseDraftButton = (payload, setOpenDraft, handleCloseDraft) => {
  const onClick = () => {
    DraftApi.updateDraft(payload).then(setOpenDraft(undefined))
    handleCloseDraft()
  }
  return (
    <Button
      onClick={onClick}
      disabled={isButtonValid(payload)}
      key={3}
      data-test-id="close-draft-btn"
    >
      Close Draft
    </Button>
  )
}

const UpdatePostButton = (payload, closeEditor) => {
  const onClick = async () =>
    await PostApi.updatePost(payload).then(() => {
      closeEditor()
      window.location.reload()
    })
  return (
    <ButtonLinkAsync
      onClick={onClick}
      to={`/blog/${payload.slug}/`}
      disabled={isButtonValid(payload)}
      key={4}
      data-test-id="update-post-btn"
    >
      Update post
    </ButtonLinkAsync>
  )
}

const ResetLikesButton = payload => {
  return (
    <Button
      onClick={() => LikeApi.reset(payload._id)}
      key={5}
      data-test-id="reset-likes-btn"
    >
      Reset Likes
    </Button>
  )
}

const DeletePostButton = payload => {
  return <Delete postID={payload._id} key={6} />
}

export default function getButtons(payload, isDraft, isNew, actions) {
  if (isDraft) {
    return [
      PublishDraftButton(payload),
      CloseDraftButton(payload, actions.setOpenDraft, actions.handleCloseDraft),
    ]
  } else if (isNew) {
    return [
      PublishPostButton(payload),
      CreateDraftButton(payload, actions.setOpenDraft),
    ]
  } else {
    return [
      UpdatePostButton(payload, actions.closeEditor),
      ResetLikesButton(payload),
      DeletePostButton(payload),
    ]
  }
}
