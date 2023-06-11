import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AdminComponent.css';

const AdminComponent = () => {
  const navigate = useNavigate();
  const userLoginInfo = useSelector((state) => state.userLoginInfo);
  const { cookie } = userLoginInfo;
  const logoutInfo = useSelector((state) => state.logoutInfo);
  const { success: logoutSuccess } = logoutInfo;

  useEffect(() => {
    if (!cookie || logoutSuccess) {
      navigate('/forms');
    }
  }, [cookie, logoutSuccess]);

  return (
    <>
      <h1>AdminComponent</h1>
      User Details to follow!!
    </>
  );
};

export default AdminComponent;
