import Meta from "antd/es/card/Meta";
import { Card, Typography, message } from "antd";
import { MyHeartButton } from "./MyHeartButton";
import { CartAtom, WishListAtom } from "../state/atom";
import { useAtom } from "jotai";
import { ALL_PRODUCT_LIST } from "../state/product";
import { AddCartButton } from "./AddCartButton";

const { Text } = Typography;

type ItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
};

export const Item = (prop: ItemProps) => {
  const { img, name, description, price, id } = prop;
  const [wishList, setWishList] = useAtom(WishListAtom);
  const [cartList, setCartList] = useAtom(CartAtom);

  const gridStyle: React.CSSProperties = {
    width: "100%",
    textAlign: "end",
    padding: 0,
    boxShadow: "none",
  };

  const toggleWishList = (id: number) => {
    const targetProduct = ALL_PRODUCT_LIST.find((product) => product.id === id);
    const duplicateProduct = cartList.find((product) => product.id === id);

    const hasTargetInWishList = wishList.some(
      (product) => product === targetProduct
    );

    if (targetProduct && !hasTargetInWishList) {
      message.success("お気に入りリストに追加しました", 2);
      const newWishList = [...wishList, targetProduct];
      setWishList(newWishList);
    } else if (targetProduct && hasTargetInWishList) {
      message.info("お気に入りリストから削除しました", 2);
      const newWishList = wishList.filter(
        (product) => product !== targetProduct
      );
      setWishList(newWishList);
    }
    //カートとお気に入りリストとで重複するアイテムを削除
    if (duplicateProduct) {
      const newCartList = cartList.filter(
        (product) => product.id !== duplicateProduct.id
      );
      setCartList(newCartList);
    }
  };

  const switchItemInCart = (id: number) => {
    const targetProduct = ALL_PRODUCT_LIST.find((product) => product.id === id);
    const duplicateProduct = wishList.find((product) => product.id === id);

    const hasTargetInCart = cartList.some(
      (product) => product === targetProduct
    );

    if (targetProduct && !hasTargetInCart) {
      message.success("カートに追加しました", 2);
      const newCartList = [...cartList, targetProduct];
      setCartList(newCartList);
    } else if (targetProduct && hasTargetInCart) {
      message.info("カートから削除しました", 2);
      const newCartList = cartList.filter(
        (product) => product !== targetProduct
      );
      setCartList(newCartList);
    }
    //カートとお気に入りリストとで重複するアイテムを削除
    if (duplicateProduct) {
      const newWishList = wishList.filter(
        (product) => product.id !== duplicateProduct.id
      );
      setWishList(newWishList);
    }
  };

  return (
    <>
      <Card
        hoverable
        style={{ width: "240px", height: "100%" }}
        cover={
          <img
            alt={name}
            src={img}
            style={{ widows: "240px", height: "240px" }}
          />
        }
        actions={[
          <MyHeartButton key={1} toggleWishList={() => toggleWishList(id)} />,
          <AddCartButton
            key={2}
            switchItemInCart={() => switchItemInCart(id)}
          />,
        ]}
      >
        <Meta
          title={name}
          description={description}
          style={{ height: 80, textAlign: "center" }}
        />
        <Card.Grid style={gridStyle} hoverable={false}>
          <Text strong>{price}円</Text>
        </Card.Grid>
      </Card>
    </>
  );
};
