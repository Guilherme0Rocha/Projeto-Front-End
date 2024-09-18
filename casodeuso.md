# Casos de uso 


### Caso de Uso 1: Cadastrar Projeto
* **Atores**: Administrador
* **Descrição**: O administrador cadastra um novo projeto no site para que seja exibido no portfólio dos alunos.
* **Pré-condições**: O administrador deve estar autenticado no sistema.
* **Fluxo Principal**:
    1. O administrador acessa a área de gerenciamento de projetos.
    2. Seleciona a opção "Cadastrar Projeto".
    3. Preenche os detalhes do projeto (título, descrição, tecnologias, alunos responsáveis, função e vinculo na instituição ).
    4. Confirma o cadastro.
    5. O sistema salva os dados do projeto e exibe no portfólio.
* **Pós-condição**: O projeto é exibido na lista de projetos disponíveis para os usuários visualizarem.

### Caso de Uso 2: Editar Projeto
* **Atores**: Administrador
* **Descrição**: O administrador altera as informações de um projeto existente no site.
* **Pré-condições**: O projeto deve estar cadastrado, e o administrador deve estar autenticado.
* **Fluxo Principal**:
    1. O administrador acessa a área de gerenciamento de projetos.
    2. Seleciona o projeto a ser editado.
    3. Altera as informações necessárias (título, descrição, etc.).
    4. Confirma as alterações.
    5. O sistema salva as modificações e atualiza as informações no portfólio.
* **Pós-condição**: As alterações no projeto são refletidas no portfólio.

### Caso de Uso 3: Excluir Projeto
* **Atores**: Administrador
* **Descrição**: O administrador remove um projeto do site.
* **Pré-condições**: O projeto deve estar cadastrado, e o administrador deve estar autenticado.
* **Fluxo Principal**:
    1. O administrador acessa a área de gerenciamento de projetos.
    2. Seleciona o projeto que deseja excluir.
    3. Confirma a exclusão.
    4. O sistema remove o projeto da lista de projetos exibidos.
* **Pós-condição**: O projeto é removido do portfólio e não está mais disponível para visualização pelos usuários .

### Caso de Uso 4: Visualizar Projetos
* **Atores**: Empresa, Administrador, Aluno
* **Descrição**: Usuários visualizam os projetos cadastrados no site.
* **Pré-condições**: Deve haver pelo menos um projeto cadastrado no sistema.
* **Fluxo Principal**:
    1. O usuario acessa a página principal do portfólio.
    2. Navega pelos projetos disponíveis.
    3. Seleciona um projeto para visualizar seus detalhes.
    4. O sistema exibe as informações completas do projeto.
* **Pós-condição**: O usuário visualiza os projetos disponíveis, podendo gerar interesse no mesmo.

### Caso de Uso 5: Autenticar Administrador
* **Atores**: Administrador
* **Descrição**: O administrador faz login no sistema para gerenciar os projetos.
* **Pré-condições**: O administrador deve possuir uma conta cadastrada.
* **Fluxo Principal**:
    1. O administrador acessa a página de login.
    2. Insere o email e senha.
    3. O sistema valida as credenciais.
    4. O administrador é redirecionado para a área de gerenciamento de projetos.
* **Pós-condição**: O administrador está autenticado e pode gerenciar os projetos do site.


### Caso de Uso 6: Entrar em Contato com Aluno
* **Atores**: Empresa
* **Descrição**: A empresa visualiza as informações de contato de um aluno na descrição de um projeto e entra em contato para discutir possíveis oportunidades.
* **Pré-condições**: O projeto selecionado deve estar disponível no portfólio, e o aluno deve ter suas informações de contato publicadas no perfil.
* **Fluxo Principal**:
    1. A empresa acessa os detalhes de um projeto no portfólio.
    2. Visualiza as informações de contato do aluno responsável.
    3. Utiliza o método de contato (e-mail) para se comunicar diretamente com o aluno.
* **Pós-condição**: A empresa estabelece comunicação direta com o aluno para discutir o projeto ou possíveis oportunidades de emprego.
