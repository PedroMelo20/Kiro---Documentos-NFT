# Kurio — Marketplace de NFTs (versão HTML, CSS e JavaScript puros)

Prezados, entendo que o desafio era com outras linguagens, mas como não domino e não achei justo no uso puro
da IA para todas as tecnologias, decidi fazer algo, junto da IA mas de um jeito que eu possa entender o código e poder explicar o que foi
realizado.

Agradeço desde já pela compreensão e entenderei caso não avance para próxima fase.


Interface do marketplace de NFTs "Kurio", feita a partir do layout do Figma do desafio.
Esta versão usa **apenas HTML, CSS e JavaScript**, sem frameworks e sem etapa de build.

> **Aviso importante:** o enunciado do desafio exige React, TypeScript, TanStack Router,
> TanStack Query, Axios e MSW. Esta entrega **não usa essa stack**. As limitações estão
> listadas com franqueza na seção "O que não foi feito".

## Como executar

Não há dependências para instalar.

Opcional, para servir por HTTP local (precisa de Python instalado):

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

Não há variáveis de ambiente, credenciais fictícias nem cenários de mock, porque não existe
login nem API nesta versão.

## Estrutura

```
nft-marketplace-basico/
├── index.html    # estrutura da página
├── style.css     # estilos e cores do Figma
├── script.js     # dados fictícios, filtros, ordenação e paginação
├── img/          # imagens dos NFTs recortadas do PNG do Figma
└── icons/        # ícones SVG fornecidos no desafio
```

## O que foi feito

- Página inicial com cabeçalho, seção de destaque (hero), catálogo, banner e rodapé.
- Catálogo com 9 NFTs fictícios, renderizados por JavaScript a partir de uma lista de dados.
- **Busca** por nome, **filtro** por coleção, **faixa de preço** (preço máximo) e **ordenação**
  (recentes, menor preço, maior preço).
- **Paginação** (6 itens por página), com estado vazio quando nenhum NFT corresponde aos filtros.
- Layout **responsivo** (desktop, tablet e celular) e foco visível para navegação por teclado.

## Paleta de cores (extraída do Figma)

| Uso                        | Cor       |
|----------------------------|-----------|
| Fundo da página            | `#140d0a` |
| Painéis e cards            | `#241612` |
| Bordas                     | `#3f2319` |
| Faixas de destaque         | `#38220f` |
| Cor da marca (botões)      | `#d28a4c` |
| Texto claro                | `#fdf2da` |
| Texto secundário           | `#cfb28c` |

Fonte: JetBrains Mono (Google Fonts), com fallback para monoespaçada do sistema.
A fonte exata do Figma não foi confirmada, então esta é uma aproximação.

## Decisões e desvios do Figma

- As imagens dos NFTs foram recortadas do PNG de visão geral do Figma. Os nomes e preços dos
  NFTs são aproximados a partir desse PNG e não vêm de uma fonte de dados oficial.
- As coleções de cada NFT (Arte digital, Fotografia, Música, Arte 3D) foram atribuídas por mim
  apenas para permitir o filtro, e não existem no Figma desse jeito.
- Foi implementada só a página inicial. As demais telas do Figma (detalhe do NFT, carrinho,
  checkout, login, cadastro e perfil) não foram construídas.

## O que não foi feito

- Stack obrigatória: React, TypeScript, TanStack Router, TanStack Query, Axios e MSW.
- Filtros e paginação na URL (o estado vive só na memória da página).
- API simulada, autenticação, sessão, carrinho, favoritos, checkout e pedidos.
- Tempo real (Socket.IO).
- Testes E2E, relatórios de performance (Lighthouse) e `ARCHITECTURE.md`.
- Deploy público e repositório publicado.
