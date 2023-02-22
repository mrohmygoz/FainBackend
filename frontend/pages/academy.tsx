import AboutAcademyContent from '../components/about-academy-content'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAboutAcademy } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import SectionTitle from '../components/section-title'

type Props = {
    content: string
}

export default function Academy({ content }: Props) {
    return (
      <>
        <Layout>
          <Container>
            <section>
              <SectionTitle>
                法印光能學會
              </SectionTitle>
              <AboutAcademyContent content={content} />
            </section>
          </Container>
        </Layout>
      </>
    )
}

export const getStaticProps = async () => {
    const content = await markdownToHtml(getAboutAcademy() || '')
  
    return {
      props: { content },
    }
}