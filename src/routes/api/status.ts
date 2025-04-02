import { Request, Response } from "express";
import { ServerStatus, ChannelStatus } from "../../core"
import registry from "../../providers";

const MOCK_RESPONSE: ServerStatus = {
  id: "mock-server",
  name: "Mock Server",
  iconUrl: "https://cdn.hottubapp.io/assets/channels/welcome.png",
  subtitle: `Mock server is running on port ${process.env.PORT || 3000}`,
  color: "#589EFF",
  status: ChannelStatus.Active,
  notices: [
    {
      status: "info",
      message: "👾 Mock Server is running 👾",
      details: `Mock server is running on port ${process.env.PORT || 3000}`,
      priority: false,
    },
  ],
  channels: registry.channels,
  options: [
    {
      id: "flavors",
      title: "Flavors",
      systemImage: "heart.fill",
      colorName: "pink",
      multiSelect: true,
      options: [
        { id: "mint", title: "Mint", description: "A refreshing mint flavor" },
        { id: "vanilla", title: "Vanilla", description: "A classic vanilla flavor" },
        { id: "chocolate", title: "Chocolate", description: "A rich chocolate flavor" },
        { id: "strawberry", title: "Strawberry", description: "A sweet strawberry flavor" },
      ],
    },
    {
      id: "serving_style",
      title: "Serving Style",
      systemImage: "fork.knife",
      colorName: "green",
      options: [
        { id: "cone", title: "Cone" },
        { id: "dish", title: "Dish" },
        { id: "milkshake", title: "Milkshake" },
      ],
    },
    {
      id: "size",
      title: "Size",
      systemImage: "ruler.fill",
      colorName: "orange",
      options: [
        { id: "small", title: "Small" },
        { id: "medium", title: "Medium" },
        { id: "large", title: "Large" },
      ],
    },
  ],
};

export const status = (req: Request, res: Response) => {
  console.log("status", req.body);
  res.json(MOCK_RESPONSE);
};
