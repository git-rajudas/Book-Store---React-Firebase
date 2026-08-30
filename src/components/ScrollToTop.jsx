import { useEffect } from "react"
import { useLocation } from "react-router"
function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(()=>{
        window.history.scrollRestoration = "manual";
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
        return () => {
            window.history.scrollRestoration = "auto";
        };
    },[pathname])
  return (
    null
  )
}

export default ScrollToTop
