import React, {useState, useEffect} from 'react'
import './Styles/ExercisesResult.css'
import { Pagination } from '@mui/material'
import { Stack } from '@mui/system'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const ExercisesReults = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div className='exercises-result-container'>
        <div className='text-center text-[25px] mt-[25px]'>Results</div>
        <div className='flex flex-row flex-wrap justify-center w-full'>
            {currentExercises.map((exercise, index) => ( 
                <ExerciseCard key={index} exercise={exercise} />
            ))}
        </div>
        {/* This stack below is for pagination and uses material UI. Shall any problem arise regarding framewokrs, it is to be delted from it entireity */}
        <div className='relative min-w-full flex justify-center items-center pb-[35px]'>
            <div className='bg-white p-[5px] w-[250px] md:w-[500px] rounded-[15px]'>
                <Stack alignItems='center'>
                        {exercises.length > exercisesPerPage && (
                            <Pagination
                                color="primary"
                                defaultPage={1}
                                count= {Math.ceil(exercises.length / exercisesPerPage)}
                                page={currentPage}
                                onChange={paginate}
                                size='large'
                            />
                        )}
                </Stack>
            </div>
        </div>
    </div>
  )
}

export default ExercisesReults