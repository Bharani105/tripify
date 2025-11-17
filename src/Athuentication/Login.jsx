// // ? added firebase

// import React, { useState } from "react";
// import "./Auth.css";
// import { useNavigate } from "react-router-dom";
// import { BiLogoMediumOld } from "react-icons/bi";
// import loginImg from "../Assests/login.webp";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc, addDoc, collection } from "firebase/firestore";
// import { getAppAuth, getAppDB } from "../firebase";

// const Login = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const auth = getAppAuth();
//       const db = getAppDB();

//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         form.email,
//         form.password
//       );

//       const user = userCredential.user;

//       const userData = await getDoc(doc(db, "users", user.uid));
//       const profile = userData.exists() ? userData.data() : null;

//       await addDoc(collection(db, "loginLogs"), {
//         uid: user.uid,
//         name: profile?.name || "Unknown",
//         email: profile?.email || form.email,
//         time: new Date().toLocaleString(),
//       });

//       if ((profile?.email || form.email) === "tripifyAdmin@gmail.com") {
//         alert("👑 Welcome Admin!");
//         navigate("/admin");
//       } else {
//         alert(`Welcome back, ${profile?.name || "User"}!`);
//         navigate("/");
//       }
//     } catch (err) {
//       alert("❌ Invalid email or password");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="auth__wrapper">
//       <div className="auth__visual">
//         <img src={loginImg} alt="Login" className="auth__img" />
//         <div className="auth__text">
//           <h2>Welcome Back!</h2>
//           <p>Log in to explore beautiful destinations.</p>
//         </div>
//       </div>

//       <div className="auth__panel">
//         <BiLogoMediumOld className="auth__icon" />

//         <h2>Login to Your Account</h2>

//         <form onSubmit={handleSubmit} className="auth__form">
//           <input type="email" name="email" placeholder="Email Address"
//             value={form.email} onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password"
//             value={form.password} onChange={handleChange} required />

//           <button
//             type="submit"
//             className="auth__btn"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="auth__bottom-text">
//           Don’t have an account?{" "}
//           <span onClick={() => navigate("/signup")} className="auth__link">
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// ? added firebase

// import React, { useState } from "react";
// import "./Auth.css";
// import { useNavigate } from "react-router-dom";
// import { BiLogoMediumOld } from "react-icons/bi";
// import loginImg from "../Assests/login.webp";

// import { signInWithEmailAndPassword } from "firebase/auth";
// // import { doc, getDoc, addDoc, collection } from "firebase/firestore";
// import { doc, getDoc, addDoc, collection, query, where, getDocs } from "firebase/firestore";

// import { getAppAuth, getAppDB } from "../firebase";

// const Login = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   try {
//   //     const auth = getAppAuth();
//   //     const db = getAppDB();

//   //     // 1️⃣ Login using Firebase Authentication
//   //     const userCredential = await signInWithEmailAndPassword(
//   //       auth,
//   //       form.email,
//   //       form.password
//   //     );

//   //     const user = userCredential.user;

//   //     // 2️⃣ Check if user profile exists in Firestore
//   //     const userRef = doc(db, "users", user.uid);
//   //     const userSnap = await getDoc(userRef);

//   //     if (!userSnap.exists()) {
//   //       alert("⚠️ Your account profile is missing. Please complete Sign Up.");
//   //       navigate("/signup");
//   //       setLoading(false);
//   //       return;
//   //     }

//   //     const profile = userSnap.data();

//   //     // 3️⃣ Log login activity
//   //     await addDoc(collection(db, "loginLogs"), {
//   //       uid: user.uid,
//   //       name: profile?.name,
//   //       email: profile?.email,
//   //       time: new Date().toLocaleString(),
//   //     });

