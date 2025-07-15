const Main = () => {
    return (
        <div className="main">
            <img className="headerBg" src='img/bg/main_bg.jpg' alt="background"/>
            <section className="container promo">
                <h1 className="title title-big">Everything You Love About Coffee</h1>
                <div className="nav nav-center">
                <div className="line line-white"></div>
                <img src="icons/white_coffee.svg" alt="coffee"/>
                <div className="line line-white"></div>
                </div>
                <h3 className="title title-mt">We makes every day full of energy and taste</h3>
                <h3 className="title">Want to try our beans?</h3>
                <button className="btn">More</button>
            </section>
            <section className="container about">
                <h2 className="title title-black">About us</h2>
                <div className="nav nav-center">
                <div className="line"></div>
                <img src="icons/black_coffee.svg" alt="coffee"/>
                <div className="line"></div>
                </div>
                <p className="descr about__descr about__descr-mt">
                Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
                </p>
                <p className="descr about__descr">
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
                </p>
            </section>

            <section className="container best">
                <h2 className="title title-black">Our best</h2>
                <div className="best__list">
                <div className="card">
                    <img src="img/solimo.png" alt="solimo" className="card-img"/>
                    <p className="best__item-descr card-descr-mt4">Solimo Coffee Beans 2 kg</p>
                    <div className="card-price">10.73$</div>
                </div>
                <div className="card">
                    <img src="img/presto.png" alt="presto" className="card-img"/>
                    <p className="card-descr">Presto Coffee Beans 1 kg</p>
                    <div className="card-price">15.99$</div>
                </div>
                <div className="card">
                    <img src="img/aromistico.png" alt="aromistico" className="card-img"/>
                    <p className="card-descr card-descr-mt4">AROMISTICO Coffee 1 kg</p>
                    <div className="card-price">6.99$</div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Main;