const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

import {Component} from 'react'

import CommentItem from '../CommentItem'

import {formatDistanceToNow} from 'date-fns'

import './index.css'

import {v4 as uuidv4} from 'uuid'

const initialCommentList = []

class Comments extends Component {
  state = {
    commentList: initialCommentList,
    name: '',
    comment: '',
  }

  addComment = e => {
    e.preventDefault()
    const {name, comment} = this.state
    const addingNewComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, addingNewComment],
      name: '',
      comment: '',
    }))
  }

  nameInput = e => {
    this.setState({name: e.target.value})
  }

  commentInput = e => {
    this.setState({comment: e.target.value})
  }

  render() {
    const {name, comment} = this.state

    return (
      <div>
        <h1>Comments</h1>
        <br />
        <div className="page-container">
          <p>Say something about 4.0 Technologies</p>
          <form onSubmit={this.addComment}>
            <input
              value={name}
              type="text"
              onChange={this.nameInput}
              placeHolder="Your Name"
            />
            <input
              value={comment}
              type="text"
              onChange={this.commentInput}
              placeHolder="Your Comment"
            />
            <button type="submit">Add Comment</button>
          </form>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comment"
          />
        </div>
        <hr />
        <div>
          <p>{numberOfComments}</p>
          <p>Comments</p>
        </div>
        <ul>
          <CommentItem />
        </ul>
      </div>
    )
  }
}

export default Comments
