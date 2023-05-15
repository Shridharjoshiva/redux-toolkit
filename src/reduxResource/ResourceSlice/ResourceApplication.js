import { useDispatch,useSelector } from 'react-redux';
import { fetchResourceDetails } from './ResourceSlices';

function ResourceApplication() {
  const dispatch=useDispatch();
  const {resourcedata, isLoadings}=useSelector(state=>state.resource);
  if(isLoadings){
    return <h1>loading...</h1>
  }
  return (
    <div className="App">
      <button onClick={(e)=>dispatch(fetchResourceDetails())}>FETCH RESOURCE DETAILS</button>
      {resourcedata?.map((e)=><li >{e}</li>)}, 
    </div>
    
  );
}

export default ResourceApplication;