import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'


import { Container, Form } from './styles'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar notas</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações"/>

                    <Section title="Linkes úteis">
                        <NoteItem value='https://github.com/deborah-borges'/>
                        <NoteItem isNew placeholder='Novo link'/>
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value='React'/>
                            <NoteItem isNew placeholder='Nova Tag'/>
                        </div>
                    </Section>

                    <Button title="Salvar" />

                </Form>
            </main>
        </Container>
    )
}