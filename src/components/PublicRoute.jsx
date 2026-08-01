import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function PublicRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex justify-center items-center text-yellow-400 font-semibold text-xl">
                Loading...
            </div>
        );
    }

    // Logged in → don't allow login/signup
    if (user) {
        return <Navigate to="/" replace />;
    }

    // Logged out → allow login/signup
    return children;
}

export default PublicRoute;