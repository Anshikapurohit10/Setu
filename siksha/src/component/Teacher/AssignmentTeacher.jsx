
import React, { useState, useEffect } from "react";
import "./assignmentteacher.css";
import Api from "../auth/api";

export default function TeacherAssignmentsDashboard() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({
    title: "",
    start: "",
    due: "",
    description: "",
    files: [],
  });

  const API_URL = "/assignment";

  // Fetch all assignments created by this teacher
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await Api.get(API_URL); // backend auth middleware will use token
        if (res.data.success) setAssignments(res.data.assignments);
      } catch (err) {
        console.error("Error fetching assignments:", err.response || err);
      } finally {
        setLoading(false);
      }
    };
    fetchAssignments();
  }, []);

  function handleFileChange(e) {
    setForm(prev => ({ ...prev, files: Array.from(e.target.files) }));
  }
// Delete assignment
const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this assignment?")) return;
  try {
    await Api.delete(`${API_URL}/${id}`);
    setAssignments(prev => prev.filter(a => a._id !== id));
  } catch (err) {
    alert("Error deleting assignment: " + (err.response?.data?.message || err.message));
  }
};

// Toggle active/inactive
const handleToggleStatus = async (id) => {
  try {
    const res = await Api.patch(`${API_URL}/${id}/toggle`);
    setAssignments(prev =>
      prev.map(a => (a._id === id ? res.data.assignment : a))
    );
  } catch (err) {
    alert("Error updating status: " + (err.response?.data?.message || err.message));
  }
};

  // Create assignment
  const handleCreateAssignment = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("start", form.start);
    formData.append("dueDate", form.due);
    form.files.forEach(f => formData.append("attachments", f));

    try {
      const res = await Api.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("Assignment created successfully!");

      const newAssignment = res.data.assignment || {
        _id: Date.now(),
        title: form.title,
        description: form.description,
        start: form.start,
        dueDate: form.due,
        attachments: form.files.map(f => f.name),
        isActive: true
      };
      setAssignments(prev => [newAssignment, ...prev]);
      setForm({ title: "", start: "", due: "", description: "", files: [] });
      setShowCreate(false);
    } catch (err) {
      console.error("Upload Error:", err.response || err);
      alert("Error creating assignment: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Teacher Dashboard</h1>
      <button className="create-btn" onClick={() => setShowCreate(true)}>
        + Create Assignment
      </button>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="assignment-list">
          {assignments.map(a => (
            <div key={a._id} className="assignment-card">
              <h3>{a.title}</h3>
              <p>
                Start: {new Date(a.start).toLocaleString()} | Due:{" "}
                {new Date(a.dueDate).toLocaleString()}
              </p>
              {a.description && <p>{a.description}</p>}
              {a.attachments?.map((file, i) => (
                <a
                  key={i}
                  href={file.startsWith("http") ? file : `http://localhost:5000/uploads/${file}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "block" }}
                >
                  {file.split("/").pop()}
                </a>
              ))}
              <span className={`status-badge ${a.isActive ? "status-active" : "status-inactive"}`}>
                {a.isActive ? "Active" : "Inactive"}
              </span>
                <div className="assignment-actions">
    <button
      onClick={() => handleToggleStatus(a._id)}
      className="toggle-btn"
    >
      {a.isActive ? "Deactivate" : "Activate"}
    </button>
    <button
      onClick={() => handleDelete(a._id)}
      className="delete-btn"
    >
      Delete
    </button>
  </div>
            </div>
          ))}
        </div>
      )}

      {showCreate && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h2>Create Assignment</h2>
              <button onClick={() => setShowCreate(false)}>✕</button>
            </div>
            <form onSubmit={handleCreateAssignment}>
              <label>Title</label>
              <input
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                required
              />
              <label>Start</label>
              <input
                type="datetime-local"
                value={form.start}
                onChange={e => setForm(f => ({ ...f, start: e.target.value }))}
                required
              />
              <label>Due</label>
              <input
                type="datetime-local"
                value={form.due}
                onChange={e => setForm(f => ({ ...f, due: e.target.value }))}
                required
              />
              <label>Description (optional)</label>
              <textarea
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                rows={4}
              />
              <label>Attachments (optional)</label>
              <input type="file" multiple onChange={handleFileChange} />
              <div className="modal-actions">
                <button type="button" onClick={() => setShowCreate(false)}>Cancel</button>
                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


// import React, { useState, useEffect } from "react";
// import "./assignmentteacher.css";
// import Api from "../auth/api";

// export default function TeacherAssignmentsDashboard() {
//   const [assignments, setAssignments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showCreate, setShowCreate] = useState(false);
//   const [form, setForm] = useState({
//     title: "",
//     start: "",
//     due: "",
//     content: "",
//     files: [], // multiple files
//   });
// const handleCreateAssignment = async () => {
//   const formData = new FormData();
//   formData.append("title", form.title);
 
//   formData.append("start", form.start);
//   formData.append("dueDate", form.due);
//   if (form.content) formData.append("content", form.content);
//   form.files.forEach(f => formData.append("attachments", f)); // field name must match backend

//   try {
//     const response = await Api.post("/assignment", formData, {
//       headers: { "Content-Type": "multipart/form-data" }
//     });

//     alert("Assignment created successfully!");

//     // Update local state to show new assignment immediately
//     const newAssignment = response.data.assignment || {
//       _id: Date.now(),
//       title: form.title,
//       start: form.start,
//       dueDate: form.due,
//       content: form.content,
//       attachments: form.files.map(f => f.name),
//       isActive: true
//     };
//     setAssignments(prev => [newAssignment, ...prev]);

//     // Clear form and close modal
//     setForm({ title: "", start: "", due: "", content: "", files: [] });
//     setShowCreate(false);

//   } catch (err) {
//     console.error("Upload Error:", err.response || err);
//     alert("Error creating assignment: " + (err.response?.data?.message || err.message));
//   }
// };

//   const API_URL = "http://localhost:5000/api/assignment";

//   useEffect(() => {
//     fetch(API_URL, {
//       headers: { Authorization: "Bearer " + localStorage.getItem("token") },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//          if (data.success) {
//     setAssignments((prev) => [data.assignment, ...prev]); // <-- yeh line list me add kar rahi hai
//     setShowCreate(false);
//     setForm({ title: "", start: "", due: "", content: "", files: [] });
//   }
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   function handleFileChange(e) {
//     setForm((prev) => ({ ...prev, files: Array.from(e.target.files) }));
//   }

//   function createAssignment(e) {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", form.title);
//     formData.append("start", form.start);
//     formData.append("dueDate", form.due);
//     if (form.content) formData.append("content", form.content);
//     form.files.forEach((file) => formData.append("attachments", file));

//     fetch(API_URL, {
//       method: "POST",
//       headers: { Authorization: "Bearer " + localStorage.getItem("token") },
//       body: formData,
//     })
//       .then((res) => res.json())
      
        
// .then((data) => {
//   console.log("Created assignment:", data);
//   if (data.success) {
//      const newAssignment = data.assignment || {
//     _id: Date.now(),
//     name: form.title,
//     start: form.start,
//     dueDate: form.due,
//     content: form.content,
//     attachments: form.files.map(f => f.name),
//     isActive: true
//   };
//     setAssignments((prev) => [newAssignment, ...prev]);
//     setShowCreate(false);
//     setForm({ title: "", start: "", due: "", content: "", files: [] });
//   }
// });

  
// }
  

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <h1>Teacher Dashboard</h1>
//         <div className="assignment-list">
//   {assignments.map((a) => (
//     <div key={a._id} className="assignment-card">
//       <div>
//         <h3>{a.name}</h3>
//         <p>
//           Start: {new Date(a.start).toLocaleString()} | Due:{" "}
//           {new Date(a.dueDate).toLocaleString()}
//         </p>
//         {a.content && <p>{a.content}</p>}
//         {a.attachments &&
//           a.attachments.map((file, i) => (
//             <a
//               key={i}
//               href={`http://localhost:5000/uploads/${file}`}
//               target="_blank"
//               rel="noreferrer"
//               style={{ display: "block" }}
//             >
//               {file}
//             </a>
//           ))}
//       </div>
//       <span
//         className={`status-badge ${
//           a.isActive ? "status-active" : "status-inactive"
//         }`}
//       >
//         {a.isActive ? "Active" : "Inactive"}
//       </span>
//     </div>
//   ))}
// </div>

//         <button className="create-btn" onClick={() => setShowCreate(true)}>
//           + Create Assignment
//         </button>
//       </div>

//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="assignment-list">
//           {assignments.map((a) => (
//             <div key={a._id} className="assignment-card">
//               <div>
//                 <h3>{a.name}</h3>
//                 <p>
//                   Start: {new Date(a.start).toLocaleString()} | Due:{" "}
//                   {new Date(a.dueDate).toLocaleString()}
//                 </p>
//                 {a.content && <p>{a.content}</p>}
//                 {a.attachments &&
//                   a.attachments.map((file, i) => (
//                     <a
//                       key={i}
//                       href={`http://localhost:5000/uploads/${file}`}
//                       target="_blank"
//                       rel="noreferrer"
//                       style={{ display: "block" }}
//                     >
//                       {file}
//                     </a>
//                   ))}
//               </div>
//               <span
//                 className={`status-badge ${
//                   a.isActive ? "status-active" : "status-inactive"
//                 }`}
//               >
//                 {a.isActive ? "Active" : "Inactive"}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}

//       {showCreate && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <div className="modal-header">
//               <h2>Create Assignment</h2>
//               <button onClick={() => setShowCreate(false)}>✕</button>
//             </div>
//             <form onSubmit={createAssignment}>
//               <div>
//                 <label>title</label>
//                 <input
//                   value={form.title}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, name: e.target.value }))
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Start</label>
//                 <input
//                   type="datetime-local"
//                   value={form.start}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, start: e.target.value }))
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Due</label>
//                 <input
//                   type="datetime-local"
//                   value={form.due}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, due: e.target.value }))
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Assignment Text (optional)</label>
//                 <textarea
//                   value={form.content}
//                   onChange={(e) => setForm({ ...form, content: e.target.value })}
//                   placeholder="Type assignment instructions here..."
//                   rows={4}
//                 />
//               </div>
//               <div>
//                 <label>Upload Files (optional, multiple)</label>
//                 <input type="file" multiple onChange={handleFileChange} />
//               </div>

//               <div className="modal-actions">
//                 <button
//                   type="button"
//                   className="cancel-btn"
//                   onClick={() => setShowCreate(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="submit-btn"onClick={handleCreateAssignment}>
//                   Create
//                 </button>
                
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
