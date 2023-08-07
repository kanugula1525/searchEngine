// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onClickOfArrow} = props
  const {id, suggestion} = eachSuggestion

  const clickArrow = () => {
    onClickOfArrow(id)
  }

  return (
    <li className="suggestionContainer">
      <p className="suggestionStye">{suggestion}</p>
      <img
        className="arrowIcon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={clickArrow}
      />
    </li>
  )
}

export default SuggestionItem
