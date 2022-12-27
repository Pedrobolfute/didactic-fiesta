#! /bin/bash

#Deletando usuários#
userdel user1 
userdel user2 
userdel user3 


#Deletando grupos#
groupdel IF_PUBLICO 
groupdel IF_PRIVADO


#Removendo as pastas criadas#
rm -rf /tmp/pasta-do-usuario
