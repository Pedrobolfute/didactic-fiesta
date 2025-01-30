#!/bin/bash

directory="./BashScript"

if [ -d $directory ]
    then
        echo "exist"
else
        echo "no exist"
fi