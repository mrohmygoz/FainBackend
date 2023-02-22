import Image from 'next/image'
import ImgLink from "../public/cover.jpeg";
import Container from './container';

const Intro = () => {
  return (
    <Container>
      <section>
        <Image
          src={ImgLink}
          alt=''
        />
      </section>
    </Container>
    
  )
}

export default Intro
