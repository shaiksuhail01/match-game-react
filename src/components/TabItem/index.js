import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTabItem} = props
  const {tabId, displayText} = tabDetails

  const isActiveClassName = isActive ? 'activeButton' : ''

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className="tabItemContainer">
      <button
        type="button"
        className={`buttonEl ${isActiveClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
