import styled from 'styled-components';
import { FiXCircle } from 'react-icons/fi';

import { colors } from '../../styles';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    background-image: linear-gradient(to right, ${colors.error}, 0.1%, #FFF);
    margin-bottom: 10px;
`;

export const XCircle = styled(FiXCircle)`
    color: ${colors.error};
    height: 25px;
    width: 25px;
    margin-right: 5px;
`;

export const Span = styled.span`
    font-size: 15px;
`;
