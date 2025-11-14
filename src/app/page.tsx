import ImageMaskReveal from '@/components/ImageMaskReveal';
import type { ArchSection } from '@/types';

const sections: ArchSection[] = [
  {
    id: 'green-arch',
    title: 'Green Cityscape',
    description:
      'Vibrant streets with vertical gardens and solar buildings. This oasis thrives on renewable energy, smart transport, and green spaces for biodiversity.',
    linkColor: '#D5FF37',
    imageUrl:
      'https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp',
    imageAlt: 'Green Architecture',
  },
  {
    id: 'blue-arch',
    title: 'Blue Urban Oasis',
    description:
      'Avenues with azure facades and eco-structures. This hub uses clean energy, smart transit, and parks for urban wildlife.',
    linkColor: '#7DD6FF',
    imageUrl:
      'https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp',
    imageAlt: 'Blue Architecture',
  },
  {
    id: 'pink-arch',
    title: 'Fluid Architecture',
    description:
      'Desert refuge with fluid architecture and glowing interiors. This sanctuary harnesses solar power, sustainable design, and natural harmony for resilient living.',
    linkColor: '#FFA0B0',
    imageUrl:
      'https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp',
    imageAlt: 'Pink Architecture',
  },
  {
    id: 'orange-arch',
    title: 'Martian Arches',
    description:
      'Ethereal structures arc over tranquil waters, bathed in the glow of a setting Martian sun. This desolate beauty showcases the stark, captivating landscape of the red planet.',
    linkColor: '#FFA17B',
    imageUrl:
      'https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp',
    imageAlt: 'Orange Architecture',
  },
];

const bgColors = ['#EDF9FF', '#FFECF2', '#FFE8DB'];

export default function Home() {
  return <ImageMaskReveal sections={sections} bgColors={bgColors} />;
}
