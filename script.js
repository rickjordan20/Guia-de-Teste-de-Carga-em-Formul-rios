// ==========================================================
// DADOS E ORIENTAÇÕES DE CADA FUNCIONALIDADE
// ==========================================================
//
// IMPORTANTE:
// As informações técnicas do teste NÃO são preenchidas
// automaticamente.
//
// O aluno deverá descobrir:
// - Método HTTP
// - Request URL
// - Status HTTP
// - Content-Type
// - Campos do Payload
// - Valores de teste
// - Necessidade ou não de Valor único
// - Quantidade de VUs
// - Execuções por VU
//
// Cadastro, Login e Contato servem apenas para contextualizar
// a atividade e orientar a investigação no Network.
// ==========================================================

const DATA = {

  cadastro: {

    icon: "👤",

    name: "Cadastro",

    objective:
      "Você vai testar a operação que cria um novo usuário.",

    functional:
      "Verifica se um novo usuário consegue ser cadastrado corretamente.",

    intro:
      "No cadastro, queremos localizar a requisição enviada quando o usuário confirma a criação da conta.",

    open:
      "Abra a página de cadastro do TechEduca ou da aplicação indicada.",

    action:
      "Preencha o formulário com dados fictícios e realize um cadastro válido. Depois, localize no Network a requisição responsável pela operação.",

    // Nenhuma informação técnica é entregue automaticamente.
    method: "",

    url: "",

    status: "",

    contentType: "",

    // Uma única linha vazia.
    // O aluno deverá montar o Payload.
    payload: [
      ["", "", false]
    ],

    payloadText:
      "Abra o <strong>Payload</strong> da requisição encontrada no Network. Observe quais campos e valores foram enviados. Depois, use essas informações como referência para montar o Payload do seu teste.",

    specific:
      "<b>💡 Dica:</b> você pode usar como referência os valores observados anteriormente e modificá-los para utilizar dados fictícios de teste. Porém, os <strong>nomes dos campos</strong> devem corresponder ao que a aplicação realmente espera.",

    statusTip:
      "<b>Descubra o sucesso:</b> realize primeiro um cadastro válido manualmente. Depois, consulte em <strong>Network → Headers</strong> o <code>Status Code</code> retornado pela aplicação.",

    uniqueHelp: `
      <b>💡 Quando usar “Valor único”?</b><br>
      Marque essa opção quando determinado campo precisar receber
      um valor diferente em cada execução do teste.
      <br><br>
      Pense no comportamento do cadastro:
      <strong>existe algum dado que a aplicação não permite repetir?</strong>
      Se existir, pode ser necessário marcar
      <strong>Valor único</strong> nesse campo.
      <br><br>
      Não marque todos os campos automaticamente.
      Use essa opção somente quando fizer sentido para o funcionamento
      da aplicação.
    `
  },


  login: {

    icon: "🔐",

    name: "Login",

    objective:
      "Você vai testar a operação que autentica um usuário existente.",

    functional:
      "Verifica se um usuário existente consegue entrar utilizando credenciais válidas.",

    intro:
      "No login, queremos localizar a requisição enviada quando o usuário tenta entrar no sistema.",

    open:
      "Abra a página de login do TechEduca ou da aplicação indicada.",

    action:
      "Realize um login válido utilizando uma conta de teste autorizada. Depois, localize no Network a requisição responsável pela autenticação.",

    method: "",

    url: "",

    status: "",

    contentType: "",

    payload: [
      ["", "", false]
    ],

    payloadText:
      "Abra o <strong>Payload</strong> da requisição encontrada no Network. Observe quais campos e valores foram enviados durante o login e utilize essas informações como referência para montar o Payload do teste.",

    specific:
      "<b>💡 Dica:</b> os valores podem ser modificados para o teste, mas utilize somente <strong>credenciais de contas de teste válidas e autorizadas</strong>. Não utilize sua senha pessoal.",

    statusTip:
      "<b>Descubra o sucesso:</b> faça primeiro um login válido e observe no Network qual <code>Status Code</code> foi devolvido pelo servidor. Uma tentativa inválida pode apresentar um status diferente e não deve ser usada como referência de sucesso.",

    uniqueHelp: `
      <b>💡 Quando usar “Valor único”?</b><br>
      Marque somente quando aquele campo realmente precisar receber
      um valor diferente em cada execução.
      <br><br>
      No login, pense antes de marcar:
      <strong>se esse valor mudar automaticamente, a conta continuará
      existindo e poderá ser autenticada?</strong>
      <br><br>
      Se a resposta for não, provavelmente esse campo não deve
      utilizar Valor único.
    `
  },


  contato: {

    icon: "✉️",

    name: "Contato",

    objective:
      "Você vai testar a operação que envia o formulário de contato.",

    functional:
      "Verifica se uma mensagem válida consegue ser enviada corretamente.",

    intro:
      "No contato, queremos localizar a requisição enviada quando o formulário é submetido.",

    open:
      "Abra a página que contém o formulário de contato da aplicação indicada.",

    action:
      "Preencha o formulário utilizando dados fictícios ou autorizados, envie uma mensagem válida e localize a requisição correspondente no Network.",

    method: "",

    url: "",

    status: "",

    contentType: "",

    payload: [
      ["", "", false]
    ],

    payloadText:
      "Abra o <strong>Payload</strong> da requisição encontrada no Network. Identifique quais campos foram enviados e utilize essas informações para montar o Payload do teste.",

    specific:
      "<b>💡 Dica:</b> não presuma quais campos, método, endpoint ou status são utilizados. Utilize as informações encontradas na requisição real da aplicação.",

    statusTip:
      "<b>Descubra o sucesso:</b> envie uma mensagem válida manualmente e observe no Network o <code>Status Code</code> devolvido pelo servidor.",

    uniqueHelp: `
      <b>💡 Quando usar “Valor único”?</b><br>
      Marque somente quando determinado campo realmente precisar
      receber um valor diferente em cada execução.
      <br><br>
      Não marque essa opção apenas porque o teste possui vários VUs.
      Primeiro entenda o que o campo representa e se repetir aquele
      valor pode interferir no teste.
    `
  }

};


