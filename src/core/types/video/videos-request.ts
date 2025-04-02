export interface VideosRequest {
  query?: string;
  channel?: string;
  sort?: string;
  page?: number;
  clientVersion?: string; // version can be used to check for new features
  sexuality?: string; // use the sexuality of the user to filter content
  // Your server's custom parameters will be added here
  [key: string]: any;
}
