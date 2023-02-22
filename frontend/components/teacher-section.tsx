import Container from "./container"
import SectionTitle from "./section-title"

const TeacherSection = () => {
    return (
      <Container>
        <section>
          <SectionTitle>
            蔡君如老師
          </SectionTitle>

          <div className="text-xl leading-relaxed grid grid-cols-1 gap-y-8">
            <img src='/teacher.png' className='block w-full' alt=''/>

            <p>
              在我心中，宗教的信仰不一定需要一座佛寺，也不需要用複雜的道理詮釋，只要用我們的真心，就可以建造一座我們自己心中的廟宇。
            </p>

            <p>
              感恩上天的教導及賦予我的一切，
              「知福、惜福、培福、造福」是我生命的精神宗旨，
              願大家能手牽著手，洞察生命的本質，
              愛惜這世間有形與無形的一切，
              以愛為本發展慈悲心，期盼我們共同努力創造生命的奇蹟。
            </p>
            
          </div>
        </section>
      </Container>
    )
  }
  
  export default TeacherSection
