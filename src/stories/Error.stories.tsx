import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorComponent from '../components/Error';

export default {
    title: 'Error',
    component: ErrorComponent,
} as ComponentMeta<typeof ErrorComponent>;

const Template: ComponentStory<typeof ErrorComponent> = (args) => <ErrorComponent {...args} />;

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
    message: 'Error message',
}