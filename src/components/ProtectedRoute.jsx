import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";



export default function ProtectedRoute({children}) {
    const {user, loading } = useAuth();
    
    if(loading){
        return (<div className="flex justify-center items-center text-yellow-400 font-semibold text-xl">Loading...</div>);
    }
    
    if(!user){
        return <Navigate to="/login" replace />;
    }

    return children;
}
