import Meta from 'antd/es/card/Meta';
import { Card, Typography, message } from 'antd'
import { MyHeartButton } from './MyHeartButton';
import { CartAtom, WishListAtom } from '../state/atom';
import { useAtom } from 'jotai';
import { ALL_PRODUCT_LIST } from '../state/product';
import { AddCartButton } from './AddCartButton';

const { Text } = Typography;

export const Item = (prop: any) => {
  const {img, name, description, price, id} = prop;
  const [wishList, setWishList] = useAtom(WishListAtom);
  const [cartList, setCartList] = useAtom(CartAtom);
  const [messageApi, contextHolder] = message.useMessage();

  const gridStyle: React.CSSProperties = {
      width: '100%',
      textAlign: 'end',
      padding: 0,
      boxShadow: 'none'
  }

  const toggleWishList = () => {
    const targetProduct = ALL_PRODUCT_LIST.find( product => product.id === id );
    const hasTargetInWishList = wishList.some( product => product === targetProduct);
    if(targetProduct && !hasTargetInWishList){
      messageApi.open({
        content: 'お気に入りリストに追加しました。',
        duration: 2,
        type: 'success'
      })
      const newWishList = [...wishList,targetProduct];
      setWishList(newWishList);
    }
    else if(targetProduct && hasTargetInWishList){
      messageApi.open({
        content: 'お気に入りリストから削除しました。',
        duration: 2,
        type: 'warning'
      })
      const newWishList = wishList.filter(product => product !== targetProduct);
      setWishList(newWishList); 
    }
  };

  const switchItemInCart = () => {
    const targetProduct = ALL_PRODUCT_LIST.find( product => product.id === id );
    const hasTargetInCart = cartList.some( product => product === targetProduct);
    if(targetProduct && !hasTargetInCart){
      messageApi.open({
        content: 'カートに追加しました。',
        duration: 2,
        type: 'success'
      })
      const newCartList = [...cartList,targetProduct];
      setCartList(newCartList);
    }
    else if(targetProduct && hasTargetInCart){
      messageApi.open({
        content: 'カートから削除しました。',
        duration: 2,
        type: 'warning'
      })
      const newCartList = cartList.filter(product => product !== targetProduct);
      setCartList(newCartList); 
    }
  }

  return (
    <>
      {contextHolder}
      <Card
        hoverable
        style={{width: '240px', height: '100%'}}
        cover={<img alt={name} src={img} style={{widows: '240px',height:'240px'}}/>}
        actions={[
            <MyHeartButton toggleWishList={toggleWishList}/>,
            <AddCartButton switchItemInCart={switchItemInCart}/>
        ]}
      >
        <Meta title={name} description={description} style={{height: 80, textAlign: 'center'}}/>
        <Card.Grid style={gridStyle} hoverable={false}>
          <Text strong>
            {price}円
          </Text>
        </Card.Grid>
      </Card>
    </>
  );
};