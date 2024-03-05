import { createContext, useState } from "react";

let adminContext = createContext();
export default function MainContext(props) {
    let [sidBar, setSitBar] = useState(true);

    return (
        <adminContext.Provider value={{
            sidBar, setSitBar,
        }}>
            {props.children}
        </adminContext.Provider>
    )
}
export{adminContext}