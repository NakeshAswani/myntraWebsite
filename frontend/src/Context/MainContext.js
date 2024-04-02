import { createContext, useEffect, useState } from "react";
const myntraContext = createContext();

export default function MainContext({ children }) {
    const userData = JSON.parse(localStorage.getItem("userData")) ?? null;
    const userToken = JSON.parse(localStorage.getItem("userToken")) ?? null;
    const order = JSON.parse(localStorage.getItem("order")) ?? [{
        productName: "",
        categoryName: "",
        subCategoryName: "",
        productColor: "",
        productImage: "",
        productPrice: "",
        quantity: "",
        totalAmount: "",
        userId: "",
        orderAddress: "",
        paymentMode: ""
    }];
    const [sideBar, setSideBar] = useState(true);
    const [userDetails, setUserDetails] = useState(userData);
    const [token, setToken] = useState(userToken);
    const [orderDetails, setOrderDetails] = useState(order)
    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userDetails));
    }, [userDetails])
    useEffect(() => {
        localStorage.setItem("userToken", JSON.stringify(token));
    }, [token])
    useEffect(() => {
        localStorage.setItem("order", JSON.stringify(orderDetails));
    }, [orderDetails])
    return (
        <myntraContext.Provider value={
            {
                sideBar, setSideBar,
                userDetails, setUserDetails,
                token, setToken,
                orderDetails, setOrderDetails
            }
        }>
            {children}
        </myntraContext.Provider>
    )
}
export { myntraContext }