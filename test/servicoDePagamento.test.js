import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('Testes do módulo de Serviços de Pagamentos', () => {
  it('deve validar que valor menor que 100.00 retorna a propriedade categoria como "padrão"', () => {
    const servicoDePagamento = new ServicoDePagamento();
    const codigoDeBarras = '1234-5678-9012';
    const empresa = 'SABESP';
    const valor = 99.99;

    servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    assert.deepEqual(ultimoPagamento, {
      codigoDeBarras,
      empresa,
      valor,
      categoria: 'padrão',
    });
  });

  it('deve validar que valor igual a 100.00 retorna a propriedade categoria como "padrão"', () => {
    const servicoDePagamento = new ServicoDePagamento();
    const codigoDeBarras = '2345-6789-0123';
    const empresa = 'Internet';
    const valor = 100.0;

    servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    assert.deepEqual(ultimoPagamento, {
      codigoDeBarras,
      empresa,
      valor,
      categoria: 'padrão',
    });
  });

  it('deve validar que valor maior que 100 retorna a propriedade categoria como "cara"', () => {
    const servicoDePagamento = new ServicoDePagamento();
    const codigoDeBarras = '3456-7890-1234';
    const empresa = 'ENEL';
    const valor = 100.01;

    servicoDePagamento.pagar(codigoDeBarras, empresa, valor);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    assert.deepEqual(ultimoPagamento, {
      codigoDeBarras,
      empresa,
      valor,
      categoria: 'cara',
    });
  });

  it('deve validar que ao realizar 4 pagamentos, o último é retornado', () => {
    const servicoDePagamento = new ServicoDePagamento();

    servicoDePagamento.pagar('1234-5678-9012', 'SABESP', 99.99);
    servicoDePagamento.pagar('2345-6789-0123', 'Internet', 100.0);
    servicoDePagamento.pagar('3456-7890-1234', 'ENEL', 100.01);
    servicoDePagamento.pagar('4567-8901-2345', 'Gás', 130);

    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    assert.deepEqual(ultimoPagamento, {
      codigoDeBarras: '4567-8901-2345',
      empresa: 'Gás',
      valor: 130,
      categoria: 'cara',
    });
  });
});
