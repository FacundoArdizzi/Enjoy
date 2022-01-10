import { Stack, Icon, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Footer = () => (
  <Stack 
    h='fit-content'
    bg='#AAA' 
    p={10} 
    paddingBottom='10vh'
    direction={{ base: 'column', md: 'row' }} 
    color='white' 
    justifyContent={{ base: '', md: 'space-between' }}
  >
    <Stack alignItems='center' w='fit-content' mx={{ base: 'auto', md: '' }}>
      <Icon as={FaGraduationCap} w='8em' h='8em' mr='5vw' />
      <Heading fontWeight='medium' fontSize='1.7rem'>Enjoy English® 2021</Heading>
    </Stack>
    <Stack w={{ base: '80vw', md: '35vw' }} >
      <Heading 
        fontSize={{ base: '1.5rem', md: '2rem' }} 
        fontWeight='medium' 
        borderBottom='2px solid white' 
        w='fit-content'
        mx={{ base: 'auto', md: '' }}
        mb='3vh'
        mt={{ base: '5vh', md: '' }}
      >Certificaciones Oficiales</Heading>
      <Stack>
        <Link color='#3366BB'>First Certificate</Link>
        <Link color='#3366BB'>TOEFL</Link>
        <Link color='#3366BB' >TOEIC</Link>
      </Stack>
    </Stack>
  </Stack>
)

export default Footer
