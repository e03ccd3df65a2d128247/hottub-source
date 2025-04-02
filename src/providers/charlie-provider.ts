import items from "../data/cat_videos"
import {
  Channel,
  ChannelStatus,
  ContentProvider,
  VideosRequest,
  VideosResponse,
} from "../core";

export default class CharlieProvider implements ContentProvider {
  channel: Channel = {
    id: "charlie",
    name: "Charlie",
    description: "Charlie doesn't like people",
    favicon: "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f9d6-200d-2642-fe0f.png",
    status: ChannelStatus.Active,
    options: [
      {
        id: "sort",
        title: "Sort",
        systemImage: "list.number",
        colorName: "indigo",
        options: [
          { id: "relevance", title: "Most Relevant" },
          { id: "recent", title: "Newest" },
          { id: "rating", title: "Top Rated" },
          { id: "views", title: "Most Viewed" },
          { id: "longest", title: "Longest" },
        ],
      },
    ],
    categories: ["Aura", "Rocking", "Chill", "Rizz", "Fun", "Cute", "Funny", "Cute", "Funny"],
  };

  getVideos(options: VideosRequest): Promise<VideosResponse> {
    const searchResults = items
      .filter((e) => e.title.toLowerCase().includes(options.query?.toLowerCase() ?? ""))
      .map((e) => ({ ...e, channel: this.channel.id }));

    return Promise.resolve({ items: searchResults, pageInfo: { hasNextPage: false } });
  }
}
