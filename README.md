# RocketSeat NLW eSports

Elaborado pela  [RocketSeat](https://www.rocketseat.com.br/) na NLW eSports.

## Professores 👨🏽‍🏫
- [Diego Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/)

## Projeto 🖱️

<h3>Projeto voltado para a área de eSports!</h3>
<h3>Com ele conseguimos fornecer uma ponte para que pessoas que jogam os mesmos games se conectem.</h3>
<h3>O usuário visualiza todos os games disponíveis, e com base nisso ela pode clicar para publicar um anúncio, esse anúncio serve para ela dizer que está procurando parceiros de jogo, com o anúncio publicado as pessoas podem se conectar e jogar juntas!</h3>
</br>

Veja o exemplo de uso do projeto: 

![image](https://user-images.githubusercontent.com/69023428/190931600-eb3a1bd6-0953-4675-9816-bca0306a9d0d.png)
![image](https://user-images.githubusercontent.com/69023428/190931606-5f5695f1-2968-4ac7-a78f-30f64e1ac063.png)

## Tecnologias utilizadas 💻 WEB
<div style="display: inline_block"><br>
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
 <img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg">
 <img align="center" height="30" width="40" src="https://user-images.githubusercontent.com/69023428/173976855-1ea3994f-570c-49a5-bd43-67b746fd239a.png" /> 
 <img align="center" height="30" width="150" src="https://user-images.githubusercontent.com/69023428/173977057-570c0120-b8b6-4a58-840a-abb0ab85edfd.png" />
</div>

</br>

## Tecnologias utilizadas 📋 BACKEND
<div style="display: inline_block"><br>
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
</div>

</br>

### Extensões e outros packages utilizados 🔧
- Cors
- Prisma
- phosphor-react
- RADIX

## Funcionalidades ⚙️
- Publicar anúncios na API, rota POST /games/:id/ads ✔️
- Buscar anúncios na API, rota GET /games/:id/ads ✔️
- Buscar todos os jogos da API, rota GET /games ✔️
- Buscar discord do usuário de um determinado anúncio, rota GET /ads/:id/discord ✔️

## Melhorias pendentes ⚙️ 
- Responsividade ❌
- Carousel para mais Games ( KEEN-SLIDER ) ❌
- Usar Select do Radix ❌
- Validação do formulário ( REACT HOOK FORM ) ❌
- Autenticação ( Logar com a Twitch, Discord etc...) ❌

## Configuração inicial
- Clone o projeto com ```git clone```
- Acesse o terminal e digite ```npm i``` para baixar todas as dependências de acordo com o package.json
- Após ter instalado as dependências, digite no terminal ```npm run dev``` para executar a aplicação WEB e também abra o BACKEND e digite no terminal ```npm run dev```
