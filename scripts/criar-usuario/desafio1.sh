#! /bin/bash

#Criando Usuário#
useradd user1 -s /bin/bash -p $(openssl passwd -crypt senha1)
useradd user2 -s /bin/bash -p $(openssl passwd -crypt senha2)
useradd user3 -s /bin/bash -p $(openssl passwd -crypt senha3)


#Criando grupos#
groupadd IF_PUBLICO 
groupadd IF_PRIVADO


#Adicionando usuários aos grupos#
adduser user1 IF_PRIVADO

adduser user1 IF_PUBLICO 
adduser user2 IF_PUBLICO
adduser user3 IF_PUBLICO


#Definindo variável para o caminho em comum#
VariavelDoCaminho="/tmp/pasta-do-usuario"


#Criando as pastas no caminho da variável#
mkdir $VariavelDoCaminho
mkdir $VariavelDoCaminho/IF_PASTA_PUBLICA
mkdir $VariavelDoCaminho/IF_PASTA_PRIVADA
mkdir $VariavelDoCaminho/IF_PASTA_GRUPO


#Mudando permissões de acesso nas pastas#
chmod 777 $VariavelDoCaminho/IF_PASTA_PUBLICA
chmod 070 $VariavelDoCaminho/IF_PASTA_PRIVADA
chmod 070 $VariavelDoCaminho/IF_PASTA_GRUPO


#Definindo o dono e o grupo pertencente das pastas#
chown root:root $VariavelDoCaminho/IF_PASTA_PUBLICA
chown root:IF_PRIVADO $VariavelDoCaminho/IF_PASTA_PRIVADA
chown root:IF_PUBLICO $VariavelDoCaminho/IF_PASTA_GRUPO

