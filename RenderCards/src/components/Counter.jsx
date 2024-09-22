import react, {useState} from 'react';
function Counter() {

	let [score, setScore] = useState(0)
	let handleReset=()=>{
		setScore(0)
		alert('Counter reset successfull')
	}

	return(
		<div>
			<h1 className='font-bold text-lg text-[50px] mb-5 ml-[46%]'> {score} </h1>
			<div className='buttons flex  gap-2 '>
				<button onClick={()=>{setScore(score--)}} className='w-[7vw] h-[3vw] text-center  rounded text-[30px] text-white bg-[#88df88]'> -				
				</button>

				<button onClick={handleReset} className='w-[7vw] h-[3vw] text-center  rounded text-[30px] text-white bg-[#e12929]'> reset				
				</button>

				<button onClick={ ()=>{setScore(score++)} } className='w-[7vw] h-[3vw] text-center  rounded text-[30px] text-white bg-[#69eb67]'> +				
				</button>
			</div>
		</div>
	)
}

export default Counter;