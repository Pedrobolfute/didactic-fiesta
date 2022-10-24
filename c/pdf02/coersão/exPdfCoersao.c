#include <stdio.h>
#include <stdlib.h>

void coersaoSimpleSuportada(){
    short *psi;
    int i = 7;
    float *pf, f;

    f = (float) i/2;
    i = (int) f;

    pf = &f;
    psi = (short *) pf;
        
    printf("valor de f: \t\t%g\n", f);
    printf("valor de i: \t\t%d\n", i);
    printf("valor de pf: \t\t%d\n", pf);
    printf("valor de psi: \t\t%d\n", psi);
    printf("proximo valor de pf: \t%d\n", pf+1);
    printf("proximo valor de psi: \t%d\n", psi+1);
    return 0;
}

/*
    void metodoItoa(){
    #define typeof(var) _Generic( (var),\
    char: "Char",\
    int: "Integer",\
    float: "Float",\
    char *: "String",\
    void *: "Pointer",\
    default: "Undefined")

    int idade = 23;
    char convertToString = itoa(idade);
    printf("Idade é: %d", idade);
    printf("Idade em string: %c\tTipo:\t%s", idade, typeof(idade));
    return 0;
}
*/

int main ()
{
    coersaoSimpleSuportada();
//    metodoItoa();
}