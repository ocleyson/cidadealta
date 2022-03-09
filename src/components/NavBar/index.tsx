import { Button, Container, Logo, Main, Link } from './styles';
import PoliceLogo from '../../assets/cidadealta-policelogo.jpg';
import { FiLogOut } from 'react-icons/fi';
import Spacer from '../../styles/spacer';
import { useLocation } from "react-router-dom";

type Props = {
    signOut(): void;
}

function NavBar({ signOut }: Props) {
    const location = useLocation();

    return (
        <Container>
            <Main>
                <Logo src={PoliceLogo} alt="logo do departamento de policia da cidade alta" />
                
                <Button type="button" onClick={signOut}>
                    <FiLogOut />
                </Button>
            </Main>

            <Spacer axis="vertical" size={10} />

            <Link to="/authenticated/home" $isActive={location.pathname.includes('home')}>Home</Link>
            <Link to="/authenticated/create" $isActive={location.pathname.includes('create')}>Criar Código</Link>
        </Container>
    );
}

export default NavBar;
