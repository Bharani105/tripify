//? added firebase

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

import { getDocs, collection } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { getAppAuth, getAppDB } from "../firebase";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [logins, setLogins] = useState([]);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAppAuth();
    const db = getAppDB();

    const adminEmail = auth.currentUser?.email;

    if (adminEmail !== "admin@gmail.com") {
      alert("🚫 Access denied! Admins only.");
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      const u = await getDocs(collection(db, "users"));
      setUsers(u.docs.map((d) => d.data()));

      const l = await getDocs(collection(db, "loginLogs"));
      setLogins(l.docs.map((d) => d.data()));

      setCheckingAuth(false);
    };

    fetchData();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(getAppAuth());
    alert("Logged out!");
    navigate("/login");
  };

  if (checkingAuth) {
    return (
      <div className="loader">
        <div className="spinner"></div>
        <p>Checking admin access...</p>
      </div>
    );
  }

  const totalUsers = users.length;
  const totalLogins = logins.length;
  const lastLogin =
    logins.length > 0 ? logins[logins.length - 1].time : "No logins yet";

  return (
    <div className="dashboard-container full-width">
      <nav className="admin-navbar">
        <div className="admin-logo">Tripify Admin</div>

        <div className="admin-links">
          <NavLink to="/" className="admin-home">🏠 Home</NavLink>

          {/* ⭐ ADDED: View Bookings Button */}
          <NavLink to="/admin/bookings" className="admin-home">
            📖 View Bookings
          </NavLink>

          <button className="admin-logout" onClick={handleLogout}>🚪 Logout</button>
        </div>
      </nav>

      <header className="header">
        <div className="header-top">
          <h1>👨‍💼 Admin Dashboard</h1>
          <p className="sub-header">Welcome, Admin — manage your platform</p>
        </div>
      </header>

      {/* ⭐ DASHBOARD CARDS */}
      <section className="cards-container">
        <div className="card">
          <h3>Total Registered Users</h3>
          <p className="card-value">{totalUsers}</p>
        </div>

        <div className="card">
          <h3>Total Logins</h3>
          <p className="card-value">{totalLogins}</p>
        </div>

        <div className="card">
          <h3>Last Login</h3>
          <p className="card-value">{lastLogin}</p>
        </div>

        <div className="card">
          <h3>Active Admin</h3>
          <p className="card-value">admin@gmail.com</p>
        </div>
      </section>

      {/* USERS TABLE */}
      <section className="table-section">
        <h2>🧑‍🤝‍🧑 Registered Users</h2>
        <table className="table">
          <thead>
            <tr><th>Name</th><th>Email</th></tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* LOGIN LOGS TABLE */}
      <section className="table-section">
        <h2>🔑 Login History</h2>
        <table className="table">
          <thead>
            <tr><th>Name</th><th>Email</th><th>Login Time</th></tr>
          </thead>
          <tbody>
            {logins.map((l, i) => (
              <tr key={i}>
                <td>{l.name}</td>
                <td>{l.email}</td>
                <td>{l.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Travel Management System | Admin Portal</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