//   //     // 4️⃣ Admin redirect
//   //     if (profile.email === "tripifyadmin@gmail.com") {
//   //       alert("👑 Welcome Admin!");
//   //       navigate("/admin");
//   //     } 
//   //     // 5️⃣ Normal user redirect
//   //     else {
//   //       alert(`Welcome back, ${profile.name}!`);
//   //       navigate("/");
//   //     }

//   //   } catch (err) {
//   //     console.error(err);
//   //     alert("❌ Invalid email or password");
//   //   }

//   //   setLoading(false);
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const auth = getAppAuth();
//     const db = getAppDB();

//     // 🔍 1) CHECK IF EMAIL EXISTS IN FIRESTORE
//     const usersRef = collection(db, "users");
//     const q = query(usersRef, where("email", "==", form.email));
//     const snapshot = await getDocs(q);

//     if (snapshot.empty) {
//       alert("⚠️ No account found with this email. Please sign up first.");
//       navigate("/signup");
//       setLoading(false);
//       return;
//     }

//     // ✔ User exists → Get profile
//     const userDoc = snapshot.docs[0].data();

//     // 🔐 2) ATTEMPT FIREBASE LOGIN
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       form.email,
//       form.password
//     );

//     const user = userCredential.user;

//     // 📝 3) SAVE LOGIN LOG
//     await addDoc(collection(db, "loginLogs"), {
//       uid: user.uid,
//       name: userDoc?.name,
//       email: userDoc?.email,
//       time: new Date().toLocaleString(),
//     });

//     // 👑 4) ADMIN OR USER REDIRECT
//     if (userDoc.email === "tripifyadmin@gmail.com") {
//       alert("👑 Welcome Admin!");
//       navigate("/admin");
//     } else {
//       alert(`Welcome back, ${userDoc.name}!`);
//       navigate("/");
//     }

//   } catch (err) {
//     console.error(err);
//     alert("❌ Incorrect password. Please try again.");
//   }

//   setLoading(false);
// };


//   return (
//     <div className="auth__wrapper">
//       <div className="auth__visual">
//         <img src={loginImg} alt="Login" className="auth__img" />
//         <div className="auth__text">
//           <h2>Welcome Back!</h2>
//           <p>Log in to explore beautiful destinations.</p>
//         </div>
//       </div>

//       <div className="auth__panel">
//         <BiLogoMediumOld className="auth__icon" />

//         <h2>Login to Your Account</h2>

//         <form onSubmit={handleSubmit} className="auth__form">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" className="auth__btn" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="auth__bottom-text">
//           Don’t have an account?{" "}
//           <span onClick={() => navigate("/signup")} className="auth__link">
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { BiLogoMediumOld } from "react-icons/bi";
import loginImg from "../Assests/login.webp";

import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { getAppAuth, getAppDB } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const auth = getAppAuth();
      const db = getAppDB();

      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", form.email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        alert("⚠️ No account found with this user email. Please sign up first.");
        navigate("/signup");
        setLoading(false);
        return;
      }

      const userDoc = snapshot.docs[0].data();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      await addDoc(collection(db, "loginLogs"), {
        uid: user.uid,
        name: userDoc?.name,
        email: userDoc?.email,
        time: new Date().toLocaleString(),
      });

      if (userDoc.email === "tripifyadmin@gmail.com") {
        alert("👑 Welcome Admin!");
        navigate("/admin");
      } else {
        alert(`Welcome back, ${userDoc.name}!`);
        navigate("/");
      }

    } catch (err) {
      console.error(err);
      alert("❌ Incorrect password. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="auth__wrapper">
      <div className="auth__visual">
        <img src={loginImg} alt="Login" className="auth__img" />
        <div className="auth__text">
          <h2>Welcome Back!</h2>
          <p>Log in to explore beautiful destinations.</p>
        </div>
      </div>

      <div className="auth__panel">
        <BiLogoMediumOld className="auth__icon" />

        <h2>Login to Your Account</h2>

        <form onSubmit={handleSubmit} className="auth__form">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth__btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="auth__bottom-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")} className="auth__link">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
