# Documentação Técnica do Portfolio

## Visão Geral da Arquitetura

Construi esse projeto usando Next.js 14 com App Router, seguindo as melhores práticas de desenvolvimento React e TypeScript que a internet pôde me ensinar. A arquitetura é organizada em componentes modulares, com foco em performance e manutenibilidade.

## Componentes Principais

### 1. ParticlesBackground.tsx
```typescript
// Componente que gerencia o efeito de partículas interativo
- Utiliza tsParticles para renderização eficiente
- Configuração responsiva (móvel/desktop)
- Otimizado para performance com requestAnimationFrame
- Interativo com eventos de mouse
```

Características principais:
- Detecta automaticamente dispositivo móvel
- Ajuste dinâmico de número de partículas
- Efeito de colisão e repulsão
- Integração com o tema via Tailwind

### 2. Hero.tsx
```typescript
// Seção principal da landing page
- Animações com Framer Motion
- Tipografia responsiva
- Gradientes e efeitos visuais
```

Recursos:
- Animações de entrada suaves
- Integração com scroll
- Chamadas para ação (CTAs)
- Efeitos de parallax

### 3. About.tsx
```typescript
// Seção sobre com grid de habilidades
- Layout responsivo com CSS Grid
- Animações de cards
- Backdrop blur effect
```

Funcionalidades:
- Grid adaptativo
- Animações em sequência
- Efeitos de hover
- Integração com tema escuro

### 4. Experience.tsx
```typescript
// Timeline de experiência profissional
- Layout alternado
- Animações de scroll
- Sistema de cards informativos
```

Características:
- Timeline visual interativa
- Animações baseadas em viewport
- Cards com informações detalhadas
- Indicadores visuais de tempo

### 5. Projects.tsx
```typescript
// Showcase de projetos do GitHub
- Integração com GitHub API via Octokit (retirei por hora, mas penso em colocar para deixar configurável com projetos privados e etc.)
- Cards de projeto interativos
- Sistema de filtragem (Ainda não tão funcional, trabalhando nisso)
```

Recursos:
- Fetch automático de repositórios
- Ordenação por relevância
- Display de estatísticas
- Links para código e demo

### 6. Contact.tsx
```typescript
// Formulário de contato e links sociais
- Validação de formulário
- Animações de feedback
- Links sociais interativos
```

Funcionalidades:
- Validação em tempo real
- Feedback visual de estados
- Integração com email
- Links sociais animados

## Sistema de Estilização

### Tailwind CSS
O projeto utiliza Tailwind CSS com uma configuração personalizada:

```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#A855F7',
        secondary: '#3B82F6',
        accent: '#EC4899',
        background: '#000000',
        foreground: '#FFFFFF'
      },
      // ...
    }
  }
}
```

### Convenções de CSS
- Uso de utility classes do Tailwind
- BEM para classes customizadas
- Sistema de cores com opacidades
- Breakpoints responsivos padronizados

## Animações

### Framer Motion
Configurações padrão de animação:

```typescript
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}
```

## Performance

### Otimizações Implementadas
1. **Lazy Loading**
   - Imagens otimizadas com next/image
   - Componentes carregados sob demanda
   - Prefetch de rotas principais

2. **Code Splitting**
   - Chunks otimizados
   - Dynamic imports quando necessário
   - Route-based code splitting

3. **SEO**
   - Meta tags dinâmicas
   - Open Graph tags
   - Sitemap automático
   - Robots.txt configurado

## TypeScript

### Tipos Principais
```typescript
// types/index.d.ts
interface Repository {
  name: string;
  description: string;
  html_url: string;
  // ...
}

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

// ...
```

## Integração com GitHub

### Configuração do Octokit
```typescript
const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN
});
```

### Fetch de Repositórios
```typescript
const fetchRepositories = async () => {
  const response = await octokit.repos.listForUser({
    username: 'wstvns',
    sort: 'updated',
    per_page: 100
  });
  // Processamento de dados
}
```

## Responsividade

### Breakpoints
```typescript
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}
```

### Media Queries
- Mobile First
- Adaptações progressivas
- Layouts flexíveis
- Imagens responsivas

## Segurança

### Medidas Implementadas
1. Headers de segurança
2. CSP configurado
3. CORS configurado
4. Sanitização de inputs
5. Rate limiting

## Testes

### Estrutura de Testes
```typescript
// __tests__/components/Hero.test.tsx
describe('Hero Component', () => {
  it('renders correctly', () => {
    // ...
  });
  
  it('animates on mount', () => {
    // ...
  });
});
```

## Deploy

### Configuração de Produção
1. Otimizações de build
2. Compressão de assets
3. Caching headers
4. Monitoramento de erros

## Manutenção

### Práticas Recomendadas
1. Atualizações regulares de dependências
2. Monitoramento de performance
3. Backup de dados
4. Logs e analytics

## Próximos Passos

### Melhorias Planejadas
1. Implementação de testes E2E
2. PWA features
3. Internacionalização
4. Modo claro/escuro // isso aqui vai ser dificil de implementar por conta do esquema de cores.
5. Blog integration 
6. Menu interativo no top
7. Seta para subir ao topo - feito ✅
