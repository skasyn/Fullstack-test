import { Text } from '@chakra-ui/react';
import { useConvertState } from '../context/convert';

export const RateFrom = () => {
  const state = useConvertState();

  return <Text fontSize="lg">{`1 ${state.currencies[state.fromCurrency].currencyName}`}</Text>;
};
