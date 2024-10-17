import { usePathname } from "next/navigation"

export default function Navbar (){
      const pathname = usePathname()
      return(
            <nav className={`flex justify-between items-center p-8 ${pathname !== '/' ? 'bg-green-600' : null}`}>
              <h1 className="font-bold text-3xl text-white italic font-serif">
              T<span className="font-bold text-2xl text-white italic font-serif">raveluxe</span>
            </h1>
            <ul className="flex space-x-8 text-white font-medium">
              <li>
                <a href="#features" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
    
      )
}