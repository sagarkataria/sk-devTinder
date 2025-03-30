import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from './../utils/constants';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatach = useDispatch()
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
       await axios.post(
        BASE_URL + '/logout',
        {},
        { withCredentials: true },
      );  
        dispatach(removeUser());
        navigate("/login")
     
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">devTinder</a>
      </div>
      {user && (
        <div className="flex gap-2">
          <div>Welcome, {user?.firstName}</div>
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="photoURL" src={user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
