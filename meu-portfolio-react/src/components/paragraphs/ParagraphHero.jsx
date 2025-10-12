// src/components/paragraphs/ParagraphHero.jsx
import Hero from '../molecules/Hero';

function ParagraphHero({ paragraph }) {
  return (
    <Hero
      heading={paragraph.field_hero_heading}
      subheading={paragraph.field_hero_subheading}
      description={paragraph.field_hero_description}
      image={paragraph.field_hero_image}
    />
  );
}

export default ParagraphHero;