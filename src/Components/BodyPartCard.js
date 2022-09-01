import React from 'react'
import Icon from '../Assets/icons/gym.png'

const BodyPartCard = ({item, bodyPart, setBodyPart}) => {
  return (
    <div 
    className='
        flex flex-col
        cursor-pointer
        w-[200px]
        h-[200px]
        justify-center
        items-center
    ' 
    style={{
        borderTop: bodyPart === item? '4px solid red' : ''
    }}

    onClick={() => {
        setBodyPart(item);
        window.scrollTo({top:400, left:100, behavior:'smooth'})
    }}
    >
        <img src={Icon} alt="dumbell" className='w-[52px] h-[52px]' />
        <div className='capitalize'>{item}</div>
        
    </div>
  )
}

export default BodyPartCard