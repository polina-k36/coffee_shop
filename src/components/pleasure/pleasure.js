import Card from "../card/card"

const Pleasure = ({data, onChangePage}) => {

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
     <div className="pleasure">
      <img className="headerBg" src="img/bg/pleasure_bg.jpg" alt="background"/>
      <section className="container pleasure-promo">
        <h1 className="title title-big">For your pleasure</h1>
      </section>
      <section className="container pleasure-about">
        <img src="img/white_cup.jpg" alt="cup of coffee" className="pleasure-about__img"/>
        <div className="pleasure-about__descr">
          <h2 className="title title-black">About our goods</h2>
          <div className="nav nav-center">
            <div className="line"></div>
            <img src="icons/black_coffee.svg" alt="coffee" />
            <div className="line"></div>
          </div>
          <p className="descr"> Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.</p>
          <p className="descr descr-line_height">
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. <br/>
            As greatly removed calling pleased improve an. Last ask him cold feel <br/>
            met spot shy want. Children me laughing we prospect answered followed. At it went <br/>
            is song that held help face.
          </p>
        </div>
      </section>
      <div className="line line-long"></div>
      <section className="container catalog">
           {arrayCards}
      </section>
    </div>
    )
}

export default Pleasure; 