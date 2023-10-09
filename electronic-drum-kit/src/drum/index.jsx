import useSound from "use-sound"

import Boom from "../assets/images/Boom";
import Cymbal from "../assets/images/Cymbal";
import Ride from "../assets/images/Ride";
import Kicks from "../assets/images/kicks";
import Tom from "../assets/images/Tom";
import Snare from "../assets/images/snare";

import kick from "../assets/sounds/kick.wav"
import cymbal from "../assets/sounds/cymbal.wav"
import snare from '../assets/sounds/snare.wav'
import ride  from '../assets/sounds/ride.wav'
import tom  from '../assets/sounds/tom.wav'
import midTom  from '../assets/sounds/tomtom.wav'
import boom  from '../assets/sounds/boom.wav'



import { StyledKit, Container } from "./styling";

export default function DrumKit() {
  const [playKick] = useSound(kick)
  const [playSnare] = useSound(snare)
  const [playTom] = useSound(tom)
  const [playRide] = useSound(ride)
  const [playcymbal] = useSound(cymbal)
  const [playMidTom] = useSound(midTom)
  const [playBoom] = useSound(boom)

  return (
    <Container className="">
      <div className="grid grid-cols-3">
        <StyledKit onClick={playcymbal}>
          <Cymbal />
        </StyledKit>
        <StyledKit onClick={playSnare}>
          <Snare />
        </StyledKit>
        <StyledKit onClick={playRide}>
          <Ride />
        </StyledKit>
        <StyledKit onClick={playTom}>
          <Tom />
        </StyledKit>
        <StyledKit onClick={playBoom}>
          <Boom />
        </StyledKit>
        <StyledKit onClick={playMidTom}>
          <Tom />
        </StyledKit>
        <div></div>
        <StyledKit onClick={playKick}>
          <Kicks />
        </StyledKit>
      </div>
    </Container>
  );
}
