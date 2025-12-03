# Seven Pay - Landing Page

Landing page moderna e de alta conversão para **Seven Pay**, empresa de soluções de pagamento digital.

Desenvolvida em **HTML puro, CSS3 e JavaScript vanilla** - sem frameworks, sem dependências, pronta para deploy.

## 🚀 Demo

[Ver Demo ao Vivo](#) <!-- Adicione o link quando fizer deploy -->

## 📁 Estrutura

```
7seven/
├── html/
│   ├── index.html       # Página principal
│   ├── css/
│   │   └── styles.css   # Estilos
│   ├── js/
│   │   └── script.js    # Funcionalidades
│   └── img/
│       └── logo.png     # Logo Seven Pay
└── README.md            # Este arquivo
```

## 🚀 Início Rápido

### Opção 1: Abrir Diretamente
1. Vá para a pasta `html/`
2. Clique duas vezes em `index.html`
3. Pronto! ✅

### Opção 2: Servidor Local (Recomendado)

**Com Node.js:**
```bash
cd html
npx http-server -p 8080
# Acesse: http://localhost:8080
```

**Com PHP:**
```bash
cd html
php -S localhost:8080
# Acesse: http://localhost:8080
```

**Com Live Server (VS Code):**
1. Instale extensão "Live Server"
2. Clique direito em `html/index.html`
3. "Open with Live Server"

## 🎨 Características

- ✅ HTML5 puro, CSS3 e JavaScript vanilla
- ✅ Sem dependências de frameworks
- ✅ Design responsivo mobile-first
- ✅ Paleta Seven Pay (Preto, Branco, Azul #0066FF)
- ✅ Animações suaves com AOS
- ✅ Formulário com validação
- ✅ Integração com webhook n8n
- ✅ SEO otimizado
- ✅ Tamanho: ~50KB (3 arquivos)

## 📋 Seções da Landing Page

1. **Hero** - Apresentação principal com CTAs
2. **Problema** - 4 dores dos clientes
3. **Solução** - 2 serviços (Checkout Transparente R$ 1.000 + Gateway)
4. **Como Funciona** - 3 passos do processo
5. **Benefícios** - 6 diferenciais da Seven Pay
6. **Preços** - Tabela comparativa e cards
7. **FAQ** - 8 perguntas com acordeão interativo
8. **CTA** - Formulário de contato integrado
9. **Footer** - Políticas PLX e informações

## 🌐 Deploy Rápido

### Netlify (Mais Fácil)
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta `html/`
3. Pronto! Site no ar

### Vercel
```bash
cd html
npx vercel
```

### GitHub Pages
1. Crie repositório no GitHub
2. Upload dos arquivos da pasta `html/`
3. Settings > Pages > Ativar

### FTP (Hospedagem Tradicional)
1. Conecte via FTP
2. Upload dos arquivos da pasta `html/`
3. Configure `index.html` como página inicial

## 🔧 Personalização

### Webhook do Formulário

Edite em `html/js/script.js` (linha ~70):

```javascript
const response = await fetch('SUA_URL_WEBHOOK_AQUI', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});
```

### Cores

Edite em `html/css/styles.css`:

```css
:root {
    --color-primary: #000000;      /* Preto */
    --color-secondary: #FFFFFF;    /* Branco */
    --color-accent: #0066FF;       /* Azul */
}
```

### Conteúdo

Edite diretamente em `html/index.html`

## 📊 Analytics (Opcional)

### Google Analytics

Adicione antes do `</head>` em `html/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel

Adicione antes do `</head>` em `html/index.html`:

```html
<script>
  !function(f,b,e,v,n,t,s){...}
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 📚 Documentação Completa

Para documentação técnica detalhada, consulte `html/README.md`

## 🔒 Informações da Empresa

**Seven Pay Produtos e Serviços Digitais LTDA**
- **CNPJ:** 55.633.162/0001-59
- **Email:** contato@7sevenpay.com.br
- **Site:** Em construção

## 📄 Licença

© 2025 Seven Pay. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para transformar pagamentos digitais**
