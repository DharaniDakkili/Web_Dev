function Card(props){
    function orderFoodHandler(){
        console.log("order successfully placed",props.title );
        console.log("price",props.price);
        if(props.price>199){
            console.log("30 additional price is applicable, updated price is",props.price + 30);
        }
    }
    return(
        <div className="card" onClick={orderFoodHandler}>
            <div className="card-header">
            <img src= {props.img} className="card-img"/>
            <p className="ratings">{props.ratings}</p>
            </div>
            
            <div className="card-flex">
            <h3>{props.title}</h3>
            <p className={props.rating >4 ? "must-try":"d-none" }>Must Try</p> 
            </div>
            
            <p>{props.price}</p>
            <p> {props.desc}</p>
        </div>
    )
}

export default Card;