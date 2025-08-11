import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portfolio-title_text">PRODUKTY</h2>
      <div className="portfolio_container">
        <div className="portfolio_button">
          <p>SZCZEGÓŁOWE SPIS TREŚCI</p>
          <p>PRAWO BUDOWLANE</p>
        </div>
        <div className="portfolio_button">
          <p>ŚWIADECTWO CHARAKTERYSTYKI</p>
          <p>ENERGETYCZNEJ</p>
        </div>
        <div className="portfolio_button">
          <p>WYKOŃCZENIE POD KLUCZ - </p>
          <p>NADZÓR PRAC</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
