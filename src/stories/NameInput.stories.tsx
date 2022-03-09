import { ComponentStory, ComponentMeta } from '@storybook/react';

import NameInputComponent from '../components/NameInput';

export default {
    title: 'Components/Name Input',
    component: NameInputComponent,
} as ComponentMeta<typeof NameInputComponent>;

const Template: ComponentStory<typeof NameInputComponent> = (args) => <NameInputComponent {...args} />;

export const NameInput = Template.bind({});
NameInput.storyName = 'Name Input';