// ==========================================================
// ESTADO ATUAL
// ==========================================================

let current = "cadastro";


// ==========================================================
// ATALHO PARA document.getElementById
// ==========================================================

const $ = (id) => document.getElementById(id);


// ==========================================================
// ESCAPAR HTML
// ==========================================================

function esc(value = "") {

  return String(value).replace(
    /[&<>"']/g,
    (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]
  );

}


// ==========================================================
// ESCAPAR VALORES PARA O JAVASCRIPT GERADO
// ==========================================================

function jsEsc(value = "") {

  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/\r?\n/g, "\\n");

}


// ==========================================================
// ADICIONAR CAMPO AO PAYLOAD
// ==========================================================

function addField([
  name = "",
  value = "",
  unique = false
] = []) {

  const row = document.createElement("div");

  row.className = "field-row";


  row.innerHTML = `

    <label>

      <span>Nome do campo</span>

      <input
        class="fname"
        type="text"
        placeholder="Ex.: nome-do-campo"
        value="${esc(name)}"
        autocomplete="off"
      >

    </label>


    <label>

      <span>Valor de teste</span>

      <input
        class="fvalue"
        type="text"
        placeholder="Ex.: valor utilizado no teste"
        value="${esc(value)}"
        autocomplete="off"
      >

    </label>


    <label
      class="unique"
      title="Marque somente quando este campo precisar receber um valor diferente em cada execução."
    >

      <input
        class="funique"
        type="checkbox"
        ${unique ? "checked" : ""}
      >

      <span class="unique-text">Valor único</span>

    </label>


    <button
      class="remove"
      type="button"
      title="Remover este campo"
      aria-label="Remover este campo"
    >
      Remover campo
    </button>

  `;


  // --------------------------------------------------------
  // REMOVER CAMPO
  // --------------------------------------------------------

  row.querySelector(".remove").onclick = () => {

    // Mantém pelo menos uma linha disponível.
    if ($("fields").children.length > 1) {

      row.remove();

    } else {

      // Se for a única linha, apenas limpa.
      row.querySelector(".fname").value = "";
      row.querySelector(".fvalue").value = "";
      row.querySelector(".funique").checked = false;

    }

    update();

  };


  // --------------------------------------------------------
  // ATUALIZAR RESUMO AO EDITAR
  // --------------------------------------------------------

  row.querySelectorAll("input").forEach((input) => {

    input.addEventListener("input", update);

    input.addEventListener("change", update);

  });


  $("fields").appendChild(row);

}


