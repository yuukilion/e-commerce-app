import { useState } from "react";
import { HeartFilled } from '@ant-design/icons';
import { Button } from "antd";

export const MyHeartButton = (props: any) => {
  const { toggleWishList } = props;
  const [isClicked, setIsClicked] = useState(false);

  const addWishList = () => {
    setIsClicked(prev => !prev);
    toggleWishList();
  }
  return (
    <Button shape="circle" danger={isClicked} style={{}} onClick={addWishList}>
      <HeartFilled style={{color: isClicked ? 'red': ''}} />
    </Button>
  );
};