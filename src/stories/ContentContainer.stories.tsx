import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContentContainer from '../components/ContentContainer';

export default {
    title: 'Components/Content Container',
    component: ContentContainer,
} as ComponentMeta<typeof ContentContainer>;

export const Container: ComponentStory<typeof ContentContainer> = () => <ContentContainer><h1>Some Content</h1></ContentContainer>;
Container.storyName = 'Content Container';