// ==========================================================
// LER CAMPOS DO PAYLOAD
// ==========================================================

function fields() {

  return [
    ...document.querySelectorAll(".field-row")
  ]

    .map((row) => ({

      name:
        row.querySelector(".fname").value.trim(),

      value:
        row.querySelector(".fvalue").value,

      unique:
        row.querySelector(".funique").checked

    }))

    // Só considera linhas que tenham nome de campo.
    .filter((field) => field.name);

}


// ==========================================================
// MOSTRAR EXPLICAÇÃO DE "VALOR ÚNICO"
// ==========================================================

function showUniqueHelp() {

  const data = DATA[current];

  let helpBox = $("uniqueHelpBox");


  // Cria automaticamente a caixa caso ela ainda não exista.
  if (!helpBox) {

    helpBox = document.createElement("div");

    helpBox.id = "uniqueHelpBox";

    helpBox.className = "tip unique-help";


    const fieldsContainer = $("fields");


    fieldsContainer.parentNode.insertBefore(
      helpBox,
      fieldsContainer
    );

  }


  helpBox.innerHTML = data.uniqueHelp;

}


// ==========================================================
// CARREGAR CADASTRO / LOGIN / CONTATO
// ==========================================================

function load(type) {

  current = type;

  const data = DATA[type];


  // --------------------------------------------------------
  // CARD SELECIONADO
  // --------------------------------------------------------

  document
    .querySelectorAll(".choice")
    .forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.type === type
      );

    });


  // --------------------------------------------------------
  // TEXTOS DO MANUAL
  // --------------------------------------------------------

  $("selected").innerHTML = `

    <b>
      ${data.icon}
      Você escolheu: ${data.name}
    </b>

    <br>

    ${data.objective}

  `;


  $("functionalText").textContent =
    data.functional;


  $("discoverIntro").textContent =
    data.intro;


  $("openPage").textContent =
    data.open;


  $("doAction").textContent =
    data.action;


  $("statusTip").innerHTML =
    data.statusTip;


  $("payloadExample").innerHTML =
    data.payloadText;


  $("specificTip").innerHTML =
    data.specific;


  // --------------------------------------------------------
  // LIMPAR TODAS AS RESPOSTAS
  // --------------------------------------------------------
  //
  // Mesmo que futuramente alguém coloque valores dentro de DATA,
  // o formulário continuará iniciando vazio.
  // --------------------------------------------------------

  $("method").value = "";

  $("url").value = "";

  $("status").value = "";

  $("contentType").value = "";

  $("vus").value = "";

  $("iterations").value = "";


  // --------------------------------------------------------
  // PAYLOAD
  // --------------------------------------------------------

  $("fields").innerHTML = "";


  // Sempre começa com uma única linha vazia e desmarcada.
  addField([
    "",
    "",
    false
  ]);


  // Atualiza explicação sobre Valor único.
  showUniqueHelp();


  // --------------------------------------------------------
  // CHECKLIST
  // --------------------------------------------------------

  document
    .querySelectorAll(".confirm")
    .forEach((checkbox) => {

      checkbox.checked = false;

    });


  // --------------------------------------------------------
  // ESCONDER SCRIPT ANTERIOR
  // --------------------------------------------------------

  $("scriptSection")
    .classList
    .add("hidden");


  $("error").textContent = "";


  update();

}


// ==========================================================
// ATUALIZAR RESUMO E CÁLCULO DA CARGA
// ==========================================================

