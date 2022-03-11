import styled from 'styled-components';

import { colors, fonts } from '../../styles';

interface IButton {
    isDeleteButton?: boolean;
}

export const Button = styled.button<IButton>`
    width: 100%;
    color: #FFF;
    height: 45px;
    background-color: ${(props) => (props.isDeleteButton ? colors.error : colors.secondary)};
    border-radius: 5px;
    font-size: 17px;
    border: none;
    font-weight: ${fonts.semi_bold};
    cursor: pointer;
`;
