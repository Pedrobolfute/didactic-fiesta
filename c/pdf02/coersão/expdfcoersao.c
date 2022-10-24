#include <stdio.h>

int main ()
{
    short *psi;
    int i = 7;
    float *pf, f;

    f = (float) i/2;
    i = (int) f;

    pf = &f;
    psi = (short *) pf;
        

}