function update() {

  const vus =
    Number($("vus").value) || 0;


  const iterations =
    Number($("iterations").value) || 0;


  const total =
    vus > 0 && iterations > 0
      ? vus * iterations
      : 0;


  const payloadFields =
    fields();


  // --------------------------------------------------------
  // CÁLCULO VISUAL
  // --------------------------------------------------------

  $("mathVus").textContent =
    vus > 0
      ? vus
      : "?";


  $("mathIterations").textContent =
    iterations > 0
      ? iterations
      : "?";


  $("mathTotal").textContent =
    total > 0
      ? total
      : "?";


  if ($("mathTotal").nextSibling) {

    $("mathTotal").nextSibling.textContent =
      total === 1
        ? " requisição esperada"
        : " requisições esperadas";

  }


  // --------------------------------------------------------
  // RESUMO
  // --------------------------------------------------------

  const method =
    $("method").value || "Não selecionado";


  const url =
    $("url").value.trim() || "Não informada";


  const status =
    $("status").value || "?";


  const contentType =
    $("contentType").value || "Não selecionado";


  const carga =

    vus > 0 && iterations > 0

      ? `${vus} VU(s) × ${iterations} execução(ões)`

      : "Não informada";


  const resultadoEsperado =

    total > 0

      ? `${total} requisição(ões) · HTTP ${esc(status)}`

      : `? requisição(ões) · HTTP ${esc(status)}`;


  $("review").innerHTML = `

    <div>

      <small>
        Funcionalidade
      </small>

      <b>
        ${DATA[current].icon}
        ${DATA[current].name}
      </b>

    </div>


    <div>

      <small>
        Método
      </small>

      <b>
        ${esc(method)}
      </b>

    </div>


    <div>

      <small>
        Request URL
      </small>

      <b>
        ${esc(url)}
      </b>

    </div>


    <div>

      <small>
        Content-Type
      </small>

      <b>
        ${esc(contentType)}
      </b>

    </div>


    <div>

      <small>
        Payload
      </small>

      <b>

        ${
          payloadFields.length

            ? payloadFields
                .map((field) => esc(field.name))
                .join(", ")

            : "Não informado"
        }

      </b>

    </div>


    <div>

      <small>
        Carga
      </small>

      <b>
        ${carga}
      </b>

    </div>


    <div>

      <small>
        Resultado esperado
      </small>

      <b>
        ${resultadoEsperado}
      </b>

    </div>

  `;

}


// ==========================================================
// CRIAR LINHAS DO PAYLOAD JSON
// ==========================================================

function payloadLines(payloadFields) {

  return payloadFields

    .map((field) => {


      // ====================================================
      // CAMPO COM VALOR ÚNICO
      // ====================================================

      if (field.unique) {


        // --------------------------------------------------
        // TRATAMENTO ESPECIAL PARA E-MAIL
        // --------------------------------------------------
        //
        // Exemplo:
        //
        // valor informado:
        // teste@example.com
        //
        // valor gerado:
        // teste.${unique}@example.com
        // --------------------------------------------------

        if (/email/i.test(field.name)) {

          let prefix = "teste";

          let domain = "example.com";


          if (field.value.includes("@")) {

            const parts =
              field.value.split("@");


            prefix =
              parts.shift() || "teste";


            domain =
              parts.join("@") || "example.com";

          } else if (field.value.trim()) {

            prefix =
              field.value.trim();

          }


          prefix =
            prefix.replace(
              /[^a-zA-Z0-9._-]/g,
              ""
            ) || "teste";


          domain =
            domain.replace(
              /[^a-zA-Z0-9.-]/g,
              ""
            ) || "example.com";


          return (

            `    ${JSON.stringify(field.name)}: ` +

            `\`${prefix}.\${unique}@${domain}\``

          );

        }


        // --------------------------------------------------
        // OUTROS CAMPOS ÚNICOS
        // --------------------------------------------------

        const baseValue =
          field.value.trim() || field.name;


        return (

          `    ${JSON.stringify(field.name)}: ` +

          `\`${jsEsc(baseValue)}-\${unique}\``

        );

      }


      // ====================================================
      // CAMPO NORMAL
      // ====================================================

      return (

        `    ${JSON.stringify(field.name)}: ` +

        `'${jsEsc(field.value)}'`

      );

    })

    .join(",\n");

}


// ==========================================================
// CRIAR PAYLOAD FORM URL ENCODED
// ==========================================================

