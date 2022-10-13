import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <h1 className="logo">Next<span className="home ">HOME</span> </h1>
              <h2>Do You Need Help With Anything?</h2>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 NextHome. All rights reserved.</span>
      </div>
    </>
  )
}

export default Footer
