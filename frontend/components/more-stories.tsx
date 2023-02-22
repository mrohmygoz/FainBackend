import type Post from '../interfaces/post'
import Container from './container'
import SectionTitle from './section-title'
import Stories from './stories'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <div className=''>
      <Container>
        <section>
          <SectionTitle>
            最新消息
          </SectionTitle>
          <Stories posts={posts} />
        </section>
      </Container>
    </div>
    
    
  )
}

export default MoreStories
