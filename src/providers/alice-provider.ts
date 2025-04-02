import items from "../data/cat_videos"
import {
  VideosRequest,
  VideosResponse,
  ContentProvider,
  Channel,
  ChannelStatus,
} from "../core/";

export default class AliceProvider implements ContentProvider {
  channel: Channel = {
    id: "alice",
    name: "Alice",
    premium: true,
    favicon: "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f646-200d-2640-fe0f.png",
    description: "Alice is a cool girl",
    status: ChannelStatus.Active,
    categories: ["Awesome", "Neat", "Chill", "Rizz", "Fun", "Cute", "Funny", "Cute", "Funny"],
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
          { id: "duration", title: "Longest" },
        ],
      },
      {
        id: "duration",
        title: "Duration",
        systemImage: "timer",
        colorName: "green",
        multiSelect: false,
        options: [
          { id: "any", title: "Any" },
          { id: "short", title: "Short (<10 min)" },
          { id: "medium", title: "Medium (10-30 min)" },
          { id: "long", title: "Long (>30 min)" },
        ],
      },
      {
        id: "verified",
        title: "Verified",
        systemImage: "checkmark.seal.fill",
        colorName: "blue",
        options: [
          { id: "any", title: "Any" },
          { id: "verified", title: "Verified" },
        ],
      },
    ],
  };

  getVideos(options: VideosRequest): Promise<VideosResponse> {
    const searchResults = items
      .filter((e) => e.title.toLowerCase().includes(options.query?.toLowerCase() ?? ""))
      .map((e) => ({ ...e, channel: this.channel.id }));

    return Promise.resolve({ items: searchResults, pageInfo: { hasNextPage: false } });
  }
}
