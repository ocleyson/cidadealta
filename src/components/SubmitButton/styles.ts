import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const Button = styled.button`
    width: 100%;
    color: #FFF;
    height: 45px;
    background-color: ${colors.secondary};
    border-radius: 5px;
    font-size: 17px;
    border: none;
    font-weight: ${fonts.semi_bold};
    cursor: pointer;
`;
