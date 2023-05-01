import Axios from "axios"
import { getApiUrl } from "../scripts/util"
import { string } from "prop-types"

export const PostPayload = {
  title: string,
  slug: string,
  date: string,
  imageUrl: string,
  summary: string,
  content: string,
  id: string,
}

export const createPost = payload => {
  const fakeTime = new Date().toLocaleTimeString()
  const dateString =
    payload.date != null && payload.date.length > 0
      ? `${payload.date}, ${fakeTime}`
      : new Date().toLocaleString()

  Axios.post(getApiUrl() + "/api/create", {
    datetime: new Date().toISOString().slice(0, 19).replace("T", " "),
    dateString: dateString,
    title: payload.title,
    imageUrl: payload.imageUrl,
    summary: payload.summary,
    content: payload.content,
    slug: payload.slug,
  })
}

export const publishDraft = payload => {
  createPost(payload)
  Axios.delete(`${getApiUrl()}/api/draft/${payload.id}`)
}

export const createDraft = payload => {
  Axios.post(getApiUrl() + "/api/draft/create", {
    title: payload.title,
    summary: payload.summary,
    content: payload.content,
    slug: payload.slug,
    imageUrl: payload.imageUrl,
  })
}

export const closeDraft = payload => {
  return Axios.post(`${getApiUrl()}/api/draft/update`, {
    id: payload.id,
    title: payload.title,
    summary: payload.summary,
    slug: payload.slug,
    imageUrl: payload.imageUrl,
    content: payload.content,
  })
}

export const updatePost = payload => {
  const args = {
    id: payload.id,
    title: payload.title,
    dateString: payload.date,
    imageUrl: payload.imageUrl,
    summary: payload.summary,
    content: payload.content,
  }
  return Axios.post(`${getApiUrl()}/api/update`, args)
}

export const getDrafts = () => Axios.get(`${getApiUrl()}/api/draft/get`)
export const deletePost = id => Axios.delete(`${getApiUrl()}/api/delete/${id}`)
export const deleteDraft = id => Axios.delete(`${getApiUrl()}/api/draft/${id}`)

export const resetLikes = id => {
  Axios.post(`${getApiUrl()}/api/likes/reset`, { id: id })
}
