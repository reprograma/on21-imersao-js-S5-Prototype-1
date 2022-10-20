# Exercício de Sala 🏫  

- Conteúdo teórico: 
[Prototypal Instantiation](https://github.com/reprograma/on21-imersao-js-S5-Prototype-1/blob/main/README.md#prototypal-instantiation)

## Exercício 6

Defina uma função construtora Prototypal para um objeto `Account`.

A conta deve ser instanciada com:
- [x] Seu número
- [x] Número da agência
- [x] Um montante inicial que deve ser diferente de zerox
Os xétodos de `Account` são:
- [x] `credit(amount)`, que adiciona o valor especificado ao montante. Imprime na console o resultado.
- [x] `debit(amount)`, que subtrai o valor especificado do montante
- [x] `transferTo(anotherAccount, amount)`, que transfere o valor especificado desta conta para a outra conta (o parâmetro deve ser um objeto conta). Imprime na console o resultado. Caso não haja valor suficiente para a operação, ela deve retornar uma exceção com a mensagem especificada.

Teste tudo o que foi criado.

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [x] Fiz o fork do repositório.
- [x] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [x] Resolvi o exercício dentro da pasta resolução.
- [x] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [x] Pushei os commits na minha branch (`git push origin nome-da-branch`)
