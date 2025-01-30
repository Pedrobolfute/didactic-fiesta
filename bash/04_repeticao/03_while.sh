#!/bin/bash

choice=4

echo "1. Bash"
echo "2 script"
echo "3 tutorial"
echo -n "choose a word"

while [ $choice -eq 4 ]; do

    read choice

    if [ $choice -eq 1 ]; then
        echo "you choosed, $choice"
    fi
done
