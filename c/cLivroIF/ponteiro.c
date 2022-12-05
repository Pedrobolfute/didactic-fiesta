#include <stdio.h>

int main(int argc, char *argv[])
{
    int a = 0;
    int b = 1;
    b = &a;b 

    printf("%d\n", a);
    printf("%d\n", *b);
    
    
    return 0;

}

void calculo(int um, int dois){
    um = *(um + 1);
    dois = *(dois + 4);
    
}