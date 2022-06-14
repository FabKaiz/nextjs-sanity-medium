import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [colorClass, setColorClass] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)

    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      console.log(windowHeight)
      windowHeight > 460 ? setColorClass('bg-white') : setColorClass('')
    }
  }

  return (
    <div
      className={`p-3 top-0 border-b border-black bg-yellow-400 duration-500 transition-colors sm:p-5 w-full flex-row fixed ${colorClass}`}
    >
      <div className="flex center mx-auto max-w-7xl items-center justify-between ">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <img
              className="w-44 object-containrt cursor-pointer"
              src="https://links.papareact.com/yvf"
              alt="medium logo"
            />
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5"></div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-5 text-black">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="cursor-pointer">Sign In</h3>
          <h3 className="px-2 sm:px-4 py-2 rounded-full bg-black text-white cursor-pointer">
            Get Started
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
