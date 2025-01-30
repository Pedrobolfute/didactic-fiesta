#!/bin/bash

in1=$1
function procurarAqui {
    ls -ll | grep $in1 --color
}
procurarAqui