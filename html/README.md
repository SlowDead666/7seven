# Seven Pay - Landing Page HTML

Landing page moderna e de alta conversão em **HTML puro, CSS e JavaScript vanilla**.

## 📁 Estrutura de Arquivos

```
html/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos completos
├── js/
│   └── script.js       # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador

1. Navegue até a pasta `html`
2. Clique duas vezes em `index.html`
3. A página abrirá no seu navegador padrão

### Opção 2: Servidor Local (Recomendado)

#### Usando Python:
```bash
# Python 3
cd html
python -m http.server 8000

# Acesse: http://localhost:8000
```

#### Usando Node.js (http-server):
```bash
npm install -g http-server
cd html
http-server -p 8000

# Acesse: http://localhost:8000
```

#### Usando PHP:
```bash
cd html
php -S localhost:8000

# Acesse: http://localhost:8000
```

#### Usando Live Server (VS Code):
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 🎨 Características

### Design
- ✅ Mobile-first responsivo
- ✅ Paleta de cores Seven Pay (Preto, Branco, Azul #0066FF)
- ✅ Animações suaves com AOS
- ✅ Gradientes e efeitos visuais modernos
- ✅ Tipografia Inter (Google Fonts)

### Funcionalidades
- ✅ FAQ com acordeão interativo
- ✅ Formulário com validação
- ✅ Máscara de telefone automática
- ✅ Integração com webhook n8n
- ✅ Smooth scroll
- ✅ Animações on scroll
- ✅ Feedback visual de envio

### Seções
1. **Hero** - Apresentação principal com CTAs
2. **Problema** - 4 dores dos clientes
3. **Solução** - 2 serviços (Checkout e Gateway)
4. **Como Funciona** - 3 passos
5. **Benefícios** - 6 diferenciais
6. **Preços** - Tabela comparativa
7. **FAQ** - 8 perguntas frequentes
8. **CTA** - Formulário de contato
9. **Footer** - Políticas e informações

## 📝 Personalização

### Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --color-primary: #000000;      /* Preto */
    --color-secondary: #FFFFFF;    /* Branco */
    --color-accent: #0066FF;       /* Azul */
    --color-dark-bg: #0A0A0A;      /* Background escuro */
    --color-gray-dark: #1A1A1A;    /* Cinza escuro */
    --color-gray-medium: #2A2A2A;  /* Cinza médio */
}
```

### Webhook

O formulário envia para o webhook n8n. Para alterar, edite em `js/script.js`:

```javascript
const response = await fetch('SEU_WEBHOOK_AQUI', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});
```

### Conteúdo

Todo o conteúdo está em `index.html`. Edite diretamente os textos, títulos e descrições.

## 🔧 Dependências Externas

### Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### AOS (Animate On Scroll)
```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

## 📱 Responsividade

Breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🌐 Deploy

### Netlify
1. Arraste a pasta `html` para [Netlify Drop](https://app.netlify.com/drop)
2. Pronto! Seu site está no ar

### Vercel
```bash
npm i -g vercel
cd html
vercel
```

### GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos da pasta `html`
3. Vá em Settings > Pages
4. Selecione a branch e pasta
5. Salve e aguarde o deploy

### Hospedagem Tradicional
1. Faça upload via FTP dos arquivos da pasta `html`
2. Aponte para `index.html` como página inicial
3. Pronto!

## 🔒 Segurança

- ✅ Validação de formulário no frontend
- ✅ Sanitização de inputs
- ✅ HTTPS recomendado para produção
- ✅ CSP headers recomendados

## ⚡ Performance

### Otimizações Implementadas:
- ✅ CSS minificável
- ✅ JavaScript otimizado
- ✅ Lazy loading preparado
- ✅ Animações com GPU
- ✅ Debounce em eventos

### Melhorias Sugeridas:
- Minificar CSS e JS para produção
- Comprimir imagens (quando adicionar)
- Implementar service worker para PWA
- Adicionar cache headers

## 📊 Analytics (Opcional)

### Google Analytics

Adicione antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel

Adicione antes do `</head>`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🐛 Troubleshooting

### Formulário não envia
- Verifique a URL do webhook
- Abra o console do navegador (F12)
- Verifique se há erros de CORS
- Teste o webhook com Postman

### Animações não funcionam
- Verifique se o AOS está carregando
- Abra o console e procure por erros
- Verifique a conexão com CDN

### Estilos não aplicam
- Verifique o caminho do CSS
- Limpe o cache do navegador (Ctrl+Shift+R)
- Verifique se há erros no CSS

## 📞 Suporte

- **Email:** contato@7sevenpay.com.br
- **CNPJ:** 55.633.162/0001-59

## 📄 Licença

© 2025 Seven Pay. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para transformar pagamentos digitais**
