import React, { useReducer } from 'react';
import { initialState, stateContext, dispatchContext, reducer} from './reducer/reducer'
import Main from './components/Main';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state} >
        <Main/>
      </stateContext.Provider>
  </dispatchContext.Provider>
  );
}

export default App;
