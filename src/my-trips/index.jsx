import { db } from "@/service/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import UserTripCardItem from "./UserTripCardItem";

function MyTrips() {
  const navigation = useNavigation();
  const [userTrip, setUserTrip] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, []);

  //used to get all user Trip
  const GetUserTrips = async()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigation("/");
      return;
    }
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    setUserTrip([]);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrip((prevVal) => [...prevVal, doc.data()]);
    });
  };
  return <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
    <h2 className="font-bold text-3xl">My Trips</h2>

    <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
      {userTrip?.length>0?userTrip.map((trip,index)=>(
        <UserTripCardItem trip={trip} key={index}/>
      ))
    :[1,2,3,4,5,6].map((item,index)=>(
         <div key={index} className="h-[180px] w-full bg-slate-200 animate-pulse rounded-xl">


         </div>

    ))
    }
    </div>
  </div>;
}

export default MyTrips;
