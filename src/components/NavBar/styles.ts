import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
    background-color: ${colors.primary};
    padding: 10px;
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
`;

export const Main = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 50px;
    height: auto;
`;

export const Button = styled.button`
    display: flex;
    border: none;
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
`;