// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// export default function AssignmentStudent() {
//   const { id } = useParams(); // ✅ if URL has :id, show single assignment
//   const [assignments, setAssignments] = useState([]);
//   const [assignment, setAssignment] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAssignments = async () => {
//       const token = localStorage.getItem("tresetu_token");
//       if (!token) {
//         console.error("No token found. Please login.");
//         setLoading(false);
//         return;
//       }

//       try {
//         if (id) {
//           // Single assignment detail
//           const res = await fetch(`http://localhost:5000/api/assignment/${id}`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           const data = await res.json();
//           if (data.success) setAssignment(data.assignment);
//         } else {
//           // List of assignments
//           const res = await fetch("http://localhost:5000/api/assignment", {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           const data = await res.json();
//           console.log("Assignments fetched:", data.assignments);
//           if (data.success) setAssignments(data.assignments);
//         }
//       } catch (err) {
//         console.error("Error fetching assignments:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAssignments();
//   }, [id]);

//   if (loading) return <p className="p-6">Loading...</p>;

//   // ✅ Single assignment detail view
//   if (id && assignment) {
    
//     return (
//       <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded-xl">
//         <h2 className="text-2xl font-bold mb-2">{assignment.title}</h2>
//         <p className="mb-4">{assignment.description}</p>
//         <p className="text-gray-500 mb-2">
//           Start: {new Date(assignment.start).toLocaleString()}
//         </p>
//         <p className="text-gray-500 mb-4">
//           Due: {new Date(assignment.dueDate).toLocaleString()}
//         </p>

//         {assignment.attachments?.length > 0 && (
//           <div className="mb-4">
//             <h3 className="font-semibold mb-2">Attachments:</h3>
//             {assignment.attachments.map((file, index) => (
//               <a
//                 key={index}
//                 href={`http://localhost:5000/uploads/${file}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="block text-blue-600 underline mb-1"
//               >
//                 {file.split("/").pop()}
//               </a>
//             ))}
//           </div>
//         )}

//         <Link
//           to="/AssignmentStudent"
//           className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Back to Assignments
//         </Link>
//       </div>
//     );
//   }

//   // ✅ Assignment list view
//   return (
//     <div className="p-6 grid grid-cols-3 gap-6">
//       {assignments.map((a) => (
//         <Link
//           key={a._id}
//           to={`/AssignmentStudent/${a._id}`}
//           className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
//         >
//           <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
//           <p className="text-gray-600 mb-2">
//             {a.description?.substring(0, 60)}...
//           </p>

//           {a.attachments?.length > 0 && (
//             <div>
//               <h4 className="text-sm font-medium text-gray-500 mb-1">
//                 Attachments:
//               </h4>
//               {a.attachments.map((file, index) => (
//                 <span
//                   key={index}
//                   className="block text-blue-600 underline text-sm mb-1"
//                 >
//                   {file.split("/").pop()}
//                 </span>
//               ))}
//             </div>
//           )}
//         </Link>
//       ))}
//     </div>
//   );
// }
