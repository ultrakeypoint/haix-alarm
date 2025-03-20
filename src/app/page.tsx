'use client'

import HaixLayout from '@/components/HaixLayout'
import {Field, Input, InputGroup, Stack, Switch} from '@chakra-ui/react'
import {useState} from 'react'
import {useTranslation} from 'react-i18next'

const App = () => {
  const {t} = useTranslation()
  const [startDatetime, setStartDatetime] = useState<Date | null>(new Date())
  return (
    <HaixLayout>
      <Stack
        gap="8"
        maxW="sm">
        <Field.Root orientation="horizontal">
          <Field.Label>{t('attendanceTime')}</Field.Label>
          <InputGroup endElement="시">
            <Input placeholder="7 ~ 13 입력" />
          </InputGroup>
        </Field.Root>
        <Field.Root orientation="horizontal">
          <Field.Label>{t('automaticAttendance')}</Field.Label>
          <Switch.Root>
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
        </Field.Root>
      </Stack>
    </HaixLayout>
  )
}

export default App
