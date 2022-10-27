# Coerção/cast

Converter tipo de variável com o processo de cast;

## OBSERVAÇÃO

%g

    -   O %g é o mesmo que %f, no contxto de float.
    Seu diferencial é que %g pode pegar um número representado tanto por %f (um simples float ou double) ou %e (notação científica) e retornar o seu menor tipo.

### DUVIDA

Qual a diferença entre:

    - pf = &f;
      psi = (short *) pf;
Pra:

    - pf = &f;
      psi = &pf;

### RESOLUÇÃO

    - No primeiro caso, há um processo de coersão. Aonde pf(tipo float) recebe o endereço de f(tipo float, mas seu endereço é int), então psi(tipo short int) é um ponteiro que aponta para pf(que é o endereço, inteiro, de f) que o mesmo guarda o endereçe de f. Ou seja, como o psi é um ponteiro do tipo short int e que aponta para pf to tipo float, tem que haver um processo de reaseguração para mostrar ao compilador que você esta ciente que está recebendo um valor inteiro de um ponteiro do tipo float. Então dentro dos parenteses (short *) ele reasegura que quer receber o resultado no tipo short int.
    
    Já no segundo caso, o psi(tipo short int) recebe o endereço de pf(tipo float, mas seu endereço é um inteiro de identificação na memória).
