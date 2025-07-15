import Card from "../card/card";

const Menu = ({data, onChangePage, onChangeValue, onChangeCountryFilter}) => {

    const arrayCards = data.map(el => {
      const {id, ...cardProps} = el;
      return (
        <Card
          key={id}
          id={id}
          data={cardProps}
          onChangePage={onChangePage}
        />
      )
    })

    return (
        <div className="coffee_catalog">
      <img className="headerBg" src="img/bg/our_coffee_bg.jpg" alt="background" />
      <section className="container pleasure-promo">
        <h1 className="title title-big">Our Coffee</h1>
      </section>
      <section className="container pleasure-about">
        <img src="img/drink_girl.jpg" alt="cup of coffee" className="pleasure-about__img" />
        <div className="pleasure-about__descr">
          <h2 className="title title-black">About our beans</h2>
          <div className="nav nav-center">
            <div className="line"></div>
            <img src="icons/black_coffee.svg" alt="coffee" />
            <div className="line"></div>
          </div>
          <p className="descr"> Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.</p>
          <p className="descr descr-line_height">
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. <br />
            As greatly removed calling pleased improve an. Last ask him cold feel <br />
            met spot shy want. Children me laughing we prospect answered followed. At it went <br />
            is song that held help face.
          </p>
        </div>
      </section>
      <div className="line line-long"></div>
      <form className="container nav nav-center nav-g83 nav-mt61">
        <div className="nav nav-mt0">
          <label htmlFor="search">Looking for</label>
          <input onChange={e => {onChangeValue(e.target.value)}} id="search" type="text" placeholder="start typing for..."/>
        </div>
        <div className="nav nav-mt0 nav-g19">
          <label>Or filter</label>
          <div className="tabs">
            <div onClick={e => {onChangeCountryFilter('Brazil'); e.target.classList.toggle('tab-active');}} className="tab tab-active">Brazil</div>
            <div onClick={e => {onChangeCountryFilter('Kenya'); e.target.classList.toggle('tab-active');}} className="tab tab-active">Kenya</div>
            <div onClick={e => {onChangeCountryFilter('Columbia'); e.target.classList.toggle('tab-active');}} className="tab tab-active">Columbia</div>
          </div>
        </div>

      </form>
      <section className="container catalog">
        {arrayCards.length >= 1 
        ? arrayCards 
        : <div className="title title-black title-center">Not Founded</div>}
      </section>
    </div>
    )
}

export default Menu;