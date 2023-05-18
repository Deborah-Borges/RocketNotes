import { RiShutDownLine } from 'react-icons/ri'
import { Profile, Logout } from "./styles";
import { Container } from "./styles";

export function Header() {
    return (
        
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/Deborah-Borges.png" 
                alt="Foto perfil" 
                />
                <div>
                    <span>Bem vindo</span>
                    <strong>Oii</strong>
                </div>
                
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
        
    )
}