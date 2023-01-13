import { ShoppingCartOutlined, } from '@ant-design/icons';
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import pixel7Pro from '../assets/image/pixel7Pro.webp';
import { MyHeartButton } from './MyHeartButton';
import { Link } from 'react-router-dom';

export const Item = () => {    
    
    
    return (
        <Link to={'/detail'}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt='pixel7Pro' src={pixel7Pro}/>}
                actions={[
                    <MyHeartButton/>,
                    <ShoppingCartOutlined key='buy'/>
                ]}
                onClick={() => console.log()}
                >
                    <Meta title='Google Pixel7Pro' description='プロ性能を突き詰めたGoogle Pixel。'/>
            </Card>
        </Link>
    );
}

//title,src,descriptionはpropで受け取る