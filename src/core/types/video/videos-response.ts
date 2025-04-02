import { Video } from "../../models/Video";

export interface VideosResponse {
  pageInfo: {
    hasNextPage: boolean;
    recommendations?: string[];
    error?: string;
    message?: string;
    parameters?: Record<string, any>;
  };
  items: Video[];
}
