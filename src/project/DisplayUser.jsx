import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {MdDelete} from "react-icons/md";
import { removeuser } from '../Store/Slice/UserSlice';
const DisplayUser = () => {
// remove 
const dispatch = useDispatch();

const data = useSelector((state)=>{
    return state.users;
})
// console.log(data)
//deleteuser
const deleteUser =(id)=>{
 dispatch(removeuser(id))
}
  return (
    <Wrapper>
    {
        data.map((user,id)=>{
            return <li key={id}>
               {user}
               <button className='delete-btn' onClick={()=> deleteUser(id)}>
                <MdDelete className='delete-icon'/>
               </button>
            </li>
        })
    }
    </Wrapper>
  );
};
const Wrapper = styled.section`
li{
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
}
`;
export default DisplayUser;
