import styled from 'styled-components';

interface ISpacer {
    axis: 'vertical' | 'horizontal';
    size: number;
}

function getHeight({ axis, size }: ISpacer) {
    return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }: ISpacer) {
    return axis === 'vertical' ? 1 : size;
}

const Spacer = styled.span<ISpacer>`
    display: block;
    width: ${getWidth}px;
    min-width: ${getWidth}px;
    height: ${getHeight}px;
    min-height: ${getHeight}px;
`;

export const InlineSpacer = styled(Spacer)`
    display: inline-block;
`;

export default Spacer;
