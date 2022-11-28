import {TagItem, TagButton} from './styledComponents'

const Tag = props => {
  const {tagDetails, changeTag, isActive} = props
  const {optionId, displayText} = tagDetails

  const clickTag = () => changeTag(optionId)

  return (
    <TagItem>
      <TagButton isActive={isActive} type="button" onClick={clickTag}>
        {displayText}
      </TagButton>
    </TagItem>
  )
}

export default Tag
