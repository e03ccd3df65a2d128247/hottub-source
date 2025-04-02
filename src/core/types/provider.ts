import { Video } from "../models/Video";
import { VideosRequest, VideosResponse } from "./video";
import { Channel } from "./channel";

/**
 * Base interface for any type of content provider.
 */
export interface ContentProvider {
  /**
   * The channel associated with the content provider.
   * @type {Channel}
   */
  readonly channel: Channel;

  /**
   * Single method to get videos with flexible options.
   * @param {VideosRequest} options - Options for retrieving videos.
   * @returns {Promise<VideosResponse>} A promise that resolves to the video result.
   */
  getVideos(options: VideosRequest): Promise<VideosResponse>;

  /**
   * Optional method to get details of a specific video.
   * @param {string} url - The URL of the video.
   * @returns {Promise<Video>} A promise that resolves to the video details.
   */
  getVideoDetails?(url: string): Promise<Video>;

  /**
   * Optional method to get related videos.
   * @param {string} videoId - The ID of the video to find related videos for.
   * @param {VideosRequest} options - Options for retrieving related videos.
   * @returns {Promise<VideosResponse>} A promise that resolves to the related video results.
   */
  getRelatedVideos?(videoId: string, options: VideosRequest): Promise<VideosResponse>;
}
