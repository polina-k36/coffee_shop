
const Card = ({id, data, onChangePage}) => {
    return(
        <div onClick={() => {onChangePage("promoCoffee", id)}} className="card card-white">
          <img src={data.img[0]} alt={data.name} className="card-img"/>
          <p className="card-descr">{data.name}</p>
          <div className="card-price">{data.country}</div>
          <div className="card-price">{data.price}$</div>
        </div>
    )
}

export default Card;