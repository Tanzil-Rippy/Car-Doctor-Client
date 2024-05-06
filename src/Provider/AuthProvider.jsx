import { createContext, useState } from "react";
import{getAuth} from "firebase/auth"
import app from "../Firebase/FirebaseConfig";

export const AuthContex = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)
    const [loader, setloader] = useState(true)

const authInfo ={
user,setuser,loader,setloader,
}

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
       </AuthContex.Provider>
    );
};

export default AuthProvider;