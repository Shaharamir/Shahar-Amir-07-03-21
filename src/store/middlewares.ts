import { Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middlewareArray: Middleware[] = [logger];

export default middlewareArray;