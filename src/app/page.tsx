'use client'

import HaixLayout from '@/components/HaixLayout'
import {Field, Input, Stack, Switch} from '@chakra-ui/react'
import {useState} from 'react'
import {useTranslation} from 'react-i18next'

const App = () => {
  const [startDatetime, setStartDatetime] = useState<Date | null>(new Date())
  const [endDatetime, setEndDateTime] = useState<Date | null>(new Date())
  const {t} = useTranslation()

  return (
    <HaixLayout>
      <Stack
        gap="8"
        maxW="sm"
        css={{'--field-label-width': '96px'}}>
        <Field.Root orientation="horizontal">
          <Field.Label>{t('startDateTime')}</Field.Label>
          <Input
            type="datetime-local"
            placeholder="me@example.com"
            flex="1"
          />
        </Field.Root>
        <Field.Root orientation="horizontal">
          <Field.Label>{t('endDateTime')}</Field.Label>
          <Input
            type="datetime-local"
            placeholder="me@example.com"
            flex="1"
          />
        </Field.Root>
        <Field.Root orientation="horizontal">
          <Field.Label>{t('automaticAttendance')}</Field.Label>
          <Switch.Root>
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
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
