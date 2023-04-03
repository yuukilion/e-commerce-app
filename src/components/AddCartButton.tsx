import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const AddCartButton = (props: any) => {
  const { switchItemInCart } = props;
  return (
    <Button shape="circle" onClick={switchItemInCart}>
      <ShoppingCartOutlined />
    </Button>
  );
};