function formPayloadLines(payloadFields) {

  return payloadFields

    .map((field) => {


      // Valor único também deve funcionar
      // quando o formulário não utilizar JSON.

      if (field.unique) {


        if (/email/i.test(field.name)) {

          let prefix = "teste";

          let domain = "example.com";


          if (field.value.includes("@")) {

            const parts =
              field.value.split("@");


            prefix =
              parts.shift() || "teste";


            domain =
              parts.join("@") || "example.com";

          } else if (field.value.trim()) {

            prefix =
              field.value.trim();

          }


          prefix =
            prefix.replace(
              /[^a-zA-Z0-9._-]/g,
              ""
            ) || "teste";


          domain =
            domain.replace(
              /[^a-zA-Z0-9.-]/g,
              ""
            ) || "example.com";


          return (

            `    ${JSON.stringify(field.name)}: ` +

            `\`${prefix}.\${unique}@${domain}\``

          );

        }


        const baseValue =
          field.value.trim() || field.name;


        return (

          `    ${JSON.stringify(field.name)}: ` +

          `\`${jsEsc(baseValue)}-\${unique}\``

        );

      }


      return (

        `    ${JSON.stringify(field.name)}: ` +

        `'${jsEsc(field.value)}'`

      );

    })

    .join(",\n");

}


// ==========================================================
// GERAR SCRIPT K6
// ==========================================================

function generate() {

  const method =
    $("method").value;


  const url =
    $("url").value.trim();


  const status =
    Number($("status").value);


  const contentType =
    $("contentType").value;


  const vus =
    Number($("vus").value);


  const iterations =
    Number($("iterations").value);


  const payloadFields =
    fields();


  const confirmed = [

    ...document.querySelectorAll(".confirm")

  ].every(
    (checkbox) => checkbox.checked
  );


  const errors = [];


  // ========================================================
  // VALIDAÇÕES
  // ========================================================


  // Método
  if (!method) {

    errors.push(
      "selecione o Método HTTP encontrado no Network"
    );

  }


  // URL
  if (!/^https?:\/\//i.test(url)) {

    errors.push(
      "informe uma Request URL válida"
    );

  }


  // Status
  if (
    !Number.isInteger(status) ||
    status < 100 ||
    status > 599
  ) {

    errors.push(
      "informe o Status HTTP esperado"
    );

  }


  // VUs
  if (
    !Number.isInteger(vus) ||
    vus < 1
  ) {

    errors.push(
      "informe a quantidade de VUs"
    );

  }


  // Execuções
  if (
    !Number.isInteger(iterations) ||
    iterations < 1
  ) {

    errors.push(
      "informe as execuções por VU"
    );

  }


  // Content-Type
  //
  // Para operações que enviam corpo,
  // o aluno precisa selecionar o formato.
  if (
    ["POST", "PUT", "PATCH"].includes(method) &&
    !contentType
  ) {

    errors.push(
      "selecione o formato dos dados encontrado na requisição"
    );

  }


  // Payload
  if (
    ["POST", "PUT", "PATCH"].includes(method) &&
    !payloadFields.length
  ) {

    errors.push(
      "informe os campos do Payload"
    );

  }


  // Verifica se algum campo possui nome,
  // mas ficou sem valor.
  const fieldsWithoutValue =
    payloadFields.filter(
      (field) =>
        field.value.trim() === ""
    );


  if (
    ["POST", "PUT", "PATCH"].includes(method) &&
    fieldsWithoutValue.length
  ) {

    errors.push(
      "informe um valor de teste para todos os campos do Payload"
    );

  }


  // Checklist
  if (!confirmed) {

    errors.push(
      "marque todos os itens da conferência"
    );

  }


  // --------------------------------------------------------
  // EXIBIR ERROS
  // --------------------------------------------------------

  if (errors.length) {

    $("error").textContent =
      "Antes de gerar: " +
      errors.join("; ") +
      ".";

    return;

  }


  // ========================================================
  // VERIFICAR SE EXISTE VALOR ÚNICO
  // ========================================================

  const hasUnique =
    payloadFields.some(
      (field) => field.unique
    );


  // Só cria a variável unique quando ela for necessária.
  const uniqueCode =

    hasUnique

      ? `  const unique = \`\${Date.now()}-\${__VU}-\${__ITER}\`;\n\n`

      : "";


  let body = "";

  let request = "";


  // ========================================================
  // GET
  // ========================================================

  if (method === "GET") {

    request = `  const res = http.get('${jsEsc(url)}', {
    tags: {
      name: '${DATA[current].name}'
    },
  });`;

  }


  // ========================================================
  // DELETE
  // ========================================================

  else if (method === "DELETE") {

    request = `  const res = http.del('${jsEsc(url)}', null, {
    tags: {
      name: '${DATA[current].name}'
    },
  });`;

  }


  // ========================================================
  // APPLICATION/JSON
  // ========================================================

  else if (
    contentType === "application/json"
  ) {

    body = `  const payload = JSON.stringify({
${payloadLines(payloadFields)}
  });

`;


    request = `  const res = http.${method.toLowerCase()}('${jsEsc(url)}', payload, {
    headers: {
      'Content-Type': 'application/json'
    },

    tags: {
      name: '${DATA[current].name}'
    },
  });`;

  }


  // ========================================================
  // APPLICATION/X-WWW-FORM-URLENCODED
  // ========================================================

  else if (
    contentType ===
    "application/x-www-form-urlencoded"
  ) {

    body = `  const payload = {
${formPayloadLines(payloadFields)}
  };

`;


    request = `  const res = http.${method.toLowerCase()}('${jsEsc(url)}', payload, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },

    tags: {
      name: '${DATA[current].name}'
    },
  });`;

  }


  // ========================================================
  // SCRIPT K6 FINAL
  // ========================================================

  const script = `import http from 'k6/http';
import { check } from 'k6';

export const options = {

  scenarios: {

    ${current}: {

      executor: 'per-vu-iterations',

      vus: ${vus},

      iterations: ${iterations},

      maxDuration: '1m',

    },

  },

  thresholds: {

    checks: ['rate==1.0'],

  },

};

export default function () {

${uniqueCode}${body}${request}

  check(res, {

    'resposta esperada (${status})':
      (r) => r.status === ${status},

  });

}
`;


  // ========================================================
  // EXIBIR SCRIPT
  // ========================================================

  $("code").textContent =
    script;


  // ========================================================
  // RESUMO DO SCRIPT GERADO
  // ========================================================

  $("scriptCheck").innerHTML = `

    <span>
      ✓ <b>${method}</b>
    </span>

    <span>
      ✓ <b>${vus} VU(s)</b>
    </span>

    <span>
      ✓ <b>
        ${iterations} execução(ões)/VU
      </b>
    </span>

    <span>
      ✓ <b>
        ${vus * iterations} requisição(ões)
      </b>
    </span>

    <span>
      ✓ <b>
        HTTP ${status}
      </b>
    </span>

    ${
      hasUnique

        ? `
          <span>
            ✓ <b>Valor único ativo</b>
          </span>
        `

        : ""
    }

  `;


  $("scriptSection")
    .classList
    .remove("hidden");


  $("error").textContent =
    "";


  $("scriptSection")
    .scrollIntoView({
      behavior: "smooth"
    });

}


