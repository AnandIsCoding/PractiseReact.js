import React, { useState } from 'react'
import Card from './Card'
import { toast } from 'react-toastify';

function Cards({ courses, category }) {	
	const [likedCourses, setLikedCourses] = useState([]);	

	if (!courses || courses.length === 0) {
		return <p>No courses available.</p>;
	  }
	  
	function getCourses() {
		if (category === 'All') {
			let allCourses = [];
			Object.values(courses).forEach(array => {
				array.forEach(courseData => {
					allCourses.push(courseData);
				})
			});
			return allCourses;
		} else {
			// Safeguard: Ensure that courses[category] exists
			return courses[category] || [];
		}
	}
	
	const coursesToDisplay = getCourses();

 	return (
		<div className='flex gap-11 py-8 px-12 flex-wrap'> 
			{coursesToDisplay.length > 0 ? (
				coursesToDisplay.map((course, index) => (
					<Card key={index} course={course} likedcourses={likedCourses} setLikedcourses={setLikedCourses} />
				))
			) : (
				toast.error("No courses found for the selected category.")
			)}
		</div>
  	)
}

export default Cards;
