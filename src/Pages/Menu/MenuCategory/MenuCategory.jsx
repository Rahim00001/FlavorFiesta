import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/Items/MenuItems";

const MenuCategory = ({ items, title, img, desc }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} desc={desc}></Cover>}
            <div className="grid md:grid-cols-2 gap-5 my-16">
                {
                    items.map(item =>
                        <MenuItems
                            key={item._id}
                            item={item}
                        ></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`} className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4 border-r-2 mt-5">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;