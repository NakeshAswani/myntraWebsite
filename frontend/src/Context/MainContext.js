import { createContext, useState } from "react";
let adminContext = createContext();

export default function MainContext({children}) {
    let [sideBar, setSideBar] = useState(true);
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