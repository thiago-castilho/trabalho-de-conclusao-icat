export default class ServicoDePagamento {
  #pagamentos;

  constructor() {
    this.#pagamentos = [];
  }

  pagar(codigoDeBarras, empresa, valor) {
    const categoria = valor > 100 ? 'cara' : 'padrão';

    this.#pagamentos.push({
      codigoDeBarras,
      empresa,
      valor,
      categoria,
    });
  }
  consultarUltimoPagamento() {
    return this.#pagamentos.at(-1);
  }
}
