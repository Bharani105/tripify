import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { getAppAuth, getAppDB } from "../firebase";

const Navbar = () => {
  const [navbar, setNavbar] = useState("menu");
  const [user, setUser] = useState(null); // Firestore user data
  const navigate = useNavigate();

  // 🔥 Firebase Auth State Listener
  useEffect(() => {
    const auth = getAppAuth();
    const db = getAppDB();

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userSnap = await getDoc(doc(db, "users", currentUser.uid));
        setUser(userSnap.data());
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Mobile show/hide navbar
  const showNavbar = () => setNavbar("menu showNavbar");
  const hideNavbar = () => setNavbar("menu");

  // 🔥 Firebase Logout
  const handleLogout = async () => {
    await signOut(getAppAuth());
    alert("You’ve been logged out!");
    navigate("/login");
  };

  return (
    <div className="navBar">

      {/* Logo */}
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <NavLink to="/" onClick={hideNavbar}>
          <span>Tripify</span>
        </NavLink>
      </div>

      {/* Menu Links */}
      <div className={navbar}>
        <ul>
          <li className="navList">
            <NavLink to="/" className="navLi" onClick={hideNavbar}>
              Home
            </NavLink>
          </li>

          <li className="navList">
            <NavLink to="/about" className="navLi" onClick={hideNavbar}>
              About
            </NavLink>
          </li>

          <li className="navList">
            <NavLink to="/destination" className="navLi" onClick={hideNavbar}>
              Destination
            </NavLink>
          </li>

          <li className="navList">
            <NavLink to="/tour" className="navLi" onClick={hideNavbar}>
              Tour
            </NavLink>
          </li>

          <li className="navList">
            <NavLink to="/gallery" className="navLi" onClick={hideNavbar}>
              Gallery
            </NavLink>
          </li>

          <li className="navList">
            <NavLink to="/contact" className="navLi" onClick={hideNavbar}>
              Contact
            </NavLink>
          </li>

          {/* 🔥 Admin Dashboard Link */}
          {user?.email === "admin@gmail.com" && (
            <li className="navList">
              <NavLink to="/admin" className="navLi" onClick={hideNavbar}>
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>

        <AiFillCloseCircle className="icon closeIcon" onClick={hideNavbar} />
      </div>

      {/* Auth Buttons */}
      <div className="authButtons">
        {user ? (
          <>
            <span className="welcomeText">
              Hi, {user?.name?.split(" ")[0] || "User"}
            </span>

            <button className="btn logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn loginBtn" onClick={() => navigate("/login")}>
              Login
            </button>

            <button className="btn signUpBtn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </>
        )}
      </div>

      <MdMenu className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
};

export default Navbar;
