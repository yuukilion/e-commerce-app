import { useAtom } from "jotai";
import { WishListAtom } from "../state/atom";
import { Typography } from "antd";
import { Item } from "../components/Item";

const { Title} = Typography;

export const WishListPage = () => {
  const [wishList] = useAtom(WishListAtom);

  return (
    <div style={{width: '960px'}}>
      {wishList.length ? <Title style={{textAlign: 'center'}}>WishList</Title> : <Title style={{textAlign: 'center'}}>現在お気に入りリストは空です</Title>}
      <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center', gap: '24px'}}>
        {wishList.map((product) => {
          return <Item key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.image}/>;
          })
        }
      </div>
    </div>
  );
}