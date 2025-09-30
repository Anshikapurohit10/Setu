// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Api from '.././component/auth/api';

// const AuthContext = createContext(null);

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const storedUser = localStorage.getItem('user');
//     if (token && storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   // ADD THIS NEW SIGNUP FUNCTION
//   const signup = async (name, email, password, role) => {
//     // 1. Call the register endpoint
//     const response = await Api.post('/auth/register', { name, email, password, role });
//     const { token, user: signedUpUser } = response.data;
    
//     if (token && signedUpUser) {
//       // 2. Save to localStorage
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(signedUpUser));
//       // 3. IMMEDIATELY update the context's state. This is the key fix.
//       setUser(signedUpUser); 
//     }
//   };

//   const login = async (email, password) => {
//     const response = await Api.post('/auth/login', { email, password });
//     const { token, user: loggedInUser, under_verification } = response.data;

//     if (under_verification) {
//       throw new Error("Profile is under verification.");
//     }
    
//     if (token && loggedInUser) {
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(loggedInUser));
//       setUser(loggedInUser);
//       navigate(loggedInUser.role === 'student' ? '/student' : '/teacher');
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/login');
//   };

//   // Expose the new signup function in the context's value
//   const value = { user, signup, login, logout, loading };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };