import { ComponentStory, ComponentMeta } from '@storybook/react';

import PasswordInputComponent from '../components/PasswordInput';

export default {
    title: 'Components/Password Input',
    component: PasswordInputComponent,
} as ComponentMeta<typeof PasswordInputComponent>;

const Template: ComponentStory<typeof PasswordInputComponent> = (args) => <PasswordInputComponent {...args} />;

export const PasswordInput = Template.bind({});
PasswordInput.storyName = 'Password Input';