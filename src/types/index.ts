export interface ArchSection {
  id: string;
  title: string;
  description: string;
  linkColor: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ImageMaskRevealProps {
  sections: ArchSection[];
  bgColors?: string[];
}
