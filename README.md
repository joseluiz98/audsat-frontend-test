# Teste Frontend Angular Audast

Seja bem vindo! Este repositório contém o código-fonte para solução do teste para desenvolvedor Front End da Audsat.

## Primeiros Passos

Primeiramente, vamos nos certificar de instala todas as dependências. Então clone o projeto em alguma pasta de sua preferência e em seguida execute os próximos comandos nessa pasta:

`npm install` para instalar todas as dependências.

Em seguida, basta executar `ng serve` para utilizar o dev-server nativo do Angular, que é o suficiente. Navegue então para o `http://localhost:4200/`.

Foi desenvovlidor nesta aplicação:

- Telas para visualização de usuários, posts e comentários
  - Foi utilizada a API **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)** como exemplo
- A aplicação foi divida em componentes (como uma boa aplicação Angular deve ser 😍), e em módulos
- A busca no componente de Filtros (na listagem de usuários) é combinada, ou seja, podem ser utilizados mais de um campo e os resultados respeitarão os valorse de todos os campos utilizados. Além disso, o filtro é **instant search**, ou seja, não é necessário o clique no botão de pesquisa, a própria aplicação pesquisará assim que você terminar os inputs, porém o botão de pesquisa é funcional.
- A busca por usuários foi implementada utilizando queryParams, ou seja, a aplicação efetua chamadas à API com os parãmetros digitados para buscar a resposta correspondente, porém, implementei também um pipe que faz essa busca pelos usuários que já estão em tela, para ativar, dÊ um ctrl+f por **_FILTER_WITH_PIPE_**, e troque o valor dessa variável para `true`

![Vriable that toggles filtering by pipe/query params](https://i.ibb.co/sH8tM1j/image-20230508154210388.png)

- O componente de logs foi implemetado! Utilizei IndexedDB para isso
  - A integração com o IndexedDB foi feita com o auxílio da **[ngx-indexed-db](https://www.npmjs.com/package/ngx-indexed-db)**
- Foram utilizadas as bibliotecas de componentes: **[Angular Material](https://material.angular.io/)** e **[Bootstrap](https://getbootstrap.com/)**

É isto, espero que esteja de acordo/acima das expectativas!
