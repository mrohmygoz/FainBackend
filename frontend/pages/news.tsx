import Stories from '../components/stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import Container from '../components/container'
import SectionTitle from '../components/section-title'

type Props = {
    allPosts: Post[]
}

export default function News({ allPosts }: Props) {
    return (
      <>
        <Layout>
          <Container>
            <section>
              <SectionTitle>
                最新消息
              </SectionTitle>
              <Stories posts={allPosts} />
            </section>
          </Container>
        </Layout>
      </>
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
    ])
  
    return {
      props: { allPosts },
    }
  }