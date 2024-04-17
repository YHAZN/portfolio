import { IconButton, useColorMode,useColorModeValue} from '@chakra-ui/react'
import { formatRevalidate } from 'next/dist/server/lib/revalidate'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <IconButton 
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
        ></IconButton>
    )
}

export default ThemeToggleButton