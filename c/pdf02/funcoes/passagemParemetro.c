#include <stdio.h>

float testeRetorno(float x, float y){
    float z, *ponteiroZ;
    z = x + y;
    ponteiroZ = &z;
    return z;
}


int main(int argc, char* argv[]){
    float x, *ponteiroZ;
    x = 10;
float retorno = testeRetorno(3.5, 4);
    printf("%d\n", (int) retorno);
   // printf("%f + %f = ", x, )
}