import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignInPage from '../pages/SignIn';

export default {
    title: 'Pages/Sign In',
    component: SignInPage,
} as ComponentMeta<typeof SignInPage>;

export const SignIn: ComponentStory<typeof SignInPage> = () => <SignInPage />;