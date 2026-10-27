import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBrandStory extends Struct.ComponentSchema {
  collectionName: 'components_shared_brand_stories';
  info: {
    displayName: 'BrandStory';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageAlt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCallToActionSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_call_to_action_sections';
  info: {
    displayName: 'CallToActionSection';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageAlt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_sections';
  info: {
    displayName: 'ContactSection';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    locations: Schema.Attribute.Component<'shared.location-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeaturedProductsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_featured_products_sections';
  info: {
    displayName: 'FeaturedProductsSection';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_slides';
  info: {
    displayName: 'hero-slide';
  };
  attributes: {
    copy: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    tone: Schema.Attribute.Enumeration<['light', 'dark']>;
  };
}

export interface SharedLocationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_items';
  info: {
    displayName: 'LocationItem';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.brand-story': SharedBrandStory;
      'shared.call-to-action-section': SharedCallToActionSection;
      'shared.contact-section': SharedContactSection;
      'shared.featured-products-section': SharedFeaturedProductsSection;
      'shared.hero-slide': SharedHeroSlide;
      'shared.location-item': SharedLocationItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
