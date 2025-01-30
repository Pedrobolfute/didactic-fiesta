#!/bin/bash

trap bashtrap INT ## INTERRUPTION SIGNAL

# clear;

bashtrap(){
    echo "ctrl + c"
}

for a in `seq 1 10`; do
    echo "$a/10 to exit"
    sleep 1
done
echo "bye"