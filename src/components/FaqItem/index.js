// Write your code here.

import './index.css'

const FaqItem = props => {
  const {faqdetails, removeId, addId, clickedId} = props

  const {questionText, id, answerText} = faqdetails
  const isShowing = clickedId.includes(id)

  const symbol = isShowing
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const removesId = () => {
    removeId(id)
  }

  const addsId = () => {
    addId(id)
  }

  const altimg = isShowing ? 'minus' : 'plus'

  const onChange = isShowing ? removesId : addsId

  return (
    <li className="container-item">
      <li className="sub">
        <h1 className="heading1">{questionText}</h1>
        <button type="button" className="button-style" onClick={onChange}>
          <img src={symbol} alt={altimg} className="image" />
        </button>
      </li>
      {isShowing && <hr />}
      {isShowing && <p className="paragraph">{answerText}</p>}
    </li>
  )
}

export default FaqItem
