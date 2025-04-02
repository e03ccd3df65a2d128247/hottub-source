import items from "../data/cat_videos"
import {
  Channel,
  ChannelStatus,
  ContentProvider,
  VideosRequest,
  VideosResponse,
} from "../core";

export default class BobProvider implements ContentProvider {
  channel: Channel = {
    id: "bob",
    name: "Bob",
    favicon: "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f481-200d-2642-fe0f.png",
    description: "Bob is a cool guy",
    status: ChannelStatus.Active,
    options: [
      {
        id: "sort",
        title: "Sort",
        systemImage: "list.number",
        colorName: "indigo",
        options: [
          { id: "relevance", title: "Most Relevant" },
          { id: "new", title: "Newest" },
          { id: "rating", title: "Top Rated" },
          { id: "duration", title: "Longest" },
          { id: "views", title: "Most Viewed" },
          { id: "random", title: "Random" },
        ],
      },
    ],
    categories: ["Cool", "Funny", "Cute", "Funny", "Cute", "Funny", "Cute", "Funny"],
  };

  getVideos(options: VideosRequest): Promise<VideosResponse> {
    const searchResults = items
      .filter((e) => e.title.toLowerCase().includes(options.query?.toLowerCase() ?? ""))
      .map((e) => ({ ...e, channel: this.channel.id }));

    return Promise.resolve({ items: searchResults, pageInfo: { hasNextPage: false } });
  }
}
