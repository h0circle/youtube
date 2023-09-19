export default class Youtube {
  constructor(apiClient) {
    this.api = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
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
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
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

  async relatedVideo(id) {
    return this.api
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          RelatedToVideoId: id,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async channelDetail(channelId) {
    return this.api
      .channels({
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then((res) => res.data.items[0].snippet);
  }

  async getComment(videoId) {
    return this.api
      .comments({
        params: {
          part: "snippet",
          videoId,
          maxResults: 25,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({
          ...item.snippet.topLevelComment.snippet,
        }))
      );
  }
}
