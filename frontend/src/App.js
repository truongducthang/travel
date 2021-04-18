import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.scss';
import Footer from './common/Footer';
import Header from './common/Header';
import HomePage from './pages/Home';
import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HomePage />
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
