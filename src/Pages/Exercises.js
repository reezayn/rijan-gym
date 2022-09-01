import React,{useState, useEffect} from 'react'
import ExercisesReults from '../Components/ExercisesReults';
import HorizontalScrollbar from '../Components/HorizontalScrollbar';
import '../Components/Styles/Exercises.css'

import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <div className='exercises-container relative top-[65px] lg:top-[75px]'>
        <div className="h-[100vh]">
            <div className="searchbox flex flex-col absolute top-[75px] min-w-full justify-center items-center">
                <input value={search}
                       onChange={(e) => setSearch(e.target.value.toLowerCase())}
                       placeholder='Search Exercises'
                       className='h-[45px] w-[320px] rounded-[10px] text-black p-4' 
                       type="text" />
                <button onClick={handleSearch} className='btn flex justify-center items-center p-1 m-6 w-[125px] h-[46px] lg:w-[150px] lg:text-[18px] lg:h-[50px]'>SEARCH</button>
            </div>
            <div className="horizontalscrollbar absolute w-full top-[220px]">
              <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
              <ExercisesReults exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
            </div>
        </div>
    </div>
        
  )
}

export default Exercises