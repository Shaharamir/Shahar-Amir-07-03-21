import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { StylesProvider } from '@material-ui/core/styles';

interface props { }

const Providers: React.FC<props> = (props) => {
    const { children } = props;
    return (
        <StylesProvider injectFirst>
            <Provider store={store}>
                {children}
            </Provider>
        </StylesProvider>
    )
}
export default Providers;