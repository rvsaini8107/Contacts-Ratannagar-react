import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db, doc, getDoc, provider, setDoc } from "../Firebase.js";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmitSignUpForm = () => {


    console.log("user**>", user);
    const { email, password, confirmPassword } = user;
    if (password !== confirmPassword) {
      console.log("Password & Confirm Password Not Match !");
      toast.error("Password & Confirm Password Not Match !")
    } else {
      if (email != "" && password != "" && confirmPassword != "") {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("new User id>>>", user);
            toast.success("Signup Successful");
            user = {
              email: "",
              password: "",
              confirmPassword: "",
            };
            setLoading(false);
            createDoc(user);
            console.log("user", user);

            // create a doc with user id as the following id
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // toast.error(errorCode);
            console.log(error);
            toast.error(errorMessage,"error");
            setLoading(false);
            // ..
          });
      }else{
        toast.error("All fields are required");
      }
    }
  };
  // create Doc firebase
  // function LoginWithEmail() {
  //   console.log("login details", email, password);
  //   if (email.length !== "" && password.length !== "") {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         toast.success("Login Successful");
  //         setEmail("");
  //         setPassword("");
  //         setLoading(false);

  //         navigate("/dashboard");
  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         toast.error(errorMessage);
  //         setLoading(false);
  //       });
  //   } else {
  //     toast.error("All fields are required");
  //   }
  // }
  function GoogleAuth() {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          createDoc(user);
          toast.success("User Authenticated Successful");

          navigate("/");
          console.log("user>>>>Google", user);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          toast.error(errorMessage, "Google Signin Error");
        });
    } catch (error) {
      console.log(error, "google Auth error");
    }
  }
  async function createDoc(user) {
    setLoading(true);
    // make sure that the doc  with uid does not exist
    if (!user) return;
    const userRef = doc(db, "users", user.uid);
    const userData = await getDoc(userRef);
    if (!userData.exists()) {
      try {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName ? user.displayName : "",
          email: user.email,
          photoURL: user.photoURL ? user.photoURL : "",
          createdAt: new Date(),
        });

        toast.success("Doc Created Successful");
        setLoading(false);
      } catch (error) {
        console.log(error, "this is errorrr");
        toast.error(error.message, "this is error");
        setLoading(false);
      }
    } else {
      toast.error("User already exists");
      setLoading(false);
    }
    setLoading(false);
  }
  return (
    <div className="container-card">
      <div className="login-card">
        <div className="content" >
          <div className="box-login box-login-1">
            <h2>SignUp</h2>
          </div>
          
          <div className="box-login box-login-2">
            <input
              type="email"
              className="input-login"
              name="email"
              id="Signup-input"
              required
              placeholder="Email :"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="box-login box-login-3">
            <input
              type="password"
              className="input-login"
              name=""
              required
              id="loginPassword"
              placeholder="Password :"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="box-login box-login-4">
            <input
              required
              type="password"
              className="input-login"
              name=""
              id="loginPassword"
              placeholder="Confirm Password :"
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="box-login box-login-4">
            <button type="submit" onClick={() => onSubmitSignUpForm()} className="loginbutton">
             {loading?"loading...":"SignUp"} 
            </button>
            <p className="orText">or</p>
            <button onClick={()=>GoogleAuth()} className="loginbutton googleSignupbtn">
            {loading?"loading...":"Google SignUp"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
