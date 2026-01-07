import { createContext } from "react"

const userInformation = createContext({
 username: "default User" //by default, i'm creating the context with default value. Now from app.js we can provide or update the actual data
});
export default userInformation;