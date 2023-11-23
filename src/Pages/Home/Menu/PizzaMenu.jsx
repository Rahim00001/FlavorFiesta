import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/Items/MenuItems";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'pizza');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="max-w-screen-xl mx-auto mb-10">
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'---Check it out---'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    menu.map(item =>
                        <MenuItems
                            key={item._id}
                            item={item}
                        ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;