// ==========================================================
// EVENTOS DOS CARDS
// ==========================================================

document
  .querySelectorAll(".choice")
  .forEach((button) => {

    button.onclick = () => {

      load(
        button.dataset.type
      );

    };

  });


// ==========================================================
// ADICIONAR NOVO CAMPO
// ==========================================================

$("addField").onclick = () => {

  // Sempre vazio.
  // Valor único sempre desmarcado.
  addField([
    "",
    "",
    false
  ]);

  update();

};


// ==========================================================
// ATUALIZAR RESUMO AO PREENCHER O FORMULÁRIO
// ==========================================================

[
  "method",
  "url",
  "status",
  "contentType",
  "vus",
  "iterations"
].forEach((id) => {

  $(id).addEventListener(
    "input",
    update
  );


  $(id).addEventListener(
    "change",
    update
  );

});


// ==========================================================
// GERAR SCRIPT
// ==========================================================

$("generate").onclick =
  generate;


// ==========================================================
// COPIAR SCRIPT
// ==========================================================

$("copy").onclick = async () => {

  try {

    await navigator.clipboard.writeText(
      $("code").textContent
    );


    $("copy").textContent =
      "✓ Copiado";


    setTimeout(() => {

      $("copy").textContent =
        "📋 Copiar script";

    }, 1500);

  }

  catch (error) {

    alert(
      "Não foi possível copiar automaticamente. Selecione o código e copie manualmente."
    );

  }

};


// ==========================================================
// INICIALIZAÇÃO
// ==========================================================
//
// O site começa em Cadastro, mas nenhum dado técnico
// fica preenchido automaticamente.
// ==========================================================

load("cadastro");