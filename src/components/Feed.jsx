import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from './UserCard';

const Feed = () => {
   const feed = useSelector((store) => store.feed);
   const dispatch = useDispatch(); 
   const getFeed = async () => {
      try {
         if(feed) return;
         // Fetch feed data from the server
         const res = await axios.get(BASE_URL + '/feed',{}, { withCredentials: true });
         dispatch(addFeed(res.data));
         // return res.data;//
      } catch (error) {
         console.error('Error fetching feed:', error);
      }
   }
   useEffect(()=>{
      getFeed();
   },[])

    return feed && (
       <div className="flex justify-center my-18">
          <UserCard user = {feed[0]}/>
       </div>
    );
}

export default Feed;