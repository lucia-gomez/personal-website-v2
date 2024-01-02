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
  >
    Create Draft
  </Button>
)

const CloseDraftButton = (payload, setOpenDraft) => {
  const onClick = () =>
    DraftApi.updateDraft(payload).then(setOpenDraft(undefined))
  return (
    <Button onClick={onClick} disabled={isButtonValid(payload)} key={3}>
      Close Draft
    </Button>
  )
}

const UpdatePostButton = (payload, closeEditor) => {
  const onClick = async () =>
    await PostApi.updatePost(payload).then(closeEditor)
  return (
    <ButtonLinkAsync
      onClick={onClick}
      to={`/blog/${payload.slug}/`}
      disabled={isButtonValid(payload)}
      key={4}
    >
      Update post
    </ButtonLinkAsync>
  )
}

const ResetLikesButton = payload => {
  return (
    <Button onClick={() => LikeApi.reset(payload._id)} key={5}>
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
      CloseDraftButton(payload, actions.setOpenDraft),
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
