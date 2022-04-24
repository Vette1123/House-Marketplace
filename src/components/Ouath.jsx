import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import googleIcon from "../assets/svg/googleIcon.svg";
import facebookIcon from "../assets/svg/facebook.svg";
import githubIcon from "../assets/svg/github.svg";
import twitterIcon from "../assets/svg/twitter.svg";

function Ouath() {
  const location = useLocation();
  const navigate = useNavigate();
  const onProviderClick = async (eksde) => {
    try {
      const auth = getAuth();
      let provider = "";
      if (eksde === "google") {
        provider = new GoogleAuthProvider();
      } else if (eksde === "facebook") {
        provider = new FacebookAuthProvider();
      } else if (eksde === "github") {
        provider = new GithubAuthProvider();
      } else if (eksde === "twitter") {
        provider = new TwitterAuthProvider();
      }
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //   check for user in database
      const docRef = doc(db, "users", user.uid);
      const docData = await getDoc(docRef);
      //   if user is not in database, create user
      if (!docData.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "Up" : "In"} with</p>
      <div className="eksde">
        <button
          className="socialIconDiv"
          onClick={() => onProviderClick("google")}
        >
          <img className="socialIconImg" src={googleIcon} alt="google" />
        </button>
        <button
          className="socialIconDiv"
          onClick={() => onProviderClick("facebook")}
        >
          <img className="socialIconImg" src={facebookIcon} alt="facebook" />
        </button>
        <button
          className="socialIconDiv"
          onClick={() => onProviderClick("github")}
        >
          <img className="socialIconImg" src={githubIcon} alt="github" />
        </button>
        <button
          className="socialIconDiv"
          onClick={() => onProviderClick("twitter")}
        >
          <img className="socialIconImg" src={twitterIcon} alt="twitter" />
        </button>
      </div>
    </div>
  );
}

export default Ouath;
