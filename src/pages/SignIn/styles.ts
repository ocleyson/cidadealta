import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    padding: 0 10px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;
    width: 100%;
    max-width: 440px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 20px;

    form {
        width: 100%;
    }
`;

export const Logo = styled.img`
    width: 50px;
    height: auto;
`;