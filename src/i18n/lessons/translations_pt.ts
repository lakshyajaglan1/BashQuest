import type { LessonTranslation } from "./types";

export const translations_pt: Record<number, LessonTranslation> = {
  "1": {
    "title": "Quem sou eu e onde estou?",
    "description": "Imagine entrar em uma biblioteca enorme e escura com milhões de livros, mas você não tem nenhum mapa e nem consegue se lembrar do seu próprio crachá. Antes de pesquisar qualquer coisa, você precisa saber quem você é e onde está. No shell do Linux, começamos exatamente com as mesmas perguntas!\n\n- O comando `whoami` imprime o nome de usuário com o qual você está conectado no momento.\n- O comando `pwd` (imprimir diretório de trabalho) funciona como um GPS, mostrando o caminho exato da pasta onde você está atualmente.",
    "instructions": "Vamos nos orientar! Primeiro, execute `whoami` para ver seu nome de usuário ativo e, em seguida, execute `pwd` para imprimir a localização da pasta atual no sistema de arquivos.",
    "commandHelp": [
      {
        "cmd": "whoami",
        "desc": "Imprime o nome de usuário ativo"
      },
      {
        "cmd": "pwd",
        "desc": "Imprime o diretório de trabalho atual"
      }
    ],
    "objectives": [
      {
        "id": "ran_whoami",
        "text": "Execute o comando \"whoami\""
      },
      {
        "id": "ran_pwd",
        "text": "Execute o comando \"pwd\""
      }
    ],
    "hints": [
      "Verifique quais comandos você precisa executar para identificar seu usuário e caminho.",
      "O comando 'whoami' mostra seu nome de usuário e 'pwd' mostra seu caminho atual.",
      "Tente executar: whoami e depois pwd"
    ]
  },
  "2": {
    "title": "Navegando e listando arquivos",
    "description": "Agora que você sabe onde está, como olhar ao redor e ir para uma sala diferente nesta biblioteca digital? No Linux, fazemos isso usando dois comandos simples:\n\n- `ls`: É como acender as luzes de uma sala para ver todos os arquivos e pastas dentro dela.\n- `cd <path>`: Abreviação de \"alterar diretório\", permite que você passe por uma porta para outra pasta.\n\nPara especificar onde você deseja ir, você pode usar caminhos **absolutos** (começando na raiz `/` do sistema, como `/var/log`) ou caminhos **relativos** (com base em onde você está agora, como usar `..` para voltar para a pasta pai).",
    "instructions": "Vamos explorar. Entre na pasta `/var/log` executando `cd /var/log` e, em seguida, execute o comando `ls` para ver os arquivos de log armazenados nela.",
    "commandHelp": [
      {
        "cmd": "ls",
        "desc": "Lista os arquivos no diretório atual"
      },
      {
        "cmd": "cd /var/log",
        "desc": "Muda o diretório para /var/log"
      }
    ],
    "objectives": [
      {
        "id": "in_var_log",
        "text": "Muda o diretório para /var/log"
      },
      {
        "id": "ran_ls",
        "text": "Execute o comando \"ls\" em /var/log"
      }
    ],
    "hints": [
      "Pense em como navegar e listar arquivos em um diretório específico.",
      "Mude o diretório para /var/log usando cd e depois use ls.",
      "Tente executar: cd /var/log e depois ls"
    ]
  },
  "3": {
    "title": "Criando diretórios",
    "description": "Imagine que sua mesa está cheia de papéis soltos e você precisa de pastas físicas para manter as coisas organizadas. No Linux, organizamos arquivos criando pastas (diretórios) usando o comando `mkdir` (criar diretório).\n\nA execução de `mkdir code` cria uma pasta totalmente nova chamada \"código\" exatamente onde você está. Você pode criar pastas em qualquer lugar do sistema de arquivos fornecendo ao `mkdir` um caminho relativo ou absoluto.",
    "instructions": "Vamos construir um espaço de trabalho. Volte para o seu diretório inicial executando `cd ~` (ou `cd /home/learner`) e crie uma nova pasta chamada `projects` dentro dele.",
    "commandHelp": [
      {
        "cmd": "cd ~",
        "desc": "Volte para o diretório inicial"
      },
      {
        "cmd": "mkdir projects",
        "desc": "Crie a pasta de projetos"
      }
    ],
    "objectives": [
      {
        "id": "in_home",
        "text": "Esteja em sua pasta pessoal (/home/learner)"
      },
      {
        "id": "used_mkdir",
        "text": "Use o comando \"mkdir\""
      },
      {
        "id": "dir_exists",
        "text": "Crie um diretório chamado \"projetos\""
      }
    ],
    "hints": [
      "Certifique-se de estar no diretório inicial correto primeiro.",
      "Vá para seu diretório inicial (~ ou /home/learner) e use o comando mkdir.",
      "Tente executar: cd ~ seguido por projetos mkdir"
    ]
  },
  "4": {
    "title": "Diretórios e opções aninhados",
    "description": "Imagine tentar construir um conjunto de bonecos aninhados, mas você precisa construir os mais externos antes de poder construir o minúsculo que está dentro. Por padrão, `mkdir` é assim – ele se recusa a criar uma pasta dentro de pastas que ainda não existem. Para evitar o incômodo de criar pastas uma por uma, usamos uma opção:\n\n- A opção `-p` (ou `--parents`) diz ao `mkdir` para construir automaticamente quaisquer pastas pai ausentes no caminho para a pasta final. Por exemplo, `mkdir -p workspace/src/utils` cria `workspace`, `workspace/src` e `workspace/src/utils`, tudo em um único comando.\n\n**Por que isso é importante**: se você executar `mkdir workspace/src/utils` sem `-p` e `workspace` e `workspace/src` ainda não existirem, você obterá: `mkdir: cannot create directory 'workspace/src/utils': No such file or directory`. O sinalizador `-p` corrige isso criando automaticamente todas as pastas pai ausentes.",
    "instructions": "Vamos construir uma estrutura de pastas profunda. Crie um caminho aninhado `workspace/src/utils` em sua pasta pessoal usando `mkdir -p workspace/src/utils`.",
    "commandHelp": [
      {
        "cmd": "mkdir -p path",
        "desc": "Criar diretórios aninhados e diretórios pai"
      }
    ],
    "objectives": [
      {
        "id": "nested_dir_exists",
        "text": "Criar diretório aninhado workspace/src/utils"
      },
      {
        "id": "used_p_switch",
        "text": "Use a opção -p ou --parents em mkdir"
      }
    ],
    "hints": [
      "Procure um sinalizador mkdir que crie diretórios pai automaticamente se eles não existirem.",
      "Use mkdir com a opção -p para criar pastas aninhadas.",
      "Tente executar: mkdir -p workspace/src/utils"
    ]
  },
  "5": {
    "title": "Limpando a tela",
    "description": "Você já ficou sobrecarregado quando sua mesa está coberta de anotações e papéis bagunçados? Seu terminal pode ficar igualmente confuso. Quando isso acontecer, você pode varrer todo o texto antigo e começar do zero.\n\n- O comando `clear` limpa a tela visível, deslizando a saída anterior para fora da vista para que você tenha uma tela em branco na parte superior do terminal.",
    "instructions": "Dê a si mesmo algum espaço para respirar! Execute `clear` para limpar a tela.",
    "commandHelp": [
      {
        "cmd": "clear",
        "desc": "Limpe a tela do terminal"
      }
    ],
    "objectives": [
      {
        "id": "ran_clear",
        "text": "Execute o comando \"clear\""
      }
    ],
    "hints": [
      "Remova todo o texto antigo e comece do zero.",
      "Execute o comando que limpa a tela do terminal.",
      "Tente executar: limpar"
    ]
  },
  "6": {
    "title": "Encontrando ajuda do Shell",
    "description": "Quando você compra um novo jogo de tabuleiro, geralmente dá uma olhada no livro de regras ou no cartão de referência para ver quais movimentos são permitidos. Em nosso emulador de terminal, você tem uma folha de dicas integrada!\n\n- O comando `help` lista todos os comandos que este simulador suporta, juntamente com detalhes sobre se ele suporta tubulação ou redirecionamento de saídas.",
    "instructions": "Vamos inspecionar o livro de regras. Execute `help` para ver a lista completa de comandos com os quais você pode brincar.",
    "commandHelp": [
      {
        "cmd": "help",
        "desc": "Lista os comandos disponíveis"
      }
    ],
    "objectives": [
      {
        "id": "ran_help",
        "text": "Execute o comando \"help\""
      }
    ],
    "hints": [
      "Revise as instruções para localizar o comando apropriado para a ajuda do livro de regras.",
      "Use o comando 'ajuda'.",
      "Tente executar: ajuda"
    ]
  },
  "7": {
    "title": "Criando arquivos vazios",
    "description": "Imagine querer começar a escrever um novo lançamento no diário, mas primeiro você precisa de um pedaço de papel em branco. No Linux, pegamos um arquivo de texto novo e vazio usando o comando `touch`.\n\n- O comando `touch` cria um arquivo totalmente novo e vazio se ele ainda não existir (como executar `touch draft.txt` para criar `draft.txt`). Se o arquivo já existir, ele simplesmente atualiza o carimbo de data/hora da \"última modificação\" do arquivo sem alterar seu conteúdo. Vamos colocar um arquivo em nossa nova pasta de projetos.",
    "instructions": "Vamos criar uma tela em branco. Crie um arquivo vazio chamado `task.txt` dentro da pasta `projects` (insira a pasta primeiro ou use `touch projects/task.txt`).",
    "commandHelp": [
      {
        "cmd": "cd projects",
        "desc": "Entre na pasta de projetos"
      },
      {
        "cmd": "touch task.txt",
        "desc": "Crie o arquivo task.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_touch",
        "text": "Use o comando \"touch\""
      },
      {
        "id": "file_exists",
        "text": "Crie o arquivo \"task.txt\" dentro de \"projetos\""
      }
    ],
    "hints": [
      "Pense em qual comando cria um novo arquivo vazio.",
      "Use o comando 'touch' dentro do diretório 'projects'.",
      "Tente executar: touch projects/task.txt"
    ]
  },
  "8": {
    "title": "Lendo o conteúdo do arquivo",
    "description": "Pense em abrir uma pasta, retirar uma página de texto e segurá-la para ler. No Linux, lemos arquivos instantaneamente sem abrir um editor de texto pesado usando o comando `cat` (concatenar).\n\n- O comando `cat` imprime todo o conteúdo de um arquivo diretamente na tela do seu terminal. Por exemplo, executar `cat notes.txt` permite ver imediatamente o que está escrito dentro de `notes.txt`.",
    "instructions": "Vamos ler um arquivo de sistema. Imprima o conteúdo do arquivo de configuração da rede local em `/etc/hosts` executando `cat /etc/hosts`.",
    "commandHelp": [
      {
        "cmd": "cat /etc/hosts",
        "desc": "Imprime o conteúdo do arquivo hosts"
      }
    ],
    "objectives": [
      {
        "id": "cat_hosts",
        "text": "Execute o comando \"cat\" em /etc/hosts"
      }
    ],
    "hints": [
      "Pense em qual comando gera/exibe o conteúdo de um arquivo.",
      "Use o comando 'cat' no arquivo /etc/hosts.",
      "Tente executar: cat /etc/hosts"
    ]
  },
  "9": {
    "title": "Manipulando espaços em nomes de arquivos",
    "description": "Se você disser a um robô para \"pintar meu quarto de azul\", ele precisará saber se \"meu quarto\" é um único lugar ou se \"meu\" e \"quarto\" são duas instruções diferentes. O Linux usa espaços para separar comandos de seus argumentos. Portanto, se você executar `mkdir my folder`, o Linux pensará que você deseja criar duas pastas separadas: uma chamada “my” e outra chamada “folder”!\n\n- Para dizer ao Linux que um nome com espaços é um item único, devemos colocá-lo entre aspas (`\"my folder\"` ou `'my folder'`) ou usar uma barra invertida para escapar do espaço (`my\\ folder`).",
    "instructions": "Vamos tratar nomes com espaços. Crie uma pasta chamada `\"my code\"` em seu diretório inicial e, a seguir, crie um arquivo vazio chamado `\"my task\"` dentro dela.",
    "commandHelp": [
      {
        "cmd": "mkdir \"my code\"",
        "desc": "Crie uma pasta com um espaço no nome"
      },
      {
        "cmd": "touch \"my code/my task\"",
        "desc": "Crie um arquivo com um espaço no nome"
      }
    ],
    "objectives": [
      {
        "id": "dir_with_space_exists",
        "text": "Crie o diretório \"meu código\""
      },
      {
        "id": "file_with_space_exists",
        "text": "Crie o arquivo \"minha tarefa\" dentro de \"meu código\""
      }
    ],
    "hints": [
      "Ao criar arquivos ou diretórios com espaços em seus nomes, coloque o nome entre aspas.",
      "Use mkdir \"meu código\" seguido de toque em \"meu código/minha tarefa\".",
      "Tente executar: mkdir \"meu código\" e toque em \"meu código/minha tarefa\""
    ]
  },
  "10": {
    "title": "Escrevendo e sobrescrevendo arquivos",
    "description": "Se você quiser escrever uma mensagem em um quadro-negro, primeiro limpe o quadro completamente e depois escreva suas novas palavras. No Linux, escrevemos mensagens em arquivos usando o operador `>` (redirecionamento de saída).\n\n- O comando `echo \"message\"` normalmente imprime texto na tela.\n- Ao adicionar o símbolo `>`, redirecionamos esse texto para um arquivo. Por exemplo, `echo \"Hi\" > greeting.txt` escreve \"Oi\" em `greeting.txt`. Se o arquivo já contiver texto, `>` o substituirá completamente pela nova mensagem.",
    "instructions": "Vamos escrever em um novo arquivo. Salve o texto “System Online” em um arquivo chamado `status.txt` em sua pasta pessoal `/home/learner`.",
    "commandHelp": [
      {
        "cmd": "echo \"System Online\" > status.txt",
        "desc": "Criar status.txt com texto"
      }
    ],
    "objectives": [
      {
        "id": "used_echo_redirect",
        "text": "Usar echo com > redirecionamento"
      },
      {
        "id": "file_created",
        "text": "Criar \"status.txt\" no diretório inicial"
      },
      {
        "id": "content_correct",
        "text": "O conteúdo do arquivo é exatamente \"System Online\""
      }
    ],
    "hints": [
      "Para escrever texto em um arquivo, você pode redirecionar a saída do comando echo.",
      "Use o operador '>' para redirecionar echo \"System Online\" para status.txt.",
      "Tente executar: echo \"System Online\" > status.txt"
    ]
  },
  "11": {
    "title": "Anexando aos arquivos",
    "description": "Em vez de limpar o quadro-negro, e se você quiser apenas adicionar uma nova linha na parte inferior? No Linux, adicionamos texto ao final de um arquivo sem tocar no conteúdo existente usando o operador `>>` (redirecionamento de acréscimo).\n\n- O operador `>>` anexa seu novo texto no final do arquivo. Por exemplo, `echo \"New Line\" >> logs.txt` adiciona \"Nova linha\" ao final de `logs.txt` enquanto mantém todos os seus logs antigos seguros.",
    "instructions": "Vamos adicionar uma linha. Anexe o texto \"Todas as verificações em verde\" na parte inferior do seu arquivo `status.txt` dentro de sua pasta pessoal `/home/learner` e, em seguida, execute `cat` nele para ver as duas linhas.",
    "commandHelp": [
      {
        "cmd": "echo \"All Checks Green\" >> status.txt",
        "desc": "Anexar texto ao status.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_append",
        "text": "Use echo com >> redirecionamento de acréscimo"
      },
      {
        "id": "has_first_line",
        "text": "A primeira linha ainda é \"System Online\""
      },
      {
        "id": "has_second_line",
        "text": "A segunda linha tem \"Todas as verificações verdes\""
      },
      {
        "id": "used_cat",
        "text": "Verifique o resultado usando o comando \"cat\""
      }
    ],
    "hints": [
      "Use o redirecionamento de acréscimo para não substituir o conteúdo do arquivo existente.",
      "Use o operador '>>' para acrescentar texto e 'cat' para verificá-lo.",
      "Tente executar: echo \"All Checks Green\" >> status.txt e cat status.txt"
    ]
  },
  "12": {
    "title": "Copiando e movendo arquivos",
    "description": "Imagine reorganizar sua sala: às vezes você quer fazer uma fotocópia de um documento para guardar em outra gaveta, e outras vezes você só quer pegar uma pasta e colocá-la em uma nova prateleira ou mudar seu rótulo. Fazemos isso no Linux com comandos simples:\n\n- `cp <source> <destination>` cria uma duplicata idêntica de um arquivo em um novo local.\n- `mv <source> <destination>` move um arquivo para uma nova pasta ou renomeia o arquivo se você o mantiver na mesma pasta (por exemplo, `mv old.txt new.txt`).",
    "instructions": "Vamos renomear um arquivo. Altere o nome de `status.txt` em sua pasta pessoal para `system.log` usando o comando `mv`.",
    "commandHelp": [
      {
        "cmd": "mv status.txt system.log",
        "desc": "Renomeie status.txt para system.log"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "Use o comando \"mv\" para renomear"
      },
      {
        "id": "old_removed",
        "text": "Status.txt original foi excluído/renomeado"
      },
      {
        "id": "new_created",
        "text": "Novo arquivo system.log existe com conteúdo correto"
      }
    ],
    "hints": [
      "Pense em qual comando renomeia ou move um arquivo.",
      "Use o comando 'mv' para renomear status.txt para system.log.",
      "Tente executar: mv status.txt system.log"
    ]
  },
  "13": {
    "title": "Curingas e operações com vários arquivos",
    "description": "Imagine que você tem uma pilha de pastas denominadas \"log_monday\", \"log_tuesday\" e \"log_wednesday\" e deseja abrir e ler todas elas de uma vez, sem digitar todos os nomes. O Linux permite que você use **curingas** como atalhos de pesquisa!\n\n- O símbolo `*` corresponde a qualquer caractere de qualquer comprimento. Por exemplo, `cat log_*` lê todos os arquivos que começam com “log_”.\n- O símbolo `?` atua como um espaço reservado de um único caractere. Por exemplo, `log_?.txt` corresponde a `log_1.txt` mas irá ignorar `log_12.txt`.",
    "instructions": "Vamos mesclar vários logs. Combine o conteúdo de todos os arquivos começando com `log_` em seu diretório inicial em um único arquivo chamado `combined.log` usando o curinga `*` e o redirecionamento `>`.",
    "commandHelp": [
      {
        "cmd": "cat log_* > combined.log",
        "desc": "Combine todos os arquivos correspondentes em combinado.log"
      }
    ],
    "objectives": [
      {
        "id": "used_wildcard",
        "text": "Use cat com padrão curinga (log_*)"
      },
      {
        "id": "combined_exists",
        "text": "Crie \"combined.log\" no diretório inicial"
      },
      {
        "id": "content_combined",
        "text": "Verifique se há logs de log_1, log_2 e log_3"
      }
    ],
    "hints": [
      "Pense em como usar curingas para combinar vários arquivos começando com log_.",
      "Use cat log_* para ler todos os arquivos correspondentes e redirecionar a saída para combinado.log.",
      "Tente executar: cat log_* > combinado.log"
    ]
  },
  "14": {
    "title": "Removendo arquivos e pastas",
    "description": "Ao limpar sua mesa física, você pode jogar papéis velhos em uma lixeira, onde poderá recuperá-los caso cometa um erro. No Linux, não há rede de segurança – quando você exclui algo do terminal, ele desaparece para sempre!\n\n- O comando `rm` exclui arquivos.\n- Como as pastas podem conter outros arquivos, `rm` não excluirá uma pasta por padrão. Você deve adicionar o sinalizador `-r` (recursivo) para dizer ao Linux para mergulhar e excluir a pasta junto com tudo dentro dela.\n\n**Por que isso é importante**: Se você executar `rm downloads` sem `-r` quando `downloads` for uma pasta, você obterá: `rm: cannot remove 'downloads': Is a directory`. O sinalizador `-r` diz ao Linux para excluir recursivamente a pasta e tudo dentro dela.",
    "instructions": "Vamos limpar nosso diretório inicial. Exclua permanentemente a pasta `downloads` e todo o seu conteúdo executando `rm -r downloads`.",
    "commandHelp": [
      {
        "cmd": "rm -r downloads",
        "desc": "Excluir pasta recursivamente"
      }
    ],
    "objectives": [
      {
        "id": "used_rm",
        "text": "Use o comando \"rm\" com o sinalizador -r"
      },
      {
        "id": "downloads_removed",
        "text": "O diretório /home/learner/downloads foi excluído"
      }
    ],
    "hints": [
      "Pense em qual comando remove um arquivo ou diretório recursivamente.",
      "Use o comando 'rm' com a opção recursiva (-r).",
      "Tente executar: rm -r downloads"
    ]
  },
  "15": {
    "title": "Introdução a tubos e banheiros",
    "description": "Imagine uma linha de montagem onde um trabalhador embala um produto e imediatamente o entrega ao próximo trabalhador para embalá-lo em uma caixa – sem necessidade de armazenamento intermediário. No Linux, conectamos comandos exatamente assim usando um **pipe** (`|`).\n\n- Um canal (`|`) roteia a saída de um comando diretamente para a entrada do próximo comando. Por exemplo, `ls | wc -l` lista arquivos e imediatamente entrega essa lista para `wc -l` (contagem de palavras - linhas), que os conta dinamicamente sem a necessidade de arquivos temporários.\n\n**Por que isso é importante**: Se você executar `wc` sem `-l`, ele gerará três números separados: linhas, palavras e bytes (por exemplo, `  5  10  85`). Isso dificulta o uso em pipelines ou scripts que precisam de uma contagem limpa e de um único número. O sinalizador `-l` limita a saída apenas à contagem de linhas.",
    "instructions": "Vamos conectar alguns comandos. Conte os arquivos em `/home/learner` usando um pipe (`ls | wc -l`) e grave a contagem final em um arquivo chamado `file_count.txt` usando o redirecionamento `>`.",
    "commandHelp": [
      {
        "cmd": "ls | wc -l",
        "desc": "Conta arquivos e pastas no diretório atual"
      },
      {
        "cmd": "ls | wc -l > file_count.txt",
        "desc": "Grava a contagem de arquivos em file_count.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_pipe",
        "text": "Use pipe (|) para conectar ls com wc"
      },
      {
        "id": "file_count_exists",
        "text": "Crie o arquivo \"file_count.txt\" no diretório inicial"
      },
      {
        "id": "count_is_correct",
        "text": "Verifique se o arquivo contém a contagem numérica correta de arquivos"
      }
    ],
    "hints": [
      "Pense em como redirecionar a saída de um comando para outro usando um pipe.",
      "Canalize a saída de ls para wc -l e redirecione o resultado para file_count.txt.",
      "Tente executar: ls | wc -l > file_count.txt"
    ]
  },
  "16": {
    "title": "Classificando e encontrando itens únicos",
    "description": "Imagine classificar um baralho de cartas onde as duplicatas estão espalhadas por toda parte. Para localizar e remover facilmente duplicatas, primeiro agrupe os cartões idênticos. No Linux, o comando `uniq` filtra linhas repetidas, mas tem um problema: ele **detecta apenas duplicatas que estão próximas umas das outras**!\n\n- Para remover todas as duplicatas de uma lista confusa, você deve primeiro ordenar as linhas usando `sort` e depois passar o resultado para `uniq`. Por exemplo, `sort raw.txt | uniq` organiza e limpa a lista de uma só vez.",
    "instructions": "Vamos limpar uma lista de convidados bagunçada. O arquivo `names.txt` contém nomes duplicados. Conecte `sort` e `uniq` com um pipe para encontrar todos os nomes exclusivos em ordem alfabética e salve-os em `unique_names.txt`.",
    "commandHelp": [
      {
        "cmd": "sort names.txt",
        "desc": "Classifique as linhas de nomes.txt em ordem alfabética"
      },
      {
        "cmd": "sort names.txt | uniq > unique_names.txt",
        "desc": "Classifique e filtre duplicatas em um arquivo"
      }
    ],
    "objectives": [
      {
        "id": "used_sort",
        "text": "Use o comando \"sort\" em nomes.txt"
      },
      {
        "id": "used_uniq",
        "text": "Canalize a saída classificada para o comando \"uniq\""
      },
      {
        "id": "unique_names_exists",
        "text": "Crie o arquivo \"unique_names.txt\""
      },
      {
        "id": "sorted_and_unique",
        "text": "Verifique se o conteúdo tem nomes classificados exclusivos"
      }
    ],
    "hints": [
      "Você precisa classificar os nomes em ordem alfabética primeiro e, em seguida, filtrar as duplicatas.",
      "Canalize a saída de sortnames.txt para uniq e redirecione-a para unique_names.txt.",
      "Tente executar: sortnames.txt | uniq > nomes_exclusivos.txt"
    ]
  },
  "17": {
    "title": "Filtrando com grep",
    "description": "Imagine examinar um enorme diário de bordo de mil páginas para descobrir sempre que ocorreu um erro no sistema. Fazer isso manualmente levaria horas! No Linux, usamos `grep` como nossa lupa digital para pesquisar instantaneamente palavras ou padrões específicos.\n\n- O comando `grep` filtra arquivos ou texto canalizado, imprimindo apenas as linhas que correspondem à palavra pesquisada. Por exemplo, executar `grep \"ERROR\" logs.txt` verifica o arquivo e extrai apenas as linhas que contêm “ERROR”.",
    "instructions": "Vamos filtrar nossos logs. Pesquise em `logs.txt` todas as linhas que contêm `[ERROR]` e salve-as em um novo arquivo chamado `errors.log`.",
    "commandHelp": [
      {
        "cmd": "grep \"[ERROR]\" logs.txt",
        "desc": "Pesquise logs.txt por linhas contendo [ERROR]"
      },
      {
        "cmd": "grep \"[ERROR]\" logs.txt > errors.log",
        "desc": "Salve os erros correspondentes em erros.log"
      }
    ],
    "objectives": [
      {
        "id": "used_grep",
        "text": "Use o comando \"grep\" para pesquisar logs.txt"
      },
      {
        "id": "errors_log_exists",
        "text": "Crie o arquivo \"errors.log\" no diretório inicial"
      },
      {
        "id": "only_errors",
        "text": "Verifique se erros.log contém apenas entradas [ERROR]"
      }
    ],
    "hints": [
      "Pense em qual comando filtra as linhas que correspondem a um padrão específico.",
      "Use grep para pesquisar logs.txt por '[ERROR]' e redirecionar a saída para erros.log.",
      "Tente executar: grep \"[ERROR]\" logs.txt > erros.log"
    ]
  },
  "18": {
    "title": "Alterando permissões de arquivos",
    "description": "Imagine administrar uma empresa onde apenas os gerentes podem assinar cheques, os funcionários podem ler horários e os visitantes só podem olhar a placa da loja. No Linux, controlamos quem pode ler, escrever ou executar arquivos usando um sistema de segurança de números (chamado de representação octal):\n\n- `7` = Acesso total: Ler + Escrever + Executar (`rwx`)\n- `6` = Modificar acesso: Leitura + Gravação (`rw-`)\n- `5` = Acesso de leitura e execução: Leitura + Execução (`r-x`)\n- `4` = Acesso somente leitura: Leitura (`r--`)\n\nAplicamos essas configurações com `chmod <octal> <file>`. Por exemplo, `chmod 755 script.sh` permite executar o script, enquanto outros só podem lê-lo e executá-lo. Temos um script chamado `deploy.sh` que está atualmente bloqueado – vamos torná-lo executável!",
    "instructions": "Vamos alterar as permissões. O arquivo `deploy.sh` atualmente possui permissões restritas (644). Execute `chmod 755 deploy.sh` para torná-lo executável pelo proprietário e legível/executável por todos os outros.",
    "commandHelp": [
      {
        "cmd": "chmod 755 deploy.sh",
        "desc": "Definir permissões executáveis ​​"
      },
      {
        "cmd": "ls -l deploy.sh",
        "desc": "Verifique as permissões atuais do arquivo"
      }
    ],
    "objectives": [
      {
        "id": "used_chmod",
        "text": "Execute o comando \"chmod\" em deploy.sh"
      },
      {
        "id": "is_executable",
        "text": "Defina as permissões de deploy.sh para 755"
      }
    ],
    "hints": [
      "Pense em qual comando altera as permissões do arquivo.",
      "Use o comando 'chmod' com código de permissão 755 em deploy.sh.",
      "Tente executar: chmod 755 deploy.sh"
    ]
  },
  "19": {
    "title": "Arquivos e configurações ocultos",
    "description": "Pense em uma gaveta secreta embaixo da sua mesa, onde você guarda as configurações do sistema para que não sobrecarreguem seu espaço de trabalho principal. No Linux, criamos arquivos ocultos simplesmente iniciando seus nomes com um ponto (`.`).\n\n- Esses dotfiles (como `.bashrc` ou `.config`) armazenam preferências do usuário e configurações nos bastidores.\n- Um comando `ls` padrão não os mostrará. Para espiar esses arquivos ocultos, você deve adicionar o sinalizador `-a` (todos), executando `ls -a`.\n\n**Por que isso é importante**: Se você executar `ls` sem `-a`, os arquivos ocultos (cujos nomes começam com `.`) serão completamente omitidos da saída. Você não verá arquivos importantes como `.config_names` e poderá pensar que eles estão faltando. O sinalizador `-a` diz ao `ls` para listar todos os arquivos, incluindo os ocultos.",
    "instructions": "Vamos ocultar um arquivo! Renomeie `unique_names.txt` em sua pasta pessoal para um arquivo oculto chamado `.config_names` usando `mv` e, em seguida, revele-o executando `ls -a`.",
    "commandHelp": [
      {
        "cmd": "ls -a",
        "desc": "Lista todos os arquivos, incluindo arquivos ocultos"
      },
      {
        "cmd": "mv file .file",
        "desc": "Oculte um arquivo prefixando seu nome com um ponto"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "Use \"mv\" para renomear o arquivo"
      },
      {
        "id": "hidden_file_exists",
        "text": "Crie o arquivo oculto \".config_names\" na página inicial"
      },
      {
        "id": "old_file_removed",
        "text": "Verifique se o original unique_names.txt foi removido"
      },
      {
        "id": "used_ls_a",
        "text": "Use \"ls -a\" para verificar se o arquivo oculto está presente"
      }
    ],
    "hints": [
      "No Linux, os arquivos ocultos são prefixados com um ponto (.) e mostrados usando um sinalizador ls especial.",
      "Use mv unique_names.txt .config_names e execute ls -a para revelá-lo.",
      "Tente executar: mv unique_names.txt .config_names seguido por ls -a"
    ]
  },
  "20": {
    "title": "Alteração da propriedade do arquivo",
    "description": "Imagine comprar uma casa e ter que registrar oficialmente a escritura com o nome de um novo proprietário. No Linux, cada arquivo e pasta possui um proprietário oficial e um grupo. Se você precisar transferir a propriedade de um arquivo para outra pessoa (como o administrador do sistema), use o comando `chown` (alterar proprietário).\n\n- Como alterar o proprietário de um arquivo é uma ação de segurança confidencial, você deve prefixá-lo com `sudo` para executá-lo com privilégios administrativos. Por exemplo, `sudo chown root reports.csv` atribui o arquivo ao usuário \"root\".",
    "instructions": "Vamos transferir a propriedade. Altere o proprietário de `/home/learner/reports.csv` para o administrador `root` executando `sudo chown root reports.csv`.",
    "commandHelp": [
      {
        "cmd": "sudo chown root reports.csv",
        "desc": "Altere o proprietário do reports.csv para root"
      }
    ],
    "objectives": [
      {
        "id": "used_chown",
        "text": "Execute o comando \"chown\" com sudo"
      },
      {
        "id": "owner_changed",
        "text": "Defina o proprietário do reports.csv para root"
      }
    ],
    "hints": [
      "Pense em qual comando altera a propriedade do arquivo e lembre-se de que ele requer privilégios de administrador.",
      "Use o comando 'chown' prefixado com 'sudo' para alterar o proprietário para root.",
      "Tente executar: sudo chown root report.csv"
    ]
  },
  "21": {
    "title": "Privilégios de superusuário (sudo)",
    "description": "Imagine trabalhar em seu computador com uma conta padrão para evitar a exclusão acidental de arquivos críticos do sistema operacional. Quando você precisa instalar software ou modificar as configurações do sistema, seu computador solicita autorização de administrador. No Linux, usamos `sudo` (abreviação de “superuser do”) como nosso cartão-chave administrativo.\n\n- O usuário `root` é a conta de administrador mestre com controle total sobre o sistema.\n- Os usuários padrão são impedidos de ler arquivos confidenciais (como o banco de dados de senhas `/etc/shadow`). Ao digitar `sudo` antes de um comando, você o executa com poderes de administrador temporário para ignorar esses bloqueios.",
    "instructions": "Vamos testar os poderes do superusuário. Execute `cat /etc/shadow` para ver o erro de permissão. Em seguida, ignore-o executando o comando com privilégios de administrador: `sudo cat /etc/shadow`.",
    "commandHelp": [
      {
        "cmd": "sudo command",
        "desc": "Execute um comando com privilégios de administrador/superusuário"
      },
      {
        "cmd": "cat /etc/shadow",
        "desc": "Leia o banco de dados de hashes de senha (restrito)"
      }
    ],
    "objectives": [
      {
        "id": "tried_without_sudo",
        "text": "Tente \"cat /etc/shadow\" e observe o erro de permissão"
      },
      {
        "id": "ran_sudo_cat",
        "text": "Execute \"sudo cat /etc/shadow\" com sucesso"
      }
    ],
    "hints": [
      "Você precisa de privilégios de administrador para ler arquivos de sistema restritos.",
      "Primeiro execute cat /etc/shadow sem sudo para ver o erro e, em seguida, acrescente sudo.",
      "Tente executar: cat /etc/shadow e depois: sudo cat /etc/shadow"
    ]
  },
  "22": {
    "title": "Gerenciamento de Pacotes (apt)",
    "description": "Pense em instalar aplicativos no seu smartphone usando a App Store ou Google Play Store. É seguro, com curadoria e automatizado. No Linux, usamos uma loja de aplicativos de linha de comando chamada gerenciador de pacotes para buscar e instalar software com segurança.\n\n- Em sistemas Ubuntu/Debian, o gerenciador de pacotes padrão é `apt` (Advanced Packaging Tool).\n- A instalação do software altera as pastas de todo o sistema, portanto, você sempre precisa autorizá-lo usando `sudo`. Por exemplo, `sudo apt install tree` baixa e instala o visualizador de diretório \"árvore\".",
    "instructions": "Vamos instalar alguns softwares. Execute `sudo apt install tree` para instalar o programa `tree`. Quando terminar, execute `tree` para visualizar sua pasta pessoal em um formato elegante de árvore.",
    "commandHelp": [
      {
        "cmd": "sudo apt install tree",
        "desc": "Instale o pacote tree"
      },
      {
        "cmd": "tree",
        "desc": "Execute tree para visualizar diretórios"
      }
    ],
    "objectives": [
      {
        "id": "installed_tree",
        "text": "Instale o pacote \"tree\" usando apt install"
      },
      {
        "id": "ran_tree",
        "text": "Execute o comando \"tree\" para visualizar diretórios"
      }
    ],
    "hints": [
      "Pense em como instalar pacotes no Ubuntu usando o gerenciador de pacotes com privilégios de administrador.",
      "Execute sudo apt install tree e visualize os diretórios executando o comando tree.",
      "Tente executar: sudo apt install tree e depois tree"
    ]
  },
  "23": {
    "title": "Verificando espaço em disco (df)",
    "description": "Imagine tentar baixar um videogame enorme e receber um erro de “armazenamento cheio”, mas você não tem certeza de qual unidade de disco é o gargalo. No Linux, verificamos a capacidade de armazenamento do nosso sistema usando o comando `df` (disk free).\n\n- O comando `df` exibe o espaço total, usado e disponível em todas as unidades conectadas.\n- Ao executar `df -h` (adicionando o sinalizador `-h` para \"legível por humanos\"), você vê o armazenamento em gigabytes (G) e megabytes (M) amigáveis, em vez de confundir contagens de blocos, facilitando a identificação de qual unidade (como `/` ou `/home`) está cheia.\n\n**Por que isso é importante**: se você executar `df` sem `-h`, os tamanhos serão exibidos em números brutos de blocos de 1K (por exemplo, `49258284` em vez de `47G`), o que é extremamente difícil para um ser humano ler e calcular. O sinalizador `-h` formata esses tamanhos em gigabytes (G) e megabytes (M) amigáveis.",
    "instructions": "Vamos verificar o armazenamento do nosso sistema. Execute `df -h` para ver quanto espaço resta em suas partições em um formato legível.",
    "commandHelp": [
      {
        "cmd": "df -h",
        "desc": "Mostra espaço livre em disco em sistemas de arquivos em formato legível por humanos"
      }
    ],
    "objectives": [
      {
        "id": "ran_df_h",
        "text": "Execute o comando \"df -h\""
      }
    ],
    "hints": [
      "Pense em qual comando mostra espaço livre em disco.",
      "Use o comando 'df' com a opção legível por humanos.",
      "Tente executar: df -h"
    ]
  },
  "24": {
    "title": "Encontrando tamanhos de diretório (du)",
    "description": "Depois de saber *qual* unidade está cheia, como encontrar a pasta específica que está acumulando todo o seu espaço? É a sua pasta de downloads ou talvez algum cache oculto? Resolvemos esse mistério usando o comando `du` (uso de disco).\n\n- `du <directory>` lista o tamanho de uma pasta e todas as subpastas dentro dela.\n- `du -sh <directory>` (onde `-s` significa \"resumo\" e `-h` significa \"legível por humanos\") calcula e imprime um tamanho total único e limpo para essa pasta específica.\n\n**Por que isso é importante**: Se você executar `du` sem `-s`, ele irá despejar uma enorme parede de texto listando cada subdiretório e arquivo individual recursivamente, em vez de fornecer um único resumo. O sinalizador `-s` resume o tamanho total da pasta e `-h` a torna legível por humanos.",
    "instructions": "Vamos rastrear os consumidores de armazenamento. Calcule o tamanho total do diretório inicial do aluno executando `du -sh /home/learner`.",
    "commandHelp": [
      {
        "cmd": "du -sh /home/learner",
        "desc": "Exibe o tamanho total do diretório inicial do aluno"
      }
    ],
    "objectives": [
      {
        "id": "ran_du",
        "text": "Execute \"du\" com as opções -s e -h"
      }
    ],
    "hints": [
      "Pense em qual comando verifica o uso do disco para pastas.",
      "Use o comando 'du' com opções de resumo (-s) e legíveis por humanos (-h).",
      "Tente executar: du -sh /home/learner"
    ]
  },
  "25": {
    "title": "Verificando o uso da memória (gratuito)",
    "description": "Imagine que seu laptop começa a ficar lento, as páginas da web congelam e a troca de aplicativos parece dolorosamente lenta. Isso geralmente significa que seu computador está sem memória ativa (RAM). No Linux, podemos verificar quanto espaço nosso sistema tem para respirar usando o comando `free`.\n\n- O comando `free` mostra a memória física (RAM) total, usada e disponível e o espaço de troca.\n- Adicionar o sinalizador `-h` (executando `free -h`) formata os tamanhos de memória em gigabytes (GB) e megabytes (MB) fáceis de ler para que você possa saber se um programa está consumindo todos os seus recursos.\n\n**Por que isso é importante**: Se você executar `free` sem `-h`, o uso de memória será impresso em quilobytes brutos (por exemplo, `16323456` em vez de `16G`), o que é difícil de interpretar rapidamente. O sinalizador `-h` dimensiona automaticamente os números para gigabytes (G) ou megabytes (M) para facilitar a leitura.",
    "instructions": "Vamos verificar a memória do sistema. Verifique a RAM disponível em formato legível executando `free -h`.",
    "commandHelp": [
      {
        "cmd": "free -h",
        "desc": "Exibe o uso de RAM em formato legível por humanos"
      }
    ],
    "objectives": [
      {
        "id": "ran_free",
        "text": "Execute \"free\" com a opção -h ou -m"
      }
    ],
    "hints": [
      "Pense em qual comando exibe estatísticas de memória.",
      "Use o comando 'free' com opção legível por humanos.",
      "Tente executar: free -h"
    ]
  },
  "26": {
    "title": "Detalhes do tempo de atividade do sistema e do kernel",
    "description": "Imagine solucionar problemas de um servidor que começou a se comportar mal e precisar saber se foi reinicializado recentemente ou verificar exatamente qual versão do sistema operacional está sendo executada nos bastidores. Podemos consultar esses detalhes do sistema em segundos:\n\n- O comando `uptime` informa exatamente há quanto tempo sua máquina está funcionando desde a última inicialização, juntamente com o quão ocupada ela esteve (carga do sistema).\n- O comando `uname -a` (nome unix) imprime um relatório completo do kernel do seu sistema, nome da plataforma e arquitetura da máquina.\n\n**Por que isso é importante**: Se você executar `uname` sem `-a`, ele exibirá apenas o nome básico do sistema operacional (por exemplo, `Linux`). Ele deixa de fora detalhes críticos como a versão do kernel, o nome da plataforma e a arquitetura do processador. O sinalizador `-a` imprime todos os detalhes disponíveis do sistema em um único relatório.",
    "instructions": "Vamos inspecionar as estatísticas do sistema. Execute `uptime` para verificar há quanto tempo o sistema está em execução e, em seguida, execute `uname -a` para imprimir o kernel completo e os detalhes da máquina.",
    "commandHelp": [
      {
        "cmd": "uptime",
        "desc": "Mostra há quanto tempo o sistema está em execução"
      },
      {
        "cmd": "uname -a",
        "desc": "Imprime todas as informações do sistema e do kernel"
      }
    ],
    "objectives": [
      {
        "id": "ran_uptime",
        "text": "Execute o comando \"uptime\""
      },
      {
        "id": "ran_uname",
        "text": "Execute o comando \"uname -a\""
      }
    ],
    "hints": [
      "Você precisa executar dois comandos: um para tempo de atividade do sistema e outro para informações do kernel.",
      "Use o comando 'uptime' e 'uname' com o sinalizador -a.",
      "Tente executar: uptime e depois: uname -a"
    ]
  },
  "27": {
    "title": "Listando processos em execução (ps)",
    "description": "Pense em seu sistema operacional como um escritório movimentado onde cada funcionário (ou programa em execução) recebe uma etiqueta de nome exclusiva chamada ID de processo (PID). No Linux, chamamos esses programas ativos de **processos** e os listamos usando o comando `ps`.\n\n- A execução de `ps` por si só mostra apenas os programas em execução dentro da janela do terminal atual.\n- A execução de `ps aux` atua como um registro mestre de escritório, listando cada programa ativo em execução em todo o sistema, quem o iniciou e quanta CPU e memória ele está usando.\n\n**Por que isso é importante**: Se você executar `ps` sem `aux`, verá apenas processos em execução na janela atual do terminal (geralmente apenas `bash` e o próprio `ps`). Você não verá serviços em segundo plano, processos do sistema ou programas executados por outros usuários. As opções `aux` revelam todos os processos em execução em todo o sistema.",
    "instructions": "Vamos verificar o registro. Execute `ps aux` para listar todos os processos em execução no laptop e observe colunas como PID,% CPU e% MEM.",
    "commandHelp": [
      {
        "cmd": "ps aux",
        "desc": "Lista todos os processos em execução no sistema"
      }
    ],
    "objectives": [
      {
        "id": "ran_ps_aux",
        "text": "Execute o comando \"ps aux\""
      }
    ],
    "hints": [
      "Pense em qual comando lista os processos e como listar todos os processos no sistema.",
      "Use o comando 'ps' com as opções aux.",
      "Tente executar: ps aux"
    ]
  },
  "28": {
    "title": "Monitor de processo interativo (topo)",
    "description": "Imagine olhar para uma foto estática de uma rodovia em vez de assistir a uma transmissão ao vivo de uma câmera de trânsito. Enquanto `ps` fornece um instantâneo rápido do que está sendo executado no momento, `top` permite que você observe o desempenho do seu sistema ao vivo.\n\n- O comando `top` inicia um painel interativo em tempo real que é atualizado a cada poucos segundos. Ele exibe o uso da CPU, as médias de carga e classifica dinamicamente os processos com maior consumo de recursos em execução neste exato momento.",
    "instructions": "Vamos assistir a transmissão ao vivo. Inicie o monitor de processo interativo executando o comando `top`.",
    "commandHelp": [
      {
        "cmd": "top",
        "desc": "Inicia o monitor de processo interativo"
      }
    ],
    "objectives": [
      {
        "id": "ran_top",
        "text": "Execute o comando \"top\""
      }
    ],
    "hints": [
      "Pense em qual comando inicia o monitor de processo interativo.",
      "Use o comando 'top' ou 'htop'.",
      "Tente executar: top"
    ]
  },
  "29": {
    "title": "Parando processos não autorizados (matar)",
    "description": "Imagine que um aplicativo em seu telefone congela, bloqueando completamente sua tela, e você precisa fechá-lo à força para que tudo funcione perfeitamente novamente. No Linux, paramos de programas malcomportados ou congelados usando o comando `kill` seguido pelo ID do processo (PID) do programa.\n\n- A execução de `kill 1234` envia uma solicitação educada solicitando ao programa que salve seu trabalho e feche.\n- Se estiver congelado e ignorar a solicitação educada, `kill -9 1234` forçará o sistema operacional a desligá-lo instantaneamente. Temos um processo descontrolado com PID `9999` consumindo toda a nossa CPU agora – vamos desligá-lo!",
    "instructions": "Vamos parar o processo desonesto. Force o fechamento do processo com PID `9999` executando `kill 9999`.",
    "commandHelp": [
      {
        "cmd": "kill 9999",
        "desc": "Encerrar processo com PID 9999"
      }
    ],
    "objectives": [
      {
        "id": "process_killed",
        "text": "Interromper o processo não autorizado com PID 9999"
      }
    ],
    "hints": [
      "Pense em qual comando encerra processos por seu ID.",
      "Use o comando 'kill' seguido do ID do processo 9999.",
      "Tente executar: kill 9999"
    ]
  },
  "30": {
    "title": "Executando trabalhos em segundo plano",
    "description": "Imagine tentar copiar uma pasta enorme para uma unidade USB, mas enquanto ela copia, você deseja continuar trabalhando e digitando outros comandos na mesma janela. No Linux, podemos executar tarefas demoradas em “segundo plano” para que não bloqueiem nossa linha de comando.\n\n- Adicionar um e comercial `&` ao final de um comando (como `sleep 100 &`) informa ao terminal para executá-lo em segundo plano e devolver seu prompt imediatamente.\n- O comando `jobs` mostra o que está sendo executado em segundo plano.\n- O comando `fg` (primeiro plano) coloca uma tarefa em segundo plano de volta ao centro do palco.",
    "instructions": "Vamos realizar várias tarefas. Execute `sleep 100 &` para iniciar uma tarefa em segundo plano, verifique-a com `jobs` e, em seguida, coloque-a de volta em primeiro plano executando `fg`.",
    "commandHelp": [
      {
        "cmd": "sleep 100 &",
        "desc": "Executar suspensão em segundo plano"
      },
      {
        "cmd": "jobs",
        "desc": "Listar tarefas em segundo plano"
      },
      {
        "cmd": "fg",
        "desc": "Trazer tarefa em segundo plano para primeiro plano"
      }
    ],
    "objectives": [
      {
        "id": "ran_bg_job",
        "text": "Executar um comando de suspensão em segundo plano (&)"
      },
      {
        "id": "ran_jobs",
        "text": "Executar o comando \"jobs\""
      },
      {
        "id": "ran_fg",
        "text": "Trazer a tarefa de volta para primeiro plano com \"fg\""
      }
    ],
    "hints": [
      "Para executar uma tarefa em segundo plano, anexe um \"e\" comercial (&) ao comando.",
      "Execute sleep 100 em segundo plano, verifique os jobs e traga de volta com fg.",
      "Tente executar: sleep 100 & seguido por jobs e depois fg"
    ]
  },
  "31": {
    "title": "Testando conectividade (ping)",
    "description": "Imagine tentar carregar uma página da web, mas seu navegador gira sem parar, deixando você se perguntando se o Wi-Fi de sua casa está desconectado ou se o próprio site travou. No Linux, testamos nossa conexão de rede básica usando o comando `ping`.\n\n- O comando `ping` envia pequenos pacotes de dados para um servidor (como `google.com`) e mede quantos milissegundos leva para receber uma resposta.\n- No Linux, `ping` continuará rodando para sempre por padrão. Para fazê-lo parar após algumas tentativas, usamos o sinalizador `-c` (contagem), executando `ping -c 3 google.com`.\n\n**Por que isso é importante**: Se você executar `ping google.com` sem `-c`, ele continuará enviando pacotes e imprimindo resultados infinitamente. Você terá que interrompê-lo manualmente com `Ctrl+C` para executar qualquer outro comando. O sinalizador `-c 3` interrompe o comando automaticamente após enviar exatamente 3 pacotes.",
    "instructions": "Vamos verificar nossa conectividade. Teste sua conexão com `google.com` enviando exatamente 3 pacotes: `ping -c 3 google.com`.",
    "commandHelp": [
      {
        "cmd": "ping -c 3 google.com",
        "desc": "Envie 3 pacotes de eco para google.com"
      }
    ],
    "objectives": [
      {
        "id": "ran_ping_c3",
        "text": "Faça ping em google.com exatamente 3 vezes usando o sinalizador -c"
      }
    ],
    "hints": [
      "Pense em qual comando envia pacotes de eco ICMP para testar a conexão.",
      "Use ping com opção de contagem definida como 3 para google.com.",
      "Tente executar: ping -c 3 google.com"
    ]
  },
  "32": {
    "title": "Interfaces de rede e IP local",
    "description": "Imagine configurar uma impressora de rede ou compartilhar arquivos com o computador de um amigo no mesmo Wi-Fi e precisar saber o endereço IP local da sua máquina. No Linux, inspecionamos nosso hardware de rede e IPs usando o comando `ip`.\n\n- Executar `ip addr` (ou simplesmente `ip a`) imprime uma lista de todos os seus dispositivos de interface de rede (como `eth0` para Ethernet com fio ou `wlan0` para sem fio) junto com seus endereços IP locais atribuídos.",
    "instructions": "Vamos inspecionar nossa configuração de rede. Exiba todas as interfaces de rede local e endereços IP executando `ip addr`.",
    "commandHelp": [
      {
        "cmd": "ip addr",
        "desc": "Mostrar detalhes da interface de rede e endereços IP"
      }
    ],
    "objectives": [
      {
        "id": "ran_ip_addr",
        "text": "Execute o comando \"ip addr\" ou \"ip a\""
      }
    ],
    "hints": [
      "Pense em qual comando mostra as configurações da interface de rede.",
      "Use o comando 'ip' com o endereço ou um argumento.",
      "Tente executar: ip addr"
    ]
  },
  "33": {
    "title": "Baixando arquivos da Web (curl)",
    "description": "Imagine querer baixar um arquivo ou obter o código de um script de configuração diretamente de um servidor web sem abrir um navegador e clicar no botão \"Download\". No Linux, buscamos dados da web usando `curl` (abreviação de \"URL do cliente\").\n\n- Executar `curl <url>` baixa o conteúdo da página e o imprime diretamente na tela.\n- Para salvar o conteúdo baixado como um arquivo em vez de exibi-lo, emparelhamos-o com o redirecionamento `>` ou o sinalizador de saída `-o`.",
    "instructions": "Vamos baixar um script. Obtenha o arquivo em `http://api.bashquest.com/update.sh` e salve-o localmente como `update.sh` executando `curl http://api.bashquest.com/update.sh > update.sh`.",
    "commandHelp": [
      {
        "cmd": "curl http://api.bashquest.com/update.sh > update.sh",
        "desc": "Baixe o conteúdo da página da web e salve-o em update.sh"
      }
    ],
    "objectives": [
      {
        "id": "used_curl",
        "text": "Use o comando \"curl\""
      },
      {
        "id": "download_saved",
        "text": "Salve o script baixado como \"update.sh\" na pasta inicial"
      }
    ],
    "hints": [
      "Pense em qual comando baixa arquivos da web e como redirecioná-lo para um arquivo.",
      "Use curl para baixar o arquivo e redirecione '>' para salvá-lo como update.sh.",
      "Tente executar: curl http://api.bashquest.com/update.sh > update.sh"
    ]
  },
  "34": {
    "title": "Encontrando arquivos por nome (find)",
    "description": "Imagine perder um arquivo de texto importante em algum lugar da sua pasta de usuário e ter que pesquisar em dezenas de diretórios aninhados, um por um. No Linux, evitamos a escavação manual usando o utilitário `find` como um mecanismo de pesquisa extremamente rápido para todo o sistema.\n\n- O comando `find` pesquisa árvores de diretórios com base em nome, tamanho, tipo ou data.\n- A sintaxe é `find <where> -name \"<pattern>\"`. Por exemplo, `find . -name \"*.txt\"` pesquisa no diretório atual e em todas as subpastas arquivos que terminam em `.txt`.\n\n**Por que isso é importante**: Se você executar `find . \"*.log\"` sem `-name`, receberá o erro: `find: paths must precede expression: '*.log'`. O sinalizador `-name` é necessário para especificar que o padrão subsequente deve corresponder aos nomes dos arquivos.",
    "instructions": "Vamos rastrear alguns arquivos. Pesquise no diretório atual e em suas subpastas quaisquer arquivos com extensão `.log` executando `find . -name \"*.log\"`.",
    "commandHelp": [
      {
        "cmd": "find . -name \"*.log\"",
        "desc": "Encontre todos os arquivos que terminam em .log na pasta e subpastas atuais"
      }
    ],
    "objectives": [
      {
        "id": "ran_find",
        "text": "Execute o comando \"find\" com a opção -name"
      }
    ],
    "hints": [
      "Pense em qual comando encontra arquivos recursivamente pelo nome que corresponde a um padrão.",
      "Use find no diretório atual (.) com padrão de nome '*.log'.",
      "Tente executar: find . -nome \"*.log\""
    ]
  },
  "35": {
    "title": "Verificando o histórico de comandos",
    "description": "Imagine que você digitou um comando de diagnóstico de rede longo e complexo há dez minutos e agora precisa executá-lo novamente, mas não consegue se lembrar das opções ou sintaxe exatas. Em vez de coçar a cabeça ou digitar tudo, o Linux lembra para você!\n\n- O comando `history` exibe uma lista numerada de todos os comandos que você executou recentemente.\n- Você pode executar novamente qualquer item rapidamente digitando um ponto de exclamação seguido do número da lista (como `!42` para executar novamente o comando nº 42).",
    "instructions": "Vamos verificar os arquivos. Execute `history` para ver a lista de comandos que você executou nesta sessão.",
    "commandHelp": [
      {
        "cmd": "history",
        "desc": "Exibe uma lista de comandos executados recentemente"
      }
    ],
    "objectives": [
      {
        "id": "ran_history",
        "text": "Execute o comando \"histórico\""
      }
    ],
    "hints": [
      "Pense em qual comando lista os comandos executados recentemente.",
      "Use o comando 'histórico'.",
      "Tente executar: histórico"
    ]
  },
  "36": {
    "title": "Consultando páginas do manual",
    "description": "Imagine tentar usar um novo comando, mas você não tem certeza de quais flags ele suporta ou como suas entradas devem ser formatadas. Em vez de pesquisar online, o Linux tem um manual do usuário oficial e abrangente integrado no terminal!\n\n- O comando `man` (manual) seguido por qualquer nome de utilitário (por exemplo, `man ls`) abre um guia de referência detalhado.\n- Dentro do guia, você rola com as teclas de seta, pesquisa com \"/\" e pressiona `q` para fechar o manual e retornar ao seu prompt.",
    "instructions": "Vamos consultar a documentação. Abra a página de manual integrada para o comando `grep` executando `man grep`.",
    "commandHelp": [
      {
        "cmd": "man grep",
        "desc": "Exibir página de manual para grep"
      }
    ],
    "objectives": [
      {
        "id": "ran_man_grep",
        "text": "Execute o comando \"man grep\""
      }
    ],
    "hints": [
      "Pense em qual comando exibe o manual de referência do sistema integrado.",
      "Use o comando 'man' seguido do nome do comando que deseja procurar.",
      "Tente executar: man grep"
    ]
  },
  "37": {
    "title": "Controlando serviços (systemctl)",
    "description": "Imagine hospedar um site em seu computador, mas os visitantes recebem um erro “o site não pode ser acessado” porque o programa do servidor web em segundo plano não está em execução. No Linux, os processos em segundo plano que iniciam automaticamente e são executados em segundo plano (como bancos de dados, firewalls ou servidores web) são chamados de **serviços** e nós os gerenciamos usando `systemctl`.\n\n- O comando `systemctl status <service>` verifica se um serviço está ativo ou parado.\n- Como iniciar ou interromper um serviço afeta todos os usuários e a segurança do sistema, você deve usar `sudo` para executar comandos como `sudo systemctl start <service>` ou `sudo systemctl stop <service>`.",
    "instructions": "Vamos lançar um servidor web. O serviço do servidor web `apache2` está atualmente parado. Inicie executando `sudo systemctl start apache2` e verifique se está sendo executado com `systemctl status apache2`.",
    "commandHelp": [
      {
        "cmd": "systemctl status apache2",
        "desc": "Verificar o status do serviço web apache2"
      },
      {
        "cmd": "sudo systemctl start apache2",
        "desc": "Iniciar o serviço web apache2"
      }
    ],
    "objectives": [
      {
        "id": "started_service",
        "text": "Iniciar o serviço web \"apache2\""
      },
      {
        "id": "checked_status",
        "text": "Verificar o status de \"apache2\""
      }
    ],
    "hints": [
      "Você precisa verificar o status do apache2 e iniciá-lo.",
      "Use systemctl status apache2 e lembre-se de que iniciar serviços requer privilégios de administrador (sudo).",
      "Tente executar: sudo systemctl start apache2 e depois systemctl status apache2"
    ]
  },
  "38": {
    "title": "Editando arquivos de configuração (nano)",
    "description": "Imagine fazer SSH em um servidor de nuvem remoto onde você não tem uma área de trabalho gráfica ou cursor e precisa corrigir rapidamente uma linha em um arquivo de configuração. Nestes cenários, você deve usar um editor de texto de terminal como `nano`.\n\n- Executar `nano <filename>` carrega um editor de texto simples e leve diretamente dentro da janela do shell.\n- Os atalhos são sempre exibidos na parte inferior da tela: pressione `Ctrl+O` para escrever (salvar) suas alterações e `Ctrl+X` para sair do editor.",
    "instructions": "Vamos editar um arquivo de configuração. Abra `server.conf` em seu diretório inicial usando `nano server.conf`, adicione uma linha lendo `port=8080` e salve e saia do editor.",
    "commandHelp": [
      {
        "cmd": "nano server.conf",
        "desc": "Abra server.conf no editor de texto Nano"
      }
    ],
    "objectives": [
      {
        "id": "opened_nano",
        "text": "Abra o arquivo \"server.conf\" no Nano"
      },
      {
        "id": "port_configured",
        "text": "Adicione a linha de configuração \"port=8080\" e salve"
      }
    ],
    "hints": [
      "Pense em qual editor de texto baseado em terminal as instruções pedem para você usar.",
      "Execute nano server.conf, escreva 'port=8080' dentro, salve com Ctrl+O e saia com Ctrl+X.",
      "Tente executar: nano server.conf"
    ]
  },
  "39": {
    "title": "Escrevendo seu primeiro script Bash",
    "description": "Imagine ter uma lista de 20 tarefas que você deve executar todas as manhãs. Digitá-los manualmente é tedioso e deixa espaço para erros de digitação. No Linux, agrupamos comandos em um arquivo chamado shell script para que possamos executá-los todos de uma vez!\n\n- Todo script começa com um \"shebang\" (`#!/bin/bash`) na primeira linha para informar ao sistema qual interpretador de shell usar para executar o arquivo.\n- Depois de salvar seu script, você o torna executável concedendo permissão de execução via `chmod 755 script.sh` e depois executando-o com `./script.sh`.",
    "instructions": "Vamos automatizar! Crie um arquivo chamado `hello.sh` em sua pasta pessoal. Escreva `#!/bin/bash` na primeira linha e `echo \"Hello, BashQuest User!\"` na segunda. Conceda permissões de execução com `chmod 755 hello.sh` e execute-o usando `./hello.sh`.",
    "commandHelp": [
      {
        "cmd": "touch hello.sh",
        "desc": "Criar arquivo de script"
      },
      {
        "cmd": "chmod 755 hello.sh",
        "desc": "Conceder permissões de execução"
      },
      {
        "cmd": "./hello.sh",
        "desc": "Executar o script no diretório atual"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Criar arquivo de script \"hello.sh\""
      },
      {
        "id": "script_content",
        "text": "Adicionar mensagem shebang e hello dentro do script"
      },
      {
        "id": "script_executable",
        "text": "Tornar o script executável (permissões dígitos ímpares)"
      },
      {
        "id": "script_executed",
        "text": "Executar o script usando \"./hello.sh\""
      }
    ],
    "hints": [
      "Criar o arquivo, adicionar mensagem shebang e hello, torná-lo executável e executá-lo.",
      "Use touch hello.sh, edite-o para conter #!/bin/bash e a mensagem hello, então chmod 755 hello.sh e execute ./hello.sh.",
      "Tente executar: toque em hello.sh, escreva o conteúdo, chmod 755 hello.sh e execute com ./hello.sh"
    ]
  },
  "40": {
    "title": "Variáveis ​​e argumentos ($1)",
    "description": "Imagine criar uma mensagem de boas-vindas personalizada para um site. Você não gostaria de escrever um script separado para o nome de cada cliente! Em vez disso, você escreve um script que recebe um nome como entrada ao executá-lo.\n\n- Em scripts bash, variáveis ​​como `$1`, `$2` e assim por diante retêm os “argumentos” ou entradas que você passa na linha de comando.\n- Por exemplo, executar `./greet.sh Alice` significa que `$1` dentro do script conterá automaticamente o texto \"Alice\". Da mesma forma, `$#` controla quantas entradas o usuário forneceu.",
    "instructions": "Vamos construir um script dinâmico. Crie `greet.sh` em seu diretório inicial com o shebang e a linha `echo \"Hello, $1!\"`. Torne-o executável e execute `./greet.sh Alice` para testá-lo.",
    "commandHelp": [
      {
        "cmd": "./greet.sh Alice",
        "desc": "Executar script com argumento \"Alice\""
      }
    ],
    "objectives": [
      {
        "id": "greet_exists",
        "text": "Criar arquivo de script \"greet.sh\""
      },
      {
        "id": "greet_content",
        "text": "Usar $1 dentro de greet.sh"
      },
      {
        "id": "greet_executable",
        "text": "Tornar greet.sh executável"
      },
      {
        "id": "greet_executed",
        "text": "Executar o script com argumento \"Alice\""
      }
    ],
    "hints": [
      "Criar um script chamado greet.sh, usar $1 para cumprimentar o primeiro argumento, torná-lo executável e executá-lo com 'Alice'.",
      "Use echo 'Olá, $1!' dentro do script, chmod 755 greet.sh e execute ./greet.sh Alice.",
      "Tente executar: touch greet.sh, adicione shebang e echo 'Hello, $1!', chmod 755 greet.sh e ./greet.sh Alice"
    ]
  },
  "41": {
    "title": "Lógica Condicional (if/else)",
    "description": "Imagine construir um script que processe um relatório CSV, mas ele trava se o arquivo de relatório não existir realmente no disco. Para evitar erros, escrevemos scripts que tomam decisões usando a lógica condicional `if/else`.\n\n- Verificamos as condições usando colchetes: `if [ -f \"$1\" ]; then ... fi`.\n- A flag `-f` verifica se um caminho aponta para um arquivo, enquanto `-d` verifica se é um diretório. O script ramifica suas ações dependendo se a condição é avaliada como verdadeira ou falsa.",
    "instructions": "Vamos adicionar lógica de tomada de decisão. Crie `check_file.sh` em seu diretório inicial que verifica se o nome do arquivo passado como `$1` existe (usando `if [ -f \"$1\" ]; then echo \"Exists\" else echo \"Missing\" fi`). Torne-o executável e teste-o em `names.txt`.",
    "commandHelp": [
      {
        "cmd": "if [ -f file ]; then ...",
        "desc": "Sintaxe para verificações de existência de arquivo"
      }
    ],
    "objectives": [
      {
        "id": "check_exists",
        "text": "Crie o script \"check_file.sh\""
      },
      {
        "id": "check_logic",
        "text": "Implemente verificações -f dentro do script"
      },
      {
        "id": "check_executable",
        "text": "Torne o script executável"
      },
      {
        "id": "check_executed",
        "text": "Execute o script com \"names.txt\""
      }
    ],
    "hints": [
      "Crie check_file.sh, implemente uma condição para testar se o argumento do nome do arquivo existe, torne-o executável e execute-o.",
      "Use 'se [ -f \"$1\" ]; em seguida, echo \"Exists\" else echo \"Missing\" fi' dentro de check_file.sh, torne-o executável e execute-o com nomes.txt.",
      "Tente executar: toque check_file.sh, escreva a lógica de verificação do arquivo, chmod 755, e execute ./check_file.shnames.txt"
    ]
  },
  "42": {
    "title": "Automatizando com Loops",
    "description": "Imagine ter uma pasta com 100 arquivos de log e precisar fazer uma cópia de backup de cada um deles. Copiá-los individualmente seria exaustivo. No Linux, usamos loops `for` para repetir automaticamente a mesma ação em uma lista inteira de itens!\n\n- Um loop `for` (como `for file in *.txt; do ... done`) itera sobre cada item que corresponde a um padrão, processando-os um após o outro em uma fração de segundo.",
    "instructions": "Vamos automatizar os backups. Crie um script chamado `backup_logs.sh`. Faça com que ele crie um diretório chamado `backup` (usando `mkdir -p backup`) e, em seguida, use um loop `for` para copiar todos os arquivos `.log` da pasta atual para `backup`. Torne-o executável e execute-o.",
    "commandHelp": [
      {
        "cmd": "for x in pattern; do ...",
        "desc": "Sintaxe de automação de loop For"
      }
    ],
    "objectives": [
      {
        "id": "backup_script_exists",
        "text": "Crie o script \"backup_logs.sh\""
      },
      {
        "id": "backup_logic",
        "text": "Implemente um loop for com cp"
      },
      {
        "id": "backup_executed",
        "text": "Execute o script backup_logs.sh"
      },
      {
        "id": "backup_dir_ok",
        "text": "O diretório \"backup/\" contém cópias"
      }
    ],
    "hints": [
      "Crie backup_logs.sh, crie uma pasta de backup, use um loop for para copiar todos os arquivos .log e execute-o.",
      "Use mkdir -p backup e depois 'para arquivo em *.log; faça cp \"$ arquivo\" backup/; done' em backup_logs.sh e execute-o.",
      "Tente executar: toque em backup_logs.sh, escreva o loop dentro, torne-o executável e execute ./backup_logs.sh"
    ]
  },
  "43": {
    "title": "Edição de fluxo com sed",
    "description": "Imagine que você tem um enorme arquivo de despejo de banco de dados e precisa substituir todas as ocorrências de um endereço IP de servidor antigo por um novo. Abri-lo em um editor pode congelar seu computador. No Linux, editamos fluxos de texto dinamicamente usando `sed` (abreviação de \"editor de fluxo\").\n\n- A sintaxe básica é `sed \"s/old/new/g\" file.txt` para localizar e substituir texto.\n- Adicionar o sinalizador `-i` (no local) salva as substituições diretamente no próprio arquivo, em vez de apenas imprimir o texto modificado na tela.\n\n**Por que isso é importante**: Se você executar `sed \"s/port=80/port=8080/g\" server.conf` sem `-i`, ele imprimirá apenas o texto modificado na tela do seu terminal. O arquivo real permanece completamente inalterado. O sinalizador `-i` (no local) é necessário para salvar as alterações diretamente no arquivo.",
    "instructions": "Vamos atualizar uma configuração. Edite `server.conf` em sua pasta pessoal. Altere `port=80` para `port=8080` no local executando `sed -i \"s/port=80/port=8080/g\" server.conf`.",
    "commandHelp": [
      {
        "cmd": "sed -i \"s/old/new/g\" file",
        "desc": "Execute a substituição de texto no local em um arquivo"
      }
    ],
    "objectives": [
      {
        "id": "used_sed",
        "text": "Use o comando \"sed\" com o sinalizador -i"
      },
      {
        "id": "port_changed",
        "text": "Defina a configuração da porta como port=8080 em server.conf"
      }
    ],
    "hints": [
      "Pense em qual comando faz a edição de fluxo e a substituição de pesquisa.",
      "Use sed com a opção local (-i) para substituir 'port=80' por 'port=8080'.",
      "Tente executar: sed -i \"s/port=80/port=8080/g\" server.conf"
    ]
  },
  "44": {
    "title": "Extração de dados com awk",
    "description": "Imagine receber uma grande planilha salva como texto simples, onde as colunas são separadas por vírgulas ou espaços, e você só precisa extrair a primeira coluna de dados. No Linux, analisamos colunas estruturadas de texto usando a linguagem poderosa `awk`.\n\n- Por padrão, `awk` divide as linhas por espaços em branco, atribuindo a coluna 1 a `$1`, a coluna 2 a `$2` e assim por diante.\n- O sinalizador `-F` permite especificar um separador personalizado (como `-F:` para dois pontos). Por exemplo, `awk -F: '{print $1}' /etc/passwd` extrai apenas os nomes de usuário de uma lista separada por dois pontos.\n\n**Por que isso é importante**: Se você executar `awk '{print $1}' /etc/shadow` sem `-F:`, `awk` dividirá as linhas por espaços em branco (o padrão) em vez de dois pontos. Como as linhas do arquivo shadow não possuem espaços, a linha inteira é tratada como um único campo, imprimindo os detalhes completos do hash de cada usuário. O sinalizador `-F:` força `awk` a dividir as colunas por dois pontos.",
    "instructions": "Vamos extrair alguns dados. Recupere todos os nomes de usuário (a primeira coluna) de `/etc/shadow` usando `awk` com um separador de dois pontos `:` e salve-os em `shadow_users.txt` usando `sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt`.",
    "commandHelp": [
      {
        "cmd": "awk -F: '{print $1}' file",
        "desc": "Imprime o primeiro campo do arquivo delimitado por dois pontos"
      }
    ],
    "objectives": [
      {
        "id": "used_awk",
        "text": "Use \"awk\" com sinalizador de separador de campo -F"
      },
      {
        "id": "created_shadow_users",
        "text": "Envie nomes para \"shadow_users.txt\""
      },
      {
        "id": "correct_shadow_users",
        "text": "Verifique se shadow_users.txt tem raiz e aluno"
      }
    ],
    "hints": [
      "Pense em qual comando divide colunas de dados usando um separador de campo personalizado.",
      "Use awk com -F: para imprimir a primeira coluna ($1) de /etc/shadow com sudo e redirecionar a saída para shadow_users.txt.",
      "Tente executar: sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt"
    ]
  },
  "45": {
    "title": "Traduzindo e cortando dados",
    "description": "Imagine trabalhar com uma planilha CSV de datas e nomes de transações. Você deseja extrair apenas a primeira coluna (datas) e converter todo o texto em letras maiúsculas para manter a consistência. No Linux, podemos combinar ferramentas de análise leves em um pipeline:\n\n- O comando `cut` separa colunas específicas do texto estruturado. Por exemplo, `cut -d, -f1` divide as linhas por vírgulas (`-d,`) e extrai a primeira coluna (`-f1`).\n- O comando `tr` (traduzir) transforma caracteres da entrada padrão, como trocar caracteres minúsculos por maiúsculos (`tr \"a-z\" \"A-Z\"`).\n\n**Por que isso é importante**: Se você executar `cut reports.csv` sem `-d,` e `-f1`, obterá: `cut: you must specify a list of bytes, characters, or fields`. Se você especificar `-f1` mas omitir `-d,`, o padrão será tabulações, o que significa que não dividirá um arquivo CSV e apenas imprimirá a linha inteira. O sinalizador `-d,` define a vírgula como separador de colunas e `-f1` diz para extrair apenas a primeira coluna.",
    "instructions": "Vamos fatiar e transformar dados. Extraia a primeira coluna de `reports.csv` usando `cut -d, -f1 reports.csv`, canalize-a para `tr \"a-z\" \"A-Z\"` para torná-la maiúscula e redirecione o resultado final para `upper_reports.txt`.",
    "commandHelp": [
      {
        "cmd": "cut -d, -f1 file | tr \"a-z\" \"A-Z\"",
        "desc": "Canalize o campo de corte na tradução"
      }
    ],
    "objectives": [
      {
        "id": "used_cut",
        "text": "Use \"cut\" com delimitador de vírgula"
      },
      {
        "id": "used_tr",
        "text": "Traduza caracteres para letras maiúsculas com \"tr\""
      },
      {
        "id": "upper_reports_exists",
        "text": "Crie o arquivo \"upper_reports.txt\""
      },
      {
        "id": "content_uppercase",
        "text": "Verifique se o texto está em MAIÚSCULAS"
      }
    ],
    "hints": [
      "Você precisa fatiar reports.csv para extrair a primeira coluna, convertê-la em maiúsculas e salvá-la.",
      "Use cut -d, -f1 reports.csv, canalize (|) para tr \"a-z\" \"A-Z\" e redirecione (>) para upper_reports.txt.",
      "Tente executar: cut -d, -f1 reports.csv | tr \"a-z\" \"AZ\" > Upper_reports.txt"
    ]
  },
  "46": {
    "title": "Gerenciando variáveis ​​de ambiente",
    "description": "Imagine que você está implantando um aplicativo da Web e ele precisa saber se deve ser executado em uma sandbox de \"desenvolvimento\" local segura ou se conectar ao banco de dados de \"produção\" ativo. No Linux, passamos configurações como esta para programas em execução usando **variáveis ​​de ambiente**.\n\n- Usamos o comando `export` para definir uma variável para que qualquer programa iniciado pelo nosso shell possa lê-la. Por exemplo, `export APP_ENV=production`.\n- Para verificar ou exibir o valor de uma variável, prefixamos seu nome com um cifrão: `echo $APP_ENV`.",
    "instructions": "Vamos configurar o ambiente. Defina e exporte uma variável chamada `APP_ENV` com o valor `production` executando `export APP_ENV=production` e, em seguida, verifique-a executando `echo $APP_ENV`.",
    "commandHelp": [
      {
        "cmd": "export VAR=val",
        "desc": "Definir variável de ambiente"
      },
      {
        "cmd": "echo $VAR",
        "desc": "Imprimir valor da variável"
      }
    ],
    "objectives": [
      {
        "id": "exported_env",
        "text": "Executar o comando \"exportar\""
      },
      {
        "id": "env_correct",
        "text": "Definir variável de ambiente APP_ENV como \"produção\""
      },
      {
        "id": "echoed_env",
        "text": "Imprimir variável usando \"echo $APP_ENV\""
      }
    ],
    "hints": [
      "Pense em qual comando define variáveis ​​de ambiente.",
      "Use export APP_ENV=production e imprima usando echo $APP_ENV.",
      "Tente executar: export APP_ENV=production seguido de echo $APP_ENV"
    ]
  },
  "47": {
    "title": "Arquivos e compactação (tar)",
    "description": "Imagine que você tem uma pasta contendo 500 logs de servidor e deseja enviá-la por e-mail para um colega ou fazer backup dela em um armazenamento em nuvem. O envio de 500 arquivos individuais é lento e ineficiente. No Linux, nós os compactamos em um único arquivo compacto tipo zip usando `tar` (abreviação de \"tape archive\").\n\n- Criamos arquivos compactados usando sinalizadores: `-c` (criar), `-z` (compactar com gzip), `-v` (lista detalhada de arquivos) e `-f` (especificar nome do arquivo). Por exemplo, `tar -czvf backup.tar.gz folder/` agrupa e compacta o diretório.\n\n**Por que isso é importante**: Se você executar `tar -cz logs.tar.gz logs` sem `-f`, obterá: `tar: Refusing to write archive contents to terminal`. O sinalizador `-f` é crítico porque diz ao `tar` para gravar a saída em um arquivo em vez de enviar dados brutos de arquivo binário diretamente para o seu terminal. Os sinalizadores `-c` e `-z` também são necessários para criar e compactar o arquivo, respectivamente.",
    "instructions": "Vamos empacotar nossos logs. Agrupe e compacte a pasta `logs` dentro de `/home/learner` em um arquivo chamado `logs.tar.gz` executando `tar -czvf logs.tar.gz logs`.",
    "commandHelp": [
      {
        "cmd": "tar -czvf archive.tar.gz folder",
        "desc": "Crie um arquivo tar compactado"
      }
    ],
    "objectives": [
      {
        "id": "used_tar_c",
        "text": "Use o comando \"tar\" com os sinalizadores -c (create) e -z (gzip)"
      },
      {
        "id": "archive_exists",
        "text": "Crie \"logs.tar.gz\" no diretório inicial"
      }
    ],
    "hints": [
      "Pense em qual comando empacota e compacta pastas em arquivos tarball.",
      "Use tar com as opções create (-c), gzip (-z), verbose (-v) e file (-f).",
      "Tente executar: tar -czvf logs.tar.gz logs"
    ]
  },
  "48": {
    "title": "Inspecionando o Ambiente",
    "description": "Imagine que você está tentando depurar um script que falha continuamente porque não consegue encontrar o caminho de um programa, ou deseja ver qual conta de usuário está ativa neste terminal. No Linux, todas essas configurações de toda a sessão são armazenadas juntas.\n\n- O comando `env` imprime um diretório completo de todas as variáveis ​​de ambiente atualmente carregadas em sua sessão ativa, permitindo verificar as configurações de uma só vez.",
    "instructions": "Vamos inspecionar a lista de ambientes. Imprima todas as variáveis ​​de ambiente ativas em sua sessão de terminal executando o comando `env`.",
    "commandHelp": [
      {
        "cmd": "env",
        "desc": "Lista variáveis ​​de ambiente ativas"
      }
    ],
    "objectives": [
      {
        "id": "ran_env",
        "text": "Execute o comando \"env\""
      }
    ],
    "hints": [
      "Pense em qual comando imprime todas as variáveis ​​de ambiente ativas.",
      "Use o comando 'env'.",
      "Tente executar: env"
    ]
  },
  "49": {
    "title": "Criando links (ln -s)",
    "description": "Imagine que você tem um arquivo de configuração enterrado em uma pasta aninhada, digamos `/var/www/html/configs/app/settings.conf`, mas precisa editá-lo constantemente. Em vez de digitar sempre o longo caminho da pasta, você deseja um atalho rápido na área de trabalho. No Linux, fazemos isso criando links.\n\n- **Hard Link**: Um clone direto apontando para os dados brutos do arquivo. Se você excluir o arquivo original, o link ainda funcionará.\n- **Link Simbólico (Soft Link)**: Um atalho baseado em caminho (assim como os atalhos do Windows). Se você excluir o arquivo original, o link será quebrado. Nós os criamos usando `ln -s target link_name`.\n\n**Por que isso é importante**: Se você executar `ln logs/app.log app_link.log` sem `-s`, criará um link físico em vez de um atalho simbólico. Se os arquivos residirem em partições de disco diferentes, você obterá: `ln: failed to create hard link: Invalid cross-device link`. O sinalizador `-s` cria um link simbólico flexível (atalho) que funciona em diferentes unidades e diretórios.",
    "instructions": "Vamos criar um atalho. Crie um link simbólico denominado `app_link.log` em `/home/learner` que aponta para o arquivo de destino `logs/app.log` executando `ln -s logs/app.log app_link.log`.",
    "commandHelp": [
      {
        "cmd": "ln -s target link_name",
        "desc": "Criar link simbólico"
      }
    ],
    "objectives": [
      {
        "id": "used_ln_s",
        "text": "Use \"ln\" com sinalizador simbólico -s"
      },
      {
        "id": "link_created",
        "text": "Criar link \"app_link.log\" apontando para logs/app.log de destino"
      }
    ],
    "hints": [
      "Pense em qual comando cria atalhos/links de arquivo.",
      "Use 'ln -s' com o caminho de destino seguido do nome do link.",
      "Tente executar: ln -s logs/app.log app_link.log"
    ]
  },
  "50": {
    "title": "Processando Resultados da Pesquisa (xargs)",
    "description": "Imagine que você executou uma pesquisa que retornou 100 arquivos temporários e agora deseja excluir todos eles. A saída da pesquisa é apenas uma lista de nomes de texto na tela – como você alimenta esses nomes como entradas diretas para o comando de exclusão? No Linux, preenchemos essa lacuna usando `xargs`.\n\n- O comando `xargs` (executar argumentos) pega linhas de entrada padrão (como a lista de arquivos de `find`) e as alimenta uma por uma como argumentos para outro comando.\n- Por exemplo, `find . -name \"*.tmp\" | xargs rm` encontra todos os arquivos temporários e remove todos eles em uma única varredura.",
    "instructions": "Vamos processar alguns resultados da pesquisa. Encontre todos os arquivos `.log` em `/home/learner/logs` usando `find logs -name \"*.log\"` e canalize-os para `xargs wc -l` para contar todas as suas linhas coletivamente.",
    "commandHelp": [
      {
        "cmd": "find path -name \"pattern\" | xargs command",
        "desc": "Passe os resultados da pesquisa para o comando"
      }
    ],
    "objectives": [
      {
        "id": "used_find",
        "text": "Execute o comando \"find\" na pasta de logs"
      },
      {
        "id": "used_xargs",
        "text": "Canalize os resultados para \"xargs\""
      },
      {
        "id": "ran_wc_l",
        "text": "Execute \"wc -l\" via pipeline xargs"
      }
    ],
    "hints": [
      "Pesquise todos os arquivos de log e canalize os nomes para wc -l usando xargs.",
      "Use find logs -name \"*.log\" e canalize (|) para xargs wc -l.",
      "Tente executar: find logs -name \"*.log\" | xargs wc-l"
    ]
  },
  "51": {
    "title": "Espiando arquivos (cabeçalho e final)",
    "description": "Agora que você pode ler um arquivo inteiro com `cat`, e se o arquivo tiver milhares de linhas e você quiser ver apenas a parte superior ou inferior? Despejar um arquivo enorme com `cat` inunda sua tela. Em vez disso, usamos `head` e `tail` para espiar as bordas.\n\n- O comando `head` exibe as primeiras 10 linhas de um arquivo por padrão. Você pode alterar isso usando `-n <number>` (por exemplo, `head -n 5 log.txt` para as primeiras 5 linhas).\n- O comando `tail` exibe as últimas 10 linhas por padrão, suportando a mesma opção `-n`.\n- Crucialmente, `tail -f` (seguir) monitora um arquivo em tempo real, mostrando novas linhas à medida que são escritas pelo sistema. Esta é a ferramenta favorita do administrador de sistema para assistir logs ao vivo.",
    "instructions": "Vamos inspecionar os logs. Use `head -n 5 logs/app.log` para visualizar as primeiras 5 linhas do log do aplicativo. Em seguida, execute `tail -n 3 logs/security.log` para visualizar os últimos 3 eventos de segurança. Por fim, execute `tail -f logs/app.log` para simular o monitoramento de log em tempo real (ele imprimirá entradas simuladas e sairá).",
    "commandHelp": [
      {
        "cmd": "head -n 5 logs/app.log",
        "desc": "Exibe as primeiras 5 linhas de app.log"
      },
      {
        "cmd": "tail -n 3 logs/security.log",
        "desc": "Exibe as últimas 3 linhas de security.log"
      },
      {
        "cmd": "tail -f logs/app.log",
        "desc": "Monitora atualizações de app.log em tempo real"
      }
    ],
    "objectives": [
      {
        "id": "used_head",
        "text": "Execute o comando \"head\" com -n 5 em logs/app.log"
      },
      {
        "id": "used_tail",
        "text": "Execute o comando \"tail\" com -n 3 em logs/security.log"
      },
      {
        "id": "used_tail_f",
        "text": "Execute o comando \"tail\" com -f para seguir app.log"
      }
    ],
    "hints": [
      "Use head -n 5 seguido pelo nome do arquivo e tail -n 3 seguido pelo caminho do log de segurança.",
      "Para acompanhar os logs ativos, adicione a opção -f ao comando tail.",
      "Tente executar: head -n 5 logs/app.log, depois tail -n 3 logs/security.log e, finalmente, tail -f logs/app.log"
    ]
  },
  "52": {
    "title": "Rolagem interativa de arquivos (menos e mais)",
    "description": "Espiar a parte superior e inferior de um arquivo com `head` e `tail` é ótimo, mas e se você precisar navegar em um arquivo de configuração longo, página por página? É para isso que servem pagers como `less` e `more`.\n\n- Os pagers carregam arquivos de forma interativa, mostrando uma página de texto por vez para evitar lentidão do sistema em arquivos grandes.\n- `less` é a escolha moderna, permitindo rolar para frente e para trás usando as teclas de seta, pesquisar texto com `/` e sair pressionando `q`.\n- `more` é um pager mais antigo e simples que apenas rola para frente.",
    "instructions": "Vamos ler um arquivo longo página por página. Execute `less /etc/hosts` para abri-lo em uma visualização de rolagem. (Em nosso terminal, isso exibirá o conteúdo em um quadro rolável. Pressione `q` para retornar).",
    "commandHelp": [
      {
        "cmd": "less /etc/hosts",
        "desc": "Abra o arquivo hosts no pager menos"
      },
      {
        "cmd": "more /etc/hosts",
        "desc": "Abra o arquivo hosts no pager mais"
      }
    ],
    "objectives": [
      {
        "id": "used_less",
        "text": "Abra /etc/hosts em um pager (menos ou mais)"
      }
    ],
    "hints": [
      "Use o comando 'menos' ou 'mais' no caminho do arquivo /etc/hosts.",
      "Tente executar: less /etc/hosts"
    ]
  },
  "53": {
    "title": "Log do sistema (journalctl)",
    "description": "Agora que você pode iniciar e interromper serviços em segundo plano com `systemctl`, como solucioná-los quando eles falharem? O utilitário `journalctl` permite inspecionar logs do sistema gerados por serviços gerenciados pelo systemd.\n\n- Por padrão, `journalctl` mostra todos os logs do sistema. Como isso pode ser enorme, nós os filtramos para manter o foco.\n- A opção `-u <service>` filtra logs para mostrar apenas mensagens de um serviço específico (por exemplo, `journalctl -u apache2`).\n- A opção `-n <number>` exibe apenas as entradas mais recentes (por exemplo, `journalctl -n 5` para os últimos 5 logs).\n- O sinalizador `-f` (seguir) exibe os logs em tempo real à medida que são gravados.",
    "instructions": "Vamos investigar os logs do servidor web. Execute `journalctl -u apache2` para filtrar logs do sistema para o serviço `apache2`. Em seguida, execute `journalctl -n 5` para visualizar as últimas 5 mensagens gerais de log do sistema.",
    "commandHelp": [
      {
        "cmd": "journalctl -u apache2",
        "desc": "Mostrar logs para o serviço Apache2"
      },
      {
        "cmd": "journalctl -n 5",
        "desc": "Mostrar as últimas 5 mensagens de log do sistema"
      }
    ],
    "objectives": [
      {
        "id": "used_journalctl_u",
        "text": "Filtrar logs para o serviço Apache2 usando Journalctl -u"
      },
      {
        "id": "used_journalctl_n",
        "text": "Visualizar as últimas entradas de log usando Journalctl -n"
      }
    ],
    "hints": [
      "Use Journalctl com a opção -u definida como Apache2 para visualizar logs do servidor web.",
      "Para limitar os logs às últimas 5 linhas, use Journalctl -n 5.",
      "Tente executar: Journalctl -u Apache2 e depois: Journalctl -n 5"
    ]
  },
  "54": {
    "title": "Lógica Reutilizável (funções bash)",
    "description": "Você escreveu loops e condicionais para automatizar ações em scripts. Mas à medida que seus scripts crescem, copiar e colar a mesma lógica repetidamente torna-os difíceis de manter. No bash, podemos agrupar comandos em funções reutilizáveis.\n\n- Para definir uma função, declaramos ela pelo nome seguido de parênteses e chaves: `log_msg() { echo \"msg\"; }`.\n- As funções podem receber argumentos como scripts de shell, que são acessados ​​usando os parâmetros de posição local `$1`, `$2`, etc.\n- Para chamar uma função, basta usar seu nome como qualquer outro comando: `log_msg \"Backup started\"`.",
    "instructions": "Vamos construir um script de backup modular. Crie um script chamado `backup_helper.sh` em sua pasta pessoal. Defina uma função chamada `log_msg` que imprima uma mensagem com carimbo de data/hora (por exemplo, `log_msg() { echo \"[$(date +%T)] $1\"; }` ou similar) e chame-a pelo menos duas vezes dentro do script para registrar ações. Torne-o executável e execute-o.",
    "commandHelp": [
      {
        "cmd": "func_name() { ... }",
        "desc": "Defina uma função no bash"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Crie o arquivo de script \"backup_helper.sh\" em home"
      },
      {
        "id": "has_function",
        "text": "Defina a função log_msg dentro do script"
      },
      {
        "id": "script_executed",
        "text": "Torne o script executável e execute-o"
      }
    ],
    "hints": [
      "Use touch backup_helper.sh e edite-o para incluir shebang #!/bin/bash, log_msg() { ... } e chame log_msg duas vezes.",
      "Lembre-se de executar chmod 755 backup_helper.sh para torná-lo executável antes de executar ./backup_helper.sh.",
      "Tente definir a função: log_msg() { echo \"[LOG] $1\"; } e chame-o como: log_msg 'Starting'"
    ]
  },
  "55": {
    "title": "Agendando tarefas (crontab)",
    "description": "Agora que você escreveu scripts de shell robustos, você não gostaria de fazer login à meia-noite apenas para executar seu auxiliar de backup. O Linux fornece o serviço `cron` para executar comandos ou scripts automaticamente em horários específicos.\n\n- O serviço cron verifica uma tabela de agendamento chamada `crontab`.\n- Cada agendamento cron possui 5 campos que representam o tempo: `minute hour day-of-month month day-of-week` seguido do comando.\n- Por exemplo, `30 2 * * * /path/to/script.sh` executa um script todos os dias às 2h30.\n- Usamos `crontab -l` para listar nossos cron jobs ativos e `crontab <filename>` para carregar programações de um arquivo.",
    "instructions": "Vamos automatizar nosso auxiliar de backup. Escreva uma string de agendamento cron em um arquivo chamado `my_cron` (por exemplo, `* * * * * /home/learner/backup_helper.sh` para ser executado a cada minuto). Instale este planejamento executando `crontab my_cron` e verifique-o executando `crontab -l`.",
    "commandHelp": [
      {
        "cmd": "crontab my_cron",
        "desc": "Instale tarefas cron a partir do arquivo my_cron"
      },
      {
        "cmd": "crontab -l",
        "desc": "Lista tarefas cron ativas para o usuário atual"
      }
    ],
    "objectives": [
      {
        "id": "cron_file_created",
        "text": "Crie o arquivo \"my_cron\" em home com agendamento cron"
      },
      {
        "id": "cron_installed",
        "text": "Instale o agendamento cron usando crontab my_cron"
      },
      {
        "id": "cron_listed",
        "text": "Liste o agendamento cron ativo com crontab -l"
      }
    ],
    "hints": [
      "Use echo '* * * * * /home/learner/backup_helper.sh' > my_cron para criar o arquivo cron.",
      "Carregue o arquivo cron na tabela crontab executando crontab my_cron.",
      "Verifique os cron jobs instalados usando crontab -l"
    ]
  },
  "56": {
    "title": "Encontrando Comandos (que)",
    "description": "Agora que você está familiarizado com variáveis ​​de ambiente ativas como `PATH` (que armazena os diretórios onde o Linux procura comandos), como você encontra o caminho exato do arquivo do programa que é executado quando você digita `ls` ou `grep`? Usamos `which` para localizar binários de comando.\n\n- O comando `which` pesquisa as pastas listadas em sua variável `$PATH` e imprime o caminho absoluto do binário executado quando o comando é executado (por exemplo, `which ls` gera `/bin/ls`).\n- Isso é útil para descobrir onde uma ferramenta está instalada ou resolver conflitos entre várias versões da mesma ferramenta.",
    "instructions": "Vamos encontrar nossas ferramentas. Execute `which ls` para ver onde o executável `ls` está armazenado no sistema. Em seguida, encontre o caminho do comando `grep` executando `which grep`.",
    "commandHelp": [
      {
        "cmd": "which ls",
        "desc": "Encontre o caminho absoluto de ls"
      },
      {
        "cmd": "which grep",
        "desc": "Encontre o caminho absoluto do grep"
      }
    ],
    "objectives": [
      {
        "id": "used_which_ls",
        "text": "Execute o comando \"qual\" em ls"
      },
      {
        "id": "used_which_grep",
        "text": "Execute o comando \"qual\" em grep"
      }
    ],
    "hints": [
      "Execute which ls para encontrar o caminho de ls e which grep para encontrar o caminho de grep.",
      "Tente executar: which ls e depois which grep"
    ]
  },
  "57": {
    "title": "Atalhos de shell personalizados (alias)",
    "description": "Digitar comandos longos com vários sinalizadores pode ser cansativo. No Linux, podemos criar atalhos personalizados chamados aliases. Por exemplo, você pode mapear `ll` para executar `ls -la` automaticamente.\n\n- Para criar um alias temporário, execute `alias name='command'` (por exemplo, `alias ll='ls -la'`).\n- Executar `alias` sem argumentos lista todos os aliases ativos na sessão atual.\n- Para tornar os aliases permanentes durante as reinicializações, eles normalmente são gravados nos arquivos de configuração `.bashrc` ou `.bash_profile`.",
    "instructions": "Vamos configurar alguns atalhos. Crie um alias temporário chamado `la` que executa `ls -a` executando `alias la='ls -a'`. Teste-o executando `la` em seu terminal.",
    "commandHelp": [
      {
        "cmd": "alias la='ls -a'",
        "desc": "Alias ​​la para executar ls -a"
      },
      {
        "cmd": "alias",
        "desc": "Listar aliases ativos"
      }
    ],
    "objectives": [
      {
        "id": "alias_created",
        "text": "Criar alias la para ls -a"
      },
      {
        "id": "alias_run",
        "text": "Executar o alias recém-criado la"
      }
    ],
    "hints": [
      "Defina o alias usando alias la='ls -a' exatamente como mostrado.",
      "Execute o comando alias la no terminal para verificar se funciona.",
      "Tente executar: alias la='ls -a' seguido por: la"
    ]
  },
  "58": {
    "title": "Administração de usuários (useradd & passwd)",
    "description": "Até agora, você tem trabalhado como usuário `learner`. Mas em servidores do mundo real, os administradores de sistemas devem gerenciar várias contas. Vamos aprender como adicionar novos usuários e definir suas senhas.\n\n- O comando `useradd` cria uma nova conta de usuário. Como a criação de contas afeta a segurança do sistema, ela deve ser executada com privilégios de superusuário (por exemplo, `sudo useradd deployer`).\n- O comando `passwd` define ou altera a senha de um usuário. Execute como `sudo passwd deployer` para definir a senha do usuário do implementador.",
    "instructions": "Vamos adicionar a conta de um colega. Crie um novo usuário chamado `deployer` executando `sudo useradd deployer`. Em seguida, defina uma senha para eles executando `sudo passwd deployer` (digite qualquer senha falsa quando solicitado).",
    "commandHelp": [
      {
        "cmd": "sudo useradd deployer",
        "desc": "Criar novo implantador de usuário"
      },
      {
        "cmd": "sudo passwd deployer",
        "desc": "Definir senha para o implantador de usuário"
      }
    ],
    "objectives": [
      {
        "id": "user_created",
        "text": "Criar usuário \"deployer\" usando useradd"
      },
      {
        "id": "passwd_changed",
        "text": "Definir senha para \"deployer\" usando passwd"
      }
    ],
    "hints": [
      "Use sudo useradd deployer para registrar a conta do usuário.",
      "Defina a senha executando sudo passwd deployer.",
      "Tente executar: sudo useradd deployer e depois: sudo passwd deployer"
    ]
  },
  "59": {
    "title": "Alternando contextos de segurança (su)",
    "description": "Agora que você criou a conta `deployer`, como fazer login nela localmente para testar seu ambiente? No Linux, usamos o comando `su` (usuário substituto) para trocar de conta sem fazer logout.\n\n- O comando `su <username>` alterna o shell do terminal atual para a sessão desse usuário.\n- Quando alternado, a execução de `whoami` refletirá o novo nome de usuário.\n- Para retornar à sessão original da sua conta de usuário, digite `exit` ou pressione `Ctrl+D`.",
    "instructions": "Vamos trocar de contexto. Mude para o usuário `deployer` executando `su deployer`. Uma vez logado, execute `whoami` para verificar se você está realmente executando como `deployer`. Quando terminar, digite `exit` para voltar.",
    "commandHelp": [
      {
        "cmd": "su deployer",
        "desc": "Substitua a sessão do usuário pelo implementador"
      },
      {
        "cmd": "whoami",
        "desc": "Verifique o nome da sessão do usuário ativo"
      },
      {
        "cmd": "exit",
        "desc": "Saia da sessão do usuário ativo"
      }
    ],
    "objectives": [
      {
        "id": "switched_user",
        "text": "Mude o contexto do shell para o implementador usando su"
      },
      {
        "id": "verified_whoami",
        "text": "Execute whoami para confirmar que você é o implementador"
      }
    ],
    "hints": [
      "Use su deployer para alternar para a sessão do shell do implementador.",
      "Verifique quem está ativo digitando whoami.",
      "Tente executar: su deployer, depois whoami e então exit"
    ]
  },
  "60": {
    "title": "Secure Shell Access (ssh)",
    "description": "A troca de usuários localmente é útil, mas na computação em nuvem, os servidores residem em data centers remotos. Para conectar-se a eles com segurança pela rede, usamos `ssh` (Secure Shell).\n\n- O comando `ssh` criptografa a conexão entre sua máquina e um host remoto para evitar espionagem.\n- Sintaxe: `ssh user@hostname` ou `ssh user@ip_address` (por exemplo, `ssh admin@192.168.1.100`).\n- A primeira conexão solicitará que você verifique a autenticidade do host remoto exibindo uma impressão digital ECDSA exclusiva.\n\n**Observação:** Como este é um sandbox baseado em navegador, não há nenhum servidor remoto real ao qual se conectar. A execução deste comando mostrará o padrão de saída esperado do mundo real (verificação de host, conexão, sessão) instantaneamente, em vez de uma sessão interativa ao vivo real. Em um terminal real, o ssh colocaria você em um shell remoto genuinamente separado até você digitar `exit`.",
    "instructions": "Vamos nos conectar a um servidor de teste remoto. Conecte-se ao servidor em `192.168.1.100` como o usuário `admin` executando `ssh admin@192.168.1.100` (digite `yes` se solicitado a verificar a chave do host e insira qualquer senha).",
    "commandHelp": [
      {
        "cmd": "ssh admin@192.168.1.100",
        "desc": "Conecte-se com segurança ao servidor de teste remoto"
      }
    ],
    "objectives": [
      {
        "id": "ssh_connected",
        "text": "SSH no servidor remoto em 192.168.1.100 como admin"
      }
    ],
    "hints": [
      "Use o comando ssh seguido de user@host. Aqui, o usuário é admin e o host é 192.168.1.100.",
      "Tente executar: ssh admin@192.168.1.100"
    ]
  },
  "61": {
    "title": "Transferência segura de arquivos (scp)",
    "description": "Agora que você sabe como fazer login em um servidor remoto via SSH, como copiar um arquivo local (como um arquivo de backup) para ele? O comando `scp` (cópia segura) copia arquivos com segurança entre hosts usando SSH nos bastidores.\n\n- A sintaxe é `scp source_path user@host:destination_path`.\n- Por exemplo, `scp log.txt admin@192.168.1.100:/tmp/` copia o arquivo `log.txt` local para a pasta `/tmp/` remota.\n\n**Observação:** Assim como com o ssh, não há nenhum servidor remoto real aqui — a execução deste comando confirma a existência do seu arquivo local e mostra a saída de transferência esperada, mas na verdade não envia dados para lugar nenhum.",
    "instructions": "Vamos enviar nosso arquivo de log para o servidor de teste remoto. Copie o arquivo local `logs.tar.gz` para a pasta `/tmp` em `192.168.1.100` como o usuário `admin` executando `scp logs.tar.gz admin@192.168.1.100:/tmp/`.",
    "commandHelp": [
      {
        "cmd": "scp logs.tar.gz admin@192.168.1.100:/tmp/",
        "desc": "Copiar logs.tar.gz para a pasta /tmp do servidor remoto"
      }
    ],
    "objectives": [
      {
        "id": "scp_completed",
        "text": "Transferir logs.tar.gz para 192.168.1.100:/tmp/ via scp"
      }
    ],
    "hints": [
      "Especifique scp seguido do arquivo local logs.tar.gz e, em seguida, o destino remoto admin@192.168.1.100:/tmp/.",
      "Tente executar: scp logs.tar.gz admin@192.168.1.100:/tmp/"
    ]
  },
  "62": {
    "title": "Compactação de arquivos (gzip e gunzip)",
    "description": "Imagine que você tem um único arquivo de texto contendo um conjunto de dados enorme e deseja reduzir seu tamanho para economizar espaço em disco ou acelerar o compartilhamento. No Linux, compactamos arquivos individuais usando `gzip` e os restauramos usando `gunzip`.\n\n- O comando `gzip <filename>` compacta um arquivo, substituindo-o por uma versão compactada que termina em `.gz` (por exemplo, `backup.txt` passa a ser `backup.txt.gz`).\n- O comando `gunzip <filename.gz>` descompacta o arquivo, restaurando a versão original.",
    "instructions": "Vamos compactar um arquivo para economizar espaço. Execute `gzip note.txt` em sua pasta pessoal. Em seguida, descompacte o arquivo `note.txt.gz` resultante de volta ao seu estado original executando `gunzip note.txt.gz`.",
    "commandHelp": [
      {
        "cmd": "gzip note.txt",
        "desc": "Compactar note.txt em note.txt.gz"
      },
      {
        "cmd": "gunzip note.txt.gz",
        "desc": "Descompactar note.txt.gz de volta em note.txt"
      }
    ],
    "objectives": [
      {
        "id": "used_gzip",
        "text": "Execute o comando \"gzip\" para compactar note.txt"
      },
      {
        "id": "used_gunzip",
        "text": "Execute o comando \"gunzip\" para restaurar note.txt"
      }
    ],
    "hints": [
      "Use gzip note.txt para compactar o arquivo.",
      "Use gunzip note.txt.gz para descompactá-lo novamente.",
      "Tente executar: gzip note.txt seguido de gunzip note.txt.gz"
    ]
  },
  "63": {
    "title": "Administração de grupos (groupadd e grupos)",
    "description": "No Linux, os usuários são organizados em **grupos** para compartilhar permissões facilmente. Por exemplo, todos os desenvolvedores podem pertencer a um grupo denominado `developers`. Isso nos permite compartilhar arquivos com toda a equipe de uma só vez.\n\n- O comando `groupadd` cria um novo grupo. Como esta é uma configuração do sistema, requer privilégios de superusuário (por exemplo, `sudo groupadd developers`).\n- O comando `groups [username]` lista todos os grupos aos quais um usuário pertence. Executado sem argumentos, exibe grupos para o usuário atual.",
    "instructions": "Vamos gerenciar grupos. Crie um novo grupo chamado `developers` executando `sudo groupadd developers`. Em seguida, verifique seus próprios grupos ativos executando o comando `groups`.",
    "commandHelp": [
      {
        "cmd": "sudo groupadd developers",
        "desc": "Crie um novo grupo chamado desenvolvedores"
      },
      {
        "cmd": "groups",
        "desc": "Exiba grupos ativos para o usuário atual"
      }
    ],
    "objectives": [
      {
        "id": "group_created",
        "text": "Crie o grupo \"desenvolvedores\" usando groupadd"
      },
      {
        "id": "checked_groups",
        "text": "Execute o comando \"grupos\""
      }
    ],
    "hints": [
      "Use sudo groupadd desenvolvedores para criar o grupo.",
      "Basta executar o comando groups para listar os grupos.",
      "Tente executar: sudo groupadd desenvolvedores seguido por grupos"
    ]
  },
  "64": {
    "title": "Listando arquivos abertos (lsof)",
    "description": "Em sistemas do tipo Unix, \"tudo é um arquivo\". Isso significa que não apenas arquivos e pastas de texto, mas também soquetes de rede, hardware do sistema e processos são tratados como arquivos. Para descobrir quais arquivos estão sendo acessados ​​por quais programas em execução, usamos `lsof` (List Open Files).\n\n- A execução de `lsof` exibe uma lista abrangente de todos os arquivos abertos, junto com o ID do processo (PID) e o comando que os abriu.\n- Por exemplo, executar `lsof -i` lista todos os arquivos/soquetes da rede, o que é extremamente útil para descobrir qual processo está escutando em uma porta de rede específica (como a porta 80).",
    "instructions": "Vamos inspecionar nossas conexões e arquivos ativos. Execute `lsof` para ver todos os arquivos abertos no sistema.",
    "commandHelp": [
      {
        "cmd": "lsof",
        "desc": "Lista todos os arquivos abertos no sistema"
      }
    ],
    "objectives": [
      {
        "id": "ran_lsof",
        "text": "Execute o comando \"lsof\""
      }
    ],
    "hints": [
      "Use o comando 'lsof' sem argumentos para listar todos os arquivos abertos.",
      "Tente executar: lsof"
    ]
  },
  "65": {
    "title": "Visualizando detalhes da CPU (lscpu)",
    "description": "Ao solucionar problemas de desempenho do sistema ou implementar aplicativos de alta demanda, você precisa conhecer os recursos da CPU do seu sistema. No Linux, lemos informações detalhadas da arquitetura da CPU usando o comando `lscpu`.\n\n- O comando `lscpu` exibe detalhes do processador, como modelo de CPU, fornecedor, velocidade do clock, número de núcleos, detalhes de hyper-threading e tamanhos de cache, diretamente do sistema de arquivos do kernel.",
    "instructions": "Vamos inspecionar o processador. Execute `lscpu` para visualizar os detalhes da CPU do seu sistema.",
    "commandHelp": [
      {
        "cmd": "lscpu",
        "desc": "Exibe informações da arquitetura da CPU"
      }
    ],
    "objectives": [
      {
        "id": "ran_lscpu",
        "text": "Execute o comando \"lscpu\""
      }
    ],
    "hints": [
      "Simplesmente execute o comando lscpu para exibir a configuração do processador.",
      "Tente executar: lscpu"
    ]
  },
  "66": {
    "title": "Arquivando com zip e descompacte",
    "description": "Embora `tar` e `gzip` sejam padrão no Linux, `zip` é o formato de arquivo mais comum no mundo de plataforma cruzada (Windows/macOS). No Linux, empacotamos e compactamos arquivos em arquivos zip usando `zip` e os extraímos usando `unzip`.\n\n- O comando `zip <archive.zip> <files>` cria um arquivo zip.\n- O comando `unzip <archive.zip>` extrai os arquivos do arquivo.",
    "instructions": "Vamos empacotar nossas anotações. Crie um arquivo zip chamado `note.zip` contendo o arquivo `note.txt` em sua pasta pessoal. Em seguida, teste a extração executando `unzip note.zip`.",
    "commandHelp": [
      {
        "cmd": "zip note.zip note.txt",
        "desc": "Crie note.zip contendo note.txt"
      },
      {
        "cmd": "unzip note.zip",
        "desc": "Extraia o conteúdo de note.zip"
      }
    ],
    "objectives": [
      {
        "id": "used_zip",
        "text": "Execute o comando \"zip\""
      },
      {
        "id": "used_unzip",
        "text": "Execute o comando \"unzip\""
      }
    ],
    "hints": [
      "Use zip note.zip note.txt primeiro, seguido de descompacte note.zip.",
      "Tente executar: zip note.zip note.txt e depois descompacte note.zip"
    ]
  },
  "67": {
    "title": "Compressão Alternativa (bzip2 & xz)",
    "description": "Além de `gzip` e `zip`, o Linux suporta outros formatos de compressão otimizados para taxas de compressão mais altas em detrimento da velocidade da CPU. Estes são `bzip2` (bz2) e `xz` (xz).\n\n- O comando `bzip2 <file>` compacta um arquivo, gerando `<file>.bz2`.\n- O comando `xz <file>` usa compactação LZMA sem perdas para criar `<file>.xz`, que produz tamanhos de arquivo excepcionalmente pequenos, tornando-o ideal para versões de kernel Linux.",
    "instructions": "Vamos comparar formatos. Compacte `note.txt` usando `bzip2 note.txt`. Em seguida, compacte os arquivos resultantes usando `xz note.txt` (para simular ambos).",
    "commandHelp": [
      {
        "cmd": "bzip2 note.txt",
        "desc": "Compactar note.txt usando bzip2"
      },
      {
        "cmd": "xz note.txt",
        "desc": "Compactar note.txt usando xz"
      }
    ],
    "objectives": [
      {
        "id": "used_bzip2",
        "text": "Execute bzip2 note.txt"
      },
      {
        "id": "used_xz",
        "text": "Execute xz note.txt"
      }
    ],
    "hints": [
      "Execute bzip2 note.txt para testar a compactação de bzip2.",
      "Execute xz note.txt para testar a compactação xz."
    ]
  },
  "68": {
    "title": "Gerenciamento de pacotes Debian (dpkg)",
    "description": "Enquanto `apt` automatiza o download e resolve dependências de pacotes de repositórios, e se você já baixou um arquivo de pacote `.deb` manualmente e deseja inspecioná-lo ou instalá-lo? No Linux, usamos `dpkg` (Pacote Debian) para interagir diretamente com os pacotes.\n\n- O comando `dpkg -l` lista todos os pacotes atualmente instalados em seu sistema Debian/Ubuntu.\n- O comando `dpkg -s <package>` exibe informações de status, versão e arquitetura de um pacote específico.",
    "instructions": "Vamos consultar o banco de dados de pacotes local. Verifique a lista de pacotes executando `dpkg -l`. Em seguida, consulte os detalhes do programa `tree` executando `dpkg -s tree`.",
    "commandHelp": [
      {
        "cmd": "dpkg -l",
        "desc": "Lista pacotes Debian instalados"
      },
      {
        "cmd": "dpkg -s tree",
        "desc": "Exibe detalhes do pacote em árvore"
      }
    ],
    "objectives": [
      {
        "id": "ran_dpkg_l",
        "text": "Execute \"dpkg -l\" para listar pacotes"
      },
      {
        "id": "ran_dpkg_s",
        "text": "Execute \"dpkg -s tree\" para consultar detalhes"
      }
    ],
    "hints": [
      "Use dpkg -l para recuperar a lista completa de pacotes.",
      "Verifique o status do pacote tree usando dpkg -s tree.",
      "Tente executar: dpkg -l seguido por dpkg -s tree"
    ]
  },
  "69": {
    "title": "Gerenciadores de pacotes RedHat (yum & dnf)",
    "description": "Nem todos os ambientes Linux são baseados em Debian/Ubuntu. Se você trabalha em sistemas RedHat, Fedora ou CentOS, não encontrará `apt` ou `dpkg`. Em vez disso, você gerenciará pacotes usando gerenciadores de pacotes `yum` mais antigos ou `dnf` (Dandified YUM) modernos.\n\n- O comando `dnf check-update` (ou `yum check-update`) se conecta aos repositórios RedHat para procurar atualizações de pacotes disponíveis.\n- O comando `dnf install <package>` busca e instala programas semelhantes a `apt install`.",
    "instructions": "Vamos executar atualizações em um simulador baseado em RedHat. Verifique se há pacotes que precisam de atualizações executando `dnf check-update` (ou `yum check-update`).",
    "commandHelp": [
      {
        "cmd": "dnf check-update",
        "desc": "Verifica atualizações de pacotes RedHat"
      },
      {
        "cmd": "yum check-update",
        "desc": "Verifica atualizações legadas do CentOS"
      }
    ],
    "objectives": [
      {
        "id": "checked_updates",
        "text": "Execute dnf check-update ou yum check-update"
      }
    ],
    "hints": [
      "Use o comando dnf ou yum com o argumento check-update.",
      "Tente executar: dnf check-update"
    ]
  },
  "70": {
    "title": "Gerenciando usuários (adduser & userdel)",
    "description": "Embora `useradd` seja um utilitário de baixo nível que apenas registra detalhes do usuário em arquivos de configuração do sistema, os sistemas Debian/Ubuntu fornecem um script interativo de alto nível chamado `adduser` que automatiza a criação de pastas pessoais, configuração de senhas e inicialização de ambientes shell. Por outro lado, `userdel` exclui contas de usuário de forma limpa.\n\n- A execução de `sudo adduser tester` orienta você na configuração do usuário de forma interativa.\n- Executar `sudo userdel tester` exclui a conta do usuário.",
    "instructions": "Vamos cuidar dos ciclos de vida dos usuários. Crie um usuário usando `sudo adduser tester`. Depois disso, exclua o usuário executando `sudo userdel tester`.",
    "commandHelp": [
      {
        "cmd": "sudo adduser tester",
        "desc": "Criar testador de usuário interativamente"
      },
      {
        "cmd": "sudo userdel tester",
        "desc": "Excluir conta de testador de usuário"
      }
    ],
    "objectives": [
      {
        "id": "ran_adduser",
        "text": "Execute o comando \"adduser\" com sudo"
      },
      {
        "id": "ran_userdel",
        "text": "Execute o comando \"userdel\" com sudo"
      }
    ],
    "hints": [
      "Use sudo adduser tester seguido por sudo userdel tester.",
      "Tente executar: sudo adduser tester e depois: sudo userdel tester"
    ]
  },
  "71": {
    "title": "Visualizando identidades de usuário (id)",
    "description": "Ao solucionar erros de permissão, você deve verificar o contexto exato do identificador de usuário e grupo em que está executando. Fazemos isso usando `id`.\n\n- A execução de `id` imprime o ID do usuário (UID), o ID do grupo primário (GID) do usuário atual e todas as listas de grupos complementares.\n- Executar `id <username>` consulta informações de um usuário específico.",
    "instructions": "Vamos verificar as identidades ativas. Execute `id` para ver seus detalhes e, em seguida, execute `id root` para inspecionar os identificadores de conta do superusuário.",
    "commandHelp": [
      {
        "cmd": "id",
        "desc": "Exibir detalhes de identificação do usuário ativo"
      },
      {
        "cmd": "id root",
        "desc": "Consultar detalhes de identificação da raiz"
      }
    ],
    "objectives": [
      {
        "id": "ran_id_learner",
        "text": "Executar o comando \"id\" para o aluno"
      },
      {
        "id": "ran_id_root",
        "text": "Executar o comando \"id root\""
      }
    ],
    "hints": [
      "Executar id seguido de id root.",
      "Tente executar: id e id root"
    ]
  },
  "72": {
    "title": "Excluindo grupos (groupdel)",
    "description": "Quando as equipes do projeto reorganizam ou desativam serviços, os grupos de segurança correspondentes devem ser limpos. No Linux, excluímos grupos usando `groupdel`.\n\n- O comando `groupdel <group_name>` exclui permanentemente um grupo dos arquivos de configuração do sistema, exigindo privilégios de superusuário.",
    "instructions": "Vamos limpar nossos grupos. Exclua o grupo `developers` executando `sudo groupdel developers`.",
    "commandHelp": [
      {
        "cmd": "sudo groupdel developers",
        "desc": "Exclua o grupo de desenvolvedores"
      }
    ],
    "objectives": [
      {
        "id": "group_deleted",
        "text": "Exclua o grupo \"desenvolvedores\" usando groupdel"
      }
    ],
    "hints": [
      "Use sudo groupdel developers para remover o grupo de /etc/group.",
      "Tente executar: desenvolvedores sudo groupdel"
    ]
  },
  "73": {
    "title": "Verificando Interfaces (ifconfig)",
    "description": "Antes do moderno conjunto de comandos `ip` se tornar padrão, os administradores de sistema Linux dependiam do `ifconfig` (configurador de interface) para visualizar e gerenciar interfaces de rede.\n\n- O comando `ifconfig` exibe interfaces de rede ativas, configuração de IP local, detalhes da máscara de rede e endereços de hardware MAC. Embora obsoleto em algumas distribuições mais recentes, ele continua amplamente utilizado em servidores legados.",
    "instructions": "Vamos executar a ferramenta de configuração clássica. Execute `ifconfig` para inspecionar interfaces de rede ativas.",
    "commandHelp": [
      {
        "cmd": "ifconfig",
        "desc": "Exibe as configurações da interface de rede"
      }
    ],
    "objectives": [
      {
        "id": "ran_ifconfig",
        "text": "Execute o comando \"ifconfig\""
      }
    ],
    "hints": [
      "Execute o comando ifconfig no terminal.",
      "Tente executar: ifconfig"
    ]
  },
  "74": {
    "title": "Conexões de rede (nmcli)",
    "description": "Em estações de trabalho e servidores Linux modernos, as interfaces de rede são gerenciadas por um daemon de sistema chamado NetworkManager. Em vez de editar manualmente os arquivos de configuração, configuramos os detalhes da rede usando `nmcli`.\n\n- O comando `nmcli` (NetworkManager CLI) permite inspecionar conexões de hardware, estados de dispositivos e redes Wi-Fi ativas.",
    "instructions": "Vamos verificar o estado do hardware da rede. Execute `nmcli device` para consultar conexões e estado.",
    "commandHelp": [
      {
        "cmd": "nmcli device",
        "desc": "Lista dispositivos e estados de interface de rede"
      }
    ],
    "objectives": [
      {
        "id": "ran_nmcli_device",
        "text": "Execute o comando \"nmcli device\" ou \"nmcli dev\""
      }
    ],
    "hints": [
      "Use o dispositivo nmcli para listar os status da interface.",
      "Tente executar: dispositivo nmcli"
    ]
  },
  "75": {
    "title": "Estatísticas de soquete e conexão (netstat e ss)",
    "description": "Ao configurar um banco de dados ou servidor web, você deve verificar se o serviço está rodando e escutando na porta correta e verificar se alguma conexão não autorizada foi estabelecida. Fazemos isso usando `netstat` ou `ss`.\n\n- O comando `netstat` (estatísticas de rede) é uma ferramenta clássica para mostrar conexões TCP e portas de escuta. Por exemplo `netstat -tuln` lista as portas de escuta TCP/UDP.\n- O comando `ss` (estatísticas de soquete) é a alternativa moderna e mais rápida ao `netstat` que exibe detalhes de conexão de soquete diretamente do namespace do kernel.",
    "instructions": "Vamos auditar as portas. Verifique os soquetes TCP/UDP de escuta executando `netstat -tuln` e, em seguida, verifique-os usando o comando moderno de estatísticas de soquete `ss -tuln`.",
    "commandHelp": [
      {
        "cmd": "netstat -tuln",
        "desc": "Mostrar portas TCP/UDP de escuta usando netstat"
      },
      {
        "cmd": "ss -tuln",
        "desc": "Mostrar soquetes de escuta usando ss"
      }
    ],
    "objectives": [
      {
        "id": "ran_netstat",
        "text": "Execute \"netstat -tuln\""
      },
      {
        "id": "ran_ss",
        "text": "Execute \"ss -tuln\""
      }
    ],
    "hints": [
      "Execute netstat -tuln primeiro, seguido por ss -tuln.",
      "Tente executar: netstat -tuln e depois ss -tuln"
    ]
  },
  "76": {
    "title": "Rastreando rotas de pacotes (traceroute)",
    "description": "Quando uma página da web falha ao carregar, como você identifica se o problema está no seu roteador doméstico, no seu provedor de serviços de Internet (ISP) ou no servidor de destino? No Linux, rastreamos pacotes usando `traceroute`.\n\n- O comando `traceroute` lista cada gateway de roteador (salto) que um pacote atravessa em seu caminho para um servidor remoto, juntamente com a latência de resposta para cada salto.",
    "instructions": "Vamos traçar o caminho para um servidor web. Execute `traceroute google.com` para ver os saltos.",
    "commandHelp": [
      {
        "cmd": "traceroute google.com",
        "desc": "Rastreie os saltos da rede para google.com"
      }
    ],
    "objectives": [
      {
        "id": "ran_traceroute",
        "text": "Execute o comando \"traceroute\""
      }
    ],
    "hints": [
      "Use traceroute seguido por um nome de domínio como google.com.",
      "Tente executar: traceroute google.com"
    ]
  },
  "77": {
    "title": "Firewalls Linux (ufw e iptables)",
    "description": "Imagine viver em um prédio de apartamentos seguro, onde um segurança fica na entrada, verificando identidades e bloqueando visitantes não autorizados. No Linux, um **firewall** atua como um guarda de segurança para suas portas de rede.\n\n- O comando `ufw` (Firewall Descomplicado) é uma interface amigável para gerenciar regras de firewall. A execução de `sudo ufw status` mostra se o firewall está ativo e quais portas (como a porta 22 para SSH ou a porta 80 para servidores web) estão abertas.\n- O comando `iptables` é a ferramenta Netfilter tradicional de baixo nível que realmente bloqueia ou redireciona pacotes. A execução de `sudo iptables -L` lista as cadeias de segurança ativas e as regras de correspondência de pacotes.",
    "instructions": "Vamos fiscalizar nossos seguranças. Visualize o status do firewall descomplicado executando `sudo ufw status` e, em seguida, verifique as regras do Netfilter de nível inferior executando `sudo iptables -L`.",
    "commandHelp": [
      {
        "cmd": "sudo ufw status",
        "desc": "Exibir regras de firewall ufw"
      },
      {
        "cmd": "sudo iptables -L",
        "desc": "Listar regras de filtragem de pacotes iptables ativas"
      }
    ],
    "objectives": [
      {
        "id": "checked_ufw",
        "text": "Execute o comando \"ufw status\" com sudo"
      },
      {
        "id": "checked_iptables",
        "text": "Execute o comando \"iptables -L\" com sudo"
      }
    ],
    "hints": [
      "Use sudo ufw status para inspecionar o firewall descomplicado.",
      "Use sudo iptables -L para verificar as regras do Netfilter.",
      "Tente executar: sudo ufw status e, em seguida, sudo iptables -L"
    ]
  },
  "78": {
    "title": "Gentileza do processo (nice & renice)",
    "description": "Em um escritório movimentado, algumas tarefas de baixa prioridade (como arquivar recibos) podem esperar, enquanto solicitações de alta prioridade devem ser tratadas imediatamente. O Linux gerencia a prioridade do processo usando valores de **niceness** que variam de -20 (prioridade mais alta) a 19 (prioridade mais baixa).\n\n- O comando `nice` inicia um processo com prioridade personalizada. Por exemplo `nice -n 10 sleep 5` inicia um comando sleep com uma prioridade educada de 10.\n- O comando `renice` altera a prioridade de agendamento de um processo já em execução. Por exemplo, `sudo renice +5 9999` diminui a prioridade do processo 9999.",
    "instructions": "Vamos ajustar as prioridades. Execute um comando de baixa prioridade usando `nice -n 10 sleep 5`. Em seguida, diminua a prioridade do processo não autorizado em execução 9999 executando `sudo renice +5 9999`.",
    "commandHelp": [
      {
        "cmd": "nice -n 10 sleep 5",
        "desc": "Inicie o sono com um valor de gentileza de 10"
      },
      {
        "cmd": "sudo renice +5 9999",
        "desc": "Prioridade mais baixa do PID 9999"
      }
    ],
    "objectives": [
      {
        "id": "used_nice",
        "text": "Execute o comando \"nice\" com -n 10"
      },
      {
        "id": "used_renice",
        "text": "Execute o comando \"renice\" com sudo"
      }
    ],
    "hints": [
      "Use nice -n 10 sleep 5 para iniciar um processo agradável.",
      "Altere a prioridade do PID ativo usando sudo renice +5 9999.",
      "Tente executar: nice -n 10 sleep 5 e sudo renice +5 9999"
    ]
  },
  "79": {
    "title": "Retomando Jobs em Background (bg)",
    "description": "Já vimos como iniciar uma tarefa em background usando `&` e trazê-la de volta usando `fg`. Mas e se você iniciasse um comando sem `&` ou o suspendesse com `Ctrl+Z`? Você pode retomá-lo em segundo plano usando `bg`!\n\n- O comando `bg` retoma os trabalhos suspensos, permitindo que sejam executados em segundo plano sem bloquear o prompt do terminal.",
    "instructions": "Vamos executar um trabalho em segundo plano. Inicie `sleep 200 &` em segundo plano, execute `jobs` para listar os trabalhos ativos e, em seguida, execute `bg` para garantir que a execução seja retomada.",
    "commandHelp": [
      {
        "cmd": "sleep 200 &",
        "desc": "Iniciar processo em segundo plano"
      },
      {
        "cmd": "jobs",
        "desc": "Listar trabalhos em segundo plano ativos"
      },
      {
        "cmd": "bg",
        "desc": "Retomar trabalhos em segundo plano"
      }
    ],
    "objectives": [
      {
        "id": "ran_sleep_bg",
        "text": "Iniciar um comando sleep com &"
      },
      {
        "id": "ran_jobs",
        "text": "Execute o comando \"jobs\""
      },
      {
        "id": "ran_bg",
        "text": "Execute o comando \"bg\""
      }
    ],
    "hints": [
      "Execute sleep 200 & seguido por jobs e finalmente bg."
    ]
  },
  "80": {
    "title": "Estatísticas de E/S e CPU (iostat)",
    "description": "Quando um banco de dados ou aplicativo da Web é executado lentamente, como determinar se o problema é um gargalo de CPU ou um disco rígido lento? No Linux, monitoramos as métricas de desempenho de saída/entrada do sistema usando `iostat`.\n\n- O comando `iostat` exibe estatísticas de relatório sobre o uso da CPU e a taxa de transferência de leitura/gravação do dispositivo ativo, ajudando a identificar o congestionamento do disco.",
    "instructions": "Vamos verificar os logs de desempenho. Execute o comando `iostat` para imprimir estatísticas de E/S.",
    "commandHelp": [
      {
        "cmd": "iostat",
        "desc": "Exibir estatísticas de entrada/saída"
      }
    ],
    "objectives": [
      {
        "id": "ran_iostat",
        "text": "Execute o comando \"iostat\""
      }
    ],
    "hints": [
      "Digite iostat no terminal e pressione Enter.",
      "Tente executar: iostat"
    ]
  },
  "81": {
    "title": "Pesquisando Pacotes (apt search)",
    "description": "Antes de instalar software no Linux, como você descobre quais pacotes estão disponíveis no repositório? No Linux, usamos `apt search` para consultar o catálogo de software por palavra-chave.\n\n- O comando `apt search <keyword>` verifica as descrições do repositório e lista os pacotes de software correspondentes junto com suas versões.\n- Ao contrário de `apt install`, a pesquisa em repositórios de pacotes lê apenas arquivos de índice de catálogo local e **não** requer privilégios de superusuário (`sudo`).",
    "instructions": "Vamos pesquisar no repositório de pacotes! Execute `apt search tree` para localizar pacotes relacionados à visualização de diretório no catálogo do software.",
    "commandHelp": [
      {
        "cmd": "apt search tree",
        "desc": "Pesquise nos repositórios de pacotes por pacotes que correspondam à \"árvore\""
      }
    ],
    "objectives": [
      {
        "id": "ran_apt_search",
        "text": "Execute \"apt search tree\" para consultar o catálogo de pacotes"
      }
    ],
    "hints": [
      "Use o comando apt search seguido pelo nome ou palavra-chave do pacote que você deseja procurar.",
      "Execute apt search tree para visualizar os pacotes disponíveis no repositório.",
      "Tente executar: apt search tree"
    ]
  },
  "82": {
    "title": "Purgando pacotes (apt purge)",
    "description": "Ao desinstalar software no Linux, o `apt remove` padrão desinstala os binários do aplicativo, mas deixa os arquivos de configuração do sistema para trás, caso você reinstale mais tarde. Para eliminar completamente um pacote de software E apagar todos os arquivos de configuração associados, usamos `apt purge` (ou `apt remove --purge`).\n\n- O comando `sudo apt purge <package>` remove o aplicativo e apaga todos os arquivos de configuração restantes.\n- Como a limpeza modifica pastas e arquivos de configuração em todo o sistema, ela requer privilégios de superusuário (`sudo`).",
    "instructions": "Vamos remover completamente um pacote e seus arquivos de configuração. Execute `sudo apt purge tree` para limpar o programa `tree` do sistema.",
    "commandHelp": [
      {
        "cmd": "sudo apt purge tree",
        "desc": "Limpe o pacote e limpe seus arquivos de configuração"
      }
    ],
    "objectives": [
      {
        "id": "purged_tree",
        "text": "Limpe o pacote \"tree\" usando \"sudo apt purge tree\""
      }
    ],
    "hints": [
      "Use o apt purge com privilégios de superusuário para remover completamente um pacote junto com seus arquivos de configuração.",
      "Execute sudo apt purge tree para limpar o pacote tree.",
      "Tente executar: sudo apt purge tree"
    ]
  },
  "83": {
    "title": "Estrutura de diretórios Linux e FHS",
    "description": "Todo sistema Linux segue uma hierarquia de sistema de arquivos padrão começando no diretório raiz `/`. Ao contrário do Windows (que usa letras de unidade como `C:` ou `D:`), o Linux unifica todos os arquivos e armazenamento em `/`.\n\nAqui estão os principais diretórios do sistema que todo usuário Linux deve conhecer:\n- `/` (Root): A pasta pai de nível superior de todo o sistema.\n- `/etc`: contém configurações do sistema (por exemplo, `/etc/hosts`, `/etc/passwd`).\n- `/var`: contém dados variáveis ​​que mudam com o tempo (logs, spool, caches como `/var/log`).\n- `/home`: Pastas pessoais do usuário (por exemplo, `/home/learner`).\n- `/tmp`: Área de armazenamento temporário para arquivos transitórios.\n- `/usr`: Utilitários de usuário, aplicativos e bibliotecas de sistema.",
    "instructions": "Vamos explorar o layout do sistema! Primeiro, navegue até o diretório raiz executando `cd /`. Em seguida, execute `ls /etc` para visualizar os arquivos de configuração do sistema armazenados em `/etc`.",
    "commandHelp": [
      {
        "cmd": "cd /",
        "desc": "Navegue até o diretório raiz"
      },
      {
        "cmd": "ls /etc",
        "desc": "Lista os arquivos de configuração em /etc"
      }
    ],
    "objectives": [
      {
        "id": "visited_root",
        "text": "Navegue até o diretório raiz (/)"
      },
      {
        "id": "listed_etc",
        "text": "Lista o conteúdo do diretório /etc"
      }
    ],
    "hints": [
      "Use 'cd /' para ir para o diretório raiz.",
      "Use 'ls /etc' para visualizar os arquivos de configuração dentro de /etc.",
      "Tente executar: cd / e depois: ls /etc"
    ]
  }
};
