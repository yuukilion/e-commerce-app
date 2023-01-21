import { useAtom } from "jotai";
import { CartAtom, WishListAtom } from "../state/atom";
import { Button, Col, Row, Typography, message } from "antd";

const { Title, Text } = Typography;

export const WishListPage = () => {
  const [wishList, setWishList] = useAtom(WishListAtom);
  const [cartList, setCartList] = useAtom(CartAtom)
  
  const addCartList = (id: number) => {
    const targetProduct = wishList.find(product => product.id === id);
    if(targetProduct){
      message.open({
        type: 'success',
        content: 'カートに追加しました',
        duration: 2
      });
      const newCartList = [...cartList,targetProduct]; 
      setCartList(newCartList);
      const newWishList = wishList.filter(product => product !== targetProduct);
      setWishList(newWishList);
    }
  };

  const removeItemInWishList = (id: number) => {
    const newWishList = wishList.filter(product => product.id !== id);
    setWishList(newWishList);
    message.open({
      type: 'success',
      content: 'お気に入りリストから削除しました',
      duration: 2
    })
  };

  return (
    <>
      {wishList.length ? <Title>WishList</Title> : <Title>現在お気に入りリストは空です</Title>}
      {wishList.map((product) => {
        return (
          <div key={product.id} style={{border: 'solid', marginBottom: '8px', width: '1200px'}}>
            <Row>
              <Col span={8}>
                <img src={product.image} alt={product.name}/>
              </Col>
              <Col span={8} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Title>{product.name}</Title>
              </Col>
              <Col span={8} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', gap:'8px', paddingRight: '8px'}}>
                <Text strong style={{fontSize: '24px'}}>{product.price}円</Text>
                <Button type={'primary'} style={{width: '160px'}} onClick={() => addCartList(product.id)}>カートに追加</Button>
                <Button type={'primary'} style={{width: '160px'}} onClick={() => removeItemInWishList(product.id)}>お気に入りから削除</Button>
              </Col>
            </Row>
          </div>
        );
        })
      }
    </>
  );
}