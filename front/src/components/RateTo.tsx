import { Text } from '@chakra-ui/react';
import { useConvertState } from '../context/convert';

export const RateTo = () => {
  const state = useConvertState();

  return (
    <Text fontSize="3xl">{`${1 * state.currentRate} ${
      state.currencies[state.toCurrency].currencyName
    }`}</Text>
  );
};
