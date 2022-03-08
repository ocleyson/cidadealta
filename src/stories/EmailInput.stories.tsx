import { ComponentStory, ComponentMeta } from '@storybook/react';

import EmailInputComponent from '../components/EmailInput';

export default {
    title: 'Components/Email Input',
    component: EmailInputComponent,
} as ComponentMeta<typeof EmailInputComponent>;

const Template: ComponentStory<typeof EmailInputComponent> = (args) => <EmailInputComponent {...args} />;

export const EmailInput = Template.bind({});
EmailInput.storyName = 'Email Input';