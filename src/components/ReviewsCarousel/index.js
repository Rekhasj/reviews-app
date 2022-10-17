// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state

    const currentReviewList = reviewsList[index]
    const {imgUrl, username, companyName, description} = currentReviewList

    return (
      <div className="home-container">
        <div className="review-container">
          <h1 className="review">Reviews</h1>
          <div className="card-container">
            <button
              type="button"
              className="button"
              testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow-image"
                alt="left arrow"
              />
            </button>
            <ul className="review-image-container">
              <li className="list-container">
                <img src={imgUrl} className="review-image" alt={username} />
                <p className="person-name">{username}</p>
                <p className="company-name">{companyName}</p>
                <p className="details">{description}</p>
              </li>
            </ul>
            <button
              type="button"
              className="button"
              testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow-image"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
