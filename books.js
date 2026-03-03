# Seja Forte & Corajoso — Biblioteca Espiritual

## Como publicar no Vercel (passo a passo)

### 1. Criar conta no GitHub
- Acesse github.com e crie uma conta gratuita

### 2. Criar repositório
- Clique em "New repository"
- Nome: `biblioteca-sfec`
- Deixe público
- Clique em "Create repository"

### 3. Subir os arquivos
- Dentro do repositório, clique em "uploading an existing file"
- Arraste toda a pasta do projeto
- Clique em "Commit changes"

### 4. Publicar no Vercel
- Acesse vercel.com e crie conta gratuita (pode entrar com o GitHub)
- Clique em "Add New Project"
- Selecione o repositório `biblioteca-sfec`
- Clique em "Deploy"
- Em ~2 minutos o site estará no ar com um link como: `biblioteca-sfec.vercel.app`

### 5. Domínio próprio (opcional)
- No painel do Vercel, vá em "Domains"
- Adicione seu domínio (ex: sejafortecorajoso.com.br)
- Siga as instruções para apontar o DNS

---

## Como adicionar novas meditações

Abra o arquivo `src/books.js` e adicione um novo objeto ao array `books`:

```js
{
  id: 4,                          // número sequencial
  title: "Título da Meditação",
  subtitle: "Tema original",
  verse: "João 3,16",
  verseText: "Trecho curto do versículo principal.",
  category: "Amor",               // aparece na capa
  color: "#1e1a3a",               // cor de fundo da capa
  content: [
    {
      type: "verse",
      text: '"Texto completo do versículo..."',
      ref: "João 3,16"
    },
    {
      type: "text",
      text: "Parágrafo da meditação..."
    },
    {
      type: "prayer",
      title: "Oração",
      text: "Texto da oração final..."
    }
  ]
}
```

### Tipos de bloco disponíveis:
- `type: "verse"` → versículo destacado com barra dourada à esquerda
- `type: "text"`  → parágrafo normal
- `type: "prayer"` → bloco de oração com fundo dourado suave

### Cores sugeridas para as capas:
| Cor             | Valor     |
|-----------------|-----------|
| Azul profundo   | `#1a3a5c` |
| Vinho           | `#3a1a1a` |
| Verde escuro    | `#1a2e1a` |
| Marrom          | `#2c1a0e` |
| Roxo escuro     | `#1e1a3a` |
| Cinza ardósia   | `#1a1f2e` |

---

Após qualquer edição, basta salvar e subir o arquivo no GitHub — o Vercel publica automaticamente em segundos.
