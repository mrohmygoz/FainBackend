import ServicesContent from '../components/services-content'
import Container from '../components/container'
import Layout from '../components/layout'
import { getServices } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import SectionTitle from '../components/section-title'

type Props = {
    content: string
}

export default function Services({ content }: Props) {
    return (
      <>
        <Layout>
          <Container>
            <section>
              <SectionTitle>
                服務項目
              </SectionTitle>
              <ServicesContent content={content} />
            </section>
          </Container>
        </Layout>
      </>
    )
}

export const getStaticProps = async () => {
    const content = await markdownToHtml(getServices() || '')
  
    return {
      props: { content },
    }
}