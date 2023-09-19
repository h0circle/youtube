import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.RelatedToVideoId
      ? axios.get("/videos/related.json")
      : axios.get("/videos/search.json");
  }

  async videos() {
    return axios.get("/videos/popular.json");
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }

  async comments() {
    return axios.get("/videos/comment.json");
  }
}
