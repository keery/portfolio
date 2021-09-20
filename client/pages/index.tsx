import React from 'react'
import { Flex } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  return (
    <Flex backgroundColor="gray.400" h="100%" direction="column">
      Bonjour
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps<SSRConfig> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home
