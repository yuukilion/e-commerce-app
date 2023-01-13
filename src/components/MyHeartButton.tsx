import { useState } from "react";
import { HeartFilled } from '@ant-design/icons';

export const MyHeartButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <HeartFilled style={{color: isClicked ? 'red': ''}} onClick={()=> setIsClicked(prev => !prev)}/>
    </>
  );
};