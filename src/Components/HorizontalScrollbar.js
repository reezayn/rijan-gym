import React, { useContext} from 'react'
import BodyPartCard from './BodyPartCard'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../Assets/icons/right-arrow.png';
import LeftArrowIcon from '../Assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        {
            data.map((item) => (
                <div
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    // className='mx-0 my-10'
                >
                    <BodyPartCard item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </div>
            ))
        }
    </ScrollMenu>
  )
}

export default HorizontalScrollbar