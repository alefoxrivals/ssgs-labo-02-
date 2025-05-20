# Labo-String: CLI per Utilità su Stringhe

### Prerequisiti

* Deve essere installata la versione 18.x di Node

### Requisiti

* L'interazione con l'utente avviene tramite linea di comando.
  
## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione e Avvio

### Come installare

* Clonare il repository:

```bash
git clone https://github.com/alefoxrivals/ssgs-labo-02.git
```

* Entrare nella directory clonata:

```bash
cd ${your_installation_dir}/ssgs-labo-02
```

* Installare le dipendenze:

```bash
npm install
```

### Come usare

* Eseguire con:

```bash
npm run dev numero_funzione stringa_input parametro_aggiuntivo
```

* #### Testing:

L'applicazione include test unitari scritti utilizzando il framework di test [Jest](https://jestjs.io/).

### I test verificano:

il comportamento delle utility per la manipolazione delle stringhe definite in stringUtils.js. In particolare:

reverseString: controlla che la stringa venga invertita correttamente, anche in presenza di spazi o simboli.

isPalindrome: verifica se una stringa è palindroma, ignorando maiuscole e spazi.

truncateString: assicura che la stringa venga troncata correttamente alla lunghezza massima specificata, aggiungendo "..." se necessario.

countCharacters: verifica il conteggio accurato di tutti i caratteri, distinguendo tra maiuscole/minuscole e includendo spazi e simboli.

I test coprono sia casi standard che edge case, garantendo il 100% di code coverage.


### Per eseguire i test in locale, eseguire il seguente comando nel terminale:

```bash
npm test
```

## GitHub Actions:

Un workflow GitHub Actions è configurato in [`.github/workflows/test.yml`](). Questo workflow automatizza il processo di testing e mostra l’output della copertura. Viene eseguito solo in caso di `push` o `pull request` verso il branch `main`.

Caratteristiche principali:

* **Trigger:** Il workflow viene eseguito automaticamente a ogni evento di `push` nel repository.
* **Ambiente:** Configura un ambiente Ubuntu pulito con la versione 18.x di Node.js.
* **Passaggi:**

  1. Effettua il checkout del codice del repository.
  2. Configura la versione specificata di Node.js.
  3. Installa le dipendenze del progetto usando `npm ci`.
  4. Esegue la suite di test Jest usando `npm test`.
  5. Carica un artifact contenente il report della copertura del codice.

Questa configurazione di Integrazione Continua (CI) garantisce che tutti i test vengano eseguiti automaticamente ogni volta che viene caricato nuovo codice nel repository.
