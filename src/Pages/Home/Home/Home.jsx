import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../Menu/PopularMenu";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FlavorFiesta | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;