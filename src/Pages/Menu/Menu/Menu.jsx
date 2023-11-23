import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import Offered from '../../Home/Menu/Offered';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>FlavorFiesta | Menu</title>
            </Helmet>
            {/* main cover img loaded hardCoded */}
            <Cover img={menuImg} title={'OUR MENU'} desc={'Would you like to try a dish?'}></Cover>
            {/* offerd manu items loaded hardCoded */}
            <Offered></Offered>

            {/* dessert menu items */}
            <MenuCategory
                items={dessert}
                title={'dessert'}
                img={dessertImg}
                desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title={'pizza'}
                img={pizzaImg}
                desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>

            {/* salad menu items */}
            <MenuCategory
                items={salad}
                title={'salad'}
                img={saladImg}
                desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>

            {/* soups menu items */}
            <MenuCategory
                items={soup}
                title={'soup'}
                img={soupImg}
                desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></MenuCategory>

        </div>
    );
};

export default Menu;