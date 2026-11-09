# Direção visual — GAIA Engenharia

## Referência visual adotada

A captura enviada é a especificação de direção visual para esta nova versão independente. Ela define a identidade principal: institucional de engenharia e construção, predominância de branco e verde profundo, hero fotográfico de obra industrial, navegação horizontal compacta, blocos de prova com estatísticas, seção de portfólio com miniaturas, bloco de contato e rodapé verde-escuro.

A implementação deve preservar o espírito e a hierarquia da referência sem editar a página original. O conteúdo deve ser reorganizado com mais respiro, contraste e legibilidade, mantendo a estrutura das demais seções. A seção **Quem Somos** será a exceção intencional: duas colunas em desktop, com vídeo/imagem vertical 9:16 à esquerda e título/texto à direita; em telas menores, os blocos empilham-se.

## Direção escolhida: Engenharia editorial contemporânea

### Design Movement

Arquitetura editorial contemporânea aplicada a uma marca industrial: fotografia documental, tipografia sans-serif de alto contraste, composição assimétrica com grandes margens e detalhes técnicos discretos.

### Core Principles

1. **Clareza construtiva:** cada bloco comunica uma ideia principal e conduz naturalmente ao próximo.
2. **Precisão com calor:** formas retas, linhas finas e métricas técnicas são equilibradas por imagens com luz natural e textura material.
3. **Respiro institucional:** mais espaço negativo, largura de leitura controlada e alinhamentos consistentes.
4. **Confiança sem excesso:** interações e animações são sutis, rápidas e funcionais; nada compete com a obra ou com os dados.

### Color Philosophy

O branco quente funciona como superfície de projeto e amplia a sensação de organização. O verde floresta remete à estabilidade, ao território e à continuidade da obra; o verde vivo aparece somente em CTAs, indicadores e pequenos acentos, como sinal de progresso. Grafite e cinza mineral sustentam a leitura sem trocar a identidade cromática da referência.

### Layout Paradigm

Composição editorial de faixa longa: navegação compacta, hero em tela ampla, cards que atravessam a transição da primeira seção e conteúdo interno organizado por trilhos assimétricos. A página evita centralizar tudo; textos e métricas usam alinhamento à esquerda, enquanto imagens e superfícies verdes criam contrapesos visuais.

### Signature Elements

- Filetes verdes de 2px e micro-rótulos em caixa alta com espaçamento ampliado.
- Cards de prova com cantos discretamente arredondados, sombra leve e uma faixa de destaque verde.
- Molduras de imagem com recorte vertical e pequenas etiquetas técnicas, como se fossem pranchas de obra.

### Interaction Philosophy

Links de navegação fazem scroll suave para as seções. CTAs têm estados de hover com deslocamento mínimo, mudança de fundo e ícone que avança. Cards do portfólio elevam-se poucos pixels e revelam uma borda verde. A interação deve comunicar controle e acabamento, não gamificação.

### Animation

Entradas em fade e deslocamento vertical de 16px, com atraso escalonado de 60ms entre elementos relacionados. Duração entre 180ms e 280ms, usando uma curva de saída firme. O hero recebe apenas um leve movimento de escala no carregamento; o restante da página permanece estável. Respeitar `prefers-reduced-motion` e remover movimentos não essenciais.

### Typography System

Usar **Manrope** para títulos, números e navegação, com peso 700–800; usar **DM Sans** para corpo, legendas e campos, com peso 400–600. Micro-rótulos devem ser pequenos, em caixa alta e com tracking amplo. H1 amplo e compacto; H2 com presença, mas sempre acompanhado de uma linha de contexto; parágrafos com largura máxima confortável.

### Brand Essence

**Posicionamento:** engenharia e construção industrial para empresas que precisam transformar complexidade em obra confiável, com método, escala e proximidade.

**Personalidade:** precisa, sólida, humana.

### Brand Voice

Headlines são diretas e afirmativas. CTAs são verbos claros, sem urgência artificial. Microcopy explica a próxima ação e reforça o método.

- “Obras que sustentam o próximo passo.”
- “Veja como transformamos projeto em operação.”

### Wordmark & Logo

O símbolo usa três vigas angulares interligadas, sugerindo cobertura, fundação e uma curva abstrata de continuidade. O wordmark aparece em caixa alta, com espaçamento controlado e uma linha menor “ENGENHARIA” para reforçar a assinatura técnica; o símbolo gerado é utilizado no header e como favicon.

### Signature Brand Color

**Verde GAIA — `#1D5C3B`**: um verde floresta sóbrio e proprietário, aplicado em superfícies de confiança, rodapé, destaques e ações principais.

## Escopo de conteúdo

A nova página apresenta: navegação, hero industrial, faixa de números e capacidades, seção Quem Somos com mídia vertical, métricas, clientes, faixa de chamada para portfólio, galeria de projetos, contato e rodapé. Imagens geradas são assets novos desta versão; nenhum asset da página original é sobrescrito.

## Style Decisions

- Verde vivo restrito a CTAs, números-chave, ícones e pequenos detalhes; a autoridade dos títulos usa principalmente grafite e Verde GAIA `#1D5C3B`.
- Portfólio com imagens documentais visualmente distintas, evitando repetir o hero e a mesma cena de obra em vários cards.
- Filetes, micro-rótulos, códigos de registro e enquadramentos técnicos distribuídos pelas seções para que a identidade pareça um sistema contínuo.
- Seções intermediárias mantêm maior tensão editorial por meio de marcadores laterais e alinhamentos menos centralizados, sem alterar a calma institucional da referência.
- A faixa de clientes recebe uma linha de base e tipografia mais intencional para funcionar como prova de relacionamento, sem inventar depoimentos ou avaliações.
