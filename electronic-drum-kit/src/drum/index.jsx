import Cymbal from "../assets/images/Cymbal"
import Ride from "../assets/images/Ride"
import Kicks from "../assets/images/kicks"
import {  StyledKit, Container } from "./styling"

export default function DrumKit() {
  return (
     <Container className="">
      <div className="grid grid-cols-3">
      <StyledKit>
      <Cymbal/>
      </StyledKit>
      <StyledKit>openhat</StyledKit>
      <StyledKit><Ride/></StyledKit>
      <StyledKit>boom</StyledKit>
      <StyledKit>ride</StyledKit>
      <StyledKit>snare</StyledKit>
      <StyledKit>tom</StyledKit>
      <StyledKit>
        <Kicks/>
      </StyledKit>
      <StyledKit>tink</StyledKit>
      </div>
      </Container> 
  )
}


