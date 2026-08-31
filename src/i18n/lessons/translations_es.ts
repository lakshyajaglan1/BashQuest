import type { LessonTranslation } from "./types";

export const translations_es: Record<number, LessonTranslation> = {
  "1": {
    "title": "¿Quién soy y dónde estoy?",
    "description": "Imagínese entrar en una biblioteca enorme y oscura con millones de libros, pero no tiene un mapa y ni siquiera puede recordar su propia etiqueta con su nombre. Antes de poder buscar algo, necesita saber quién es y dónde se encuentra. ¡En el shell de Linux, comenzamos exactamente con las mismas preguntas!\n\n- El comando `whoami` imprime el nombre de usuario con el que está conectado actualmente.\n- El comando `pwd` (imprimir directorio de trabajo) actúa como un GPS y le muestra la ruta exacta de la carpeta donde se encuentra actualmente.",
    "instructions": "¡Vamos a orientarnos! Primero, ejecute `whoami` para ver su nombre de usuario activo y luego ejecute `pwd` para imprimir la ubicación actual de su carpeta en el sistema de archivos.",
    "commandHelp": [
      {
        "cmd": "whoami",
        "desc": "Imprime el nombre de usuario activo"
      },
      {
        "cmd": "pwd",
        "desc": "Imprime el directorio de trabajo actual"
      }
    ],
    "objectives": [
      {
        "id": "ran_whoami",
        "text": "Ejecute el comando \"whoami\""
      },
      {
        "id": "ran_pwd",
        "text": "Ejecute el comando \"pwd\""
      }
    ],
    "hints": [
      "Compruebe qué comandos necesita ejecutar para identificar su usuario y ruta.",
      "El comando 'whoami' muestra su nombre de usuario y 'pwd' muestra su ruta actual.",
      "Intente ejecutar: whoami y luego pwd"
    ]
  },
  "2": {
    "title": "Navegar y enumerar archivos",
    "description": "Ahora que sabes dónde estás, ¿cómo miras a tu alrededor y te mueves a una habitación diferente en esta biblioteca digital? En Linux, hacemos esto usando dos comandos simples:\n\n- `ls`: Es como encender las luces de una habitación para ver todos los archivos y carpetas que hay dentro.\n- `cd <path>`: abreviatura de \"cambiar directorio\", esto le permite atravesar una puerta hacia otra carpeta.\n\nPara especificar dónde desea ir, puede usar rutas **absolutas** (comenzando desde la raíz `/` del sistema, como `/var/log`) o rutas **relativas** (según dónde se encuentre ahora, como usar `..` para regresar a la carpeta principal).",
    "instructions": "Exploremos. Ingrese a la carpeta `/var/log` ejecutando `cd /var/log` y luego ejecute el comando `ls` para ver los archivos de registro almacenados en su interior.",
    "commandHelp": [
      {
        "cmd": "ls",
        "desc": "Enumera los archivos en el directorio actual"
      },
      {
        "cmd": "cd /var/log",
        "desc": "Cambia el directorio a /var/log"
      }
    ],
    "objectives": [
      {
        "id": "in_var_log",
        "text": "Cambia el directorio a /var/log"
      },
      {
        "id": "ran_ls",
        "text": "Ejecuta el comando \"ls\" en /var/log"
      }
    ],
    "hints": [
      "Piensa en cómo navegar y enumerar archivos en un directorio específico.",
      "Cambie el directorio a /var/log usando cd, luego use ls.",
      "Intente ejecutar: cd /var/log y luego ls"
    ]
  },
  "3": {
    "title": "Creación de directorios",
    "description": "Imagine que su escritorio está lleno de papeles sueltos y necesita carpetas físicas para mantener todo ordenado. En Linux, organizamos archivos creando carpetas (directorios) usando el comando `mkdir` (crear directorio).\n\nAl ejecutar `mkdir code` se crea una carpeta nueva llamada \"código\" justo donde estás. Puede crear carpetas en cualquier parte del sistema de archivos dándole a `mkdir` una ruta relativa o absoluta.",
    "instructions": "Construyamos un espacio de trabajo. Regrese a su directorio de inicio ejecutando `cd ~` (o `cd /home/learner`), luego cree una nueva carpeta llamada `projects` dentro de él.",
    "commandHelp": [
      {
        "cmd": "cd ~",
        "desc": "Regresar al directorio de inicio"
      },
      {
        "cmd": "mkdir projects",
        "desc": "Crear carpeta de proyectos"
      }
    ],
    "objectives": [
      {
        "id": "in_home",
        "text": "Estar en su carpeta de inicio (/home/learner)"
      },
      {
        "id": "used_mkdir",
        "text": "Usar el comando \"mkdir\""
      },
      {
        "id": "dir_exists",
        "text": "Crear un directorio llamado \"proyectos\""
      }
    ],
    "hints": [
      "Primero asegúrese de estar en el directorio de inicio correcto.",
      "Vaya a su directorio de inicio (~ o ​​/home/learner) y use el comando mkdir.",
      "Intente ejecutar: cd ~ seguido de proyectos mkdir"
    ]
  },
  "4": {
    "title": "Directorios anidados y opciones",
    "description": "Imagínese intentar construir un conjunto de muñecos anidados, pero tiene que construir los más externos antes de poder construir el más pequeño del interior. De forma predeterminada, `mkdir` es así: se niega a crear una carpeta en el interior de carpetas que aún no existen. Para evitar la molestia de crear carpetas una por una, usamos un interruptor:\n\n- La opción `-p` (o `--parents`) le dice a `mkdir` que cree automáticamente las carpetas principales que faltan en su camino hacia la carpeta final. Por ejemplo, `mkdir -p workspace/src/utils` crea `workspace`, `workspace/src` y `workspace/src/utils`, todo en un solo comando.\n\n**Por qué esto es importante**: Si ejecuta `mkdir workspace/src/utils` sin `-p` y `workspace` y `workspace/src` aún no existen, obtendrá: `mkdir: cannot create directory 'workspace/src/utils': No such file or directory`. El indicador `-p` soluciona este problema creando automáticamente todas las carpetas principales que faltan.",
    "instructions": "Construyamos una estructura de carpetas profunda. Cree una ruta anidada `workspace/src/utils` en su carpeta de inicio usando `mkdir -p workspace/src/utils`.",
    "commandHelp": [
      {
        "cmd": "mkdir -p path",
        "desc": "Crear directorios anidados y directorios principales"
      }
    ],
    "objectives": [
      {
        "id": "nested_dir_exists",
        "text": "Crear directorio anidado workspace/src/utils"
      },
      {
        "id": "used_p_switch",
        "text": "Utilice el modificador -p o --parents en mkdir"
      }
    ],
    "hints": [
      "Busque un indicador mkdir que cree directorios principales automáticamente si no existen.",
      "Utilice mkdir con el modificador -p para crear carpetas anidadas.",
      "Intente ejecutar: mkdir -p workspace/src/utils"
    ]
  },
  "5": {
    "title": "Limpiar la pantalla",
    "description": "¿Alguna vez te has sentido abrumado cuando tu escritorio está cubierto de notas y papeles desordenados? Su terminal puede quedar igualmente abarrotada. Cuando lo haga, puedes borrar todo el texto antiguo y empezar de nuevo.\n\n- El comando `clear` limpia la pantalla visible, deslizando la salida anterior fuera de la vista para que tengas un lienzo nuevo y en blanco en la parte superior de la terminal.",
    "instructions": "¡Date un respiro! Ejecute `clear` para limpiar la pantalla.",
    "commandHelp": [
      {
        "cmd": "clear",
        "desc": "Limpia la pantalla del terminal"
      }
    ],
    "objectives": [
      {
        "id": "ran_clear",
        "text": "Ejecuta el comando \"borrar\""
      }
    ],
    "hints": [
      "Elimina todo el texto antiguo y comienza de nuevo.",
      "Ejecute el comando que borra la pantalla del terminal.",
      "Intente ejecutar: borrar"
    ]
  },
  "6": {
    "title": "Cómo encontrar ayuda de Shell",
    "description": "Cuando compras un nuevo juego de mesa, normalmente echas un vistazo al libro de reglas o a la tarjeta de referencia para ver qué movimientos están permitidos. ¡En nuestro emulador de terminal, tienes una hoja de referencia incorporada!\n\n- El comando `help` enumera todos los comandos que admite este simulador, junto con detalles sobre si admite canalización o redireccionamiento de salidas.",
    "instructions": "Inspeccionemos el libro de reglas. Ejecute `help` para ver la lista completa de comandos con los que puede jugar.",
    "commandHelp": [
      {
        "cmd": "help",
        "desc": "Lista de comandos disponibles"
      }
    ],
    "objectives": [
      {
        "id": "ran_help",
        "text": "Ejecute el comando \"ayuda\""
      }
    ],
    "hints": [
      "Revise las instrucciones para encontrar el comando apropiado para obtener ayuda del libro de reglas.",
      "Utilice el comando 'ayuda'.",
      "Intente ejecutar: ayuda"
    ]
  },
  "7": {
    "title": "Crear archivos vacíos",
    "description": "Imagínese que quiere empezar a escribir una nueva entrada en el diario, pero primero necesita una hoja de papel en blanco. En Linux, tomamos un archivo de texto nuevo y vacío usando el comando `touch`.\n\n- El comando `touch` crea un archivo nuevo y vacío si aún no existe (como ejecutar `touch draft.txt` para crear `draft.txt`). Si el archivo ya existe, simplemente actualiza la marca de tiempo de la \"última modificación\" del archivo sin cambiar su contenido. Pongamos un archivo en nuestra carpeta de nuevos proyectos.",
    "instructions": "Creemos una pizarra en blanco. Cree un archivo vacío llamado `task.txt` dentro de la carpeta `projects` (ingrese la carpeta primero o use `touch projects/task.txt`).",
    "commandHelp": [
      {
        "cmd": "cd projects",
        "desc": "Ingrese a la carpeta de proyectos"
      },
      {
        "cmd": "touch task.txt",
        "desc": "Cree el archivo task.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_touch",
        "text": "Use el comando \"tocar\""
      },
      {
        "id": "file_exists",
        "text": "Cree el archivo \"task.txt\" dentro de \"proyectos\""
      }
    ],
    "hints": [
      "Piense en qué comando crea un nuevo archivo vacío.",
      "Utilice el comando 'touch' dentro del directorio 'proyectos'.",
      "Intente ejecutar: toque proyectos/task.txt"
    ]
  },
  "8": {
    "title": "Lectura del contenido del archivo",
    "description": "Piense en abrir una carpeta, sacar una página de texto y sostenerla para leerla. En Linux, leemos archivos instantáneamente sin abrir un editor de texto pesado usando el comando `cat` (concatenar).\n\n- El comando `cat` imprime todo el contenido de un archivo directamente en la pantalla de su terminal. Por ejemplo, ejecutar `cat notes.txt` le permite ver lo que está escrito dentro de `notes.txt` de inmediato.",
    "instructions": "Leamos un archivo del sistema. Imprima el contenido del archivo de configuración de la red local en `/etc/hosts` ejecutando `cat /etc/hosts`.",
    "commandHelp": [
      {
        "cmd": "cat /etc/hosts",
        "desc": "Imprime el contenido del archivo hosts"
      }
    ],
    "objectives": [
      {
        "id": "cat_hosts",
        "text": "Ejecuta el comando \"cat\" en /etc/hosts"
      }
    ],
    "hints": [
      "Piensa en qué comando genera/muestra el contenido de un archivo.",
      "Utilice el comando 'cat' en el archivo /etc/hosts.",
      "Intente ejecutar: cat /etc/hosts"
    ]
  },
  "9": {
    "title": "Manejo de espacios en nombres de archivos",
    "description": "Si le dice a un robot que \"pinte mi dormitorio de azul\", necesita saber si \"mi dormitorio\" es un solo lugar o si \"mi\" y \"dormitorio\" son dos instrucciones diferentes. Linux usa espacios para separar los comandos de sus argumentos. Entonces, si ejecuta `mkdir my folder`, Linux cree que desea crear dos carpetas separadas: una llamada \"mi\" y otra llamada \"carpeta\".\n\n- Para decirle a Linux que un nombre con espacios es un solo elemento, debemos encerrarlo entre comillas (`\"my folder\"` o `'my folder'`) o usar una barra invertida para escapar del espacio (`my\\ folder`).",
    "instructions": "Manejemos nombres con espacios. Cree una carpeta llamada `\"my code\"` en su directorio de inicio y luego cree un archivo vacío llamado `\"my task\"` dentro de ella.",
    "commandHelp": [
      {
        "cmd": "mkdir \"my code\"",
        "desc": "Crea una carpeta con un espacio en el nombre"
      },
      {
        "cmd": "touch \"my code/my task\"",
        "desc": "Crea un archivo con un espacio en el nombre"
      }
    ],
    "objectives": [
      {
        "id": "dir_with_space_exists",
        "text": "Crea el directorio \"mi código\""
      },
      {
        "id": "file_with_space_exists",
        "text": "Crea el archivo \"mi tarea\" dentro de \"mi código\""
      }
    ],
    "hints": [
      "Al crear archivos o directorios con espacios en sus nombres, entre comillas.",
      "Utilice mkdir \"mi código\" seguido de toque \"mi código/mi tarea\".",
      "Intente ejecutar: mkdir \"mi código\" y toque \"mi código/mi tarea\""
    ]
  },
  "10": {
    "title": "Escritura y sobrescritura de archivos",
    "description": "Si desea escribir un mensaje en una pizarra, primero limpie la pizarra por completo y luego escriba las nuevas palabras. En Linux, escribimos mensajes en archivos usando el operador `>` (redirección de salida).\n\n- El comando `echo \"message\"` normalmente imprime texto en la pantalla.\n- Al agregar el símbolo `>`, redirigimos ese texto a un archivo. Por ejemplo, `echo \"Hi\" > greeting.txt` escribe \"Hola\" en `greeting.txt`. Si el archivo ya tiene texto, `>` lo sobrescribe completamente con el nuevo mensaje.",
    "instructions": "Escribamos en un nuevo archivo. Guarde el texto \"Sistema en línea\" en un archivo llamado `status.txt` en su carpeta de inicio `/home/learner`.",
    "commandHelp": [
      {
        "cmd": "echo \"System Online\" > status.txt",
        "desc": "Crear status.txt con texto"
      }
    ],
    "objectives": [
      {
        "id": "used_echo_redirect",
        "text": "Usar eco con > redirección"
      },
      {
        "id": "file_created",
        "text": "Crear \"status.txt\" en el directorio de inicio"
      },
      {
        "id": "content_correct",
        "text": "El contenido del archivo es exactamente \"Sistema en línea\""
      }
    ],
    "hints": [
      "Para escribir texto en un archivo, puede redirigir la salida del comando echo.",
      "Utilice el operador '>' para redirigir echo \"Sistema en línea\" a status.txt.",
      "Intente ejecutar: echo \"Sistema en línea\" > status.txt"
    ]
  },
  "11": {
    "title": "Agregar a archivos",
    "description": "En lugar de limpiar la pizarra, ¿qué sucede si solo desea agregar una nueva línea en la parte inferior? En Linux, agregamos texto al final de un archivo sin tocar el contenido existente usando el operador `>>` (añadir redirección).\n\n- El operador `>>` agrega el nuevo texto al final del archivo. Por ejemplo, `echo \"New Line\" >> logs.txt` agrega \"Nueva línea\" al final de `logs.txt` mientras mantiene seguros todos sus registros antiguos.",
    "instructions": "Agreguemos una línea. Agregue el texto \"Todos los cheques en verde\" al final de su archivo `status.txt` dentro de su carpeta de inicio `/home/learner`, y luego ejecute `cat` en él para ver ambas líneas.",
    "commandHelp": [
      {
        "cmd": "echo \"All Checks Green\" >> status.txt",
        "desc": "Agregar texto a status.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_append",
        "text": "Usar eco con >> agregar redirección"
      },
      {
        "id": "has_first_line",
        "text": "La primera línea sigue siendo \"Sistema en línea\""
      },
      {
        "id": "has_second_line",
        "text": "La segunda línea tiene \"Todos los controles en verde\""
      },
      {
        "id": "used_cat",
        "text": "Verificar el resultado usando el comando \"cat\""
      }
    ],
    "hints": [
      "Usar agregar redirección para no sobrescribir el contenido del archivo existente.",
      "Utilice el operador '>>' para agregar texto y 'cat' para verificarlo.",
      "Intente ejecutar: echo \"All Checks Green\" >> status.txt y cat status.txt"
    ]
  },
  "12": {
    "title": "Copiar y mover archivos",
    "description": "Imagínese reorganizar su habitación: a veces desea hacer una fotocopia de un documento para guardarlo en otro cajón, y otras veces simplemente desea tomar una carpeta y deslizarla en un nuevo estante o cambiar su etiqueta. Hacemos esto en Linux con comandos simples:\n\n- `cp <source> <destination>` crea un duplicado idéntico de un archivo en una nueva ubicación.\n- `mv <source> <destination>` mueve un archivo a una nueva carpeta o cambia el nombre del archivo si lo mantiene en la misma carpeta (por ejemplo, `mv old.txt new.txt`).",
    "instructions": "Cambiemos el nombre de un archivo. Cambie el nombre de `status.txt` en su carpeta de inicio a `system.log` usando el comando `mv`.",
    "commandHelp": [
      {
        "cmd": "mv status.txt system.log",
        "desc": "Cambie el nombre de status.txt a system.log"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "Utilice el comando \"mv\" para cambiar el nombre"
      },
      {
        "id": "old_removed",
        "text": "El status.txt original se elimina/renombra"
      },
      {
        "id": "new_created",
        "text": "Existe un nuevo archivo system.log con el contenido correcto"
      }
    ],
    "hints": [
      "Piense en qué comando cambia el nombre o mueve un archivo.",
      "Utilice el comando 'mv' para cambiar el nombre de status.txt a system.log.",
      "Intente ejecutar: mv status.txt system.log"
    ]
  },
  "13": {
    "title": "Comodines y operaciones con múltiples archivos",
    "description": "Imagine que tiene una pila de carpetas etiquetadas \"log_monday\", \"log_tuesday\" y \"log_wednesday\" y desea abrirlas y leerlas todas a la vez sin escribir cada nombre. ¡Linux te permite usar **comodines** como atajos de búsqueda!\n\n- El símbolo `*` coincide con cualquier carácter de cualquier longitud. Por ejemplo, `cat log_*` lee todos los archivos que comienzan con \"log_\".\n- El símbolo `?` actúa como marcador de posición de un solo carácter. Por ejemplo, `log_?.txt` coincide con `log_1.txt` pero ignorará `log_12.txt`.",
    "instructions": "Fusionemos varios registros. Combine el contenido de todos los archivos que comienzan con `log_` en su directorio personal en un solo archivo llamado `combined.log` usando el comodín `*` y la redirección `>`.",
    "commandHelp": [
      {
        "cmd": "cat log_* > combined.log",
        "desc": "Combine todos los archivos coincidentes en combinado.log"
      }
    ],
    "objectives": [
      {
        "id": "used_wildcard",
        "text": "Utilice cat con patrón comodín (log_*)"
      },
      {
        "id": "combined_exists",
        "text": "Cree \"combined.log\" en el directorio de inicio"
      },
      {
        "id": "content_combined",
        "text": "Verifique que tenga registros de log_1, log_2 y log_3"
      }
    ],
    "hints": [
      "Piense en cómo usar comodines para hacer coincidir varios archivos que comienzan con log_.",
      "Utilice cat log_* para leer todos los archivos coincidentes y redirigir la salida a combinado.log.",
      "Intente ejecutar: cat log_* > combinado.log"
    ]
  },
  "14": {
    "title": "Eliminación de archivos y carpetas",
    "description": "Cuando limpia su escritorio físico, puede tirar los papeles viejos a una papelera de reciclaje donde podrá recuperarlos si cometió un error. En Linux, no hay red de seguridad: cuando eliminas algo del terminal, ¡desaparece para siempre!\n\n- El comando `rm` elimina archivos.\n- Debido a que las carpetas pueden contener otros archivos, `rm` no eliminará una carpeta de forma predeterminada. Debe agregar el indicador `-r` (recursivo) para indicarle a Linux que se sumerja y elimine la carpeta junto con todo lo que contiene.\n\n**Por qué esto es importante**: Si ejecuta `rm downloads` sin `-r` cuando `downloads` es una carpeta, obtendrá: `rm: cannot remove 'downloads': Is a directory`. El indicador `-r` le dice a Linux que elimine recursivamente la carpeta y todo lo que contiene.",
    "instructions": "Limpiemos nuestro directorio de inicio. Elimine permanentemente la carpeta `downloads` y todo su contenido ejecutando `rm -r downloads`.",
    "commandHelp": [
      {
        "cmd": "rm -r downloads",
        "desc": "Eliminar carpeta de forma recursiva"
      }
    ],
    "objectives": [
      {
        "id": "used_rm",
        "text": "Utilice el comando \"rm\" con el indicador -r"
      },
      {
        "id": "downloads_removed",
        "text": "El directorio /home/learner/downloads se elimina"
      }
    ],
    "hints": [
      "Piense en qué comando elimina un archivo o directorio de forma recursiva.",
      "Utilice el comando 'rm' con la opción recursiva (-r).",
      "Intente ejecutar: rm -r descargas"
    ]
  },
  "15": {
    "title": "Introducción a Tuberías y WC",
    "description": "Imagine una línea de montaje donde un trabajador envuelve un producto e inmediatamente se lo entrega al siguiente trabajador para que lo empaque en una caja, sin necesidad de almacenamiento intermedio. En Linux, conectamos comandos exactamente así usando una **tubería** (`|`).\n\n- Una tubería (`|`) dirige la salida de un comando directamente a la entrada del siguiente comando. Por ejemplo, `ls | wc -l` enumera archivos e inmediatamente pasa esa lista a `wc -l` (recuento de palabras - líneas), que los cuenta sobre la marcha sin necesidad de archivos temporales.\n\n**Por qué esto es importante**: si ejecuta `wc` sin `-l`, genera tres números separados: líneas, palabras y bytes (por ejemplo, `  5  10  85`). Esto dificulta su uso en canalizaciones o scripts que necesitan un recuento limpio de un solo número. El indicador `-l` limita la salida solo al recuento de líneas.",
    "instructions": "Conectemos algunos comandos. Cuente los archivos en `/home/learner` usando una tubería (`ls | wc -l`) y escriba el recuento final en un archivo llamado `file_count.txt` usando la redirección `>`.",
    "commandHelp": [
      {
        "cmd": "ls | wc -l",
        "desc": "Cuente archivos y carpetas en el directorio actual"
      },
      {
        "cmd": "ls | wc -l > file_count.txt",
        "desc": "Escriba el recuento de archivos en file_count.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_pipe",
        "text": "Utilice la tubería (|) para conectar ls con wc"
      },
      {
        "id": "file_count_exists",
        "text": "Cree el archivo \"file_count.txt\" en el directorio de inicio"
      },
      {
        "id": "count_is_correct",
        "text": "Verifique que el archivo contenga el recuento numérico correcto de archivos"
      }
    ],
    "hints": [
      "Piense en cómo redirigir la salida de un comando a otro usando una tubería.",
      "Canalice la salida de ls a wc -l, luego redirija el resultado a file_count.txt.",
      "Intente ejecutar: ls | wc -l > recuento_archivo.txt"
    ]
  },
  "16": {
    "title": "Clasificación y búsqueda de cartas únicas",
    "description": "Imagínese clasificar una baraja de cartas donde hay duplicados esparcidos por todas partes. Para detectar y eliminar duplicados fácilmente, primero debes agrupar las tarjetas idénticas. En Linux, el comando `uniq` filtra las líneas repetidas, pero tiene un inconveniente: **¡solo detecta duplicados que están uno al lado del otro**!\n\n- Para eliminar todos los duplicados de una lista desordenada, primero debes ordenar las líneas usando `sort` y luego pasar el resultado a `uniq`. Por ejemplo, `sort raw.txt | uniq` organiza y limpia la lista de una sola vez.",
    "instructions": "Limpiemos una lista de invitados desordenada. El archivo `names.txt` contiene nombres duplicados. Conecte `sort` y `uniq` con una tubería para encontrar todos los nombres únicos alfabéticamente y guárdelos en `unique_names.txt`.",
    "commandHelp": [
      {
        "cmd": "sort names.txt",
        "desc": "Ordenar líneas de nombres.txt alfabéticamente"
      },
      {
        "cmd": "sort names.txt | uniq > unique_names.txt",
        "desc": "Ordenar y filtrar duplicados en un archivo"
      }
    ],
    "objectives": [
      {
        "id": "used_sort",
        "text": "Usar el comando \"sort\" en nombres.txt"
      },
      {
        "id": "used_uniq",
        "text": "Canalizar la salida ordenada al comando \"uniq\""
      },
      {
        "id": "unique_names_exists",
        "text": "Crear archivo \"unique_names.txt\""
      },
      {
        "id": "sorted_and_unique",
        "text": "Verificar que el contenido tenga nombres ordenados únicos"
      }
    ],
    "hints": [
      "Primero debe ordenar los nombres alfabéticamente y luego filtrar los duplicados.",
      "Canalice la salida de sort nombres.txt a uniq y rediríjala a nombres_únicos.txt.",
      "Intente ejecutar: ordenar nombres.txt | uniq > nombres_únicos.txt"
    ]
  },
  "17": {
    "title": "Filtrado con grep",
    "description": "Imagínese revisar un enorme libro de registro de mil páginas para encontrar cada vez que ocurrió un error del sistema. ¡Hacer esto manualmente llevaría horas! En Linux, utilizamos `grep` como nuestra lupa digital para buscar palabras o patrones específicos al instante.\n\n- El comando `grep` filtra archivos o texto canalizado, imprimiendo solo las líneas que coinciden con su palabra de búsqueda. Por ejemplo, ejecutar `grep \"ERROR\" logs.txt` escanea el archivo y extrae solo las líneas que contienen \"ERROR\".",
    "instructions": "Filtremos nuestros registros. Busque `logs.txt` todas las líneas que contengan `[ERROR]` y guárdelas en un nuevo archivo llamado `errors.log`.",
    "commandHelp": [
      {
        "cmd": "grep \"[ERROR]\" logs.txt",
        "desc": "Busque en logs.txt líneas que contengan [ERROR]"
      },
      {
        "cmd": "grep \"[ERROR]\" logs.txt > errors.log",
        "desc": "Guarde los errores coincidentes en errores.log"
      }
    ],
    "objectives": [
      {
        "id": "used_grep",
        "text": "Utilice el comando \"grep\" para buscar logs.txt"
      },
      {
        "id": "errors_log_exists",
        "text": "Cree el archivo \"errors.log\" en el directorio de inicio"
      },
      {
        "id": "only_errors",
        "text": "Verifique que errores.log contenga solo entradas [ERROR]"
      }
    ],
    "hints": [
      "Piense en qué comando filtra las líneas que coinciden con un patrón específico.",
      "Utilice grep para buscar en logs.txt '[ERROR]' y redirigir la salida a errores.log.",
      "Intente ejecutar: grep \"[ERROR]\" logs.txt > errores.log"
    ]
  },
  "18": {
    "title": "Cambio de permisos de archivos",
    "description": "Imagine administrar una empresa donde solo los gerentes pueden firmar cheques, los empleados pueden leer horarios y los visitantes solo pueden mirar el letrero de la tienda. En Linux, controlamos quién puede leer, escribir o ejecutar archivos usando un sistema de seguridad de números (llamado representación octal):\n\n- `7` = Acceso completo: Lectura + Escritura + Ejecutar (`rwx`)\n- `6` = Modificar acceso: Lectura + Escritura (`rw-`)\n- `5` = Acceso de lectura y ejecución: Leer + Ejecutar (`r-x`)\n- `4` = Acceso de sólo lectura: Lectura (`r--`)\n\nAplicamos estas configuraciones con `chmod <octal> <file>`. Por ejemplo, `chmod 755 script.sh` le permite ejecutar el script, mientras que otros solo pueden leerlo y ejecutarlo. Tenemos un script llamado `deploy.sh` que actualmente está bloqueado. ¡Hagámoslo ejecutable!",
    "instructions": "Cambiemos los permisos. El archivo `deploy.sh` actualmente tiene permisos restringidos (644). Ejecute `chmod 755 deploy.sh` para que sea ejecutable por el propietario y legible/ejecutable por todos los demás.",
    "commandHelp": [
      {
        "cmd": "chmod 755 deploy.sh",
        "desc": "Establecer permisos ejecutables"
      },
      {
        "cmd": "ls -l deploy.sh",
        "desc": "Verificar los permisos de archivos actuales"
      }
    ],
    "objectives": [
      {
        "id": "used_chmod",
        "text": "Ejecutar el comando \"chmod\" en implementar.sh"
      },
      {
        "id": "is_executable",
        "text": "Establecer permisos de implementar.sh en 755"
      }
    ],
    "hints": [
      "Piense en qué comando cambia los permisos de archivos.",
      "Utilice el comando 'chmod' con el código de permiso 755 en implementar.sh.",
      "Intente ejecutar: chmod 755 implementar.sh"
    ]
  },
  "19": {
    "title": "Archivos ocultos y configuraciones",
    "description": "Piense en un cajón secreto debajo de su escritorio donde guarda la configuración del sistema para que no abarrote su espacio de trabajo principal. En Linux, creamos archivos ocultos simplemente comenzando sus nombres con un punto (`.`).\n\n- Estos archivos de puntos (como `.bashrc` o `.config`) almacenan las preferencias del usuario y las configuraciones detrás de escena.\n- Un comando `ls` estándar no los mostrará. Para echar un vistazo a estos archivos ocultos, debe agregar el indicador `-a` (todos), ejecutando `ls -a`.\n\n**Por qué esto es importante**: Si ejecuta `ls` sin `-a`, los archivos ocultos (cuyos nombres comienzan con `.`) se omiten por completo del resultado. No verá archivos importantes como `.config_names` y podría pensar que faltan. La bandera `-a` le dice a `ls` que enumere todos los archivos, incluidos los ocultos.",
    "instructions": "¡Ocultemos un archivo! Cambie el nombre de `unique_names.txt` en su carpeta de inicio a un archivo oculto llamado `.config_names` usando `mv`, luego revélelo ejecutando `ls -a`.",
    "commandHelp": [
      {
        "cmd": "ls -a",
        "desc": "Enumerar todos los archivos, incluidos los archivos ocultos"
      },
      {
        "cmd": "mv file .file",
        "desc": "Ocultar un archivo poniendo como prefijo un punto a su nombre"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "Usar \"mv\" para cambiar el nombre del archivo"
      },
      {
        "id": "hidden_file_exists",
        "text": "Crear el archivo oculto \".config_names\" en inicio"
      },
      {
        "id": "old_file_removed",
        "text": "Verificar que se haya eliminado el archivo Unique_names.txt original"
      },
      {
        "id": "used_ls_a",
        "text": "Usar \"ls -a\" para verificar que el archivo oculto esté presente"
      }
    ],
    "hints": [
      "En Linux, los archivos ocultos tienen el prefijo de un punto (.) y se muestra usando una bandera ls especial.",
      "Utilice mv Unique_names.txt .config_names y ejecute ls -a para revelarlo.",
      "Intente ejecutar: mv Unique_names.txt .config_names seguido de ls -a"
    ]
  },
  "20": {
    "title": "Cambio de propiedad del archivo",
    "description": "Imagínese comprar una casa y tener que registrar oficialmente la escritura con el nombre de un nuevo propietario. En Linux, cada archivo y carpeta tiene un propietario oficial y un grupo. Si necesita entregar la propiedad de un archivo a otra persona (como el administrador del sistema), utilice el comando `chown` (cambiar propietario).\n\n- Dado que cambiar quién es el propietario de un archivo es una acción de seguridad delicada, debe anteponerle el prefijo `sudo` para ejecutarlo con privilegios administrativos. Por ejemplo, `sudo chown root reports.csv` asigna el archivo al usuario \"root\".",
    "instructions": "Transfiramos la propiedad. Cambie el propietario de `/home/learner/reports.csv` al administrador `root` ejecutando `sudo chown root reports.csv`.",
    "commandHelp": [
      {
        "cmd": "sudo chown root reports.csv",
        "desc": "Cambie el propietario de informes.csv a raíz"
      }
    ],
    "objectives": [
      {
        "id": "used_chown",
        "text": "Ejecute el comando \"chown\" con sudo"
      },
      {
        "id": "owner_changed",
        "text": "Establezca el propietario de informes.csv a raíz"
      }
    ],
    "hints": [
      "Piense qué comando cambia la propiedad del archivo y recuerde que requiere privilegios de administrador.",
      "Utilice el comando 'chown' con el prefijo 'sudo' para cambiar el propietario a root.",
      "Intente ejecutar: sudo chown root reports.csv"
    ]
  },
  "21": {
    "title": "Privilegios de superusuario (sudo)",
    "description": "Imagine trabajar en su computadora con una cuenta estándar para evitar la eliminación accidental de archivos críticos del sistema operativo. Cuando necesita instalar software o modificar la configuración del sistema, su computadora solicita autorización de administrador. En Linux, utilizamos `sudo` (abreviatura de \"superusuario\") como nuestra tarjeta de acceso administrativa.\n\n- El usuario `root` es la cuenta de administrador maestro con control total sobre el sistema.\n- Los usuarios estándar no pueden leer archivos confidenciales (como la base de datos de contraseñas `/etc/shadow`). Al escribir `sudo` antes de un comando, lo ejecuta con poderes de administrador temporal para evitar estos bloqueos.",
    "instructions": "Probemos los poderes de superusuario. Ejecute `cat /etc/shadow` para ver el error de permiso. Luego, evítelo ejecutando el comando con privilegios de administrador: `sudo cat /etc/shadow`.",
    "commandHelp": [
      {
        "cmd": "sudo command",
        "desc": "Ejecute un comando con privilegios de administrador/superusuario"
      },
      {
        "cmd": "cat /etc/shadow",
        "desc": "Lea la base de datos de hashes de contraseñas (restringido)"
      }
    ],
    "objectives": [
      {
        "id": "tried_without_sudo",
        "text": "Pruebe \"cat /etc/shadow\" y observe el error de permiso"
      },
      {
        "id": "ran_sudo_cat",
        "text": "Ejecute \"sudo cat /etc/shadow\" exitosamente"
      }
    ],
    "hints": [
      "Necesita privilegios de administrador para leer archivos restringidos del sistema.",
      "Primero ejecute cat /etc/shadow sin sudo para ver el error, luego antepóngalo con sudo.",
      "Intente ejecutar: cat /etc/shadow y luego: sudo cat /etc/shadow"
    ]
  },
  "22": {
    "title": "Administración de paquetes (apt)",
    "description": "Piense en instalar aplicaciones en su teléfono inteligente usando App Store o Google Play Store. Es seguro, curado y automatizado. En Linux, utilizamos una tienda de aplicaciones de línea de comandos llamada administrador de paquetes para buscar e instalar software de forma segura.\n\n- En los sistemas Ubuntu/Debian, el administrador de paquetes estándar es `apt` (Herramienta de empaquetado avanzada).\n- La instalación de software cambia las carpetas de todo el sistema, por lo que siempre debe autorizarlo usando `sudo`. Por ejemplo, `sudo apt install tree` descarga e instala el \"árbol\" del visualizador de directorios.",
    "instructions": "Instalemos algún software. Ejecute `sudo apt install tree` para instalar el programa `tree`. Una vez que finalice, ejecute `tree` para visualizar su carpeta de inicio en un formato ordenado similar a un árbol.",
    "commandHelp": [
      {
        "cmd": "sudo apt install tree",
        "desc": "Instale el paquete del árbol"
      },
      {
        "cmd": "tree",
        "desc": "Ejecute el árbol para visualizar directorios"
      }
    ],
    "objectives": [
      {
        "id": "installed_tree",
        "text": "Instale el paquete \"árbol\" usando apt install"
      },
      {
        "id": "ran_tree",
        "text": "Ejecute el comando \"árbol\" para visualizar directorios"
      }
    ],
    "hints": [
      "Piense en cómo instalar paquetes en Ubuntu usando el administrador de paquetes con privilegios de administrador.",
      "Ejecute sudo apt install tree y luego visualice los directorios ejecutando el comando tree.",
      "Intente ejecutar: sudo apt install tree y luego tree"
    ]
  },
  "23": {
    "title": "Comprobación del espacio en disco (df)",
    "description": "Imagínese intentar descargar un videojuego enorme y obtener un error de \"almacenamiento lleno\", pero no está seguro de qué unidad de disco es el cuello de botella. En Linux, verificamos la capacidad de almacenamiento de nuestro sistema usando el comando `df` (disco libre).\n\n- El comando `df` muestra el espacio total, utilizado y disponible en todas las unidades conectadas.\n- Al ejecutar `df -h` (agregando el indicador `-h` para \"legible por humanos\"), verá el almacenamiento en gigabytes (G) y megabytes (M) amigables en lugar de confusos recuentos de bloques, lo que facilita detectar qué unidad (como `/` o `/home`) está llena.\n\n**Por qué esto es importante**: si ejecuta `df` sin `-h`, los tamaños se muestran en números sin formato de bloques de 1K (por ejemplo, `49258284` en lugar de `47G`), lo cual es extremadamente difícil de leer y calcular para un humano. La bandera `-h` formatea estos tamaños en gigabytes (G) y megabytes (M) aptos para humanos.",
    "instructions": "Revisemos el almacenamiento de nuestro sistema. Ejecute `df -h` para ver cuánto espacio queda en sus particiones en un formato legible por humanos.",
    "commandHelp": [
      {
        "cmd": "df -h",
        "desc": "Muestra el espacio libre en disco en los sistemas de archivos en formato legible por humanos"
      }
    ],
    "objectives": [
      {
        "id": "ran_df_h",
        "text": "Ejecute el comando \"df -h\""
      }
    ],
    "hints": [
      "Piense en qué comando muestra el espacio libre en disco.",
      "Utilice el comando 'df' con la opción legible por humanos.",
      "Intente ejecutar: df -h"
    ]
  },
  "24": {
    "title": "Encontrar tamaños de directorio (du)",
    "description": "Una vez que sepa *qué* unidad está llena, ¿cómo puede encontrar la carpeta específica que está acaparando todo su espacio? ¿Es tu carpeta de descargas o tal vez algún caché oculto? Resolvemos este misterio usando el comando `du` (uso del disco).\n\n- `du <directory>` enumera el tamaño de una carpeta y cada subcarpeta dentro de ella.\n- `du -sh <directory>` (donde `-s` significa \"resumen\" y `-h` significa \"legible por humanos\") calcula e imprime un tamaño total único y limpio para esa carpeta específica.\n\n**Por qué esto es importante**: si ejecuta `du` sin `-s`, arrojará una enorme pared de texto que enumera cada subdirectorio y archivo individual de forma recursiva, en lugar de proporcionar un único resumen. La bandera `-s` resume el tamaño total de la carpeta y `-h` la hace legible para humanos.",
    "instructions": "Rastreemos a los acaparadores de almacenamiento. Calcule el tamaño total del directorio de inicio del alumno ejecutando `du -sh /home/learner`.",
    "commandHelp": [
      {
        "cmd": "du -sh /home/learner",
        "desc": "Muestra el tamaño total del directorio de inicio del alumno"
      }
    ],
    "objectives": [
      {
        "id": "ran_du",
        "text": "Ejecute \"du\" con las opciones -s y -h"
      }
    ],
    "hints": [
      "Piense en qué comando verifica el uso del disco para las carpetas.",
      "Utilice el comando 'du' con opciones de resumen (-s) y legibles por humanos (-h).",
      "Intente ejecutar: du -sh /home/learner"
    ]
  },
  "25": {
    "title": "Comprobación del uso de la memoria (gratis)",
    "description": "Imagine que su computadora portátil comienza a retrasarse, las páginas web se congelan y el cambio de aplicaciones se siente terriblemente lento. Esto generalmente significa que su computadora se está quedando sin memoria activa (RAM). En Linux, podemos comprobar cuánto espacio para respirar tiene nuestro sistema usando el comando `free`.\n\n- El comando `free` muestra la memoria física (RAM) y el espacio de intercambio total, utilizado y disponible.\n- Agregar el indicador `-h` (ejecutando `free -h`) formatea los tamaños de memoria en gigabytes (GB) y megabytes (MB) fáciles de leer para que pueda saber si un programa está consumiendo todos sus recursos.\n\n**Por qué esto es importante**: si ejecuta `free` sin `-h`, el uso de memoria se imprime en kilobytes sin procesar (por ejemplo, `16323456` en lugar de `16G`), lo cual es difícil de interpretar rápidamente. La bandera `-h` escala automáticamente los números a gigabytes (G) o megabytes (M) para facilitar la lectura.",
    "instructions": "Comprobemos la memoria del sistema. Verifique la RAM disponible en formato legible para humanos ejecutando `free -h`.",
    "commandHelp": [
      {
        "cmd": "free -h",
        "desc": "Muestra el uso de RAM en formato legible por humanos"
      }
    ],
    "objectives": [
      {
        "id": "ran_free",
        "text": "Ejecute \"gratis\" con la opción -h o -m"
      }
    ],
    "hints": [
      "Piense en qué comando muestra las estadísticas de la memoria.",
      "Utilice el comando 'gratuito' con una opción legible por humanos.",
      "Intente ejecutar: free -h"
    ]
  },
  "26": {
    "title": "Tiempo de actividad del sistema y detalles del kernel",
    "description": "Imagínese solucionar problemas de un servidor que comenzó a comportarse mal y necesita saber si se reinició recientemente, o verificar exactamente qué versión del sistema operativo se está ejecutando. Podemos consultar estos detalles del sistema en segundos:\n\n- El comando `uptime` le indica exactamente cuánto tiempo ha estado funcionando su máquina desde su último arranque, junto con qué tan ocupada ha estado (carga del sistema).\n- El comando `uname -a` (nombre de Unix) imprime un informe completo del kernel de su sistema, el nombre de la plataforma y la arquitectura de la máquina.\n\n**Por qué esto es importante**: si ejecuta `uname` sin `-a`, solo genera el nombre básico del sistema operativo (por ejemplo, `Linux`). Omite detalles críticos como la versión del kernel, el nombre de la plataforma y la arquitectura del procesador. El indicador `-a` imprime todos los detalles disponibles del sistema en un solo informe.",
    "instructions": "Inspeccionemos las estadísticas del sistema. Ejecute `uptime` para verificar cuánto tiempo ha estado funcionando el sistema y luego ejecute `uname -a` para imprimir los detalles completos del kernel y la máquina.",
    "commandHelp": [
      {
        "cmd": "uptime",
        "desc": "Muestra cuánto tiempo ha estado funcionando el sistema"
      },
      {
        "cmd": "uname -a",
        "desc": "Imprime toda la información del sistema y del kernel"
      }
    ],
    "objectives": [
      {
        "id": "ran_uptime",
        "text": "Ejecute el comando \"uptime\""
      },
      {
        "id": "ran_uname",
        "text": "Ejecute el comando \"uname -a\""
      }
    ],
    "hints": [
      "Necesita ejecutar dos comandos: uno para el tiempo de actividad del sistema y otro para la información del kernel.",
      "Utilice el comando 'uptime' y 'uname' con el indicador -a.",
      "Intente ejecutar: uptime y luego: uname -a"
    ]
  },
  "27": {
    "title": "Listado de procesos en ejecución (ps)",
    "description": "Piense en su sistema operativo como una oficina ocupada donde a cada empleado (o programa en ejecución) se le asigna una etiqueta de nombre única llamada ID de proceso (PID). En Linux, llamamos a estos programas activos **procesos** y los enumeramos usando el comando `ps`.\n\n- La ejecución de `ps` por sí sola solo muestra los programas que se ejecutan dentro de la ventana de terminal actual.\n- La ejecución de `ps aux` actúa como un registro de oficina principal, enumerando cada programa activo que se ejecuta en todo el sistema, quién lo inició y cuánta CPU y memoria está usando.\n\n**Por qué esto es importante**: Si ejecuta `ps` sin `aux`, solo verá los procesos ejecutándose en su ventana de terminal actual (generalmente solo `bash` y `ps`). No verá servicios en segundo plano, procesos del sistema ni programas ejecutados por otros usuarios. Las opciones `aux` revelan todos los procesos en ejecución en todo el sistema.",
    "instructions": "Revisemos el registro. Ejecute `ps aux` para enumerar todos los procesos en ejecución en la computadora portátil y observe columnas como PID, %CPU y %MEM.",
    "commandHelp": [
      {
        "cmd": "ps aux",
        "desc": "Enumere todos los procesos en ejecución en el sistema"
      }
    ],
    "objectives": [
      {
        "id": "ran_ps_aux",
        "text": "Ejecute el comando \"ps aux\""
      }
    ],
    "hints": [
      "Piense en qué comando enumera los procesos y cómo enumerar todos los procesos en el sistema.",
      "Utilice el comando 'ps' con las opciones auxiliares.",
      "Intente ejecutar: ps aux"
    ]
  },
  "28": {
    "title": "Monitor de proceso interactivo (arriba)",
    "description": "Imagínese mirar una fotografía estática de una carretera en lugar de mirar una cámara de tráfico en vivo. Mientras que `ps` le brinda una instantánea rápida de lo que se está ejecutando en este momento, `top` le permite ver el rendimiento de su sistema en vivo.\n\n- El comando `top` inicia un panel interactivo en tiempo real que se actualiza cada pocos segundos. Muestra el uso de la CPU, los promedios de carga y clasifica dinámicamente los procesos con mayor uso de recursos que se ejecutan en este momento exacto.",
    "instructions": "Veamos la transmisión en vivo. Inicie el monitor de proceso interactivo ejecutando el comando `top`.",
    "commandHelp": [
      {
        "cmd": "top",
        "desc": "Iniciar el monitor de procesos interactivo"
      }
    ],
    "objectives": [
      {
        "id": "ran_top",
        "text": "Ejecutar el comando \"superior\""
      }
    ],
    "hints": [
      "Piense en qué comando inicia el monitor de procesos interactivo.",
      "Utilice el comando 'top' o 'htop'.",
      "Intente ejecutar: arriba"
    ]
  },
  "29": {
    "title": "Detener procesos no autorizados (eliminar)",
    "description": "Imagina que una aplicación de tu teléfono se congela, bloquea completamente la pantalla y necesitas cerrarla a la fuerza para que todo vuelva a funcionar sin problemas. En Linux, detenemos los programas que se comportan mal o se congelan usando el comando `kill` seguido del ID de proceso (PID) del programa.\n\n- Al ejecutar `kill 1234` se envía una solicitud cortés pidiendo al programa que guarde su trabajo y lo cierre.\n- Si se congela e ignora la solicitud cortés, `kill -9 1234` obliga al sistema operativo a apagarlo instantáneamente. Tenemos un proceso fuera de control con PID `9999` acaparando toda nuestra CPU en este momento. ¡Apaguémoslo!",
    "instructions": "Detengamos el proceso deshonesto. Forzar el cierre del proceso con PID `9999` ejecutando `kill 9999`.",
    "commandHelp": [
      {
        "cmd": "kill 9999",
        "desc": "Terminar el proceso con PID 9999"
      }
    ],
    "objectives": [
      {
        "id": "process_killed",
        "text": "Detener el proceso no autorizado con PID 9999"
      }
    ],
    "hints": [
      "Piense en qué comando termina los procesos por su ID.",
      "Utilice el comando 'kill' seguido del ID de proceso 9999.",
      "Intente ejecutar: kill 9999"
    ]
  },
  "30": {
    "title": "Ejecutando trabajos en segundo plano",
    "description": "Imagínese intentar copiar una carpeta enorme a una unidad USB, pero mientras se copia, desea seguir trabajando y escribiendo otros comandos en la misma ventana. En Linux, podemos ejecutar tareas que consumen mucho tiempo en \"segundo plano\" para que no bloqueen nuestra línea de comandos.\n\n- Agregar un signo `&` al final de un comando (como `sleep 100 &`) le indica al terminal que lo ejecute en segundo plano y le devuelva el mensaje inmediatamente.\n- El comando `jobs` muestra lo que se está ejecutando actualmente en segundo plano.\n- El comando `fg` (primer plano) devuelve una tarea en segundo plano al centro del escenario.",
    "instructions": "Hagamos múltiples tareas. Ejecute `sleep 100 &` para iniciar una tarea en segundo plano, verifíquela con `jobs` y luego vuelva a ponerla en primer plano ejecutando `fg`.",
    "commandHelp": [
      {
        "cmd": "sleep 100 &",
        "desc": "Ejecutar suspensión en segundo plano"
      },
      {
        "cmd": "jobs",
        "desc": "Listar trabajos en segundo plano"
      },
      {
        "cmd": "fg",
        "desc": "Traer el trabajo en segundo plano al primer plano"
      }
    ],
    "objectives": [
      {
        "id": "ran_bg_job",
        "text": "Ejecutar un comando de suspensión en segundo plano (&)"
      },
      {
        "id": "ran_jobs",
        "text": "Ejecutar el comando \"jobs\""
      },
      {
        "id": "ran_fg",
        "text": "Devolver el trabajo al primer plano con \"fg\""
      }
    ],
    "hints": [
      "Para ejecutar un trabajo en segundo plano, agregue un signo (&) al comando.",
      "Ejecute sleep 100 en segundo plano, consulte con los trabajos y recupérelo con fg.",
      "Intente ejecutar: dormir 100 y seguido de trabajos y luego fg"
    ]
  },
  "31": {
    "title": "Prueba de conectividad (ping)",
    "description": "Imagínese intentar cargar una página web, pero su navegador gira sin cesar, dejándolo preguntándose si el Wi-Fi de su hogar está desconectado o si el sitio web se ha bloqueado. En Linux, probamos nuestra conexión de red básica usando el comando `ping`.\n\n- El comando `ping` envía pequeños paquetes de datos a un servidor (como `google.com`) y mide cuántos milisegundos se necesitan para recibir una respuesta.\n- En Linux, `ping` seguirá ejecutándose para siempre de forma predeterminada. Para detenerlo después de algunos intentos, usamos el indicador `-c` (recuento), ejecutando `ping -c 3 google.com`.\n\n**Por qué esto es importante**: si ejecuta `ping google.com` sin `-c`, continuará enviando paquetes e imprimiendo resultados infinitamente. Tendrá que interrumpirlo manualmente con `Ctrl+C` para ejecutar cualquier otro comando. El indicador `-c 3` detiene el comando automáticamente después de enviar exactamente 3 paquetes.",
    "instructions": "Comprobemos nuestra conectividad. Pruebe su conexión a `google.com` enviando exactamente 3 paquetes: `ping -c 3 google.com`.",
    "commandHelp": [
      {
        "cmd": "ping -c 3 google.com",
        "desc": "Envía 3 paquetes de eco a google.com"
      }
    ],
    "objectives": [
      {
        "id": "ran_ping_c3",
        "text": "Haz ping a google.com exactamente 3 veces usando el indicador -c"
      }
    ],
    "hints": [
      "Piensa en qué comando envía paquetes de eco ICMP para probar la conexión.",
      "Utilice ping con la opción de recuento establecida en 3 para google.com.",
      "Intente ejecutar: ping -c 3 google.com"
    ]
  },
  "32": {
    "title": "Interfaces de red e IP local",
    "description": "Imagine configurar una impresora de red o compartir archivos con la computadora de un amigo en el mismo Wi-Fi y necesitar saber la dirección IP local de su máquina. En Linux, inspeccionamos nuestro hardware de red y nuestras IP usando el comando `ip`.\n\n- Al ejecutar `ip addr` (o simplemente `ip a`) se imprime una lista de todos sus dispositivos de interfaz de red (como `eth0` para Ethernet por cable o `wlan0` para inalámbricos) junto con sus direcciones IP locales asignadas.",
    "instructions": "Inspeccionemos la configuración de nuestra red. Muestre todas las interfaces de red local y direcciones IP ejecutando `ip addr`.",
    "commandHelp": [
      {
        "cmd": "ip addr",
        "desc": "Mostrar detalles de la interfaz de red y direcciones IP"
      }
    ],
    "objectives": [
      {
        "id": "ran_ip_addr",
        "text": "Ejecute el comando \"ip addr\" o \"ip a\""
      }
    ],
    "hints": [
      "Piense en qué comando muestra las configuraciones de la interfaz de red.",
      "Utilice el comando 'ip' con la dirección o un argumento.",
      "Intente ejecutar: ip addr"
    ]
  },
  "33": {
    "title": "Descarga de archivos web (curl)",
    "description": "Imagine querer descargar un archivo o tomar el código de un script de configuración directamente desde un servidor web sin abrir un navegador y hacer clic en el botón \"Descargar\". En Linux, recuperamos datos web usando `curl` (abreviatura de \"URL del cliente\").\n\n- Al ejecutar `curl <url>` se descarga el contenido de la página y se imprime directamente en la pantalla.\n- Para guardar el contenido descargado como un archivo en lugar de mostrarlo, lo emparejamos con la redirección `>` o el indicador de salida `-o`.",
    "instructions": "Descarguemos un script. Obtenga el archivo en `http://api.bashquest.com/update.sh` y guárdelo localmente como `update.sh` ejecutando `curl http://api.bashquest.com/update.sh > update.sh`.",
    "commandHelp": [
      {
        "cmd": "curl http://api.bashquest.com/update.sh > update.sh",
        "desc": "Descargue el contenido de la página web y guárdelo en update.sh"
      }
    ],
    "objectives": [
      {
        "id": "used_curl",
        "text": "Utilice el comando \"curl\""
      },
      {
        "id": "download_saved",
        "text": "Guarde el script descargado como \"update.sh\" en la carpeta de inicio"
      }
    ],
    "hints": [
      "Piense en qué comando descarga archivos web y cómo redirigirlo a un archivo.",
      "Use curl para descargar el archivo y redirija '>' para guardarlo como update.sh.",
      "Intente ejecutar: curl http://api.bashquest.com/update.sh > update.sh"
    ]
  },
  "34": {
    "title": "Búsqueda de archivos por nombre (buscar)",
    "description": "Imagine perder un archivo de texto importante en algún lugar de su carpeta de usuario y tener que buscar en docenas de directorios anidados uno por uno. En Linux, evitamos la búsqueda manual utilizando la utilidad `find` como un motor de búsqueda ultrarrápido en todo el sistema.\n\n- El comando `find` busca en árboles de directorios según el nombre, el tamaño, el tipo o la fecha.\n- La sintaxis es `find <where> -name \"<pattern>\"`. Por ejemplo, `find . -name \"*.txt\"` busca en el directorio actual y en todas las subcarpetas archivos que terminen en `.txt`.\n\n**Por qué esto es importante**: Si ejecuta `find . \"*.log\"` sin `-name`, obtendrá el error: `find: paths must precede expression: '*.log'`. El indicador `-name` es necesario para especificar que el patrón posterior debe compararse con los nombres de archivo.",
    "instructions": "Rastreemos algunos archivos. Busque en el directorio actual y sus subcarpetas cualquier archivo con una extensión `.log` ejecutando `find . -name \"*.log\"`.",
    "commandHelp": [
      {
        "cmd": "find . -name \"*.log\"",
        "desc": "Encuentra todos los archivos que terminan en .log en la carpeta y subcarpetas actuales"
      }
    ],
    "objectives": [
      {
        "id": "ran_find",
        "text": "Ejecute el comando \"buscar\" con la opción -name"
      }
    ],
    "hints": [
      "Piense en qué comando busca archivos de forma recursiva por nombre que coincida con un patrón.",
      "Utilice buscar en el directorio actual (.) con el patrón de nombre '*.log'.",
      "Intente ejecutar: buscar . -nombre \"*.log\""
    ]
  },
  "35": {
    "title": "Comprobación del historial de comandos",
    "description": "Imagine que escribió un comando de diagnóstico de red largo y complejo hace diez minutos y ahora necesita ejecutarlo nuevamente, pero no recuerda las opciones o la sintaxis exactas. En lugar de rascarte la cabeza o escribirlo todo, ¡Linux lo recuerda por ti!\n\n- El comando `history` muestra una lista numerada de todos los comandos que has ejecutado recientemente.\n- Puede volver a ejecutar rápidamente cualquier elemento escribiendo un signo de exclamación seguido de su número de lista (como `!42` para volver a ejecutar el comando n.° 42).",
    "instructions": "Revisemos los archivos. Ejecute `history` para ver la lista de comandos que ha ejecutado en esta sesión.",
    "commandHelp": [
      {
        "cmd": "history",
        "desc": "Muestra una lista de comandos ejecutados recientemente"
      }
    ],
    "objectives": [
      {
        "id": "ran_history",
        "text": "Ejecuta el comando \"historial\""
      }
    ],
    "hints": [
      "Piensa en qué comando enumera los comandos ejecutados recientemente.",
      "Utilice el comando 'historial'.",
      "Intente ejecutar: historial"
    ]
  },
  "36": {
    "title": "Páginas del manual de consulta",
    "description": "Imagínese intentar utilizar un nuevo comando, pero no está seguro de qué indicadores admite o cómo se deben formatear sus entradas. En lugar de buscar en línea, Linux tiene un manual de usuario completo y oficial integrado directamente en la terminal.\n\n- El comando `man` (manual) seguido de cualquier nombre de utilidad (por ejemplo, `man ls`) abre una guía de referencia detallada.\n- Dentro de la guía, te desplazas con las teclas de flecha, buscas con \"/\" y presionas `q` para cerrar el manual y regresar al mensaje.",
    "instructions": "Consultemos los documentos. Abra la página del manual integrado para el comando `grep` ejecutando `man grep`.",
    "commandHelp": [
      {
        "cmd": "man grep",
        "desc": "Mostrar la página del manual para grep"
      }
    ],
    "objectives": [
      {
        "id": "ran_man_grep",
        "text": "Ejecutar el comando \"man grep\""
      }
    ],
    "hints": [
      "Piense en qué comando muestra el manual de referencia integrado del sistema.",
      "Utilice el comando 'man' seguido del nombre del comando que desea buscar.",
      "Intenta ejecutar: man grep"
    ]
  },
  "37": {
    "title": "Servicios de control (systemctl)",
    "description": "Imagine alojar un sitio web en su computadora, pero los visitantes reciben el error \"No se puede acceder al sitio\" porque el programa del servidor web en segundo plano no se está ejecutando. En Linux, los procesos en segundo plano que se inician automáticamente y se ejecutan en segundo plano (como bases de datos, firewalls o servidores web) se denominan **servicios** y los administramos usando `systemctl`.\n\n- El comando `systemctl status <service>` comprueba si un servicio está activo o detenido.\n- Dado que iniciar o detener un servicio afecta a todos los usuarios y a la seguridad del sistema, debe usar `sudo` para ejecutar comandos como `sudo systemctl start <service>` o `sudo systemctl stop <service>`.",
    "instructions": "Iniciemos un servidor web. El servicio del servidor web `apache2` está actualmente detenido. Inícielo ejecutando `sudo systemctl start apache2` y verifique que se esté ejecutando con `systemctl status apache2`.",
    "commandHelp": [
      {
        "cmd": "systemctl status apache2",
        "desc": "Verificar el estado del servicio web apache2"
      },
      {
        "cmd": "sudo systemctl start apache2",
        "desc": "Iniciar el servicio web apache2"
      }
    ],
    "objectives": [
      {
        "id": "started_service",
        "text": "Iniciar el servicio web \"apache2\""
      },
      {
        "id": "checked_status",
        "text": "Verificar el estado de \"apache2\""
      }
    ],
    "hints": [
      "Debe verificar el estado de apache2 e iniciarlo.",
      "Utilice systemctl status apache2 y recuerde que iniciar servicios requiere privilegios de administrador (sudo).",
      "Intente ejecutar: sudo systemctl start apache2 y luego systemctl status apache2"
    ]
  },
  "38": {
    "title": "Edición de archivos de configuración (nano)",
    "description": "Imagine conectarse mediante SSH a un servidor remoto en la nube donde no tiene un escritorio gráfico ni un cursor y necesita corregir rápidamente una línea en un archivo de configuración. En estos escenarios, debe utilizar un editor de texto de terminal como `nano`.\n\n- Al ejecutar `nano <filename>` se carga un editor de texto simple y liviano directamente dentro de la ventana de shell.\n- Los accesos directos siempre se muestran en la parte inferior de la pantalla: presione `Ctrl+O` para escribir (guardar) sus cambios y `Ctrl+X` para salir del editor.",
    "instructions": "Editemos un archivo de configuración. Abra `server.conf` en su directorio de inicio usando `nano server.conf`, agregue una línea que diga `port=8080` y luego guarde y salga del editor.",
    "commandHelp": [
      {
        "cmd": "nano server.conf",
        "desc": "Abra server.conf en el editor de texto Nano"
      }
    ],
    "objectives": [
      {
        "id": "opened_nano",
        "text": "Abra el archivo \"server.conf\" en Nano"
      },
      {
        "id": "port_configured",
        "text": "Agregue la línea de configuración \"puerto=8080\" y guarde"
      }
    ],
    "hints": [
      "Piense en qué editor de texto basado en terminal las instrucciones le piden que use.",
      "Ejecute nano server.conf, escriba 'puerto=8080' dentro, luego guarde con Ctrl+O y salga con Ctrl+X.",
      "Intente ejecutar: nano server.conf"
    ]
  },
  "39": {
    "title": "Escribiendo tu primer script Bash",
    "description": "Imagina tener una lista de 20 tareas que debes ejecutar todas las mañanas. Escribirlos manualmente es tedioso y deja lugar a errores tipográficos. En Linux, agrupamos comandos en un archivo llamado script de shell para poder ejecutarlos todos a la vez.\n\n- Cada script comienza con un \"shebang\" (`#!/bin/bash`) en la primera línea para indicarle al sistema qué intérprete de shell usar para ejecutar el archivo.\n- Después de guardar el script, lo hace ejecutable otorgándole permiso de ejecución a través de `chmod 755 script.sh` y luego ejecutándolo con `./script.sh`.",
    "instructions": "¡Automaticemos! Cree un archivo llamado `hello.sh` en su carpeta de inicio. Escriba `#!/bin/bash` en la primera línea y `echo \"Hello, BashQuest User!\"` en la segunda. Concédale permisos de ejecución con `chmod 755 hello.sh` y ejecútelo usando `./hello.sh`.",
    "commandHelp": [
      {
        "cmd": "touch hello.sh",
        "desc": "Crear archivo de script"
      },
      {
        "cmd": "chmod 755 hello.sh",
        "desc": "Otorgar permisos de ejecución"
      },
      {
        "cmd": "./hello.sh",
        "desc": "Ejecutar el script en el directorio actual"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Crear archivo de script \"hello.sh\""
      },
      {
        "id": "script_content",
        "text": "Agregar shebang y mensaje de saludo dentro del script"
      },
      {
        "id": "script_executable",
        "text": "Hacer script ejecutable (permisos dígitos impares)"
      },
      {
        "id": "script_executed",
        "text": "Ejecutar el script usando \"./hello.sh\""
      }
    ],
    "hints": [
      "Crear el archivo, agregar shebang y mensaje de saludo, hacerlo ejecutable y ejecutar eso.",
      "Use touch hello.sh, edítelo para que contenga #!/bin/bash y el mensaje de saludo, luego chmod 755 hello.sh y ejecute ./hello.sh.",
      "Intenta ejecutar: toca hello.sh, escribe el contenido, chmod 755 hello.sh y ejecuta con ./hello.sh"
    ]
  },
  "40": {
    "title": "Variables y argumentos ($1)",
    "description": "Imagine crear un mensaje de bienvenida personalizado para un sitio web. ¡No querrás escribir un guión separado para el nombre de cada cliente! En su lugar, escribe un script que toma un nombre como entrada cuando lo ejecuta.\n\n- En los scripts bash, variables como `$1`, `$2`, etc. retienen los \"argumentos\" o entradas que pasa en la línea de comando.\n- Por ejemplo, ejecutar `./greet.sh Alice` significa que `$1` dentro del script contendrá automáticamente el texto \"Alice\". De manera similar, `$#` realiza un seguimiento de cuántas entradas proporcionó el usuario.",
    "instructions": "Construyamos un script dinámico. Cree `greet.sh` en su directorio personal con el shebang y la línea `echo \"Hello, $1!\"`. Hágalo ejecutable y ejecute `./greet.sh Alice` para probarlo.",
    "commandHelp": [
      {
        "cmd": "./greet.sh Alice",
        "desc": "Ejecutar script con el argumento \"Alice\""
      }
    ],
    "objectives": [
      {
        "id": "greet_exists",
        "text": "Crear archivo de script \"greet.sh\""
      },
      {
        "id": "greet_content",
        "text": "Usar $1 dentro de greet.sh"
      },
      {
        "id": "greet_executable",
        "text": "Hacer ejecutable greet.sh"
      },
      {
        "id": "greet_executed",
        "text": "Ejecutar el script con el argumento \"Alice\""
      }
    ],
    "hints": [
      "Crear un script llamado greet.sh, usar $1 para saludar el primer argumento, hacerlo ejecutable y ejecutarlo con 'Alice'.",
      "Utilice echo '¡Hola, $1!' dentro del script, chmod 755 greet.sh, luego ejecute ./greet.sh Alice.",
      "Intente ejecutar: toque greet.sh, agregue shebang y haga eco de '¡Hola, $1!', chmod 755 greet.sh y ./greet.sh Alice"
    ]
  },
  "41": {
    "title": "Lógica condicional (if/else)",
    "description": "Imagine crear un script que procese un informe CSV, pero falla si el archivo del informe no existe realmente en el disco. Para evitar errores, escribimos scripts que toman decisiones usando lógica condicional `if/else`.\n\n- Comprobamos condiciones entre paréntesis: `if [ -f \"$1\" ]; then ... fi`.\n- El indicador `-f` comprueba si una ruta apunta a un archivo, mientras que `-d` comprueba si es un directorio. El script bifurca sus acciones dependiendo de si la condición se evalúa como verdadera o falsa.",
    "instructions": "Agreguemos lógica de toma de decisiones. Cree `check_file.sh` en su directorio de inicio que verifique si el nombre de archivo pasado como `$1` existe (usando `if [ -f \"$1\" ]; then echo \"Exists\" else echo \"Missing\" fi`). Hágalo ejecutable y pruébelo en `names.txt`.",
    "commandHelp": [
      {
        "cmd": "if [ -f file ]; then ...",
        "desc": "Sintaxis para comprobaciones de existencia de archivos"
      }
    ],
    "objectives": [
      {
        "id": "check_exists",
        "text": "Crear script \"check_file.sh\""
      },
      {
        "id": "check_logic",
        "text": "Implementar comprobaciones -f dentro del script"
      },
      {
        "id": "check_executable",
        "text": "Hacer script ejecutable"
      },
      {
        "id": "check_executed",
        "text": "Ejecutar el script con \"names.txt\""
      }
    ],
    "hints": [
      "Crear check_file.sh, implementar una condición para probar si el argumento del nombre de archivo existe, hacerlo ejecutable y ejecutarlo.",
      "Utilice 'if [ -f \"$1\" ]; luego haga eco de \"Existe\" o haga eco de \"Falta\" dentro de check_file.sh, hágalo ejecutable y ejecútelo con nombres.txt.",
      "Intente ejecutar: toque check_file.sh, escriba la lógica de verificación del archivo, chmod 755 y ejecute ./check_file.sh nombres.txt"
    ]
  },
  "42": {
    "title": "Automatización con bucles",
    "description": "Imagine que tiene una carpeta de 100 archivos de registro y necesita hacer una copia de seguridad de cada uno de ellos. Copiarlos individualmente sería agotador. En Linux, usamos bucles `for` para repetir la misma acción en una lista completa de elementos automáticamente.\n\n- Un bucle `for` (como `for file in *.txt; do ... done`) itera sobre cada elemento que coincide con un patrón, procesándolos uno tras otro en una fracción de segundo.",
    "instructions": "Automatizamos las copias de seguridad. Cree un script llamado `backup_logs.sh`. Haga que cree un directorio llamado `backup` (usando `mkdir -p backup`), luego use un bucle `for` para copiar todos los archivos `.log` en la carpeta actual en `backup`. Hazlo ejecutable y ejecútalo.",
    "commandHelp": [
      {
        "cmd": "for x in pattern; do ...",
        "desc": "Sintaxis de automatización de bucles For"
      }
    ],
    "objectives": [
      {
        "id": "backup_script_exists",
        "text": "Crear script \"backup_logs.sh\""
      },
      {
        "id": "backup_logic",
        "text": "Implementar un bucle for con cp"
      },
      {
        "id": "backup_executed",
        "text": "Ejecutar el script backup_logs.sh"
      },
      {
        "id": "backup_dir_ok",
        "text": "El directorio \"backup/\" contiene copias"
      }
    ],
    "hints": [
      "Crear backup_logs.sh, crear una carpeta de respaldo, usar un bucle for para copiar todos los archivos .log y ejecutarlo.",
      "Utilice mkdir -p copia de seguridad, luego 'para el archivo en *.log; hacer copia de seguridad de cp \"$file\"/; done' en backup_logs.sh y ejecútelo.",
      "Intente ejecutar: toque backup_logs.sh, escriba el bucle dentro, hágalo ejecutable y ejecute ./backup_logs.sh"
    ]
  },
  "43": {
    "title": "Edición de secuencias con sed",
    "description": "Imagine que tiene un archivo de volcado de base de datos enorme y necesita reemplazar todas las apariciones de una dirección IP de servidor anterior por una nueva. Abrirlo en un editor podría congelar su computadora. En Linux, editamos secuencias de texto sobre la marcha usando `sed` (abreviatura de \"editor de secuencias\").\n\n- La sintaxis básica es `sed \"s/old/new/g\" file.txt` para buscar y reemplazar texto.\n- Agregar el indicador `-i` (in situ) guarda los reemplazos directamente en el archivo, en lugar de simplemente imprimir el texto modificado en la pantalla.\n\n**Por qué esto es importante**: Si ejecuta `sed \"s/port=80/port=8080/g\" server.conf` sin `-i`, solo imprimirá el texto modificado en la pantalla de su terminal. El archivo real permanece completamente sin cambios. El indicador `-i` (in situ) es necesario para guardar los cambios directamente en el archivo.",
    "instructions": "Actualicemos una configuración. Edite `server.conf` en su carpeta de inicio. Cambie `port=80` a `port=8080` in situ ejecutando `sed -i \"s/port=80/port=8080/g\" server.conf`.",
    "commandHelp": [
      {
        "cmd": "sed -i \"s/old/new/g\" file",
        "desc": "Realizar reemplazo de texto en el lugar en un archivo"
      }
    ],
    "objectives": [
      {
        "id": "used_sed",
        "text": "Usar el comando \"sed\" con el indicador -i"
      },
      {
        "id": "port_changed",
        "text": "Establecer la configuración del puerto en puerto=8080 en server.conf"
      }
    ],
    "hints": [
      "Piense en qué comando realiza edición de flujo y búsqueda-reemplazo.",
      "Utilice sed con la opción local (-i) para sustituir 'puerto=80' por 'puerto=8080'.",
      "Intente ejecutar: sed -i \"s/port=80/port=8080/g\" server.conf"
    ]
  },
  "44": {
    "title": "Extracción de datos con awk",
    "description": "Imagine recibir una hoja de cálculo grande guardada como texto sin formato, donde las columnas están separadas por comas o espacios, y solo necesita extraer la primera columna de datos. En Linux, analizamos columnas estructuradas de texto utilizando el potente lenguaje `awk`.\n\n- De forma predeterminada, `awk` divide las líneas por espacios en blanco, asignando la columna 1 a `$1`, la columna 2 a `$2`, y así sucesivamente.\n- El indicador `-F` le permite especificar un separador personalizado (como `-F:` para dos puntos). Por ejemplo, `awk -F: '{print $1}' /etc/passwd` extrae solo los nombres de usuario de una lista separada por dos puntos.\n\n**Por qué esto es importante**: Si ejecuta `awk '{print $1}' /etc/shadow` sin `-F:`, `awk` dividirá las líneas por espacios en blanco (el valor predeterminado) en lugar de dos puntos. Dado que las líneas del archivo de sombra no tienen espacios, la línea completa se trata como un solo campo, imprimiendo los detalles completos del hash de cada usuario. La bandera `-F:` obliga a `awk` a dividir columnas por dos puntos.",
    "instructions": "Extraigamos algunos datos. Recupere todos los nombres de usuario (la primera columna) de `/etc/shadow` usando `awk` con un separador de dos puntos `:` y guárdelos en `shadow_users.txt` usando `sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt`.",
    "commandHelp": [
      {
        "cmd": "awk -F: '{print $1}' file",
        "desc": "Imprime el primer campo del archivo delimitado por dos puntos"
      }
    ],
    "objectives": [
      {
        "id": "used_awk",
        "text": "Usa \"awk\" con el indicador de separador de campos -F"
      },
      {
        "id": "created_shadow_users",
        "text": "Envía los nombres a \"shadow_users.txt\""
      },
      {
        "id": "correct_shadow_users",
        "text": "Verifica que shadow_users.txt tenga raíz y alumno"
      }
    ],
    "hints": [
      "Piensa en qué comando divide columnas de datos usando un separador de campos personalizado.",
      "Utilice awk con -F: para imprimir la primera columna ($1) de /etc/shadow con sudo y redirija la salida a shadow_users.txt.",
      "Intente ejecutar: sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt"
    ]
  },
  "45": {
    "title": "Traducir y cortar datos",
    "description": "Imagine trabajar con una hoja de cálculo CSV de fechas y nombres de transacciones. Desea extraer solo la primera columna (fechas) y convertir todo el texto a letras mayúsculas para mantener la coherencia. En Linux, podemos combinar herramientas de análisis ligeras en una canalización:\n\n- El comando `cut` corta columnas específicas del texto estructurado. Por ejemplo, `cut -d, -f1` divide líneas por comas (`-d,`) y extrae la primera columna (`-f1`).\n- El comando `tr` (traducir) transforma caracteres de la entrada estándar, como intercambiar caracteres en minúsculas por mayúsculas (`tr \"a-z\" \"A-Z\"`).\n\n**Por qué esto es importante**: Si ejecuta `cut reports.csv` sin `-d,` y `-f1`, obtendrá: `cut: you must specify a list of bytes, characters, or fields`. Si especifica `-f1` pero omite `-d,`, el valor predeterminado es tabulaciones, lo que significa que no dividirá un archivo CSV y simplemente imprimirá la línea completa. El indicador `-d,` define la coma como separador de columnas y `-f1` le indica que extraiga solo la primera columna.",
    "instructions": "Dividamos y transformemos datos. Extraiga la primera columna de `reports.csv` usando `cut -d, -f1 reports.csv`, canalícela a `tr \"a-z\" \"A-Z\"` para ponerla en mayúsculas y redirija el resultado final a `upper_reports.txt`.",
    "commandHelp": [
      {
        "cmd": "cut -d, -f1 file | tr \"a-z\" \"A-Z\"",
        "desc": "Canalizar el campo de corte en la traducción"
      }
    ],
    "objectives": [
      {
        "id": "used_cut",
        "text": "Usar \"cortar\" con delimitador de coma"
      },
      {
        "id": "used_tr",
        "text": "Traducir caracteres a mayúsculas con \"tr\""
      },
      {
        "id": "upper_reports_exists",
        "text": "Crear archivo \"upper_reports.txt\""
      },
      {
        "id": "content_uppercase",
        "text": "Verificar que el texto esté en MAYÚSCULAS"
      }
    ],
    "hints": [
      "Debe dividir informes.csv para extraer la primera columna, convertirla a mayúsculas y guardarla.",
      "Utilice cut -d, -f1 reports.csv, canalícelo (|) a tr \"a-z\" \"A-Z\" y redirija (>) a Upper_reports.txt.",
      "Intente ejecutar: cut -d, -f1 reports.csv | tr \"a-z\" \"A-Z\" > informes_superiores.txt"
    ]
  },
  "46": {
    "title": "Gestión de variables de entorno",
    "description": "Imagine que está implementando una aplicación web y necesita saber si se debe ejecutar en un entorno limitado de \"desarrollo\" local seguro o conectarse a la base de datos de \"producción\" en vivo. En Linux, pasamos configuraciones como esta a programas en ejecución usando **variables de entorno**.\n\n- Usamos el comando `export` para definir una variable para que cualquier programa iniciado por nuestro shell pueda leerla. Por ejemplo, __CÓDIGO1__.\n- Para comprobar o mostrar el valor de una variable, anteponemos su nombre con un signo de dólar: `echo $APP_ENV`.",
    "instructions": "Configuremos el entorno. Establezca y exporte una variable denominada `APP_ENV` con el valor `production` ejecutando `export APP_ENV=production` y luego verifíquela ejecutando `echo $APP_ENV`.",
    "commandHelp": [
      {
        "cmd": "export VAR=val",
        "desc": "Definir variable de entorno"
      },
      {
        "cmd": "echo $VAR",
        "desc": "Imprimir valor de variable"
      }
    ],
    "objectives": [
      {
        "id": "exported_env",
        "text": "Ejecutar el comando \"exportar\""
      },
      {
        "id": "env_correct",
        "text": "Establecer la variable de entorno APP_ENV en \"producción\""
      },
      {
        "id": "echoed_env",
        "text": "Imprimir variable usando \"echo $APP_ENV\""
      }
    ],
    "hints": [
      "Piense en qué comando define las variables de entorno.",
      "Utilice export APP_ENV=producción e imprímalo usando echo $APP_ENV.",
      "Intente ejecutar: export APP_ENV=production seguido de echo $APP_ENV"
    ]
  },
  "47": {
    "title": "Archivos y compresión (tar)",
    "description": "Imagine que tiene una carpeta que contiene 500 registros del servidor y desea enviarla por correo electrónico a un colega o hacer una copia de seguridad en el almacenamiento en la nube. Enviar 500 archivos individuales es lento e ineficiente. En Linux, los comprimimos en un único archivo compacto tipo zip usando `tar` (abreviatura de \"archivo de cinta\").\n\n- Creamos archivos comprimidos usando banderas: `-c` (crear), `-z` (comprimir con gzip), `-v` (lista detallada de archivos) y `-f` (especificar nombre de archivo). Por ejemplo, `tar -czvf backup.tar.gz folder/` agrupa y comprime el directorio.\n\n**Por qué esto es importante**: Si ejecuta `tar -cz logs.tar.gz logs` sin `-f`, obtendrá: `tar: Refusing to write archive contents to terminal`. El indicador `-f` es fundamental porque le dice a `tar` que escriba la salida en un archivo en lugar de enviar datos de archivo binarios sin procesar directamente a su terminal. Los indicadores `-c` y `-z` también son necesarios para crear y comprimir el archivo respectivamente.",
    "instructions": "Empaquetamos nuestros registros. Agrupe y comprima la carpeta `logs` dentro de `/home/learner` en un archivo llamado `logs.tar.gz` ejecutando `tar -czvf logs.tar.gz logs`.",
    "commandHelp": [
      {
        "cmd": "tar -czvf archive.tar.gz folder",
        "desc": "Crear un archivo tar comprimido"
      }
    ],
    "objectives": [
      {
        "id": "used_tar_c",
        "text": "Usar el comando \"tar\" con los indicadores -c (crear) y -z (gzip)"
      },
      {
        "id": "archive_exists",
        "text": "Crear \"logs.tar.gz\" en el directorio de inicio"
      }
    ],
    "hints": [
      "Piense en qué comando empaqueta y comprime carpetas en archivos tarball.",
      "Utilice tar con las opciones crear (-c), gzip (-z), detallado (-v) y archivo (-f).",
      "Intente ejecutar: tar -czvf logs.tar.gz logs"
    ]
  },
  "48": {
    "title": "Inspeccionando el entorno",
    "description": "Imagina que estás intentando depurar un script que sigue fallando porque no puede encontrar la ruta de un programa, o quieres ver qué cuenta de usuario está activa en esta terminal. En Linux, todas estas configuraciones de toda la sesión se almacenan juntas.\n\n- El comando `env` imprime un directorio completo de todas las variables de entorno actualmente cargadas en su sesión activa, lo que le permite verificar las configuraciones de una sola vez.",
    "instructions": "Inspeccionemos la lista de entornos. Imprima todas las variables de entorno activas en su sesión de terminal ejecutando el comando `env`.",
    "commandHelp": [
      {
        "cmd": "env",
        "desc": "Lista de variables de entorno activas"
      }
    ],
    "objectives": [
      {
        "id": "ran_env",
        "text": "Ejecute el comando \"env\""
      }
    ],
    "hints": [
      "Piense en qué comando imprime todas las variables de entorno activas.",
      "Utilice el comando 'env'.",
      "Intente ejecutar: env"
    ]
  },
  "49": {
    "title": "Creación de enlaces (ln -s)",
    "description": "Imagine que tiene un archivo de configuración enterrado en lo profundo de una carpeta anidada, digamos `/var/www/html/configs/app/settings.conf`, pero necesita editarlo constantemente. En lugar de escribir la ruta larga de la carpeta cada vez, desea un acceso directo rápido en el escritorio. En Linux, hacemos esto creando enlaces.\n\n- **Enlace físico**: un clon directo que apunta a los datos del archivo sin procesar. Si elimina el archivo original, el enlace aún funciona.\n- **Enlace simbólico (enlace suave)**: un acceso directo basado en ruta (al igual que los accesos directos de Windows). Si elimina el archivo original, el enlace se rompe. Los creamos usando `ln -s target link_name`.\n\n**Por qué esto es importante**: si ejecuta `ln logs/app.log app_link.log` sin `-s`, creará un vínculo físico en lugar de un acceso directo simbólico. Si los archivos residen en diferentes particiones del disco, obtendrá: `ln: failed to create hard link: Invalid cross-device link`. El indicador `-s` crea un enlace simbólico flexible (acceso directo) que funciona en diferentes unidades y directorios.",
    "instructions": "Creemos un acceso directo. Cree un enlace simbólico llamado `app_link.log` en `/home/learner` que apunte al archivo de destino `logs/app.log` ejecutando `ln -s logs/app.log app_link.log`.",
    "commandHelp": [
      {
        "cmd": "ln -s target link_name",
        "desc": "Crear enlace simbólico"
      }
    ],
    "objectives": [
      {
        "id": "used_ln_s",
        "text": "Utilice \"ln\" con indicador simbólico -s"
      },
      {
        "id": "link_created",
        "text": "Crear enlace \"app_link.log\" que apunte a los registros de destino/app.log"
      }
    ],
    "hints": [
      "Piense en qué comando crea accesos directos/enlaces a archivos.",
      "Utilice 'ln -s' con la ruta de destino seguida del nombre del enlace.",
      "Intente ejecutar: ln -s logs/app.log app_link.log"
    ]
  },
  "50": {
    "title": "Procesamiento de resultados de búsqueda (xargs)",
    "description": "Imagine que realizó una búsqueda que arrojó 100 archivos temporales y ahora desea eliminarlos todos. El resultado de la búsqueda es solo una lista de nombres de texto en su pantalla. ¿Cómo ingresa esos nombres como entradas directas al comando de eliminación? En Linux, salvamos esta brecha usando `xargs`.\n\n- El comando `xargs` (ejecutar argumentos) toma líneas de entrada estándar (como la lista de archivos de `find`) y las alimenta una por una como argumentos para otro comando.\n- Por ejemplo, `find . -name \"*.tmp\" | xargs rm` encuentra todos los archivos temporales y los elimina todos de una sola vez.",
    "instructions": "Procesemos algunos resultados de búsqueda. Encuentre todos los archivos `.log` en `/home/learner/logs` usando `find logs -name \"*.log\"` y canalícelos a `xargs wc -l` para contar todas sus líneas colectivamente.",
    "commandHelp": [
      {
        "cmd": "find path -name \"pattern\" | xargs command",
        "desc": "Pasar los resultados de la búsqueda al comando"
      }
    ],
    "objectives": [
      {
        "id": "used_find",
        "text": "Ejecute el comando \"buscar\" en la carpeta de registros"
      },
      {
        "id": "used_xargs",
        "text": "Canalice los resultados a \"xargs\""
      },
      {
        "id": "ran_wc_l",
        "text": "Ejecute \"wc -l\" a través de la tubería xargs"
      }
    ],
    "hints": [
      "Busque todos los archivos de registro y canalice los nombres a wc -l usando xargs.",
      "Utilice buscar registros -nombre \"*.log\" y canalícelo (|) en xargs wc -l.",
      "Intente ejecutar: buscar registros -nombre \"*.log\" | xargs baño -l"
    ]
  },
  "51": {
    "title": "Echando un vistazo a los archivos (cabeza y cola)",
    "description": "Ahora que puedes leer un archivo completo con `cat`, ¿qué pasa si el archivo tiene miles de líneas y solo quieres ver la parte superior o inferior? Volcar un archivo enorme con `cat` inunda tu pantalla. En lugar de eso, usamos `head` y `tail` para mirar los bordes.\n\n- El comando `head` muestra las primeras 10 líneas de un archivo de forma predeterminada. Puede cambiar esto usando `-n <number>` (por ejemplo, `head -n 5 log.txt` para las primeras 5 líneas).\n- El comando `tail` muestra las últimas 10 líneas de forma predeterminada y admite la misma opción `-n`.\n- Fundamentalmente, `tail -f` (seguir) monitorea un archivo en tiempo real, mostrando nuevas líneas a medida que el sistema las escribe. Esta es la herramienta favorita de los administradores de sistemas para ver registros en vivo.",
    "instructions": "Inspeccionemos los registros. Utilice `head -n 5 logs/app.log` para ver las primeras 5 líneas del registro de la aplicación. A continuación, ejecute `tail -n 3 logs/security.log` para ver los últimos 3 eventos de seguridad. Finalmente, ejecute `tail -f logs/app.log` para simular el monitoreo de registros en tiempo real (imprimirá entradas simuladas y saldrá).",
    "commandHelp": [
      {
        "cmd": "head -n 5 logs/app.log",
        "desc": "Muestra las primeras 5 líneas de app.log"
      },
      {
        "cmd": "tail -n 3 logs/security.log",
        "desc": "Muestra las últimas 3 líneas de security.log"
      },
      {
        "cmd": "tail -f logs/app.log",
        "desc": "Monitorea las actualizaciones de app.log en tiempo real"
      }
    ],
    "objectives": [
      {
        "id": "used_head",
        "text": "Ejecute el comando \"head\" con -n 5 en logs/app.log"
      },
      {
        "id": "used_tail",
        "text": "Ejecute el comando \"tail\" con -n 3 en logs/security.log"
      },
      {
        "id": "used_tail_f",
        "text": "Ejecute el comando \"tail\" con -f para seguir app.log"
      }
    ],
    "hints": [
      "Use head -n 5 seguido del nombre del archivo y tail -n 3 seguido de la ruta del registro de seguridad.",
      "Para seguir los registros en vivo, agregue la opción -f al comando tail.",
      "Intente ejecutar: head -n 5 logs/app.log, luego tail -n 3 logs/security.log y finalmente tail -f logs/app.log"
    ]
  },
  "52": {
    "title": "Desplazamiento interactivo de archivos (menos y más)",
    "description": "Echar un vistazo a la parte superior e inferior de un archivo con `head` y `tail` es excelente, pero ¿qué sucede si necesita explorar un archivo de configuración largo página por página? Para eso están los buscapersonas como `less` y `more`.\n\n- Los buscapersonas cargan archivos de forma interactiva, mostrando una página de texto a la vez para evitar la desaceleración del sistema en archivos grandes.\n- `less` es la opción moderna, que le permite desplazarse hacia adelante y hacia atrás usando las teclas de flecha, buscar texto con `/` y salir presionando `q`.\n- `more` es un buscapersonas más antiguo y simple que solo se desplaza hacia adelante.",
    "instructions": "Leamos un archivo largo página por página. Ejecute `less /etc/hosts` para abrirlo en una vista de desplazamiento. (En nuestra terminal, esto generará el contenido en un marco desplazable. Presione `q` para regresar).",
    "commandHelp": [
      {
        "cmd": "less /etc/hosts",
        "desc": "Abrir el archivo de hosts en el buscapersonas menos"
      },
      {
        "cmd": "more /etc/hosts",
        "desc": "Abrir el archivo de hosts en el buscapersonas más"
      }
    ],
    "objectives": [
      {
        "id": "used_less",
        "text": "Abrir /etc/hosts en un buscapersonas (menos o más)"
      }
    ],
    "hints": [
      "Utilice el comando 'menos' o 'más' en la ruta del archivo /etc/hosts.",
      "Intente ejecutar: less /etc/hosts"
    ]
  },
  "53": {
    "title": "Registro del sistema (journalctl)",
    "description": "Ahora que puede iniciar y detener servicios en segundo plano con `systemctl`, ¿cómo soluciona los problemas cuando fallan? La utilidad `journalctl` le permite inspeccionar los registros del sistema generados por los servicios administrados por systemd.\n\n- De forma predeterminada, `journalctl` muestra todos los registros del sistema. Debido a que esto puede ser enorme, los filtramos para mantenernos enfocados.\n- La opción `-u <service>` filtra los registros para mostrar solo mensajes de un servicio específico (por ejemplo, `journalctl -u apache2`).\n- La opción `-n <number>` muestra solo las entradas más recientes (por ejemplo, `journalctl -n 5` para los últimos 5 registros).\n- El indicador `-f` (seguir) muestra los registros en tiempo real a medida que se escriben.",
    "instructions": "Investiguemos los registros del servidor web. Ejecute `journalctl -u apache2` para filtrar los registros del sistema para el servicio `apache2`. Luego ejecute `journalctl -n 5` para ver los últimos 5 mensajes de registro generales del sistema.",
    "commandHelp": [
      {
        "cmd": "journalctl -u apache2",
        "desc": "Mostrar registros para el servicio apache2"
      },
      {
        "cmd": "journalctl -n 5",
        "desc": "Mostrar los últimos 5 mensajes de registro del sistema"
      }
    ],
    "objectives": [
      {
        "id": "used_journalctl_u",
        "text": "Filtrar registros para el servicio apache2 usando journalctl -u"
      },
      {
        "id": "used_journalctl_n",
        "text": "Ver las últimas entradas de registro usando journalctl -n"
      }
    ],
    "hints": [
      "Use journalctl con la opción -u configurada en apache2 para ver los registros del servidor web.",
      "Para limitar los registros a las últimas 5 líneas, use journalctl -n 5.",
      "Intente ejecutar: journalctl -u apache2 y luego: journalctl -n 5"
    ]
  },
  "54": {
    "title": "Lógica reutilizable (funciones bash)",
    "description": "Ha escrito bucles y condicionales para automatizar acciones en scripts. Pero a medida que sus scripts crecen, copiar y pegar la misma lógica una y otra vez hace que sea difícil mantenerlos. En bash, podemos agrupar comandos en funciones reutilizables.\n\n- Para definir una función, la declaramos por su nombre seguido de paréntesis y llaves: `log_msg() { echo \"msg\"; }`.\n- Las funciones pueden recibir argumentos como los scripts de shell, a los que se accede utilizando los parámetros de posición local `$1`, `$2`, etc. dentro del cuerpo de la función.\n- Para llamar a una función, simplemente use su nombre como cualquier otro comando: `log_msg \"Backup started\"`.",
    "instructions": "Creemos un script de respaldo modular. Cree un script llamado `backup_helper.sh` en su carpeta de inicio. Defina una función llamada `log_msg` que imprima un mensaje con una marca de tiempo (por ejemplo, `log_msg() { echo \"[$(date +%T)] $1\"; }` o similar) y llámela al menos dos veces dentro del script para registrar acciones. Hazlo ejecutable y ejecútalo.",
    "commandHelp": [
      {
        "cmd": "func_name() { ... }",
        "desc": "Defina una función en bash"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Cree el archivo de script \"backup_helper.sh\" en casa"
      },
      {
        "id": "has_function",
        "text": "Defina la función log_msg dentro del script"
      },
      {
        "id": "script_executed",
        "text": "Haga que el script sea ejecutable y ejecútelo"
      }
    ],
    "hints": [
      "Utilice touch backup_helper.sh, luego edítelo para incluir shebang #!/bin/bash, log_msg() { ... } y llame a log_msg dos veces.",
      "Recuerde ejecutar chmod 755 backup_helper.sh para hacerlo ejecutable antes de ejecutar ./backup_helper.sh.",
      "Intente definir la función: log_msg() { echo \"[LOG] $1\"; } y luego llámelo como: log_msg 'Iniciando'"
    ]
  },
  "55": {
    "title": "Programación de tareas (crontab)",
    "description": "Ahora que ha escrito scripts de shell sólidos, no querrá iniciar sesión a medianoche solo para ejecutar su asistente de respaldo. Linux proporciona el servicio `cron` para ejecutar comandos o scripts automáticamente en momentos específicos.\n\n- El servicio cron verifica una tabla de programación llamada `crontab`.\n- Cada programación cron tiene 5 campos que representan la hora: `minute hour day-of-month month day-of-week` seguido del comando.\n- Por ejemplo, `30 2 * * * /path/to/script.sh` ejecuta un script todos los días a las 2:30 a.m.\n- Usamos `crontab -l` para enumerar nuestros trabajos cron activos y `crontab <filename>` para cargar programaciones desde un archivo.",
    "instructions": "Automatizamos nuestro asistente de respaldo. Escriba una cadena de programación cron en un archivo llamado `my_cron` (por ejemplo, `* * * * * /home/learner/backup_helper.sh` para ejecutarse cada minuto). Instale este programa ejecutando `crontab my_cron` y verifíquelo ejecutando `crontab -l`.",
    "commandHelp": [
      {
        "cmd": "crontab my_cron",
        "desc": "Instalar trabajos cron desde el archivo my_cron"
      },
      {
        "cmd": "crontab -l",
        "desc": "Listar trabajos cron activos para el usuario actual"
      }
    ],
    "objectives": [
      {
        "id": "cron_file_created",
        "text": "Crear el archivo \"my_cron\" en casa con el programa cron"
      },
      {
        "id": "cron_installed",
        "text": "Instalar el programa cron usando crontab my_cron"
      },
      {
        "id": "cron_listed",
        "text": "Listar el programa cron activo con crontab -l"
      }
    ],
    "hints": [
      "Usar echo '* * * * * /home/learner/backup_helper.sh' > my_cron para crear el archivo cron.",
      "Cargue el archivo cron en la tabla crontab ejecutando crontab my_cron.",
      "Verifique los trabajos cron instalados usando crontab -l"
    ]
  },
  "56": {
    "title": "Encontrar comandos (cuáles)",
    "description": "Ahora que está familiarizado con las variables de entorno activas como `PATH` (que almacena los directorios donde Linux busca comandos), ¿cómo puede encontrar la ruta exacta del archivo del programa que se ejecuta cuando escribe `ls` o `grep`? Usamos `which` para localizar binarios de comandos.\n\n- El comando `which` busca las carpetas enumeradas en su variable `$PATH` e imprime la ruta absoluta del binario ejecutado cuando se ejecuta el comando (por ejemplo, `which ls` genera `/bin/ls`).\n- Esto es útil para encontrar dónde está instalada una herramienta o resolver conflictos entre múltiples versiones de la misma herramienta.",
    "instructions": "Busquemos nuestras herramientas. Ejecute `which ls` para ver dónde está almacenado el ejecutable `ls` en el sistema. Luego, busque la ruta del comando `grep` ejecutando `which grep`.",
    "commandHelp": [
      {
        "cmd": "which ls",
        "desc": "Encuentra la ruta absoluta de ls"
      },
      {
        "cmd": "which grep",
        "desc": "Encuentra la ruta absoluta de grep"
      }
    ],
    "objectives": [
      {
        "id": "used_which_ls",
        "text": "Ejecute el comando \"cuál\" en ls"
      },
      {
        "id": "used_which_grep",
        "text": "Ejecute el comando \"cuál\" en grep"
      }
    ],
    "hints": [
      "Ejecute which ls para encontrar la ruta de ls y which grep para encontrar la ruta de grep.",
      "Intente ejecutar: which ls y luego Which grep"
    ]
  },
  "57": {
    "title": "Atajos de Shell personalizados (alias)",
    "description": "Escribir comandos largos con múltiples indicadores puede resultar agotador. En Linux, podemos crear accesos directos personalizados llamados alias. Por ejemplo, puede asignar `ll` para ejecutar `ls -la` automáticamente.\n\n- Para crear un alias temporal, ejecute `alias name='command'` (por ejemplo, `alias ll='ls -la'`).\n- Ejecutar `alias` sin argumentos enumera todos los alias activos en la sesión actual.\n- Para que los alias sean permanentes durante los reinicios, normalmente se escriben en los archivos de configuración `.bashrc` o `.bash_profile`.",
    "instructions": "Configuremos algunos atajos. Cree un alias temporal llamado `la` que ejecute `ls -a` ejecutando `alias la='ls -a'`. Pruébelo ejecutando `la` en su terminal.",
    "commandHelp": [
      {
        "cmd": "alias la='ls -a'",
        "desc": "Alias ​​la para ejecutar ls -a"
      },
      {
        "cmd": "alias",
        "desc": "Listar alias activos"
      }
    ],
    "objectives": [
      {
        "id": "alias_created",
        "text": "Crear alias la para ls -a"
      },
      {
        "id": "alias_run",
        "text": "Ejecutar el alias recién creado la"
      }
    ],
    "hints": [
      "Defina el alias usando alias la='ls -a' exactamente como se muestra.",
      "Ejecute el comando alias la en la terminal para verificar que funciona.",
      "Intente ejecutar: alias la='ls -a' seguido de: la"
    ]
  },
  "58": {
    "title": "Administración de usuarios (useradd & passwd)",
    "description": "Hasta ahora, ha estado trabajando como usuario `learner`. Pero en los servidores del mundo real, los administradores de sistemas deben administrar varias cuentas. Aprendamos cómo agregar nuevos usuarios y establecer sus contraseñas.\n\n- El comando `useradd` crea una nueva cuenta de usuario. Dado que la creación de cuentas afecta la seguridad del sistema, debe ejecutarse con privilegios de superusuario (por ejemplo, `sudo useradd deployer`).\n- El comando `passwd` establece o cambia la contraseña de un usuario. Ejecute como `sudo passwd deployer` para establecer la contraseña del usuario del implementador.",
    "instructions": "Agreguemos la cuenta de un colega. Cree un nuevo usuario llamado `deployer` ejecutando `sudo useradd deployer`. Luego, establezca una contraseña para ellos ejecutando `sudo passwd deployer` (escriba cualquier contraseña simulada cuando se le solicite).",
    "commandHelp": [
      {
        "cmd": "sudo useradd deployer",
        "desc": "Crear nuevo usuario implementador"
      },
      {
        "cmd": "sudo passwd deployer",
        "desc": "Establecer contraseña para usuario implementador"
      }
    ],
    "objectives": [
      {
        "id": "user_created",
        "text": "Crear usuario \"deployer\" usando useradd"
      },
      {
        "id": "passwd_changed",
        "text": "Establecer contraseña para \"deployer\" usando passwd"
      }
    ],
    "hints": [
      "Use sudo useradd deployer para registrar la cuenta de usuario.",
      "Establezca la contraseña ejecutando sudo passwd desplegar.",
      "Intente ejecutar: sudo useradd desplegarer y luego: sudo passwd desplegarer"
    ]
  },
  "59": {
    "title": "Cambio de contextos de seguridad (su)",
    "description": "Ahora que ha creado la cuenta `deployer`, ¿cómo inicia sesión localmente para probar su entorno? En Linux, usamos el comando `su` (usuario sustituto) para cambiar de cuenta sin cerrar sesión.\n\n- El comando `su <username>` cambia el shell del terminal actual a la sesión de ese usuario.\n- Cuando se cambia, ejecutar `whoami` reflejará el nuevo nombre de usuario.\n- Para regresar a la sesión de su cuenta de usuario original, escriba `exit` o presione `Ctrl+D`.",
    "instructions": "Cambiemos de contexto. Cambie al usuario `deployer` ejecutando `su deployer`. Una vez que haya iniciado sesión, ejecute `whoami` para verificar que realmente está ejecutando como `deployer`. Cuando haya terminado, escriba `exit` para volver.",
    "commandHelp": [
      {
        "cmd": "su deployer",
        "desc": "Sustituya la sesión del usuario por el implementador"
      },
      {
        "cmd": "whoami",
        "desc": "Verifique el nombre de la sesión del usuario activo"
      },
      {
        "cmd": "exit",
        "desc": "Salga de la sesión del usuario activo"
      }
    ],
    "objectives": [
      {
        "id": "switched_user",
        "text": "Cambie el contexto del shell al implementador usando su"
      },
      {
        "id": "verified_whoami",
        "text": "Ejecute whoami para confirmar que es el implementador"
      }
    ],
    "hints": [
      "Use su implementador para cambiar a la sesión del shell del implementador.",
      "Comprueba quién está activo escribiendo whoami.",
      "Intente ejecutar: su desplegar, luego whoami y luego salir"
    ]
  },
  "60": {
    "title": "Secure Shell Access (ssh)",
    "description": "Cambiar de usuario localmente es útil, pero en la computación en la nube, los servidores viven en centros de datos remotos. Para conectarnos a ellos de forma segura a través de la red, utilizamos `ssh` (Secure Shell).\n\n- El comando `ssh` cifra la conexión entre su máquina y un host remoto para evitar escuchas ilegales.\n- Sintaxis: `ssh user@hostname` o `ssh user@ip_address` (por ejemplo, `ssh admin@192.168.1.100`).\n- La primera conexión le pedirá que verifique la autenticidad del host remoto mostrando una huella digital ECDSA única.\n\n**Nota:** Dado que se trata de un entorno limitado basado en navegador, no existe un servidor remoto real al que conectarse. La ejecución de este comando le mostrará el patrón de salida esperado del mundo real (verificación del host, conexión, sesión) al instante, en lugar de una sesión interactiva en vivo real. En una terminal real, ssh lo colocaría en un shell remoto genuinamente separado hasta que escriba `exit`.",
    "instructions": "Vamos a conectarnos a un servidor provisional remoto. Conéctese al servidor en `192.168.1.100` como usuario `admin` ejecutando `ssh admin@192.168.1.100` (escriba `yes` si se le solicita verificar la clave del host e ingrese cualquier contraseña).",
    "commandHelp": [
      {
        "cmd": "ssh admin@192.168.1.100",
        "desc": "Conéctese de forma segura al servidor de prueba remoto"
      }
    ],
    "objectives": [
      {
        "id": "ssh_connected",
        "text": "SSH en el servidor remoto en 192.168.1.100 como administrador"
      }
    ],
    "hints": [
      "Utilice el comando ssh seguido de usuario@host. Aquí, el usuario es administrador y el host es 192.168.1.100.",
      "Intente ejecutar: ssh admin@192.168.1.100"
    ]
  },
  "61": {
    "title": "Transferencia segura de archivos (scp)",
    "description": "Ahora que sabe cómo iniciar sesión en un servidor remoto a través de SSH, ¿cómo se copia un archivo local (como un archivo de respaldo)? El comando `scp` (copia segura) copia archivos de forma segura entre hosts usando SSH internamente.\n\n- La sintaxis es `scp source_path user@host:destination_path`.\n- Por ejemplo, `scp log.txt admin@192.168.1.100:/tmp/` copia el archivo `log.txt` local a la carpeta remota `/tmp/`.\n\n**Nota:** Al igual que con ssh, aquí no hay un servidor remoto real: ejecutar este comando confirma que su archivo local existe y le muestra el resultado de transferencia esperado, pero en realidad no envía datos a ninguna parte.",
    "instructions": "Enviemos nuestro archivo de registro al servidor de prueba remoto. Copie el archivo local `logs.tar.gz` a la carpeta `/tmp` en `192.168.1.100` como usuario `admin` ejecutando `scp logs.tar.gz admin@192.168.1.100:/tmp/`.",
    "commandHelp": [
      {
        "cmd": "scp logs.tar.gz admin@192.168.1.100:/tmp/",
        "desc": "Copie logs.tar.gz a la carpeta /tmp del servidor remoto"
      }
    ],
    "objectives": [
      {
        "id": "scp_completed",
        "text": "Transfiera logs.tar.gz a 192.168.1.100:/tmp/ mediante scp"
      }
    ],
    "hints": [
      "Especifique scp seguido del archivo local logs.tar.gz y luego el destino remoto admin@192.168.1.100:/tmp/.",
      "Intente ejecutar: scp logs.tar.gz admin@192.168.1.100:/tmp/"
    ]
  },
  "62": {
    "title": "Compresión de archivos (gzip y gunzip)",
    "description": "Imagine que tiene un único archivo de texto que contiene un conjunto de datos masivo y desea reducir su tamaño para ahorrar espacio en el disco o acelerar el uso compartido. En Linux, comprimimos archivos individuales usando `gzip` y los restauramos usando `gunzip`.\n\n- El comando `gzip <filename>` comprime un archivo y lo reemplaza con una versión comprimida que termina en `.gz` (por ejemplo, `backup.txt` se convierte en `backup.txt.gz`).\n- El comando `gunzip <filename.gz>` descomprime el archivo restaurando la versión original.",
    "instructions": "Comprimamos un archivo para ahorrar espacio. Ejecute `gzip note.txt` en su carpeta de inicio. Luego, descomprima el archivo `note.txt.gz` resultante a su estado original ejecutando `gunzip note.txt.gz`.",
    "commandHelp": [
      {
        "cmd": "gzip note.txt",
        "desc": "Comprime note.txt a note.txt.gz"
      },
      {
        "cmd": "gunzip note.txt.gz",
        "desc": "Descomprime note.txt.gz nuevamente a note.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_gzip",
        "text": "Ejecute el comando \"gzip\" para comprimir note.txt"
      },
      {
        "id": "used_gunzip",
        "text": "Ejecute el comando \"gunzip\" para restaurar note.txt"
      }
    ],
    "hints": [
      "Utilice gzip note.txt para comprimir el archivo.",
      "Utilice gunzip note.txt.gz para descomprimirlo nuevamente.",
      "Intente ejecutar: gzip note.txt seguido de gunzip note.txt.gz"
    ]
  },
  "63": {
    "title": "Administración de grupos (groupadd y grupos)",
    "description": "En Linux, los usuarios se organizan en **grupos** para compartir permisos fácilmente. Por ejemplo, todos los desarrolladores pueden pertenecer a un grupo denominado `developers`. Esto nos permite compartir archivos con todo el equipo a la vez.\n\n- El comando `groupadd` crea un nuevo grupo. Dado que se trata de una configuración del sistema, requiere privilegios de superusuario (por ejemplo, `sudo groupadd developers`).\n- El comando `groups [username]` enumera todos los grupos a los que pertenece un usuario. Ejecutar sin argumentos, muestra grupos para el usuario actual.",
    "instructions": "Gestionemos grupos. Cree un nuevo grupo llamado `developers` ejecutando `sudo groupadd developers`. Luego, verifique sus propios grupos activos ejecutando el comando `groups`.",
    "commandHelp": [
      {
        "cmd": "sudo groupadd developers",
        "desc": "Cree un nuevo grupo llamado desarrolladores"
      },
      {
        "cmd": "groups",
        "desc": "Mostrar grupos activos para el usuario actual"
      }
    ],
    "objectives": [
      {
        "id": "group_created",
        "text": "Cree un grupo \"desarrolladores\" usando groupadd"
      },
      {
        "id": "checked_groups",
        "text": "Ejecute el comando \"grupos\""
      }
    ],
    "hints": [
      "Utilice sudo groupadd desarrolladores para crear el grupo.",
      "Simplemente ejecute el comando groups para enumerar los grupos.",
      "Intente ejecutar: sudo groupadd desarrolladores seguido de grupos"
    ]
  },
  "64": {
    "title": "Listado de archivos abiertos (lsof)",
    "description": "En sistemas tipo Unix, \"todo es un archivo\". Esto significa que no sólo los archivos y carpetas de texto, sino también los sockets de red, el hardware del sistema y los procesos se tratan como archivos. Para saber a qué archivos acceden qué programas en ejecución, utilizamos `lsof` (Listar archivos abiertos).\n\n- Al ejecutar `lsof` se muestra una lista completa de todos los archivos abiertos, junto con el ID del proceso (PID) y el comando que los abrió.\n- Por ejemplo, ejecutar `lsof -i` enumera todos los archivos/sockets de red, lo cual es extremadamente útil para descubrir qué proceso está escuchando en un puerto de red específico (como el puerto 80).",
    "instructions": "Inspeccionemos nuestras conexiones y archivos activos. Ejecute `lsof` para ver todos los archivos abiertos en el sistema.",
    "commandHelp": [
      {
        "cmd": "lsof",
        "desc": "Enumere todos los archivos abiertos en el sistema"
      }
    ],
    "objectives": [
      {
        "id": "ran_lsof",
        "text": "Ejecute el comando \"lsof\""
      }
    ],
    "hints": [
      "Utilice el comando 'lsof' sin argumentos para enumerar todos los archivos abiertos.",
      "Intente ejecutar: lsof"
    ]
  },
  "65": {
    "title": "Visualización de detalles de la CPU (lscpu)",
    "description": "Al solucionar problemas de rendimiento del sistema o implementar aplicaciones de alta demanda, necesita conocer las capacidades de la CPU de su sistema. En Linux, leemos información detallada sobre la arquitectura de la CPU usando el comando `lscpu`.\n\n- El comando `lscpu` muestra detalles del procesador, como el modelo de CPU, el proveedor, la velocidad del reloj, la cantidad de núcleos, los detalles de Hyper-Threading y los tamaños de caché, directamente desde el sistema de archivos del kernel.",
    "instructions": "Inspeccionemos el procesador. Ejecute `lscpu` para ver los detalles de la CPU de su sistema.",
    "commandHelp": [
      {
        "cmd": "lscpu",
        "desc": "Muestra información de la arquitectura de la CPU"
      }
    ],
    "objectives": [
      {
        "id": "ran_lscpu",
        "text": "Ejecute el comando \"lscpu\""
      }
    ],
    "hints": [
      "Simplemente ejecute el comando lscpu para mostrar la configuración del procesador.",
      "Intente ejecutar: lscpu"
    ]
  },
  "66": {
    "title": "Archivar con zip y descomprimir",
    "description": "Mientras que `tar` y `gzip` son estándar en Linux, `zip` es el formato de archivo más común en el mundo multiplataforma (Windows/macOS). En Linux, empaquetamos y comprimimos archivos en archivos zip usando `zip` y los extraemos usando `unzip`.\n\n- El comando `zip <archive.zip> <files>` crea un archivo zip.\n- El comando `unzip <archive.zip>` extrae los archivos del archivo.",
    "instructions": "Empaquemos nuestras notas. Cree un archivo zip llamado `note.zip` que contenga el archivo `note.txt` en su carpeta de inicio. Luego, pruebe la extracción ejecutando `unzip note.zip`.",
    "commandHelp": [
      {
        "cmd": "zip note.zip note.txt",
        "desc": "Crear note.zip que contenga note.txt"
      },
      {
        "cmd": "unzip note.zip",
        "desc": "Extraer el contenido de note.zip"
      }
    ],
    "objectives": [
      {
        "id": "used_zip",
        "text": "Ejecutar el comando \"zip\""
      },
      {
        "id": "used_unzip",
        "text": "Ejecutar el comando \"descomprimir\""
      }
    ],
    "hints": [
      "Usar zip note.zip note.txt primero, seguido de descomprimir note.zip.",
      "Intente ejecutar: zip note.zip note.txt y luego descomprima note.zip"
    ]
  },
  "67": {
    "title": "Compresión alternativa (bzip2 y xz)",
    "description": "Más allá de `gzip` y `zip`, Linux admite otros formatos de compresión optimizados para relaciones de compresión más altas a expensas de la velocidad de la CPU. Estos son `bzip2` (bz2) y `xz` (xz).\n\n- El comando `bzip2 <file>` comprime un archivo y genera `<file>.bz2`.\n- El comando `xz <file>` utiliza compresión LZMA sin pérdidas para crear `<file>.xz`, lo que produce tamaños de archivo excepcionalmente pequeños, lo que lo hace ideal para las versiones del kernel de Linux.",
    "instructions": "Comparemos formatos. Comprime `note.txt` usando `bzip2 note.txt`. Luego, comprime los archivos resultantes usando `xz note.txt` (para simular ambos).",
    "commandHelp": [
      {
        "cmd": "bzip2 note.txt",
        "desc": "Comprimir note.txt usando bzip2"
      },
      {
        "cmd": "xz note.txt",
        "desc": "Comprimir note.txt usando xz"
      }
    ],
    "objectives": [
      {
        "id": "used_bzip2",
        "text": "Ejecutar bzip2 note.txt"
      },
      {
        "id": "used_xz",
        "text": "Ejecutar xz note.txt"
      }
    ],
    "hints": [
      "Ejecutar bzip2 note.txt para probar la compresión bzip2.",
      "Ejecute xz note.txt para probar la compresión xz."
    ]
  },
  "68": {
    "title": "Administración de paquetes de Debian (dpkg)",
    "description": "Si bien `apt` automatiza la descarga y resolución de dependencias de paquetes desde los repositorios, ¿qué sucede si ya descargó un archivo de paquete `.deb` manualmente y desea inspeccionarlo o instalarlo? En Linux, usamos `dpkg` (Paquete Debian) para interactuar directamente con los paquetes.\n\n- El comando `dpkg -l` enumera todos los paquetes actualmente instalados en su sistema Debian/Ubuntu.\n- El comando `dpkg -s <package>` muestra información de estado, versión y arquitectura de un paquete específico.",
    "instructions": "Consultemos la base de datos del paquete local. Verifique la lista de paquetes ejecutando `dpkg -l`. Luego, consulte los detalles del programa `tree` ejecutando `dpkg -s tree`.",
    "commandHelp": [
      {
        "cmd": "dpkg -l",
        "desc": "Listar los paquetes Debian instalados"
      },
      {
        "cmd": "dpkg -s tree",
        "desc": "Mostrar detalles del paquete del árbol"
      }
    ],
    "objectives": [
      {
        "id": "ran_dpkg_l",
        "text": "Ejecute \"dpkg -l\" para enumerar los paquetes"
      },
      {
        "id": "ran_dpkg_s",
        "text": "Ejecute \"dpkg -s tree\" para consultar los detalles"
      }
    ],
    "hints": [
      "Utilice dpkg -l para recuperar la lista completa de paquetes.",
      "Verifique el estado del paquete del árbol usando dpkg -s tree.",
      "Intente ejecutar: dpkg -l seguido de dpkg -s árbol"
    ]
  },
  "69": {
    "title": "Administradores de paquetes RedHat (yum y dnf)",
    "description": "No todos los entornos Linux están basados ​​en Debian/Ubuntu. Si trabaja en sistemas RedHat, Fedora o CentOS, no encontrará `apt` o `dpkg`. En su lugar, administrará paquetes utilizando administradores de paquetes `yum` más antiguos o `dnf` (Dandified YUM) modernos.\n\n- El comando `dnf check-update` (o `yum check-update`) se conecta a los repositorios de RedHat para buscar actualizaciones de paquetes disponibles.\n- El comando `dnf install <package>` busca e instala programas similares a `apt install`.",
    "instructions": "Ejecutemos actualizaciones en un simulador basado en RedHat. Busque paquetes que necesiten actualizaciones ejecutando `dnf check-update` (o `yum check-update`).",
    "commandHelp": [
      {
        "cmd": "dnf check-update",
        "desc": "Comprobar actualizaciones de paquetes RedHat"
      },
      {
        "cmd": "yum check-update",
        "desc": "Comprobar actualizaciones de CentOS heredadas"
      }
    ],
    "objectives": [
      {
        "id": "checked_updates",
        "text": "Ejecutar dnf check-update o yum check-update"
      }
    ],
    "hints": [
      "Utilice el comando dnf o yum con el argumento check-update.",
      "Intente ejecutar: dnf check-update"
    ]
  },
  "70": {
    "title": "Administrar usuarios (adduser y userdel)",
    "description": "Mientras que `useradd` es una utilidad de bajo nivel que simplemente registra los detalles del usuario en archivos de configuración del sistema, los sistemas Debian/Ubuntu proporcionan un script interactivo de alto nivel llamado `adduser` que automatiza la creación de carpetas de inicio, la configuración de contraseñas y la inicialización de entornos de shell. Por el contrario, `userdel` elimina limpiamente las cuentas de usuario.\n\n- La ejecución de `sudo adduser tester` lo guía a través de la configuración del usuario de forma interactiva.\n- Al ejecutar `sudo userdel tester` se elimina la cuenta de usuario.",
    "instructions": "Manejemos los ciclos de vida de los usuarios. Cree un usuario usando `sudo adduser tester`. Después de eso, elimine el usuario ejecutando `sudo userdel tester`.",
    "commandHelp": [
      {
        "cmd": "sudo adduser tester",
        "desc": "Crear usuario tester interactivamente"
      },
      {
        "cmd": "sudo userdel tester",
        "desc": "Eliminar cuenta de usuario tester"
      }
    ],
    "objectives": [
      {
        "id": "ran_adduser",
        "text": "Ejecute el comando \"adduser\" con sudo"
      },
      {
        "id": "ran_userdel",
        "text": "Ejecute el comando \"userdel\" con sudo"
      }
    ],
    "hints": [
      "Utilice sudo adduser tester seguido de sudo userdel tester.",
      "Intente ejecutar: sudo adduser tester y luego: sudo userdel tester"
    ]
  },
  "71": {
    "title": "Visualización de identidades de usuario (id)",
    "description": "Al solucionar errores de permisos, debe verificar el contexto exacto del identificador de usuario y grupo en el que se está ejecutando. Hacemos esto usando `id`.\n\n- Al ejecutar `id` se imprime el ID de usuario (UID) del usuario actual, el ID de grupo principal (GID) y todas las listas de grupos suplementarios.\n- Ejecutar `id <username>` consulta información para un usuario específico.",
    "instructions": "Revisemos las identidades activas. Ejecute `id` para ver sus detalles y luego ejecute `id root` para inspeccionar los identificadores de cuenta del superusuario.",
    "commandHelp": [
      {
        "cmd": "id",
        "desc": "Mostrar detalles de identificación de usuario activo"
      },
      {
        "cmd": "id root",
        "desc": "Consultar detalles de identificación de raíz"
      }
    ],
    "objectives": [
      {
        "id": "ran_id_learner",
        "text": "Ejecutar el comando \"id\" para el alumno"
      },
      {
        "id": "ran_id_root",
        "text": "Ejecutar el comando \"id root\""
      }
    ],
    "hints": [
      "Ejecutar id seguido de id root.",
      "Intente ejecutar: id y id root"
    ]
  },
  "72": {
    "title": "Eliminación de grupos (groupdel)",
    "description": "Cuando los equipos de proyecto reorganizan o desmantelan servicios, se deben limpiar los grupos de seguridad correspondientes. En Linux, eliminamos grupos usando `groupdel`.\n\n- El comando `groupdel <group_name>` elimina permanentemente un grupo de los archivos de configuración del sistema, lo que requiere privilegios de superusuario.",
    "instructions": "Limpiemos nuestros grupos. Elimine el grupo `developers` ejecutando `sudo groupdel developers`.",
    "commandHelp": [
      {
        "cmd": "sudo groupdel developers",
        "desc": "Eliminar el grupo de desarrolladores"
      }
    ],
    "objectives": [
      {
        "id": "group_deleted",
        "text": "Eliminar el grupo \"desarrolladores\" usando groupdel"
      }
    ],
    "hints": [
      "Utilice sudo groupdel desarrolladores para eliminar el grupo de /etc/group.",
      "Intente ejecutar: sudo groupdel desarrolladores"
    ]
  },
  "73": {
    "title": "Comprobación de interfaces (ifconfig)",
    "description": "Antes de que el moderno conjunto de comandos `ip` se convirtiera en estándar, los administradores de sistemas Linux dependían de `ifconfig` (configurador de interfaces) para ver y administrar interfaces de red.\n\n- El comando `ifconfig` muestra las interfaces de red activas, la configuración de IP local, los detalles de la máscara de red y las direcciones MAC de hardware. Aunque está obsoleto en algunas distribuciones más nuevas, sigue siendo ampliamente utilizado en servidores heredados.",
    "instructions": "Ejecutemos la herramienta de configuración clásica. Ejecute `ifconfig` para inspeccionar las interfaces de red activas.",
    "commandHelp": [
      {
        "cmd": "ifconfig",
        "desc": "Mostrar configuraciones de interfaz de red"
      }
    ],
    "objectives": [
      {
        "id": "ran_ifconfig",
        "text": "Ejecute el comando \"ifconfig\""
      }
    ],
    "hints": [
      "Ejecute el comando ifconfig en la terminal.",
      "Intente ejecutar: ifconfig"
    ]
  },
  "74": {
    "title": "Conexiones de red (nmcli)",
    "description": "En las estaciones de trabajo y servidores Linux modernos, las interfaces de red son administradas por un demonio del sistema llamado NetworkManager. En lugar de editar manualmente los archivos de configuración, configuramos los detalles de la red usando `nmcli`.\n\n- El comando `nmcli` (NetworkManager CLI) le permite inspeccionar conexiones de hardware, estados de dispositivos y redes Wi-Fi activas.",
    "instructions": "Comprobemos el estado del hardware de la red. Ejecute `nmcli device` para consultar conexiones y estado.",
    "commandHelp": [
      {
        "cmd": "nmcli device",
        "desc": "Enumere los estados y dispositivos de la interfaz de red"
      }
    ],
    "objectives": [
      {
        "id": "ran_nmcli_device",
        "text": "Ejecute el comando \"nmcli device\" o \"nmcli dev\""
      }
    ],
    "hints": [
      "Utilice el dispositivo nmcli para enumerar los estados de la interfaz.",
      "Intente ejecutar: dispositivo nmcli"
    ]
  },
  "75": {
    "title": "Estadísticas de conexión y socket (netstat & ss)",
    "description": "Al configurar una base de datos o un servidor web, debe verificar que el servicio se esté ejecutando y escuchando en el puerto correcto, y verificar si se han establecido conexiones no autorizadas. Hacemos esto usando `netstat` o `ss`.\n\n- El comando `netstat` (estadísticas de red) es una herramienta clásica para mostrar conexiones TCP y puertos de escucha. P.ej. `netstat -tuln` enumera los puertos de escucha TCP/UDP.\n- El comando `ss` (estadísticas de sockets) es la alternativa moderna y más rápida a `netstat` que muestra detalles de conexión de sockets directamente desde el espacio de nombres del kernel.",
    "instructions": "Auditemos los puertos. Verifique los sockets TCP/UDP de escucha ejecutando `netstat -tuln` y luego verifíquelos usando el comando moderno de estadísticas de sockets `ss -tuln`.",
    "commandHelp": [
      {
        "cmd": "netstat -tuln",
        "desc": "Mostrar puertos TCP/UDP de escucha usando netstat"
      },
      {
        "cmd": "ss -tuln",
        "desc": "Mostrar sockets de escucha usando ss"
      }
    ],
    "objectives": [
      {
        "id": "ran_netstat",
        "text": "Ejecute \"netstat -tuln\""
      },
      {
        "id": "ran_ss",
        "text": "Ejecute \"ss -tuln\""
      }
    ],
    "hints": [
      "Ejecute netstat -tuln primero, seguido de ss -tuln.",
      "Intente ejecutar: netstat -tuln y luego ss -tuln"
    ]
  },
  "76": {
    "title": "Seguimiento de rutas de paquetes (traceroute)",
    "description": "Cuando una página web no se carga, ¿cómo identifica si el problema está en el enrutador de su hogar, su proveedor de servicios de Internet (ISP) o el servidor de destino? En Linux, rastreamos paquetes usando `traceroute`.\n\n- El comando `traceroute` enumera cada puerta de enlace (salto) del enrutador que atraviesa un paquete en su camino hacia un servidor remoto, junto con la latencia de respuesta para cada salto.",
    "instructions": "Sigamos el camino hasta un servidor web. Ejecute `traceroute google.com` para ver los saltos.",
    "commandHelp": [
      {
        "cmd": "traceroute google.com",
        "desc": "La red de seguimiento salta a google.com"
      }
    ],
    "objectives": [
      {
        "id": "ran_traceroute",
        "text": "Ejecute el comando \"traceroute\""
      }
    ],
    "hints": [
      "Utilice traceroute seguido de un nombre de dominio como google.com.",
      "Intente ejecutar: traceroute google.com"
    ]
  },
  "77": {
    "title": "Firewalls de Linux (ufw e iptables)",
    "description": "Imagínese vivir en un edificio de apartamentos seguro donde un guardia de seguridad se encuentra en la entrada verificando las identificaciones y bloqueando a los visitantes no autorizados. En Linux, un **firewall** actúa como guardia de seguridad para sus puertos de red.\n\n- El comando `ufw` (Firewall sin complicaciones) es una interfaz fácil de usar para administrar reglas de firewall. La ejecución de `sudo ufw status` muestra si el firewall está activo y qué puertos (como el puerto 22 para SSH o el puerto 80 para servidores web) están abiertos.\n- El comando `iptables` es la herramienta Netfilter tradicional de bajo nivel que en realidad bloquea o redirige paquetes. La ejecución de `sudo iptables -L` enumera las cadenas de seguridad activas y las reglas de coincidencia de paquetes.",
    "instructions": "Inspeccionemos a nuestros guardias de seguridad. Vea el estado del firewall sencillo ejecutando `sudo ufw status` y luego verifique las reglas de Netfilter de nivel inferior ejecutando `sudo iptables -L`.",
    "commandHelp": [
      {
        "cmd": "sudo ufw status",
        "desc": "Mostrar reglas de firewall ufw"
      },
      {
        "cmd": "sudo iptables -L",
        "desc": "Listar reglas activas de filtrado de paquetes de iptables"
      }
    ],
    "objectives": [
      {
        "id": "checked_ufw",
        "text": "Ejecute el comando \"ufw status\" con sudo"
      },
      {
        "id": "checked_iptables",
        "text": "Ejecute el comando \"iptables -L\" con sudo"
      }
    ],
    "hints": [
      "Utilice sudo ufw status para inspeccionar el firewall sin complicaciones.",
      "Utilice sudo iptables -L para comprobar las reglas de Netfilter.",
      "Intente ejecutar: sudo ufw status y luego sudo iptables -L"
    ]
  },
  "78": {
    "title": "Amabilidad del proceso (nice & renice)",
    "description": "En una oficina ocupada, algunas tareas de baja prioridad (como presentar recibos) pueden esperar, mientras que las solicitudes de alta prioridad deben manejarse de inmediato. Linux gestiona la prioridad del proceso utilizando valores de **amabilidad** que van desde -20 (prioridad más alta) a 19 (prioridad más baja).\n\n- El comando `nice` inicia un proceso con una prioridad personalizada. P.ej. `nice -n 10 sleep 5` inicia un comando de suspensión con una prioridad educada de 10.\n- El comando `renice` altera la prioridad de programación de un proceso que ya se está ejecutando. Por ejemplo, `sudo renice +5 9999` reduce la prioridad del proceso 9999.",
    "instructions": "Ajustemos las prioridades. Ejecute un comando de baja prioridad usando `nice -n 10 sleep 5`. Luego, reduzca la prioridad del proceso no autorizado 9999 ejecutando `sudo renice +5 9999`.",
    "commandHelp": [
      {
        "cmd": "nice -n 10 sleep 5",
        "desc": "Inicie el sueño con un valor de bondad de 10"
      },
      {
        "cmd": "sudo renice +5 9999",
        "desc": "Menor prioridad de PID 9999"
      }
    ],
    "objectives": [
      {
        "id": "used_nice",
        "text": "Ejecute el comando \"nice\" con -n 10"
      },
      {
        "id": "used_renice",
        "text": "Ejecute el comando \"renice\" con sudo"
      }
    ],
    "hints": [
      "Use nice -n 10 sleep 5 para iniciar un proceso agradable.",
      "Modifique la prioridad del PID activo usando sudo renice +5 9999.",
      "Intente ejecutar: nice -n 10 sleep 5 y sudo renice +5 9999"
    ]
  },
  "79": {
    "title": "Reanudación de trabajos en segundo plano (bg)",
    "description": "Ya vimos cómo iniciar una tarea en segundo plano usando `&` y recuperarla usando `fg`. Pero, ¿qué pasa si inicia un comando sin `&` o lo suspende con `Ctrl+Z`? ¡Puedes reanudarlo en segundo plano usando `bg`!\n\n- El comando `bg` reanuda los trabajos suspendidos, permitiéndoles ejecutarse en segundo plano sin bloquear el indicador de terminal.",
    "instructions": "Ejecutemos un trabajo en segundo plano. Inicie `sleep 200 &` en segundo plano, ejecute `jobs` para enumerar los trabajos activos y luego ejecute `bg` para asegurarse de que se reanude la ejecución.",
    "commandHelp": [
      {
        "cmd": "sleep 200 &",
        "desc": "Iniciar proceso en segundo plano"
      },
      {
        "cmd": "jobs",
        "desc": "Listar trabajos en segundo plano activos"
      },
      {
        "cmd": "bg",
        "desc": "Reanudar trabajos en segundo plano"
      }
    ],
    "objectives": [
      {
        "id": "ran_sleep_bg",
        "text": "Iniciar un comando de suspensión con &"
      },
      {
        "id": "ran_jobs",
        "text": "Ejecutar el comando \"jobs\""
      },
      {
        "id": "ran_bg",
        "text": "Ejecutar el comando \"bg\""
      }
    ],
    "hints": [
      "Ejecutar suspensión 200 & seguido de trabajos y finalmente bg."
    ]
  },
  "80": {
    "title": "Estadísticas de E/S y CPU (iostat)",
    "description": "Cuando una base de datos o una aplicación web se ejecuta lentamente, ¿cómo se determina si el problema es un cuello de botella de la CPU o un disco duro lento? En Linux, monitoreamos las métricas de rendimiento de entrada/salida del sistema usando `iostat`.\n\n- El comando `iostat` muestra estadísticas de informes sobre el uso de la CPU y el rendimiento de lectura/escritura del dispositivo activo, lo que le ayuda a identificar la congestión del disco.",
    "instructions": "Revisemos los registros de rendimiento. Ejecute el comando `iostat` para imprimir estadísticas de E/S.",
    "commandHelp": [
      {
        "cmd": "iostat",
        "desc": "Mostrar estadísticas de entrada/salida"
      }
    ],
    "objectives": [
      {
        "id": "ran_iostat",
        "text": "Ejecute el comando \"iostat\""
      }
    ],
    "hints": [
      "Escriba iostat en la terminal y presione Enter.",
      "Intente ejecutar: iostat"
    ]
  },
  "81": {
    "title": "Búsqueda de paquetes (búsqueda apta)",
    "description": "Antes de instalar software en Linux, ¿cómo descubre qué paquetes están disponibles en el repositorio? En Linux, usamos `apt search` para consultar el catálogo de software por palabra clave.\n\n- El comando `apt search <keyword>` escanea las descripciones del repositorio y enumera los paquetes de software coincidentes junto con sus versiones.\n- A diferencia de `apt install`, la búsqueda en repositorios de paquetes solo lee archivos de índice del catálogo local y **no** requiere privilegios de superusuario (`sudo`).",
    "instructions": "¡Busquemos en el repositorio de paquetes! Ejecute `apt search tree` para buscar paquetes relacionados con la visualización de directorios en el catálogo de software.",
    "commandHelp": [
      {
        "cmd": "apt search tree",
        "desc": "Busque en los repositorios de paquetes paquetes que coincidan con \"árbol\""
      }
    ],
    "objectives": [
      {
        "id": "ran_apt_search",
        "text": "Ejecute \"árbol de búsqueda apt\" para consultar el catálogo de paquetes"
      }
    ],
    "hints": [
      "Utilice el comando de búsqueda apt seguido del nombre o palabra clave del paquete que desea buscar.",
      "Ejecute el árbol de búsqueda de apt para ver los paquetes disponibles en el repositorio.",
      "Intente ejecutar: árbol de búsqueda apto"
    ]
  },
  "82": {
    "title": "Purga de paquetes (apt purge)",
    "description": "Al desinstalar software en Linux, el estándar `apt remove` desinstala los archivos binarios de la aplicación, pero deja los archivos de configuración del sistema en caso de que los reinstale más adelante. Para eliminar completamente un paquete de software Y borrar todos los archivos de configuración asociados, usamos `apt purge` (o `apt remove --purge`).\n\n- El comando `sudo apt purge <package>` elimina la aplicación y borra todos los archivos de configuración restantes.\n- Debido a que la purga modifica carpetas y archivos de configuración de todo el sistema, requiere privilegios de superusuario (`sudo`).",
    "instructions": "Eliminemos completamente un paquete y sus archivos de configuración. Ejecute `sudo apt purge tree` para eliminar el programa `tree` del sistema.",
    "commandHelp": [
      {
        "cmd": "sudo apt purge tree",
        "desc": "Purgue el paquete y borre sus archivos de configuración"
      }
    ],
    "objectives": [
      {
        "id": "purged_tree",
        "text": "Purgue el \"árbol\" del paquete usando \"sudo apt purge tree\""
      }
    ],
    "hints": [
      "Utilice apt purge con privilegios de superusuario para eliminar completamente un paquete junto con sus archivos de configuración.",
      "Ejecute sudo apt purge tree para purgar el paquete del árbol.",
      "Intente ejecutar: sudo apt purge tree"
    ]
  },
  "83": {
    "title": "Estructura de directorios de Linux y FHS",
    "description": "Cada sistema Linux sigue una jerarquía de sistema de archivos estándar que comienza desde el directorio raíz `/`. A diferencia de Windows (que usa letras de unidad como `C:` o `D:`), Linux unifica todos los archivos y el almacenamiento en `/`.\n\nAquí hay directorios clave del sistema que todo usuario de Linux debería conocer:\n- `/` (Raíz): La carpeta principal de nivel superior de todo el sistema.\n- `/etc`: Contiene configuraciones del sistema (por ejemplo, `/etc/hosts`, `/etc/passwd`).\n- `/var`: contiene datos variables que cambian con el tiempo (registros, spool, cachés como `/var/log`).\n- `/home`: Carpetas personales del usuario (por ejemplo, `/home/learner`).\n- `/tmp`: Área de almacenamiento temporal para archivos transitorios.\n- `/usr`: Utilidades de usuario, aplicaciones y bibliotecas del sistema.",
    "instructions": "¡Exploremos el diseño del sistema! Primero, navegue hasta el directorio raíz ejecutando `cd /`. Luego ejecute `ls /etc` para ver los archivos de configuración del sistema almacenados dentro de `/etc`.",
    "commandHelp": [
      {
        "cmd": "cd /",
        "desc": "Navegar al directorio raíz"
      },
      {
        "cmd": "ls /etc",
        "desc": "Listar los archivos de configuración en /etc"
      }
    ],
    "objectives": [
      {
        "id": "visited_root",
        "text": "Navegar al directorio raíz (/)"
      },
      {
        "id": "listed_etc",
        "text": "Listar el contenido del directorio /etc"
      }
    ],
    "hints": [
      "Utilice 'cd /' para saltar al directorio raíz.",
      "Utilice 'ls /etc' para ver los archivos de configuración dentro de /etc.",
      "Intente ejecutar: cd / y luego: ls /etc"
    ]
  }
};
