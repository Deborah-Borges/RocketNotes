import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Links, Container, Content } from "./styles";

export function Details (){

   return (
      <Container>
      <Header />
      <main>
         <Content>
            <ButtonText title="Excluir nota"/>

            <h1>Introdução ao React</h1>

      <Section title="Links úteis">
         <Links>
            <li>
               <a href="#">https://www.rocketseat.com.br/</a>
            </li>
            <li>
               <a href="#">https://www.rocketseat.com.br/</a>
            </li>
            <li>Item 3</li>
         </Links>
      </Section>

      <Section title="Marcadores">
         <Tag title="express"/>
         <Tag title="nodejs"/>
      </Section>

      <Button title="Voltar" />
         </Content>
      </main>
      
      </Container>

   )
}
