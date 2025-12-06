/**
 * similar to::: props: React.PropsWithChildren
 */
interface ReactFCPropsWithClassName {
  className?: string;
}

interface IPhotoItem {
  id: string | number;
  alt: string;
  description?: string;
  imageUrl: string;
}
