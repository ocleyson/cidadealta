import { Button, Container, Logo, Main } from './styles';
import PoliceLogo from '../../assets/cidadealta-policelogo.jpg';
import { FiLogOut } from 'react-icons/fi';

type Props = {
    signOut(): void;
}

function NavBar({ signOut }: Props) {
    return (
        <Container>
            <Main>
                <Logo src={PoliceLogo} alt="logo do departamento de policia da cidade alta" />
                
                <Button type="button" onClick={signOut}>
                    <FiLogOut />
                </Button>
            </Main>
        </Container>
    );
}

export default NavBar;
