
// import "./VerifyActivity.css";
// import Api from "../auth/api";
// import TActivityDetailModal from "./TActivityDetailModel";
// const VerifyActivityDetail = ({ activity, onBack }) => {
//     const VerifyActivity = async status => {
// //     await Api.patch(`http://localhost:5000/api/activities/${id}/verify`,
// //     { status });
// //     alert(`Activity ${status}`);
// //     onBack();
// // };
// try {
//       await Api.patch(`/activities/${activity._id}/verify`, { status });
//       alert(`Activity ${status}`);
//       onBack(); // go back to list
//     } catch (err) {
//       console.error("Verification Error:", err);
//       alert("Failed to verify activity");
//     }
//   };
//   if (!activity) return null;

//   return (
//     <div className="verify-container">
//       <h2>Verify Activity</h2>

//       <h2>{activity.title}</h2>
//       <p>{activity.description}</p>
//       <p>Category: {activity.category}</p>
//       <p>Date: {new Date(activity.dateOfEvent).toDateString()}</p>
//       <div>
//         {activity.proof?.map((url, i) => (
//           <a key={i} href={url} target="_blank" rel="noreferrer">Proof {i+1}</a>
//         ))}
//       </div>
//       <button onClick={() => VerifyActivity("approved")}>✅ Approve</button>
//       <button onClick={() => VerifyActivity("rejected")}>❌ Reject</button>
//     </div>
//   );
// };

// export default VerifyActivityDetail;
