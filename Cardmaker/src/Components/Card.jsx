import React from 'react';

function Card({ user, onDelete }) {
  return (
    <div className='w-[15vw] bg-white rounded-lg flex flex-col p-2 border-4 border-violet-500'>
      <div className='w-[5vw] h-[5vw] rounded-full bg-[#f45c5c] ml-[27%] overflow-hidden'>
        <img className='w-full h-full object-cover' src={user.image} alt="" />
      </div>
      <h1 className='opacity-55 text-violet-600 text-center mt-1'>{user.email}</h1>
      <h1 className='text-center font-bold text-violet-600 text-xl'>
        {user.name}
      </h1>
      <p className='line-clamp-3 text-center'>
        Lorem ipsum dolor, sit hh hello that is why I continue to code consectetur adipisicing.
      </p>
      <button
        className='w-[10vw] py-1 bg-[#fd4040] ml-6 mt-1 rounded-lg text-white border-2 border-violet-600'
        onClick={() => onDelete(user.email)} // Pass the correct email to onDelete
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
