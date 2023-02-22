import AboutTeacherContent from '../components/about-teacher-content'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAboutTeacher } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import SectionTitle from '../components/section-title'

type Props = {
    content: string
}

export default function Teacher({ content }: Props) {
    return (
      <>
        <Layout>
          <Container>
            <section>
              <SectionTitle>
                蔡君如老師
              </SectionTitle>
              <AboutTeacherContent content={content} />
            </section>
          </Container>
        </Layout>
      </>
    )
}

export const getStaticProps = async () => {
    const content = await markdownToHtml(getAboutTeacher() || '')
  
    return {
      props: { content },
    }
}