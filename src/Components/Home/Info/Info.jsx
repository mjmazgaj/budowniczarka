import "./info.css";

const Info = () => {
  return (
    <section id="info">
      <div className="info-image_container"></div>
      <div className="info-description_container">
        <div className="info-description_title_container">
          <h3 className="info-description_title">KIM JESTEM?</h3>
          <div className="info-description_highlight"></div>
        </div>
        <div className="info-description_details_container">
          <p>
            Nazywam się Zofia Mikołajczyk i jestem mgr inż. budownictwa. Od
            ponad 2 lat pracuję na budowie nadzorując poprawność wykonywanych
            prac od tzw. dziury w ziemi po wykończenie lokali pod klucz. Od roku
            zajmuje się też świadectwami charakterystyki energetycznej i
            tworzeniu treści pomagających w nauce do egzaminu na uprawnienia
            budowlane.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
