
const MenuItems = ({ item }) => {
    const { image, name, price, recipe } = item
    return (
        <div className="flex gap-5">
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-28 h-28" src={image} alt="" />
            <div>
                <p className="text-[#151515] text-xl">{name}------------</p>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl">${price}</p>
        </div>
    );
};

export default MenuItems;