
# TaskMaster - Aplicativo de Gerenciamento de Tarefas

## 📱 Sobre o Projeto

Este é um protótipo funcional de um aplicativo chamado **TaskMaster**, desenvolvido como parte de um teste técnico para a vaga de Desenvolvedor Front-End. O aplicativo permite que os usuários gerenciem tarefas com funcionalidades de autenticação, criação, edição, exclusão e visualização de tarefas em diferentes formatos.

---

## 🚀 Funcionalidades Implementadas

- **Autenticação de Usuário**
  - Tela de login
  - Tela de cadastro

- **Gerenciamento de Tarefas**
  - Listagem em visualizações de lista e kanban
  - Criação, edição, exclusão e conclusão de tarefas

---

## 🧪 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) com Expo
- [React Navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/) ou Context API
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://react-hook-form.com/)
- Hooks personalizados
- Zod

---

## 🧱 Arquitetura do Projeto

- **Padrão de pastas** dividido por responsabilidade
- **Camada de serviços** para abstração de chamadas de API
- **Gerenciamento de estado** centralizado com Redux/Context
- **Validações desacopladas** nos formulários e schemas
- **Estilo modularizado** com Styled Components
- **Mocks de endpoints** para simulação das integrações

---

## 🔐 Integração com o Back-End

- Estrutura pronta para integração com Backend
- Endpoints simulados com mocks
- Eventuais variáveis salvas no session storage devido à limitação da aplicação, se houvesse um backend a estratégia seria outra

---

## ⚙️ Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/MateusGutierrez/mxm-test.git
   cd my-app
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute a aplicação:**

   ```bash
   npm run start
   ```
---

## 📦 APK de Teste

> Baixe o APK para Android através do link: [taskmaster.apk](https://seulink.com/taskmaster.apk) AINDA NÃO ESTÁ DISPONÍVEL

---

## 📝 Decisões Técnicas

- **Redux foi escolhido** para facilitar a escalabilidade do gerenciamento de estado no CRUD das tarefas.
- **React Hook Form** foi usado por sua leveza e facilidade de integração com componentes React Native.
- Separação clara de responsabilidades com **hooks personalizados** e camada de serviços.

---

## 🧠 Desafios e Soluções

- Implementar um **Kanban funcional** no mobile exigiu uso cuidadoso de `FlatList`.
- Bibliotecas que estão fora do ar ou que sofreram mudanças como a AsyncStorage e a nanouid
- Simulação de API foi feita com mocks de variáveis salvas no SessionStorage e delays programados para simular latência.
- Organização do código focada em **legibilidade e manutenibilidade**.

---

## 📁 Estrutura de Pastas (exemplo)

```
src/
├── components/
├── context/
├── navigation/
├── redux/
├── routes/
├── schemas/
├── screens/
├── services/
├── theme/
└── utils/
```

---

## 🧾 Licença

Este projeto é apenas para fins de avaliação técnica.
