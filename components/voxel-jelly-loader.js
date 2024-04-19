import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const JellySpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const JellyContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="voxel-jelly"
        m="auto"
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
    >
        {children}
    </Box>
))

JellySpinner.displayName = 'JellySpinner'
JellyContainer.displayName = 'JellyContainer'

const Loader = () => {
  return (
    <JellyContainer>
      <JellySpinner />
    </JellyContainer>
  )
}

export default Loader