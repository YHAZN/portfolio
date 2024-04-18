import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbRecurAI from '../public/images/works/recur_01.png'

const Works = () => {
    return (
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
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works