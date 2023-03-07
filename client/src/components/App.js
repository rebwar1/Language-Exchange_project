import React, { useState, useEffect } from 'react';
import 'antd/dist/reset.css';
import '../assets/css/general.css';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Hedear from './generic/Header';
import Footer from './generic/Footer';
import Sidebar from './generic/Sidebar';
import DashboardLogin from './generic/DashboardLogin';
import DashboardSignup from './generic/DashboardSignup';
import ContactForm from './users/AddUsers';
import UserList from './users/ListUsers';

const { Content } = Layout;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const AddUsers = (video, id) => {
    video.id = id;
    setUsers([...users, video]);
  };
  // console.log(users);
  return (
    <div className="App">
      <Layout>
        <Hedear />
        <Layout>
          <Sidebar />
          <Content className="content">
            <Routes>
              <Route path="/login" element={<DashboardLogin />} />
              <Route path="/signup" element={<DashboardSignup />} />
              <Route
                path="/users/addUsers"
                element={<ContactForm AddUsers={AddUsers} />}
              />

              <Route
                path="/users/listUsers"
                element={<UserList users={users} />}
              />
            </Routes>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;

//💫
// import React, { useState, useEffect } from 'react';
// import 'antd/dist/reset.css';
// import '../assets/css/general.css';
// import { Layout } from 'antd';
// import { Routes, Route } from 'react-router-dom';
// import Hedear from './generic/Header';
// import Footer from './generic/Footer';
// import Sidebar from './generic/Sidebar';
// import DashboardWeek1 from './generic/DashboardWeek1';
// import DashboardWeek2 from './generic/DashboardWeek2';
// import DashboardWeek3 from './generic/DashboardWeek3';
// import ContactForm from './users/AddUsers';
// import UserList from './users/ListUsers';

// const { Content } = Layout;

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/users')
//       .then(res => res.json())
//       .then(data => setUsers(data.map(user => ({ ...user, image: null }))));
//   }, []);

//   const AddUsers = (user, image) => {
//     setUsers([...users, { ...user, image }]);
//   };

//   return (
//     <div className="App">
//       <Layout>
//         <Hedear />
//         <Layout>
//           <Sidebar />
//           <Content className="content">
//             <Routes>
//               <Route path="/Week1" element={<DashboardWeek1 />} />
//               <Route path="/Week2" element={<DashboardWeek2 />} />
//               <Route path="/Week3" element={<DashboardWeek3 />} />
//               <Route
//                 path="/users/addUsers"
//                 element={<ContactForm AddUsers={AddUsers} />}
//               />
//               <Route
//                 path="/users/listUsers"
//                 element={<UserList users={users} images />}
//               />
//             </Routes>
//           </Content>
//         </Layout>
//         <Footer />
//       </Layout>
//     </div>
//   );
// }

// export default App;
