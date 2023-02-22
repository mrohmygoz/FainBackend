import AboutContent from '../components/about-content'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAbout } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import SectionTitle from '../components/section-title'

type Props = {
    content: string
}

export default function About({ content }: Props) {
    return (
      <>
        <Layout>
          <Container>
            <section>
              <SectionTitle>
                關於法印佛堂
              </SectionTitle>
              <AboutContent content={content} />
            </section>
          </Container>
        </Layout>
      </>
    )
}

export const getStaticProps = async () => {
    const content = await markdownToHtml(getAbout() || '')
  
    return {
      props: { content },
    }
}