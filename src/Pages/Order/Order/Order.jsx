import { Helmet } from "react-helmet-async";
import orderImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import Ordertab from "../OrderTab/Ordertab";
import { useParams } from "react-router-dom";

const Order = () => {
    const Categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = Categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const salad = menu.filter(item => item.category === 'salad');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>
            <Helmet>
                <title>FlavorFiesta | Order</title>
            </Helmet>
            <Cover img={orderImg} title={"ORDER FOOD"} desc={"Would you like to try a dish?"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="flex justify-center my-5 ">
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <Ordertab items={salad}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab items={pizza}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab items={soup}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab items={dessert}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab items={drinks}></Ordertab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;