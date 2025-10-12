// src/pages/Node.jsx
import ParagraphHero from '../components/paragraphs/ParagraphHero';
// import outros paragraph types...

function Node({ node }) {
  
  // Função que decide qual componente renderizar baseado no tipo
  const renderParagraph = (paragraph) => {
    switch (paragraph.type) {
      case 'paragraph--hero':
        return <ParagraphHero key={paragraph.id} paragraph={paragraph} />;
      
      // case 'paragraph--gallery':
      //   return <ParagraphGallery key={paragraph.id} paragraph={paragraph} />;
      
      default:
        return null;
    }
  };

  return (
    <article className={`node node--${node.type}`}>
      {/* Itera pelos paragraphs, igual no Twig! */}
      {node.field_paragraphs?.map(renderParagraph)}
    </article>
  );
}

export default Node;