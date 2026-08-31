import type { LessonTranslation } from "./types";

export const translations_fr: Record<number, LessonTranslation> = {
  "1": {
    "title": "Qui suis-je et où suis-je ?",
    "description": "Imaginez-vous entrer dans une bibliothèque immense et sombre contenant des millions de livres, mais vous n'avez pas de carte et vous ne vous souvenez même pas de votre propre badge. Avant de pouvoir rechercher quoi que ce soit, vous devez savoir qui vous êtes et où vous vous situez. Dans le shell Linux, nous commençons par exactement les mêmes questions !\n\n- La commande `whoami` imprime le nom d'utilisateur sous lequel vous êtes actuellement connecté.\n- La commande `pwd` (imprimer le répertoire de travail) agit comme un GPS, vous indiquant le chemin exact du dossier où vous vous trouvez actuellement.",
    "instructions": "Retrouvons nos repères ! Tout d’abord, exécutez `whoami` pour voir votre nom d’utilisateur actif, puis exécutez `pwd` pour imprimer l’emplacement actuel de votre dossier dans le système de fichiers.",
    "commandHelp": [
      {
        "cmd": "whoami",
        "desc": "Imprime le nom d'utilisateur actif"
      },
      {
        "cmd": "pwd",
        "desc": "Imprime le répertoire de travail actuel"
      }
    ],
    "objectives": [
      {
        "id": "ran_whoami",
        "text": "Exécutez la commande \"whoami\""
      },
      {
        "id": "ran_pwd",
        "text": "Exécutez la commande \"pwd\""
      }
    ],
    "hints": [
      "Vérifiez les commandes que vous devez exécuter pour identifier votre utilisateur et votre chemin.",
      "La commande 'whoami' affiche votre nom d'utilisateur et 'pwd' affiche votre chemin actuel.",
      "Essayez d'exécuter : whoami, puis pwd"
    ]
  },
  "2": {
    "title": "Navigation et liste des fichiers",
    "description": "Maintenant que vous savez où vous êtes, comment regarder autour de vous et vous déplacer vers une autre pièce de cette bibliothèque numérique ? Sous Linux, nous faisons cela à l'aide de deux commandes simples :\n\n- `ls` : C'est comme allumer les lumières d'une pièce pour voir tous les fichiers et dossiers qui s'y trouvent.\n- `cd <path>` : Abréviation de \"changer de répertoire\", cela vous permet de franchir une porte vers un autre dossier.\n\nPour spécifier où vous souhaitez aller, vous pouvez utiliser des chemins **absolus** (en commençant à partir de la racine `/` du système, comme `/var/log`) ou des chemins **relatifs** (en fonction de l'endroit où vous vous trouvez actuellement, comme utiliser `..` pour revenir dans le dossier parent).",
    "instructions": "Explorons. Accédez au dossier `/var/log` en exécutant `cd /var/log`, puis exécutez la commande `ls` pour voir les fichiers journaux stockés à l’intérieur.",
    "commandHelp": [
      {
        "cmd": "ls",
        "desc": "Répertorie les fichiers dans le répertoire actuel"
      },
      {
        "cmd": "cd /var/log",
        "desc": "Changez le répertoire en /var/log"
      }
    ],
    "objectives": [
      {
        "id": "in_var_log",
        "text": "Changez le répertoire en /var/log"
      },
      {
        "id": "ran_ls",
        "text": "Exécutez la commande \"ls\" dans /var/log"
      }
    ],
    "hints": [
      "Réfléchissez à la façon de naviguer et de lister les fichiers dans un répertoire spécifique.",
      "Changez le répertoire en /var/log en utilisant cd, puis utilisez ls.",
      "Essayez d'exécuter : cd /var/log, puis ls"
    ]
  },
  "3": {
    "title": "Création de répertoires",
    "description": "Imaginez que votre bureau est rempli de papiers volants et que vous avez besoin de dossiers physiques pour garder les choses bien rangées. Sous Linux, nous organisons les fichiers en créant des dossiers (répertoires) à l'aide de la commande `mkdir` (make directory).\n\nL'exécution de `mkdir code` crée un tout nouveau dossier nommé « code » là où vous vous trouvez. Vous pouvez créer des dossiers n'importe où dans le système de fichiers en donnant à `mkdir` un chemin relatif ou absolu.",
    "instructions": "Créons un espace de travail. Revenez à votre répertoire personnel en exécutant `cd ~` (ou `cd /home/learner`), puis créez un nouveau dossier nommé `projects` à l'intérieur.",
    "commandHelp": [
      {
        "cmd": "cd ~",
        "desc": "Retournez au répertoire personnel"
      },
      {
        "cmd": "mkdir projects",
        "desc": "Créez un dossier de projets"
      }
    ],
    "objectives": [
      {
        "id": "in_home",
        "text": "Soyez dans votre dossier personnel (/home/learner)"
      },
      {
        "id": "used_mkdir",
        "text": "Utilisez la commande \"mkdir\""
      },
      {
        "id": "dir_exists",
        "text": "Créez un répertoire nommé \"projets\""
      }
    ],
    "hints": [
      "Assurez-vous d'abord que vous êtes dans le bon répertoire de démarrage.",
      "Accédez à votre répertoire personnel (~ ou /home/learner) et utilisez la commande mkdir.",
      "Essayez d'exécuter : cd ~ suivi des projets mkdir"
    ]
  },
  "4": {
    "title": "Répertoires et options imbriqués",
    "description": "Imaginez que vous essayiez de construire un ensemble de poupées gigognes, mais que vous deviez construire celles les plus extérieures avant de pouvoir construire la petite à l'intérieur. Par défaut, `mkdir` est comme ça : il refuse de créer un dossier au plus profond de dossiers qui n'existent pas encore. Pour éviter les tracas liés à la création de dossiers un par un, nous utilisons un commutateur :\n\n- L'option `-p` (ou `--parents`) indique à `mkdir` de créer automatiquement tous les dossiers parents manquants avant d'accéder au dossier final. Par exemple, `mkdir -p workspace/src/utils` crée `workspace`, `workspace/src` et `workspace/src/utils` en une seule commande.\n\n**Pourquoi est-ce important** : Si vous exécutez `mkdir workspace/src/utils` sans `-p` et que `workspace` et `workspace/src` n'existent pas déjà, vous obtiendrez : `mkdir: cannot create directory 'workspace/src/utils': No such file or directory`. L'indicateur `-p` résout ce problème en créant automatiquement tous les dossiers parents manquants.",
    "instructions": "Construisons une structure de dossiers approfondie. Créez un chemin imbriqué `workspace/src/utils` dans votre dossier personnel en utilisant `mkdir -p workspace/src/utils`.",
    "commandHelp": [
      {
        "cmd": "mkdir -p path",
        "desc": "Créer des répertoires imbriqués et des répertoires parents"
      }
    ],
    "objectives": [
      {
        "id": "nested_dir_exists",
        "text": "Créer un répertoire imbriqué workspace/src/utils"
      },
      {
        "id": "used_p_switch",
        "text": "Utilisez le commutateur -p ou --parents dans mkdir"
      }
    ],
    "hints": [
      "Recherchez un indicateur mkdir qui crée automatiquement les répertoires parents s'ils n'existent pas.",
      "Utilisez mkdir avec le commutateur -p pour créer des dossiers imbriqués.",
      "Essayez d'exécuter : mkdir -p workspace/src/utils"
    ]
  },
  "5": {
    "title": "Effacer l'écran",
    "description": "Vous êtes-vous déjà senti submergé lorsque votre bureau est couvert de notes et de papiers en désordre ? Votre terminal peut devenir tout aussi encombré. Lorsque c’est le cas, vous pouvez effacer tout l’ancien texte et repartir à zéro.\n\n- La commande `clear` efface l'écran visible, en faisant glisser la sortie précédente hors de vue afin que vous ayez une nouvelle toile vierge en haut du terminal.",
    "instructions": "Donnez-vous un peu de répit ! Exécutez `clear` pour nettoyer l’écran.",
    "commandHelp": [
      {
        "cmd": "clear",
        "desc": "Effacer l'écran du terminal"
      }
    ],
    "objectives": [
      {
        "id": "ran_clear",
        "text": "Exécutez la commande \"clear\""
      }
    ],
    "hints": [
      "Balayez tout l'ancien texte et recommencez.",
      "Exécutez la commande qui efface l'écran du terminal.",
      "Essayez d'exécuter : effacer"
    ]
  },
  "6": {
    "title": "Trouver l'aide de Shell",
    "description": "Lorsque vous achetez un nouveau jeu de société, vous jetez généralement un coup d'œil au livre de règles ou à la carte de référence pour voir quels mouvements sont autorisés. Dans notre émulateur de terminal, vous disposez d'un aide-mémoire intégré !\n\n- La commande `help` répertorie toutes les commandes prises en charge par ce simulateur, ainsi que des détails indiquant si elle prend en charge la canalisation ou la redirection des sorties.",
    "instructions": "Inspectons le livre de règles. Exécutez `help` pour voir la liste complète des commandes avec lesquelles vous pouvez jouer.",
    "commandHelp": [
      {
        "cmd": "help",
        "desc": "Liste les commandes disponibles"
      }
    ],
    "objectives": [
      {
        "id": "ran_help",
        "text": "Exécutez la commande \"help\""
      }
    ],
    "hints": [
      "Consultez les instructions pour trouver la commande appropriée pour l'aide du livre de règles.",
      "Utilisez la commande 'help'.",
      "Essayez d'exécuter : aide"
    ]
  },
  "7": {
    "title": "Création de fichiers vides",
    "description": "Imaginez que vous vouliez commencer à écrire une nouvelle entrée de journal, mais que vous ayez d'abord besoin d'une feuille de papier vierge. Sous Linux, nous récupérons un nouveau fichier texte vide à l'aide de la commande `touch`.\n\n- La commande `touch` crée un tout nouveau fichier vide s'il n'existe pas encore (comme exécuter `touch draft.txt` pour créer `draft.txt`). Si le fichier existe déjà, il met simplement à jour l'horodatage de la « dernière modification » du fichier sans modifier son contenu. Mettons un fichier dans notre nouveau dossier de projets.",
    "instructions": "Créons une page vierge. Créez un fichier vide nommé `task.txt` dans le dossier `projects` (soit entrez d'abord le dossier, soit utilisez `touch projects/task.txt`).",
    "commandHelp": [
      {
        "cmd": "cd projects",
        "desc": "Entrez dans le dossier des projets"
      },
      {
        "cmd": "touch task.txt",
        "desc": "Créez le fichier task.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_touch",
        "text": "Utilisez la commande \"touch\""
      },
      {
        "id": "file_exists",
        "text": "Créez le fichier \"task.txt\" dans \"projects\""
      }
    ],
    "hints": [
      "Pensez à quelle commande crée un nouveau fichier vide.",
      "Utilisez la commande 'touch' dans le répertoire 'projects'.",
      "Essayez d'exécuter : touchez projets/task.txt"
    ]
  },
  "8": {
    "title": "Lire le contenu d'un fichier",
    "description": "Pensez à ouvrir un dossier, à extraire une page de texte et à la tenir pour la lire. Sous Linux, nous lisons les fichiers instantanément sans ouvrir un éditeur de texte lourd à l'aide de la commande `cat` (concaténer).\n\n- La commande `cat` imprime l'intégralité du contenu d'un fichier directement sur l'écran de votre terminal. Par exemple, exécuter `cat notes.txt` vous permet de voir immédiatement ce qui est écrit dans `notes.txt`.",
    "instructions": "Lisons un fichier système. Imprimez le contenu du fichier de configuration du réseau local sur `/etc/hosts` en exécutant `cat /etc/hosts`.",
    "commandHelp": [
      {
        "cmd": "cat /etc/hosts",
        "desc": "Imprimer le contenu du fichier hosts"
      }
    ],
    "objectives": [
      {
        "id": "cat_hosts",
        "text": "Exécuter la commande \"cat\" sur /etc/hosts"
      }
    ],
    "hints": [
      "Pensez à quelle commande génère/affiche le contenu d'un fichier.",
      "Utilisez la commande 'cat' sur le fichier /etc/hosts.",
      "Essayez d'exécuter : cat /etc/hosts"
    ]
  },
  "9": {
    "title": "Gestion des espaces dans les noms de fichiers",
    "description": "Si vous dites à un robot de « peindre ma chambre en bleu », il doit savoir si « ma chambre » est un seul endroit ou si « ma » et « chambre » sont deux instructions différentes. Linux utilise des espaces pour séparer les commandes de leurs arguments. Donc, si vous exécutez `mkdir my folder`, Linux pense que vous souhaitez créer deux dossiers distincts : un nommé « mon » et un autre nommé « dossier » !\n\n- Pour indiquer à Linux qu'un nom avec des espaces est un élément unique, nous devons le mettre entre guillemets (`\"my folder\"` ou `'my folder'`) ou utiliser une barre oblique inverse pour échapper à l'espace (`my\\ folder`).",
    "instructions": "Traitons les noms avec des espaces. Créez un dossier nommé `\"my code\"` dans votre répertoire personnel, puis créez un fichier vide nommé `\"my task\"` à l'intérieur.",
    "commandHelp": [
      {
        "cmd": "mkdir \"my code\"",
        "desc": "Créer un dossier avec un espace dans le nom"
      },
      {
        "cmd": "touch \"my code/my task\"",
        "desc": "Créer un fichier avec un espace dans le nom"
      }
    ],
    "objectives": [
      {
        "id": "dir_with_space_exists",
        "text": "Créer un répertoire \"mon code\""
      },
      {
        "id": "file_with_space_exists",
        "text": "Créer un fichier \"ma tâche\" à l'intérieur de \"mon code\""
      }
    ],
    "hints": [
      "Lors de la création de fichiers ou de répertoires avec des espaces dans leurs noms, mettez le nom entre guillemets.",
      "Utilisez mkdir \"mon code\" suivi de toucher \"mon code/ma tâche\".",
      "Essayez d'exécuter : mkdir \"mon code\" et touchez \"mon code/ma tâche\""
    ]
  },
  "10": {
    "title": "Écriture et écrasement de fichiers",
    "description": "Si vous souhaitez écrire un message sur un tableau, vous devez d'abord essuyer complètement le tableau, puis écrire vos nouveaux mots. Sous Linux, nous écrivons des messages dans des fichiers à l'aide de l'opérateur `>` (redirection de sortie).\n\n- La commande `echo \"message\"` imprime normalement le texte à l'écran.\n- En ajoutant le symbole `>`, nous redirigeons ce texte vers un fichier. Par exemple, `echo \"Hi\" > greeting.txt` écrit « Salut » dans `greeting.txt`. Si le fichier contient déjà du texte, `>` l'écrase complètement avec le nouveau message.",
    "instructions": "Écrivons dans un nouveau fichier. Enregistrez le texte « Système en ligne » dans un fichier nommé `status.txt` dans votre dossier personnel `/home/learner`.",
    "commandHelp": [
      {
        "cmd": "echo \"System Online\" > status.txt",
        "desc": "Créer status.txt avec le texte"
      }
    ],
    "objectives": [
      {
        "id": "used_echo_redirect",
        "text": "Utiliser echo avec > redirection"
      },
      {
        "id": "file_created",
        "text": "Créer \"status.txt\" dans le répertoire personnel"
      },
      {
        "id": "content_correct",
        "text": "Le contenu du fichier est exactement \"Système en ligne\""
      }
    ],
    "hints": [
      "Pour écrire du texte dans un fichier, vous pouvez rediriger la sortie de la commande echo.",
      "Utilisez l'opérateur '>' pour rediriger l'écho \"Système en ligne\" vers status.txt.",
      "Essayez d'exécuter : echo \"System Online\" > status.txt"
    ]
  },
  "11": {
    "title": "Ajout aux fichiers",
    "description": "Au lieu de nettoyer le tableau, que se passe-t-il si vous souhaitez simplement ajouter une nouvelle ligne en bas ? Sous Linux, nous ajoutons du texte à la fin d'un fichier sans toucher au contenu existant à l'aide de l'opérateur `>>` (ajouter la redirection).\n\n- L'opérateur `>>` ajoute votre nouveau texte tout en bas du fichier. Par exemple, `echo \"New Line\" >> logs.txt` ajoute « Nouvelle ligne » à la fin de `logs.txt` tout en gardant tous vos anciens journaux en sécurité.",
    "instructions": "Ajoutons une ligne. Ajoutez le texte « All Checks Green » au bas de votre fichier `status.txt` dans votre dossier personnel `/home/learner`, puis exécutez `cat` dessus pour voir les deux lignes.",
    "commandHelp": [
      {
        "cmd": "echo \"All Checks Green\" >> status.txt",
        "desc": "Ajouter le texte au fichier status.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_append",
        "text": "Utiliser echo avec >> ajouter la redirection"
      },
      {
        "id": "has_first_line",
        "text": "La première ligne est toujours \"Système en ligne\""
      },
      {
        "id": "has_second_line",
        "text": "La deuxième ligne a \"All Checks Green\""
      },
      {
        "id": "used_cat",
        "text": "Vérifiez le résultat à l'aide de la commande \"cat\""
      }
    ],
    "hints": [
      "Utilisez la redirection d'ajout afin de ne pas écraser le contenu du fichier existant.",
      "Utilisez l'opérateur '>>' pour ajouter du texte et 'cat' pour le vérifier.",
      "Essayez d'exécuter : echo \"All Checks Green\" >> status.txt et cat status.txt"
    ]
  },
  "12": {
    "title": "Copier et déplacer des fichiers",
    "description": "Imaginez réorganiser votre pièce : parfois vous souhaitez faire une photocopie d'un document à conserver dans un autre tiroir, et d'autres fois vous souhaitez simplement saisir un dossier et le glisser dans une nouvelle étagère ou changer son étiquette. Nous faisons cela sous Linux avec des commandes simples :\n\n- `cp <source> <destination>` crée une copie identique d'un fichier dans un nouvel emplacement.\n- `mv <source> <destination>` déplace un fichier vers un nouveau dossier ou renomme le fichier si vous le conservez dans le même dossier (par exemple, `mv old.txt new.txt`).",
    "instructions": "Renommons un fichier. Remplacez le nom de `status.txt` dans votre dossier personnel par `system.log` à l'aide de la commande `mv`.",
    "commandHelp": [
      {
        "cmd": "mv status.txt system.log",
        "desc": "Renommez status.txt en system.log"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "Utilisez la commande \"mv\" pour renommer"
      },
      {
        "id": "old_removed",
        "text": "Le status.txt d'origine est supprimé/renommé"
      },
      {
        "id": "new_created",
        "text": "Un nouveau fichier system.log existe avec un contenu correct"
      }
    ],
    "hints": [
      "Pensez à la commande qui renomme ou déplace un fichier.",
      "Utilisez la commande 'mv' pour renommer status.txt en system.log.",
      "Essayez d'exécuter : mv status.txt system.log"
    ]
  },
  "13": {
    "title": "Caractères génériques et opérations multi-fichiers",
    "description": "Imaginez que vous ayez une pile de dossiers étiquetés \"log_monday\", \"log_tuesday\" et \"log_wednesday\", et que vous souhaitiez les ouvrir et les lire tous en même temps sans taper chaque nom. Linux vous permet d'utiliser des **caractères génériques** comme raccourcis de recherche !\n\n- Le symbole `*` correspond à n'importe quel caractère de n'importe quelle longueur. Par exemple, `cat log_*` lit chaque fichier commençant par \"log_\".\n- Le symbole `?` agit comme un espace réservé à un seul caractère. Par exemple, `log_?.txt` correspond à `log_1.txt` mais ignorera `log_12.txt`.",
    "instructions": "Fusionnons plusieurs journaux. Combinez le contenu de tous les fichiers commençant par `log_` dans votre répertoire personnel en un seul fichier nommé `combined.log` à l'aide du caractère générique `*` et de la redirection `>`.",
    "commandHelp": [
      {
        "cmd": "cat log_* > combined.log",
        "desc": "Combinez tous les fichiers correspondants dans Combined.log"
      }
    ],
    "objectives": [
      {
        "id": "used_wildcard",
        "text": "Utilisez cat avec un motif de caractère générique (log_*)"
      },
      {
        "id": "combined_exists",
        "text": "Créez \"combined.log\" dans le répertoire personnel"
      },
      {
        "id": "content_combined",
        "text": "Vérifiez qu'il contient les journaux de log_1, log_2 et log_3"
      }
    ],
    "hints": [
      "Pensez à la façon d'utiliser des caractères génériques pour faire correspondre plusieurs fichiers commençant par log_.",
      "Utilisez cat log_* pour lire tous les fichiers de correspondance et rediriger la sortie vers Combined.log.",
      "Essayez d'exécuter : cat log_* > Combined.log"
    ]
  },
  "14": {
    "title": "Suppression de fichiers et de dossiers",
    "description": "Lorsque vous nettoyez votre bureau physique, vous pouvez jeter de vieux papiers dans une corbeille de recyclage où vous pourrez les récupérer si vous avez commis une erreur. Sous Linux, il n'y a pas de filet de sécurité : lorsque vous supprimez quelque chose du terminal, il disparaît à jamais !\n\n- La commande `rm` supprime les fichiers.\n- Étant donné que les dossiers peuvent contenir d'autres fichiers, `rm` ne supprimera pas de dossier par défaut. Vous devez ajouter l'indicateur `-r` (récursif) pour indiquer à Linux de plonger et de supprimer le dossier ainsi que tout ce qu'il contient.\n\n**Pourquoi est-ce important** : Si vous exécutez `rm downloads` sans `-r` lorsque `downloads` est un dossier, vous obtiendrez : `rm: cannot remove 'downloads': Is a directory`. L'indicateur `-r` indique à Linux de supprimer récursivement le dossier et tout ce qu'il contient.",
    "instructions": "Nettoyons notre répertoire personnel. Supprimez définitivement le dossier `downloads` et tout son contenu en exécutant `rm -r downloads`.",
    "commandHelp": [
      {
        "cmd": "rm -r downloads",
        "desc": "Supprimer le dossier de manière récursive"
      }
    ],
    "objectives": [
      {
        "id": "used_rm",
        "text": "Utilisez la commande \"rm\" avec l'indicateur -r"
      },
      {
        "id": "downloads_removed",
        "text": "Le répertoire /home/learner/downloads est supprimé"
      }
    ],
    "hints": [
      "Pensez à la commande qui supprime un fichier ou un répertoire de manière récursive.",
      "Utilisez la commande 'rm' avec l'option récursive (-r).",
      "Essayez d'exécuter : rm -r téléchargements"
    ]
  },
  "15": {
    "title": "Introduction aux tuyaux et toilettes",
    "description": "Imaginez une chaîne de montage où un travailleur emballe un produit et le remet immédiatement au prochain travailleur pour l'emballer dans une boîte - aucun stockage intermédiaire n'est nécessaire. Sous Linux, nous connectons les commandes exactement comme ceci en utilisant un **pipe** (`|`).\n\n- Un tube (`|`) achemine la sortie d'une commande directement vers l'entrée de la commande suivante. Par exemple, `ls | wc -l` répertorie les fichiers et transmet immédiatement cette liste à `wc -l` (nombre de mots - lignes), qui les compte à la volée sans avoir besoin de fichiers temporaires.\n\n**Pourquoi est-ce important** : Si vous exécutez `wc` sans `-l`, il génère trois nombres distincts : des lignes, des mots et des octets (par exemple, `  5  10  85`). Cela rend difficile son utilisation dans des pipelines ou des scripts qui nécessitent un décompte propre et unique. L'indicateur `-l` limite la sortie au seul nombre de lignes.",
    "instructions": "Connectons quelques commandes. Comptez les fichiers dans `/home/learner` à l'aide d'un tube (`ls | wc -l`) et écrivez le décompte final dans un fichier nommé `file_count.txt` à l'aide de la redirection `>`.",
    "commandHelp": [
      {
        "cmd": "ls | wc -l",
        "desc": "Compter les fichiers et les dossiers dans le répertoire actuel"
      },
      {
        "cmd": "ls | wc -l > file_count.txt",
        "desc": "Écrire le nombre de fichiers dans file_count.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_pipe",
        "text": "Utiliser le tube (|) pour connecter ls à wc"
      },
      {
        "id": "file_count_exists",
        "text": "Créer le fichier \"file_count.txt\" dans le répertoire personnel"
      },
      {
        "id": "count_is_correct",
        "text": "Vérifier que le fichier contient le nombre de fichiers numérique correct"
      }
    ],
    "hints": [
      "Pensez à la façon de rediriger la sortie d'une commande vers une autre à l'aide d'un tube.",
      "Dirigez la sortie de ls vers wc -l, puis redirigez le résultat vers file_count.txt.",
      "Essayez d'exécuter : ls | wc -l > file_count.txt"
    ]
  },
  "16": {
    "title": "Trier et trouver des cartes uniques",
    "description": "Imaginez trier un jeu de cartes où les doublons sont dispersés partout. Pour repérer et supprimer facilement les doublons, vous devez d’abord regrouper les cartes identiques. Sous Linux, la commande `uniq` filtre les lignes répétitives, mais elle a un problème : elle **détecte uniquement les doublons les uns à côté des autres** !\n\n- Pour supprimer tous les doublons d'une liste désordonnée, vous devez d'abord trier les lignes à l'aide de `sort` puis transmettre le résultat à `uniq`. Par exemple, `sort raw.txt | uniq` organise et nettoie la liste en une seule fois.",
    "instructions": "Nettoyons une liste d'invités en désordre. Le fichier `names.txt` contient des noms en double. Connectez `sort` et `uniq` avec un tube pour rechercher tous les noms uniques par ordre alphabétique et enregistrez-les dans `unique_names.txt`.",
    "commandHelp": [
      {
        "cmd": "sort names.txt",
        "desc": "Trier les lignes de names.txt par ordre alphabétique"
      },
      {
        "cmd": "sort names.txt | uniq > unique_names.txt",
        "desc": "Trier et filtrer les doublons dans un fichier"
      }
    ],
    "objectives": [
      {
        "id": "used_sort",
        "text": "Utiliser la commande \"sort\" sur names.txt"
      },
      {
        "id": "used_uniq",
        "text": "Diriger la sortie triée vers la commande \"uniq\""
      },
      {
        "id": "unique_names_exists",
        "text": "Créer un fichier \"unique_names.txt\""
      },
      {
        "id": "sorted_and_unique",
        "text": "Vérifier que le contenu a des noms triés uniques"
      }
    ],
    "hints": [
      "Vous devez d'abord trier les noms par ordre alphabétique, puis filtrer les doublons.",
      "Dirigez la sortie du sort names.txt vers uniq et redirigez-la vers unique_names.txt.",
      "Essayez d'exécuter : trier les noms.txt | uniq > noms_uniques.txt"
    ]
  },
  "17": {
    "title": "Filtrage avec grep",
    "description": "Imaginez parcourir un énorme journal de bord de mille pages pour trouver chaque fois qu'une erreur système se produit. Faire cela manuellement prendrait des heures ! Sous Linux, nous utilisons `grep` comme loupe numérique pour rechercher instantanément des mots ou des modèles spécifiques.\n\n- La commande `grep` filtre les fichiers ou le texte redirigé, en imprimant uniquement les lignes qui correspondent à votre mot de recherche. Par exemple, l'exécution de `grep \"ERROR\" logs.txt` analyse le fichier et extrait uniquement les lignes contenant « ERREUR ».",
    "instructions": "Filtrons nos logs. Recherchez dans `logs.txt` toutes les lignes contenant `[ERROR]` et enregistrez-les dans un nouveau fichier nommé `errors.log`.",
    "commandHelp": [
      {
        "cmd": "grep \"[ERROR]\" logs.txt",
        "desc": "Recherchez dans logs.txt les lignes contenant [ERROR]"
      },
      {
        "cmd": "grep \"[ERROR]\" logs.txt > errors.log",
        "desc": "Enregistrez les erreurs correspondantes dans error.log"
      }
    ],
    "objectives": [
      {
        "id": "used_grep",
        "text": "Utilisez la commande \"grep\" pour rechercher logs.txt"
      },
      {
        "id": "errors_log_exists",
        "text": "Créez le fichier \"errors.log\" dans le répertoire personnel"
      },
      {
        "id": "only_errors",
        "text": "Vérifiez que error.log ne contient que des entrées [ERROR]"
      }
    ],
    "hints": [
      "Pensez à la commande qui filtre les lignes correspondant à un modèle spécifique.",
      "Utilisez grep pour rechercher « [ERREUR] » dans logs.txt et rediriger la sortie vers erreurs.log.",
      "Essayez d'exécuter : grep \"[ERROR]\" logs.txt > erreurs.log"
    ]
  },
  "18": {
    "title": "Modification des autorisations de fichiers",
    "description": "Imaginez diriger une entreprise où seuls les gestionnaires peuvent signer des chèques, les employés peuvent lire les horaires et les visiteurs ne peuvent regarder que l'enseigne du magasin. Sous Linux, nous contrôlons qui peut lire, écrire ou exécuter des fichiers à l'aide d'un système de sécurité numérique (appelé représentation octale) :\n\n- `7` = Accès complet : Lecture + Écriture + Exécution (`rwx`)\n- `6` = Modifier l'accès : Lecture + Écriture (`rw-`)\n- `5` = Accès en lecture et exécution : Lecture + Exécution (`r-x`)\n- `4` = Accès en lecture seule : Lecture (`r--`)\n\nNous appliquons ces paramètres avec `chmod <octal> <file>`. Par exemple, `chmod 755 script.sh` vous permet d'exécuter le script, tandis que d'autres peuvent uniquement le lire et l'exécuter. Nous avons un script nommé `deploy.sh` qui est actuellement verrouillé : rendons-le exécutable !",
    "instructions": "Modifions les autorisations. Le fichier `deploy.sh` dispose actuellement d'autorisations restreintes (644). Exécutez `chmod 755 deploy.sh` pour le rendre exécutable par le propriétaire et lisible/exécutable par tout le monde.",
    "commandHelp": [
      {
        "cmd": "chmod 755 deploy.sh",
        "desc": "Définir les autorisations des exécutables"
      },
      {
        "cmd": "ls -l deploy.sh",
        "desc": "Vérifier les autorisations actuelles des fichiers"
      }
    ],
    "objectives": [
      {
        "id": "used_chmod",
        "text": "Exécuter la commande \"chmod\" sur déployer.sh"
      },
      {
        "id": "is_executable",
        "text": "Définir les autorisations de déployer.sh sur 755"
      }
    ],
    "hints": [
      "Pensez à la commande qui modifie les autorisations des fichiers.",
      "Utilisez la commande 'chmod' avec le code d'autorisation 755 sur déployer.sh.",
      "Essayez d'exécuter : chmod 755 déployer.sh"
    ]
  },
  "19": {
    "title": "Fichiers et configurations cachés",
    "description": "Pensez à un tiroir secret sous votre bureau dans lequel vous conservez les paramètres système afin qu'ils n'encombrent pas votre espace de travail principal. Sous Linux, nous créons des fichiers cachés simplement en commençant leur nom par un point (`.`).\n\n- Ces fichiers dot (comme `.bashrc` ou `.config`) stockent les préférences utilisateur et les paramètres de configuration en arrière-plan.\n- Une commande standard `ls` ne les affichera pas. Pour jeter un œil à ces fichiers cachés, vous devez ajouter l'indicateur `-a` (all), en exécutant `ls -a`.\n\n**Pourquoi est-ce important** : Si vous exécutez `ls` sans `-a`, les fichiers cachés (dont les noms commencent par `.`) sont complètement omis de la sortie. Vous ne verrez pas les fichiers importants comme `.config_names` et pourriez penser qu'ils sont manquants. L'indicateur `-a` indique à `ls` de lister tous les fichiers, y compris ceux masqués.",
    "instructions": "Cachons un fichier ! Renommez `unique_names.txt` dans votre dossier personnel en un fichier caché nommé `.config_names` en utilisant `mv`, puis révélez-le en exécutant `ls -a`.",
    "commandHelp": [
      {
        "cmd": "ls -a",
        "desc": "Liste tous les fichiers, y compris les fichiers cachés"
      },
      {
        "cmd": "mv file .file",
        "desc": "Masquer un fichier en préfixant son nom avec un point"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "Utilisez \"mv\" pour renommer le fichier"
      },
      {
        "id": "hidden_file_exists",
        "text": "Créez le fichier caché \".config_names\" dans la page d'accueil"
      },
      {
        "id": "old_file_removed",
        "text": "Vérifiez que le fichier original unique_names.txt est supprimé"
      },
      {
        "id": "used_ls_a",
        "text": "Utilisez \"ls -a\" pour vérifier que le fichier caché est présent"
      }
    ],
    "hints": [
      "Sous Linux, les fichiers cachés sont préfixés avec un point (.) et affiché à l'aide d'un indicateur ls spécial.",
      "Utilisez mv unique_names.txt .config_names et exécutez ls -a pour le révéler.",
      "Essayez d'exécuter : mv unique_names.txt .config_names suivi de ls -a"
    ]
  },
  "20": {
    "title": "Changement de propriétaire du fichier",
    "description": "Imaginez acheter une maison et devoir enregistrer officiellement l'acte sous le nom d'un nouveau propriétaire. Sous Linux, chaque fichier et dossier a un propriétaire officiel et un groupe. Si vous devez céder la propriété d'un fichier à quelqu'un d'autre (comme l'administrateur système), vous utilisez la commande `chown` (changer de propriétaire).\n\n- Étant donné que changer le propriétaire d'un fichier est une action de sécurité sensible, vous devez le préfixer avec `sudo` pour l'exécuter avec des privilèges administratifs. Par exemple, `sudo chown root reports.csv` attribue le fichier à l'utilisateur « root ».",
    "instructions": "Transférons la propriété. Remplacez le propriétaire de `/home/learner/reports.csv` par l'administrateur `root` en exécutant `sudo chown root reports.csv`.",
    "commandHelp": [
      {
        "cmd": "sudo chown root reports.csv",
        "desc": "Changez le propriétaire de reports.csv en root"
      }
    ],
    "objectives": [
      {
        "id": "used_chown",
        "text": "Exécutez la commande \"chown\" avec sudo"
      },
      {
        "id": "owner_changed",
        "text": "Définissez le propriétaire de reports.csv en root"
      }
    ],
    "hints": [
      "Pensez à la commande qui modifie la propriété du fichier et rappelez-vous qu'elle nécessite des privilèges d'administrateur.",
      "Utilisez la commande 'chown' préfixée par 'sudo' pour changer le propriétaire en root.",
      "Essayez d'exécuter : sudo chown root reports.csv"
    ]
  },
  "21": {
    "title": "Privilèges de superutilisateur (sudo)",
    "description": "Imaginez travailler sur votre ordinateur avec un compte standard pour éviter de supprimer accidentellement des fichiers critiques du système d'exploitation. Lorsque vous devez installer un logiciel ou modifier les paramètres système, votre ordinateur demande une autorisation d'administrateur. Sous Linux, nous utilisons `sudo` (abréviation de « superuser do ») comme carte-clé administrative.\n\n- L'utilisateur `root` est le compte administrateur principal avec un contrôle total sur le système.\n- Les utilisateurs standard ne peuvent pas lire les fichiers sensibles (comme la base de données de mots de passe `/etc/shadow`). En tapant `sudo` avant une commande, vous l'exécutez avec des pouvoirs d'administrateur temporaires pour contourner ces blocages.",
    "instructions": "Testons les pouvoirs du superutilisateur. Exécutez `cat /etc/shadow` pour voir l’erreur d’autorisation. Contournez-le ensuite en exécutant la commande avec les privilèges d'administrateur : `sudo cat /etc/shadow`.",
    "commandHelp": [
      {
        "cmd": "sudo command",
        "desc": "Exécuter une commande avec les privilèges d'administrateur/superutilisateur"
      },
      {
        "cmd": "cat /etc/shadow",
        "desc": "Lire la base de données de hachage de mot de passe (restreint)"
      }
    ],
    "objectives": [
      {
        "id": "tried_without_sudo",
        "text": "Essayez \"cat /etc/shadow\" et observez l'erreur d'autorisation"
      },
      {
        "id": "ran_sudo_cat",
        "text": "Exécutez \"sudo cat /etc/shadow\" avec succès"
      }
    ],
    "hints": [
      "Vous avez besoin de privilèges d'administrateur pour lire les fichiers système restreints.",
      "Exécutez d'abord cat /etc/shadow sans sudo pour voir l'erreur, puis ajoutez-la avec sudo.",
      "Essayez d'exécuter : cat /etc/shadow puis : sudo cat /etc/shadow"
    ]
  },
  "22": {
    "title": "Gestion des packages (apt)",
    "description": "Pensez à installer des applications sur votre smartphone via l'App Store ou Google Play Store. Il est sûr, organisé et automatisé. Sous Linux, nous utilisons une boutique d'applications en ligne de commande appelée gestionnaire de packages pour récupérer et installer des logiciels en toute sécurité.\n\n- Sur les systèmes Ubuntu/Debian, le gestionnaire de paquets standard est `apt` (Advanced Packaging Tool).\n- L'installation du logiciel modifie les dossiers à l'échelle du système, vous devez donc toujours l'autoriser en utilisant `sudo`. Par exemple, `sudo apt install tree` télécharge et installe « l’arborescence » du visualiseur d’annuaire.",
    "instructions": "Installons quelques logiciels. Exécutez `sudo apt install tree` pour installer le programme `tree`. Une fois l'opération terminée, exécutez `tree` pour visualiser votre dossier personnel dans un format arborescent soigné.",
    "commandHelp": [
      {
        "cmd": "sudo apt install tree",
        "desc": "Installez le package tree"
      },
      {
        "cmd": "tree",
        "desc": "Exécutez tree pour visualiser les répertoires"
      }
    ],
    "objectives": [
      {
        "id": "installed_tree",
        "text": "Installez le package \"tree\" à l'aide d'apt install"
      },
      {
        "id": "ran_tree",
        "text": "Exécutez la commande \"tree\" pour visualiser les répertoires"
      }
    ],
    "hints": [
      "Pensez à la façon d'installer des packages sur Ubuntu en utilisant le gestionnaire de packages avec les privilèges d'administrateur.",
      "Exécutez sudo apt install tree, puis visualisez les répertoires en exécutant la commande tree.",
      "Essayez d'exécuter : sudo apt install tree puis tree"
    ]
  },
  "23": {
    "title": "Vérification de l'espace disque (df)",
    "description": "Imaginez que vous essayiez de télécharger un énorme jeu vidéo et que vous obteniez une erreur « stockage plein », mais vous ne savez pas quel lecteur de disque constitue le goulot d'étranglement. Sous Linux, nous vérifions la capacité de stockage de notre système à l'aide de la commande `df` (disk free).\n\n- La commande `df` affiche l'espace total, utilisé et disponible sur tous vos disques connectés.\n- En exécutant `df -h` (en ajoutant l'indicateur `-h` pour \"lisible par l'homme\"), vous voyez le stockage en gigaoctets (G) et mégaoctets (M) conviviaux au lieu de confondre le nombre de blocs, ce qui permet de repérer facilement quel lecteur (comme `/` ou `/home`) est plein.\n\n**Pourquoi est-ce important** : Si vous exécutez `df` sans `-h`, les tailles sont affichées sous forme de nombres bruts de blocs de 1 000 (par exemple, `49258284` au lieu de `47G`), ce qui est extrêmement difficile à lire et à calculer pour un humain. L'indicateur `-h` formate ces tailles en gigaoctets (G) et mégaoctets (M) conviviaux.",
    "instructions": "Vérifions le stockage de notre système. Exécutez `df -h` pour voir combien d'espace reste sur vos partitions dans un format lisible par l'homme.",
    "commandHelp": [
      {
        "cmd": "df -h",
        "desc": "Afficher l'espace disque libre sur les systèmes de fichiers dans un format lisible par l'homme"
      }
    ],
    "objectives": [
      {
        "id": "ran_df_h",
        "text": "Exécutez la commande \"df -h\""
      }
    ],
    "hints": [
      "Pensez à la commande qui affiche l'espace disque libre.",
      "Utilisez la commande 'df' avec l'option lisible par l'homme.",
      "Essayez d'exécuter : df -h"
    ]
  },
  "24": {
    "title": "Recherche de la taille des répertoires (du)",
    "description": "Une fois que vous savez *quel* lecteur est plein, comment trouvez-vous le dossier spécifique qui occupe tout votre espace ? Est-ce votre dossier de téléchargements, ou peut-être un cache caché ? Nous résolvons ce mystère en utilisant la commande `du` (utilisation du disque).\n\n- `du <directory>` répertorie la taille d'un dossier et de chaque sous-dossier qu'il contient.\n- `du -sh <directory>` (où `-s` signifie « résumé » et `-h` signifie « lisible par l'homme ») calcule et imprime une taille totale unique et propre pour ce dossier spécifique.\n\n**Pourquoi est-ce important** : Si vous exécutez `du` sans `-s`, il affichera un énorme mur de texte répertoriant chaque sous-répertoire et fichier de manière récursive, plutôt que de donner un seul résumé. L'indicateur `-s` résume la taille totale du dossier et `-h` le rend lisible par l'homme.",
    "instructions": "Traquons les porcs de stockage. Calculez la taille totale du répertoire personnel de l'apprenant en exécutant `du -sh /home/learner`.",
    "commandHelp": [
      {
        "cmd": "du -sh /home/learner",
        "desc": "Afficher la taille totale du répertoire personnel de l'apprenant"
      }
    ],
    "objectives": [
      {
        "id": "ran_du",
        "text": "Exécutez \"du\" avec les options -s et -h"
      }
    ],
    "hints": [
      "Pensez à la commande qui vérifie l'utilisation du disque pour les dossiers.",
      "Utilisez la commande 'du' avec les options de résumé (-s) et lisible par l'homme (-h).",
      "Essayez d'exécuter : du -sh /home/learner"
    ]
  },
  "25": {
    "title": "Vérification de l'utilisation de la mémoire (gratuite)",
    "description": "Imaginez que votre ordinateur portable commence à prendre du retard, que les pages Web se figent et que le changement d'application semble extrêmement lent. Cela signifie généralement que votre ordinateur manque de mémoire active (RAM). Sous Linux, nous pouvons vérifier la marge de manœuvre dont dispose notre système à l’aide de la commande `free`.\n\n- La commande `free` affiche la mémoire physique (RAM) et l'espace d'échange total, utilisés et disponibles.\n- L'ajout de l'indicateur `-h` (exécutant `free -h`) formate la taille de la mémoire en gigaoctets (Go) et mégaoctets (Mo) faciles à lire afin que vous puissiez savoir si un programme consomme toutes vos ressources.\n\n**Pourquoi est-ce important** : Si vous exécutez `free` sans `-h`, l'utilisation de la mémoire est imprimée en kilo-octets bruts (par exemple, `16323456` au lieu de `16G`), ce qui est difficile à interpréter rapidement. L'indicateur `-h` met automatiquement à l'échelle les nombres en gigaoctets (G) ou en mégaoctets (M) pour une lecture facile.",
    "instructions": "Vérifions la mémoire du système. Vérifiez la RAM disponible dans un format lisible par l'homme en exécutant `free -h`.",
    "commandHelp": [
      {
        "cmd": "free -h",
        "desc": "Afficher l'utilisation de la RAM dans un format lisible par l'homme"
      }
    ],
    "objectives": [
      {
        "id": "ran_free",
        "text": "Exécutez \"gratuitement\" avec l'option -h ou -m"
      }
    ],
    "hints": [
      "Pensez à la commande qui affiche les statistiques de mémoire.",
      "Utilisez la commande 'free' avec une option lisible par l'homme.",
      "Essayez d'exécuter : free -h"
    ]
  },
  "26": {
    "title": "Disponibilité du système et détails du noyau",
    "description": "Imaginez dépanner un serveur qui a commencé à mal se comporter et avoir besoin de savoir s'il a récemment redémarré, ou vérifier exactement quelle version du système d'exploitation s'exécute sous le capot. Nous pouvons interroger ces détails du système en quelques secondes :\n\n- La commande `uptime` vous indique exactement combien de temps votre machine a fonctionné depuis son dernier démarrage, ainsi que son niveau d'activité (charge système).\n- La commande `uname -a` (nom Unix) imprime un rapport complet du noyau de votre système, du nom de la plate-forme et de l'architecture de la machine.\n\n**Pourquoi est-ce important** : Si vous exécutez `uname` sans `-a`, il affiche uniquement le nom de base du système d'exploitation (par exemple, `Linux`). Il laisse de côté des détails critiques tels que la version du noyau, le nom de la plate-forme et l'architecture du processeur. L'indicateur `-a` imprime tous les détails du système disponibles dans un seul rapport.",
    "instructions": "Inspectons les statistiques du système. Exécutez `uptime` pour vérifier depuis combien de temps le système fonctionne, puis exécutez `uname -a` pour imprimer les détails complets du noyau et de la machine.",
    "commandHelp": [
      {
        "cmd": "uptime",
        "desc": "Afficher depuis combien de temps le système a fonctionné"
      },
      {
        "cmd": "uname -a",
        "desc": "Imprimer toutes les informations sur le système et le noyau"
      }
    ],
    "objectives": [
      {
        "id": "ran_uptime",
        "text": "Exécuter la commande \"uptime\""
      },
      {
        "id": "ran_uname",
        "text": "Exécuter la commande \"uname -a\""
      }
    ],
    "hints": [
      "Vous devez exécuter deux commandes : une pour la disponibilité du système et une pour les informations sur le noyau.",
      "Utilisez la commande 'uptime' et 'uname' avec l'indicateur -a.",
      "Essayez d'exécuter : uptime puis : uname -a"
    ]
  },
  "27": {
    "title": "Liste des processus en cours d'exécution (ps)",
    "description": "Considérez votre système d'exploitation comme un bureau occupé où chaque employé (ou programme en cours d'exécution) se voit attribuer un nom unique appelé ID de processus (PID). Sous Linux, nous appelons ces programmes actifs **processus** et nous les listons à l'aide de la commande `ps`.\n\n- L'exécution de `ps` seul affiche uniquement les programmes exécutés dans la fenêtre de votre terminal actuelle.\n- L'exécution de `ps aux` agit comme un registre de bureau principal, répertoriant chaque programme actif exécuté sur l'ensemble du système, qui l'a démarré et la quantité de processeur et de mémoire qu'il utilise.\n\n**Pourquoi est-ce important** : Si vous exécutez `ps` sans `aux`, vous ne verrez que les processus en cours d'exécution dans la fenêtre de votre terminal actuelle (généralement juste `bash` et `ps` lui-même). Vous ne verrez pas les services d'arrière-plan, les processus système ou les programmes exécutés par d'autres utilisateurs. Les options `aux` révèlent tous les processus en cours d'exécution à l'échelle du système.",
    "instructions": "Vérifions le registre. Exécutez `ps aux` pour répertorier tous les processus en cours sur l'ordinateur portable et notez les colonnes telles que PID, %CPU et %MEM.",
    "commandHelp": [
      {
        "cmd": "ps aux",
        "desc": "Répertoriez tous les processus en cours d'exécution sur le système"
      }
    ],
    "objectives": [
      {
        "id": "ran_ps_aux",
        "text": "Exécutez la commande \"ps aux\""
      }
    ],
    "hints": [
      "Réfléchissez à la commande qui répertorie les processus et à la manière de répertorier tous les processus sur le système.",
      "Utilisez la commande 'ps' avec les options aux.",
      "Essayez d'exécuter : ps aux"
    ]
  },
  "28": {
    "title": "Moniteur de processus interactif (en haut)",
    "description": "Imaginez regarder une photo statique d'une autoroute plutôt que de regarder le flux d'une caméra de trafic en direct. Alors que `ps` vous donne un aperçu rapide de ce qui est en cours d'exécution, `top` vous permet de regarder les performances de votre système en direct.\n\n- La commande `top` lance un tableau de bord interactif en temps réel qui se met à jour toutes les quelques secondes. Il affiche l'utilisation du processeur, les moyennes de charge et classe dynamiquement les processus les plus gourmands en ressources en cours d'exécution à ce moment précis.",
    "instructions": "Regardons le flux en direct. Lancez le moniteur de processus interactif en exécutant la commande `top`.",
    "commandHelp": [
      {
        "cmd": "top",
        "desc": "Lancer le moniteur de processus interactif"
      }
    ],
    "objectives": [
      {
        "id": "ran_top",
        "text": "Exécuter la commande \"top\""
      }
    ],
    "hints": [
      "Réfléchissez à la commande qui lance le moniteur de processus interactif.",
      "Utilisez la commande 'top' ou 'htop'.",
      "Essayez d'exécuter : haut"
    ]
  },
  "29": {
    "title": "Arrêter les processus malveillants (kill)",
    "description": "Imaginez qu'une application sur votre téléphone se bloque, verrouillant complètement votre écran, et que vous deviez la fermer de force pour que tout fonctionne à nouveau correctement. Sous Linux, nous arrêtons les programmes qui se comportent mal ou sont gelés en utilisant la commande `kill` suivie de l'ID de processus (PID) du programme.\n\n- L'exécution de `kill 1234` envoie une demande polie demandant au programme de sauvegarder son travail et de se fermer.\n- S'il est gelé et ignore la demande polie, `kill -9 1234` force le système d'exploitation à l'arrêter instantanément. Nous sommes confrontés à un processus incontrôlable avec le PID `9999` qui monopolise tout notre processeur en ce moment : arrêtons-le !",
    "instructions": "Arrêtons le processus malveillant. Forcez la fermeture du processus avec le PID `9999` en exécutant `kill 9999`.",
    "commandHelp": [
      {
        "cmd": "kill 9999",
        "desc": "Terminez le processus avec le PID 9999"
      }
    ],
    "objectives": [
      {
        "id": "process_killed",
        "text": "Arrêtez le processus malveillant avec le PID 9999"
      }
    ],
    "hints": [
      "Pensez à la commande qui termine les processus par leur ID.",
      "Utilisez la commande 'kill' suivie de l'ID de processus 9999.",
      "Essayez d'exécuter : kill 9999"
    ]
  },
  "30": {
    "title": "Exécution de tâches en arrière-plan",
    "description": "Imaginez que vous essayez de copier un dossier volumineux sur une clé USB, mais que pendant la copie, vous souhaitez continuer à travailler et à taper d'autres commandes dans la même fenêtre. Sous Linux, nous pouvons exécuter des tâches fastidieuses en « arrière-plan » afin qu'elles ne bloquent pas notre ligne de commande.\n\n- L'ajout d'une esperluette `&` à la fin d'une commande (comme `sleep 100 &`) indique au terminal de l'exécuter en arrière-plan et de vous renvoyer immédiatement votre invite.\n- La commande `jobs` montre ce qui s'exécute actuellement en arrière-plan.\n- La commande `fg` (premier plan) ramène une tâche en arrière-plan au centre de la scène.",
    "instructions": "Soyons multitâches. Exécutez `sleep 100 &` pour démarrer une tâche en arrière-plan, vérifiez-la avec `jobs`, puis remettez-la au premier plan en exécutant `fg`.",
    "commandHelp": [
      {
        "cmd": "sleep 100 &",
        "desc": "Exécuter la mise en veille en arrière-plan"
      },
      {
        "cmd": "jobs",
        "desc": "Lister les tâches en arrière-plan"
      },
      {
        "cmd": "fg",
        "desc": "Mettre la tâche en arrière-plan au premier plan"
      }
    ],
    "objectives": [
      {
        "id": "ran_bg_job",
        "text": "Exécuter une commande de mise en veille en arrière-plan (&)"
      },
      {
        "id": "ran_jobs",
        "text": "Exécuter la commande \"jobs\""
      },
      {
        "id": "ran_fg",
        "text": "Ramener la tâche au premier plan avec \"fg\""
      }
    ],
    "hints": [
      "Pour exécuter une tâche en arrière-plan, ajoutez une esperluette (&) à la commande.",
      "Exécutez sleep 100 en arrière-plan, vérifiez avec les tâches et ramenez-le avec fg.",
      "Essayez de courir : dormez 100 et suivi de tâches, puis de fg"
    ]
  },
  "31": {
    "title": "Test de connectivité (ping)",
    "description": "Imaginez que vous essayez de charger une page Web, mais que votre navigateur tourne sans fin, vous laissant vous demander si le Wi-Fi de votre maison est déconnecté ou si le site Web lui-même est tombé en panne. Sous Linux, nous testons notre connexion réseau de base à l'aide de la commande `ping`.\n\n- La commande `ping` envoie de minuscules paquets de données à un serveur (comme `google.com`) et mesure le nombre de millisecondes nécessaires pour recevoir une réponse.\n- Sous Linux, `ping` continuera à fonctionner indéfiniment par défaut. Pour l'arrêter après quelques tentatives, nous utilisons l'indicateur `-c` (count), exécutant `ping -c 3 google.com`.\n\n**Pourquoi est-ce important** : Si vous exécutez `ping google.com` sans `-c`, il continuera à envoyer des paquets et à imprimer les résultats à l'infini. Vous devrez l'interrompre manuellement avec `Ctrl+C` pour exécuter d'autres commandes. L'indicateur `-c 3` arrête automatiquement la commande après l'envoi d'exactement 3 paquets.",
    "instructions": "Vérifions notre connectivité. Testez votre connexion à `google.com` en envoyant exactement 3 paquets : `ping -c 3 google.com`.",
    "commandHelp": [
      {
        "cmd": "ping -c 3 google.com",
        "desc": "Envoyez 3 paquets d'écho à google.com"
      }
    ],
    "objectives": [
      {
        "id": "ran_ping_c3",
        "text": "Pingez google.com exactement 3 fois en utilisant l'indicateur -c"
      }
    ],
    "hints": [
      "Pensez à la commande qui envoie des paquets d'écho ICMP pour tester la connexion.",
      "Utilisez ping avec l'option de comptage définie sur 3 pour google.com.",
      "Essayez d'exécuter : ping -c 3 google.com"
    ]
  },
  "32": {
    "title": "Interfaces réseau et IP locale",
    "description": "Imaginez configurer une imprimante réseau ou partager des fichiers avec l'ordinateur d'un ami sur le même réseau Wi-Fi et avoir besoin de connaître l'adresse IP locale de votre machine. Sous Linux, nous inspectons notre matériel réseau et nos adresses IP à l'aide de la commande `ip`.\n\n- L'exécution de `ip addr` (ou simplement `ip a`) imprime une liste de tous vos périphériques d'interface réseau (comme `eth0` pour Ethernet filaire ou `wlan0` pour sans fil) ainsi que leurs adresses IP locales attribuées.",
    "instructions": "Inspectons notre configuration réseau. Affichez toutes les interfaces réseau locales et les adresses IP en exécutant `ip addr`.",
    "commandHelp": [
      {
        "cmd": "ip addr",
        "desc": "Afficher les détails de l'interface réseau et les adresses IP"
      }
    ],
    "objectives": [
      {
        "id": "ran_ip_addr",
        "text": "Exécutez la commande \"ip addr\" ou \"ip a\""
      }
    ],
    "hints": [
      "Pensez à la commande qui affiche les configurations de l'interface réseau.",
      "Utilisez la commande 'ip' avec l'adresse ou un argument.",
      "Essayez d'exécuter : adresse IP"
    ]
  },
  "33": {
    "title": "Téléchargement de fichiers Web (curl)",
    "description": "Imaginez vouloir télécharger un fichier ou récupérer le code d'un script d'installation directement à partir d'un serveur Web sans ouvrir de navigateur et cliquer sur un bouton \"Télécharger\". Sous Linux, nous récupérons les données Web en utilisant `curl` (abréviation de « Client URL »).\n\n- L'exécution de `curl <url>` télécharge le contenu de la page et l'imprime directement sur votre écran.\n- Pour enregistrer le contenu téléchargé sous forme de fichier au lieu de l'afficher, nous l'associons à la redirection `>` ou à l'indicateur de sortie `-o`.",
    "instructions": "Téléchargeons un script. Récupérez le fichier sur `http://api.bashquest.com/update.sh` et enregistrez-le localement sous `update.sh` en exécutant `curl http://api.bashquest.com/update.sh > update.sh`.",
    "commandHelp": [
      {
        "cmd": "curl http://api.bashquest.com/update.sh > update.sh",
        "desc": "Téléchargez le contenu de la page Web et enregistrez-le dans update.sh"
      }
    ],
    "objectives": [
      {
        "id": "used_curl",
        "text": "Utilisez la commande \"curl\""
      },
      {
        "id": "download_saved",
        "text": "Enregistrez le script téléchargé sous \"update.sh\" dans le dossier personnel"
      }
    ],
    "hints": [
      "Pensez à la commande qui télécharge les fichiers Web et à la manière de le rediriger vers un fichier.",
      "Utilisez curl pour télécharger le fichier et la redirection '>' pour l'enregistrer sous update.sh.",
      "Essayez d'exécuter : curl http://api.bashquest.com/update.sh > update.sh"
    ]
  },
  "34": {
    "title": "Recherche de fichiers par nom (rechercher)",
    "description": "Imaginez égarer un fichier texte important quelque part dans votre dossier utilisateur et devoir rechercher un par un dans des dizaines de répertoires imbriqués. Sous Linux, nous contournons la recherche manuelle en utilisant l'utilitaire `find` comme moteur de recherche ultra-rapide à l'échelle du système.\n\n- La commande `find` recherche dans les arborescences de répertoires en fonction du nom, de la taille, du type ou de la date.\n- La syntaxe est `find <where> -name \"<pattern>\"`. Par exemple, `find . -name \"*.txt\"` recherche dans le répertoire actuel et dans tous les sous-dossiers les fichiers se terminant par `.txt`.\n\n**Pourquoi est-ce important** : Si vous exécutez `find . \"*.log\"` sans `-name`, vous obtiendrez l'erreur : `find: paths must precede expression: '*.log'`. L'indicateur `-name` est requis pour spécifier que le modèle suivant doit être comparé aux noms de fichiers.",
    "instructions": "Retrouvons quelques fichiers. Recherchez dans le répertoire actuel et ses sous-dossiers tous les fichiers portant une extension `.log` en exécutant `find . -name \"*.log\"`.",
    "commandHelp": [
      {
        "cmd": "find . -name \"*.log\"",
        "desc": "Rechercher tous les fichiers se terminant par .log dans le dossier et les sous-dossiers actuels"
      }
    ],
    "objectives": [
      {
        "id": "ran_find",
        "text": "Exécutez la commande \"find\" avec l'option -name"
      }
    ],
    "hints": [
      "Pensez à la commande qui recherche les fichiers de manière récursive par nom correspondant à un modèle.",
      "Utilisez find dans le répertoire courant (.) avec le modèle de nom '*.log'.",
      "Essayez d'exécuter : find . -nom \"*.log\""
    ]
  },
  "35": {
    "title": "Vérification de l'historique des commandes",
    "description": "Imaginez que vous ayez tapé une commande de diagnostic réseau longue et complexe il y a dix minutes et que vous deviez maintenant l'exécuter à nouveau, mais que vous ne vous souvenez plus des options ou de la syntaxe exactes. Au lieu de vous gratter la tête ou de tout taper partout, Linux s'en souvient pour vous !\n\n- La commande `history` affiche une liste numérotée de toutes les commandes que vous avez récemment exécutées.\n- Vous pouvez réexécuter rapidement n'importe quel élément en tapant un point d'exclamation suivi de son numéro de liste (comme `!42` pour réexécuter la commande n°42).",
    "instructions": "Vérifions les archives. Exécutez `history` pour afficher la liste des commandes que vous avez exécutées dans cette session.",
    "commandHelp": [
      {
        "cmd": "history",
        "desc": "Afficher une liste des commandes récemment exécutées"
      }
    ],
    "objectives": [
      {
        "id": "ran_history",
        "text": "Exécuter la commande \"historique\""
      }
    ],
    "hints": [
      "Pensez aux commandes qui répertorient les commandes récemment exécutées.",
      "Utilisez la commande 'history'.",
      "Essayez d'exécuter : historique"
    ]
  },
  "36": {
    "title": "Consultation des pages du manuel",
    "description": "Imaginez que vous essayez d'utiliser une nouvelle commande, mais que vous n'êtes pas sûr des indicateurs qu'elle prend en charge ni de la façon dont ses entrées doivent être formatées. Au lieu de chercher en ligne, Linux dispose d'un manuel d'utilisation officiel et complet intégré directement au terminal !\n\n- La commande `man` (manuel) suivie de n'importe quel nom d'utilitaire (par exemple, `man ls`) ouvre un guide de référence détaillé.\n- Dans le guide, faites défiler avec les touches fléchées, recherchez avec \"/\" et appuyez sur `q` pour fermer le manuel et revenir à votre invite.",
    "instructions": "Consultons la doc. Ouvrez la page de manuel intégrée de la commande `grep` en exécutant `man grep`.",
    "commandHelp": [
      {
        "cmd": "man grep",
        "desc": "Afficher la page de manuel pour grep"
      }
    ],
    "objectives": [
      {
        "id": "ran_man_grep",
        "text": "Exécutez la commande \"man grep\""
      }
    ],
    "hints": [
      "Pensez à la commande qui affiche le manuel de référence du système intégré.",
      "Utilisez la commande 'man' suivie du nom de la commande que vous souhaitez rechercher.",
      "Essayez de courir : man grep"
    ]
  },
  "37": {
    "title": "Services de contrôle (systemctl)",
    "description": "Imaginez que vous hébergez un site Web sur votre ordinateur, mais que les visiteurs reçoivent une erreur « Le site n'est pas accessible » car le programme du serveur Web en arrière-plan ne s'exécute pas. Sous Linux, les processus d'arrière-plan qui démarrent automatiquement et s'exécutent en arrière-plan (comme les bases de données, les pare-feu ou les serveurs Web) sont appelés **services** et nous les gérons à l'aide de `systemctl`.\n\n- La commande `systemctl status <service>` vérifie si un service est actif ou arrêté.\n- Étant donné que le démarrage ou l'arrêt d'un service affecte tous les utilisateurs et la sécurité du système, vous devez utiliser `sudo` pour exécuter des commandes comme `sudo systemctl start <service>` ou `sudo systemctl stop <service>`.",
    "instructions": "Lançons un serveur web. Le service du serveur Web `apache2` est actuellement arrêté. Démarrez-le en exécutant `sudo systemctl start apache2` et vérifiez qu'il s'exécute avec `systemctl status apache2`.",
    "commandHelp": [
      {
        "cmd": "systemctl status apache2",
        "desc": "Vérifier l'état du service Web Apache2"
      },
      {
        "cmd": "sudo systemctl start apache2",
        "desc": "Démarrer le service Web Apache2"
      }
    ],
    "objectives": [
      {
        "id": "started_service",
        "text": "Démarrer le service Web \"Apache2\""
      },
      {
        "id": "checked_status",
        "text": "Vérifier l'état de \"Apache2\""
      }
    ],
    "hints": [
      "Vous devez vérifier l'état d'Apache2 et le démarrer.",
      "Utilisez systemctl status apache2 et rappelez-vous que le démarrage des services nécessite des privilèges d'administrateur (sudo).",
      "Essayez d'exécuter : sudo systemctl start apache2 puis systemctl status apache2"
    ]
  },
  "38": {
    "title": "Modification des fichiers de configuration (nano)",
    "description": "Imaginez une connexion SSH sur un serveur cloud distant sur lequel vous n'avez pas de bureau graphique ni de curseur et où vous devez rapidement corriger une ligne dans un fichier de configuration. Dans ces scénarios, vous devez utiliser un éditeur de texte de terminal tel que `nano`.\n\n- L'exécution de `nano <filename>` charge un éditeur de texte simple et léger directement dans la fenêtre de votre shell.\n- Les raccourcis sont toujours affichés en bas de l'écran : appuyez sur `Ctrl+O` pour écrire (enregistrer) vos modifications, et `Ctrl+X` pour quitter l'éditeur.",
    "instructions": "Modifions un fichier de configuration. Ouvrez `server.conf` dans votre répertoire personnel à l'aide de `nano server.conf`, ajoutez une ligne indiquant `port=8080`, puis enregistrez et quittez l'éditeur.",
    "commandHelp": [
      {
        "cmd": "nano server.conf",
        "desc": "Ouvrez server.conf dans l'éditeur de texte Nano"
      }
    ],
    "objectives": [
      {
        "id": "opened_nano",
        "text": "Ouvrez le fichier \"server.conf\" dans Nano"
      },
      {
        "id": "port_configured",
        "text": "Ajoutez la ligne de configuration \"port=8080\" et enregistrez"
      }
    ],
    "hints": [
      "Pensez à l'éditeur de texte basé sur terminal que les instructions vous demandent d'utiliser.",
      "Exécutez nano server.conf, écrivez 'port=8080' à l'intérieur, puis enregistrez avec Ctrl+O et quittez avec Ctrl+X.",
      "Essayez d'exécuter : nano server.conf"
    ]
  },
  "39": {
    "title": "Écrire votre premier script Bash",
    "description": "Imaginez avoir une liste de 20 tâches que vous devez exécuter chaque matin. Les saisir manuellement est fastidieux et laisse place aux fautes de frappe. Sous Linux, nous regroupons les commandes dans un fichier appelé script shell afin de pouvoir les exécuter toutes en même temps !\n\n- Chaque script commence par un \"shebang\" (`#!/bin/bash`) sur la toute première ligne pour indiquer au système quel interpréteur shell utiliser pour exécuter le fichier.\n- Après avoir enregistré votre script, vous le rendez exécutable en lui accordant l'autorisation d'exécution via `chmod 755 script.sh` puis en l'exécutant avec `./script.sh`.",
    "instructions": "Automatisons ! Créez un fichier nommé `hello.sh` dans votre dossier personnel. Écrivez `#!/bin/bash` sur la première ligne et `echo \"Hello, BashQuest User!\"` sur la seconde. Accordez-lui les autorisations d'exécution avec `chmod 755 hello.sh` et exécutez-le en utilisant `./hello.sh`.",
    "commandHelp": [
      {
        "cmd": "touch hello.sh",
        "desc": "Créer un fichier de script"
      },
      {
        "cmd": "chmod 755 hello.sh",
        "desc": "Accorder des autorisations d'exécution"
      },
      {
        "cmd": "./hello.sh",
        "desc": "Exécuter le script dans le répertoire courant"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Créer un fichier de script \"hello.sh\""
      },
      {
        "id": "script_content",
        "text": "Ajouter un message shebang et hello à l'intérieur du script"
      },
      {
        "id": "script_executable",
        "text": "Rendre le script exécutable (autorisations chiffres impairs)"
      },
      {
        "id": "script_executed",
        "text": "Exécuter le script en utilisant \"./hello.sh\""
      }
    ],
    "hints": [
      "Créer le fichier, ajouter un message shebang et hello, rendez-le exécutable et exécutez-le.",
      "Utilisez touch hello.sh, modifiez-le pour qu'il contienne #!/bin/bash et le message hello, puis chmod 755 hello.sh et exécutez ./hello.sh.",
      "Essayez d'exécuter : touchez hello.sh, écrivez le contenu, chmod 755 hello.sh et exécutez avec ./hello.sh"
    ]
  },
  "40": {
    "title": "Variables et arguments (1 $)",
    "description": "Imaginez créer un message de bienvenue personnalisé pour un site Web. Vous ne voudriez pas écrire un script distinct pour le nom de chaque client ! Au lieu de cela, vous écrivez un script qui prend un nom en entrée lorsque vous l'exécutez.\n\n- Dans les scripts bash, les variables comme `$1`, `$2`, etc. contiennent les \"arguments\" ou les entrées que vous transmettez sur la ligne de commande.\n- Par exemple, exécuter `./greet.sh Alice` signifie que `$1` à l'intérieur du script contiendra automatiquement le texte \"Alice\". De même, `$#` garde une trace du nombre d'entrées fournies par l'utilisateur.",
    "instructions": "Créons un script dynamique. Créez `greet.sh` dans votre répertoire personnel avec le shebang et la ligne `echo \"Hello, $1!\"`. Rendez-le exécutable et exécutez `./greet.sh Alice` pour le tester.",
    "commandHelp": [
      {
        "cmd": "./greet.sh Alice",
        "desc": "Exécuter le script avec l'argument \"Alice\""
      }
    ],
    "objectives": [
      {
        "id": "greet_exists",
        "text": "Créer un fichier de script \"greet.sh\""
      },
      {
        "id": "greet_content",
        "text": "Utiliser $1 dans greet.sh"
      },
      {
        "id": "greet_executable",
        "text": "Rendre greet.sh exécutable"
      },
      {
        "id": "greet_executed",
        "text": "Exécuter le script avec l'argument \"Alice\""
      }
    ],
    "hints": [
      "Créez un script nommé greet.sh, utilisez $1 pour saluer le premier argument, rendez-le exécutable et exécutez-le avec \"Alice\".",
      "Utilisez echo 'Bonjour, 1 $ !' à l'intérieur du script, chmod 755 greet.sh, puis exécutez ./greet.sh Alice.",
      "Essayez d'exécuter : touchez greet.sh, ajoutez shebang et faites écho à \"Bonjour, $1!\", chmod 755 greet.sh et ./greet.sh Alice"
    ]
  },
  "41": {
    "title": "Logique conditionnelle (if/else)",
    "description": "Imaginez créer un script qui traite un rapport CSV, mais il plante si le fichier de rapport n'existe pas réellement sur le disque. Pour éviter les erreurs, nous écrivons des scripts qui prennent des décisions en utilisant la logique conditionnelle `if/else`.\n\n- Nous vérifions les conditions à l'aide de parenthèses : `if [ -f \"$1\" ]; then ... fi`.\n- L'indicateur `-f` vérifie si un chemin pointe vers un fichier, tandis que `-d` vérifie s'il s'agit d'un répertoire. Le script divise ses actions selon que la condition est évaluée comme vraie ou fausse.",
    "instructions": "Ajoutons une logique de prise de décision. Créez `check_file.sh` dans votre répertoire personnel qui vérifie si le nom de fichier transmis comme `$1` existe (en utilisant `if [ -f \"$1\" ]; then echo \"Exists\" else echo \"Missing\" fi`). Rendez-le exécutable et testez-le sur `names.txt`.",
    "commandHelp": [
      {
        "cmd": "if [ -f file ]; then ...",
        "desc": "Syntaxe pour les vérifications d'existence de fichiers"
      }
    ],
    "objectives": [
      {
        "id": "check_exists",
        "text": "Créer un script \"check_file.sh\""
      },
      {
        "id": "check_logic",
        "text": "Implémenter les vérifications -f dans le script"
      },
      {
        "id": "check_executable",
        "text": "Rendre le script exécutable"
      },
      {
        "id": "check_executed",
        "text": "Exécuter le script avec \"names.txt\""
      }
    ],
    "hints": [
      "Créer check_file.sh, implémenter une condition pour tester si l'argument du nom de fichier existe, le rendre exécutable et l'exécuter.",
      "Utilisez 'if [ -f \"$1\" ]; puis faites écho \"Existe\", sinon faites écho \"Manquant\" fi' dans check_file.sh, rendez-le exécutable et exécutez-le avec noms.txt.",
      "Essayez d'exécuter : touchez check_file.sh, écrivez la logique de vérification du fichier, chmod 755 et exécutez ./check_file.sh names.txt"
    ]
  },
  "42": {
    "title": "Automatisation avec des boucles",
    "description": "Imaginez avoir un dossier de 100 fichiers journaux et vous devez faire une copie de sauvegarde de chacun d'entre eux. Les copier individuellement serait épuisant. Sous Linux, nous utilisons les boucles `for` pour répéter automatiquement la même action sur toute une liste d'éléments !\n\n- Une boucle `for` (comme `for file in *.txt; do ... done`) parcourt chaque élément qui correspond à un modèle, les traitant l'un après l'autre en une fraction de seconde.",
    "instructions": "Automatisons les sauvegardes. Créez un script nommé `backup_logs.sh`. Demandez-lui de créer un répertoire nommé `backup` (en utilisant `mkdir -p backup`), puis d'utiliser une boucle `for` pour copier tous les fichiers `.log` du dossier actuel dans `backup`. Rendez-le exécutable et exécutez-le.",
    "commandHelp": [
      {
        "cmd": "for x in pattern; do ...",
        "desc": "Syntaxe d'automatisation de la boucle For"
      }
    ],
    "objectives": [
      {
        "id": "backup_script_exists",
        "text": "Créer un script \"backup_logs.sh\""
      },
      {
        "id": "backup_logic",
        "text": "Implémenter une boucle for avec cp"
      },
      {
        "id": "backup_executed",
        "text": "Exécuter le script backup_logs.sh"
      },
      {
        "id": "backup_dir_ok",
        "text": "Le répertoire \"backup/\" contient des copies"
      }
    ],
    "hints": [
      "Créez backup_logs.sh, créez un dossier de sauvegarde, utilisez une boucle for pour copier tous les fichiers .log et exécutez-le.",
      "Utilisez mkdir -p backup, puis 'for file in *.log; faire cp \"$file\" backup/; done' dans backup_logs.sh et exécutez-le.",
      "Essayez d'exécuter : touchez backup_logs.sh, écrivez la boucle à l'intérieur, rendez-la exécutable et exécutez ./backup_logs.sh"
    ]
  },
  "43": {
    "title": "Édition de flux avec sed",
    "description": "Imaginez que vous ayez un énorme fichier de vidage de base de données et que vous deviez remplacer toutes les occurrences d'une ancienne adresse IP de serveur par une nouvelle. L'ouvrir dans un éditeur peut geler votre ordinateur. Sous Linux, nous éditons les flux de texte à la volée en utilisant `sed` (abréviation de « éditeur de flux »).\n\n- La syntaxe de base est `sed \"s/old/new/g\" file.txt` pour rechercher et remplacer du texte.\n- L'ajout de l'indicateur `-i` (sur place) enregistre les remplacements directement dans le fichier lui-même, plutôt que de simplement imprimer le texte modifié à l'écran.\n\n**Pourquoi est-ce important** : Si vous exécutez `sed \"s/port=80/port=8080/g\" server.conf` sans `-i`, il imprimera uniquement le texte modifié sur l'écran de votre terminal. Le fichier réel reste complètement inchangé. L'indicateur `-i` (sur place) est nécessaire pour enregistrer les modifications directement dans le fichier.",
    "instructions": "Mettons à jour un paramètre. Modifiez `server.conf` dans votre dossier personnel. Remplacez `port=80` par `port=8080` sur place en exécutant `sed -i \"s/port=80/port=8080/g\" server.conf`.",
    "commandHelp": [
      {
        "cmd": "sed -i \"s/old/new/g\" file",
        "desc": "Effectuer le remplacement de texte sur place dans un fichier"
      }
    ],
    "objectives": [
      {
        "id": "used_sed",
        "text": "Utilisez la commande \"sed\" avec l'indicateur -i"
      },
      {
        "id": "port_changed",
        "text": "Définissez la configuration du port sur port=8080 dans server.conf"
      }
    ],
    "hints": [
      "Pensez à la commande qui effectue l'édition du flux et la recherche-remplacement.",
      "Utilisez sed avec l'option sur place (-i) pour remplacer 'port=80' par 'port=8080'.",
      "Essayez d'exécuter : sed -i \"s/port=80/port=8080/g\" server.conf"
    ]
  },
  "44": {
    "title": "Extraction de données avec awk",
    "description": "Imaginez recevoir une grande feuille de calcul enregistrée sous forme de texte brut, où les colonnes sont séparées par des virgules ou des espaces, et vous n'avez besoin d'extraire que la toute première colonne de données. Sous Linux, nous analysons des colonnes de texte structurées à l'aide du langage puissant `awk`.\n\n- Par défaut, `awk` divise les lignes par espaces, en attribuant la colonne 1 à `$1`, la colonne 2 à `$2`, et ainsi de suite.\n- L'indicateur `-F` vous permet de spécifier un séparateur personnalisé (comme `-F:` pour les deux-points). Par exemple, `awk -F: '{print $1}' /etc/passwd` extrait uniquement les noms d'utilisateur d'une liste séparée par deux points.\n\n**Pourquoi est-ce important** : Si vous exécutez `awk '{print $1}' /etc/shadow` sans `-F:`, `awk` divisera les lignes par des espaces (valeur par défaut) plutôt que par des deux-points. Étant donné que les lignes du fichier fantôme ne comportent pas d'espaces, la ligne entière est traitée comme un seul champ, imprimant les détails de hachage complets de chaque utilisateur. L'indicateur `-F:` force `awk` à diviser les colonnes par deux-points à la place.",
    "instructions": "Extrayons quelques données. Récupérez tous les noms d'utilisateur (la première colonne) de `/etc/shadow` en utilisant `awk` avec un séparateur deux-points `:` et enregistrez-les dans `shadow_users.txt` en utilisant `sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt`.",
    "commandHelp": [
      {
        "cmd": "awk -F: '{print $1}' file",
        "desc": "Imprimer le premier champ du fichier délimité par deux points"
      }
    ],
    "objectives": [
      {
        "id": "used_awk",
        "text": "Utiliser \"awk\" avec l'indicateur de séparateur de champ -F"
      },
      {
        "id": "created_shadow_users",
        "text": "Afficher les noms dans \"shadow_users.txt\""
      },
      {
        "id": "correct_shadow_users",
        "text": "Vérifier que shadow_users.txt a la racine et l'apprenant"
      }
    ],
    "hints": [
      "Pensez à la commande qui divise les colonnes de données à l'aide d'un séparateur de champ personnalisé.",
      "Utilisez awk avec -F : pour imprimer la première colonne ($1) de /etc/shadow avec sudo et redirigez la sortie vers shadow_users.txt.",
      "Essayez d'exécuter : sudo awk -F : '{print $1}' /etc/shadow > shadow_users.txt"
    ]
  },
  "45": {
    "title": "Traduire et découper des données",
    "description": "Imaginez travailler avec une feuille de calcul CSV contenant les dates et les noms des transactions. Vous souhaitez extraire uniquement la première colonne (dates) et convertir tout le texte en majuscules pour plus de cohérence. Sous Linux, nous pouvons combiner des outils d'analyse légers dans un pipeline :\n\n- La commande `cut` découpe des colonnes spécifiques du texte structuré. Par exemple, `cut -d, -f1` divise les lignes par des virgules (`-d,`) et extrait la première colonne (`-f1`).\n- La commande `tr` (traduire) transforme les caractères de l'entrée standard, comme en échangeant des caractères minuscules contre des majuscules (`tr \"a-z\" \"A-Z\"`).\n\n**Pourquoi est-ce important** : Si vous exécutez `cut reports.csv` sans `-d,` et `-f1`, vous obtiendrez : `cut: you must specify a list of bytes, characters, or fields`. Si vous spécifiez `-f1` mais omettez `-d,`, la valeur par défaut est des onglets, ce qui signifie qu'il ne divisera pas un fichier CSV et imprimera simplement la ligne entière. L'indicateur `-d,` définit la virgule comme séparateur de colonne et `-f1` lui indique d'extraire uniquement la première colonne.",
    "instructions": "Découpons et transformons les données. Extrayez la première colonne de `reports.csv` à l'aide de `cut -d, -f1 reports.csv`, dirigez-la vers `tr \"a-z\" \"A-Z\"` pour la mettre en majuscule et redirigez le résultat final vers `upper_reports.txt`.",
    "commandHelp": [
      {
        "cmd": "cut -d, -f1 file | tr \"a-z\" \"A-Z\"",
        "desc": "Pipe couper le champ en traduction"
      }
    ],
    "objectives": [
      {
        "id": "used_cut",
        "text": "Utilisez \"cut\" avec un délimiteur par virgule"
      },
      {
        "id": "used_tr",
        "text": "Traduisez les caractères en majuscules avec \"tr\""
      },
      {
        "id": "upper_reports_exists",
        "text": "Créez le fichier \"upper_reports.txt\""
      },
      {
        "id": "content_uppercase",
        "text": "Vérifiez que le texte est en MAJUSCULES"
      }
    ],
    "hints": [
      "Vous devez découper reports.csv pour extraire la première colonne, la convertir en majuscules et l'enregistrer.",
      "Utilisez cut -d, -f1 reports.csv, dirigez-le (|) vers tr \"a-z\" \"A-Z\" et redirigez-le (>) vers upper_reports.txt.",
      "Essayez d'exécuter : cut -d, -f1 reports.csv | tr \"a-z\" \"A-Z\" > upper_reports.txt"
    ]
  },
  "46": {
    "title": "Gestion des variables d'environnement",
    "description": "Imaginez que vous déployez une application Web et qu'elle doit savoir si elle doit s'exécuter dans un bac à sable de « développement » local sécurisé ou se connecter à la base de données de « production » en direct. Sous Linux, nous transmettons des configurations comme celle-ci aux programmes en cours d'exécution à l'aide de **variables d'environnement**.\n\n- Nous utilisons la commande `export` pour définir une variable afin que tous les programmes démarrés par notre shell puissent la lire. Par exemple, `export APP_ENV=production`.\n- Pour vérifier ou afficher la valeur d'une variable, on préfixe son nom d'un signe dollar : `echo $APP_ENV`.",
    "instructions": "Configurons l'environnement. Définissez et exportez une variable nommée `APP_ENV` avec la valeur `production` en exécutant `export APP_ENV=production`, puis vérifiez-la en exécutant `echo $APP_ENV`.",
    "commandHelp": [
      {
        "cmd": "export VAR=val",
        "desc": "Définir la variable d'environnement"
      },
      {
        "cmd": "echo $VAR",
        "desc": "Imprimer la valeur de la variable"
      }
    ],
    "objectives": [
      {
        "id": "exported_env",
        "text": "Exécuter la commande \"export\""
      },
      {
        "id": "env_correct",
        "text": "Définir la variable d'environnement APP_ENV sur \"production\""
      },
      {
        "id": "echoed_env",
        "text": "Imprimer la variable en utilisant \"echo $APP_ENV\""
      }
    ],
    "hints": [
      "Pensez à quelle commande définit les variables d'environnement.",
      "Utilisez export APP_ENV=production et imprimez-le en utilisant echo $APP_ENV.",
      "Essayez d'exécuter : export APP_ENV=production suivi de echo $APP_ENV"
    ]
  },
  "47": {
    "title": "Archives et compression (tar)",
    "description": "Imaginez que vous disposez d'un dossier contenant 500 journaux de serveur et que vous souhaitez l'envoyer par courrier électronique à un collègue ou le sauvegarder sur un stockage cloud. L'envoi de 500 fichiers individuels est lent et inefficace. Sous Linux, nous les compressons dans un seul fichier compact de type zip en utilisant `tar` (abréviation de « archive sur bande »).\n\n- Nous créons des archives compressées à l'aide des indicateurs : `-c` (créer), `-z` (compresser avec gzip), `-v` (liste détaillée des fichiers) et `-f` (spécifier le nom du fichier). Par exemple, `tar -czvf backup.tar.gz folder/` regroupe et compresse le répertoire.\n\n**Pourquoi est-ce important** : Si vous exécutez `tar -cz logs.tar.gz logs` sans `-f`, vous obtiendrez : `tar: Refusing to write archive contents to terminal`. L'indicateur `-f` est essentiel car il indique à `tar` d'écrire la sortie dans un fichier au lieu d'envoyer les données brutes de l'archive binaire directement à votre terminal. Les indicateurs `-c` et `-z` sont également requis pour créer et compresser l'archive respectivement.",
    "instructions": "Emballons nos journaux. Regroupez et compressez le dossier `logs` dans `/home/learner` dans un fichier nommé `logs.tar.gz` en exécutant `tar -czvf logs.tar.gz logs`.",
    "commandHelp": [
      {
        "cmd": "tar -czvf archive.tar.gz folder",
        "desc": "Créer une archive tar compressée"
      }
    ],
    "objectives": [
      {
        "id": "used_tar_c",
        "text": "Utiliser la commande \"tar\" avec les indicateurs -c (create) et -z (gzip)"
      },
      {
        "id": "archive_exists",
        "text": "Créer \"logs.tar.gz\" dans le répertoire personnel"
      }
    ],
    "hints": [
      "Pensez à la commande qui regroupe et compresse les dossiers dans des archives tarball.",
      "Utilisez tar avec les options create (-c), gzip (-z), verbose (-v) et file (-f).",
      "Essayez d'exécuter : tar -czvf logs.tar.gz logs"
    ]
  },
  "48": {
    "title": "Inspection de l'environnement",
    "description": "Imaginez que vous essayez de déboguer un script qui échoue constamment parce qu'il ne trouve pas le chemin d'un programme, ou que vous souhaitez voir quel compte utilisateur est actif dans ce terminal. Sous Linux, toutes ces configurations à l'échelle de la session sont stockées ensemble.\n\n- La commande `env` imprime un répertoire complet de toutes les variables d'environnement actuellement chargées dans votre session active, vous permettant de vérifier les configurations en une seule fois.",
    "instructions": "Inspectons la liste des environnements. Imprimez toutes les variables d'environnement actives dans votre session de terminal en exécutant la commande `env`.",
    "commandHelp": [
      {
        "cmd": "env",
        "desc": "Liste les variables d'environnement actives"
      }
    ],
    "objectives": [
      {
        "id": "ran_env",
        "text": "Exécutez la commande \"env\""
      }
    ],
    "hints": [
      "Pensez à la commande qui imprime toutes les variables d'environnement actives.",
      "Utilisez la commande 'env'.",
      "Essayez d'exécuter : env"
    ]
  },
  "49": {
    "title": "Création de liens (ln -s)",
    "description": "Imaginez que vous ayez un fichier de configuration enfoui profondément dans un dossier imbriqué, disons `/var/www/html/configs/app/settings.conf`, mais que vous devez le modifier constamment. Au lieu de taper le long chemin du dossier à chaque fois, vous souhaitez un raccourci rapide sur le bureau. Sous Linux, nous faisons cela en créant des liens.\n\n- **Hard Link** : Un clone direct pointant vers les données brutes du fichier. Si vous supprimez le fichier d'origine, le lien fonctionne toujours.\n- **Lien symbolique (Soft Link)** : Un raccourci basé sur un chemin (tout comme les raccourcis Windows). Si vous supprimez le fichier d'origine, le lien est rompu. Nous les créons en utilisant `ln -s target link_name`.\n\n**Pourquoi est-ce important** : Si vous exécutez `ln logs/app.log app_link.log` sans `-s`, vous créerez un lien physique au lieu d'un raccourci symbolique. Si les fichiers résident sur des partitions de disque différentes, vous obtiendrez : `ln: failed to create hard link: Invalid cross-device link`. L'indicateur `-s` crée un lien symbolique flexible (raccourci) qui fonctionne sur différents lecteurs et répertoires.",
    "instructions": "Créons un raccourci. Créez un lien symbolique nommé `app_link.log` dans `/home/learner` qui pointe vers le fichier cible `logs/app.log` en exécutant `ln -s logs/app.log app_link.log`.",
    "commandHelp": [
      {
        "cmd": "ln -s target link_name",
        "desc": "Créer un lien symbolique"
      }
    ],
    "objectives": [
      {
        "id": "used_ln_s",
        "text": "Utiliser \"ln\" avec l'indicateur symbolique -s"
      },
      {
        "id": "link_created",
        "text": "Créer un lien \"app_link.log\" pointant vers les journaux cibles/app.log"
      }
    ],
    "hints": [
      "Pensez à la commande qui crée des raccourcis/liens de fichiers.",
      "Utilisez 'ln -s' avec le chemin cible suivi du nom du lien.",
      "Essayez d'exécuter : ln -s logs/app.log app_link.log"
    ]
  },
  "50": {
    "title": "Traitement des résultats de recherche (xargs)",
    "description": "Imaginez que vous ayez exécuté une recherche qui a renvoyé 100 fichiers temporaires et que vous souhaitez maintenant tous les supprimer. Le résultat de la recherche n'est qu'une liste de noms de texte sur votre écran. Comment transmettre ces noms en tant qu'entrées directes à la commande de suppression ? Sous Linux, nous comblons cette lacune en utilisant `xargs`.\n\n- La commande `xargs` (exécuter les arguments) prend des lignes d'entrée standard (comme la liste de fichiers de `find`) et les transmet une par une comme arguments à une autre commande.\n- Par exemple, `find . -name \"*.tmp\" | xargs rm` trouve tous les fichiers temporaires et les supprime tous en un seul passage.",
    "instructions": "Traitons quelques résultats de recherche. Recherchez tous les fichiers `.log` dans `/home/learner/logs` à l'aide de `find logs -name \"*.log\"` et dirigez-les vers `xargs wc -l` pour compter toutes leurs lignes collectivement.",
    "commandHelp": [
      {
        "cmd": "find path -name \"pattern\" | xargs command",
        "desc": "Transmettre les résultats de la recherche à la commande"
      }
    ],
    "objectives": [
      {
        "id": "used_find",
        "text": "Exécuter la commande \"find\" sur le dossier des journaux"
      },
      {
        "id": "used_xargs",
        "text": "Diriger les résultats vers \"xargs\""
      },
      {
        "id": "ran_wc_l",
        "text": "Exécuter \"wc -l\" via le pipeline xargs"
      }
    ],
    "hints": [
      "Rechercher tous les fichiers journaux et rediriger les noms vers wc -l à l'aide de xargs.",
      "Utilisez find logs -name \"*.log\" et dirigez-le (|) vers xargs wc -l.",
      "Essayez d'exécuter : find logs -name \"*.log\" | xargs wc-l"
    ]
  },
  "51": {
    "title": "Aperçu des fichiers (tête et queue)",
    "description": "Maintenant que vous pouvez lire un fichier entier avec `cat`, que se passe-t-il si le fichier contient des milliers de lignes et que vous souhaitez voir uniquement le haut ou le bas ? Le dumping d'un énorme fichier avec `cat` inonde votre écran. Au lieu de cela, nous utilisons `head` et `tail` pour jeter un œil aux bords.\n\n- La commande `head` affiche par défaut les 10 premières lignes d'un fichier. Vous pouvez modifier cela en utilisant `-n <number>` (par exemple `head -n 5 log.txt` pour les 5 premières lignes).\n- La commande `tail` affiche les 10 dernières lignes par défaut, prenant en charge la même option `-n`.\n- Surtout, `tail -f` (suivre) surveille un fichier en temps réel, affichant les nouvelles lignes au fur et à mesure qu'elles sont écrites par le système. Il s'agit de l'outil préféré d'un administrateur système pour regarder les journaux en direct.",
    "instructions": "Inspectons les journaux. Utilisez `head -n 5 logs/app.log` pour afficher les 5 premières lignes du journal de l'application. Ensuite, exécutez `tail -n 3 logs/security.log` pour afficher les 3 derniers événements de sécurité. Enfin, exécutez `tail -f logs/app.log` pour simuler la surveillance des journaux en temps réel (il imprimera les entrées fictives et quittera).",
    "commandHelp": [
      {
        "cmd": "head -n 5 logs/app.log",
        "desc": "Afficher les 5 premières lignes de app.log"
      },
      {
        "cmd": "tail -n 3 logs/security.log",
        "desc": "Afficher les 3 dernières lignes de security.log"
      },
      {
        "cmd": "tail -f logs/app.log",
        "desc": "Surveiller les mises à jour de app.log en temps réel"
      }
    ],
    "objectives": [
      {
        "id": "used_head",
        "text": "Exécuter la commande \"head\" avec -n 5 sur logs/app.log"
      },
      {
        "id": "used_tail",
        "text": "Exécuter la commande \"tail\" avec -n 3 sur logs/security.log"
      },
      {
        "id": "used_tail_f",
        "text": "Exécuter la commande \"tail\" avec -f pour suivre app.log"
      }
    ],
    "hints": [
      "Utilisez head -n 5 suivi du nom de fichier et tail -n 3 suivi du chemin du journal de sécurité.",
      "Pour suivre les journaux en direct, ajoutez l'option -f à la commande tail.",
      "Essayez d'exécuter : head -n 5 logs/app.log, puis tail -n 3 logs/security.log et enfin tail -f logs/app.log"
    ]
  },
  "52": {
    "title": "Défilement interactif des fichiers (moins et plus)",
    "description": "Jetez un œil en haut et en bas d'un fichier avec `head` et `tail`, c'est bien, mais que se passe-t-il si vous devez parcourir un long fichier de configuration page par page ? C'est à cela que servent les téléavertisseurs comme `less` et `more`.\n\n- Les téléavertisseurs chargent les fichiers de manière interactive, affichant une page de texte à la fois pour éviter les ralentissements du système sur les fichiers volumineux.\n- `less` est le choix moderne, vous permettant de faire défiler vers l'avant et vers l'arrière à l'aide des touches fléchées, de rechercher du texte avec `/` et de quitter en appuyant sur `q`.\n- `more` est un téléavertisseur plus ancien et plus simple qui ne fait que défiler vers l'avant.",
    "instructions": "Lisons un long fichier page par page. Exécutez `less /etc/hosts` pour l'ouvrir dans une vue défilante. (Dans notre terminal, cela affichera le contenu dans un cadre déroulant. Appuyez sur `q` pour revenir).",
    "commandHelp": [
      {
        "cmd": "less /etc/hosts",
        "desc": "Ouvrir le fichier hosts dans le pager less"
      },
      {
        "cmd": "more /etc/hosts",
        "desc": "Ouvrir le fichier hosts dans le pager more"
      }
    ],
    "objectives": [
      {
        "id": "used_less",
        "text": "Ouvrir /etc/hosts dans un pager (less ou more)"
      }
    ],
    "hints": [
      "Utiliser la commande 'less' ou 'more' sur le chemin du fichier /etc/hosts.",
      "Essayez d'exécuter : less /etc/hosts"
    ]
  },
  "53": {
    "title": "Journalisation du système (journalctl)",
    "description": "Maintenant que vous pouvez démarrer et arrêter les services en arrière-plan avec `systemctl`, comment les dépanner en cas de panne ? L'utilitaire `journalctl` vous permet d'inspecter les journaux système générés par les services gérés par systemd.\n\n- Par défaut, `journalctl` affiche tous les journaux système. Parce que cela peut être massif, nous les filtrons pour rester concentrés.\n- L'option `-u <service>` filtre les journaux pour afficher uniquement les messages d'un service spécifique (par exemple `journalctl -u apache2`).\n- L'option `-n <number>` affiche uniquement les entrées les plus récentes (par exemple `journalctl -n 5` pour les 5 derniers journaux).\n- L'indicateur `-f` (suivre) affiche les journaux en temps réel au fur et à mesure de leur écriture.",
    "instructions": "Examinons les journaux du serveur Web. Exécutez `journalctl -u apache2` pour filtrer les journaux système du service `apache2`. Exécutez ensuite `journalctl -n 5` pour afficher les 5 derniers messages généraux du journal système.",
    "commandHelp": [
      {
        "cmd": "journalctl -u apache2",
        "desc": "Afficher les journaux du service Apache2"
      },
      {
        "cmd": "journalctl -n 5",
        "desc": "Afficher les 5 derniers messages du journal système"
      }
    ],
    "objectives": [
      {
        "id": "used_journalctl_u",
        "text": "Filtrer les journaux du service Apache2 à l'aide de journalctl -u"
      },
      {
        "id": "used_journalctl_n",
        "text": "Afficher les dernières entrées du journal à l'aide de journalctl -n"
      }
    ],
    "hints": [
      "Utilisez journalctl avec l'option -u définie sur apache2 pour afficher les journaux du serveur Web.",
      "Pour limiter les journaux aux 5 dernières lignes, utilisez journalctl -n 5.",
      "Essayez d'exécuter : journalctl -u apache2, puis : journalctl -n 5"
    ]
  },
  "54": {
    "title": "Logique réutilisable (fonctions bash)",
    "description": "Vous avez écrit des boucles et des conditions pour automatiser les actions dans les scripts. Mais à mesure que vos scripts se développent, copier-coller la même logique encore et encore rend leur maintenance difficile. En bash, nous pouvons regrouper les commandes en fonctions réutilisables.\n\n- Pour définir une fonction, on la déclare par son nom suivi de parenthèses et d'accolades : `log_msg() { echo \"msg\"; }`.\n- Les fonctions peuvent recevoir des arguments tout comme les scripts shell, auxquels on accède à l'aide des paramètres de position locale `$1`, `$2`, etc. à l'intérieur du corps de la fonction.\n- Pour appeler une fonction, utilisez simplement son nom comme n'importe quelle autre commande : `log_msg \"Backup started\"`.",
    "instructions": "Construisons un script de sauvegarde modulaire. Créez un script nommé `backup_helper.sh` dans votre dossier personnel. Définissez une fonction nommée `log_msg` qui imprime un message avec un horodatage (par exemple `log_msg() { echo \"[$(date +%T)] $1\"; }` ou similaire) et appelez-la au moins deux fois dans le script pour enregistrer les actions. Rendez-le exécutable et exécutez-le.",
    "commandHelp": [
      {
        "cmd": "func_name() { ... }",
        "desc": "Définir une fonction dans bash"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Créer un fichier de script \"backup_helper.sh\" dans la page d'accueil"
      },
      {
        "id": "has_function",
        "text": "Définir la fonction log_msg à l'intérieur du script"
      },
      {
        "id": "script_executed",
        "text": "Rendre le script exécutable et l'exécuter"
      }
    ],
    "hints": [
      "Utilisez touch backup_helper.sh, puis modifiez-le pour inclure shebang #!/bin/bash, log_msg() { ... } et appelez log_msg deux fois.",
      "N'oubliez pas d'exécuter chmod 755 backup_helper.sh pour le rendre exécutable avant d'exécuter ./backup_helper.sh.",
      "Essayez de définir la fonction : log_msg() { echo \"[LOG] $1\"; } puis appelez-le comme : log_msg 'Starting'"
    ]
  },
  "55": {
    "title": "Planification des tâches (crontab)",
    "description": "Maintenant que vous avez écrit des scripts shell robustes, vous ne voudriez pas vous connecter à minuit juste pour exécuter votre assistant de sauvegarde. Linux fournit le service `cron` pour exécuter automatiquement des commandes ou des scripts à des moments précis.\n\n- Le service cron vérifie une table de planification appelée `crontab`.\n- Chaque planning cron comporte 5 champs représentant l'heure : `minute hour day-of-month month day-of-week` suivi de la commande.\n- Par exemple, `30 2 * * * /path/to/script.sh` exécute un script tous les jours à 2h30.\n- Nous utilisons `crontab -l` pour lister nos tâches cron actives et `crontab <filename>` pour charger les plannings à partir d'un fichier.",
    "instructions": "Automatisons notre assistant de sauvegarde. Écrivez une chaîne de planification cron dans un fichier nommé `my_cron` (par exemple, `* * * * * /home/learner/backup_helper.sh` à exécuter toutes les minutes). Installez cette planification en exécutant `crontab my_cron` et vérifiez-la en exécutant `crontab -l`.",
    "commandHelp": [
      {
        "cmd": "crontab my_cron",
        "desc": "Installer les tâches cron à partir du fichier my_cron"
      },
      {
        "cmd": "crontab -l",
        "desc": "Liste les tâches cron actives pour l'utilisateur actuel"
      }
    ],
    "objectives": [
      {
        "id": "cron_file_created",
        "text": "Créer le fichier \"my_cron\" dans la maison avec la planification cron"
      },
      {
        "id": "cron_installed",
        "text": "Installer la planification cron en utilisant crontab my_cron"
      },
      {
        "id": "cron_listed",
        "text": "Lister la planification cron active avec crontab -l"
      }
    ],
    "hints": [
      "Utiliser echo '* * * * * /home/learner/backup_helper.sh' > my_cron pour créer le fichier cron.",
      "Chargez le fichier cron dans la table crontab en exécutant crontab my_cron.",
      "Vérifiez les tâches cron installées à l'aide de crontab -l"
    ]
  },
  "56": {
    "title": "Trouver des commandes (lesquelles)",
    "description": "Maintenant que vous êtes familier avec les variables d'environnement actives comme `PATH` (qui stocke les répertoires dans lesquels Linux recherche les commandes), comment trouver le chemin exact du fichier du programme qui s'exécute lorsque vous tapez `ls` ou `grep` ? Nous utilisons `which` pour localiser les binaires de commandes.\n\n- La commande `which` recherche les dossiers répertoriés dans votre variable `$PATH` et imprime le chemin absolu du binaire exécuté lorsque la commande est exécutée (par exemple, `which ls` génère `/bin/ls`).\n- Ceci est utile pour trouver où un outil est installé ou résoudre des conflits entre plusieurs versions du même outil.",
    "instructions": "Retrouvons nos outils. Exécutez `which ls` pour voir où l'exécutable `ls` est stocké sur le système. Ensuite, recherchez le chemin de la commande `grep` en exécutant `which grep`.",
    "commandHelp": [
      {
        "cmd": "which ls",
        "desc": "Trouver le chemin absolu de ls"
      },
      {
        "cmd": "which grep",
        "desc": "Trouver le chemin absolu de grep"
      }
    ],
    "objectives": [
      {
        "id": "used_which_ls",
        "text": "Exécutez la commande \" which \" sur ls"
      },
      {
        "id": "used_which_grep",
        "text": "Exécutez la commande \" which \" sur grep"
      }
    ],
    "hints": [
      "Exécutez which ls pour trouver le chemin de ls et which grep pour trouver le chemin de grep.",
      "Essayez d'exécuter : which ls, puis which grep"
    ]
  },
  "57": {
    "title": "Raccourcis Shell personnalisés (alias)",
    "description": "Taper de longues commandes avec plusieurs indicateurs peut devenir épuisant. Sous Linux, nous pouvons créer des raccourcis personnalisés appelés alias. Par exemple, vous pouvez mapper `ll` pour exécuter automatiquement `ls -la`.\n\n- Pour créer un alias temporaire, exécutez `alias name='command'` (par exemple `alias ll='ls -la'`).\n- L'exécution de `alias` sans arguments répertorie tous les alias actifs dans la session en cours.\n- Pour rendre les alias permanents lors des redémarrages, ils sont généralement écrits dans les fichiers de configuration `.bashrc` ou `.bash_profile`.",
    "instructions": "Créons quelques raccourcis. Créez un alias temporaire nommé `la` qui exécute `ls -a` en exécutant `alias la='ls -a'`. Testez-le en exécutant `la` dans votre terminal.",
    "commandHelp": [
      {
        "cmd": "alias la='ls -a'",
        "desc": "Alias ​​la pour exécuter ls -a"
      },
      {
        "cmd": "alias",
        "desc": "Liste les alias actifs"
      }
    ],
    "objectives": [
      {
        "id": "alias_created",
        "text": "Créer l'alias la pour ls -a"
      },
      {
        "id": "alias_run",
        "text": "Exécuter l'alias nouvellement créé la"
      }
    ],
    "hints": [
      "Définir l'alias en utilisant l'alias la='ls -a' exactement comme indiqué.",
      "Exécutez la commande alias la dans le terminal pour vérifier qu'elle fonctionne.",
      "Essayez d'exécuter : alias la='ls -a' suivi de : la"
    ]
  },
  "58": {
    "title": "Administration des utilisateurs (useradd & passwd)",
    "description": "Jusqu'à présent, vous avez travaillé en tant qu'utilisateur `learner`. Mais sur les serveurs du monde réel, les administrateurs système doivent gérer plusieurs comptes. Apprenons comment ajouter de nouveaux utilisateurs et définir leurs mots de passe.\n\n- La commande `useradd` crée un tout nouveau compte utilisateur. Étant donné que la création de comptes affecte la sécurité du système, elle doit être exécutée avec les privilèges de superutilisateur (par exemple `sudo useradd deployer`).\n- La commande `passwd` définit ou modifie le mot de passe d'un utilisateur. Exécutez en tant que `sudo passwd deployer` pour définir le mot de passe de l'utilisateur du déployeur.",
    "instructions": "Ajoutons le compte d'un collègue. Créez un nouvel utilisateur nommé `deployer` en exécutant `sudo useradd deployer`. Ensuite, définissez-leur un mot de passe en exécutant `sudo passwd deployer` (tapez n'importe quel mot de passe fictif lorsque vous y êtes invité).",
    "commandHelp": [
      {
        "cmd": "sudo useradd deployer",
        "desc": "Créer un nouveau déployeur utilisateur"
      },
      {
        "cmd": "sudo passwd deployer",
        "desc": "Définir le mot de passe pour le déployeur utilisateur"
      }
    ],
    "objectives": [
      {
        "id": "user_created",
        "text": "Créer un \"déployeur\" utilisateur à l'aide de useradd"
      },
      {
        "id": "passwd_changed",
        "text": "Définir le mot de passe pour le \"déployeur\" à l'aide de passwd"
      }
    ],
    "hints": [
      "Utilisez sudo useradd déployer pour enregistrer le compte utilisateur.",
      "Définissez le mot de passe en exécutant sudo passwd déployer.",
      "Essayez d'exécuter : sudo useradd déployer, puis : sudo passwd déployer"
    ]
  },
  "59": {
    "title": "Changer de contexte de sécurité (su)",
    "description": "Maintenant que vous avez créé le compte `deployer`, comment vous y connecter localement pour tester son environnement ? Sous Linux, nous utilisons la commande `su` (utilisateur de remplacement) pour changer de compte sans nous déconnecter.\n\n- La commande `su <username>` fait basculer le shell du terminal actuel vers la session de cet utilisateur.\n- Une fois commuté, l'exécution de `whoami` reflétera le nouveau nom d'utilisateur.\n- Pour revenir à la session initiale de votre compte utilisateur, tapez `exit` ou appuyez sur `Ctrl+D`.",
    "instructions": "Changeons de contexte. Basculez vers l’utilisateur `deployer` en exécutant `su deployer`. Une fois connecté, exécutez `whoami` pour vérifier que vous exécutez bien sous `deployer`. Lorsque vous avez terminé, tapez `exit` pour revenir en arrière.",
    "commandHelp": [
      {
        "cmd": "su deployer",
        "desc": "Remplacez la session utilisateur par le déployeur"
      },
      {
        "cmd": "whoami",
        "desc": "Vérifiez le nom de la session utilisateur active"
      },
      {
        "cmd": "exit",
        "desc": "Quittez la session utilisateur active"
      }
    ],
    "objectives": [
      {
        "id": "switched_user",
        "text": "Basculez le contexte du shell vers le déployeur à l'aide de su"
      },
      {
        "id": "verified_whoami",
        "text": "Exécutez whoami pour confirmer que vous êtes le déployeur"
      }
    ],
    "hints": [
      "Utilisez su déployer pour passer à la session shell du déployeur.",
      "Vérifiez qui est actif en tapant whoami.",
      "Essayez d'exécuter : su déployer, puis whoami, puis quittez"
    ]
  },
  "60": {
    "title": "Secure Shell Access (ssh)",
    "description": "Changer d'utilisateur localement est utile, mais dans le cloud computing, les serveurs vivent dans des centres de données distants. Pour nous y connecter en toute sécurité sur le réseau, nous utilisons `ssh` (Secure Shell).\n\n- La commande `ssh` crypte la connexion entre votre machine et un hôte distant pour empêcher les écoutes clandestines.\n- Syntaxe : `ssh user@hostname` ou `ssh user@ip_address` (par exemple `ssh admin@192.168.1.100`).\n- La première connexion vous demandera de vérifier l'authenticité de l'hôte distant en affichant une empreinte ECDSA unique.\n\n**Remarque :** Puisqu'il s'agit d'un bac à sable basé sur un navigateur, il n'y a pas de véritable serveur distant auquel se connecter. L’exécution de cette commande vous montrera instantanément le modèle de sortie attendu dans le monde réel (vérification de l’hôte, connexion, session), plutôt qu’une véritable session interactive en direct. Dans un vrai terminal, ssh vous déposerait dans un shell distant véritablement séparé jusqu'à ce que vous tapiez `exit`.",
    "instructions": "Connectons-nous à un serveur intermédiaire distant. Connectez-vous au serveur à `192.168.1.100` en tant qu'utilisateur `admin` en exécutant `ssh admin@192.168.1.100` (tapez `yes` si vous êtes invité à vérifier la clé d'hôte et entrez un mot de passe).",
    "commandHelp": [
      {
        "cmd": "ssh admin@192.168.1.100",
        "desc": "Connectez-vous en toute sécurité au serveur intermédiaire distant"
      }
    ],
    "objectives": [
      {
        "id": "ssh_connected",
        "text": "SSH sur le serveur distant à l'adresse 192.168.1.100 en tant qu'administrateur"
      }
    ],
    "hints": [
      "Utilisez la commande ssh suivie de user@host. Ici, l'utilisateur est l'administrateur et l'hôte est 192.168.1.100.",
      "Essayez d'exécuter : ssh admin@192.168.1.100"
    ]
  },
  "61": {
    "title": "Transfert de fichiers sécurisé (scp)",
    "description": "Maintenant que vous savez comment vous connecter à un serveur distant via SSH, comment y copier un fichier local (comme une archive de sauvegarde) ? La commande `scp` (copie sécurisée) copie les fichiers en toute sécurité entre les hôtes en utilisant SSH sous le capot.\n\n- La syntaxe est `scp source_path user@host:destination_path`.\n- Par exemple, `scp log.txt admin@192.168.1.100:/tmp/` copie le fichier `log.txt` local dans le dossier `/tmp/` distant.\n\n**Remarque :** Tout comme avec ssh, il n'y a pas de véritable serveur distant ici : l'exécution de cette commande confirme que votre fichier local existe et vous montre le résultat de transfert attendu, mais n'envoie réellement de données nulle part.",
    "instructions": "Envoyons notre archive de journaux au serveur intermédiaire distant. Copiez l'archive locale `logs.tar.gz` dans le dossier `/tmp` sur `192.168.1.100` en tant qu'utilisateur `admin` en exécutant `scp logs.tar.gz admin@192.168.1.100:/tmp/`.",
    "commandHelp": [
      {
        "cmd": "scp logs.tar.gz admin@192.168.1.100:/tmp/",
        "desc": "Copiez logs.tar.gz dans le dossier /tmp du serveur distant"
      }
    ],
    "objectives": [
      {
        "id": "scp_completed",
        "text": "Transférez logs.tar.gz vers 192.168.1.100:/tmp/ via scp"
      }
    ],
    "hints": [
      "Spécifiez scp suivi du fichier local logs.tar.gz, puis de la destination distante admin@192.168.1.100:/tmp/.",
      "Essayez d'exécuter : scp logs.tar.gz admin@192.168.1.100:/tmp/"
    ]
  },
  "62": {
    "title": "Compression de fichiers (gzip et gunzip)",
    "description": "Imaginez que vous ayez un seul fichier texte contenant un ensemble de données volumineux et que vous souhaitiez réduire sa taille pour économiser de l'espace disque ou accélérer le partage. Sous Linux, nous compressons les fichiers individuels en utilisant `gzip` et les restaurons en utilisant `gunzip`.\n\n- La commande `gzip <filename>` compresse un fichier en le remplaçant par une version compressée se terminant par `.gz` (par exemple, `backup.txt` devient `backup.txt.gz`).\n- La commande `gunzip <filename.gz>` décompresse le fichier en restaurant la version originale.",
    "instructions": "Compressons un fichier pour économiser de l'espace. Exécutez `gzip note.txt` dans votre dossier personnel. Ensuite, décompressez le fichier `note.txt.gz` résultant à son état d'origine en exécutant `gunzip note.txt.gz`.",
    "commandHelp": [
      {
        "cmd": "gzip note.txt",
        "desc": "Compressez note.txt en note.txt.gz"
      },
      {
        "cmd": "gunzip note.txt.gz",
        "desc": "Décompressez note.txt.gz en note.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_gzip",
        "text": "Exécutez la commande \"gzip\" pour compresser note.txt"
      },
      {
        "id": "used_gunzip",
        "text": "Exécutez la commande \"gunzip\" pour restaurer note.txt"
      }
    ],
    "hints": [
      "Utilisez gzip note.txt pour compresser le fichier.",
      "Utilisez gunzip note.txt.gz pour le décompresser.",
      "Essayez d'exécuter : gzip note.txt suivi de gunzip note.txt.gz"
    ]
  },
  "63": {
    "title": "Administration des groupes (groupadd et groupes)",
    "description": "Sous Linux, les utilisateurs sont organisés en **groupes** pour partager facilement les autorisations. Par exemple, tous les développeurs peuvent appartenir à un groupe nommé `developers`. Cela nous permet de partager des fichiers avec toute l’équipe en même temps.\n\n- La commande `groupadd` crée un nouveau groupe. Puisqu'il s'agit d'une configuration système, elle nécessite des privilèges de superutilisateur (par exemple `sudo groupadd developers`).\n- La commande `groups [username]` répertorie tous les groupes auxquels appartient un utilisateur. Exécuté sans arguments, il affiche les groupes pour l'utilisateur actuel.",
    "instructions": "Gérons les groupes. Créez un nouveau groupe nommé `developers` en exécutant `sudo groupadd developers`. Ensuite, vérifiez vos propres groupes actifs en exécutant la commande `groups`.",
    "commandHelp": [
      {
        "cmd": "sudo groupadd developers",
        "desc": "Créez un nouveau groupe nommé développeurs"
      },
      {
        "cmd": "groups",
        "desc": "Afficher les groupes actifs pour l'utilisateur actuel"
      }
    ],
    "objectives": [
      {
        "id": "group_created",
        "text": "Créer un groupe \"développeurs\" à l'aide de groupadd"
      },
      {
        "id": "checked_groups",
        "text": "Exécutez la commande \"groups\""
      }
    ],
    "hints": [
      "Utilisez sudo groupadd développeurs pour créer le groupe.",
      "Exécutez simplement la commande groups pour lister les groupes.",
      "Essayez d'exécuter : sudo groupadd développeurs suivi de groupes"
    ]
  },
  "64": {
    "title": "Listage des fichiers ouverts (lsof)",
    "description": "Dans les systèmes de type Unix, « tout est un fichier ». Cela signifie que non seulement les fichiers texte et les dossiers, mais également les sockets réseau, le matériel système et les processus sont traités comme des fichiers. Pour savoir quels fichiers sont consultés par quels programmes en cours d'exécution, nous utilisons `lsof` (List Open Files).\n\n- L'exécution de `lsof` affiche une liste complète de tous les fichiers ouverts, ainsi que l'ID de processus (PID) et la commande qui les a ouverts.\n- Par exemple, exécuter `lsof -i` répertorie tous les fichiers/sockets réseau, ce qui est extrêmement utile pour découvrir quel processus écoute sur un port réseau spécifique (comme le port 80).",
    "instructions": "Inspectons nos connexions et fichiers actifs. Exécutez `lsof` pour voir tous les fichiers ouverts dans le système.",
    "commandHelp": [
      {
        "cmd": "lsof",
        "desc": "Liste tous les fichiers ouverts sur le système"
      }
    ],
    "objectives": [
      {
        "id": "ran_lsof",
        "text": "Exécutez la commande \"lsof\""
      }
    ],
    "hints": [
      "Utilisez la commande 'lsof' sans argument pour lister tous les fichiers ouverts.",
      "Essayez d'exécuter : lsof"
    ]
  },
  "65": {
    "title": "Affichage des détails du processeur (lscpu)",
    "description": "Lors du dépannage des performances du système ou du déploiement d'applications très demandées, vous devez connaître les capacités du processeur de votre système. Sous Linux, nous lisons des informations détaillées sur l'architecture du processeur à l'aide de la commande `lscpu`.\n\n- La commande `lscpu` affiche les détails du processeur tels que le modèle du processeur, le fournisseur, la vitesse d'horloge, le nombre de cœurs, les détails de l'hyper-threading et la taille du cache, directement à partir du système de fichiers du noyau.",
    "instructions": "Inspectons le processeur. Exécutez `lscpu` pour afficher les détails du processeur de votre système.",
    "commandHelp": [
      {
        "cmd": "lscpu",
        "desc": "Afficher les informations sur l'architecture du processeur"
      }
    ],
    "objectives": [
      {
        "id": "ran_lscpu",
        "text": "Exécutez la commande \"lscpu\""
      }
    ],
    "hints": [
      "Exécutez simplement la commande lscpu pour afficher la configuration du processeur.",
      "Essayez d'exécuter : lscpu"
    ]
  },
  "66": {
    "title": "Archivage avec zip et décompression",
    "description": "Alors que `tar` et `gzip` sont standards sous Linux, `zip` est le format d'archive le plus courant dans le monde multiplateforme (Windows/macOS). Sous Linux, nous emballons et compressons les fichiers dans des fichiers zip à l'aide de `zip`, et les extrayons à l'aide de `unzip`.\n\n- La commande `zip <archive.zip> <files>` crée une archive zip.\n- La commande `unzip <archive.zip>` extrait les fichiers de l'archive.",
    "instructions": "Emballons nos notes. Créez une archive zip nommée `note.zip` contenant le fichier `note.txt` dans votre dossier personnel. Ensuite, testez l’extraction en exécutant `unzip note.zip`.",
    "commandHelp": [
      {
        "cmd": "zip note.zip note.txt",
        "desc": "Créez note.zip contenant note.txt"
      },
      {
        "cmd": "unzip note.zip",
        "desc": "Extrayez le contenu de note.zip"
      }
    ],
    "objectives": [
      {
        "id": "used_zip",
        "text": "Exécutez la commande \"zip\""
      },
      {
        "id": "used_unzip",
        "text": "Exécutez la commande \"unzip\""
      }
    ],
    "hints": [
      "Utilisez d'abord zip note.zip note.txt, suivi de décompressez note.zip.",
      "Essayez d'exécuter : zip note.zip note.txt puis décompressez note.zip"
    ]
  },
  "67": {
    "title": "Compression alternative (bzip2 & xz)",
    "description": "Au-delà de `gzip` et `zip`, Linux prend en charge d'autres formats de compression optimisés pour des taux de compression plus élevés au détriment de la vitesse du processeur. Il s'agit de `bzip2` (bz2) et `xz` (xz).\n\n- La commande `bzip2 <file>` compresse un fichier et génère `<file>.bz2`.\n- La commande `xz <file>` utilise la compression LZMA sans perte pour créer `<file>.xz`, ce qui génère des fichiers de taille exceptionnellement petite, ce qui la rend idéale pour les versions du noyau Linux.",
    "instructions": "Comparons les formats. Compressez `note.txt` en utilisant `bzip2 note.txt`. Ensuite, compressez les fichiers résultants en utilisant `xz note.txt` (pour simuler les deux).",
    "commandHelp": [
      {
        "cmd": "bzip2 note.txt",
        "desc": "Compressez note.txt à l'aide de bzip2"
      },
      {
        "cmd": "xz note.txt",
        "desc": "Compressez note.txt à l'aide de xz"
      }
    ],
    "objectives": [
      {
        "id": "used_bzip2",
        "text": "Exécutez bzip2 note.txt"
      },
      {
        "id": "used_xz",
        "text": "Exécutez xz note.txt"
      }
    ],
    "hints": [
      "Exécutez bzip2 note.txt pour tester la compression bzip2.",
      "Exécutez xz note.txt pour tester la compression xz."
    ]
  },
  "68": {
    "title": "Gestion des paquets Debian (dpkg)",
    "description": "Alors que `apt` automatise le téléchargement et la résolution des dépendances de paquets à partir des référentiels, que se passe-t-il si vous avez déjà téléchargé manuellement un fichier de paquet `.deb` et que vous souhaitez l'inspecter ou l'installer ? Sous Linux, nous utilisons `dpkg` (paquet Debian) pour interagir directement avec les packages.\n\n- La commande `dpkg -l` répertorie tous les packages actuellement installés sur votre système Debian/Ubuntu.\n- La commande `dpkg -s <package>` affiche les informations sur l'état, la version et l'architecture d'un package spécifique.",
    "instructions": "Interrogons la base de données de packages locale. Vérifiez la liste des packages en exécutant `dpkg -l`. Ensuite, interrogez les détails du programme `tree` en exécutant `dpkg -s tree`.",
    "commandHelp": [
      {
        "cmd": "dpkg -l",
        "desc": "Liste les paquets Debian installés"
      },
      {
        "cmd": "dpkg -s tree",
        "desc": "Afficher les détails de l'arborescence des paquets"
      }
    ],
    "objectives": [
      {
        "id": "ran_dpkg_l",
        "text": "Exécutez \"dpkg -l\" pour lister les paquets"
      },
      {
        "id": "ran_dpkg_s",
        "text": "Exécutez \"dpkg -s tree\" pour interroger les détails"
      }
    ],
    "hints": [
      "Utilisez dpkg -l pour récupérer la liste complète des paquets.",
      "Vérifiez l'état du package tree en utilisant dpkg -s tree.",
      "Essayez d'exécuter : dpkg -l suivi de dpkg -s tree"
    ]
  },
  "69": {
    "title": "Gestionnaires de packages RedHat (yum & dnf)",
    "description": "Tous les environnements Linux ne sont pas basés sur Debian/Ubuntu. Si vous travaillez sur des systèmes RedHat, Fedora ou CentOS, vous ne trouverez pas `apt` ou `dpkg`. Au lieu de cela, vous gérerez les packages à l’aide d’anciens gestionnaires de packages `yum` ou modernes `dnf` (Dandified YUM).\n\n- La commande `dnf check-update` (ou `yum check-update`) se connecte aux référentiels RedHat pour rechercher les mises à jour de packages disponibles.\n- La commande `dnf install <package>` récupère et installe des programmes similaires à `apt install`.",
    "instructions": "Exécutons des mises à jour sur un simulateur basé sur RedHat. Recherchez les packages nécessitant des mises à jour en exécutant `dnf check-update` (ou `yum check-update`).",
    "commandHelp": [
      {
        "cmd": "dnf check-update",
        "desc": "Vérifiez les mises à jour des packages RedHat"
      },
      {
        "cmd": "yum check-update",
        "desc": "Vérifiez les mises à jour CentOS héritées"
      }
    ],
    "objectives": [
      {
        "id": "checked_updates",
        "text": "Exécutez dnf check-update ou yum check-update"
      }
    ],
    "hints": [
      "Utilisez la commande dnf ou yum avec l'argument check-update.",
      "Essayez d'exécuter : dnf check-update"
    ]
  },
  "70": {
    "title": "Gestion des utilisateurs (adduser et userdel)",
    "description": "Alors que `useradd` est un utilitaire de bas niveau qui enregistre simplement les détails de l'utilisateur dans les fichiers de configuration système, les systèmes Debian/Ubuntu fournissent un script interactif de haut niveau appelé `adduser` qui automatise la création de dossiers personnels, la définition de mots de passe et l'initialisation des environnements shell. À l'inverse, `userdel` supprime proprement les comptes d'utilisateurs.\n\n- L'exécution de `sudo adduser tester` vous guide de manière interactive à travers la configuration utilisateur.\n- L'exécution de `sudo userdel tester` supprime le compte utilisateur.",
    "instructions": "Gérons les cycles de vie des utilisateurs. Créez un utilisateur en utilisant `sudo adduser tester`. Après cela, supprimez l'utilisateur en exécutant `sudo userdel tester`.",
    "commandHelp": [
      {
        "cmd": "sudo adduser tester",
        "desc": "Créer un testeur utilisateur de manière interactive"
      },
      {
        "cmd": "sudo userdel tester",
        "desc": "Supprimer le compte du testeur utilisateur"
      }
    ],
    "objectives": [
      {
        "id": "ran_adduser",
        "text": "Exécutez la commande \"adduser\" avec sudo"
      },
      {
        "id": "ran_userdel",
        "text": "Exécutez la commande \"userdel\" avec sudo"
      }
    ],
    "hints": [
      "Utilisez sudo adduser tester suivi de sudo userdel tester.",
      "Essayez d'exécuter : sudo adduser tester, puis : sudo userdel tester"
    ]
  },
  "71": {
    "title": "Affichage des identités utilisateur (id)",
    "description": "Lors du dépannage des erreurs d'autorisation, vous devez vérifier le contexte exact de l'identifiant d'utilisateur et de groupe dans lequel vous exécutez. Nous faisons cela en utilisant `id`.\n\n- L'exécution de `id` imprime l'ID utilisateur (UID) de l'utilisateur actuel, l'ID de groupe principal (GID) et toutes les listes de groupes supplémentaires.\n- L'exécution de `id <username>` interroge des informations pour un utilisateur spécifique.",
    "instructions": "Vérifions les identités actives. Exécutez `id` pour voir vos informations, puis exécutez `id root` pour inspecter les identifiants de compte du superutilisateur.",
    "commandHelp": [
      {
        "cmd": "id",
        "desc": "Afficher les détails d'identification de l'utilisateur actif"
      },
      {
        "cmd": "id root",
        "desc": "Interroger les détails d'identification de la racine"
      }
    ],
    "objectives": [
      {
        "id": "ran_id_learner",
        "text": "Exécuter la commande \"id\" pour l'apprenant"
      },
      {
        "id": "ran_id_root",
        "text": "Exécuter la commande \"id root\""
      }
    ],
    "hints": [
      "Exécuter id suivi de id root.",
      "Essayez d'exécuter : id et id root"
    ]
  },
  "72": {
    "title": "Suppression de groupes (groupdel)",
    "description": "Lorsque les équipes de projet réorganisent ou mettent hors service des services, les groupes de sécurité correspondants doivent être nettoyés. Sous Linux, nous supprimons les groupes en utilisant `groupdel`.\n\n- La commande `groupdel <group_name>` supprime définitivement un groupe des fichiers de configuration du système, nécessitant les privilèges de superutilisateur.",
    "instructions": "Nettoyons nos groupes. Supprimez le groupe `developers` en exécutant `sudo groupdel developers`.",
    "commandHelp": [
      {
        "cmd": "sudo groupdel developers",
        "desc": "Supprimez le groupe de développeurs"
      }
    ],
    "objectives": [
      {
        "id": "group_deleted",
        "text": "Supprimez le groupe \"développeurs\" à l'aide de groupdel"
      }
    ],
    "hints": [
      "Utilisez sudo groupdel développeurs pour supprimer le groupe de /etc/group.",
      "Essayez d'exécuter : sudo groupdel développeurs"
    ]
  },
  "73": {
    "title": "Vérification des interfaces (ifconfig)",
    "description": "Avant que la suite de commandes moderne `ip` ne devienne standard, les administrateurs système Linux s'appuyaient sur `ifconfig` (configurateur d'interface) pour afficher et gérer les interfaces réseau.\n\n- La commande `ifconfig` affiche les interfaces réseau actives, la configuration IP locale, les détails du masque de réseau et les adresses matérielles MAC. Bien que obsolète sur certaines distributions plus récentes, il reste largement utilisé sur les serveurs existants.",
    "instructions": "Exécutons l'outil de configuration classique. Exécutez `ifconfig` pour inspecter les interfaces réseau actives.",
    "commandHelp": [
      {
        "cmd": "ifconfig",
        "desc": "Afficher les configurations de l'interface réseau"
      }
    ],
    "objectives": [
      {
        "id": "ran_ifconfig",
        "text": "Exécuter la commande \"ifconfig\""
      }
    ],
    "hints": [
      "Exécuter la commande ifconfig dans le terminal.",
      "Essayez d'exécuter : ifconfig"
    ]
  },
  "74": {
    "title": "Connexions réseau (nmcli)",
    "description": "Sur les postes de travail et serveurs Linux modernes, les interfaces réseau sont gérées par un démon système appelé NetworkManager. Plutôt que de modifier manuellement les fichiers de configuration, nous configurons les détails du réseau à l'aide de `nmcli`.\n\n- La commande `nmcli` (NetworkManager CLI) vous permet d'inspecter les connexions matérielles, les états des appareils et les réseaux Wi-Fi actifs.",
    "instructions": "Vérifions l'état du matériel réseau. Exécutez `nmcli device` pour interroger les connexions et l'état.",
    "commandHelp": [
      {
        "cmd": "nmcli device",
        "desc": "Répertorier les périphériques et les états de l'interface réseau"
      }
    ],
    "objectives": [
      {
        "id": "ran_nmcli_device",
        "text": "Exécutez la commande \"nmcli device\" ou \"nmcli dev\""
      }
    ],
    "hints": [
      "Utilisez le périphérique nmcli pour répertorier les statuts de l'interface.",
      "Essayez d'exécuter : périphérique nmcli"
    ]
  },
  "75": {
    "title": "Statistiques de socket et de connexion (netstat & ss)",
    "description": "Lors de la configuration d'une base de données ou d'un serveur Web, vous devez vérifier que le service est en cours d'exécution et écoute sur le bon port, et vérifier si des connexions non autorisées sont établies. Nous faisons cela en utilisant `netstat` ou `ss`.\n\n- La commande `netstat` (statistiques réseau) est un outil classique pour afficher les connexions TCP et les ports d'écoute. Par ex. `netstat -tuln` répertorie les ports d'écoute TCP/UDP.\n- La commande `ss` (statistiques de socket) est l'alternative moderne et plus rapide à `netstat` qui affiche les détails de connexion du socket directement à partir de l'espace de noms du noyau.",
    "instructions": "Auditons les ports. Vérifiez les sockets TCP/UDP à l'écoute en exécutant `netstat -tuln`, puis vérifiez-les à l'aide de la commande moderne de statistiques de socket `ss -tuln`.",
    "commandHelp": [
      {
        "cmd": "netstat -tuln",
        "desc": "Afficher les ports TCP/UDP d'écoute à l'aide de netstat"
      },
      {
        "cmd": "ss -tuln",
        "desc": "Afficher les sockets d'écoute à l'aide de ss"
      }
    ],
    "objectives": [
      {
        "id": "ran_netstat",
        "text": "Exécutez \"netstat -tuln\""
      },
      {
        "id": "ran_ss",
        "text": "Exécutez \"ss -tuln\""
      }
    ],
    "hints": [
      "Exécutez d'abord netstat -tuln, suivi de ss -tuln.",
      "Essayez d'exécuter : netstat -tuln puis ss -tuln"
    ]
  },
  "76": {
    "title": "Traçage des itinéraires de paquets (traceroute)",
    "description": "Lorsqu'une page Web ne parvient pas à se charger, comment identifier si le problème vient de votre routeur domestique, de votre fournisseur d'accès Internet (FAI) ou du serveur de destination ? Sous Linux, nous traçons les paquets en utilisant `traceroute`.\n\n- La commande `traceroute` répertorie chaque passerelle de routeur (saut) qu'un paquet traverse pour se diriger vers un serveur distant, ainsi que la latence de réponse pour chaque saut.",
    "instructions": "Traçons le chemin vers un serveur Web. Exécutez `traceroute google.com` pour voir les sauts.",
    "commandHelp": [
      {
        "cmd": "traceroute google.com",
        "desc": "Tracez les sauts de réseau vers google.com"
      }
    ],
    "objectives": [
      {
        "id": "ran_traceroute",
        "text": "Exécutez la commande \"traceroute\""
      }
    ],
    "hints": [
      "Utilisez traceroute suivi d'un nom de domaine tel que google.com.",
      "Essayez d'exécuter : traceroute google.com"
    ]
  },
  "77": {
    "title": "Pare-feu Linux (ufw et iptables)",
    "description": "Imaginez vivre dans un immeuble sécurisé où un agent de sécurité se tient à l'entrée pour vérifier les pièces d'identité et bloquer les visiteurs non autorisés. Sous Linux, un **pare-feu** agit comme un agent de sécurité pour vos ports réseau.\n\n- La commande `ufw` (Uncomplicated Firewall) est une interface conviviale de gestion des règles de pare-feu. L'exécution de `sudo ufw status` indique si le pare-feu est actif et quels ports (comme le port 22 pour SSH ou le port 80 pour les serveurs Web) sont ouverts.\n- La commande `iptables` est l'outil Netfilter traditionnel de bas niveau qui bloque ou redirige les paquets. L'exécution de `sudo iptables -L` répertorie les chaînes de sécurité actives et les règles de correspondance de paquets.",
    "instructions": "Inspectons nos agents de sécurité. Affichez l'état du pare-feu simple en exécutant `sudo ufw status`, puis vérifiez les règles Netfilter de niveau inférieur en exécutant `sudo iptables -L`.",
    "commandHelp": [
      {
        "cmd": "sudo ufw status",
        "desc": "Afficher les règles de pare-feu ufw"
      },
      {
        "cmd": "sudo iptables -L",
        "desc": "Liste les règles de filtrage de paquets iptables actives"
      }
    ],
    "objectives": [
      {
        "id": "checked_ufw",
        "text": "Exécutez la commande \"ufw status\" avec sudo"
      },
      {
        "id": "checked_iptables",
        "text": "Exécutez la commande \"iptables -L\" avec sudo"
      }
    ],
    "hints": [
      "Utilisez sudo ufw status pour inspecter le pare-feu simple.",
      "Utilisez sudo iptables -L pour vérifier les règles Netfilter.",
      "Essayez d'exécuter : sudo ufw status, puis sudo iptables -L"
    ]
  },
  "78": {
    "title": "Gentilité du processus (nice & renice)",
    "description": "Dans un bureau occupé, certaines tâches peu prioritaires (comme le dépôt des reçus) peuvent attendre, tandis que les demandes hautement prioritaires doivent être traitées immédiatement. Linux gère la priorité des processus en utilisant des valeurs de **gentilesse** allant de -20 (priorité la plus élevée) à 19 (priorité la plus basse).\n\n- La commande `nice` lance un traitement avec une priorité personnalisée. Par ex. `nice -n 10 sleep 5` démarre une commande sleep avec une priorité polie de 10.\n- La commande `renice` modifie la priorité de planification d'un processus déjà en cours d'exécution. Par exemple, `sudo renice +5 9999` réduit la priorité du processus 9999.",
    "instructions": "Ajustons les priorités. Exécutez une commande de faible priorité en utilisant `nice -n 10 sleep 5`. Ensuite, réduisez la priorité du processus malveillant en cours d’exécution 9999 en exécutant `sudo renice +5 9999`.",
    "commandHelp": [
      {
        "cmd": "nice -n 10 sleep 5",
        "desc": "Commencez le sommeil avec une valeur de gentillesse de 10"
      },
      {
        "cmd": "sudo renice +5 9999",
        "desc": "Priorité inférieure du PID 9999"
      }
    ],
    "objectives": [
      {
        "id": "used_nice",
        "text": "Exécutez la commande \"nice\" avec -n 10"
      },
      {
        "id": "used_renice",
        "text": "Exécutez la commande \"renice\" avec sudo"
      }
    ],
    "hints": [
      "Utilisez nice -n 10 sleep 5 pour lancer un processus nice.",
      "Modifiez la priorité PID active en utilisant sudo renice +5 9999.",
      "Essayez d'exécuter : nice -n 10 sleep 5 et sudo renice +5 9999."
    ]
  },
  "79": {
    "title": "Reprise des tâches en arrière-plan (bg)",
    "description": "Nous avons déjà vu comment démarrer une tâche en arrière-plan en utilisant `&` et la relancer en utilisant `fg`. Mais que se passe-t-il si vous démarrez une commande sans `&` ou si vous la suspendez avec `Ctrl+Z` ? Vous pouvez le reprendre en arrière-plan en utilisant `bg` !\n\n- La commande `bg` reprend les tâches suspendues, leur permettant de s'exécuter en arrière-plan sans bloquer l'invite de votre terminal.",
    "instructions": "Exécutons un travail en arrière-plan. Démarrez `sleep 200 &` en arrière-plan, exécutez `jobs` pour répertorier les tâches actives, puis exécutez `bg` pour garantir la reprise de son exécution.",
    "commandHelp": [
      {
        "cmd": "sleep 200 &",
        "desc": "Démarrer le processus en arrière-plan"
      },
      {
        "cmd": "jobs",
        "desc": "Liste les tâches actives en arrière-plan"
      },
      {
        "cmd": "bg",
        "desc": "Reprendre les tâches en arrière-plan"
      }
    ],
    "objectives": [
      {
        "id": "ran_sleep_bg",
        "text": "Démarrer une commande sleep avec &"
      },
      {
        "id": "ran_jobs",
        "text": "Exécuter la commande \"jobs\""
      },
      {
        "id": "ran_bg",
        "text": "Exécuter la commande \"bg\""
      }
    ],
    "hints": [
      "Exécuter sleep 200 & suivi de jobs et enfin bg."
    ]
  },
  "80": {
    "title": "Statistiques d'E/S et du processeur (iostat)",
    "description": "Lorsqu'une base de données ou une application Web s'exécute lentement, comment déterminer si le problème est un goulot d'étranglement du processeur ou un disque dur lent ? Sous Linux, nous surveillons les métriques de performances de sortie/entrée du système à l’aide de `iostat`.\n\n- La commande `iostat` affiche des statistiques de rapport sur l'utilisation du processeur et le débit de lecture/écriture du périphérique actif, vous aidant ainsi à identifier la congestion du disque.",
    "instructions": "Vérifions les journaux de performances. Exécutez la commande `iostat` pour imprimer les statistiques d'E/S.",
    "commandHelp": [
      {
        "cmd": "iostat",
        "desc": "Afficher les statistiques d'entrées/sorties"
      }
    ],
    "objectives": [
      {
        "id": "ran_iostat",
        "text": "Exécuter la commande \"iostat\""
      }
    ],
    "hints": [
      "Tapez iostat dans le terminal et appuyez sur Entrée.",
      "Essayez d'exécuter : iostat"
    ]
  },
  "81": {
    "title": "Recherche de packages (apt search)",
    "description": "Avant d'installer un logiciel sous Linux, comment découvrir quels packages sont disponibles dans le référentiel ? Sous Linux, nous utilisons `apt search` pour interroger le catalogue de logiciels par mot-clé.\n\n- La commande `apt search <keyword>` analyse les descriptions du référentiel et répertorie les packages logiciels correspondants ainsi que leurs versions.\n- Contrairement à `apt install`, la recherche dans les référentiels de packages ne lit que les fichiers d'index du catalogue local et ne nécessite **pas** de privilèges de superutilisateur (`sudo`).",
    "instructions": "Recherchons le référentiel de packages ! Exécutez `apt search tree` pour rechercher les packages liés à la visualisation d'annuaire dans le catalogue de logiciels.",
    "commandHelp": [
      {
        "cmd": "apt search tree",
        "desc": "Recherchez dans les référentiels de packages les packages correspondant à \"tree\""
      }
    ],
    "objectives": [
      {
        "id": "ran_apt_search",
        "text": "Exécutez \"apt search tree\" pour interroger le catalogue de packages"
      }
    ],
    "hints": [
      "Utilisez la commande apt search suivie du nom ou du mot-clé du package que vous souhaitez rechercher.",
      "Exécutez l'arborescence de recherche apt pour afficher les packages disponibles dans le référentiel.",
      "Essayez d'exécuter : arbre de recherche apt"
    ]
  },
  "82": {
    "title": "Purge des packages (apt purge)",
    "description": "Lors de la désinstallation d'un logiciel sous Linux, la norme `apt remove` désinstalle les binaires de l'application mais laisse les fichiers de configuration du système derrière au cas où vous les réinstalleriez ultérieurement. Pour éliminer complètement un progiciel ET effacer tous les fichiers de configuration associés, nous utilisons `apt purge` (ou `apt remove --purge`).\n\n- La commande `sudo apt purge <package>` supprime l'application et efface tous les fichiers de configuration restants.\n- Étant donné que la purge modifie les dossiers et les fichiers de configuration à l'échelle du système, elle nécessite les privilèges de superutilisateur (`sudo`).",
    "instructions": "Supprimons complètement un package et ses fichiers de configuration. Exécutez `sudo apt purge tree` pour purger le programme `tree` du système.",
    "commandHelp": [
      {
        "cmd": "sudo apt purge tree",
        "desc": "Purger le package et effacer ses fichiers de configuration"
      }
    ],
    "objectives": [
      {
        "id": "purged_tree",
        "text": "Purger \"l'arborescence\" du package à l'aide de \"sudo apt purge tree\""
      }
    ],
    "hints": [
      "Utilisez apt purge avec les privilèges de superutilisateur pour supprimer complètement un package ainsi que ses fichiers de configuration.",
      "Exécutez sudo apt purge tree pour purger le package d'arborescence.",
      "Essayez d'exécuter : sudo apt purge tree"
    ]
  },
  "83": {
    "title": "Structure de répertoire Linux et FHS",
    "description": "Chaque système Linux suit une hiérarchie de système de fichiers standard en commençant par le répertoire racine `/`. Contrairement à Windows (qui utilise des lettres de lecteur comme `C:` ou `D:`), Linux unifie tous les fichiers et le stockage sous `/`.\n\nVoici les répertoires système clés que tout utilisateur Linux devrait connaître :\n- `/` (Root) : Le dossier parent de niveau supérieur de l'ensemble du système.\n- `/etc` : contient les configurations du système (par exemple `/etc/hosts`, `/etc/passwd`).\n- `/var` : contient des données variables qui changent au fil du temps (journaux, spool, caches comme `/var/log`).\n- `/home` : Dossiers personnels de l'utilisateur (par exemple `/home/learner`).\n- `/tmp` : Zone de stockage temporaire des fichiers transitoires.\n- `/usr` : utilitaires utilisateur, applications et bibliothèques système.",
    "instructions": "Explorons la disposition du système ! Tout d’abord, accédez au répertoire racine en exécutant `cd /`. Exécutez ensuite `ls /etc` pour afficher les fichiers de configuration système stockés dans `/etc`.",
    "commandHelp": [
      {
        "cmd": "cd /",
        "desc": "Accédez au répertoire racine"
      },
      {
        "cmd": "ls /etc",
        "desc": "Liste les fichiers de configuration dans /etc"
      }
    ],
    "objectives": [
      {
        "id": "visited_root",
        "text": "Accédez au répertoire racine (/)"
      },
      {
        "id": "listed_etc",
        "text": "Liste le contenu du répertoire /etc"
      }
    ],
    "hints": [
      "Utilisez 'cd /' pour accéder au répertoire racine.",
      "Utilisez 'ls /etc' pour afficher les fichiers de configuration dans /etc.",
      "Essayez d'exécuter : cd / puis : ls /etc"
    ]
  }
};
