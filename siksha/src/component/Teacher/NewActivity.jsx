import { useState } from "react";
// import axios from "axios";
import Api from "../auth/api";

import "./NewActivity.css"
const NewActivity  = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    files.forEach(f => formData.append("proof", f));
    try{
await Api.post("/activities", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    alert("Activity submitted!");
    setTitle("");        // clear form
    setDescription("");
    setFiles([]);
  } catch (err) {
    console.error("Upload Error:", err.response || err);
    alert("Error submitting activity: " + (err.response?.data?.message || err.message));
  }
  };
//     try {
//       const res = await axios.post("/api/Activity", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       alert("Uploaded successfully!");
//     } catch (err) {
//       alert("Error: " + err.response?.data?.message || err.message);
//     }
//   };

  return (
    <div className="upload-container">
      <h2>Add New Activity</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}
export default NewActivity ;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Api from "../auth/api"; // ✅ using your Api instance
// import "./NewActivity.css";

// const NewActivity= () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "other",
//     dateOfEvent: "",
//   });
//   const [files, setFiles] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // handle text/select/date inputs
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // handle file uploads
//   const handleFileChange = (e) => {
//     setFiles([...e.target.files]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (files.length === 0) {
//       alert("Please upload at least one proof file.");
//       return;
//     }
//     setIsSubmitting(true);

//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("category", formData.category);
//     data.append("dateOfEvent", formData.dateOfEvent);
//     files.forEach((file) => data.append("proof", file));

//     try {
//       await Api.post("/api/activity", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//         withCredentials: true, // if backend uses cookies
//       });

//       alert("Activity submitted for verification!");
//       // reset form
//       setFormData({ title: "", description: "", category: "other", dateOfEvent: "" });
//       setFiles([]);
//       navigate("/student"); // back to dashboard
//     } catch (err) {
//       console.error("Upload Error:", err.response || err);
//       alert("Error submitting activity: " + (err.response?.data?.message || err.message));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="upload-activity-container">
//       <form onSubmit={handleSubmit} className="upload-activity-form">
//         <h1>Upload New Activity</h1>
//         <p>Submit your achievements for verification by teachers.</p>

//         <input
//           type="text"
//           name="title"
//           placeholder="Activity Title (e.g., Smart India Hackathon 2025)"
//           value={formData.title}
//           onChange={handleInputChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Short description of your role or achievement"
//           value={formData.description}
//           onChange={handleInputChange}
//           required
//         />

//         <select name="category" value={formData.category} onChange={handleInputChange}>
//           <option value="hackathon">Hackathon</option>
//           <option value="event">Event</option>
//           <option value="volunteer">Volunteer</option>
//           <option value="certificate">Certificate</option>
//           <option value="other">Other</option>
//         </select>

//         <label htmlFor="dateOfEvent">Date of Event/Achievement</label>
//         <input
//           type="date"
//           name="dateOfEvent"
//           value={formData.dateOfEvent}
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor="proof">Upload Proof (Images, PDF Certificates)</label>
//         <input type="file" name="proof" onChange={handleFileChange} multiple required />

//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit for Verification"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewActivity;
