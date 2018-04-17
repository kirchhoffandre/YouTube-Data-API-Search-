export class VideoChannel {

    constructor(public channelId: string,
                public thumbnailUrl: string,
                public channelTitle: string,
                public description: string,
                public country: string,
                public publishedAt: string) {
      this.channelId = channelId;
      this.thumbnailUrl = thumbnailUrl;
      this.channelTitle = channelTitle;
      this.description = description;
      this.country = country;
      this.publishedAt = publishedAt;
    };
  }