import "./intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-description_container">
        <div className="intro-description_title_container">
          <h3 className="intro-description_title">OGARNIEMY TO</h3>
          <h3 className="intro-description_title">RAZEM!</h3>
        </div>
        <div className="intro-description_details_container">
          <p>Świadectwa Charakterystyki Energetycznej</p>
          <p>Egzamin na uprawnienia budowlane</p>
          <p>Nadzór prac budowlanych</p>
        </div>
      </div>
      <div className="intro-image_container"></div>
    </section>
  );
};

export default Intro;
