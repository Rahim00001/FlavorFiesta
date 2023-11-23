import FoodCards from "../../../Components/SectionTitle/FoodCards";

const Ordertab = ({ items }) => {
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                items.map(item => <FoodCards key={item._id} item={item}></FoodCards>)
            }
        </div>
    );
};

export default Ordertab;