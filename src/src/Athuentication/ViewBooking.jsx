import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { getAppDB } from "../firebase";
import "./ViewBooking.css";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const db = getAppDB();
    const bookingsRef = collection(db, "bookings");

    const q = query(bookingsRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(data);
    });

    return () => unsubscribe();
  }, []);

  // ⭐ Delete Booking
  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmDelete) return;

    try {
      const db = getAppDB();
      await deleteDoc(doc(db, "bookings", id));
      alert("Booking deleted successfully.");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete booking. Try again.");
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">📋 All Bookings</h1>

      <div className="table-wrapper">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Tour</th>
              <th>Travelers</th>
              <th>Amount</th>
              <th>Payment ID</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">No bookings yet.</td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr key={b.id}>
                  <td>{b.fullName}</td>
                  <td>{b.email}</td>
                  <td>{b.tourName}</td>
                  <td>{b.travelers}</td>
                  <td>₹{b.amount}</td>
                  <td className="payment-id">
                    {b.paymentId === "UNPAID" ? (
                      <span className="unpaid">UNPAID</span>
                    ) : (
                      b.paymentId
                    )}
                  </td>
                  <td>{new Date(b.createdAt).toLocaleDateString()}</td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteBooking(b.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBookings;
