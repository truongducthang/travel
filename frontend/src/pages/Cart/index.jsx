import React from 'react';
import HeaderImageLayout from '../../common/HeaderImageLayout';
import { Empty } from 'antd';

const CartPage = () => {
  return (
    <div className="CartPage">
      <HeaderImageLayout
        hideFilter={true}
        // src="https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg"
        title_ul="CART"
      />
      <div
        style={{
          maxWidth: '1192px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
          minHeight: '28vh',
        }}
      >
        <Empty description="No products in the cart" />
      </div>
    </div>
  );
};

export default CartPage;
