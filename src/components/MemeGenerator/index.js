import {Component} from 'react'
import {
  Heading,
  Container,
  Label,
  Input,
  Options,
  Select,
  Para,
  GenerateButton,
  MainContainer,
  BackGroundImage,
  Paragraph1,
  Paragraph2,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {url: '', fontSize: '', Top: '', Bottom: '', go: false}

  urlText = event => {
    this.setState({url: event.target.value})
  }

  TopText = event => {
    this.setState({Top: event.target.value})
  }

  BottomText = event => {
    this.setState({Bottom: event.target.value})
  }

  fontSizeOf = event => {
    this.setState({fontSize: event.target.value})
  }

  GenerateMeme = event => {
    event.preventDefault()
    this.setState({go: true})
  }

  render() {
    const {go, url, fontSize, Top, Bottom} = this.state
    return (
      <MainContainer>
        <div>
          <Heading>Meme Generator</Heading>
          <form onSubmit={this.GenerateMeme}>
            <Container>
              <Label htmlFor="url">image Url</Label>
              <Input type="text" id="url" onChange={this.urlText} value={url} />
            </Container>
            <Container>
              <Label htmlFor="top">Top Text</Label>
              <Input type="text" id="top" onChange={this.TopText} value={Top} />
            </Container>
            <Container>
              <Label htmlFor="bot">Bottom Text</Label>
              <Input
                type="text"
                id="bot"
                onChange={this.BottomText}
                value={Bottom}
              />
            </Container>
            <Label htmlFor="sel">Font Size</Label>
            <Container>
              <Select onChange={this.fontSizeOf} id="sel">
                {fontSizesOptionsList.map(each => (
                  <Options key={each.optionId} value={each.displayText}>
                    {each.displayText}
                  </Options>
                ))}
              </Select>
            </Container>
            <GenerateButton type="submit">Generate</GenerateButton>
          </form>
        </div>
        {go ? (
          <div>
            <BackGroundImage url={url} data-testid="meme">
              <Paragraph1 size={fontSize}>{Top}</Paragraph1>
              <Paragraph2 size={fontSize}>{Bottom}</Paragraph2>
            </BackGroundImage>
          </div>
        ) : null}
      </MainContainer>
    )
  }
}

export default MemeGenerator

//  https://assets.ccbp.in/frontend/react-js/nature-img.png
