import React, { useEffect } from 'react';
import HeaderImageLayout from '../../common/HeaderImageLayout';

const PackagesDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="PackagesDetailsPage">
      <HeaderImageLayout
        hideFilter={true}
        src="https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg"
        title_ul="CART"
      />
    </div>
  );
};

export default PackagesDetailsPage;
