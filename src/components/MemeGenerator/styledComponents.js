// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  margin: 10px;
`
export const Para = styled.p`
  margin: 10px;
`
export const Options = styled.option`
  margin: 10px;
  width: 300px;
`
export const Select = styled.select`
  margin: 10px;
  width: 300px;
`
export const Input = styled.input`
  width: 300px;
  margin: 10px;
`
export const GenerateButton = styled.button`
  color: white;
  background-color: blue;
  margin: 10px;
`
export const MainContainer = styled.div`
  display: flex;
`
export const BackGroundImage = styled.div`
  background-image: url(${props => props.url});
  width: 400px;
  height: 400px;
  margin-left: 100px;
  margin-top: 50px;
`
export const Paragraph1 = styled.p`
  color: white;
  display: flex;
  margin: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: ${props => props.size}px;
`
export const Paragraph2 = styled.p`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: ${props => props.size}px;
  margin: 10px;
`
