import { createContext, useState } from "react";
const adminContext = createContext();

export default function MainContext({ children }) {
    const [sideBar, setSideBar] = useState(true);
    return (
        <adminContext.Provider value={
            {
                sideBar,
                setSideBar
            }
        }>
            {children}
        </adminContext.Provider>
    )
}
export { adminContext }