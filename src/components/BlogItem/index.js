// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="list-item-container">
      <div className="list-title-container">
        <h3 className="title">{title}</h3>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="list-item-desc">{description}</p>
    </li>
  )
}

export default BlogItem
