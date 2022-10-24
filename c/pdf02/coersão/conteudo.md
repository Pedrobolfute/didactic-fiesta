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