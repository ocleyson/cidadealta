import styled from 'styled-components';
import { colors, fonts } from '../../styles';
import { Link as RouterLink } from 'react-router-dom';

interface ILink {
    isActive: boolean;
}

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

export const Link = styled(RouterLink)<ILink>`
    font-weight: ${fonts.semi_bold};
    color: ${props => (props.isActive ? '#000000' : '#a0a0a0')};
    padding: 10px;
    border-bottom: ${props => (props.isActive ? '2px solid #000000' : 'none')};
    text-decoration: none;
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