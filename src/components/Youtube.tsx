import { PropsTypes } from '@/types';

export default function YouTubeVideo({ url }: PropsTypes) {
  return (
    <iframe
      src={url}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowFullScreen
      className='video'
    ></iframe>
  );
}
