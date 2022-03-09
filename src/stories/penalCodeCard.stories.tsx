import { ComponentStory, ComponentMeta } from '@storybook/react';

import PenalCodeCardComponent from '../components/PenalCodeCard';

export default {
    title: 'Components/Penal Code Card',
    component: PenalCodeCardComponent,
} as ComponentMeta<typeof PenalCodeCardComponent>;

const Template: ComponentStory<typeof PenalCodeCardComponent> = (args) => <PenalCodeCardComponent {...args} />;

export const PenalCodeCard = Template.bind({});
PenalCodeCard.args = {
    id: 1,
    nome: "Desacato",
    dataCriacao: "2021-04-29T01:26:35.700Z",
    multa: 501.2,
    status: "Ativo",
}