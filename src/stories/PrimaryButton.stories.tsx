import { ComponentStory, ComponentMeta } from '@storybook/react';

import PrimaryButtonComponent from '../components/PrimaryButton';

export default {
    title: 'Components/Primary Button',
    component: PrimaryButtonComponent,
} as ComponentMeta<typeof PrimaryButtonComponent>;

const Template: ComponentStory<typeof PrimaryButtonComponent> = (args) => <PrimaryButtonComponent {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    loading: false,
    buttonText: 'Entrar',
    type: "submit",
}