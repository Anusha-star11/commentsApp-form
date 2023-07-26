// Write your code here
import './index.css'

const CommentItem = props => {
  const {listItem} = props
  const {initial, name, time, comment, likeStatus} = listItem

  return (
    <li>
      <div className="listItem-container">
        <div className="name-comment-container">
          <p>{initial}</p>
          <p>{name}</p>
          <p>{time} minutes ago</p>
        </div>
        <div>{comment}</div>
        <div className="like-container">
          <button
            type="button"
            onClick={onClickLikeImageButton}
            className="UnLike"
          >
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" />
          </button>
          <button type="button" onClick={onClickButton} className="likeText">
            Like
          </button>

          <button type="button" onClick={onClickDeleteButton}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
