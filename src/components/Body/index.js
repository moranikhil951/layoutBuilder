// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-con">
              <h1 className="heading-left">Left Navbar Menu</h1>
              <ul>
                <li className="left-para">Item 1</li>
                <li className="left-para">Item 2</li>
                <li className="left-para">Item 3</li>
                <li className="left-para">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="context-con">
              <h1 className="heading-left">Content</h1>
              <p className="left-para">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit, sedut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-con">
              <div className="responsive-con">
                <h1 className="heading-left">Right Navbar</h1>
                <div className="box-con">
                  <p>Ad 1</p>
                </div>
                <div className="box-con">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
