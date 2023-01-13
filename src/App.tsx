import './App.css';
import { Layout } from 'antd';
import { GoogleCircleFilled, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { DetailPage } from './pages/DetailPage';
import { WishListPage } from './pages/WishListPage';
import { CartPage } from './pages/CartPage';


const { Header } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: 'gray'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <GoogleCircleFilled style={{color: 'white', fontSize: '24px'}}/>
          </div>
          <div>
            <HeartFilled style={{color: 'white', fontSize: '24px'}}/>
            <ShoppingCartOutlined style={{color: 'white', fontSize: '24px'}}/>
          </div>
        </div>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<IndexPage/>}/>
            <Route path='/detail' element={<DetailPage/>}/>
            <Route path='/wishlist' element={<WishListPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
