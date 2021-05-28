import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Container } from '../components/Container';
import { RateFrom } from '../components/RateFrom';
import { RateTo } from '../components/RateTo';
import { CurrentDate } from '../components/CurrentDate';
import { ConvertGrid } from '../components/ConvertGrid';
import { ConvertProvider } from '../context/convert';
import { Stack } from "@chakra-ui/react";
import { CurrenciesBody } from "../types";

const Index = ({ currencies }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <ConvertProvider currencies={currencies}>
      <Container height="100vh">
        <Stack>
          <RateFrom />
          <RateTo />
          <CurrentDate />
          <ConvertGrid currencies={currencies} />
        </Stack>
      </Container>
  </ConvertProvider>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:8000/currencies');
  const currencies: CurrenciesBody = await res.json();

  return {
    props: {
      currencies: currencies
    },
    revalidate: 60
  }
}

export default Index
