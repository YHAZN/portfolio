import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue} from  '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Boston!
            </Box>

            <Box display={{md: 'flex}}>'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Hanzhe (Jimmy) Yan
                    </Heading>
                    <p>Digital Craftsman ( Developer / Designer / Artist / Student ) </p>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}} 
                    ml={{md:6}} 
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800"  
                        borderWidth={2} 
                        borderStyle="solid"
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/hanzhe.jpg" 
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                Jimmy is a student and a passionate freelance full-stack developer based in Boston with a passion for building digital services & passion projects. He has a knack for all things tech-related, from planning and designing software all the way to creating solutions to real-life problems with his skill set. During his free time, he loves hanging out with his friends, playing video games, testing the latest software, and managing company operations for projects that help those in need such as TriSense. Currently, he is a full-time student at Stonehill College studying Computer Science (BA) and Computer Engineering (BS) and working on projects such as {' '}
                    <NextLink href="/works/RecurAI">
                        <Link>RecurAI</Link>
                    </NextLink>.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" >
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2004</BioYear>
                    Born in Hangzhou (台州), China.
                </BioSection>
                <BioSection>
                    <BioYear>2014</BioYear>
                    Immigrated to the United States.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Completed High School at Boston College High School.
                </BioSection>
                <BioSection>
                    <BioYear>2024-2027</BioYear>
                    Completing Bachelor&apos;s Degree in CS at Stonehill.
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title" >
                    I ❤
                </Heading>
                <Paragraph>
                    Coding, Art, Music, Design, {' '}
                    <Link href="http://en.wikipedia.org/wiki">
                        Drawing
                    </Link>
                    , Playing the Violin, Content Creation, {' '}
                    <Link href="http://www.recurai.info">
                        Artificial Intelligence 
                    </Link>
                    , and Entrepreneurship
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page