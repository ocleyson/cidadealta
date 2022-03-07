import GlobalStyle from '../../styles/global';
import { Provider } from 'react-redux';
import { store } from '../../app/reduxStore';

type Props = {
    children: JSX.Element
}

function App({ children }: Props) {
    return (
        <Provider store={store}>
            <GlobalStyle />

            { children }
        </Provider>
    );
}

export default App;
