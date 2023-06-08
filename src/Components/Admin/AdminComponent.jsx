import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AdminComponent.css';

const AdminComponent = () => {
  const navigate = useNavigate();
  const userLoginInfo = useSelector((state) => state.userLoginInfo);
  const { cookie } = userLoginInfo;

  useEffect(() => {
    if (!cookie) {
      navigate('/forms');
    }
  });

  return (
    <>
      <h1>AdminComponent</h1>
      User Details to follow!!
    </>
  );
};

export default AdminComponent;
