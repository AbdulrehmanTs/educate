import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';

const PrivateRoute = ({ children }) => {
    const [user, setUser]  = useState({})

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    }
  )

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;