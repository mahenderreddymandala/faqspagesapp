// Write your code here.

import './index.css'
import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    clickedId: [],
  }

  addId = id => {
    this.setState(prevState => ({clickedId: [...prevState.clickedId, id]}))
  }

  removeId = id => {
    const {clickedId} = this.state

    const filter = clickedId.filter(each => each !== id)
    this.setState({clickedId: filter})
  }

  render() {
    const {clickedId} = this.state
    console.log(clickedId)
    const {faqsList} = this.props
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">FAQs</h1>
          <ul className="list-element">
            {faqsList.map(each => (
              <FaqItem
                faqdetails={each}
                key={each.id}
                clickedId={clickedId}
                removeId={this.removeId}
                addId={this.addId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
