import { useDispatch, useSelector } from "react-redux";
import { fetchAppData, fetchUserDetails } from "./actionReducer";
import { useEffect, useState } from "react";
import AppModel from "../model/AppModel";

function UserApplication(){
    const[isModelOpen,setIsModalOpen]=useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  }; 
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    const dispatch=useDispatch();
    const [selectedApp,setSelectedApp]=useState("");
    const {data,isLoading}=useSelector(state=>state.users);
    useEffect(()=>{
        if(selectedApp!==""){
            dispatch(fetchUserDetails(selectedApp))
        }
    },[selectedApp])
    const showModal1=(user) =>{
        setSelectedApp(user);
        setIsModalOpen(true);

    }
    
    if(isLoading){
        return<h1>loading...</h1>
    }
    return(
        <div className="App">
      <button onClick={(e)=>dispatch(fetchUserDetails())}>FETCH USER DETAILS</button>
      {data?.map((e)=><li>{e}</li>)}
      <AppModel isModalOpen={isModelOpen} setIsModalOpen={setIsModalOpen} />
    </div>
    );

}
export default UserApplication;