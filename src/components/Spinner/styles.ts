import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles';
import { Button as SubmitButton } from '../SubmitButton/styles';

export const SpinnerContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    
    border-top: 2px solid #dbdbdc;
    border-right: 2px solid #dbdbdc;
    border-bottom: 2px solid #dbdbdc;
    border-left: 4px solid ${colors.secondary};

    background: transparent;
    border-radius: 50%;

    width: 80px;
    height: 80px;

    ${SubmitButton} & {
        width: 24px;
        height: 24px;

        border-top: 2px solid white;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        border-left: 4px solid ${colors.secondary};
    }
`;
