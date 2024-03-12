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
  getAllPosts: () => Axios.get(getApiUrl() + "/api/posts"),
  getPost: slug => Axios.get(getApiUrl() + "/api/posts/" + slug),
  getNextPost: slug => Axios.get(getApiUrl() + "/api/posts/next/" + slug),
  getPrevPost: slug => Axios.get(getApiUrl() + "/api/posts/prev/" + slug),
  createPost: payload => {
    const fakeTime = new Date().toLocaleTimeString()
    const dateString =
      payload.dateString != null && payload.dateString.length > 0
        ? `${payload.dateString}, ${fakeTime}`
        : new Date().toLocaleString()

    return Axios.post(getApiUrl() + "/api/posts", {
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
      id: payload._id,
      title: payload.title,
      dateString: payload.dateString,
      imageUrl: payload.imageUrl,
      summary: payload.summary,
      content: payload.content,
      slug: payload.slug,
    }
    return Axios.put(`${getApiUrl()}/api/posts/${args.id}`, args)
  },
  deletePost: id => Axios.delete(`${getApiUrl()}/api/posts/${id}`),
}

export const DraftApi = {
  publishDraft: async payload => {
    await PostApi.createPost(payload)
    return Axios.delete(`${getApiUrl()}/api/drafts/${payload._id}`)
  },
  createDraft: payload =>
    Axios.post(getApiUrl() + "/api/drafts", {
      title: payload.title,
      summary: payload.summary,
      content: payload.content,
      slug: payload.slug,
      imageUrl: payload.imageUrl,
      dateString: payload.dateString,
    }),
  updateDraft: payload =>
    Axios.put(`${getApiUrl()}/api/drafts/${payload._id}`, {
      title: payload.title,
      summary: payload.summary,
      slug: payload.slug,
      imageUrl: payload.imageUrl,
      content: payload.content,
      dateString: payload.dateString,
    }),
  getDrafts: () => Axios.get(`${getApiUrl()}/api/drafts`),
  deleteDraft: id => Axios.delete(`${getApiUrl()}/api/drafts/${id}`),
}

export const LikeApi = {
  reset: id => {
    Axios.put(`${getApiUrl()}/api/posts/likes`, { id, mode: 0 })
  },
  like: id => Axios.put(getApiUrl() + "/api/posts/likes", { id, mode: 1 }),
  unlike: id => Axios.put(getApiUrl() + "/api/posts/likes", { id, mode: -1 }),
}

export const EmailApi = {
  confirm: email => Axios.post(`${getApiUrl()}/api/email/confirm`, { email }),
  getSubscribers: tableName =>
    Axios.get(`${getApiUrl()}/api/email/${tableName}`),
  send: (subject, content) =>
    Axios.post(`${getApiUrl()}/api/email/send`, { subject, content }),
  sendTest: (subject, content) =>
    Axios.post(`${getApiUrl()}/api/email/sendTest`, { subject, content }),
  subscribe: emailHash =>
    Axios.post(`${getApiUrl()}/api/email/subscribe/${emailHash}`),
  unsubscribe: emailHash =>
    Axios.delete(`${getApiUrl()}/api/email/unsubscribe/${emailHash}`),
  checkDns: () => Axios.post(`${getApiUrl()}/api/email/dns/`),
}

export const ImageKitApi = {
  getImagesFromPath: path => Axios.post(`${getApiUrl()}/api/image`, { path }),
  getUsage: () => Axios.get(`${getApiUrl()}/api/image/usage`),
  upload: formData => Axios.post(`${getApiUrl()}/api/image/upload`, formData),
}
