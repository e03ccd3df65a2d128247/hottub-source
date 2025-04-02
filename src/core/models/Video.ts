import { sha256 } from "../utils/hash"

// https://github.com/ytdl-org/youtube-dl/blob/da7223d4aa42ff9fc680b0951d043dd03cec2d30/youtube_dl/extractor/common.py#L120
export interface Format {
  url: string
  quality: string | number
  format: string
  format_id?: string
  format_note?: string
  filesize?: number
  asr?: number
  fps?: number
  width?: number
  height?: number
  tbr?: number
  language?: string
  language_preference?: number
  ext?: string
  vcodec?: string
  acodec?: string
  dynamic_range?: string
  abr?: number
  vbr?: number
  downloader_options?: {
    http_chunk_size: number
  }
  container?: string
  protocol?: string
  audio_ext?: string
  video_ext?: string
  resolution?: string
  http_headers?: Record<string, string>
}

export interface VideoData {
  displayId: string
  title: string
  url: string
  formats?: Format[]
  duration: number
  views?: number
  rating?: number
  channel: string
  thumb: string
  preview?: string
  uploadedAt?: Date
  tags?: string[]
  categories?: string[]
  verified?: boolean
  uploader?: string
  uploaderUrl?: string
  uploaderId?: string
  aspectRatio?: number
  performers?: string[]
}

export class Video {
  readonly id: string
  readonly hashedUrl: string
  readonly displayId: string
  readonly title: string
  readonly url: string
  readonly formats?: Format[]
  readonly duration: number
  readonly views?: number
  readonly rating?: number
  readonly channel: string
  readonly thumb: string
  readonly preview?: string
  readonly uploadedAt?: Date
  readonly tags?: string[]
  readonly categories?: string[]
  readonly verified?: boolean
  readonly uploader?: string
  readonly uploaderUrl?: string
  readonly uploaderId?: string
  readonly aspectRatio?: number
  readonly performers?: string[]

  constructor(data: VideoData) {
    this.id = sha256(data.url)
    this.hashedUrl = sha256(data.url)
    this.displayId = data.displayId
    this.title = data.title
    this.url = data.url
    this.formats = data.formats
    this.duration = data.duration
    this.views = data.views
    this.rating = data.rating
    this.channel = data.channel
    this.thumb = data.thumb
    this.preview = data.preview
    this.uploadedAt = data.uploadedAt
    this.tags = data.tags
    this.categories = data.categories
    this.verified = data.verified
    this.uploader = data.uploader
    this.uploaderUrl = data.uploaderUrl
    this.uploaderId = data.uploaderId
    this.aspectRatio = data.aspectRatio
    this.performers = data.performers
  }
}
