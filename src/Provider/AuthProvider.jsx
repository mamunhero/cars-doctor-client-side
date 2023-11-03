import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
 const AuthProvider = ({children}) => { 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // createUser 
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signIn
  const signIn = (email, password)=> {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // logout
  const logout = ()=> {
    setLoading(true)
    return signOut(auth)
  }
  
  const authInfo = {
    user,
    createUser,
    signIn,
    logout,
    loading
  }
  // auth state change
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
      if (currentUser) {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail};
        setUser(currentUser)
        setLoading(false)
        // if user exists than issue token axios
        if (currentUser) {
          axios.post("http://localhost:5000/jwt", loggedUser, {withCredentials:true})
          .then(res=> {
            console.log("tok tok token", res.data);
          })
          .catch((error) => {
            console.error("Error", error);
          });
        }
        // if user exits than issue token fetch
        // if (currentUser) {
        //   const loggedUser = {email: currentUser.email};
        //   fetch("http://localhost:5000/jwt", {
        //     method: "POST",
        //     headers: {
        //       "content-type": "application/json"
        //     },
        //     credentials: "include",
        //     body: JSON.stringify(loggedUser)
        //   })
        //   .then(response=> response.json())
        //   .then(data=> {
        //     console.log(" tok tok token",data);
        //   })
        //   .catch(error=> {
        //     console.log("Error", error);
        //   })
        // }
      }
      else {
        // clear cookie for logout axios
        axios.post("http://localhost:5000/logout", null, {withCredentials: true})
        .then(response=> {
          console.log("logout user", response.data);
        })
        .catch((error) => {
          console.error("Error", error);
        });
        // clear cookie for logout fetch
        // fetch("http://localhost:5000/logout", {
        //   method: "POST",
        //   headers: {
        //     "content-type" : "application.json"
        //   },
        //   credentials: "include",
        //   body: JSON.stringify(null)
        // })
        // .then(response=> response.json)
        // .then(data=> {
        //   console.log(data);
        // })
        setUser(null)
      }
    })
    return()=>{
      unSubscribe();
    }
  },[])
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

