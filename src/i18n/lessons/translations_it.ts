import type { LessonTranslation } from "./types.ts";

export const translations_it: Record<number, LessonTranslation> = {
  "1": {
    "title": "Chi sono e dove sono?",
    "description": "Immagina di entrare in un'enorme e buia biblioteca con milioni di libri, ma di non avere una mappa e di non ricordare nemmeno la targhetta con il tuo nome. Prima di poter cercare qualsiasi cosa, devi sapere chi sei e dove ti trovi. Nella shell Linux iniziamo con le stesse identiche domande!\n\n- Il comando `whoami` stampa il nome utente con cui sei attualmente loggato.\n- Il comando `pwd` (stampa directory di lavoro) agisce come un GPS, mostrandoti il ​​percorso esatto della cartella in cui ti trovi attualmente.",
    "instructions": "Orientiamoci! Innanzitutto, esegui `whoami` per vedere il tuo nome utente attivo, quindi esegui `pwd` per stampare la posizione corrente della cartella nel file system.",
    "commandHelp": [
      {
        "cmd": "whoami",
        "desc": "Stampa il nome utente attivo"
      },
      {
        "cmd": "pwd",
        "desc": "Stampa la directory di lavoro corrente"
      }
    ],
    "objectives": [
      {
        "id": "ran_whoami",
        "text": "Esegui il comando \"whoami\""
      },
      {
        "id": "ran_pwd",
        "text": "Esegui il comando \"pwd\""
      }
    ],
    "hints": [
      "Controlla quali comandi devi eseguire per identificare il tuo utente e il tuo percorso.",
      "Il comando 'whoami' mostra il tuo nome utente e 'pwd' mostra il tuo percorso attuale.",
      "Prova a eseguire: whoami, quindi pwd"
    ]
  },
  "2": {
    "title": "Navigazione ed elenco dei file",
    "description": "Ora che sai dove ti trovi, come puoi guardarti intorno e spostarti in una stanza diversa in questa libreria digitale? In Linux, lo facciamo usando due semplici comandi:\n\n- `ls`: è come accendere le luci in una stanza per vedere tutti i file e le cartelle al suo interno.\n- `cd <path>`: abbreviazione di \"cambia directory\", ti consente di attraversare una porta per entrare in un'altra cartella.\n\nPer specificare dove vuoi andare, puoi utilizzare percorsi **assoluti** (a partire dalla radice `/` del sistema, come `/var/log`) o percorsi **relativi** (in base a dove ti trovi adesso, come usare `..` per tornare alla cartella principale).",
    "instructions": "Esploriamo. Accedi alla cartella `/var/log` eseguendo `cd /var/log`, quindi esegui il comando `ls` per visualizzare i file di registro archiviati all'interno.",
    "commandHelp": [
      {
        "cmd": "ls",
        "desc": "Elenca i file nella directory corrente"
      },
      {
        "cmd": "cd /var/log",
        "desc": "Cambia la directory in /var/log"
      }
    ],
    "objectives": [
      {
        "id": "in_var_log",
        "text": "Cambia la directory in /var/log"
      },
      {
        "id": "ran_ls",
        "text": "Esegui il comando \"ls\" in /var/log"
      }
    ],
    "hints": [
      "Pensa a come navigare ed elencare i file in una directory specifica.",
      "Cambia la directory in /var/log usando cd, quindi usa ls.",
      "Prova a eseguire: cd /var/log, quindi ls"
    ]
  },
  "3": {
    "title": "Creazione di directory",
    "description": "Immagina che la tua scrivania sia piena di fogli sparsi e che tu abbia bisogno di cartelle fisiche per mantenere le cose in ordine. In Linux, organizziamo i file creando cartelle (directory) utilizzando il comando `mkdir` (make directory).\n\nL'esecuzione di `mkdir code` crea una nuova cartella denominata \"codice\" proprio dove ti trovi. Puoi creare cartelle ovunque nel filesystem fornendo a `mkdir` un percorso relativo o assoluto.",
    "instructions": "Costruiamo uno spazio di lavoro. Torna alla tua directory home eseguendo `cd ~` (o `cd /home/learner`), quindi crea una nuova cartella denominata `projects` al suo interno.",
    "commandHelp": [
      {
        "cmd": "cd ~",
        "desc": "Torna alla directory home"
      },
      {
        "cmd": "mkdir projects",
        "desc": "Crea la cartella dei progetti"
      }
    ],
    "objectives": [
      {
        "id": "in_home",
        "text": "Trovati nella tua cartella home (/home/learner)"
      },
      {
        "id": "used_mkdir",
        "text": "Usa il comando \"mkdir\""
      },
      {
        "id": "dir_exists",
        "text": "Crea una directory denominata \"projects\""
      }
    ],
    "hints": [
      "Assicurati prima di essere nella directory di avvio corretta.",
      "Vai alla tua directory home (~ o ​​/home/learner) e usa il comando mkdir.",
      "Prova a eseguire: cd ~ seguito da mkdir project"
    ]
  },
  "4": {
    "title": "Directory e opzioni nidificate",
    "description": "Immagina di provare a costruire un set di bambole nidificabili, ma devi costruire quelle più esterne prima di poter costruire quella piccola all'interno. Per impostazione predefinita, `mkdir` è così: rifiuta di creare una cartella all'interno di cartelle che non esistono ancora. Per evitare il fastidio di creare cartelle una per una, utilizziamo un interruttore:\n\n- L'opzione `-p` (o `--parents`) indica a `mkdir` di creare automaticamente eventuali cartelle principali mancanti nel percorso verso la cartella finale. Ad esempio, `mkdir -p workspace/src/utils` crea `workspace`, `workspace/src` e `workspace/src/utils` tutto in un unico comando.\n\n**Perché è importante**: se esegui `mkdir workspace/src/utils` senza `-p` e `workspace` e `workspace/src` non esistono già, otterrai: `mkdir: cannot create directory 'workspace/src/utils': No such file or directory`. Il flag `-p` risolve questo problema creando automaticamente tutte le cartelle principali mancanti.",
    "instructions": "Costruiamo una struttura di cartelle profonda. Crea un percorso nidificato `workspace/src/utils` nella tua cartella Inizio utilizzando `mkdir -p workspace/src/utils`.",
    "commandHelp": [
      {
        "cmd": "mkdir -p path",
        "desc": "Crea directory nidificate e directory principali"
      }
    ],
    "objectives": [
      {
        "id": "nested_dir_exists",
        "text": "Crea directory nidificate workspace/src/utils"
      },
      {
        "id": "used_p_switch",
        "text": "Usa l'opzione -p o --parents in mkdir"
      }
    ],
    "hints": [
      "Cerca un flag mkdir che crei automaticamente le directory principali se non esistono.",
      "Usa mkdir con l'opzione -p per creare cartelle nidificate.",
      "Prova a eseguire: mkdir -p workspace/src/utils"
    ]
  },
  "5": {
    "title": "Cancellare lo schermo",
    "description": "Ti sei mai sentito sopraffatto quando la tua scrivania è ricoperta di appunti e documenti disordinati? Il tuo terminale può diventare altrettanto disordinato. Quando lo fa, puoi spazzare via tutto il vecchio testo e ricominciare da capo.\n\n- Il comando `clear` cancella lo schermo visibile, facendo scorrere l'output precedente fuori dalla vista in modo da avere una tela nuova e vuota nella parte superiore del terminale.",
    "instructions": "Concediti un po' di respiro! Esegui `clear` per pulire lo schermo.",
    "commandHelp": [
      {
        "cmd": "clear",
        "desc": "Cancella lo schermo del terminale"
      }
    ],
    "objectives": [
      {
        "id": "ran_clear",
        "text": "Esegui il comando \"clear\""
      }
    ],
    "hints": [
      "Spazza via tutto il vecchio testo e ricomincia da capo.",
      "Esegui il comando che cancella lo schermo del terminale.",
      "Prova a eseguire: clear"
    ]
  },
  "6": {
    "title": "Trovare l'aiuto di Shell",
    "description": "Quando acquisti un nuovo gioco da tavolo, di solito dai un'occhiata al regolamento o alla scheda di riferimento per vedere quali mosse sono consentite. Nel nostro emulatore di terminale, hai un cheat sheet integrato!\n\n- Il comando `help` elenca ogni singolo comando supportato da questo simulatore, insieme ai dettagli sul supporto del piping o del reindirizzamento degli output.",
    "instructions": "Ispezioniamo il regolamento. Esegui `help` per visualizzare l'elenco completo dei comandi con cui puoi giocare.",
    "commandHelp": [
      {
        "cmd": "help",
        "desc": "Elenca i comandi disponibili"
      }
    ],
    "objectives": [
      {
        "id": "ran_help",
        "text": "Esegui il comando \"help\""
      }
    ],
    "hints": [
      "Rivedi le istruzioni per trovare il comando appropriato per la guida del regolamento.",
      "Usa il comando 'aiuto'.",
      "Prova a correre: aiuto"
    ]
  },
  "7": {
    "title": "Creazione di file vuoti",
    "description": "Immagina di voler iniziare a scrivere una nuova voce di diario, ma prima hai bisogno di un pezzo di carta bianco. In Linux, prendiamo un nuovo file di testo vuoto usando il comando `touch`.\n\n- Il comando `touch` crea un file nuovo e vuoto se non esiste ancora (come eseguire `touch draft.txt` per creare `draft.txt`). Se il file esiste già, aggiorna semplicemente il timestamp dell'\"ultima modifica\" del file senza modificarne il contenuto. Inseriamo un file nella nostra nuova cartella progetti.",
    "instructions": "Creiamo una tabula rasa. Crea un file vuoto denominato `task.txt` all'interno della cartella `projects` (inserisci prima la cartella o utilizza `touch projects/task.txt`).",
    "commandHelp": [
      {
        "cmd": "cd projects",
        "desc": "Entra nella cartella dei progetti"
      },
      {
        "cmd": "touch task.txt",
        "desc": "Crea il file task.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_touch",
        "text": "Usa il comando \"touch\""
      },
      {
        "id": "file_exists",
        "text": "Crea il file \"task.txt\" all'interno di \"projects\""
      }
    ],
    "hints": [
      "Pensa a quale comando crea un nuovo file vuoto.",
      "Usa il comando 'touch' all'interno della directory 'projects'.",
      "Prova a eseguire: tocca progetti/task.txt"
    ]
  },
  "8": {
    "title": "Lettura del contenuto del file",
    "description": "Pensa ad aprire una cartella, estrarre una pagina di testo e sollevarla per leggerla. In Linux, leggiamo i file istantaneamente senza aprire un pesante editor di testo utilizzando il comando `cat` (concatena).\n\n- Il comando `cat` stampa l'intero contenuto di un file direttamente sullo schermo del terminale. Ad esempio, l'esecuzione di `cat notes.txt` ti consente di vedere immediatamente cosa è scritto all'interno di `notes.txt`.",
    "instructions": "Leggiamo un file di sistema. Stampa il contenuto del file di configurazione della rete locale su `/etc/hosts` eseguendo `cat /etc/hosts`.",
    "commandHelp": [
      {
        "cmd": "cat /etc/hosts",
        "desc": "Stampa il contenuto del file host"
      }
    ],
    "objectives": [
      {
        "id": "cat_hosts",
        "text": "Esegui il comando \"cat\" su /etc/hosts"
      }
    ],
    "hints": [
      "Pensa a quale comando restituisce/visualizza il contenuto di un file.",
      "Usa il comando 'cat' sul file /etc/hosts.",
      "Prova a eseguire: cat /etc/hosts"
    ]
  },
  "9": {
    "title": "Gestire gli spazi nei nomi dei file",
    "description": "Se dici a un robot di \"dipingere la mia camera da letto di blu\", deve sapere se \"la mia camera da letto\" è un unico posto o se \"mia\" e \"camera da letto\" sono due istruzioni diverse. Linux usa gli spazi per separare i comandi dai loro argomenti. Quindi se esegui `mkdir my folder`, Linux pensa che tu voglia creare due cartelle separate: una chiamata \"my\" e un'altra chiamata \"folder\"!\n\n- Per dire a Linux che un nome con spazi è un singolo elemento, dobbiamo racchiuderlo tra virgolette (`\"my folder\"` o `'my folder'`) o utilizzare una barra rovesciata per evitare lo spazio (`my\\ folder`).",
    "instructions": "Gestiamo i nomi con spazi. Crea una cartella denominata `\"my code\"` nella directory home, quindi crea un file vuoto denominato `\"my task\"` al suo interno.",
    "commandHelp": [
      {
        "cmd": "mkdir \"my code\"",
        "desc": "Crea una cartella con uno spazio nel nome"
      },
      {
        "cmd": "touch \"my code/my task\"",
        "desc": "Crea un file con uno spazio nel nome"
      }
    ],
    "objectives": [
      {
        "id": "dir_with_space_exists",
        "text": "Crea la directory \"il mio codice\""
      },
      {
        "id": "file_with_space_exists",
        "text": "Crea il file \"la mia attività\" all'interno di \"il mio codice\""
      }
    ],
    "hints": [
      "Quando crei file o directory con spazi nel nome, racchiudi il nome tra virgolette.",
      "Usa mkdir \"il mio codice\" seguito da \"il mio codice/la mia attività\".",
      "Prova a eseguire: mkdir \"il mio codice\" e tocca \"il mio codice/la mia attività\""
    ]
  },
  "10": {
    "title": "Scrittura e sovrascrittura di file",
    "description": "Se vuoi scrivere un messaggio su una lavagna, prima pulisci completamente la lavagna e poi scrivi le nuove parole. In Linux, scriviamo messaggi su file utilizzando l'operatore `>` (reindirizzamento dell'output).\n\n- Il comando `echo \"message\"` normalmente stampa il testo sullo schermo.\n- Aggiungendo il simbolo `>`, reindirizziamo invece quel testo in un file. Ad esempio, `echo \"Hi\" > greeting.txt` scrive \"Ciao\" in `greeting.txt`. Se il file contiene già del testo, `>` lo sovrascrive completamente con il nuovo messaggio.",
    "instructions": "Scriviamo in un nuovo file. Salva il testo \"Sistema online\" in un file denominato `status.txt` nella tua cartella home `/home/learner`.",
    "commandHelp": [
      {
        "cmd": "echo \"System Online\" > status.txt",
        "desc": "Crea status.txt con testo"
      }
    ],
    "objectives": [
      {
        "id": "used_echo_redirect",
        "text": "Usa echo con > reindirizzamento"
      },
      {
        "id": "file_created",
        "text": "Crea \"status.txt\" nella directory home"
      },
      {
        "id": "content_correct",
        "text": "Il contenuto del file è esattamente \"Sistema online\""
      }
    ],
    "hints": [
      "Per scrivere testo in un file, puoi reindirizzare l'output del comando echo.",
      "Utilizza l'operatore '>' per reindirizzare echo \"Sistema online\" a status.txt.",
      "Prova a eseguire: echo \"Sistema online\" > status.txt"
    ]
  },
  "11": {
    "title": "Aggiunta ai file",
    "description": "Invece di pulire la lavagna, cosa succede se vuoi semplicemente aggiungere una nuova riga in fondo? In Linux, aggiungiamo testo alla fine di un file senza toccare il contenuto esistente utilizzando l'operatore `>>` (append redirezione).\n\n- L'operatore `>>` aggiunge il nuovo testo alla fine del file. Ad esempio, `echo \"New Line\" >> logs.txt` aggiunge \"Nuova riga\" alla fine di `logs.txt` mantenendo tutti i tuoi vecchi registri al sicuro.",
    "instructions": "Aggiungiamo una riga. Aggiungi il testo \"Tutti i controlli verdi\" in fondo al file `status.txt` all'interno della cartella home `/home/learner`, quindi esegui `cat` su di esso per vedere entrambe le righe.",
    "commandHelp": [
      {
        "cmd": "echo \"All Checks Green\" >> status.txt",
        "desc": "Aggiungi testo a status.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_append",
        "text": "Usa echo con >> aggiungi reindirizzamento"
      },
      {
        "id": "has_first_line",
        "text": "La prima riga è ancora \"Sistema online\""
      },
      {
        "id": "has_second_line",
        "text": "La seconda riga ha \"Tutti i controlli verdi\""
      },
      {
        "id": "used_cat",
        "text": "Verifica il risultato utilizzando il comando \"cat\""
      }
    ],
    "hints": [
      "Usa append reindirizzamento in modo da non sovrascrivere il contenuto del file esistente.",
      "Utilizza l'operatore '>>' per aggiungere testo e 'cat' per verificarlo.",
      "Prova a eseguire: echo \"Tutti i controlli verdi\" >> status.txt e cat status.txt"
    ]
  },
  "12": {
    "title": "Copia e spostamento di file",
    "description": "Immagina di riorganizzare la tua stanza: a volte vuoi fare una fotocopia di un documento da tenere in un altro cassetto, e altre volte vuoi semplicemente prendere una cartella e farla scorrere in un nuovo scaffale o cambiarne l'etichetta. Lo facciamo in Linux con semplici comandi:\n\n- `cp <source> <destination>` crea un duplicato identico di un file in una nuova posizione.\n- `mv <source> <destination>` sposta un file in una nuova cartella o rinomina il file se lo tieni nella stessa cartella (ad esempio, `mv old.txt new.txt`).",
    "instructions": "Creiamo un backup e rinominiamo un file! Usa `cp status.txt status_backup.txt` per duplicarlo e `mv status.txt system.log` per rinominare l'originale.",
    "commandHelp": [
      {
        "cmd": "cp status.txt status_backup.txt",
        "desc": "Crea una copia di backup di status.txt"
      },
      {
        "cmd": "mv status.txt system.log",
        "desc": "Rinomina status.txt in system.log"
      }
    ],
    "objectives": [
      {
        "id": "used_cp",
        "text": "Usa il comando \"cp\" per creare status_backup.txt"
      },
      {
        "id": "used_mv",
        "text": "Usa il comando \"mv\" per rinominare status.txt in system.log"
      },
      {
        "id": "files_verified",
        "text": "Verifica che status_backup.txt e system.log esistano con i contenuti corretti"
      }
    ],
    "hints": [
      "Pensa a quale comando rinomina o sposta un file.",
      "Usa il comando 'mv' per rinominare status.txt in system.log.",
      "Prova a eseguire: mv status.txt system.log"
    ]
  },
  "13": {
    "title": "Caratteri jolly e operazioni su più file",
    "description": "Immagina di avere una pila di cartelle etichettate \"log_monday\", \"log_tuesday\" e \"log_wednesday\" e di volerle aprire e leggere tutte contemporaneamente senza digitare tutti i nomi. Linux ti consente di utilizzare i **caratteri jolly** come scorciatoie di ricerca!\n\n- Il simbolo `*` corrisponde a qualsiasi carattere di qualsiasi lunghezza. Ad esempio, `cat log_*` legge ogni file che inizia con \"log_\".\n- Il simbolo `?` funge da segnaposto a carattere singolo. Ad esempio, `log_?.txt` corrisponde a `log_1.txt` ma ignorerà `log_12.txt`.",
    "instructions": "Uniamo più log. Combina il contenuto di tutti i file che iniziano con `log_` nella tua directory home in un unico file denominato `combined.log` utilizzando il carattere jolly `*` e il reindirizzamento `>`.",
    "commandHelp": [
      {
        "cmd": "cat log_* > combined.log",
        "desc": "Combina tutti i file corrispondenti in combined.log"
      }
    ],
    "objectives": [
      {
        "id": "used_wildcard",
        "text": "Usa cat con pattern di caratteri jolly (log_*)"
      },
      {
        "id": "combined_exists",
        "text": "Crea \"combined.log\" nella directory home"
      },
      {
        "id": "content_combined",
        "text": "Verifica che contenga log da log_1, log_2 e log_3"
      }
    ],
    "hints": [
      "Pensa a come utilizzare i caratteri jolly per abbinare più file che iniziano con log_.",
      "Usa cat log_* per leggere tutti i file di corrispondenza e reindirizzare l'output a combined.log.",
      "Prova a eseguire: cat log_* > combined.log"
    ]
  },
  "14": {
    "title": "Rimozione di file e cartelle",
    "description": "Quando ripulisci la tua scrivania fisica, potresti gettare i vecchi documenti in un cestino per il riciclaggio dove potrai recuperarli se hai commesso un errore. In Linux non esiste una rete di sicurezza: quando elimini qualcosa dal terminale, scompare per sempre!\n\n- Il comando `rm` elimina i file.\n- Poiché le cartelle possono contenere altri file, `rm` non eliminerà una cartella per impostazione predefinita. È necessario aggiungere il flag `-r` (ricorsivo) per dire a Linux di immergersi ed eliminare la cartella insieme a tutto ciò che contiene.\n\n**Perché è importante**: se esegui `rm downloads` senza `-r` quando `downloads` è una cartella, otterrai: `rm: cannot remove 'downloads': Is a directory`. Il flag `-r` dice a Linux di eliminare ricorsivamente la cartella e tutto ciò che contiene.",
    "instructions": "Ripuliamo la nostra directory home. Elimina definitivamente la cartella `downloads` e tutti i suoi contenuti eseguendo `rm -r downloads`.",
    "commandHelp": [
      {
        "cmd": "rm -r downloads",
        "desc": "Elimina la cartella in modo ricorsivo"
      }
    ],
    "objectives": [
      {
        "id": "used_rm",
        "text": "Usa il comando \"rm\" con il flag -r"
      },
      {
        "id": "downloads_removed",
        "text": "La directory /home/learner/downloads viene eliminata"
      }
    ],
    "hints": [
      "Pensa a quale comando rimuove un file o una directory in modo ricorsivo.",
      "Utilizza il comando 'rm' con l'opzione ricorsiva (-r).",
      "Prova a eseguire: rm -r downloads"
    ]
  },
  "15": {
    "title": "Introduzione a Pipes & wc",
    "description": "Immagina una catena di montaggio in cui un lavoratore avvolge un prodotto e lo consegna immediatamente al lavoratore successivo per imballarlo in una scatola, senza bisogno di stoccaggio intermedio. In Linux, colleghiamo i comandi esattamente in questo modo utilizzando una **pipe** (`|`).\n\n- Una pipe (`|`) instrada l'output di un comando direttamente nell'input del comando successivo. Ad esempio, `ls | wc -l` elenca i file e passa immediatamente l'elenco a `wc -l` (conteggio parole - righe), che li conta al volo senza bisogno di file temporanei.\n\n**Perché è importante**: se esegui `wc` senza `-l`, verranno restituiti tre numeri separati: righe, parole e byte (ad esempio, `  5  10  85`). Ciò ne rende difficile l'utilizzo in pipeline o script che necessitano di un conteggio pulito e di un solo numero. Il flag `-l` limita l'output al solo conteggio delle righe.",
    "instructions": "Colleghiamo alcuni comandi. Contare i file in `/home/learner` utilizzando una pipe (`ls | wc -l`) e scrivere il conteggio finale in un file denominato `file_count.txt` utilizzando il reindirizzamento `>`.",
    "commandHelp": [
      {
        "cmd": "ls | wc -l",
        "desc": "Conta file e cartelle nella directory corrente"
      },
      {
        "cmd": "ls | wc -l > file_count.txt",
        "desc": "Scrivi il conteggio dei file in file_count.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_pipe",
        "text": "Usa pipe (|) per connettere ls con wc"
      },
      {
        "id": "file_count_exists",
        "text": "Crea il file \"file_count.txt\" nella directory home"
      },
      {
        "id": "count_is_correct",
        "text": "Verifica che il file contenga il corretto conteggio numerico dei file"
      }
    ],
    "hints": [
      "Pensa a come reindirizzare l'output di un comando in un altro utilizzando una pipe.",
      "Collega l'output di ls a wc -l, quindi reindirizza il risultato a file_count.txt.",
      "Prova a eseguire: ls | wc -l > conteggio_file.txt"
    ]
  },
  "16": {
    "title": "Ordinamento e ricerca di carte uniche",
    "description": "Immagina di ordinare un mazzo di carte in cui i duplicati sono sparsi ovunque. Per individuare e rimuovere facilmente i duplicati, devi prima raggruppare insieme le carte identiche. In Linux, il comando `uniq` filtra le righe ripetute, ma ha un problema: **rileva solo i duplicati che sono uno accanto all'altro**!\n\n- Per rimuovere tutti i duplicati da un elenco disordinato, devi prima ordinare le righe utilizzando `sort` e quindi passare il risultato a `uniq`. Ad esempio, `sort raw.txt | uniq` organizza e pulisce l'elenco in una volta sola.",
    "instructions": "Ripuliamo la lista degli invitati disordinata. Il file `names.txt` contiene nomi duplicati. Collega `sort` e `uniq` con una pipe per trovare tutti i nomi univoci in ordine alfabetico e salvarli in `unique_names.txt`.",
    "commandHelp": [
      {
        "cmd": "sort names.txt",
        "desc": "Ordina le righe di nomi.txt in ordine alfabetico"
      },
      {
        "cmd": "sort names.txt | uniq > unique_names.txt",
        "desc": "Ordina e filtra i duplicati in un file"
      }
    ],
    "objectives": [
      {
        "id": "used_sort",
        "text": "Usa il comando \"sort\" su nomi.txt"
      },
      {
        "id": "used_uniq",
        "text": "Collega l'output ordinato al comando \"uniq\""
      },
      {
        "id": "unique_names_exists",
        "text": "Crea il file \"unique_names.txt\""
      },
      {
        "id": "sorted_and_unique",
        "text": "Verifica che il contenuto abbia nomi ordinati univoci"
      }
    ],
    "hints": [
      "Devi prima ordinare i nomi in ordine alfabetico, quindi filtrare i duplicati.",
      "Collega l'output di sortnames.txt a uniq e reindirizzalo a unique_names.txt.",
      "Prova a eseguire: sortnames.txt | uniq > nomi_unici.txt"
    ]
  },
  "17": {
    "title": "Filtraggio con grep",
    "description": "Immagina di sfogliare un enorme registro di migliaia di pagine per scoprire ogni volta che si è verificato un errore di sistema. Farlo manualmente richiederebbe ore! In Linux, utilizziamo `grep` come lente d'ingrandimento digitale per cercare istantaneamente parole o schemi specifici.\n\n- Il comando `grep` filtra i file o il testo trasmesso, stampando solo le righe che corrispondono alla parola di ricerca. Ad esempio, l'esecuzione di `grep \"ERROR\" logs.txt` esegue la scansione del file ed estrae solo le righe contenenti \"ERROR\".",
    "instructions": "Filtriamo i nostri log. Cerca `logs.txt` tutte le righe contenenti `[ERROR]` e salvale in un nuovo file denominato `errors.log`.",
    "commandHelp": [
      {
        "cmd": "grep \"[ERROR]\" logs.txt",
        "desc": "Cerca nel file logs.txt le righe contenenti [ERRORE]"
      },
      {
        "cmd": "grep \"[ERROR]\" logs.txt > errors.log",
        "desc": "Salva gli errori corrispondenti nel file error.log"
      }
    ],
    "objectives": [
      {
        "id": "used_grep",
        "text": "Utilizza il comando \"grep\" per cercare nel file logs.txt"
      },
      {
        "id": "errors_log_exists",
        "text": "Crea il file \"errors.log\" nella directory home"
      },
      {
        "id": "only_errors",
        "text": "Verifica che error.log contenga solo voci [ERROR]"
      }
    ],
    "hints": [
      "Pensa a quale comando filtra le righe che corrispondono a un modello specifico.",
      "Usa grep per cercare '[ERROR]' in logs.txt e reindirizzare l'output a error.log.",
      "Prova a eseguire: grep \"[ERROR]\" logs.txt > error.log"
    ]
  },
  "18": {
    "title": "Modifica delle autorizzazioni dei file",
    "description": "Immagina di gestire un'attività in cui solo i manager possono firmare assegni, i dipendenti possono leggere gli orari e i visitatori possono solo guardare l'insegna del negozio. In Linux controlliamo chi può leggere, scrivere o eseguire file utilizzando un sistema di sicurezza di numeri (chiamato rappresentazione ottale):\n\n- `7` = Accesso completo: lettura + scrittura + esecuzione (`rwx`)\n- `6` = Modifica accesso: Lettura + Scrittura (`rw-`)\n- `5` = Accesso in lettura ed esecuzione: Lettura + Esegui (`r-x`)\n- `4` = Accesso di sola lettura: Lettura (`r--`)\n\nApplichiamo queste impostazioni con `chmod <octal> <file>`. Ad esempio, `chmod 755 script.sh` ti consente di eseguire lo script, mentre altri possono solo leggerlo ed eseguirlo. Abbiamo uno script denominato `deploy.sh` che al momento è bloccato: rendiamolo eseguibile!",
    "instructions": "Cambiamo i permessi. Il file `deploy.sh` attualmente ha permessi limitati (644). Esegui `chmod 755 deploy.sh` per renderlo eseguibile dal proprietario e leggibile/eseguibile da tutti gli altri.",
    "commandHelp": [
      {
        "cmd": "chmod 755 deploy.sh",
        "desc": "Imposta i permessi dell'eseguibile"
      },
      {
        "cmd": "ls -l deploy.sh",
        "desc": "Controlla i permessi del file corrente"
      }
    ],
    "objectives": [
      {
        "id": "used_chmod",
        "text": "Esegui il comando \"chmod\" su deploy.sh"
      },
      {
        "id": "is_executable",
        "text": "Imposta i permessi di deploy.sh su 755"
      }
    ],
    "hints": [
      "Pensa a quale comando modifica i permessi dei file.",
      "Utilizza il comando 'chmod' con il codice di autorizzazione 755 su deploy.sh.",
      "Prova a eseguire: chmod 755 deploy.sh"
    ]
  },
  "19": {
    "title": "File e configurazioni nascosti",
    "description": "Pensa a un cassetto segreto sotto la scrivania dove conservi le impostazioni di sistema in modo che non ingombrano lo spazio di lavoro principale. In Linux creiamo file nascosti semplicemente iniziando i loro nomi con un punto (`.`).\n\n- Questi dotfile (come `.bashrc` o `.config`) memorizzano le preferenze dell'utente e le impostazioni di configurazione dietro le quinte.\n- Un comando standard `ls` non li mostrerà. Per dare un'occhiata a questi file nascosti, devi aggiungere il flag `-a` (tutti), eseguendo `ls -a`.\n\n**Perché è importante**: se esegui `ls` senza `-a`, i file nascosti (i cui nomi iniziano con `.`) vengono completamente omessi dall'output. Non vedrai file importanti come `.config_names` e potresti pensare che manchino. Il flag `-a` indica a `ls` di elencare tutti i file, compresi quelli nascosti.",
    "instructions": "Nascondiamo un file! Rinomina `unique_names.txt` nella tua cartella Inizio in un file nascosto denominato `.config_names` utilizzando `mv`, quindi rivelalo eseguendo `ls -a`.",
    "commandHelp": [
      {
        "cmd": "ls -a",
        "desc": "Elenca tutti i file, inclusi quelli nascosti"
      },
      {
        "cmd": "mv file .file",
        "desc": "Nascondi un file anteponendo al nome un punto"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "Usa \"mv\" per rinominare il file"
      },
      {
        "id": "hidden_file_exists",
        "text": "Crea il file nascosto \".config_names\" nella home"
      },
      {
        "id": "old_file_removed",
        "text": "Verifica che il file unique_names.txt originale sia stato rimosso"
      },
      {
        "id": "used_ls_a",
        "text": "Usa \"ls -a\" per verificare che il file nascosto sia presente"
      }
    ],
    "hints": [
      "In Linux, i file nascosti hanno il prefisso un punto (.) e mostrato utilizzando uno speciale flag ls.",
      "Usa mv unique_names.txt .config_names ed esegui ls -a per rivelarlo.",
      "Prova a eseguire: mv unique_names.txt .config_names seguito da ls -a"
    ]
  },
  "20": {
    "title": "Modifica della proprietà del file",
    "description": "Immagina di acquistare una casa e di dover registrare ufficialmente l'atto sotto il nome di un nuovo proprietario. In Linux, ogni file e cartella ha un proprietario ufficiale e un gruppo. Se devi cedere la proprietà di un file a qualcun altro (come l'amministratore di sistema), utilizza il comando `chown` (cambia proprietario).\n\n- Poiché modificare il proprietario di un file è un'azione di sicurezza delicata, è necessario prefissarlo con `sudo` per eseguirlo con privilegi amministrativi. Ad esempio, `sudo chown root reports.csv` assegna il file all'utente \"root\".",
    "instructions": "Trasferiamo la proprietà. Cambia il proprietario di `/home/learner/reports.csv` nell'amministratore `root` eseguendo `sudo chown root reports.csv`.",
    "commandHelp": [
      {
        "cmd": "sudo chown root reports.csv",
        "desc": "Cambia il proprietario di report.csv in root"
      }
    ],
    "objectives": [
      {
        "id": "used_chown",
        "text": "Esegui il comando \"chown\" con sudo"
      },
      {
        "id": "owner_changed",
        "text": "Imposta il proprietario di report.csv in root"
      }
    ],
    "hints": [
      "Pensa a quale comando modifica la proprietà del file e ricorda che richiede privilegi di amministratore.",
      "Usa il comando 'chown' con il prefisso 'sudo' per cambiare il proprietario in root.",
      "Prova a eseguire: sudo chown root report.csv"
    ]
  },
  "21": {
    "title": "Privilegi di superutente (sudo)",
    "description": "Immagina di lavorare sul tuo computer con un account standard per impedire l'eliminazione accidentale di file critici del sistema operativo. Quando è necessario installare software o modificare le impostazioni di sistema, il computer richiede l'autorizzazione dell'amministratore. In Linux utilizziamo `sudo` (abbreviazione di \"superuser do\") come chiave magnetica amministrativa.\n\n- L'utente `root` è l'account amministratore principale con il controllo completo sul sistema.\n- Agli utenti standard viene impedito di leggere file sensibili (come il database delle password `/etc/shadow`). Digitando `sudo` prima di un comando, lo esegui con poteri di amministratore temporanei per aggirare questi blocchi.",
    "instructions": "Testiamo i poteri del superutente. Esegui `cat /etc/shadow` per visualizzare l'errore di autorizzazione. Quindi ignoralo eseguendo il comando con privilegi di amministratore: `sudo cat /etc/shadow`.",
    "commandHelp": [
      {
        "cmd": "sudo command",
        "desc": "Esegui un comando con privilegi di amministratore/superutente"
      },
      {
        "cmd": "cat /etc/shadow",
        "desc": "Leggi il database degli hash delle password (limitato)"
      }
    ],
    "objectives": [
      {
        "id": "tried_without_sudo",
        "text": "Prova \"cat /etc/shadow\" e osserva l'errore di autorizzazione"
      },
      {
        "id": "ran_sudo_cat",
        "text": "Esegui \"sudo cat /etc/shadow\" con successo"
      }
    ],
    "hints": [
      "Sono necessari i privilegi di amministratore per leggere i file di sistema con restrizioni.",
      "Prima esegui cat /etc/shadow senza sudo per vedere l'errore, quindi anteponilo con sudo.",
      "Prova a eseguire: cat /etc/shadow e poi: sudo cat /etc/shadow"
    ]
  },
  "22": {
    "title": "Gestione dei pacchetti (apt)",
    "description": "Pensa ad installare app sul tuo smartphone utilizzando l'App Store o Google Play Store. È sicuro, curato e automatizzato. In Linux, utilizziamo un app store da riga di comando chiamato gestore di pacchetti per recuperare e installare il software in modo sicuro.\n\n- Sui sistemi Ubuntu/Debian, il gestore di pacchetti standard è `apt` (Advanced Packaging Tool).\n- L'installazione del software modifica le cartelle a livello di sistema, quindi è sempre necessario autorizzarlo utilizzando `sudo`. Ad esempio, `sudo apt install tree` scarica e installa il visualizzatore di directory \"albero\".",
    "instructions": "Installiamo un po' di software. Esegui `sudo apt install tree` per installare il programma `tree`. Al termine, esegui `tree` per visualizzare la tua cartella Inizio in un formato ordinato ad albero.",
    "commandHelp": [
      {
        "cmd": "sudo apt install tree",
        "desc": "Installa il pacchetto tree"
      },
      {
        "cmd": "tree",
        "desc": "Esegui tree per visualizzare le directory"
      }
    ],
    "objectives": [
      {
        "id": "installed_tree",
        "text": "Installa il pacchetto \"tree\" utilizzando apt install"
      },
      {
        "id": "ran_tree",
        "text": "Esegui il comando \"tree\" per visualizzare le directory"
      }
    ],
    "hints": [
      "Pensa a come installare i pacchetti su Ubuntu utilizzando il gestore pacchetti con privilegi di amministratore.",
      "Esegui sudo apt install tree, quindi visualizza le directory eseguendo il comando tree.",
      "Prova a eseguire: sudo apt install tree e poi tree"
    ]
  },
  "23": {
    "title": "Controllo dello spazio su disco (df)",
    "description": "Immagina di provare a scaricare un videogioco enorme e di ricevere un errore di \"memoria piena\", ma non sei sicuro di quale unità disco sia il collo di bottiglia. In Linux, controlliamo la capacità di archiviazione del nostro sistema utilizzando il comando `df` (disk free).\n\n- Il comando `df` visualizza lo spazio totale, utilizzato e disponibile su tutte le unità connesse.\n- Eseguendo `df -h` (aggiungendo il flag `-h` per \"leggibile dall'uomo\"), vedi lo spazio di archiviazione in gigabyte (G) e megabyte (M) invece di confondere i conteggi dei blocchi, rendendo facile individuare quale unità (come `/` o `/home`) è piena.\n\n**Perché è importante**: se esegui `df` senza `-h`, le dimensioni vengono visualizzate in numeri grezzi di blocchi da 1K (ad esempio, `49258284` invece di `47G`), che è estremamente difficile da leggere e calcolare per un essere umano. Il flag `-h` formatta queste dimensioni in gigabyte (G) e megabyte (M) a misura d'uomo.",
    "instructions": "Controlliamo la memoria del nostro sistema. Esegui `df -h` per vedere quanto spazio è rimasto sulle tue partizioni in un formato leggibile dall'uomo.",
    "commandHelp": [
      {
        "cmd": "df -h",
        "desc": "Mostra lo spazio libero su disco sui file system in formato leggibile dall'uomo"
      }
    ],
    "objectives": [
      {
        "id": "ran_df_h",
        "text": "Esegui il comando \"df -h\""
      }
    ],
    "hints": [
      "Pensa a quale comando mostra lo spazio libero su disco.",
      "Usa il comando 'df' con l'opzione leggibile.",
      "Prova a eseguire: df -h"
    ]
  },
  "24": {
    "title": "Trovare le dimensioni delle directory (du)",
    "description": "Una volta che sai *quale* unità è piena, come trovi la cartella specifica che sta accumulando tutto il tuo spazio? È la cartella dei download o forse qualche cache nascosta? Risolviamo questo mistero utilizzando il comando `du` (utilizzo del disco).\n\n- `du <directory>` elenca la dimensione di una cartella e di ogni sottocartella al suo interno.\n- `du -sh <directory>` (dove `-s` significa \"riepilogo\" e `-h` significa \"leggibile\") calcola e stampa un'unica dimensione totale pulita per quella cartella specifica.\n\n**Perché è importante**: se esegui `du` senza `-s`, verrà scaricato un enorme muro di testo che elenca ogni singola sottodirectory e file in modo ricorsivo, anziché fornire un singolo riepilogo. Il flag `-s` riepiloga la dimensione totale della cartella e `-h` la rende leggibile.",
    "instructions": "Rintracciamo i maiali di stoccaggio. Calcola la dimensione totale della directory home dello studente eseguendo `du -sh /home/learner`.",
    "commandHelp": [
      {
        "cmd": "du -sh /home/learner",
        "desc": "Visualizza la dimensione totale della directory home dello studente"
      }
    ],
    "objectives": [
      {
        "id": "ran_du",
        "text": "Esegui \"du\" con le opzioni -s e -h"
      }
    ],
    "hints": [
      "Pensa a quale comando controlla l'utilizzo del disco per le cartelle.",
      "Utilizza il comando 'du' con le opzioni di riepilogo (-s) e leggibili dall'uomo (-h).",
      "Prova a eseguire: du -sh /home/learner"
    ]
  },
  "25": {
    "title": "Controllo dell'utilizzo della memoria (free)",
    "description": "Immagina che il tuo laptop inizi a rallentare, le pagine Web si blocchino e il passaggio da un'app all'altra sia dolorosamente lento. Questo di solito significa che il tuo computer sta esaurendo la memoria attiva (RAM). In Linux, possiamo verificare quanto respiro ha il nostro sistema utilizzando il comando `free`.\n\n- Il comando `free` mostra la memoria fisica totale, utilizzata e disponibile (RAM) e lo spazio di swap.\n- L'aggiunta del flag `-h` (in esecuzione `free -h`) formatta le dimensioni della memoria in gigabyte (GB) e megabyte (MB) di facile lettura in modo da poter sapere se un programma sta consumando tutte le risorse.\n\n**Perché è importante**: se esegui `free` senza `-h`, l'utilizzo della memoria viene stampato in kilobyte grezzi (ad esempio, `16323456` invece di `16G`), il che è difficile da interpretare rapidamente. Il flag `-h` ridimensiona automaticamente i numeri in gigabyte (G) o megabyte (M) per una facile lettura.",
    "instructions": "Controlliamo la memoria del sistema. Controlla la RAM disponibile in formato leggibile eseguendo `free -h`.",
    "commandHelp": [
      {
        "cmd": "free -h",
        "desc": "Visualizza l'utilizzo della RAM in formato leggibile dall'uomo"
      }
    ],
    "objectives": [
      {
        "id": "ran_free",
        "text": "Esegui \"free\" con l'opzione -h o -m"
      }
    ],
    "hints": [
      "Pensa a quale comando visualizza le statistiche della memoria.",
      "Usa il comando 'free' con l'opzione leggibile dall'uomo.",
      "Prova a eseguire: free -h"
    ]
  },
  "26": {
    "title": "Tempo di attività del sistema e dettagli del kernel",
    "description": "Immagina di dover risolvere i problemi di un server che ha iniziato a comportarsi in modo anomalo e di dover sapere se si è riavviato di recente o di controllare esattamente quale versione del sistema operativo è in esecuzione. Possiamo interrogare questi dettagli del sistema in pochi secondi:\n\n- Il comando `uptime` ti dice esattamente da quanto tempo il tuo computer è in funzione dall'ultimo avvio, insieme a quanto è stato occupato (carico del sistema).\n- Il comando `uname -a` (nome unix) stampa un rapporto completo del kernel del sistema, del nome della piattaforma e dell'architettura della macchina.\n\n**Perché è importante**: se esegui `uname` senza `-a`, viene restituito solo il nome del sistema operativo di base (ad esempio, `Linux`). Tralascia dettagli critici come la versione del kernel, il nome della piattaforma e l'architettura del processore. Il flag `-a` stampa tutti i dettagli del sistema disponibili in un unico report.",
    "instructions": "Ispezioniamo le statistiche del sistema. Esegui `uptime` per verificare da quanto tempo il sistema è in esecuzione, quindi esegui `uname -a` per stampare i dettagli completi del kernel e della macchina.",
    "commandHelp": [
      {
        "cmd": "uptime",
        "desc": "Mostra da quanto tempo il sistema è in esecuzione"
      },
      {
        "cmd": "uname -a",
        "desc": "Stampa tutte le informazioni sul sistema e sul kernel"
      }
    ],
    "objectives": [
      {
        "id": "ran_uptime",
        "text": "Esegui il comando \"uptime\""
      },
      {
        "id": "ran_uname",
        "text": "Esegui il comando \"uname -a\""
      }
    ],
    "hints": [
      "È necessario eseguire due comandi: uno per l'uptime del sistema e uno per le informazioni sul kernel.",
      "Usa il comando 'uptime' e 'uname' con il flag -a.",
      "Prova a eseguire: uptime e poi: uname -a"
    ]
  },
  "27": {
    "title": "Elenco dei processi in esecuzione (ps)",
    "description": "Pensa al tuo sistema operativo come a un ufficio affollato in cui a ogni dipendente (o programma in esecuzione) viene assegnato un nome univoco chiamato ID processo (PID). In Linux chiamiamo questi programmi attivi **processi** e li elenchiamo utilizzando il comando `ps`.\n\n- L'esecuzione di `ps` da sola mostra solo i programmi in esecuzione nella finestra del terminale corrente.\n- L'esecuzione di `ps aux` agisce come un registro principale dell'ufficio, elencando ogni singolo programma attivo in esecuzione nell'intero sistema, chi lo ha avviato e quanta CPU e memoria sta utilizzando.\n\n**Perché è importante**: se esegui `ps` senza `aux`, vedrai solo i processi in esecuzione nella finestra del terminale corrente (di solito solo `bash` e `ps` stesso). Non vedrai servizi in background, processi di sistema o programmi eseguiti da altri utenti. Le opzioni `aux` rivelano tutti i processi in esecuzione a livello di sistema.",
    "instructions": "Controlliamo il registro. Esegui `ps aux` per elencare tutti i processi in esecuzione sul laptop e notare colonne come PID, %CPU e %MEM.",
    "commandHelp": [
      {
        "cmd": "ps aux",
        "desc": "Elenca tutti i processi in esecuzione sul sistema"
      }
    ],
    "objectives": [
      {
        "id": "ran_ps_aux",
        "text": "Esegui il comando \"ps aux\""
      }
    ],
    "hints": [
      "Pensa a quale comando elenca i processi e come elencare tutti i processi sul sistema.",
      "Usa il comando 'ps' con le opzioni aux.",
      "Prova a eseguire: ps aux"
    ]
  },
  "28": {
    "title": "Monitor interattivo dei processi (top)",
    "description": "Immagina di guardare una foto statica di un'autostrada invece di guardare il feed di una telecamera sul traffico in tempo reale. Mentre `ps` ti offre una rapida istantanea di ciò che è in esecuzione in questo momento, `top` ti consente di guardare le prestazioni del tuo sistema in tempo reale.\n\n- Il comando `top` avvia una dashboard interattiva in tempo reale che si aggiorna ogni pochi secondi. Visualizza l'utilizzo della CPU, le medie di carico e classifica dinamicamente i processi più pesanti in esecuzione in questo preciso momento.",
    "instructions": "Guardiamo la live. Avviare il monitor interattivo del processo eseguendo il comando `top`.",
    "commandHelp": [
      {
        "cmd": "top",
        "desc": "Avvia il monitor interattivo del processo"
      }
    ],
    "objectives": [
      {
        "id": "ran_top",
        "text": "Esegui il comando \"top\""
      }
    ],
    "hints": [
      "Pensa a quale comando avvia il monitor interattivo del processo.",
      "Usa il comando 'top' o 'htop'.",
      "Prova a correre: top"
    ]
  },
  "29": {
    "title": "Arresto dei processi non autorizzati (kill)",
    "description": "Immagina che un'app sul tuo telefono si blocchi, bloccando completamente lo schermo e che tu debba forzarne la chiusura per far funzionare di nuovo le cose senza intoppi. In Linux, interrompiamo il comportamento anomalo o blocchiamo i programmi utilizzando il comando `kill` seguito dall'ID processo (PID) del programma.\n\n- L'esecuzione di `kill 1234` invia una richiesta cortese chiedendo al programma di salvare il proprio lavoro e di chiudersi.\n- Se è bloccato e ignora la richiesta gentile, `kill -9 1234` forza il sistema operativo a spegnerlo immediatamente. Abbiamo un processo fuori controllo con PID `9999` che monopolizza tutta la nostra CPU: spegniamolo!",
    "instructions": "Fermiamo questo processo canaglia. Forza la chiusura del processo con PID `9999` eseguendo `kill 9999`.",
    "commandHelp": [
      {
        "cmd": "kill 9999",
        "desc": "Termina il processo con PID 9999"
      }
    ],
    "objectives": [
      {
        "id": "process_killed",
        "text": "Interrompe il processo canaglia con PID 9999"
      }
    ],
    "hints": [
      "Pensa a quale comando termina i processi in base al loro ID.",
      "Utilizza il comando 'kill' seguito dall'ID processo 9999.",
      "Prova a eseguire: kill 9999"
    ]
  },
  "30": {
    "title": "Esecuzione di lavori in background",
    "description": "Immagina di provare a copiare una cartella di grandi dimensioni su un'unità USB, ma mentre copia, vuoi continuare a lavorare e digitare altri comandi nella stessa finestra. In Linux, possiamo eseguire attività che richiedono molto tempo in \" background \" in modo che non blocchino la nostra riga di comando.\n\n- L'aggiunta di una e commerciale `&` alla fine di un comando (come `sleep 100 &`) indica al terminale di eseguirlo in background e di restituirti immediatamente il prompt.\n- Il comando `jobs` mostra ciò che è attualmente in esecuzione in background.\n- Il comando `fg` (in primo piano) riporta un'attività in background al centro della scena.",
    "instructions": "Facciamo più cose contemporaneamente. Esegui `sleep 100 &` per avviare un'attività in background, controllala con `jobs`, quindi riportala in primo piano eseguendo `fg`.",
    "commandHelp": [
      {
        "cmd": "sleep 100 &",
        "desc": "Esegui la sospensione in background"
      },
      {
        "cmd": "jobs",
        "desc": "Elenca i lavori in background"
      },
      {
        "cmd": "fg",
        "desc": "Porta il lavoro in background in primo piano"
      }
    ],
    "objectives": [
      {
        "id": "ran_bg_job",
        "text": "Esegue un comando di sospensione in background (&)"
      },
      {
        "id": "ran_jobs",
        "text": "Esegue il comando \"jobs\""
      },
      {
        "id": "ran_fg",
        "text": "Riporta il lavoro in primo piano con \"fg\""
      }
    ],
    "hints": [
      "Per eseguire un lavoro in background, aggiungi una e commerciale (&) al comando.",
      "Esegui sleep 100 in background, controlla con jobs e ripristina con fg.",
      "Prova a eseguire: sleep 100 & seguito da jobs e poi fg"
    ]
  },
  "31": {
    "title": "Testare la connettività (ping)",
    "description": "Immagina di provare a caricare una pagina web, ma il tuo browser gira all'infinito, lasciandoti a chiederti se il Wi-Fi di casa è disconnesso o se il sito web stesso si è bloccato. In Linux, testiamo la nostra connessione di rete di base utilizzando il comando `ping`.\n\n- Il comando `ping` invia piccoli pacchetti di dati a un server (come `google.com`) e misura quanti millisecondi sono necessari per ricevere una risposta.\n- Su Linux, `ping` continuerà a funzionare per sempre per impostazione predefinita. Per fermarlo dopo alcuni tentativi, utilizziamo il flag `-c` (conteggio), eseguendo `ping -c 3 google.com`.\n\n**Perché è importante**: se esegui `ping google.com` senza `-c`, continuerà a inviare pacchetti e a stampare output all'infinito. Dovrai interromperlo manualmente con `Ctrl+C` per eseguire qualsiasi altro comando. Il flag `-c 3` interrompe automaticamente il comando dopo aver inviato esattamente 3 pacchetti.",
    "instructions": "Controlliamo la nostra connettività. Metti alla prova la tua connessione a `google.com` inviando esattamente 3 pacchetti: `ping -c 3 google.com`.",
    "commandHelp": [
      {
        "cmd": "ping -c 3 google.com",
        "desc": "Invia 3 pacchetti echo a google.com"
      }
    ],
    "objectives": [
      {
        "id": "ran_ping_c3",
        "text": "Effettua il ping di google.com esattamente 3 volte utilizzando -c flag"
      }
    ],
    "hints": [
      "Pensa a quale comando invia i pacchetti echo ICMP per testare la connessione.",
      "Utilizza il ping con l'opzione di conteggio impostata su 3 per google.com.",
      "Prova a eseguire: ping -c 3 google.com"
    ]
  },
  "32": {
    "title": "Interfacce di rete e IP locale",
    "description": "Immagina di configurare una stampante di rete o condividere file con il computer di un amico sullo stesso Wi-Fi e di dover conoscere l'indirizzo IP locale della tua macchina. In Linux, controlliamo l'hardware e gli IP della nostra rete utilizzando il comando `ip`.\n\n- L'esecuzione di `ip addr` (o semplicemente `ip a`) stampa un elenco di tutti i dispositivi di interfaccia di rete (come `eth0` per Ethernet cablata o `wlan0` per wireless) insieme agli indirizzi IP locali assegnati.",
    "instructions": "Ispezioniamo la configurazione della nostra rete. Visualizza tutte le interfacce di rete locale e gli indirizzi IP eseguendo `ip addr`.",
    "commandHelp": [
      {
        "cmd": "ip addr",
        "desc": "Mostra i dettagli dell'interfaccia di rete e gli indirizzi IP"
      }
    ],
    "objectives": [
      {
        "id": "ran_ip_addr",
        "text": "Esegui il comando \"ip addr\" o \"ip a\""
      }
    ],
    "hints": [
      "Pensa a quale comando mostra le configurazioni dell'interfaccia di rete.",
      "Usa il comando 'ip' con l'indirizzo o un argomento.",
      "Prova a eseguire: ip addr"
    ]
  },
  "33": {
    "title": "Download di file Web (curl)",
    "description": "Immagina di voler scaricare un file o prendere il codice di uno script di installazione direttamente da un server web senza aprire un browser e fare clic sul pulsante \"Download\". In Linux, recuperiamo i dati web utilizzando `curl` (abbreviazione di \"URL cliente\").\n\n- L'esecuzione di `curl <url>` scarica il contenuto della pagina e lo stampa direttamente sullo schermo.\n- Per salvare il contenuto scaricato come file invece di visualizzarlo, lo abbiniamo al reindirizzamento `>` o al flag di output `-o`.",
    "instructions": "Scarichiamo uno script. Recupera il file in `http://api.bashquest.com/update.sh` e salvalo localmente come `update.sh` eseguendo `curl http://api.bashquest.com/update.sh > update.sh`.",
    "commandHelp": [
      {
        "cmd": "curl http://api.bashquest.com/update.sh > update.sh",
        "desc": "Scarica il contenuto della pagina web e salvalo in update.sh"
      }
    ],
    "objectives": [
      {
        "id": "used_curl",
        "text": "Usa il comando \"curl\""
      },
      {
        "id": "download_saved",
        "text": "Salva lo script scaricato come \"update.sh\" nella cartella home"
      }
    ],
    "hints": [
      "Pensa a quale comando scarica i file web e come reindirizzarlo a un file.",
      "Usa curl per scaricare il file e reindirizzalo '>' per salvarlo come update.sh.",
      "Prova a eseguire: curl http://api.bashquest.com/update.sh > update.sh"
    ]
  },
  "34": {
    "title": "Trovare file per nome (find)",
    "description": "Immagina di smarrire un importante file di testo da qualche parte nella tua cartella utente e di dover cercare tra dozzine di directory nidificate una per una. In Linux, evitiamo la ricerca manuale utilizzando l'utilità `find` come motore di ricerca velocissimo a livello di sistema.\n\n- Il comando `find` effettua la ricerca negli alberi di directory in base a nome, dimensione, tipo o data.\n- La sintassi è `find <where> -name \"<pattern>\"`. Ad esempio, `find . -name \"*.txt\"` cerca nella directory corrente e in tutte le sottocartelle i file che terminano con `.txt`.\n\n**Perché è importante**: se esegui `find . \"*.log\"` senza `-name`, riceverai l'errore: `find: paths must precede expression: '*.log'`. Il flag `-name` è necessario per specificare che il modello successivo deve essere confrontato con i nomi dei file.",
    "instructions": "Rintracciamo alcuni file. Cerca nella directory corrente e nelle relative sottocartelle eventuali file con estensione `.log` eseguendo `find . -name \"*.log\"`.",
    "commandHelp": [
      {
        "cmd": "find . -name \"*.log\"",
        "desc": "Trova tutti i file che terminano con .log nella cartella corrente e nelle sottocartelle"
      }
    ],
    "objectives": [
      {
        "id": "ran_find",
        "text": "Esegui il comando \"find\" con l'opzione -name"
      }
    ],
    "hints": [
      "Pensa a quale comando trova i file in modo ricorsivo in base al nome che corrisponde a un modello.",
      "Utilizza trova nella directory corrente (.) con il modello di nome '*.log'.",
      "Prova a eseguire: find . -nome \"*.log\""
    ]
  },
  "35": {
    "title": "Controllo della cronologia dei comandi",
    "description": "Immagina di aver digitato un comando diagnostico di rete lungo e complesso dieci minuti fa e ora devi eseguirlo di nuovo, ma non ricordi le opzioni esatte o la sintassi. Invece di grattarti la testa o scriverlo dappertutto, Linux lo ricorda per te!\n\n- Il comando `history` visualizza un elenco numerato di tutti i comandi che hai eseguito di recente.\n- Puoi rieseguire rapidamente qualsiasi elemento digitando un punto esclamativo seguito dal numero dell'elenco (come `!42` per rieseguire il comando n. 42).",
    "instructions": "Controlliamo gli archivi. Esegui `history` per visualizzare l'elenco dei comandi eseguiti in questa sessione.",
    "commandHelp": [
      {
        "cmd": "history",
        "desc": "Visualizza un elenco dei comandi eseguiti di recente"
      }
    ],
    "objectives": [
      {
        "id": "ran_history",
        "text": "Esegui il comando \"history\""
      }
    ],
    "hints": [
      "Pensa a quale comando elenca i comandi eseguiti di recente.",
      "Usa il comando 'storia'.",
      "Prova a eseguire: history"
    ]
  },
  "36": {
    "title": "Pagine del manuale di consultazione",
    "description": "Immagina di provare a utilizzare un nuovo comando, ma non sei sicuro di quali flag supporta o di come dovrebbero essere formattati i suoi input. Invece di cercare online, Linux ha un manuale utente ufficiale e completo integrato direttamente nel terminale!\n\n- Il comando `man` (manuale) seguito da qualsiasi nome di utilità (ad esempio, `man ls`) apre una guida di riferimento dettagliata.\n- All'interno della guida, scorri con i tasti freccia, cerca con \"/\", e premi `q` per chiudere il manuale e tornare al prompt.",
    "instructions": "Consultiamo i documenti. Apri la pagina manuale integrata per il comando `grep` eseguendo `man grep`.",
    "commandHelp": [
      {
        "cmd": "man grep",
        "desc": "Visualizza la pagina man per grep"
      }
    ],
    "objectives": [
      {
        "id": "ran_man_grep",
        "text": "Esegui il comando \"man grep\""
      }
    ],
    "hints": [
      "Pensa a quale comando visualizza il manuale di riferimento del sistema integrato.",
      "Usa il comando 'man' seguito dal nome del comando che vuoi cercare.",
      "Prova a eseguire: man grep"
    ]
  },
  "37": {
    "title": "Controllo dei servizi (systemctl)",
    "description": "Immagina di ospitare un sito Web sul tuo computer, ma i visitatori ricevono un errore \"impossibile raggiungere il sito\" perché il programma del server Web in background non è in esecuzione. In Linux, i processi in background che si avviano automaticamente e vengono eseguiti in background (come database, firewall o server Web) sono chiamati **servizi** e li gestiamo utilizzando `systemctl`.\n\n- Il comando `systemctl status <service>` controlla se un servizio è attivo o arrestato.\n- Poiché l'avvio o l'arresto di un servizio influisce su tutti gli utenti e sulla sicurezza del sistema, è necessario utilizzare `sudo` per eseguire comandi come `sudo systemctl start <service>` o `sudo systemctl stop <service>`.",
    "instructions": "Avviamo un server web. Il servizio del server web `apache2` è attualmente interrotto. Avvialo eseguendo `sudo systemctl start apache2` e verifica che sia in esecuzione con `systemctl status apache2`.",
    "commandHelp": [
      {
        "cmd": "systemctl status apache2",
        "desc": "Controlla lo stato del servizio web apache2"
      },
      {
        "cmd": "sudo systemctl start apache2",
        "desc": "Avvia il servizio web apache2"
      }
    ],
    "objectives": [
      {
        "id": "started_service",
        "text": "Avvia il servizio web \"apache2\""
      },
      {
        "id": "checked_status",
        "text": "Controlla lo stato di \"apache2\""
      }
    ],
    "hints": [
      "È necessario controllare lo stato di apache2 e avviarlo.",
      "Usa systemctl status apache2 e ricorda che l'avvio dei servizi richiede privilegi di amministratore (sudo).",
      "Prova a eseguire: sudo systemctl start apache2 e poi systemctl status apache2"
    ]
  },
  "38": {
    "title": "Modifica dei file di configurazione (nano)",
    "description": "Immagina di accedere tramite SSH a un server cloud remoto in cui non disponi di un desktop grafico o di un cursore e devi correggere rapidamente una riga in un file di configurazione. In questi scenari, è necessario utilizzare un editor di testo del terminale come `nano`.\n\n- L'esecuzione di `nano <filename>` carica un editor di testo semplice e leggero direttamente nella finestra della shell.\n- Le scorciatoie vengono sempre visualizzate nella parte inferiore dello schermo: premi `Ctrl+O` per scrivere (salvare) le modifiche e `Ctrl+X` per uscire dall'editor.",
    "instructions": "Modifichiamo un file di configurazione. Apri `server.conf` nella tua directory home utilizzando `nano server.conf`, aggiungi una riga che legge `port=8080`, quindi salva ed esci dall'editor.",
    "commandHelp": [
      {
        "cmd": "nano server.conf",
        "desc": "Apri server.conf nell'editor di testo Nano"
      }
    ],
    "objectives": [
      {
        "id": "opened_nano",
        "text": "Apri il file \"server.conf\" in Nano"
      },
      {
        "id": "port_configured",
        "text": "Aggiungi la riga di configurazione \"port=8080\" e salva"
      }
    ],
    "hints": [
      "Pensa a quale editor di testo basato su terminale ti chiedono di utilizzare le istruzioni.",
      "Esegui nano server.conf, scrivi 'port=8080' all'interno, quindi salva con Ctrl+O ed esci con Ctrl+X.",
      "Prova a eseguire: nano server.conf"
    ]
  },
  "39": {
    "title": "Scrivere il tuo primo script Bash",
    "description": "Immagina di avere un elenco di 20 attività che devi eseguire ogni singola mattina. Scriverli manualmente è noioso e lascia spazio a errori di battitura. In Linux, raggruppiamo i comandi in un file chiamato script di shell in modo da poterli eseguire tutti in una volta!\n\n- Ogni script inizia con uno \"shebang\" (`#!/bin/bash`) sulla prima riga per indicare al sistema quale interprete shell utilizzare per eseguire il file.\n- Dopo aver salvato lo script, lo rendi eseguibile concedendogli l'autorizzazione di esecuzione tramite `chmod 755 script.sh` e quindi eseguendolo con `./script.sh`.",
    "instructions": "Automatizziamo! Crea un file denominato `hello.sh` nella tua cartella home. Scrivi `#!/bin/bash` sulla prima riga e `echo \"Hello, BashQuest User!\"` sulla seconda. Concedigli le autorizzazioni di esecuzione con `chmod 755 hello.sh` ed eseguilo utilizzando `./hello.sh`.",
    "commandHelp": [
      {
        "cmd": "touch hello.sh",
        "desc": "Crea file di script"
      },
      {
        "cmd": "chmod 755 hello.sh",
        "desc": "Concede i permessi di esecuzione"
      },
      {
        "cmd": "./hello.sh",
        "desc": "Esegue lo script nella directory corrente"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Crea il file di script \"hello.sh\""
      },
      {
        "id": "script_content",
        "text": "Aggiungi shebang e il messaggio di saluto all'interno dello script"
      },
      {
        "id": "script_executable",
        "text": "Rendi eseguibile lo script (permessi con cifre dispari)"
      },
      {
        "id": "script_executed",
        "text": "Esegui lo script utilizzando \"./hello.sh\""
      }
    ],
    "hints": [
      "Crea il file, aggiungi shebang e ciao messaggio, renderlo eseguibile ed eseguirlo.",
      "Usa touch hello.sh, modificalo per contenere #!/bin/bash e il messaggio ciao, quindi chmod 755 hello.sh ed esegui ./hello.sh.",
      "Prova a eseguire: tocca hello.sh, scrivi il contenuto, chmod 755 hello.sh ed esegui con ./hello.sh"
    ]
  },
  "40": {
    "title": "Variabili e argomenti ($1)",
    "description": "Immagina di creare un messaggio di benvenuto personalizzato per un sito web. Non vorrai scrivere uno script separato per il nome di ogni singolo cliente! Invece, scrivi uno script che accetta un nome come input quando lo esegui.\n\n- Negli script bash, variabili come `$1`, `$2` e così via contengono gli \"argomenti\" o gli input che passi alla riga di comando.\n- Ad esempio, l'esecuzione di `./greet.sh Alice` significa che `$1` all'interno dello script conterrà automaticamente il testo \"Alice\". Allo stesso modo, `$#` tiene traccia di quanti input ha fornito l'utente.",
    "instructions": "Costruiamo uno script dinamico. Crea `greet.sh` nella tua home directory con lo shebang e la riga `echo \"Hello, $1!\"`. Rendilo eseguibile ed esegui `./greet.sh Alice` per testarlo.",
    "commandHelp": [
      {
        "cmd": "./greet.sh Alice",
        "desc": "Esegui lo script con argomento \"Alice\""
      }
    ],
    "objectives": [
      {
        "id": "greet_exists",
        "text": "Crea il file di script \"greet.sh\""
      },
      {
        "id": "greet_content",
        "text": "Usa $1 all'interno di greet.sh"
      },
      {
        "id": "greet_executable",
        "text": "Rendi eseguibile greet.sh"
      },
      {
        "id": "greet_executed",
        "text": "Esegui lo script con argomento \"Alice\""
      }
    ],
    "hints": [
      "Crea uno script chiamato greet.sh, usa $1 per salutare il primo argomento, rendilo eseguibile ed eseguilo con \"Alice\".",
      "Usa echo 'Ciao, $1!' all'interno dello script, chmod 755 greet.sh, quindi esegui ./greet.sh Alice.",
      "Prova a eseguire: tocca greet.sh, aggiungi shebang ed echo 'Hello, $1!', chmod 755 greet.sh e ./greet.sh Alice"
    ]
  },
  "41": {
    "title": "Logica condizionale (if/else)",
    "description": "Immagina di creare uno script che elabori un report CSV, ma si blocca se il file di report non esiste effettivamente sul disco. Per prevenire errori, scriviamo script che prendono decisioni utilizzando la logica condizionale `if/else`.\n\n- Controlliamo le condizioni utilizzando parentesi: `if [ -f \"$1\" ]; then ... fi`.\n- Il flag `-f` controlla se un percorso punta a un file, mentre `-d` controlla se si tratta di una directory. Lo script ramifica le sue azioni a seconda che la condizione risulti vera o falsa.",
    "instructions": "Aggiungiamo la logica decisionale. Crea `check_file.sh` nella tua directory home che controlla se il nome file passato come `$1` esiste (utilizzando `if [ -f \"$1\" ]; then echo \"Exists\" else echo \"Missing\" fi`). Rendilo eseguibile e testalo su `names.txt`.",
    "commandHelp": [
      {
        "cmd": "if [ -f file ]; then ...",
        "desc": "Sintassi per i controlli di esistenza dei file"
      }
    ],
    "objectives": [
      {
        "id": "check_exists",
        "text": "Crea lo script \"check_file.sh\""
      },
      {
        "id": "check_logic",
        "text": "Implementa i controlli -f all'interno dello script"
      },
      {
        "id": "check_executable",
        "text": "Rendi eseguibile lo script"
      },
      {
        "id": "check_executed",
        "text": "Esegui lo script con \"names.txt\""
      }
    ],
    "hints": [
      "Crea check_file.sh, implementa una condizione per verificare se l'argomento del nome file esiste, rendilo eseguibile ed eseguilo.",
      "Usa 'if [ -f \"$1\" ]; quindi echo \"Esiste\" altrimenti echo \"Mancante\" fi' all'interno di check_file.sh, rendilo eseguibile ed eseguilo con nomi.txt.",
      "Prova a eseguire: tocca check_file.sh, scrivi la logica di controllo del file, chmod 755 ed esegui ./check_file.shnames.txt"
    ]
  },
  "42": {
    "title": "Automatizzare con i loop",
    "description": "Immagina di avere una cartella di 100 file di registro e di dover fare una copia di backup di ognuno di essi. Copiarli singolarmente sarebbe estenuante. In Linux, utilizziamo i cicli `for` per ripetere automaticamente la stessa azione su un intero elenco di elementi!\n\n- Un ciclo `for` (come `for file in *.txt; do ... done`) esegue un'iterazione su ogni elemento che corrisponde a un modello, elaborandoli uno dopo l'altro in una frazione di secondo.",
    "instructions": "Automatizziamo i backup. Crea uno script denominato `backup_logs.sh`. Chiedigli di creare una directory denominata `backup` (utilizzando `mkdir -p backup`), quindi utilizza un ciclo `for` per copiare tutti i file `.log` nella cartella corrente in `backup`. Rendilo eseguibile ed eseguilo.",
    "commandHelp": [
      {
        "cmd": "for x in pattern; do ...",
        "desc": "Sintassi di automazione del ciclo for"
      }
    ],
    "objectives": [
      {
        "id": "backup_script_exists",
        "text": "Crea script \"backup_logs.sh\""
      },
      {
        "id": "backup_logic",
        "text": "Implementa un ciclo for con cp"
      },
      {
        "id": "backup_executed",
        "text": "Esegui lo script backup_logs.sh"
      },
      {
        "id": "backup_dir_ok",
        "text": "La directory \"backup/\" contiene copie"
      }
    ],
    "hints": [
      "Crea backup_logs.sh, crea una cartella di backup, usa un ciclo for per copiare tutti i file .log ed eseguilo.",
      "Usa mkdir -p backup, quindi 'for file in *.log; esegui il backup cp \"$file\"/; done' in backup_logs.sh ed eseguirlo.",
      "Prova a eseguire: tocca backup_logs.sh, scrivi il loop all'interno, rendilo eseguibile ed esegui ./backup_logs.sh"
    ]
  },
  "43": {
    "title": "Modifica del flusso con sed",
    "description": "Immagina di avere un enorme file di dump del database e di dover sostituire tutte le occorrenze di un vecchio indirizzo IP del server con uno nuovo. Aprirlo in un editor potrebbe bloccare il computer. In Linux, modifichiamo al volo i flussi di testo utilizzando `sed` (abbreviazione di \"stream editor\").\n\n- La sintassi di base è `sed \"s/old/new/g\" file.txt` per trovare e sostituire il testo.\n- L'aggiunta del flag `-i` (sul posto) salva le sostituzioni direttamente nel file stesso, anziché limitarsi a stampare il testo modificato sullo schermo.\n\n**Perché è importante**: se esegui `sed \"s/port=80/port=8080/g\" server.conf` senza `-i`, verrà stampato solo il testo modificato sullo schermo del terminale. Il file vero e proprio rimane completamente invariato. Il flag `-i` (sul posto) è necessario per salvare le modifiche direttamente nel file.",
    "instructions": "Aggiorniamo un'impostazione. Modifica `server.conf` nella tua cartella Home. Cambia `port=80` in `port=8080` sul posto eseguendo `sed -i \"s/port=80/port=8080/g\" server.conf`.",
    "commandHelp": [
      {
        "cmd": "sed -i \"s/old/new/g\" file",
        "desc": "Esegue la sostituzione del testo sul posto in un file"
      }
    ],
    "objectives": [
      {
        "id": "used_sed",
        "text": "Usa il comando \"sed\" con il flag -i"
      },
      {
        "id": "port_changed",
        "text": "Imposta la configurazione della porta su port=8080 in server.conf"
      }
    ],
    "hints": [
      "Pensa a quale comando esegue la modifica dello streaming e la sostituzione della ricerca.",
      "Utilizzare sed con l'opzione sul posto (-i) per sostituire 'port=80' con 'port=8080'.",
      "Prova a eseguire: sed -i \"s/port=80/port=8080/g\" server.conf"
    ]
  },
  "44": {
    "title": "Estrazione dati con awk",
    "description": "Immagina di ricevere un grande foglio di calcolo salvato come testo semplice, in cui le colonne sono separate da virgole o spazi e devi estrarre solo la primissima colonna di dati. In Linux, analizziamo colonne di testo strutturate utilizzando il potente linguaggio `awk`.\n\n- Per impostazione predefinita, `awk` divide le righe in base agli spazi, assegnando la colonna 1 a `$1`, la colonna 2 a `$2` e così via.\n- Il flag `-F` ti consente di specificare un separatore personalizzato (come `-F:` per i due punti). Ad esempio, `awk -F: '{print $1}' /etc/passwd` estrae solo i nomi utente da un elenco separato da due punti.\n\n**Perché è importante**: se esegui `awk '{print $1}' /etc/shadow` senza `-F:`, `awk` dividerà le righe in base agli spazi bianchi (impostazione predefinita) anziché ai due punti. Poiché le righe del file shadow non hanno spazi, l'intera riga viene trattata come un singolo campo, stampando i dettagli completi dell'hash di ogni utente. Il flag `-F:` impone invece a `awk` di dividere le colonne in base ai due punti.",
    "instructions": "Estraiamo alcuni dati. Recupera tutti i nomi utente (la prima colonna) da `/etc/shadow` utilizzando `awk` con i due punti `:` separatore e salvali in `shadow_users.txt` utilizzando `sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt`.",
    "commandHelp": [
      {
        "cmd": "awk -F: '{print $1}' file",
        "desc": "Stampa il primo campo del file delimitato da due punti"
      }
    ],
    "objectives": [
      {
        "id": "used_awk",
        "text": "Usa \"awk\" con il flag separatore di campo -F"
      },
      {
        "id": "created_shadow_users",
        "text": "Invia i nomi a \"shadow_users.txt\""
      },
      {
        "id": "correct_shadow_users",
        "text": "Controlla che shadow_users.txt abbia root e learner"
      }
    ],
    "hints": [
      "Pensa a quale comando divide le colonne di dati utilizzando un separatore di campo personalizzato.",
      "Usa awk con -F: per stampare la prima colonna ($1) di /etc/shadow con sudo e reindirizzare l'output a shadow_users.txt.",
      "Prova a eseguire: sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt"
    ]
  },
  "45": {
    "title": "Traduzione e taglio dei dati",
    "description": "Immagina di lavorare con un foglio di calcolo CSV con date e nomi di transazioni. Vuoi estrarre solo la prima colonna (date) e convertire tutto il testo in lettere maiuscole per coerenza. In Linux, possiamo combinare strumenti di analisi leggeri in una pipeline:\n\n- Il comando `cut` ritaglia colonne specifiche dal testo strutturato. Ad esempio, `cut -d, -f1` divide le righe in virgole (`-d,`) ed estrae la prima colonna (`-f1`).\n- Il comando `tr` (traduci) trasforma i caratteri dall'input standard, come scambiare caratteri minuscoli con maiuscoli (`tr \"a-z\" \"A-Z\"`).\n\n**Perché è importante**: se esegui `cut reports.csv` senza `-d,` e `-f1`, otterrai: `cut: you must specify a list of bytes, characters, or fields`. Se specifichi `-f1` ma ometti `-d,`, per impostazione predefinita viene utilizzato il tabulazioni, il che significa che non dividerà un file CSV e stamperà semplicemente l'intera riga. Il flag `-d,` definisce la virgola come separatore di colonna e `-f1` gli dice di estrarre solo la prima colonna.",
    "instructions": "Suddividiamo e trasformiamo i dati. Estrai la prima colonna di `reports.csv` utilizzando `cut -d, -f1 reports.csv`, inseriscila in `tr \"a-z\" \"A-Z\"` per renderla maiuscola e reindirizza il risultato finale a `upper_reports.txt`.",
    "commandHelp": [
      {
        "cmd": "cut -d, -f1 file | tr \"a-z\" \"A-Z\"",
        "desc": "Collega il campo tagliato nella traduzione"
      }
    ],
    "objectives": [
      {
        "id": "used_cut",
        "text": "Usa \"taglia\" con delimitatore virgola"
      },
      {
        "id": "used_tr",
        "text": "Traduci i caratteri in maiuscolo con \"tr\""
      },
      {
        "id": "upper_reports_exists",
        "text": "Crea il file \"upper_reports.txt\""
      },
      {
        "id": "content_uppercase",
        "text": "Verifica che il testo sia MAIUSCOLO"
      }
    ],
    "hints": [
      "È necessario suddividere report.csv per estrarre la prima colonna, convertirla in maiuscolo e salvarla.",
      "Usa cut -d, -f1 reports.csv, collegalo (|) a tr \"a-z\" \"A-Z\" e reindirizza (>) a upper_reports.txt.",
      "Prova a eseguire: cut -d, -f1 report.csv | tr \"a-z\" \"A-Z\" > upper_reports.txt"
    ]
  },
  "46": {
    "title": "Gestione delle variabili d'ambiente",
    "description": "Immagina di distribuire un'applicazione Web e di dover sapere se eseguire in un sandbox locale di \"sviluppo\" sicuro o connettersi al database di \"produzione\" live. In Linux, passiamo configurazioni come questa ai programmi in esecuzione utilizzando **variabili d'ambiente**.\n\n- Usiamo il comando `export` per definire una variabile in modo che qualsiasi programma avviato dalla nostra shell possa leggerla. Ad esempio, `export APP_ENV=production`.\n- Per verificare o visualizzare il valore di una variabile, anteponiamo al suo nome il simbolo del dollaro: `echo $APP_ENV`.",
    "instructions": "Configuriamo l'ambiente. Imposta ed esporta una variabile denominata `APP_ENV` con il valore `production` eseguendo `export APP_ENV=production`, quindi verificala eseguendo `echo $APP_ENV`.",
    "commandHelp": [
      {
        "cmd": "export VAR=val",
        "desc": "Definisci la variabile di ambiente"
      },
      {
        "cmd": "echo $VAR",
        "desc": "Stampa il valore della variabile"
      }
    ],
    "objectives": [
      {
        "id": "exported_env",
        "text": "Esegui il comando \"esporta\""
      },
      {
        "id": "env_correct",
        "text": "Imposta la variabile di ambiente APP_ENV su \"produzione\""
      },
      {
        "id": "echoed_env",
        "text": "Stampa la variabile utilizzando \"echo $APP_ENV\""
      }
    ],
    "hints": [
      "Pensa a quale comando definisce le variabili di ambiente.",
      "Usa export APP_ENV=production e stampalo usando echo $APP_ENV.",
      "Prova a eseguire: export APP_ENV=produzione seguito da echo $APP_ENV"
    ]
  },
  "47": {
    "title": "Archivi e compressione (tar)",
    "description": "Immagina di avere una cartella contenente 500 registri del server e di volerla inviare via email a un collega o eseguirne il backup nell'archivio cloud. L'invio di 500 file singoli è lento e inefficiente. In Linux, li comprimiamo in un unico file compatto simile a zip utilizzando `tar` (abbreviazione di \"archivio su nastro\").\n\n- Creiamo archivi compressi utilizzando i flag: `-c` (crea), `-z` (comprimi con gzip), `-v` (elenco dettagliato dei file) e `-f` (specifica il nome del file). Ad esempio, `tar -czvf backup.tar.gz folder/` raggruppa e comprime la directory.\n\n**Perché è importante**: se esegui `tar -cz logs.tar.gz logs` senza `-f`, otterrai: `tar: Refusing to write archive contents to terminal`. Il flag `-f` è fondamentale perché indica a `tar` di scrivere l'output in un file invece di inviare dati di archivio binario grezzi direttamente al terminale. I flag `-c` e `-z` sono inoltre necessari rispettivamente per creare e comprimere l'archivio.",
    "instructions": "Impacchettiamo i nostri log. Raggruppa e comprimi la cartella `logs` all'interno di `/home/learner` in un file denominato `logs.tar.gz` eseguendo `tar -czvf logs.tar.gz logs`.",
    "commandHelp": [
      {
        "cmd": "tar -czvf archive.tar.gz folder",
        "desc": "Crea un archivio tar compresso"
      }
    ],
    "objectives": [
      {
        "id": "used_tar_c",
        "text": "Usa il comando \"tar\" con i flag -c (crea) e -z (gzip)"
      },
      {
        "id": "archive_exists",
        "text": "Crea \"logs.tar.gz\" nella directory home"
      }
    ],
    "hints": [
      "Pensa a quale comando pacchettizza e comprime le cartelle negli archivi tarball.",
      "Usa tar con le opzioni create (-c), gzip (-z), verbose (-v) e file (-f).",
      "Prova a eseguire: tar -czvf logs.tar.gz logs"
    ]
  },
  "48": {
    "title": "Ispezione dell'ambiente",
    "description": "Immagina di provare a eseguire il debug di uno script che continua a fallire perché non riesce a trovare il percorso di un programma o di voler vedere quale account utente è attivo in questo terminale. In Linux, tutte queste configurazioni a livello di sessione vengono archiviate insieme.\n\n- Il comando `env` stampa una directory completa di tutte le variabili di ambiente attualmente caricate nella sessione attiva, consentendoti di verificare le configurazioni in una volta sola.",
    "instructions": "Esaminiamo l'elenco degli ambienti. Stampa tutte le variabili di ambiente attive nella sessione del terminale eseguendo il comando `env`.",
    "commandHelp": [
      {
        "cmd": "env",
        "desc": "Elenca le variabili d'ambiente attive"
      }
    ],
    "objectives": [
      {
        "id": "ran_env",
        "text": "Esegui il comando \"env\""
      }
    ],
    "hints": [
      "Pensa a quale comando stampa tutte le variabili d'ambiente attive.",
      "Usa il comando 'env'.",
      "Prova a eseguire: env"
    ]
  },
  "49": {
    "title": "Creazione di collegamenti (ln -s)",
    "description": "Immagina di avere un file di configurazione sepolto in una cartella nidificata, ad esempio `/var/www/html/configs/app/settings.conf`, ma devi modificarlo costantemente. Invece di digitare ogni volta il lungo percorso della cartella, vuoi un rapido collegamento sul desktop. In Linux, lo facciamo creando collegamenti.\n\n- **Hard Link**: un clone diretto che punta ai dati del file non elaborato. Se elimini il file originale, il collegamento continua a funzionare.\n- **Link simbolico (Soft Link)**: un collegamento basato sul percorso (proprio come i collegamenti di Windows). Se elimini il file originale, il collegamento si interrompe. Li creiamo utilizzando `ln -s target link_name`.\n\n**Perché è importante**: se esegui `ln logs/app.log app_link.log` senza `-s`, creerai un collegamento reale invece di un collegamento simbolico. Se i file risiedono su partizioni del disco diverse, otterrai: `ln: failed to create hard link: Invalid cross-device link`. Il flag `-s` crea un collegamento simbolico flessibile (scorciatoia) che funziona su diverse unità e directory.",
    "instructions": "Creiamo una scorciatoia. Crea un collegamento simbolico denominato `app_link.log` in `/home/learner` che punta al file di destinazione `logs/app.log` eseguendo `ln -s logs/app.log app_link.log`.",
    "commandHelp": [
      {
        "cmd": "ln -s target link_name",
        "desc": "Crea collegamento simbolico"
      }
    ],
    "objectives": [
      {
        "id": "used_ln_s",
        "text": "Usa \"ln\" con flag simbolico -s"
      },
      {
        "id": "link_created",
        "text": "Crea collegamento \"app_link.log\" che punta a logs/app.log di destinazione"
      }
    ],
    "hints": [
      "Pensa a quale comando crea collegamenti/collegamenti ai file.",
      "Utilizzare 'ln -s' con il percorso di destinazione seguito dal nome del collegamento.",
      "Prova a eseguire: ln -s logs/app.log app_link.log"
    ]
  },
  "50": {
    "title": "Elaborazione dei risultati della ricerca (xargs)",
    "description": "Immagina di aver eseguito una ricerca che ha restituito 100 file temporanei e ora di volerli eliminare tutti. L'output della ricerca è solo un elenco di nomi di testo sullo schermo: come inserisci questi nomi come input diretti al comando Elimina? In Linux, colmiamo questa lacuna utilizzando `xargs`.\n\n- Il comando `xargs` (esegui argomenti) prende righe di input standard (come l'elenco dei file da `find`) e le fornisce una per una come argomenti a un altro comando.\n- Ad esempio, `find . -name \"*.tmp\" | xargs rm` trova tutti i file temporanei e li rimuove tutti in un unico passaggio.",
    "instructions": "Elaboriamo alcuni risultati di ricerca. Trova tutti i file `.log` in `/home/learner/logs` utilizzando `find logs -name \"*.log\"` e collegali a `xargs wc -l` per contare tutte le righe insieme.",
    "commandHelp": [
      {
        "cmd": "find path -name \"pattern\" | xargs command",
        "desc": "Passa i risultati della ricerca al comando"
      }
    ],
    "objectives": [
      {
        "id": "used_find",
        "text": "Esegui il comando \"find\" sulla cartella dei log"
      },
      {
        "id": "used_xargs",
        "text": "Collega i risultati a \"xargs\""
      },
      {
        "id": "ran_wc_l",
        "text": "Esegui \"wc -l\" tramite la pipeline xargs"
      }
    ],
    "hints": [
      "Cerca tutti i file di registro e collega i nomi a wc -l utilizzando xargs.",
      "Usa find logs -name \"*.log\" e collegalo (|) a xargs wc -l.",
      "Prova a eseguire: find logs -name \"*.log\" | xargs wc -l"
    ]
  },
  "51": {
    "title": "Sbirciare i file (head & tail)",
    "description": "Ora che puoi leggere un intero file con `cat`, cosa succede se il file ha migliaia di righe e vuoi vedere solo la parte superiore o inferiore? Il dump di un file enorme con `cat` inonda lo schermo. Usiamo invece `head` e `tail` per sbirciare i bordi.\n\n- Il comando `head` visualizza le prime 10 righe di un file per impostazione predefinita. Puoi modificarlo utilizzando `-n <number>` (ad esempio `head -n 5 log.txt` per le prime 5 righe).\n- Il comando `tail` visualizza le ultime 10 righe per impostazione predefinita, supportando la stessa opzione `-n`.\n- Fondamentalmente, `tail -f` (follow) monitora un file in tempo reale, mostrando le nuove righe man mano che vengono scritte dal sistema. Questo è lo strumento preferito dagli amministratori di sistema per guardare i registri in tempo reale.",
    "instructions": "Ispezioniamo i file di log. Usa `tail -n 2 logs.txt` (o `head -n 5 logs/app.log` / `tail -n 3 logs/security.log`) per visualizzare le righe, ed esegui `tail -f logs.txt` per simulare il monitoraggio in tempo reale.",
    "commandHelp": [
      {
        "cmd": "tail -n 2 logs.txt",
        "desc": "Visualizza le ultime 2 righe di logs.txt"
      },
      {
        "cmd": "tail -f logs.txt",
        "desc": "Monitora gli aggiornamenti di logs.txt in tempo reale"
      },
      {
        "cmd": "head -n 5 logs/app.log",
        "desc": "Visualizza le prime 5 righe di app.log"
      },
      {
        "cmd": "tail -n 3 logs/security.log",
        "desc": "Visualizza le ultime 3 righe di security.log"
      }
    ],
    "objectives": [
      {
        "id": "used_tail_n",
        "text": "Esegui tail con -n (es. tail -n 2 logs.txt)"
      },
      {
        "id": "used_tail_f",
        "text": "Esegui tail con -f (es. tail -f logs.txt)"
      }
    ],
    "hints": [
      "Utilizzare head -n 5 seguito dal nome del file e tail -n 3 seguito dal percorso del registro di sicurezza.",
      "Per seguire i log in tempo reale, aggiungi l'opzione -f al comando tail.",
      "Prova a eseguire: head -n 5 logs/app.log, quindi tail -n 3 logs/security.log e infine tail -f logs/app.log"
    ]
  },
  "52": {
    "title": "Scorrimento interattivo dei file (less & more)",
    "description": "Sbirciare nella parte superiore e inferiore di un file con `head` e `tail` è fantastico, ma cosa succede se devi sfogliare un lungo file di configurazione pagina per pagina? Ecco a cosa servono i cercapersone come `less` e `more`.\n\n- I cercapersone caricano i file in modo interattivo, mostrando una pagina di testo alla volta per evitare rallentamenti del sistema su file di grandi dimensioni.\n- `less` è la scelta moderna, che ti consente di scorrere sia avanti che indietro utilizzando i tasti freccia, cercare testo con `/` e uscire premendo `q`.\n- `more` è un cercapersone più vecchio e più semplice che scorre solo in avanti.",
    "instructions": "Leggiamo un lungo file pagina per pagina. Esegui `less /etc/hosts` per aprirlo in una vista a scorrimento. (Nel nostro terminale, questo mostrerà il contenuto in una cornice scorrevole. Premi `q` per tornare).",
    "commandHelp": [
      {
        "cmd": "less /etc/hosts",
        "desc": "Apre il file degli host nel pager less"
      },
      {
        "cmd": "more /etc/hosts",
        "desc": "Apre il file degli host nel pager more"
      }
    ],
    "objectives": [
      {
        "id": "used_less",
        "text": "Apre /etc/hosts in un pager (less o more)"
      }
    ],
    "hints": [
      "Usa il comando 'less' o 'more' nel percorso del file /etc/hosts.",
      "Prova a eseguire: less /etc/hosts"
    ]
  },
  "53": {
    "title": "Registrazione di sistema (journalctl)",
    "description": "Ora che puoi avviare e arrestare i servizi in background con `systemctl`, come puoi risolverli quando falliscono? L'utilità `journalctl` consente di controllare i log di sistema generati dai servizi gestiti da systemd.\n\n- Per impostazione predefinita, `journalctl` mostra tutti i registri di sistema. Poiché questo può essere enorme, li filtriamo per rimanere concentrati.\n- L'opzione `-u <service>` filtra i log per mostrare solo i messaggi di un servizio specifico (ad esempio `journalctl -u apache2`).\n- L'opzione `-n <number>` mostra solo le voci più recenti (ad esempio `journalctl -n 5` per gli ultimi 5 registri).\n- Il flag `-f` (follow) visualizza i log in tempo reale mentre vengono scritti.",
    "instructions": "Esaminiamo i log del server web. Esegui `journalctl -u apache2` per filtrare i log di sistema per il servizio `apache2`. Quindi esegui `journalctl -n 5` per visualizzare gli ultimi 5 messaggi generali del registro di sistema.",
    "commandHelp": [
      {
        "cmd": "journalctl -u apache2",
        "desc": "Mostra i log per il servizio apache2"
      },
      {
        "cmd": "journalctl -n 5",
        "desc": "Mostra gli ultimi 5 messaggi di log di sistema"
      }
    ],
    "objectives": [
      {
        "id": "used_journalctl_u",
        "text": "Filtra i log per il servizio apache2 utilizzando journalctl -u"
      },
      {
        "id": "used_journalctl_n",
        "text": "Visualizza le ultime voci di log utilizzando journalctl -n"
      }
    ],
    "hints": [
      "Utilizza journalctl con l'opzione -u impostata su apache2 per visualizzare i log del server web.",
      "Per limitare i log alle ultime 5 righe, utilizzare journalctl -n 5.",
      "Prova a eseguire: journalctl -u apache2, quindi: journalctl -n 5"
    ]
  },
  "54": {
    "title": "Logica riutilizzabile (bash functions)",
    "description": "Hai scritto cicli e condizionali per automatizzare le azioni negli script. Ma man mano che i tuoi script crescono, copiare e incollare la stessa logica più e più volte li rende difficili da mantenere. In bash possiamo raggruppare i comandi in funzioni riutilizzabili.\n\n- Per definire una funzione, la dichiariamo con il nome seguito da parentesi e parentesi graffe: `log_msg() { echo \"msg\"; }`.\n- Le funzioni possono ricevere argomenti proprio come gli script di shell, a cui si accede utilizzando i parametri di posizione locale `$1`, `$2`, ecc. all'interno del corpo della funzione.\n- Per chiamare una funzione, usa semplicemente il suo nome come qualsiasi altro comando: `log_msg \"Backup started\"`.",
    "instructions": "Costruiamo uno script di backup modulare. Crea uno script denominato `backup_helper.sh` nella tua cartella Home. Definire una funzione denominata `log_msg` che stampi un messaggio con un timestamp (ad esempio `log_msg() { echo \"[$(date +%T)] $1\"; }` o simile) e chiamarla almeno due volte all'interno dello script per registrare le azioni. Rendilo eseguibile ed eseguilo.",
    "commandHelp": [
      {
        "cmd": "func_name() { ... }",
        "desc": "Definisci una funzione in bash"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Crea il file di script \"backup_helper.sh\" nella home"
      },
      {
        "id": "has_function",
        "text": "Definisci la funzione log_msg all'interno dello script"
      },
      {
        "id": "script_executed",
        "text": "Rendi lo script eseguibile ed eseguilo"
      }
    ],
    "hints": [
      "Usa touch backup_helper.sh, quindi modificalo per includere shebang #!/bin/bash, log_msg() { ... } e chiama log_msg due volte.",
      "Ricordarsi di eseguire chmod 755 backup_helper.sh per renderlo eseguibile prima di eseguire ./backup_helper.sh.",
      "Prova a definire la funzione: log_msg() { echo \"[LOG] $1\"; } e poi chiamalo così: log_msg 'Starting'"
    ]
  },
  "55": {
    "title": "Pianificazione delle attività (crontab)",
    "description": "Ora che hai scritto script di shell robusti, non vorrai accedere a mezzanotte solo per eseguire il tuo assistente di backup. Linux fornisce il servizio `cron` per eseguire comandi o script automaticamente in momenti specifici.\n\n- Il servizio cron controlla una tabella di pianificazione chiamata `crontab`.\n- Ogni pianificazione cron ha 5 campi che rappresentano l'ora: `minute hour day-of-month month day-of-week` seguito dal comando.\n- Ad esempio, `30 2 * * * /path/to/script.sh` esegue uno script ogni giorno alle 2:30.\n- Usiamo `crontab -l` per elencare i nostri lavori cron attivi e `crontab <filename>` per caricare le pianificazioni da un file.",
    "instructions": "Automatizziamo il nostro assistente di backup. Scrivi una stringa di pianificazione cron in un file denominato `my_cron` (ad esempio, `* * * * * /home/learner/backup_helper.sh` da eseguire ogni minuto). Installa questa pianificazione eseguendo `crontab my_cron` e verificala eseguendo `crontab -l`.",
    "commandHelp": [
      {
        "cmd": "crontab my_cron",
        "desc": "Installa i lavori cron dal file my_cron"
      },
      {
        "cmd": "crontab -l",
        "desc": "Elenca i lavori cron attivi per l'utente corrente"
      }
    ],
    "objectives": [
      {
        "id": "cron_file_created",
        "text": "Crea il file \"my_cron\" in home con la pianificazione cron"
      },
      {
        "id": "cron_installed",
        "text": "Installa la pianificazione cron usando crontab my_cron"
      },
      {
        "id": "cron_listed",
        "text": "Elenca la pianificazione cron attiva con crontab -l"
      }
    ],
    "hints": [
      "Usa echo '* * * * * /home/learner/backup_helper.sh' > my_cron per creare il file cron.",
      "Carica il file cron nella tabella crontab eseguendo crontab my_cron.",
      "Controlla i processi cron installati utilizzando crontab -l"
    ]
  },
  "56": {
    "title": "Trovare i comandi (which)",
    "description": "Ora che hai familiarità con le variabili di ambiente attive come `PATH` (che memorizza le directory in cui Linux cerca i comandi), come trovi il percorso esatto del file del programma che viene eseguito quando digiti `ls` o `grep`? Usiamo `which` per individuare i binari dei comandi.\n\n- Il comando `which` cerca le cartelle elencate nella variabile `$PATH` e stampa il percorso assoluto del binario eseguito quando viene eseguito il comando (ad esempio `which ls` restituisce `/bin/ls`).\n- Questo è utile per scoprire dove è installato uno strumento o risolvere conflitti tra più versioni dello stesso strumento.",
    "instructions": "Troviamo i nostri strumenti. Esegui `which ls` per vedere dove è archiviato l'eseguibile `ls` nel sistema. Quindi, trova il percorso del comando `grep` eseguendo `which grep`.",
    "commandHelp": [
      {
        "cmd": "which ls",
        "desc": "Trova il percorso assoluto di ls"
      },
      {
        "cmd": "which grep",
        "desc": "Trova il percorso assoluto di grep"
      }
    ],
    "objectives": [
      {
        "id": "used_which_ls",
        "text": "Esegui il comando \"which\" su ls"
      },
      {
        "id": "used_which_grep",
        "text": "Esegui il comando \"which\" su grep"
      }
    ],
    "hints": [
      "Esegui which ls per trovare il percorso di ls e which grep per trovare il percorso di grep.",
      "Prova a eseguire: which ls, e poi which grep"
    ]
  },
  "57": {
    "title": "Scorciatoie personalizzate della shell (alias)",
    "description": "Digitare comandi lunghi con più flag può diventare estenuante. In Linux possiamo creare scorciatoie personalizzate chiamate alias. Ad esempio, puoi associare `ll` per eseguire `ls -la` automaticamente.\n\n- Per creare un alias temporaneo, esegui `alias name='command'` (ad esempio `alias ll='ls -la'`).\n- L'esecuzione di `alias` senza argomenti elenca tutti gli alias attivi nella sessione corrente.\n- Per rendere gli alias permanenti dopo i riavvii, in genere vengono scritti nei file di configurazione `.bashrc` o `.bash_profile`.",
    "instructions": "Impostiamo alcune scorciatoie. Crea un alias temporaneo denominato `la` che esegue `ls -a` eseguendo `alias la='ls -a'`. Provalo eseguendo `la` nel tuo terminale.",
    "commandHelp": [
      {
        "cmd": "alias la='ls -a'",
        "desc": "Alias ​​la per eseguire ls -a"
      },
      {
        "cmd": "alias",
        "desc": "Elenca gli alias attivi"
      }
    ],
    "objectives": [
      {
        "id": "alias_created",
        "text": "Crea alias la per ls -a"
      },
      {
        "id": "alias_run",
        "text": "Esegui l'alias appena creato la"
      }
    ],
    "hints": [
      "Definisci l'alias utilizzando l'alias la='ls -a' esattamente come mostrato.",
      "Esegui il comando alias la nel terminale per verificare che funzioni.",
      "Prova a eseguire: alias la='ls -a' seguito da: la"
    ]
  },
  "58": {
    "title": "Amministrazione utente (useradd & passwd)",
    "description": "Finora hai lavorato come utente `learner`. Ma nei server reali, gli amministratori di sistema devono gestire più account. Impariamo come aggiungere nuovi utenti e impostare le loro password.\n\n- Il comando `useradd` crea un nuovo account utente. Poiché la creazione di account influisce sulla sicurezza del sistema, deve essere eseguita con privilegi di superutente (ad esempio `sudo useradd deployer`).\n- Il comando `passwd` imposta o modifica la password di un utente. Esegui come `sudo passwd deployer` per impostare la password dell'utente del distributore.",
    "instructions": "Aggiungiamo l'account di un collega. Crea un nuovo utente denominato `deployer` eseguendo `sudo useradd deployer`. Quindi, imposta una password eseguendo `sudo passwd deployer` (digita qualsiasi password fittizia quando richiesto).",
    "commandHelp": [
      {
        "cmd": "sudo useradd deployer",
        "desc": "Crea nuovo utente deployer"
      },
      {
        "cmd": "sudo passwd deployer",
        "desc": "Imposta password per utente deployer"
      }
    ],
    "objectives": [
      {
        "id": "user_created",
        "text": "Crea utente \"deployer\" utilizzando useradd"
      },
      {
        "id": "passwd_changed",
        "text": "Imposta password per \"deployer\" utilizzando passwd"
      }
    ],
    "hints": [
      "Utilizza sudo useradd deployer per registrare l'account utente.",
      "Imposta la password eseguendo sudo passwd deployer.",
      "Prova a eseguire: sudo useradd deployer, quindi: sudo passwd deployer"
    ]
  },
  "59": {
    "title": "Cambio dei contesti di sicurezza (su)",
    "description": "Ora che hai creato l'account `deployer`, come accedi localmente per testarne l'ambiente? In Linux, utilizziamo il comando `su` (utente sostitutivo) per cambiare account senza disconnettersi.\n\n- Il comando `su <username>` passa la shell del terminale corrente alla sessione di quell'utente.\n- Una volta cambiato, l'esecuzione di `whoami` rifletterà il nuovo nome utente.\n- Per tornare alla sessione dell'account utente originale, digita `exit` o premi `Ctrl+D`.",
    "instructions": "Cambiamo contesto. Passa all'utente `deployer` eseguendo `su deployer`. Una volta effettuato l'accesso, esegui `whoami` per verificare che stai effettivamente utilizzando `deployer`. Una volta terminato, digita `exit` per tornare indietro.",
    "commandHelp": [
      {
        "cmd": "su deployer",
        "desc": "Sostituisci la sessione utente con il deployer"
      },
      {
        "cmd": "whoami",
        "desc": "Verifica il nome della sessione utente attiva"
      },
      {
        "cmd": "exit",
        "desc": "Esci dalla sessione utente attiva"
      }
    ],
    "objectives": [
      {
        "id": "switched_user",
        "text": "Cambia il contesto della shell con il deployer utilizzando su"
      },
      {
        "id": "verified_whoami",
        "text": "Esegui whoami per confermare di essere un deployer"
      }
    ],
    "hints": [
      "Utilizza su deployer per passare alla sessione della shell del deployer.",
      "Controlla chi è attivo digitando whoami.",
      "Prova a eseguire: su deployer, quindi whoami, quindi esci"
    ]
  },
  "60": {
    "title": "Secure Shell Access (ssh)",
    "description": "Cambiare utente localmente è utile, ma nel cloud computing i server risiedono in data center remoti. Per connetterci in modo sicuro tramite la rete, utilizziamo `ssh` (Secure Shell).\n\n- Il comando `ssh` crittografa la connessione tra la tua macchina e un host remoto per evitare intercettazioni.\n- Sintassi: `ssh user@hostname` o `ssh user@ip_address` (es. `ssh admin@192.168.1.100`).\n- Alla prima connessione ti verrà chiesto di verificare l'autenticità dell'host remoto visualizzando un'impronta digitale ECDSA univoca.\n\n**Nota:** poiché si tratta di un sandbox basato su browser, non esiste un vero server remoto a cui connettersi. L'esecuzione di questo comando mostrerà immediatamente il modello di output previsto nel mondo reale (verifica dell'host, connessione, sessione), anziché un'effettiva sessione interattiva dal vivo. In un vero terminale, ssh ti lascerebbe in una shell remota veramente separata finché non digiti `exit`.",
    "instructions": "Connettiamoci a un server di staging remoto. Connettersi al server in `192.168.1.100` come utente `admin` eseguendo `ssh admin@192.168.1.100` (digitare `yes` se viene richiesto di verificare la chiave host e inserire l'eventuale password).",
    "commandHelp": [
      {
        "cmd": "ssh admin@192.168.1.100",
        "desc": "Connettiti in modo sicuro al server di staging remoto"
      }
    ],
    "objectives": [
      {
        "id": "ssh_connected",
        "text": "SSH nel server remoto all'indirizzo 192.168.1.100 come amministratore"
      }
    ],
    "hints": [
      "Utilizza il comando ssh seguito da utente@host. Qui, l'utente è admin e l'host è 192.168.1.100.",
      "Prova a eseguire: ssh admin@192.168.1.100"
    ]
  },
  "61": {
    "title": "Trasferimento sicuro dei file (scp)",
    "description": "Ora che sai come accedere a un server remoto tramite SSH, come copi un file locale (come un archivio di backup) su di esso? Il comando `scp` (copia protetta) copia i file in modo sicuro tra host utilizzando SSH dietro le quinte.\n\n- La sintassi è `scp source_path user@host:destination_path`.\n- Ad esempio, `scp log.txt admin@192.168.1.100:/tmp/` copia il file `log.txt` locale nella cartella remota `/tmp/`.\n\n**Nota:** Proprio come con ssh, qui non esiste un vero server remoto: l'esecuzione di questo comando conferma che il file locale esiste e mostra l'output di trasferimento previsto, ma in realtà non invia i dati da nessuna parte.",
    "instructions": "Inviamo il nostro archivio di log al server di staging remoto. Copia l'archivio locale `logs.tar.gz` nella cartella `/tmp` su `192.168.1.100` come utente `admin` eseguendo `scp logs.tar.gz admin@192.168.1.100:/tmp/`.",
    "commandHelp": [
      {
        "cmd": "scp logs.tar.gz admin@192.168.1.100:/tmp/",
        "desc": "Copia logs.tar.gz nella cartella /tmp del server remoto"
      }
    ],
    "objectives": [
      {
        "id": "scp_completed",
        "text": "Trasferisci logs.tar.gz a 192.168.1.100:/tmp/ tramite scp"
      }
    ],
    "hints": [
      "Specifica scp seguito dal file locale logs.tar.gz, quindi la destinazione remota admin@192.168.1.100:/tmp/.",
      "Prova a eseguire: scp logs.tar.gz admin@192.168.1.100:/tmp/"
    ]
  },
  "62": {
    "title": "Compressione file (gzip & gunzip)",
    "description": "Immagina di avere un singolo file di testo contenente un enorme set di dati e di voler ridurne le dimensioni per risparmiare spazio su disco o accelerare la condivisione. In Linux, comprimiamo i singoli file utilizzando `gzip` e li ripristiniamo utilizzando `gunzip`.\n\n- Il comando `gzip <filename>` comprime un file, sostituendolo con una versione compressa che termina con `.gz` (es. `backup.txt` diventa `backup.txt.gz`).\n- Il comando `gunzip <filename.gz>` decomprime il file, ripristinando la versione originale.",
    "instructions": "Comprimiamo un file per risparmiare spazio. Esegui `gzip note.txt` nella tua cartella Inizio. Quindi, decomprimi il file `note.txt.gz` risultante riportandolo allo stato originale eseguendo `gunzip note.txt.gz`.",
    "commandHelp": [
      {
        "cmd": "gzip note.txt",
        "desc": "Comprimi note.txt in note.txt.gz"
      },
      {
        "cmd": "gunzip note.txt.gz",
        "desc": "Decomprimi note.txt.gz in note.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_gzip",
        "text": "Esegui il comando \"gzip\" per comprimere note.txt"
      },
      {
        "id": "used_gunzip",
        "text": "Esegui il comando \"gunzip\" per ripristinare note.txt"
      }
    ],
    "hints": [
      "Usa gzip note.txt per comprimere il file.",
      "Usa gunzip note.txt.gz per decomprimerlo nuovamente.",
      "Prova a eseguire: gzip note.txt seguito da gunzip note.txt.gz"
    ]
  },
  "63": {
    "title": "Amministrazione gruppi (groupadd & groups)",
    "description": "In Linux, gli utenti sono organizzati in **gruppi** per condividere facilmente i permessi. Ad esempio, tutti gli sviluppatori potrebbero appartenere a un gruppo denominato `developers`. Questo ci consente di condividere file con l'intero team contemporaneamente.\n\n- Il comando `groupadd` crea un nuovo gruppo. Poiché si tratta di una configurazione di sistema, richiede privilegi di superutente (ad esempio `sudo groupadd developers`).\n- Il comando `groups [username]` elenca tutti i gruppi a cui appartiene un utente. Eseguito senza argomenti, visualizza i gruppi per l'utente corrente.",
    "instructions": "Gestiamo i gruppi. Crea un nuovo gruppo denominato `developers` eseguendo `sudo groupadd developers`. Quindi, controlla i tuoi gruppi attivi eseguendo il comando `groups`.",
    "commandHelp": [
      {
        "cmd": "sudo groupadd developers",
        "desc": "Crea un nuovo gruppo chiamato sviluppatori"
      },
      {
        "cmd": "groups",
        "desc": "Visualizza i gruppi attivi per l'utente corrente"
      }
    ],
    "objectives": [
      {
        "id": "group_created",
        "text": "Crea il gruppo \"sviluppatori\" utilizzando groupadd"
      },
      {
        "id": "checked_groups",
        "text": "Esegui il comando \"gruppi\""
      }
    ],
    "hints": [
      "Usa sudo groupadd sviluppatori per creare il gruppo.",
      "Basta eseguire il comando groups per elencare i gruppi.",
      "Prova a eseguire: sudo groupadd sviluppatori seguito da gruppi"
    ]
  },
  "64": {
    "title": "Elenco dei file aperti (lsof)",
    "description": "Nei sistemi simili a Unix, \"tutto è un file\". Ciò significa che non solo i file di testo e le cartelle, ma anche i socket di rete, l'hardware di sistema e i processi vengono trattati come file. Per scoprire a quali file si accede e da quali programmi in esecuzione, utilizziamo `lsof` (List Open Files).\n\n- L'esecuzione di `lsof` visualizza un elenco completo di tutti i file aperti, insieme all'ID processo (PID) e al comando che li ha aperti.\n- Ad esempio, l'esecuzione di `lsof -i` elenca tutti i file/socket di rete, il che è estremamente utile per scoprire quale processo è in ascolto su una porta di rete specifica (come la porta 80).",
    "instructions": "Ispezioniamo le nostre connessioni e file attivi. Esegui `lsof` per vedere tutti i file aperti nel sistema.",
    "commandHelp": [
      {
        "cmd": "lsof",
        "desc": "Elenca tutti i file aperti sul sistema"
      }
    ],
    "objectives": [
      {
        "id": "ran_lsof",
        "text": "Esegui il comando \"lsof\""
      }
    ],
    "hints": [
      "Usa il comando 'lsof' senza argomenti per elencare tutti i file aperti.",
      "Prova a eseguire: lsof"
    ]
  },
  "65": {
    "title": "Visualizzazione dei dettagli della CPU (lscpu)",
    "description": "Quando si risolvono i problemi relativi alle prestazioni del sistema o si distribuiscono applicazioni ad alta richiesta, è necessario conoscere le capacità della CPU del sistema. In Linux, leggiamo informazioni dettagliate sull'architettura della CPU utilizzando il comando `lscpu`.\n\n- Il comando `lscpu` visualizza i dettagli del processore come modello di CPU, fornitore, velocità di clock, numero di core, dettagli di hyper-threading e dimensioni della cache, direttamente dal filesystem del kernel.",
    "instructions": "Ispezioniamo il processore. Esegui `lscpu` per visualizzare i dettagli della CPU del tuo sistema.",
    "commandHelp": [
      {
        "cmd": "lscpu",
        "desc": "Visualizza informazioni sull'architettura della CPU"
      }
    ],
    "objectives": [
      {
        "id": "ran_lscpu",
        "text": "Esegue il comando \"lscpu\""
      }
    ],
    "hints": [
      "Esegue semplicemente il comando lscpu per visualizzare la configurazione del processore.",
      "Prova a eseguire: lscpu"
    ]
  },
  "66": {
    "title": "Archiviazione con zip e decompressione",
    "description": "Mentre `tar` e `gzip` sono standard su Linux, `zip` è il formato di archivio più comune nel mondo multipiattaforma (Windows/macOS). In Linux, confezioniamo e comprimiamo i file in file zip utilizzando `zip` e li estraiamo utilizzando `unzip`.\n\n- Il comando `zip <archive.zip> <files>` crea un archivio zip.\n- Il comando `unzip <archive.zip>` estrae i file dall'archivio.",
    "instructions": "Impacchettiamo i nostri appunti. Crea un archivio zip denominato `note.zip` contenente il file `note.txt` nella tua cartella home. Quindi, prova l'estrazione eseguendo `unzip note.zip`.",
    "commandHelp": [
      {
        "cmd": "zip note.zip note.txt",
        "desc": "Crea note.zip contenente note.txt"
      },
      {
        "cmd": "unzip note.zip",
        "desc": "Estrai il contenuto di note.zip"
      }
    ],
    "objectives": [
      {
        "id": "used_zip",
        "text": "Esegui il comando \"zip\""
      },
      {
        "id": "used_unzip",
        "text": "Esegui il comando \"unzip\""
      }
    ],
    "hints": [
      "Usa prima zip note.zip note.txt, seguito da decomprimi note.zip.",
      "Prova a eseguire: zip note.zip note.txt e poi decomprimi note.zip"
    ]
  },
  "67": {
    "title": "Compressione alternativa (bzip2 & xz)",
    "description": "Oltre `gzip` e `zip`, Linux supporta altri formati di compressione ottimizzati per rapporti di compressione più elevati a scapito della velocità della CPU. Questi sono `bzip2` (bz2) e `xz` (xz).\n\n- Il comando `bzip2 <file>` comprime un file, generando `<file>.bz2`.\n- Il comando `xz <file>` utilizza la compressione LZMA senza perdita di dati per creare `<file>.xz`, che produce dimensioni di file eccezionalmente piccole, rendendolo ideale per le versioni del kernel Linux.",
    "instructions": "Confrontiamo i formati. Comprimi `note.txt` utilizzando `bzip2 note.txt`. Quindi, comprimi i file risultanti utilizzando `xz note.txt` (per simularli entrambi).",
    "commandHelp": [
      {
        "cmd": "bzip2 note.txt",
        "desc": "Comprimi note.txt utilizzando bzip2"
      },
      {
        "cmd": "xz note.txt",
        "desc": "Comprimi note.txt utilizzando xz"
      }
    ],
    "objectives": [
      {
        "id": "used_bzip2",
        "text": "Esegui bzip2 note.txt"
      },
      {
        "id": "used_xz",
        "text": "Esegui xz note.txt"
      }
    ],
    "hints": [
      "Esegui bzip2 note.txt per testare la compressione bzip2.",
      "Esegui xz note.txt per testare la compressione xz."
    ]
  },
  "68": {
    "title": "Gestione dei pacchetti Debian (dpkg)",
    "description": "Mentre `apt` automatizza il download e la risoluzione delle dipendenze dei pacchetti dai repository, cosa succede se hai già scaricato manualmente un file del pacchetto `.deb` e desideri controllarlo o installarlo? In Linux utilizziamo `dpkg` (pacchetto Debian) per interagire direttamente con i pacchetti.\n\n- Il comando `dpkg -l` elenca tutti i pacchetti attualmente installati sul tuo sistema Debian/Ubuntu.\n- Il comando `dpkg -s <package>` visualizza informazioni su stato, versione e architettura per un pacchetto specifico.",
    "instructions": "Interroghiamo il database locale dei pacchetti. Controlla l'elenco dei pacchetti eseguendo `dpkg -l`. Quindi, interroga i dettagli per il programma `tree` eseguendo `dpkg -s tree`.",
    "commandHelp": [
      {
        "cmd": "dpkg -l",
        "desc": "Elenca i pacchetti Debian installati"
      },
      {
        "cmd": "dpkg -s tree",
        "desc": "Visualizza i dettagli dell'albero del pacchetto"
      }
    ],
    "objectives": [
      {
        "id": "ran_dpkg_l",
        "text": "Esegui \"dpkg -l\" per elencare i pacchetti"
      },
      {
        "id": "ran_dpkg_s",
        "text": "Esegui \"dpkg -s tree\" per interrogare i dettagli"
      }
    ],
    "hints": [
      "Usa dpkg -l per recuperare l'elenco completo dei pacchetti.",
      "Controlla lo stato del pacchetto tree usando dpkg -s tree.",
      "Prova a eseguire: dpkg -l seguito da dpkg -s tree"
    ]
  },
  "69": {
    "title": "Gestori di pacchetti RedHat (yum & dnf)",
    "description": "Non tutti gli ambienti Linux sono basati su Debian/Ubuntu. Se lavori su sistemi RedHat, Fedora o CentOS, non troverai `apt` o `dpkg`. Gestirai invece i pacchetti utilizzando i gestori di pacchetti `yum` più vecchi o moderni `dnf` (Dandified YUM).\n\n- Il comando `dnf check-update` (o `yum check-update`) si connette ai repository RedHat per cercare gli aggiornamenti dei pacchetti disponibili.\n- Il comando `dnf install <package>` recupera e installa programmi simili a `apt install`.",
    "instructions": "Eseguiamo gli aggiornamenti su un simulatore basato su RedHat. Verifica la presenza di pacchetti che necessitano di aggiornamenti eseguendo `dnf check-update` (o `yum check-update`).",
    "commandHelp": [
      {
        "cmd": "dnf check-update",
        "desc": "Controlla gli aggiornamenti del pacchetto RedHat"
      },
      {
        "cmd": "yum check-update",
        "desc": "Controlla gli aggiornamenti legacy di CentOS"
      }
    ],
    "objectives": [
      {
        "id": "checked_updates",
        "text": "Esegui dnf check-update o yum check-update"
      }
    ],
    "hints": [
      "Utilizza il comando dnf o yum con l'argomento check-update.",
      "Prova a eseguire: dnf check-update"
    ]
  },
  "70": {
    "title": "Gestione degli utenti (adduser & userdel)",
    "description": "Mentre `useradd` è un'utilità di basso livello che registra semplicemente i dettagli dell'utente nei file di configurazione del sistema, i sistemi Debian/Ubuntu forniscono uno script interattivo di alto livello chiamato `adduser` che automatizza la creazione di cartelle home, l'impostazione delle password e l'inizializzazione degli ambienti shell. Al contrario, `userdel` elimina in modo pulito gli account utente.\n\n- L'esecuzione di `sudo adduser tester` ti guida attraverso la configurazione dell'utente in modo interattivo.\n- L'esecuzione di `sudo userdel tester` elimina l'account utente.",
    "instructions": "Gestiamo i cicli di vita degli utenti. Crea un utente utilizzando `sudo adduser tester`. Successivamente, elimina l'utente eseguendo `sudo userdel tester`.",
    "commandHelp": [
      {
        "cmd": "sudo adduser tester",
        "desc": "Crea utente tester in modo interattivo"
      },
      {
        "cmd": "sudo userdel tester",
        "desc": "Elimina l'account utente tester"
      }
    ],
    "objectives": [
      {
        "id": "ran_adduser",
        "text": "Esegui il comando \"adduser\" con sudo"
      },
      {
        "id": "ran_userdel",
        "text": "Esegui il comando \"userdel\" con sudo"
      }
    ],
    "hints": [
      "Usa sudo adduser tester seguito da sudo userdel tester.",
      "Prova a eseguire: sudo adduser tester, quindi: sudo userdel tester"
    ]
  },
  "71": {
    "title": "Visualizzazione delle identità utente (id)",
    "description": "Quando si risolvono gli errori di autorizzazione, è necessario verificare l'esatto contesto dell'utente e dell'identificatore di gruppo in cui si sta eseguendo. Lo facciamo utilizzando `id`.\n\n- L'esecuzione di `id` stampa l'ID utente (UID), l'ID gruppo primario (GID) dell'utente corrente e tutti gli elenchi di gruppi supplementari.\n- L'esecuzione di `id <username>` richiede informazioni per un utente specifico.",
    "instructions": "Controlliamo le identità attive. Esegui `id` per visualizzare i tuoi dettagli, quindi esegui `id root` per controllare gli identificatori dell'account del superutente.",
    "commandHelp": [
      {
        "cmd": "id",
        "desc": "Visualizza i dettagli di identificazione dell'utente attivo"
      },
      {
        "cmd": "id root",
        "desc": "Interroga i dettagli di identificazione della root"
      }
    ],
    "objectives": [
      {
        "id": "ran_id_learner",
        "text": "Esegui il comando \"id\" per lo studente"
      },
      {
        "id": "ran_id_root",
        "text": "Esegui il comando \"id root\""
      }
    ],
    "hints": [
      "Esegui id seguito da id root.",
      "Prova a eseguire: id e id root"
    ]
  },
  "72": {
    "title": "Eliminazione di gruppi (groupdel)",
    "description": "Quando i team di progetto riorganizzano o disattivano i servizi, i gruppi di sicurezza corrispondenti devono essere ripuliti. In Linux, eliminiamo i gruppi utilizzando `groupdel`.\n\n- Il comando `groupdel <group_name>` elimina permanentemente un gruppo dai file di configurazione del sistema, richiedendo privilegi di superutente.",
    "instructions": "Ripuliamo i nostri gruppi. Elimina il gruppo `developers` eseguendo `sudo groupdel developers`.",
    "commandHelp": [
      {
        "cmd": "sudo groupdel developers",
        "desc": "Elimina il gruppo sviluppatori"
      }
    ],
    "objectives": [
      {
        "id": "group_deleted",
        "text": "Elimina il gruppo \"sviluppatori\" utilizzando groupdel"
      }
    ],
    "hints": [
      "Utilizza sudo groupdel Developers per rimuovere il gruppo da /etc/group.",
      "Prova a eseguire: sudo groupdel Developers"
    ]
  },
  "73": {
    "title": "Controllo delle interfacce (ifconfig)",
    "description": "Prima che la moderna suite di comandi `ip` diventasse standard, gli amministratori di sistema Linux si affidavano a `ifconfig` (configuratore di interfacce) per visualizzare e gestire le interfacce di rete.\n\n- Il comando `ifconfig` visualizza le interfacce di rete attive, la configurazione IP locale, i dettagli della maschera di rete e gli indirizzi hardware MAC. Sebbene deprecato su alcune distribuzioni più recenti, rimane ampiamente utilizzato sui server legacy.",
    "instructions": "Eseguiamo il classico strumento di configurazione. Esegui `ifconfig` per controllare le interfacce di rete attive.",
    "commandHelp": [
      {
        "cmd": "ifconfig",
        "desc": "Visualizza le configurazioni dell'interfaccia di rete"
      }
    ],
    "objectives": [
      {
        "id": "ran_ifconfig",
        "text": "Esegui il comando \"ifconfig\""
      }
    ],
    "hints": [
      "Esegui il comando ifconfig nel terminale.",
      "Prova a eseguire: ifconfig"
    ]
  },
  "74": {
    "title": "Connessioni di rete (nmcli)",
    "description": "Sulle moderne workstation e server Linux, le interfacce di rete sono gestite da un demone di sistema chiamato NetworkManager. Invece di modificare manualmente i file di configurazione, configuriamo i dettagli della rete utilizzando `nmcli`.\n\n- Il comando `nmcli` (NetworkManager CLI) consente di ispezionare le connessioni hardware, gli stati dei dispositivi e le reti Wi-Fi attive.",
    "instructions": "Controlliamo lo stato dell'hardware della rete. Esegui `nmcli device` per interrogare le connessioni e lo stato.",
    "commandHelp": [
      {
        "cmd": "nmcli device",
        "desc": "Elenca i dispositivi e gli stati dell'interfaccia di rete"
      }
    ],
    "objectives": [
      {
        "id": "ran_nmcli_device",
        "text": "Esegue il comando \"nmcli device\" o \"nmcli dev\""
      }
    ],
    "hints": [
      "Utilizza il dispositivo nmcli per elencare gli stati dell'interfaccia.",
      "Prova a eseguire: nmcli device"
    ]
  },
  "75": {
    "title": "Statistiche socket e connessione (netstat & ss)",
    "description": "Quando si configura un database o un server Web, è necessario verificare che il servizio sia in esecuzione e in ascolto sulla porta corretta e verificare se vengono stabilite connessioni non autorizzate. Lo facciamo utilizzando `netstat` o `ss`.\n\n- Il comando `netstat` (statistiche di rete) è uno strumento classico per mostrare le connessioni TCP e le porte di ascolto. Per esempio. `netstat -tuln` elenca le porte di ascolto TCP/UDP.\n- Il comando `ss` (statistiche socket) è l'alternativa moderna e più veloce a `netstat` che visualizza i dettagli della connessione socket direttamente dallo spazio dei nomi del kernel.",
    "instructions": "Controlliamo le porte. Controlla i socket TCP/UDP in ascolto eseguendo `netstat -tuln`, quindi controllali utilizzando il comando moderno delle statistiche dei socket `ss -tuln`.",
    "commandHelp": [
      {
        "cmd": "netstat -tuln",
        "desc": "Mostra le porte TCP/UDP in ascolto utilizzando netstat"
      },
      {
        "cmd": "ss -tuln",
        "desc": "Mostra i socket in ascolto utilizzando ss"
      }
    ],
    "objectives": [
      {
        "id": "ran_netstat",
        "text": "Esegui \"netstat -tuln\""
      },
      {
        "id": "ran_ss",
        "text": "Esegui \"ss -tuln\""
      }
    ],
    "hints": [
      "Esegui prima netstat -tuln, seguito da ss -tuln.",
      "Prova a eseguire: netstat -tuln e poi ss -tuln"
    ]
  },
  "76": {
    "title": "Tracciamento dei percorsi dei pacchetti (traceroute)",
    "description": "Quando una pagina Web non viene caricata, come si identifica se il problema riguarda il router di casa, il provider di servizi Internet (ISP) o il server di destinazione? In Linux tracciamo i pacchetti utilizzando `traceroute`.\n\n- Il comando `traceroute` elenca ogni gateway router (hop) che un pacchetto attraversa nel suo percorso verso un server remoto, insieme alla latenza di risposta per ogni hop.",
    "instructions": "Tracciamo il percorso verso un server web. Esegui `traceroute google.com` per vedere il luppolo.",
    "commandHelp": [
      {
        "cmd": "traceroute google.com",
        "desc": "Traccia gli hop di rete su google.com"
      }
    ],
    "objectives": [
      {
        "id": "ran_traceroute",
        "text": "Esegui il comando \"traceroute\""
      }
    ],
    "hints": [
      "Utilizza traceroute seguito da un nome di dominio come google.com.",
      "Prova a eseguire: traceroute google.com"
    ]
  },
  "77": {
    "title": "Firewall Linux (ufw & iptables)",
    "description": "Immagina di vivere in un condominio sicuro dove una guardia di sicurezza sta all'ingresso controllando gli ID e bloccando i visitatori non autorizzati. In Linux, un **firewall** funge da guardia di sicurezza per le porte di rete.\n\n- Il comando `ufw` (Uncomplicated Firewall) è un'interfaccia intuitiva per la gestione delle regole del firewall. L'esecuzione di `sudo ufw status` mostra se il firewall è attivo e quali porte (come la porta 22 per SSH o la porta 80 per i server Web) sono aperte.\n- Il comando `iptables` è lo strumento Netfilter tradizionale di basso livello che blocca o reindirizza effettivamente i pacchetti. L'esecuzione di `sudo iptables -L` elenca le catene di sicurezza attive e le regole di corrispondenza dei pacchetti.",
    "instructions": "Ispezioniamo le nostre guardie di sicurezza. Visualizza lo stato del semplice firewall eseguendo `sudo ufw status`, quindi controlla le regole Netfilter di livello inferiore eseguendo `sudo iptables -L`.",
    "commandHelp": [
      {
        "cmd": "sudo ufw status",
        "desc": "Visualizza le regole del firewall ufw"
      },
      {
        "cmd": "sudo iptables -L",
        "desc": "Elenca le regole di filtraggio dei pacchetti iptables attive"
      }
    ],
    "objectives": [
      {
        "id": "checked_ufw",
        "text": "Esegui il comando \"ufw status\" con sudo"
      },
      {
        "id": "checked_iptables",
        "text": "Esegui il comando \"iptables -L\" con sudo"
      }
    ],
    "hints": [
      "Usa sudo ufw status per ispezionare facilmente il firewall.",
      "Usa sudo iptables -L per controllare le regole di Netfilter.",
      "Prova a eseguire: sudo ufw status, quindi sudo iptables -L"
    ]
  },
  "78": {
    "title": "Cortesia del processo (nice & renice)",
    "description": "In un ufficio occupato, alcune attività a bassa priorità (come l'archiviazione delle ricevute) possono attendere, mentre le richieste ad alta priorità devono essere gestite immediatamente. Linux gestisce la priorità dei processi utilizzando valori di **niceness** che vanno da -20 (priorità più alta) a 19 (priorità più bassa).\n\n- Il comando `nice` avvia un processo con una priorità personalizzata. Per esempio. `nice -n 10 sleep 5` avvia un comando di sospensione con una priorità \"polite\" pari a 10.\n- Il comando `renice` altera la priorità di pianificazione di un processo già in esecuzione. Ad esempio, `sudo renice +5 9999` abbassa la priorità del processo 9999.",
    "instructions": "Regoliamo le priorità. Esegui un comando a bassa priorità utilizzando `nice -n 10 sleep 5`. Quindi, abbassa la priorità del processo canaglia in esecuzione 9999 eseguendo `sudo renice +5 9999`.",
    "commandHelp": [
      {
        "cmd": "nice -n 10 sleep 5",
        "desc": "Avvia lo sleep con un valore niceness di 10"
      },
      {
        "cmd": "sudo renice +5 9999",
        "desc": "Priorità inferiore al PID 9999"
      }
    ],
    "objectives": [
      {
        "id": "used_nice",
        "text": "Esegui il comando \"nice\" con -n 10"
      },
      {
        "id": "used_renice",
        "text": "Esegui il comando \"renice\" con sudo"
      }
    ],
    "hints": [
      "Usa nice -n 10 sleep 5 per avviare un processo nice.",
      "Modifica la priorità PID attiva utilizzando sudo renice +5 9999.",
      "Prova a eseguire: nice -n 10 sleep 5 e sudo renice +5 9999"
    ]
  },
  "79": {
    "title": "Ripresa dei lavori in background (bg)",
    "description": "Abbiamo già visto come avviare un'attività in background utilizzando `&` e ripristinarla utilizzando `fg`. Ma cosa succede se hai avviato un comando senza `&` o lo hai sospeso con `Ctrl+Z`? Puoi riprenderlo in background utilizzando `bg`!\n\n- Il comando `bg` riprende i lavori sospesi, consentendone l'esecuzione in background senza bloccare il prompt del terminale.",
    "instructions": "Eseguiamo un lavoro in background. Avvia `sleep 200 &` in background, esegui `jobs` per elencare i lavori attivi, quindi esegui `bg` per assicurarti che riprenda l'esecuzione.",
    "commandHelp": [
      {
        "cmd": "sleep 200 &",
        "desc": "Avvia il processo in background"
      },
      {
        "cmd": "jobs",
        "desc": "Elenca i lavori in background attivi"
      },
      {
        "cmd": "bg",
        "desc": "Riprendi i lavori in background"
      }
    ],
    "objectives": [
      {
        "id": "ran_sleep_bg",
        "text": "Avvia un comando di sospensione con &"
      },
      {
        "id": "ran_jobs",
        "text": "Esegui il comando \"jobs\""
      },
      {
        "id": "ran_bg",
        "text": "Esegui il comando \"bg\""
      }
    ],
    "hints": [
      "Esegui sleep 200 & seguito da jobs e infine bg."
    ]
  },
  "80": {
    "title": "Statistiche I/O e CPU (iostat)",
    "description": "Quando un database o un'applicazione Web viene eseguito lentamente, come si determina se il problema è un collo di bottiglia della CPU o un disco rigido lento? In Linux, monitoriamo i parametri delle prestazioni di output/input del sistema utilizzando `iostat`.\n\n- Il comando `iostat` visualizza le statistiche dei report sull'utilizzo della CPU e sulla velocità effettiva di lettura/scrittura del dispositivo attivo, aiutandoti a identificare la congestione del disco.",
    "instructions": "Controlliamo i log delle prestazioni. Eseguire il comando `iostat` per stampare le statistiche I/O.",
    "commandHelp": [
      {
        "cmd": "iostat",
        "desc": "Visualizza le statistiche di input/output"
      }
    ],
    "objectives": [
      {
        "id": "ran_iostat",
        "text": "Esegui il comando \"iostat\""
      }
    ],
    "hints": [
      "Digita iostat nel terminale e premi Invio.",
      "Prova a eseguire: iostat"
    ]
  },
  "81": {
    "title": "Ricerca di pacchetti (apt search)",
    "description": "Prima di installare il software su Linux, come si scoprono quali pacchetti sono disponibili nel repository? In Linux utilizziamo `apt search` per interrogare il catalogo software tramite parola chiave.\n\n- Il comando `apt search <keyword>` analizza le descrizioni del repository ed elenca i pacchetti software corrispondenti insieme alle relative versioni.\n- A differenza di `apt install`, la ricerca nei repository dei pacchetti legge solo i file di indice del catalogo locale e **non** richiede i privilegi di superutente (`sudo`).",
    "instructions": "Cerchiamo nel repository dei pacchetti! Esegui `apt search tree` per trovare i pacchetti relativi alla visualizzazione delle directory nel catalogo software.",
    "commandHelp": [
      {
        "cmd": "apt search tree",
        "desc": "Cerca nei repository dei pacchetti i pacchetti che corrispondono a \"tree\""
      }
    ],
    "objectives": [
      {
        "id": "ran_apt_search",
        "text": "Esegui \"apt search tree\" per interrogare il catalogo dei pacchetti"
      }
    ],
    "hints": [
      "Usa il comando apt search seguito dal nome o dalla parola chiave del pacchetto che vuoi cercare.",
      "Esegui apt search tree per visualizzare i pacchetti disponibili nel repository.",
      "Prova a eseguire: apt search tree"
    ]
  },
  "82": {
    "title": "Eliminazione dei pacchetti (apt purge)",
    "description": "Quando si disinstalla il software su Linux, lo standard `apt remove` disinstalla i binari dell'applicazione ma lascia i file di configurazione del sistema nel caso in cui si reinstalli in seguito. Per eliminare completamente un pacchetto software E cancellare tutti i file di configurazione associati, utilizziamo `apt purge` (o `apt remove --purge`).\n\n- Il comando `sudo apt purge <package>` rimuove l'applicazione e cancella tutti i file di configurazione rimanenti.\n- Poiché l'eliminazione modifica le cartelle e i file di configurazione a livello di sistema, richiede privilegi di superutente (`sudo`).",
    "instructions": "Rimuoviamo completamente un pacchetto e i suoi file di configurazione. Esegui `sudo apt purge tree` per eliminare il programma `tree` dal sistema.",
    "commandHelp": [
      {
        "cmd": "sudo apt purge tree",
        "desc": "Elimina il pacchetto e cancella i suoi file di configurazione"
      }
    ],
    "objectives": [
      {
        "id": "purged_tree",
        "text": "Elimina il pacchetto \"albero\" utilizzando \"sudo apt purge tree\""
      }
    ],
    "hints": [
      "Utilizza apt purge con privilegi di superutente per rimuovere completamente un pacchetto insieme ai suoi file di configurazione.",
      "Esegui sudo apt purge tree per eliminare il pacchetto tree.",
      "Prova a eseguire: sudo apt purge tree"
    ]
  },
  "83": {
    "title": "Struttura della directory Linux e FHS",
    "description": "Ogni sistema Linux segue una gerarchia di filesystem standard a partire dalla directory root `/`. A differenza di Windows (che utilizza lettere di unità come `C:` o `D:`), Linux unifica tutti i file e lo spazio di archiviazione in `/`.\n\nEcco le directory di sistema chiave che ogni utente Linux dovrebbe conoscere:\n- `/` (Root): la cartella principale di livello superiore dell'intero sistema.\n- `/etc`: contiene le configurazioni del sistema (ad esempio `/etc/hosts`, `/etc/passwd`).\n- `/var`: contiene dati variabili che cambiano nel tempo (registri, spool, cache come `/var/log`).\n- `/home`: Cartelle personali dell'utente (es. `/home/learner`).\n- `/tmp`: area di archiviazione temporanea per file temporanei.\n- `/usr`: utilità utente, applicazioni e librerie di sistema.",
    "instructions": "Esploriamo il layout del sistema! Innanzitutto, vai alla directory principale eseguendo `cd /`. Quindi esegui `ls /etc` per visualizzare i file di configurazione del sistema archiviati in `/etc`.",
    "commandHelp": [
      {
        "cmd": "cd /",
        "desc": "Naviga alla directory root"
      },
      {
        "cmd": "ls /etc",
        "desc": "Elenca i file di configurazione in /etc"
      }
    ],
    "objectives": [
      {
        "id": "visited_root",
        "text": "Naviga alla directory root (/)"
      },
      {
        "id": "listed_etc",
        "text": "Elenca il contenuto della directory /etc"
      }
    ],
    "hints": [
      "Usa 'cd /' per passare alla directory root.",
      "Usa 'ls /etc' per visualizzare i file di configurazione all'interno di /etc.",
      "Prova a eseguire: cd / e poi: ls /etc"
    ]
  }
};
