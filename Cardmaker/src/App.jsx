import React, { useState } from 'react';
import Cards from './Components/Cards';
import Form from './Components/Form';

function App() {
  const [users, setUsers] = useState([]);

  const handleFormdata = (data) => {
    setUsers([...users, data]);
     // Corrected the spread operator usage
  };

  const handleDelete=(email)=>{
    setUsers(users.filter(user => user.email !== email));
  }

  return (
    <div className="w-full h-screen p-8 bg-black">
      <Cards users={users} onDelete={handleDelete}/>
      <Form handleFormdata={handleFormdata} />
    </div>
  );
}

export default App;
