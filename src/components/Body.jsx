import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useEffect } from 'react';
const Body = () => {
  const dispatch = useDispatch();
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        BASE_URL + '/profile/view',
        {},
        { withCredentials: true },
      );
      dispatch(addUser(res.data));
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(()=>{
    fetchUser();
  },[])

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;
