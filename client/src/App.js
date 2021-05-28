import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.scss';
import Footer from './common/Footer';
import Header from './common/Header';
import HomePage from './pages/Home';
import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import PackagesPage from './pages/Packages';
import PackagesDetailsPage from './pages/PackagesDetails';
import DestinationsPage from './pages/Destinations';
import DestinationsDetailsPage from './pages/DestinationsDetails';
import ProductsPage from './pages/Products';
import ProductsDetailsPage from './pages/ProductsDetails';
import CartPage from './pages/Cart';

//list route
const LIST_ROUTE = [
  { id: 8, path: '/homestays/:slug', component: <PackagesDetailsPage /> },
  { id: 7, path: '/homestays', component: <PackagesPage /> },
  {
    id: 6,
    path: '/destinations/:slug',
    component: <DestinationsDetailsPage />,
  },
  { id: 5, path: '/destinations', component: <DestinationsPage /> },
  { id: 4, path: '/products/:slug', component: <ProductsDetailsPage /> },
  { id: 3, path: '/rooms', component: <ProductsPage /> },
  { id: 2, path: '/cart', component: <CartPage /> },
  { id: 1, path: '/', component: <HomePage /> },
];
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* LIST_ROUTE    */}
        <Switch>
          {LIST_ROUTE.map((route) => (
            <Route key={route.id} path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
        {/*End LIST_ROUTE    */}
        <Footer />
        <BackTop>
          <div
            style={{
              height: 40,
              width: 40,
              lineHeight: '40px',
              borderRadius: 4,
              backgroundColor: '#23232c',
              color: '#fff',
              textAlign: 'center',
              fontSize: 14,
              bottom: '100px',
              position: 'absolute',
            }}
          >
            <ArrowUpOutlined />
          </div>
        </BackTop>
      </div>
    </Router>
  );
}

export default App;
