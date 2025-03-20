'use client'

import i18n from '@/i18n/config'
import {Container} from '@chakra-ui/react'
import React from 'react'
import {I18nextProvider} from 'react-i18next'

type HaixLayoutProps = {
  children: React.ReactNode
}

const HaixLayout = ({children}: HaixLayoutProps) => {
  return (
    <Container>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Container>
  )
}

export default HaixLayout
