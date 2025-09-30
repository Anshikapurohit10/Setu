import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VerifyAccounts.css";
import API from "../auth/api"; 
const ProfileVerification = () => {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProfiles();
  }, []);


const fetchProfiles = async () => {
  try {
    const res = await API.get("/admin/profiles/pending"); 
    console.log("Profiles response:", res.data);
    setProfiles(res.data.list || []);
  } catch (err) {
    console.error("Error fetching profiles:", err);
  }
};


  // Approve profile
  const approveProfile = async (id) => {
    try {
      const token = localStorage.getItem("tresetu_token");
      await axios.put(
        `https://setu-h683.onrender.com/api/admin/profiles/${id}/approve`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProfiles(profiles.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error approving profile:", err);
    }
  };

  // Reject profile
  const rejectProfile = async (id) => {
    try {
      const token = localStorage.getItem("tresetu_token");
      await axios.delete(
        `http://localhost:5000/api/admin/profiles/${id}/reject`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProfiles(profiles.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error rejecting profile:", err);
    }
  };

  return (
    <div className="approve-container">
      {/* Header */}
      <div className="approve-header">
        <h1>Approve Profiles </h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Student"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="approve-table-wrapper">
        <table className="approve-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>course</th>
              <th>Roll No</th>
              <th>Email</th>
              <th>College</th>
              <th>Semester</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {profiles.length > 0 ? (
              profiles
                .filter((p) =>
                  p.user?.name?.toLowerCase().includes(search.toLowerCase())
                )
                .map((p, idx) => (
                  <tr key={p._id}>
                    <td>{idx + 1}</td>
                    <td>{p.user?.name}</td>
                    <td>{p.course}</td>
                    <td>{p.rollNumber}</td>
                    <td>{p.user?.email}</td>
                    <td>{p.collegeName}</td>
                    <td>{p.semester}</td>
                    <td className="action-buttons">
                      <button
                        className="approve-btn"
                        onClick={() => approveProfile(p._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="reject-btn"
                        onClick={() => rejectProfile(p._id)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="8" className="no-data">
                  No pending profiles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}
export default ProfileVerification ;
