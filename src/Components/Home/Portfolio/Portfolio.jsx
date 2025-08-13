import "./portfolio.css";
import { IoMdDownload } from "react-icons/io";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portfolio-title_text">PRODUKTY</h2>
      <div className="portfolio_container">
        <div className="portfolio_button">
          <a href="/testFile.txt" download>
            <p>SZCZEGÓŁOWE SPIS TREŚCI</p>
            <p>PRAWO BUDOWLANE</p>
            <hr />
            <div className="portfolio_button-download">
              <p>POBIERZ</p>
              <IoMdDownload />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
