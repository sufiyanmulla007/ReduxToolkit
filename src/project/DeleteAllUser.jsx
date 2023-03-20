import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearAllUser } from '../Store/Slice/UserSlice';

const DeleteAllUser = () => {
  const dispacth = useDispatch();
  const deleteuser = ()=>{
   dispacth(clearAllUser());
  }
  return (
    <Wrapper>
     <button className='btn clear-btn'
     onClick={deleteuser}
     >Clear User</button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
 .clear-btn{
  text-transform: capitalize;
  background-color: #db338a;
  margin-top: 2rem;
 }
`;
export default DeleteAllUser;
