import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubmitButton from '../components/SubmitButton';

export default {
    title: 'Components/Submit Button',
    component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => <SubmitButton {...args} />;

export const ErrorMessage = Template.bind({});
ErrorMessage.storyName = 'Submit Button';
ErrorMessage.args = {
    loading: false,
    buttonText: 'Entrar',
}