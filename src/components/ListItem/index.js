import './index.css'

const ListItem = props => {
  const {itemDetails, onClickItem} = props
  const {id, thumbnailUrl} = itemDetails

  const onClickListItem = () => {
    onClickItem(id)
  }

  return (
    <li>
      <button type="button" className="buttonEle" onClick={onClickListItem}>
        <img src={thumbnailUrl} alt="thumbnail" className="itemImage" />
      </button>
    </li>
  )
}
export default ListItem
