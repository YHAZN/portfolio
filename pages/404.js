import NextLink from 'next/link'
import {
   Box,
   Text,
   Heading,
   Container,
   Divider,
   Button 
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">
                Not Found
            </Heading>
            <Text>This page you&apos;re looking for is in another castle.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound