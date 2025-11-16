// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Signup from "./Athuentication/Signup";
// import Login from "./Athuentication/Login";
// import Home from "./Pages/Home";
// import Destination from "./Pages/Destinations";
// import Tours from "./Pages/Tours";
// import Gallery from "./Pages/Gallery";
// import About from "./Pages/About_Us";
// import Contact from "./Pages/Contact";
// import Book from "./Pages/Book";
// import AdminDashboard from "./Athuentication/AdminDashboard";
// import "./App.css";

// // ✅ Protected route logic
// const ProtectedRoute = ({ children }) => {
//   const loggedInUser = localStorage.getItem("loggedInUser");

//   if (!loggedInUser) {
//     alert("⚠️ Please log in before accessing this page!");
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// // ✅ Main app
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* Admin route (protected) */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* Other routes */}
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/about"
//           element={
//             <ProtectedRoute>
//               <About />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/destination"
//           element={
//             <ProtectedRoute>
//               <Destination />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/tour"
//           element={
//             <ProtectedRoute>
//               <Tours />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/gallery"
//           element={
//             <ProtectedRoute>
//               <Gallery />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <ProtectedRoute>
//               <Contact />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/travel-booking"
//           element={
//             <ProtectedRoute>
//               <Book />
//             </ProtectedRoute>
//           }
//         />

//         {/* Redirect any unknown path */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


// ? added firebase

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signup from "./Athuentication/Signup";
import Login from "./Athuentication/Login";
import Home from "./Pages/Home";
import Destination from "./Pages/Destinations";
import Tours from "./Pages/Tours";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About_Us";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import AdminDashboard from "./Athuentication/AdminDashboard";
import BookingSuccess from "./Components/BookingSuccess";
import ViewBookings from "./Athuentication/ViewBooking";

import { onAuthStateChanged } from "firebase/auth";
import { getAppAuth } from "./firebase";

import "./App.css";


// ✅ Firebase Protected Route (Updated)
const ProtectedRoute = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAppAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authChecked) return <p>Loading...</p>;

  if (!isLoggedIn) {
    alert("⚠️ Please log in before accessing this page!");
    return <Navigate to="/login" replace />;
  }

  return children;
};


// ✅ Main App — unchanged except for ProtectedRoute fix
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Admin route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Other routes (now Firebase protected) */}
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/destination"
          element={
            <ProtectedRoute>
              <Destination />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tour"
          element={
            <ProtectedRoute>
              <Tours />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tour/travel-booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/booking-success" 
          element={
           <ProtectedRoute>
            <BookingSuccess />
           </ProtectedRoute>
          }
          />

        <Route 
          path="/admin/bookings" 
          element={
           <ProtectedRoute>
            <ViewBookings />
           </ProtectedRoute>
          }
          />


        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
