import React, { useState, useEffect } from 'react'

function Registration () {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    country: '',
    streetaddress: '',
    city: '',
    state: '',
    zip: '',
    comments: false, // Changed from candidate to comments
    candidates: false, // Changed from candidate to candidates
    offers: false,
    pushnotification: ''
  })

  const handleChange = event => {
    const { name, type, checked, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  useEffect(() => {
    // Logs formData every time it updates
  }, [formData])

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className='w-full bg-zinc-300 flex flex-col justify-center items-center p-1'>
      <form
        className='flex flex-col justify-center gap-3 border-2 border-blue-600 p-5 rounded-lg'
        onSubmit={handleSubmit}
      >
        <label
          htmlFor='fname'
          className='text-indigo-700 font-semibold text-xl'
        >
          First name
        </label>
        <input
          type='text'
          name='fname'
          id='fname'
          placeholder='Enter First Name'
          onChange={handleChange}
          className='w-[45vw] px-4 py-2 rounded-lg border-3 border-blue-600'
        />

        <label
          htmlFor='lname'
          className='text-indigo-700 font-semibold text-xl'
        >
          Last name
        </label>
        <input
          type='text'
          name='lname'
          id='lname'
          placeholder='Enter Last Name'
          onChange={handleChange}
          className='w-[45vw] px-4 py-2 rounded-lg border-3 border-blue-600'
        />

        <label
          htmlFor='email'
          className='text-indigo-700 font-semibold text-xl'
        >
          Enter email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter email'
          onChange={handleChange}
          className='w-[45vw] px-4 py-2 rounded-lg border-3 border-blue-600'
        />

        <label
          htmlFor='country'
          className='text-indigo-700 font-semibold text-xl'
        >
          Country
        </label>
        <select
          name='country'
          id='country'
          onChange={handleChange}
          className='w-[45vw] px-4 py-2 rounded-lg border-3 border-blue-600'
        >
          <option value=''>Select Country --</option>
          <option value='india'>India</option>
          <option value='pakistan'>Pakistan</option>
          <option value='china'>China</option>
          <option value='japan'>Japan</option>
          <option value='nepal'>Nepal</option>
        </select>

        <label
          htmlFor='streetaddress'
          className='text-indigo-700 font-semibold text-xl'
        >
          Enter Street Address
        </label>
        <input
          type='text'
          name='streetaddress'
          id='streetaddress'
          placeholder='Katihar 854105, Bihar'
          onChange={handleChange}
          className='w-[45vw] px-4 py-2 rounded-lg border-3 border-blue-600'
        />

        <label htmlFor='city' className='text-indigo-700 font-semibold text-xl'>
          City
        </label>
        <input
          type='text'
          name='city'
          id='city'
          placeholder='Katihar'
          onChange={handleChange}
          className='w-[45vw] px-4 py-2 rounded-lg border-3 border-blue-600'
        />

        <label
          htmlFor='state'
          className='text-indigo-700 font-semibold text-xl'
        >
          State
        </label>
        <select
          name='state'
          id='state'
          onChange={handleChange}
          className='w-[45vw] px-4 py-2 rounded-lg border-3 border-blue-600'
        >
          <option value=''>State--</option>
          <option value='bihar'>Bihar</option>
          <option value='up'>UP</option>
          <option value='kerala'>Kerala</option>
          <option value='bengal'>West Bengal</option>
          <option value='delhi'>Delhi</option>
          <option value='karnataka'>Karnataka</option>
        </select>

        <label htmlFor='zip' className='text-indigo-700 font-semibold text-xl'>
          Zip/Postal code
        </label>
        <input
          type='text'
          name='zip'
          id='zip'
          placeholder='zip/postal code'
          onChange={handleChange}
          className='w-[45vw] px-4 py-2 rounded-lg border-3 border-blue-600'
        />

        {/* Checkbox */}
        <label
          htmlFor='notify'
          className='text-indigo-700 font-semibold text-xl'
        >
          By Email
        </label>
        <div className='flex gap-1'>
          <input
            type='checkbox'
            name='comments'
            id='comments'
            className='w-[2vw] px-4 py-2 rounded-lg border-3 border-blue-600'
            onChange={handleChange}
            checked={formData.comments}
          />
          <h1 className='text-black font-semibold text-xl'>comments</h1>
        </div>
        <p className='ml-8 mt-[-1vw]'>
          Get notified when someone posts a comment on a posting
        </p>

        <div className='flex gap-1'>
          <input
            type='checkbox'
            name='candidates'
            id='candidates'
            className='w-[2vw] px-4 py-2 rounded-lg border-3 border-blue-600'
            onChange={handleChange}
            checked={formData.candidates}
          />
          <h1 className='text-black font-semibold text-xl'>candidates</h1>
        </div>
        <p className='ml-8 mt-[-1vw]'>
          Get notified when a candidate applies for a job
        </p>

        <div className='flex gap-1'>
          <input
            type='checkbox'
            name='offers'
            id='offers'
            className='w-[2vw] px-4 py-2 rounded-lg border-3 border-blue-600'
            onChange={handleChange}
            checked={formData.offers}
          />
          <h1 className='text-black font-semibold text-xl'>offers</h1>
        </div>
        <p className='ml-8 mt-[-1vw]'>
          Get notified when a candidate accepts or rejects an offer
        </p>

        {/* radiobutton */}

        <label
          htmlFor='pushnotifications'
          className='text-indigo-700 font-semibold text-xl'
        >
          Push Notifications
        </label>
        <p className=' mt-[-0.8vw]'>
          These are delivered via SMS to your mobile phone
        </p>

        <div className='flex gap-1'>
          <input
            type='radio'
            name='pushnotification'
            id='Everything'
            value='everything'
            onChange={handleChange}
          />
          <h1 className='text-black font-semibold text-xl'>Everything</h1>
        </div>

        <div className='flex gap-1'>
          <input
            type='radio'
            name='pushnotification'
            id='Same as email'
            value='Same as email'
            onChange={handleChange}
          />
          <h1 className='text-black font-semibold text-xl'>Same as email</h1>
        </div>

        <div className='flex gap-1'>
          <input
            type='radio'
            name='pushnotification'
            id='nopushnotification'
            value='nopushnotification'
            onChange={handleChange}
          />
          <h1 className='text-black font-semibold text-xl'>
            No push notification
          </h1>
        </div>

        <input
          type='submit'
          value='Submit'
          className='px-3 py-1 bg-[blue] text-white text-xl border-3 border-[green] rounded-lg font-bold'
        />
      </form>
    </div>
  )
}

export default Registration
