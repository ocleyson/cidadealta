import GlobalStyle from '../../styles/global';

type Props = {
    children: JSX.Element
}

function App({ children }: Props) {
    return (
        <>
            <GlobalStyle />

            { children }
        </>
    );
}

export default App;
