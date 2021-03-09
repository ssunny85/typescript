{
  /** utility - pick type
   * 필요한 정보만 pick
   */
 type Video = {
   id: string;
   title: string;
   url: string;
   data: string;
 };

 type VideoMetadata = Pick<Video, 'id' | 'title'>;

 function getVideo(id: string): Video {
   return {
     id,
     title: '',
     url: '',
     data: '',
   };
 }

 function getVideoMetadata(id: string): VideoMetadata {
   return {
     id,
     title: '',
   };
 }
}
