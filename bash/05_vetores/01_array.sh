#!/bin/bash

ARRAY=('a' 'be' 'cie' 'd')
ELEMENTS=${#ARRAY[@]}

echo ${ELEMENTS}

for ((i=0; i<$ELEMENTS; i++)); do
    echo ${ARRAY[${i}]}
done