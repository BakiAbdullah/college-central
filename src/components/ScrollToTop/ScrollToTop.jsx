import    { useEffect, useState } from 'react'
import { HiArrowUp } from "react-icons/hi";
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div  className="scroll-top rounded-full p-2 bg-gradient-to-r from-rose-700 to-red-600 hover:scale-110 duration-200">
      <a href="#top">
        <HiArrowUp className="text-white" fontSize="medium" />
      </a>
    </div>
  ) : null;
}

export default ScrollToTop
