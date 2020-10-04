export interface News {
  renderingRestriction?: number;
  sourceHref?: string;
  type?: string;
  version?: string;
  id?: string;
  title?: string;
  uriTitle?: string;
  preview?: string;
  icon?: string;
  abstract?: string;
  isBreaking?: number;
  tags?: {
    name?: string;
    displayName?: string;
    id?: string;
  }[];
  provider?: {
    id?: string;
    name?: string;
    logo?: {
      id?: string;
    };
    subscribable?: boolean;
  };
  category?: {
    product?: string;
    label?: string;
  };
  locale?: string;
  images?: {
    id?: string;
    caption?: string;
    height?: number;
    width?: number;
    focalRegion?: {
      x1?: number;
      x2?: number;
      y1?: number;
      y2?: number;
    };
    attribution?: string;
  }[];
  publishedDateTime?: string;
  kicker?: string;
}
