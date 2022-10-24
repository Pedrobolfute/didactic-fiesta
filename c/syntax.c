#include <stdio.h>
#include <locale.h>

void locale(){
    printf("\n The local language is: %s\n\n", setlocale(LC_ALL,NULL));

        /*If i did'n called setlocale function, the void parameter would give a "��7��" response.*/
}

int count(x, y){
int x + y;
printf("\nConta: %d\n\n");
}

int main(){
locale();
count(3, 2);

}

