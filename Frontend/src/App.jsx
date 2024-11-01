// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Table from './FrontEnd/Table';
import SignIn from './FrontEnd/SignIn';
import Register from './FrontEnd/Register';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Table />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/table" element={<Table />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;









// import React, { useEffect, useState } from 'react';
// import { MemoryRouter, Routes, Route, Navigate } from 'react-router';
// import Table from './FrontEnd/Table';
// import SignIn from './FrontEnd/SignIn';
// import Register from './FrontEnd/Register';

// // const ProtectedRoute = ({ isAuthenticated, children }) => {
// //   return isAuthenticated ? children : <Navigate to="/register" replace />;
// // };

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   alert(token)
//   //   if (token) {
//   //     setIsAuthenticated(true);
//   //   }
//   // }, []);

//   return (
//     <MemoryRouter>
//       <Routes>
//         {/* <Route
//           path="/"
//           element={<ProtectedRoute isAuthenticated={isAuthenticated}><Table /></ProtectedRoute>}
//         />
//         <Route path="/signin" element={<SignIn setAuth={isAuthenticated} />} />
//         <Route path="/register" element={<Register setAuth={isAuthenticated} />} />
//         <Route
//           path="/table"
//           element={<ProtectedRoute isAuthenticated={isAuthenticated}><Table /></ProtectedRoute>}
//         /> */}
//         <Route path="/" element={<Table/>} />
//         <Route path="/signin" element={<SignIn setAuth={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register setAuth={setIsAuthenticated} />} />

//       </Routes>
//     </MemoryRouter>
//   );
// }

// export default App;
