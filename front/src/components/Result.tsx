import { Flex } from '@chakra-ui/react';
import { useConvertState } from '../context/convert';

export const Result = () => {
  const state = useConvertState();

  return (
    <Flex
      alignItems="center"
      h="100%"
      border="2px"
      borderColor="gray.200"
      paddingLeft="1rem"
      borderRadius="md"
    >
      {state.currentResult}
    </Flex>
  );
};
