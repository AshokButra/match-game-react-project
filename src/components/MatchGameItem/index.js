import './index.css'

const MatchGameItem = props => {
  const {itemDetails, onDisplaySelect} = props
  const {id, thumbnailUrl} = itemDetails

  const onSelectImage = () => {
    onDisplaySelect(id)
  }

  return (
    <li className="list-item">
      <button className="image-button" type="button" onClick={onSelectImage}>
        <img src={thumbnailUrl} className="image-url" alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchGameItem
