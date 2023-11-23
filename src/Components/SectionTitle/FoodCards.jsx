import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCards = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleaddToCart = () => {
        if (user && user.email) {
            // send cart item to database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} adde to cart seccessfully`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update cart items count
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login To Add To The Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-3 top-3 rounded-lg px-2 py-1 ">${price}</p>
            <div className="card-body">
                <h2 className="card-title flex justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={handleaddToCart}
                        className="btn btn-neutral">
                        add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCards;