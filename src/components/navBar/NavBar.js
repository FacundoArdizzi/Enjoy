import { Box, Heading, Icon, Stack, Link } from '@chakra-ui/react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const NavBar = () => (
  <Stack 
    position='fixed' 
    direction='row' 
    h='10vh'
    w='100vw' 
    bg='orange' 
    color='white' 
    p={2} 
    alignItems='center' 
    justifyContent='space-between'
    zIndex='9999'
  >
    <Box>
      <Heading fontWeight='semi-bold'>Enjoy!</Heading>
    </Box>
    <Link 
      display='hidden'
      href='https://api.whatsapp.com/send?phone=34636213876&text=Quisiera%20coordinar%20la%20primer%20clase%20gratis!%20'
    > 
      <Stack
        mr='1vw'
        borderRadius='full' 
        bg='whatsapp.500'
        fontSize='2.5rem'
        p={2}
        _focus={{ outline: 'none' }}
        _hover={{ outline: 'none' }}
      >
        <Icon as={FaWhatsapp} size='xl'/>
      </Stack>
    </Link>
  </Stack>
)

export default NavBar
