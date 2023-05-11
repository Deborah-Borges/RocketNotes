import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'

import { Container, Form } from './styles'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar notas</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Título"/>
                    <Textarea placeholder="Outra "/>
                </Form>
            </main>
        </Container>
    )
}