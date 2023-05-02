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

export const PostApi = {
  getAllPosts: () => Axios.get(getApiUrl() + "/api/get"),
  getPost: slug => Axios.get(getApiUrl() + "/api/get/" + slug),
  getNextPost: slug => Axios.get(getApiUrl() + "/api/next/" + slug),
  getPrevPost: slug => Axios.get(getApiUrl() + "/api/prev/" + slug),
  createPost: payload => {
    const fakeTime = new Date().toLocaleTimeString()
    const dateString =
      payload.date != null && payload.date.length > 0
        ? `${payload.date}, ${fakeTime}`
        : new Date().toLocaleString()

    return Axios.post(getApiUrl() + "/api/create", {
      datetime: new Date().toISOString().slice(0, 19).replace("T", " "),
      dateString: dateString,
      title: payload.title,
      imageUrl: payload.imageUrl,
      summary: payload.summary,
      content: payload.content,
      slug: payload.slug,
    })
  },
  updatePost: payload => {
    const args = {
      id: payload.id,
      title: payload.title,
      dateString: payload.date,
      imageUrl: payload.imageUrl,
      summary: payload.summary,
      content: payload.content,
    }
    return Axios.post(`${getApiUrl()}/api/update`, args)
  },
  deletePost: id => Axios.delete(`${getApiUrl()}/api/delete/${id}`),
}

export const DraftApi = {
  publishDraft: async payload => {
    await PostApi.createPost(payload)
    return Axios.delete(`${getApiUrl()}/api/draft/${payload.id}`)
  },
  createDraft: payload =>
    Axios.post(getApiUrl() + "/api/draft/create", {
      title: payload.title,
      summary: payload.summary,
      content: payload.content,
      slug: payload.slug,
      imageUrl: payload.imageUrl,
    }),
  updateDraft: payload =>
    Axios.post(`${getApiUrl()}/api/draft/update`, {
      id: payload.id,
      title: payload.title,
      summary: payload.summary,
      slug: payload.slug,
      imageUrl: payload.imageUrl,
      content: payload.content,
    }),
  getDrafts: () => Axios.get(`${getApiUrl()}/api/draft/get`),
  deleteDraft: id => Axios.delete(`${getApiUrl()}/api/draft/${id}`),
}

export const LikeApi = {
  reset: id => {
    Axios.post(`${getApiUrl()}/api/likes/reset`, { id: id })
  },
  like: id => Axios.post(getApiUrl() + "/api/like", { id: id }),
  unlike: id => Axios.post(getApiUrl() + "/api/unlike", { id: id }),
}
