import { WindowsOutlined ,PlusSquareOutlined ,HomeFilled} from '@ant-design/icons';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
function getItem(label, key, icon) {
  return {
    key,
   label,
    icon
    
  };
}
const items = [
  getItem(<Link to='/productdatail'> PRODUCT_DETAIL </Link>, 'sub1', <WindowsOutlined />),
  getItem(<Link to='/addproduct'> ADD_PRODUCT</Link>, 'sub2', <PlusSquareOutlined />),
  getItem(<Link to='/delete'> DELETE_PRODUCT</Link>, 'sub3', <HomeFilled />),
  getItem(<Link to='/login'> LOGIN</Link>, 'sub4', <HomeFilled />)
  

]
    
const Navbar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        height:"100%",
        width: "200px"
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme='dark'
      items={items}
    />
  );
};
export default Navbar;