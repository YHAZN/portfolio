import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';

import thumbRecurAI from '../public/images/works/recur_01.png'
import thumbFwitter from '../public/images/works/fwitter_01.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}> 
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="recurai" thumbnail={thumbRecurAI}>
                            A Artificial Intelligence software as a service app
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="fwitter" thumbnail={thumbFwitter}>
                            A fullstack clone of X (Twitter)
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works