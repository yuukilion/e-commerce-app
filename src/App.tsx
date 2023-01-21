import './App.css';
import { Layout } from 'antd';
import { GoogleCircleFilled, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { DetailPage } from './pages/DetailPage';
import { WishListPage } from './pages/WishListPage';
import { CartPage } from './pages/CartPage';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{backgroundColor: 'white'}}>
      <Header style={{position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: 'black'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <Link to='/'>
                <GoogleCircleFilled style={{color: 'white', fontSize: '32px'}}/>
              </Link>
            </div>
          <div style={{display: 'flex', gap: '16px'}}>
            <Link to='/wishlist'>
              <HeartFilled style={{color: 'white', fontSize: '24px'}}/>
            </Link>
            <Link to='/cart'>
              <ShoppingCartOutlined style={{color: 'white', fontSize: '24px'}}/>
            </Link>
          </div>
        </div>
      </Header>
      <Content style={{margin: '0 auto'}}>
        <Routes>
          <Route path='/'>
            <Route index element={<IndexPage/>}/>
            <Route path='/detail' element={<DetailPage/>}/>
            <Route path='/wishlist' element={<WishListPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
          </Route>
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
