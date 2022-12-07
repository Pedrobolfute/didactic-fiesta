# HELP - Gerenciamento de Usuários

## Linha 1: "#! /bin/bash"

Fala quem vai rodar todo esse script, que no caso será bash, que está localizado na pasta /bin. (Ele é um binário igual os arquivos compilados em c).

## Criando usuários

> useradd user -s /bin/bash -p $(openssl passwd -crypt senhaaqui)

- Comando
  - useradd - Comando para criar usuário.
  - user - nome do usuário a ser criado.
  - -s - "Indica qual o tipo de terminal o usuário vai poder usar. No nosso caso usamos o bash".
  - /bin/bash - Caminho que fica o execultavel (binário) bash.
  -