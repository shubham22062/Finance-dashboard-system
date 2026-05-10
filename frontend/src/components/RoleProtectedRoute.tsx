import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: React.ReactNode;
  roles: string[];
}

export default function RoleProtectedRoute({
  children,
  roles,
}: Props) {

  const { user } = useAuth();

  // user not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // role not allowed
  if (!roles.includes(user.role)) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}