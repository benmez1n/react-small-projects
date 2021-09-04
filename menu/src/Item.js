const Item = ({title,price,img,desc}) => {
    return ( 
        <div className="menuItem">
            <img src={img} alt={title} className="photo" />
            <div className="itemInfo">
                <header>
                    <h4>{title}</h4>
                    <h4 className="price">{price}</h4>
                </header>
                <div className="itemText">
                    {desc}
                </div>
            </div>
        </div>
     );
}
 
export default Item;