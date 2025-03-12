import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    
    for (let index=0; index < 300 + 1; index++){
        cart[index] = 0;
    }
    return cart
}


const ShopContextProvider = (props) => {
    
    const [cartItems, setcartItems] = useState(getDefaultCart());
    const [all_products, setAll_products] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/allproducts")
        .then((response) => response.json())
        .then((data) => setAll_products(data));

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/formdata',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            }).then((response) => response.json()).then((data) => setcartItems(data));
        }
    }, []) // connects to backend and fetches all products that was added from admin side
    
    // console.log(cartItems)
    const addToCart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
        // console.log(cartItems);
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/formdata',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"itemId": itemId})
            }).then((response) => response.json()).then((data) => console.log(data));
        }
    }
    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/formdata',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"itemId": itemId})
            }).then((response) => response.json()).then((data) => console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if (cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };
    
    return (
        <div>
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        </div>
    );
};

export default ShopContextProvider;