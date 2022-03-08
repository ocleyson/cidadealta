import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBarComponent from '../components/NavBar';

export default {
    title: 'Components/Nav Bar',
    component: NavBarComponent,
    argTypes: { signOut: { action: 'clicked' } },
} as ComponentMeta<typeof NavBarComponent>;

export const NavBar: ComponentStory<typeof NavBarComponent> = (args) => <NavBarComponent {...args} />;