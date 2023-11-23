import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
    return (
        <div className="border max-w-screen-2xl mx-auto featured py-28 px-40 pt-20 my-16 rounded border-none bg-fixed text-yellow-50">
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'---Check it out---'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-10">
                <div>
                    <img className="rounded" src={featured} alt="" />
                </div>
                <div className="">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-r-2 mt-5 text-yellow-50">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;