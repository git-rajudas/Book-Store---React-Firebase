import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext"; 

// Custom Hook Of use firebase Context
export const useFirebase = () => useContext(FirebaseContext);