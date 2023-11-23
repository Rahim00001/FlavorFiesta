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
                const offered = data.filter(item => item.category === 'offered');
                setMenu(offered)
            })
    }, [])
    return (
        <section className="max-w-screen-xl mx-auto mb-10">
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"---Don't miss---"}
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