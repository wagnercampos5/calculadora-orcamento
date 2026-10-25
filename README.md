# ❄️ ClimaTech — Calculadora de Climatização & Orçamento

> Simulador interativo de carga térmica (BTUs) e orçamentação instantânea para serviços de instalação de ar-condicionado com integração direta ao WhatsApp.

<p align="left">
  <a href="https://wagnercampos5.github.io/calculadora-orcamento/">
    <img src="https://img.shields.io/badge/Acessar_Aplicação-0284c7?style=for-the-badge&logo=githubpages&logoColor=white" alt="Deploy no GitHub Pages">
  </a>
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status Concluído">
  <img src="https://img.shields.io/badge/Tecnologias-HTML5_|_CSS3_|_JavaScript-blue?style=for-the-badge" alt="Tecnologias">
</p>

🔗 **Acesse a ferramenta online:** [https://wagnercampos5.github.io/calculadora-orcamento/](https://wagnercampos5.github.io/calculadora-orcamento/)

---

Simulador web interativo para dimensionamento de carga térmica (BTUs) e estimativa comercial de serviços de climatização e instalação de ar-condicionado. Desenvolvido para modernizar o processo de captação de clientes e formalização de orçamentos para técnicos e empresas de refrigeração. Projeto desenvolvido para fins de estudo, e que passará por melhorias e implementações futuramente. 

---

## 📌 Visão de Negócio

No setor de instalação e manutenção de ar-condicionado, a agilidade no primeiro atendimento e a clareza técnica são fatores decisivos para fechar serviços com boa margem de lucro. 

A **ClimaTech** elimina orçamentos informais ou cálculos manuais em papel, oferecendo:
- **Transparência para o cliente:** Demonstra exatamente o motivo da capacidade sugerida e como cada custo foi composto.
- **Autoridade para o profissional:** Apresenta uma interface limpa, rápida e responsiva.
- **Redução do ciclo de venda:** Envia o orçamento fechado diretamente para o WhatsApp comercial com um clique.

---

## 🚀 Funcionalidades Principais

### 1. Dimensionamento Térmico de Precisão
- **Metragem Útil:** Cálculo em metros quadrados ($m^2$).
- **Fator Solar:**
  - Sol da manhã: taxa base de $600\text{ BTU/m}^2$.
  - Sol da tarde ou dia todo: taxa base de $800\text{ BTU/m}^2$ devido à inércia térmica da alvenaria.
- **Carga de Ocupantes:** Adição de $600\text{ BTUs}$ por pessoa excedente além do primeiro ocupante.
- **Adequação Comercial:** Arredondamento automático e seguro para os padrões de fabricação do mercado (9.000, 12.000, 18.000, 24.000 e 30.000 BTUs), prevenindo subdimensionamento em dias de calor extremo.

### 2. Composição Financeira Automatizada
- **Tabela Progressiva de Mão de Obra:** Valores calibrados de acordo com a potência da máquina.
- **Diferencial de Tecnologia:** Taxa técnica para aparelhos Split Hi-Wall Inverter (exigência de procedimentos de vácuo estrito e flangeamento de alta precisão).
- **Metragem Extra de Cobre:** Cálculo automático por metro excedente além do kit padrão de instalação (R$ 90/metro).
- **Serviços Opcionais Dinâmicos:** Desinstalação de equipamento antigo, suporte reforçado para condensadora externa e infraestrutura de ponto elétrico 220V dedicado.

### 3. Integração Comercial (WhatsApp)
- Montagem instantânea de mensagem em tópicos limpos contendo todos os dados técnicos e financeiros calculados.
- Codificação de segurança via `encodeURIComponent` compatível com a API de mensagens do WhatsApp (`wa.me`).

---

## 🛠️ Tecnologias e Padrões de Código

- **HTML5 Semântico:** Agrupamento por `<fieldset>` e `<legend>`, atributos `aria-live="polite"` para acessibilidade assistiva e formulários estruturados.
- **CSS3 Moderno:** Paleta orientada pelo padrão de cores de refrigeração via variáveis `:root`, design responsivo, suporte a interações e animação `@keyframes` para o surgimento do relatório.
- **Vanilla JavaScript (ES6+):**
  - Manipulação de DOM sem dependências externas.
  - Formatação oficial de moeda brasileira com a API nativa `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.
  - Tratamento de exceções e validação defensiva de dados numéricos (`isNaN`, `parseFloat`, `parseInt`).
  - Utilização de `querySelectorAll(':checked')` para captura limpa de múltiplos opcionais.

---

## 📁 Estrutura de Arquivos

```text
calculadora-orcamento/
├── index.html       # Estrutura e semântica do formulário e painel de resultados
├── style.css        # Variáveis visuais, tipografia, responsividade e animações
├── script.js        # Lógica de carga térmica, composição de preços e integração WhatsApp
└── README.md        # Documentação técnica e comercial completa do projeto
```

---

## 💻 Como Rodar o Projeto

1. Clone o repositório na sua máquina:
   ```bash
   git clone https://github.com/wagnercampos5/calculadora-orcamento.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd calculadora-orcamento
   ```

3. Abra com o navegador:
   - Dê um duplo clique no arquivo `index.html`

---

## 👨‍💻 Autor

Desenvolvido por **Wagner Campos**, para fins de estudo.