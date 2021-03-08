/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/reducers';
import actions from './store/appReducers/actions';
import { Button } from '@material-ui/core';

function App() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(actions.increment(1));
  }

  return (
    <div>
      <Button onClick={increase} variant="outlined">ABCD</Button>
      {counter}
    </div>
  );
}

export default App;