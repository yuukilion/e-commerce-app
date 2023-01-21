import { Space, Typography} from "antd";
import { ProductItem } from "../state/product";
import { Item } from "./Item";

type Props = {
    title: string;
    products: ProductItem[]
}

const { Title } = Typography;

export const Category = (props: Props) => {
    const { title, products } = props;
    return (
        <div>
            <Title level={3}>{title}</Title>
            <div style={{overflowX: 'scroll', display: 'flex'}} >
                <Space direction='horizontal' >
                    {products.map((product) => {
                        return <Item key={product.name} img={product.image} name={product.name} description={product.description} price={product.price} id={product.id}/>;;
                    })}
                </Space>
            </div>
        </div>
    );
}