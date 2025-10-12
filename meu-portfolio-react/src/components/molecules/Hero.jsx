// src/components/molecules/Hero.jsx
function Hero({ heading, subheading, description, image }) {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src={image?.url} alt={image?.alt || ''} />
      </div>
      
      <div className="hero__content">
        <div className="hero__subheading">
          <h2>{subheading}</h2>
        </div>
        <div className="hero__heading">
          <h3>{heading}</h3>
        </div>
        <div className="hero__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;