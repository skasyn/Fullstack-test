import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { CurrenciesBody } from '../types';

const defaultValue = {
  currentResult: 0,
  fromCurrency: 'USD',
  fromValue: 0,
  toCurrency: 'USD',
  currentRate: 1,
};

type DefaultValues = typeof defaultValue;

interface ConvertState extends DefaultValues {
  currencies: CurrenciesBody;
}

type Action =
  | { type: 'changeValues'; payload: { from: number } }
  | {
      type: 'changeCurrency';
      payload: { fromCurrency: string; toCurrency: string; newRate: number };
    };

const ConvertStateContext = createContext<ConvertState | null>(null);
const ConvertDispatchContext = createContext<Dispatch<Action> | null>(null);

const countReducer = (state: ConvertState, action: Action) => {
  switch (action.type) {
    case 'changeValues': {
      const { from } = action.payload;

      return { ...state, fromValue: from, currentResult: from * state.currentRate };
    }
    case 'changeCurrency': {
      const { fromCurrency, toCurrency, newRate } = action.payload;
      return {
        ...state,
        fromCurrency,
        toCurrency,
        currentRate: newRate,
        currentResult: state.fromValue * newRate,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${(action as any).type}`); // we cast because it shpuld be impossible to enter this condition, but we still need to handle that case
    }
  }
};

export const ConvertProvider = ({
  children,
  currencies,
}: {
  children: ReactNode;
  currencies: CurrenciesBody;
}) => {
  const [state, dispatch] = useReducer(countReducer, { ...defaultValue, currencies });

  return (
    <ConvertStateContext.Provider value={state}>
      <ConvertDispatchContext.Provider value={dispatch}>{children}</ConvertDispatchContext.Provider>
    </ConvertStateContext.Provider>
  );
};

export const useConvertState = () => {
  const stateContext = useContext(ConvertStateContext);
  if (!stateContext) {
    throw new Error('useConvertState must be used within a ConvertStateProvider');
  }
  return stateContext;
};

export const useConvertDispatch = () => {
  const dispatchContext = useContext(ConvertDispatchContext);
  if (!dispatchContext) {
    throw new Error('useConvertState must be used within a ConvertStateProvider');
  }
  return dispatchContext;
};

export const useConvert = (): [ConvertState, Dispatch<Action>] => [
  useConvertState(),
  useConvertDispatch(),
];
