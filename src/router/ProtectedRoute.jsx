import { useNavigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  const navigate = useNavigate();

  const isAuthenticated = false;

  if (!isAuthenticated) return navigate('/');

  console.log('is authenticated')

  return (
    <>{children}</>
  )
}
