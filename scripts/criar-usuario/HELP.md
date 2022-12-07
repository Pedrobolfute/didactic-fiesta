# HELP - Gerenciamento de Usuários

## Linha 1: "#! /bin/bash"

Fala quem vai rodar todo esse script, que no caso será bash, que está localizado na pasta /bin. (Ele é um binário igual os arquivos compilados em c).

## Criando usuários

**A estrutura desse comando foi:**
comando "usuário-a-receber-comando" opção -s "caminho da opção -s" opção -p "quem ou o que a opção -p vai receber/fazer"
> useradd user -s /bin/bash -p $(openssl passwd -crypt senhaaqui)

- Comando
  - useradd - Comando para criar usuário.

  - user - nome do usuário a ser criado.
  - -s - Opção para "Indica qual o tipo de terminal o usuário vai poder usar. No nosso caso usamos o bash".

  - /bin/bash - Caminho que fica o execultavel (binário), bash.

  - -p - Opção para já definir uma senha ao usuário. Mas a senha a ser definida já deve está criptografada. Por isso vamos precisar de um outro comando para já criptografar a senha, que veremos na linha de baixo.

  - $(...) - O "$" representa uma chamada especial do resultado do conteúdo que está dentro do parenteses.

  - openssl - é um comando que criptografa.

  - -crypt é a opção que usamos para falar ao openssl que queremos criptografar o texto que virá à frente.
  
  - senhaaqui - é o texto a ser criptografado pelo openssl.