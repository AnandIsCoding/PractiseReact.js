import React from 'react';
import { useForm } from 'react-hook-form';

function Form({ handleFormdata }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    handleFormdata(data); // Call the prop function with form data
   
  };

  return (
    <div>
      <form 
        className='flex justify-center gap-3 mt-16' 
        onSubmit={handleSubmit(onSubmit)}
      >
        <input 
          {...register('name', { required: true })} 
          type="text" 
          placeholder='Enter Name' 
          className='border-2 border-violet-600 rounded-lg px-2 py-2 text-violet-700' 
        />        
        <input 
          {...register('email', { required: true })} 
          type="email" 
          placeholder='email' 
          className='border-2 border-violet-600 rounded-lg px-2 py-2 text-violet-700' 
        />
        <input 
          {...register('image', { required: true })} 
          type="url" 
          placeholder='image url' 
          className='border-2 border-violet-600 rounded-lg px-2 py-2 text-violet-700' 
        />
        <button 
          type="submit" 
          className='w-[10vw] py-1 bg-violet-600 ml-6 mt-1 rounded-lg text-white text-lg border-2 border-white'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
