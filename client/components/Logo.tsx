import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import Couch from 'public/assets/img/jikiki-logo.svg'

const Logo = () => {
  return (
    <Flex transform="translateY(2px)" minW="80px" maxW="100px" mr={2}>
      <Link href="/" display="inline-block">
        <Couch width="100%" />
      </Link>
    </Flex>
  )
}

export default Logo
