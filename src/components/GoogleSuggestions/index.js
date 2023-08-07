// Write your code here
import {Component} from 'react'

import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  OnChangeOfInput = event => this.setState({searchInput: event.target.value})

  onClickOfArrow = id => {
    const {suggestionsList} = this.props
    const selectedSuggestion = suggestionsList.filter(
      eachSuggestion => eachSuggestion.id === id,
    )
    const {suggestion} = selectedSuggestion[0]

    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="mainContainer">
        <img
          className="googleLogo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="googleSearchContainer">
          <div className="googleSearch">
            <img
              className="searchLogo"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              onChange={this.OnChangeOfInput}
              className="inputStyle"
              placeholder="Search Google"
              type="search"
              value={searchInput}
            />
          </div>

          <ul className="searchItemsContainer">
            {searchResult.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                eachSuggestion={eachSuggestion}
                onClickOfArrow={this.onClickOfArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
