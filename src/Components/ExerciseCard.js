import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  return (
    <div className='m-10 p-5 border-t-4 border-red-600 '>
      <Link className='exercise-card flex flex-col justify-center' to={`/exercise/${exercise.id}`}>
        <img className='rounded-[20px] h-[200px] md:h-[300px]' src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <div className="flex flex-row justify-center">
          <button className='my-[14px] p-[6px] rounded-[10px] bg-orange-500 capitalize'>
            {exercise.bodyPart}
          </button>
          <button className='m-[14px] ml-[20px] p-[6px] rounded-[10px] bg-red-500 capitalize'>
            {exercise.target}
          </button>
        </div>
        <div className='capitalize flex justify-center text-center'>
        {exercise.name}
        </div>
      </Link>
    </div>
  )
}

export default ExerciseCard