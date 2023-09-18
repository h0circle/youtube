export default class Youtube {
  constructor(apiClient) {
    this.api = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImgURL(id) {
    return this.api
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items.snippet.title);
  }

  async #searchByKeyword(keyword) {
    return this.api
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((items) => ({ ...items, id: items.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.api
      .videos({
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }
}
