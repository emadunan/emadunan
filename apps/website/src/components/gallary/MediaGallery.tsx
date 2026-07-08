import { Masonry } from 'masonic';
import PhotoCard from './PhotoCard';
import QuoteCard from './QuoteCard';
import MusicCard from './MusicCard';
import { photos } from '@/data/photo.data';
import { quotes } from '@/data/quote.data';
import { music } from '@/data/music.data';

type CombinedItem = {
  type: 'photo' | 'quote' | 'music';
  data: any;
};

function withType<T extends 'photo' | 'quote' | 'music', D>(type: T, data: D): CombinedItem {
  return { type, data };
}

const items: CombinedItem[] = [
  ...photos.map(p => withType('photo', p)),
  ...quotes.map(q => withType('quote', q)),
  ...music.map(m => withType('music', m)),
].sort((a, b) => a.data.order - b.data.order);

export default function MediaGallery() {
  return (
    <Masonry
      items={items}
      columnWidth={240}
      columnGutter={24}
      overscanBy={2}
      itemKey={(item, index) => `${item.type}-${index}`}
      render={({ index, data }) => {
        const item = items[index];
        switch (item.type) {
          case 'photo':
            return <PhotoCard item={item.data} />;
          case 'quote':
            return <QuoteCard item={item.data} />;
          case 'music':
            return <MusicCard item={item.data} />;
          default:
            return null;
        }
      }}
    />
  );
}
