//Global Object Assuming asscess any where in the component

import { createContext } from "react"

const UserContext = createContext({
    loggedInUser:"Default User",
});


export default UserContext;