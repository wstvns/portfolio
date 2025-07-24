# Portfolio Pessoal

Um portfólio moderno e interativo construído com Next.js, TypeScript, Tailwind CSS e Framer Motion. Apresenta um design elegante com efeitos de partículas interativas e animações suaves.

## ✨ Demonstração Visual

Abaixo algumas telas do projeto:

<p align="center">
  <img src="public/assets/hero.png" alt="Tela Hero" width="700" />
  <img src="public/assets/about.png" alt="Tela Sobre Mim" width="700" />
  <img src="public/assets/foot.png" alt="Rodapé" width="700" />
</p>

## 🚀 Características

- Design responsivo e moderno
- Efeito de partículas interativas com tsParticles
- Animações suaves com Framer Motion
- Integração com GitHub API para exibição automática de projetos
- Tema escuro com gradientes e efeitos de vidro
- Links de contato diretos no rodapé
- Otimizado para SEO
- Totalmente tipado com TypeScript

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Partículas**: tsParticles
- **Ícones**: Lucide React
- **Integração GitHub**: Octokit
- **Formatação**: Prettier
- **Linting**: ESLint

## 📋 Requisitos

- Node.js 18.17.0 ou superior
- npm ou yarn

## 📦 Estrutura do Projeto

```
portfolio/
├── app/                # Código principal da aplicação
│   ├── components/     # Componentes reutilizáveis e seções
│   ├── layout.tsx      # Layout global da aplicação
│   └── page.tsx        # Página principal
├── public/             # Imagens e arquivos
│   └── assets/         # Prints e imagens customizadas
├── styles/             # Estilos globais (Tailwind)
│   └── globals.css
├── types/              # Tipos TypeScript customizados
│   └── index.d.ts
├── next.config.js      # Configuração do Next.js
├── tailwind.config.ts  # Configuração do Tailwind CSS
├── tsconfig.json       # Configuração do TypeScript
└── package.json        # Dependências e scripts
```

### Descrição dos principais arquivos/pastas

- `app/components/` — Componentes de interface e seções do portfólio
- `app/page.tsx` — Página principal, monta a ordem das seções
- `app/layout.tsx` — Layout global, inclui estilos e provedores
- `public/assets/` — Imagens e prints do projeto
- `styles/globals.css` — Estilos globais customizados
- `types/` — Tipos TypeScript auxiliares
- `next.config.js` — Configuração do Next.js
- `tailwind.config.ts` — Configuração do Tailwind CSS

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/wstvns/portfolio.git
   cd portfolio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de linting
- `npm run format` - Formata os arquivos com Prettier
- `npm run type-check` - Verifica os tipos TypeScript

## 🔧 Configuração

### Configuração do TypeScript

O projeto usa uma configuração TypeScript otimizada para Next.js 14:
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "moduleResolution": "node"
    // ...
  }
}
```

### Personalização

1. **Tema**: Edite `tailwind.config.ts` para personalizar cores e outros valores do tema
2. **Partículas**: Ajuste a configuração em `components/ParticlesBackground.tsx`
3. **Conteúdo**: Atualize os componentes em `app/components/` com suas informações

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Dispositivos móveis (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🎨 Design System

### Cores
- **Primary**: #A855F7 (Roxo)
- **Secondary**: #3B82F6 (Azul)
- **Accent**: #EC4899 (Rosa)
- **Background**: Sistema de cores escuro personalizado
- **Text**: Sistema de cores claro com opacidades variadas

### Tipografia
- **Títulos**: Sistema de fontes sans-serif
- **Corpo**: Sistema de fontes sans-serif
- **Tamanhos**: Escala personalizada via Tailwind

## 🔍 SEO e Performance

- Meta tags otimizadas
- Imagens otimizadas
- Carregamento lazy de componentes
- Código dividido automaticamente
- Pontuação alta no Lighthouse

## 🤝 Contribuindo

Contribuições são bem-vindas!

## 📄 Licença

`MIT`

## 👤 Suporte e Contato


- **GitHub**: [@wstvns](https://github.com/wstvns)
- **LinkedIn**: [Wallisson Stevan](https://linkedin.com/in/wallisson-stevan-985b9375/)
- **Email**: wstevandev@gmail.com

Feito com ❤️ por [W. Stevan](https://www.youtube.com/watch?v=wi8yJdKO1j0). ⬅️ abra para uma surpresa!
