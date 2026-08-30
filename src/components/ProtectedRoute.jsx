import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";



export default function ProtectedRoute({children}) {
    const {user, loading } = useAuth();
    
    if (loading) {
         return ( 
    <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-3">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-yellow-200 border-t-yellow-500" />
            <p className="text-xs text-gray-400">
                Loading...
            </p>
        </div>
    </div>
); }
    if(!user){
        return <Navigate to="/login" replace />;
    }

    return children;
}
