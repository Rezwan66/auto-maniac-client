import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center mt-20">
        <span className="loading w-20 loading-spinner text-success"></span>
        <span className="loading w-20 loading-spinner text-warning"></span>
        <span className="loading w-20 loading-spinner text-error"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
