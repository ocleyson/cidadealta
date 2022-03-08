import { ComponentStory, ComponentMeta } from '@storybook/react';

import EmailInput from '../components/EmailInput';

export default {
    title: 'Components/Email Input',
    component: EmailInput,
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args) => <EmailInput {...args} />;

export const ErrorMessage = Template.bind({});
ErrorMessage.storyName = 'Email Input';