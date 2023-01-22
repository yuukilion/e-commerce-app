import { Button, Select, Typography, message, Col, Row } from "antd";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { PurchaseCompleteModal } from "../components/PurchaseCompleteModal";
import { CartAtom } from "../state/atom";
import { PURCHASE_QUANTITY_OPTIONS } from "../state/constant";

const { Title, Text } = Typography

export const CartPage = () => {  
  const [CartList, setCartList] = useAtom(CartAtom);
  const [totalPrice, setTotalPrice] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
    const totalPrice = CartList.reduce((prev, currentProduct) => prev + currentProduct.price * currentProduct.quantity,0);
    setTotalPrice(totalPrice);
  },[CartList]);

  const changeProductQuantity = (value: number, id: number) => {
    const newCartList = CartList.map((product) => {
      if(product.id === id){
        return {...product,quantity: value};
      }
      else{
        return {...product};
      }
    });
    setCartList(newCartList)
  };

  const removeItemInCart = (id: number) => {
    messageApi.open({
      type: 'info',
      duration: 2,
      content:  'カートから商品を削除しました。'
    });
    const newCartList = CartList.filter(product => product.id !== id);
    setCartList(newCartList);
  };

  const completePurchase = () => {
    if(CartList.length){
      setIsModalOpen(prev=> !prev)
      setCartList([]);
    }
  }

  return (
    <>
      {contextHolder}
      {CartList.length ? <Title style={{textAlign: 'center'}}>Cart</Title> : <Title style={{textAlign: 'center'}}>現在カート内は空です</Title>}
      {isModalOpen && <PurchaseCompleteModal open={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
      <div style={{width: '1200px', display: 'flex', gap: '24px', justifyContent: 'center'}}>
        <div>
          {CartList.map(product => {
            return (
              <div key={product.id} style={{border: 'solid',marginBottom: '8px'}}>
                <Row>
                  <Col span={8}>
                    <img src={product.image} alt={product.name}/>
                  </Col>
                  <Col span={8} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Title>{product.name}</Title>
                  </Col>
                  <Col span={8} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', gap:'8px', paddingRight: '8px'}}>
                    <Text strong style={{fontSize: '24px'}}>{product.price}円</Text>
                    <Text strong>個数:<Select defaultValue={1} style={{width: '56px'}} options={PURCHASE_QUANTITY_OPTIONS} onChange={(value) => changeProductQuantity(value,product.id)}/></Text>
                    <Button type='primary' onClick={() => removeItemInCart(product.id)}>カートから削除</Button>
                  </Col>
                </Row>
              </div>
            );
          })
          }
        </div>
        { CartList.length > 0 &&
          <div style={{border: 'solid',width: '160px',height: '80px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            <div>
              <Text strong>合計：</Text>
              <Text strong>{totalPrice}円</Text>
            </div>
            <Button type='primary' onClick={completePurchase}>購入</Button>
          </div> 
        }
      </div>
    </>
  );
}