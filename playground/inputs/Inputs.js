/* eslint-disable no-console */
/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'

import {
  Row,
  Col,
  Input,
  AutoComplete,
  Spacer,
  Heading,
  PhoneInput,
  Password,
  CardInput,
  NumberInput,
  MoneyInput,
  TextArea,
  SliderInput,
  Slider
} from 'lib'
import { theme } from 'theme'

export const data_input_items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => ({
  id: i,
  value: `Item ${i}${i + 1}`
}))

export const Inputs = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md="5">
          <Basic />
          <AutoCompletes />
          <Phones />
          <Passwords />
          <Cash />
          <Numbers />
          <Cards />
          <Sliders />
          <TextAreas />
        </Col>
      </Row>
    </React.Fragment>
  )
}

const Basic = () => {
  return (
    <React.Fragment>
      <Heading h={3}>Basic</Heading>
      <Spacer space={theme.spacings.xs2} />
      <Input
        info="Вспомогательный простой текст в одну строчку"
        placeholder="Зубенко Михаил Петрович"
        onChange={e => {
          console.log(e.target.value)
        }}
      />
      <Input
        guide={true}
        mask={[/\d/, /\d/, /\d/, /\d/]}
        info="Вспомогательный простой текст в одну строчку"
        placeholder="Зубенко Михаил Петрович"
        onChange={e => {
          console.log(e.target.value)
        }}
      />
      <Spacer space={theme.spacings.s} />
    </React.Fragment>
  )
}
const AutoCompletes = () => {
  return (
    <React.Fragment>
      <Heading h={3}>AutoComplete</Heading>
      <Spacer space={theme.spacings.xs} />
      <AutoComplete
        label="Выберите регион"
        placeholder="Укажите регион"
        loading={true}
        onChange={value => {
          console.log(value)
        }}
      />
      <Heading h={3}>Search</Heading>
      <Spacer space={theme.spacings.xs} />
      <AutoComplete
        search={true}
        label="Выберите регион"
        placeholder="Укажите регион"
        items={data_input_items}
        loading={false}
        onChange={value => {
          console.log(value)
        }}
      />
    </React.Fragment>
  )
}
const Phones = () => {
  const [phone, setPhone] = useState('+7')
  return (
    <React.Fragment>
      <Heading h={3}>Phone</Heading>
      <Spacer space={theme.spacings.xs} />
      <PhoneInput
        label="Номер телефона"
        info="Вспомогательный простой текст в одну строчку"
        tooltip="Текст тултипа. Привет, человек!"
        placeholder="Номер телефона"
      />
    </React.Fragment>
  )
}

const Passwords = () => {
  return (
    <React.Fragment>
      <Heading h={3}>Password</Heading>
      <Spacer space={theme.spacings.xs} />
      <Password
        label="Пароль"
        info="Вспомогательный простой текст в одну строчку"
        tooltip="Текст тултипа. Привет, человек!"
        placeholder="Введите пароль"
        onChange={() => {
          console.log('changed')
        }}
      />
    </React.Fragment>
  )
}

const Cash = () => {
  return (
    <React.Fragment>
      <Heading h={3}>Money</Heading>
      <Spacer space={theme.spacings.xs} />

      <MoneyInput
        label="Сумма перевода"
        info="Вспомогательный простой текст в одну строчку"
        tooltip="Текст тултипа. Привет, человек!"
        placeholder="Введите сумму"
        type="money"
        currency="RUB"
      />
    </React.Fragment>
  )
}
const Numbers = () => {
  return (
    <React.Fragment>
      <Heading h={3}>Number</Heading>
      <Spacer space={theme.spacings.xs} />
      <NumberInput label="Количетсво счетов:" min={0} max={10} />
    </React.Fragment>
  )
}
const Cards = () => {
  return (
    <React.Fragment>
      <Heading h={3}>CardInput</Heading>
      <Spacer space={theme.spacings.xs} />
      <CardInput
        label="Номер карты"
        info="Вспомогательный простой текст в одну строчку"
        tooltip="Текст тултипа. Привет, человек!"
        placeholder="Введите номер карты"
      />
    </React.Fragment>
  )
}

const Sliders = () => {
  const [value, setValue] = useState(50)
  const [rangeValue, setRangeValue] = useState([20, 50])
  return (
    <React.Fragment>
      <Heading h={3}>{'Slider&Range'}</Heading>
      <Spacer space={theme.spacings.xs} />
      <SliderInput
        size={'md'}
        label={'Сумма кредита'}
        tooltip={'Привет, мир!'}
        min={1}
        max={100}
        value={value}
        onChange={setValue}
      />

      <SliderInput
        size={'md'}
        label={'Сумма кредита'}
        tooltip={'Привет, мир!'}
        min={1}
        max={100}
        value={rangeValue}
        onChange={setRangeValue}
        isRange
      />
    </React.Fragment>
  )
}

const TextAreas = () => {
  const [state, setState] = useState('initialState')

  const handler = e => {
    setState(e.target.value)
  }

  return (
    <React.Fragment>
      <Heading h={3}>TextArea</Heading>
      <Spacer space={theme.spacings.xs} />
      <Heading h={4}>Fixed</Heading>
      <TextArea />
      <Heading h={4}>Autoresize</Heading>
      <TextArea autoResize onChange={handler} value={state} />
    </React.Fragment>
  )
}
