# Requisitos Funcionais

##	O sistema listará os projetos;
  -	O sistema apresentará os projetos de forma finita e por meio de páginas.
  -	O sistema de paginação terá uma quantidade x de projetos por páginas, um menu para navegar entre as páginas e uma breve descrição de cada projeto (aluno, curso, ano realizado).
  -	O sistema agrupará  a exibição dos projetos em colunas.
    -	1 coluna em dispositivos móveis.
    -	4 colunas em tablets.
    -	6 colunas em telas de até 1200px.
    -	8 colunas em telas maiores.
      
##	Abrindo os projetos o sistema mostrará o conteúdo do projeto e algumas informações;
  -	Ao clicar no projeto, haverá uma descrição dele, como:
    -	Tempo de duração.
    -	Função de cada integrante.
    -	Linguagem usada.
    -	Tecnologias e ferramentas.

##	O sistema possuirá uma aba administrativa;
  -	O sistema autenticará o administrador através de login .
  -	O administrador poderá fazer login no sistema com suas credenciais.
  -	O botão de login será oculto, só o administrador será informado, nenhum outro usuário precisará fazer login no sistema.
  -	Após autenticação bem-sucedida o administrador terá acesso aos portifólios podendo incluir ou remover projetos do sistema, só ele poderá realizar essa tarefa.
    
##	O sistema conterá uma barra de pesquisa de projetos;
  -	A barra de busca estará localizada na home page com fácil acesso.
  -	Os usuários poderão buscar projetos usando palavras-chave como título do projeto ou nome de um autor.

##	O sistema possuirá um botão de filtro para projetos;
  -	O botão estará localizado na home page com fácil acesso.
  -	Será possível filtrar os projetos por:
    -	Data realizada.
    -	Curso.
    -	Tecnologia usada.

##	O sistema apresentará o e-mail de contato dos integrantes do projeto;
  -	No final da descrição do projeto, estarão os e-mails de contato dos integrantes que realizaram o projeto.

# Requisitos Não Funcionais

## O sistema deverá ser compatível com os principais navegadores e dispositivos:
  - O sistema será testado e otimizado para funcionar nos navegadores mais populares, incluindo:
    - Google Chrome
    - Mozilla Firefox
    - Microsoft Edge
    - Safari
  - O layout e os elementos visuais serão adaptados de acordo com o tamanho da tela, garantindo uma experiência fluida e consistente em diferentes resoluções.

## O sistema deverá ter um banco de dados não relacional:
  - O sistema utilizará um banco de dados NoSQL, como MongoDB ou Firebase, para armazenar os dados de forma eficiente.
  - O banco de dados será otimizado para consultas rápidas e flexíveis, suportando grandes volumes de dados sem prejudicar o desempenho.
  - A estrutura dos dados será projetada para ser escalável, permitindo adições e atualizações frequentes sem a necessidade de grandes refatorações.

## O sistema deverá ter inspiração na identidade visual IBMEC:
  - O sistema seguirá a paleta de cores, tipografia e padrões de design baseados na identidade visual do IBMEC.
  - A tipografia será consistente com a usada pela instituição, garantindo um design visualmente harmonioso e alinhado com a marca.
  - Ícones e elementos gráficos serão cuidadosamente escolhidos para manter a estética institucional.

## O sistema deverá ser feito em JavaScript com framework em React:
  - O sistema será desenvolvido utilizando o framework React, garantindo uma interface de usuário dinâmica e de alta performance.
  - O uso de componentes reutilizáveis no React permitirá uma manutenção mais simples e uma estrutura modular.
  - O React será utilizado para criar uma experiência de navegação rápida e sem recarregamentos de página, melhorando a usabilidade geral do sistema.
