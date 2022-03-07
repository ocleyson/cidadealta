import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
        font-size: 15px;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased;
        background-color: #f2f6ff;
        color: #4a525e;
    }

    html, body, #root {
        height: 100%;
    }

    ul {
        list-style: none;
    }
`;
