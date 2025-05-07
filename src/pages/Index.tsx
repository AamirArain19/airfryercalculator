
import { Navigate } from 'react-router-dom';

// This is just a wrapper around the Home component to maintain compatibility
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
