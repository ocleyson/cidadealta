import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubmitButtonComponent from '../components/SubmitButton';

export default {
    title: 'Components/Submit Button',
    component: SubmitButtonComponent,
} as ComponentMeta<typeof SubmitButtonComponent>;

const Template: ComponentStory<typeof SubmitButtonComponent> = (args) => <SubmitButtonComponent {...args} />;

export const SubmitButton = Template.bind({});
SubmitButton.storyName = 'Submit Button';
SubmitButton.args = {
    loading: false,
    buttonText: 'Entrar',
}