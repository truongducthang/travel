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
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/packages/:slug">
            <PackagesDetailsPage />
          </Route>
          <Route path="/packages">
            <PackagesPage />
          </Route>

          <Route path="/destinations/:slug">
            <DestinationsDetailsPage />
          </Route>
          <Route path="/destinations">
            <DestinationsPage />
          </Route>

          <Route path="/products/:slug">
            <ProductsDetailsPage />
          </Route>
          <Route path="/hotels">
            <ProductsPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

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
