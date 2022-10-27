#include <stdio.h>

void coersaoSimpleSuportada(){
    short *psi;
    int i = 7;
    float *pf, f;

    f = (float) i/2;
    i = (int) f;

    pf = &f;
    psi = (short *) pf;
        
    printf("valor de f: \t\t\t%g\n", f);
    printf("valor de i: \t\t\t%d\n", i);
    printf("valor de pf: \t\t\t%d\n", pf);
    printf("valor de psi: \t\t\t%d\n", psi);
    printf("proximo valor de pf: \t\t%d\n", pf+1);
    printf("proximo valor de psi: \t\t%d\n", psi+1);
    return 0;
}

int main (int argc, char *argv[])
{
    coersaoSimpleSuportada();
}