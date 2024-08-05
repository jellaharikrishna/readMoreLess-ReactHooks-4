import {useState} from 'react'

import {
  AppContainer,
  Heading,
  Subject,
  HookImage,
  Paragraph,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setReadMore] = useState(false)

  const onClickBtn = () => setReadMore(preValue => !preValue)

  const slicedText = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <Subject>Hooks are a new addition to React</Subject>
      <HookImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Paragraph>{slicedText}</Paragraph>
      <Button onClick={onClickBtn} type="button">
        {isReadMore ? 'Read Less' : 'Read More'}
      </Button>
    </AppContainer>
  )
}

export default ReadMore
