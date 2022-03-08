import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorComponent from '../components/Error';

export default {
    title: 'Components/Error Component',
    component: ErrorComponent,
} as ComponentMeta<typeof ErrorComponent>;

const Template: ComponentStory<typeof ErrorComponent> = (args) => <ErrorComponent {...args} />;

export const ErrorMessage = Template.bind({});
ErrorMessage.storyName = 'Error Component';
ErrorMessage.args = {
    message: 'Error message',
}