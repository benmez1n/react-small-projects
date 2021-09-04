import Item from './Item';
const Menu = ({menu}) => {
    return ( 
        <section className="sectionCenter">
            {menu.map((item)=>{
                return(
                    <Item {...item} key={item.id}/>
                )
            })}
        </section>
     );
}
 
export default Menu;