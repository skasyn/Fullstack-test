import { useConvert } from '../context/convert';
import { Grid, GridItem, Select, NumberInput, NumberInputField, Flex } from '@chakra-ui/react';
import { Result } from '../components/Result';
import { CurrenciesBody } from '../types';

interface GridProps {
  currencies: CurrenciesBody;
}

const buildCurrenciesQuery = (
  newCurr: string,
  isFrom: boolean,
  oldFromCurr: string,
  oldToCurr: string,
) => {
  if (isFrom) {
    return { currenciesQuery: `${newCurr}_${oldToCurr}`, from: newCurr, to: oldToCurr };
  } else {
    return { currenciesQuery: `${oldFromCurr}_${newCurr}`, from: oldFromCurr, to: newCurr };
  }
};

export const ConvertGrid = ({ currencies }: GridProps) => {
  const [state, dispatch] = useConvert();

  const onCurrencyChange = async (newCurr: string, isFrom: boolean) => {
    const { currenciesQuery, from, to } = buildCurrenciesQuery(
      newCurr,
      isFrom,
      state.fromCurrency,
      state.toCurrency,
    );
    const res = await fetch(`http://localhost:8000/convert?conversion=${currenciesQuery}`);
    const rate = (await res.json())[currenciesQuery];

    dispatch({
      type: 'changeCurrency',
      payload: { fromCurrency: from, toCurrency: to, newRate: rate },
    });
  };

  console.log(currencies);
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={4} paddingTop="20px">
      <GridItem>
        <NumberInput>
          <NumberInputField
            placeholder="From"
            onChange={(e) =>
              dispatch({ type: 'changeValues', payload: { from: Number(e.target.value) } })
            }
          />
        </NumberInput>
      </GridItem>
      <GridItem>
        <Select placeholder="USD" onChange={(e) => onCurrencyChange(e.target.value, true)}>
          {Object.keys(currencies).map((e) => (
            <option key={`${e}_from`} value={e}>
              {e}
            </option>
          ))}
        </Select>
      </GridItem>
      <GridItem>
        <Result />
      </GridItem>
      <GridItem>
        <Select placeholder="USD" onChange={(e) => onCurrencyChange(e.target.value, false)}>
          {Object.keys(currencies).map((e) => (
            <option key={`${e}_to`} value={e}>
              {e}
            </option>
          ))}
        </Select>
      </GridItem>
    </Grid>
  );
};
