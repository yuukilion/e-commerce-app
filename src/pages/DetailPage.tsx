import { ShoppingCartOutlined, } from '@ant-design/icons';
import { Card } from 'antd'
import pixel7Pro from '../assets/image/pixel7Pro.webp';
import { MyHeartButton } from '../components/MyHeartButton';

export const DetailPage = () => {
    return (
        <Card 
          style={{width: 560}}
          cover={<img alt='pixel7Pro' src={pixel7Pro}/>}
          actions={[
              <MyHeartButton/>,
              <ShoppingCartOutlined key='buy'/>
          ]}
          >
            
        </Card>
    );
}