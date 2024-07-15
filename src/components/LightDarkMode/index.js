// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {count: 'Light'}

  onClick = () => {
    this.setState(prevState => {
      if (prevState.count === 'Light') {
        return {count: 'Dark'}
      } else {
        return {count: 'Light'}
      }
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className={`bg${count}`}>
        <h1 className={`heading${count}`}>Click To Change Mode</h1>
        <button onClick={this.onClick} className="btn">
          {count} Mode
        </button>
      </div>
    )
  }
}
export default LightDarkMode
