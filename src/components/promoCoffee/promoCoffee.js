const PromoCoffee = ({data}) => {
    return (
        <div className="coffee_promo">
            <img className="headerBg" src="img/bg/our_coffee_bg.jpg" alt="background"/>
            <section className="container pleasure-promo">
                <h1 className="title title-big">Our coffee</h1>
            </section>
            <section className="container pleasure-about">
                <img src={data.img[1]} alt={data.name} className="pleasure-about__img"/>
                <div className="pleasure-about__descr">
                <h2 className="title title-black">About it</h2>
                <div className="nav nav-center">
                    <div className="line"></div>
                    <img src="icons/black_coffee.svg" alt="coffee" />
                    <div className="line"></div>
                </div>
                <div className="descr descr-cont">
                    <div className="descr descr-country descr-left"><span className="descr-span">Country: </span>{data.country}</div>
                    <div className="descr descr-left"><span className="descr-span">Description: </span>{data.descr}</div>
                    <div className="descr descr-price descr-left"><span className="descr-span">Price: </span>{data.price}$</div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default PromoCoffee;