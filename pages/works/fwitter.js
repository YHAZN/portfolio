import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from  '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="RecurAI">
            <Container>
                <Title>
                    RecurAI <Badge>2023 - </Badge>
                </Title>
                <P>
                    A versatile Generative AI platform featuring advanced capabilities in Conversation, Code, Image, Music, and Video Generation AI. With cross-platform accessibility.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link 
                            href='https://recurai.info'
                        >
                            https://recurai.info/ 
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Next.js, Node.js, Tailwind, Stripe, Crisp</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work