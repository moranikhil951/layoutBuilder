// Write your code here

import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const checkBoxContext = () => {
        onToggleShowContent()
      }

      const checkBoxLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const checkBoxRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
        console.log(event.target.value)
      }

      return (
        <div className="ConfigurationController-container">
          <h1>Layout</h1>
          <div className="unordered-list">
            <div>
              <input
                id="Context"
                type="checkbox"
                onChange={checkBoxContext}
                checked={showContent}
              />
              <label htmlFor="Context">Content</label>
            </div>

            <div>
              <input
                checked={showLeftNavbar}
                id="leftNumber"
                type="checkbox"
                onChange={checkBoxLeftNavbar}
              />
              <label htmlFor="leftNumber">Left Navbar</label>
            </div>

            <div>
              <input
                checked={showRightNavbar}
                id="rightNumber"
                type="checkbox"
                onChange={checkBoxRightNavbar}
              />
              <label htmlFor="rightNumber">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
