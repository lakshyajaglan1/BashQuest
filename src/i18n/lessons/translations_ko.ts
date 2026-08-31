import type { LessonTranslation } from "./types";

export const translations_ko: Record<number, LessonTranslation> = {
  "1": {
    "title": "나는 누구이며 어디에 있습니까?",
    "description": "수백만 권의 책이 있는 거대하고 어두운 도서관에 들어갔는데 지도도 없고 자신의 이름표도 기억할 수 없다고 상상해 보세요. 무엇이든 찾아보기 전에 자신이 누구인지, 어디에 서 있는지 알아야 합니다. Linux 셸에서는 똑같은 질문으로 시작합니다!\n\n- `whoami` 명령은 현재 로그인된 사용자 이름을 인쇄합니다.\n- `pwd`(작업 디렉터리 인쇄) 명령은 GPS처럼 작동하여 현재 서있는 정확한 폴더 경로를 보여줍니다.",
    "instructions": "방향을 찾아보자! 먼저 `whoami`를 실행하여 활성 사용자 이름을 확인한 다음 `pwd`을 실행하여 파일 시스템의 현재 폴더 위치를 인쇄합니다.",
    "commandHelp": [
      {
        "cmd": "whoami",
        "desc": "활성 사용자 이름을 인쇄합니다."
      },
      {
        "cmd": "pwd",
        "desc": "현재 작업 디렉터리를 인쇄합니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_whoami",
        "text": "\"whoami\" 명령을 실행합니다."
      },
      {
        "id": "ran_pwd",
        "text": "\"pwd\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "사용자와 경로를 식별하기 위해 실행해야 하는 명령을 확인합니다.",
      "'whoami' 명령은 사용자 이름을 표시하고 'pwd'는 현재 경로를 표시합니다.",
      "실행해 보세요: whoami, 그런 다음 pwd"
    ]
  },
  "2": {
    "title": "파일 탐색 및 나열",
    "description": "이제 자신이 어디에 있는지 알았으니 이 디지털 도서관의 다른 방을 어떻게 둘러보고 이동합니까? Linux에서는 두 가지 간단한 명령을 사용하여 이를 수행합니다.\n\n- `ls`: 방 안에 있는 모든 파일과 폴더를 보기 위해 방의 불을 켜는 것과 같습니다.\n- `cd <path>`: \"디렉토리 변경\"의 줄임말로, 문을 통해 다른 폴더로 이동할 수 있습니다.\n\n이동하려는 위치를 지정하려면 **절대** 경로(`/var/log`과 같이 시스템의 루트 `/`에서 시작) 또는 **상대** 경로(예: `..`를 사용하여 상위 폴더로 돌아가는 것과 같이 현재 위치에 따라)를 사용할 수 있습니다.",
    "instructions": "살펴보겠습니다. `cd /var/log`을 실행하여 `/var/log` 폴더로 이동한 다음 `ls` 명령을 실행하여 내부에 저장된 로그 파일을 확인합니다.",
    "commandHelp": [
      {
        "cmd": "ls",
        "desc": "현재 디렉터리의 파일 목록을 표시합니다."
      },
      {
        "cmd": "cd /var/log",
        "desc": "디렉터리를 /var/log로 변경합니다."
      }
    ],
    "objectives": [
      {
        "id": "in_var_log",
        "text": "디렉터리를 /var/log로 변경합니다."
      },
      {
        "id": "ran_ls",
        "text": "/var/log에서 \"ls\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "특정 디렉터리에서 파일을 탐색하고 나열하는 방법에 대해 생각합니다.",
      "cd를 사용하여 디렉토리를 /var/log로 변경한 다음 ls를 사용하십시오.",
      "다음을 실행해 보십시오: cd /var/log, 그리고 ls"
    ]
  },
  "3": {
    "title": "디렉토리 만들기",
    "description": "책상에 서류가 잔뜩 쌓여 있고, 물건을 깔끔하게 유지하려면 물리적인 폴더가 필요하다고 상상해 보세요. Linux에서는 `mkdir`(디렉토리 만들기) 명령을 사용하여 폴더(디렉토리)를 생성하여 파일을 구성합니다.\n\n`mkdir code`을 실행하면 현재 있는 위치에 \"code\"라는 이름의 새로운 폴더가 생성됩니다. `mkdir`에 상대 경로 또는 절대 경로를 제공하여 파일 시스템의 어느 위치에나 폴더를 만들 수 있습니다.",
    "instructions": "작업 공간을 만들어 보겠습니다. `cd ~`(또는 `cd /home/learner`)을 실행하여 홈 디렉터리로 돌아간 다음 그 안에 `projects`라는 새 폴더를 만듭니다.",
    "commandHelp": [
      {
        "cmd": "cd ~",
        "desc": "홈 디렉터리로 돌아가기"
      },
      {
        "cmd": "mkdir projects",
        "desc": "프로젝트 폴더 생성"
      }
    ],
    "objectives": [
      {
        "id": "in_home",
        "text": "홈 폴더(/home/learner)에 위치"
      },
      {
        "id": "used_mkdir",
        "text": "\"mkdir\" 명령 사용"
      },
      {
        "id": "dir_exists",
        "text": "\"projects\"라는 디렉터리 생성"
      }
    ],
    "hints": [
      "먼저 올바른 시작 디렉터리에 있는지 확인하세요.",
      "홈 디렉터리(~ 또는 /home/learner)로 이동하여 mkdir 명령을 사용합니다.",
      "실행해 보세요: cd ~ 다음에 mkdir 프로젝트가 옵니다."
    ]
  },
  "4": {
    "title": "중첩된 디렉터리 및 옵션",
    "description": "중첩된 인형 세트를 만들려고 하는데 내부에 작은 인형을 만들기 전에 가장 바깥쪽에 있는 인형을 만들어야 한다고 상상해 보세요. 기본적으로 `mkdir`은 이와 같습니다. 아직 존재하지 않는 폴더 내부에 폴더 생성을 거부합니다. 폴더를 하나씩 생성하는 번거로움을 건너뛰기 위해 스위치를 사용합니다.\n\n- `-p`(또는 `--parents`) 옵션은 `mkdir`에 최종 폴더로 가는 도중에 누락된 상위 폴더를 자동으로 빌드하도록 지시합니다. 예를 들어 `mkdir -p workspace/src/utils`는 단일 명령으로 `workspace`, `workspace/src` 및 `workspace/src/utils`을 모두 생성합니다.\n\n**중요한 이유**: `-p` 없이 `mkdir workspace/src/utils`을 실행하고 `workspace` 및 `workspace/src`이 아직 존재하지 않는 경우 `mkdir: cannot create directory 'workspace/src/utils': No such file or directory`이 표시됩니다. `-p` 플래그는 누락된 모든 상위 폴더를 자동으로 생성하여 이 문제를 해결합니다.",
    "instructions": "깊은 폴더 구조를 만들어 보겠습니다. `mkdir -p workspace/src/utils`을 사용하여 홈 폴더에 중첩 경로 `workspace/src/utils`을 만듭니다.",
    "commandHelp": [
      {
        "cmd": "mkdir -p path",
        "desc": "중첩된 디렉터리 및 상위 디렉터리 생성"
      }
    ],
    "objectives": [
      {
        "id": "nested_dir_exists",
        "text": "중첩된 디렉터리 작업 공간/src/utils 생성"
      },
      {
        "id": "used_p_switch",
        "text": "mkdir에서 -p 또는 --parents 스위치 사용"
      }
    ],
    "hints": [
      "존재하지 않는 경우 상위 디렉터리를 자동으로 생성하는 mkdir 플래그를 찾습니다.",
      "중첩된 폴더를 생성하려면 -p 스위치와 함께 mkdir을 사용하십시오.",
      "다음을 실행해 보세요: mkdir -p 작업 공간/src/utils"
    ]
  },
  "5": {
    "title": "화면 정리",
    "description": "책상이 지저분한 메모와 종이로 덮여 있을 때 당황한 적이 있습니까? 터미널도 복잡해질 수 있습니다. 그렇다면 이전 텍스트를 모두 제거하고 새로 시작할 수 있습니다.\n\n- `clear` 명령은 보이는 화면을 깨끗하게 닦아서 이전 출력을 보기 밖으로 밀어내어 터미널 상단에 새로운 빈 캔버스를 갖게 합니다.",
    "instructions": "숨쉴 공간을 확보하세요! `clear`을 실행하여 화면을 깨끗하게 청소하세요.",
    "commandHelp": [
      {
        "cmd": "clear",
        "desc": "터미널 화면을 지웁니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_clear",
        "text": "\"clear\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "이전 텍스트를 모두 지우고 새로 시작합니다.",
      "터미널 화면을 지우는 명령을 실행합니다.",
      "실행해 보세요: 지우기"
    ]
  },
  "6": {
    "title": "쉘 도움말 찾기",
    "description": "새 보드 게임을 구입할 때 일반적으로 어떤 동작이 허용되는지 확인하기 위해 룰북이나 참조 카드를 살펴봅니다. 터미널 에뮬레이터에는 치트 시트가 내장되어 있습니다!\n\n- `help` 명령은 이 시뮬레이터가 지원하는 모든 단일 명령과 출력 파이핑 또는 리디렉션 지원 여부에 대한 세부 정보를 나열합니다.",
    "instructions": "규칙서를 살펴보겠습니다. 사용할 수 있는 명령의 전체 목록을 보려면 `help`을 실행하세요.",
    "commandHelp": [
      {
        "cmd": "help",
        "desc": "사용 가능한 명령 나열"
      }
    ],
    "objectives": [
      {
        "id": "ran_help",
        "text": "\"help\" 명령 실행"
      }
    ],
    "hints": [
      "지침을 검토하여 규칙서 도움말에 적합한 명령을 찾으세요.",
      "'help' 명령을 사용하십시오.",
      "실행해 보세요: help"
    ]
  },
  "7": {
    "title": "빈 파일 만들기",
    "description": "새 일지를 작성하고 싶지만 먼저 빈 종이가 필요하다고 상상해 보세요. Linux에서는 `touch` 명령을 사용하여 새로운 빈 텍스트 파일을 가져옵니다.\n\n- `touch` 명령은 아직 존재하지 않는 경우 새로운 빈 파일을 생성합니다(예: `draft.txt`을 생성하기 위해 `touch draft.txt` 실행). 파일이 이미 존재하는 경우 내용을 변경하지 않고 파일의 \"마지막 수정\" 타임스탬프만 업데이트합니다. 새 프로젝트 폴더에 파일을 넣어 보겠습니다.",
    "instructions": "빈 슬레이트를 만들어 보겠습니다. `projects` 폴더 내에 `task.txt`이라는 빈 파일을 만듭니다(폴더를 먼저 입력하거나 `touch projects/task.txt` 사용).",
    "commandHelp": [
      {
        "cmd": "cd projects",
        "desc": "프로젝트 폴더 입력"
      },
      {
        "cmd": "touch task.txt",
        "desc": "task.txt 파일 생성"
      }
    ],
    "objectives": [
      {
        "id": "used_touch",
        "text": "\"touch\" 명령 사용"
      },
      {
        "id": "file_exists",
        "text": "\"projects\" 내에 \"task.txt\" 파일 생성"
      }
    ],
    "hints": [
      "어떤 명령이 새로운 빈 파일을 생성하는지 생각해 보세요.",
      "'projects' 디렉터리 내에서 'touch' 명령을 사용하세요.",
      "실행해 보세요: projects/task.txt를 터치하세요."
    ]
  },
  "8": {
    "title": "파일 내용 읽기",
    "description": "폴더를 열고 텍스트 페이지를 꺼내서 읽는 것을 생각해 보세요. Linux에서는 `cat`(연결) 명령을 사용하여 무거운 텍스트 편집기를 열지 않고도 즉시 파일을 읽을 수 있습니다.\n\n- `cat` 명령은 파일의 전체 내용을 터미널 화면에 직접 인쇄합니다. 예를 들어 `cat notes.txt`을 실행하면 `notes.txt` 안에 무엇이 쓰여 있는지 바로 확인할 수 있습니다.",
    "instructions": "시스템 파일을 읽어보겠습니다. `cat /etc/hosts`를 실행하여 `/etc/hosts`에 있는 로컬 네트워크 구성 파일의 내용을 인쇄합니다.",
    "commandHelp": [
      {
        "cmd": "cat /etc/hosts",
        "desc": "호스트 파일 내용 인쇄"
      }
    ],
    "objectives": [
      {
        "id": "cat_hosts",
        "text": "/etc/hosts에서 \"cat\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "파일 내용을 출력/표시하는 명령이 무엇인지 생각해 보세요.",
      "/etc/hosts 파일에 'cat' 명령을 사용하십시오.",
      "실행해 보세요: cat /etc/hosts"
    ]
  },
  "9": {
    "title": "파일 이름의 공백 처리",
    "description": "로봇에게 \"내 침실을 파란색으로 칠해\"라고 지시하는 경우 \"내 침실\"이 단일 장소인지 아니면 \"내\"와 \"침실\"이 두 개의 다른 명령인지 알아야 합니다. Linux는 공백을 사용하여 명령과 인수를 구분합니다. 따라서 `mkdir my folder`을 실행하면 Linux는 두 개의 별도 폴더를 생성하려고 한다고 생각합니다. 하나는 \"my\"라는 이름이고 다른 하나는 \"folder\"라는 이름입니다!\n\n- 공백이 포함된 이름이 단일 항목임을 Linux에 알리려면 이름을 따옴표(`\"my folder\"` 또는 `'my folder'`)로 묶거나 백슬래시를 사용하여 공백을 이스케이프해야 합니다(`my\\ folder`).",
    "instructions": "이름을 공백으로 처리해 보겠습니다. 홈 디렉터리에 `\"my code\"`라는 폴더를 만든 다음 그 안에 `\"my task\"`이라는 빈 파일을 만듭니다.",
    "commandHelp": [
      {
        "cmd": "mkdir \"my code\"",
        "desc": "이름에 공백이 있는 폴더 생성"
      },
      {
        "cmd": "touch \"my code/my task\"",
        "desc": "이름에 공백이 있는 파일 생성"
      }
    ],
    "objectives": [
      {
        "id": "dir_with_space_exists",
        "text": "\"my code\" 디렉터리 생성"
      },
      {
        "id": "file_with_space_exists",
        "text": "\"my code\" 안에 \"my task\" 파일 생성"
      }
    ],
    "hints": [
      "이름에 공백이 있는 파일이나 디렉터리를 생성할 때는 이름을 따옴표로 묶습니다.",
      "mkdir \"내 코드\"를 사용한 다음 \"내 코드/내 작업\"을 터치하세요.",
      "다음을 실행해 보세요: mkdir \"my code\" 및 \"my code/my task\" 터치"
    ]
  },
  "10": {
    "title": "파일 쓰기 및 덮어쓰기",
    "description": "칠판에 메시지를 쓰려면 먼저 칠판을 완전히 깨끗이 닦은 다음 새 단어를 쓰세요. Linux에서는 `>`(출력 리디렉션) 연산자를 사용하여 파일에 메시지를 씁니다.\n\n- `echo \"message\"` 명령은 일반적으로 텍스트를 화면에 인쇄합니다.\n- `>` 기호를 추가하면 해당 텍스트가 파일로 대신 리디렉션됩니다. 예를 들어 `echo \"Hi\" > greeting.txt`은 `greeting.txt`에 \"Hi\"를 씁니다. 파일에 이미 텍스트가 있으면 `>`는 해당 텍스트를 새 메시지로 완전히 덮어씁니다.",
    "instructions": "새 파일에 쓰겠습니다. 홈 폴더 `/home/learner`의 `status.txt` 파일에 \"System Online\"이라는 텍스트를 저장합니다.",
    "commandHelp": [
      {
        "cmd": "echo \"System Online\" > status.txt",
        "desc": "텍스트로 status.txt 생성"
      }
    ],
    "objectives": [
      {
        "id": "used_echo_redirect",
        "text": "> 리디렉션으로 echo 사용"
      },
      {
        "id": "file_created",
        "text": "홈 디렉터리에 \"status.txt\" 생성"
      },
      {
        "id": "content_correct",
        "text": "파일 내용은 정확히 \"시스템 온라인\"입니다."
      }
    ],
    "hints": [
      "텍스트를 파일에 쓰려면 echo 명령의 출력을 리디렉션할 수 있습니다.",
      "'>' 연산자를 사용하여 echo \"System Online\"을 status.txt로 리디렉션합니다.",
      "실행해 보세요: echo \"System Online\" > status.txt"
    ]
  },
  "11": {
    "title": "파일에 추가",
    "description": "칠판을 정리하는 대신 하단에 새 줄을 추가하고 싶다면 어떻게 해야 할까요? Linux에서는 `>>`(리디렉션 추가) 연산자를 사용하여 기존 콘텐츠를 건드리지 않고 파일 끝에 텍스트를 추가합니다.\n\n- `>>` 연산자는 파일 맨 아래에 새 텍스트를 추가합니다. 예를 들어 `echo \"New Line\" >> logs.txt`는 모든 이전 로그를 안전하게 유지하면서 `logs.txt` 끝에 \"새 줄\"을 추가합니다.",
    "instructions": "한 줄을 추가해 보겠습니다. 홈 폴더 `/home/learner` 내의 `status.txt` 파일 맨 아래에 \"All Checks Green\" 텍스트를 추가한 다음 `cat`을 실행하여 두 줄을 모두 확인합니다.",
    "commandHelp": [
      {
        "cmd": "echo \"All Checks Green\" >> status.txt",
        "desc": "status.txt에 텍스트 추가"
      }
    ],
    "objectives": [
      {
        "id": "used_append",
        "text": ">> 추가 리디렉션과 함께 에코 사용"
      },
      {
        "id": "has_first_line",
        "text": "첫 번째 줄은 여전히 ​​\"시스템 온라인\"입니다."
      },
      {
        "id": "has_second_line",
        "text": "두 번째 줄은 \"모든 검사가 녹색\"입니다."
      },
      {
        "id": "used_cat",
        "text": "\"cat\" 명령을 사용하여 결과를 확인합니다."
      }
    ],
    "hints": [
      "기존 파일 콘텐츠를 덮어쓰지 않도록 추가 리디렉션을 사용합니다.",
      "텍스트를 추가하려면 '>>' 연산자를 사용하고 이를 확인하려면 'cat'을 사용하세요.",
      "실행해 보세요: echo \"All Checks Green\" >> status.txt 및 cat status.txt"
    ]
  },
  "12": {
    "title": "파일 복사 및 이동",
    "description": "방을 재구성한다고 상상해 보십시오. 때로는 문서의 복사본을 만들어 다른 서랍에 보관하고 싶고, 때로는 폴더를 가져와 새 선반에 밀어 넣거나 레이블을 변경하고 싶을 때도 있습니다. Linux에서는 간단한 명령을 사용하여 이 작업을 수행합니다.\n\n- `cp <source> <destination>`은(는) 새 위치에 파일의 동일한 복사본을 생성합니다.\n- `mv <source> <destination>`은 파일을 새 폴더로 이동하거나 파일을 동일한 폴더에 보관하는 경우 파일 이름을 바꿉니다(예: `mv old.txt new.txt`).",
    "instructions": "파일 이름을 바꾸겠습니다. `mv` 명령을 사용하여 홈 폴더의 `status.txt` 이름을 `system.log`로 변경합니다.",
    "commandHelp": [
      {
        "cmd": "mv status.txt system.log",
        "desc": "status.txt를 system.log로 이름 바꾸기"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "이름을 바꾸려면 \"mv\" 명령을 사용하십시오."
      },
      {
        "id": "old_removed",
        "text": "원래 status.txt가 삭제/이름이 바뀌었습니다."
      },
      {
        "id": "new_created",
        "text": "새 파일 system.log가 올바른 내용으로 존재합니다."
      }
    ],
    "hints": [
      "파일 이름을 바꾸거나 파일을 이동하는 명령이 무엇인지 생각해보세요.",
      "'mv' 명령을 사용하여 status.txt의 이름을 system.log로 바꿉니다.",
      "실행해 보세요: mv status.txt system.log"
    ]
  },
  "13": {
    "title": "와일드카드 및 다중 파일 작업",
    "description": "\"log_monday\", \"log_tuesday\" 및 \"log_wednesday\"라는 레이블이 붙은 폴더 스택이 있고 모든 이름을 입력하지 않고 한 번에 모든 폴더를 열고 읽고 싶다고 가정해 보세요. Linux에서는 **와일드카드**를 검색 단축키로 사용할 수 있습니다!\n\n- `*` 기호는 모든 길이의 모든 문자와 일치합니다. 예를 들어 `cat log_*`은 \"log_\"로 시작하는 모든 파일을 읽습니다.\n- `?` 기호는 단일 문자 자리 표시자 역할을 합니다. 예를 들어 `log_?.txt`은 `log_1.txt`와 일치하지만 `log_12.txt`은 무시됩니다.",
    "instructions": "여러 로그를 병합해 보겠습니다. `*` 와일드카드 및 `>` 리디렉션을 사용하여 홈 디렉터리에서 `log_`으로 시작하는 모든 파일의 내용을 `combined.log`이라는 단일 파일로 결합합니다.",
    "commandHelp": [
      {
        "cmd": "cat log_* > combined.log",
        "desc": "일치하는 모든 파일을 결합된.log로 결합"
      }
    ],
    "objectives": [
      {
        "id": "used_wildcard",
        "text": "와일드카드 패턴(log_*)과 함께 cat 사용"
      },
      {
        "id": "combined_exists",
        "text": "홈 디렉터리에 \"combined.log\" 생성"
      },
      {
        "id": "content_combined",
        "text": "log_1, log_2 및 log_3의 로그가 있는지 확인"
      }
    ],
    "hints": [
      "와일드카드를 사용하여 log_로 시작하는 여러 파일을 일치시키는 방법에 대해 생각해 보세요.",
      "cat log_*를 사용하여 모든 일치 파일을 읽고 출력을 결합된.log로 리디렉션합니다.",
      "실행해 보세요: cat log_* > Combined.log"
    ]
  },
  "14": {
    "title": "파일 및 폴더 제거",
    "description": "실제 책상을 정리할 때 실수를 했을 경우 재활용할 수 있는 오래된 종이를 재활용 쓰레기통에 버릴 수도 있습니다. Linux에는 안전망이 없습니다. 터미널에서 무언가를 삭제하면 영원히 사라지게 됩니다!\n\n- `rm` 명령은 파일을 삭제합니다.\n- 폴더에는 다른 파일이 포함될 수 있으므로 `rm`은 기본적으로 폴더를 삭제하지 않습니다. `-r`(재귀) 플래그를 추가하여 Linux에게 폴더에 있는 모든 항목과 함께 폴더를 삭제하도록 지시해야 합니다.\n\n**이것이 중요한 이유**: `downloads`가 폴더일 때 `-r` 없이 `rm downloads`을 실행하면 `rm: cannot remove 'downloads': Is a directory`이 표시됩니다. `-r` 플래그는 Linux에 폴더와 그 안에 있는 모든 항목을 반복적으로 삭제하도록 지시합니다.",
    "instructions": "홈 디렉토리를 정리합시다. `rm -r downloads`을 실행하여 `downloads` 폴더와 모든 내용을 영구적으로 삭제합니다.",
    "commandHelp": [
      {
        "cmd": "rm -r downloads",
        "desc": "폴더를 재귀적으로 삭제합니다."
      }
    ],
    "objectives": [
      {
        "id": "used_rm",
        "text": "-r 플래그와 함께 \"rm\" 명령을 사용합니다."
      },
      {
        "id": "downloads_removed",
        "text": "/home/learner/downloads 디렉터리가 삭제됩니다."
      }
    ],
    "hints": [
      "파일이나 디렉터리를 재귀적으로 제거하는 명령이 무엇인지 생각해보세요.",
      "재귀 옵션(-r)과 함께 'rm' 명령을 사용합니다.",
      "다음을 실행해 보세요: rm -r downloads"
    ]
  },
  "15": {
    "title": "파이프 및 화장실 소개",
    "description": "한 작업자가 제품을 포장한 후 즉시 다음 작업자에게 전달하여 상자에 포장하는 조립 라인을 상상해 보십시오. 중간 저장 공간이 필요하지 않습니다. Linux에서는 **파이프**(`|`)를 사용하여 이와 똑같은 명령을 연결합니다.\n\n- 파이프(`|`)는 한 명령의 출력을 다음 명령의 입력으로 직접 라우팅합니다. 예를 들어, `ls | wc -l`는 파일을 나열하고 해당 목록을 즉시 `wc -l`(단어 수 - 줄)로 전달하여 임시 파일 없이도 즉시 파일 수를 계산합니다.\n\n**중요한 이유**: `-l` 없이 `wc`을 실행하면 줄, 단어, 바이트(예: `  5  10  85`)라는 세 가지 별도의 숫자가 출력됩니다. 이로 인해 깔끔한 단일 숫자 개수가 필요한 파이프라인이나 스크립트에서 사용하기가 어렵습니다. `-l` 플래그는 출력을 줄 수로만 제한합니다.",
    "instructions": "몇 가지 명령을 연결해 보겠습니다. 파이프(`ls | wc -l`)를 사용하여 `/home/learner`의 파일 수를 계산하고 `>` 리디렉션을 사용하여 `file_count.txt`이라는 파일에 최종 수를 씁니다.",
    "commandHelp": [
      {
        "cmd": "ls | wc -l",
        "desc": "현재 디렉터리의 파일 및 폴더 수 계산"
      },
      {
        "cmd": "ls | wc -l > file_count.txt",
        "desc": "file_count.txt에 파일 수 기록"
      }
    ],
    "objectives": [
      {
        "id": "used_pipe",
        "text": "파이프(|)를 사용하여 ls를 wc와 연결"
      },
      {
        "id": "file_count_exists",
        "text": "홈 디렉터리에 \"file_count.txt\" 파일 생성"
      },
      {
        "id": "count_is_correct",
        "text": "파일에 올바른 숫자 파일 수가 포함되어 있는지 확인"
      }
    ],
    "hints": [
      "파이프를 사용하여 한 명령의 출력을 다른 명령으로 리디렉션하는 방법에 대해 생각해 보세요.",
      "ls의 출력을 wc -l로 파이프한 다음 결과를 file_count.txt로 리디렉션합니다.",
      "다음을 실행해 보십시오: ls | 화장실 -l > file_count.txt"
    ]
  },
  "16": {
    "title": "고유 항목 정렬 및 찾기",
    "description": "중복 항목이 여기저기 흩어져 있는 카드 덱을 정렬한다고 상상해 보세요. 중복 항목을 쉽게 찾아 제거하려면 먼저 동일한 카드를 그룹화하세요. Linux에서 `uniq` 명령은 반복되는 줄을 필터링하지만 문제가 있습니다. **서로 바로 옆에 있는 중복 항목만 감지**합니다!\n\n- 지저분한 목록에서 모든 중복 항목을 제거하려면 먼저 `sort`을 사용하여 줄을 정렬한 다음 결과를 `uniq`에 전달해야 합니다. 예를 들어 `sort raw.txt | uniq`은 목록을 한 번에 정리하고 정리합니다.",
    "instructions": "지저분한 손님 목록을 정리합시다. `names.txt` 파일에 중복된 이름이 포함되어 있습니다. `sort` 및 `uniq`을 파이프로 연결하여 모든 고유 이름을 알파벳순으로 찾아 `unique_names.txt`에 저장합니다.",
    "commandHelp": [
      {
        "cmd": "sort names.txt",
        "desc": "names.txt 줄을 알파벳 순으로 정렬"
      },
      {
        "cmd": "sort names.txt | uniq > unique_names.txt",
        "desc": "중복 항목을 파일로 정렬 및 필터링"
      }
    ],
    "objectives": [
      {
        "id": "used_sort",
        "text": "names.txt에서 \"sort\" 명령 사용"
      },
      {
        "id": "used_uniq",
        "text": "정렬된 출력을 \"uniq\" 명령으로 파이프"
      },
      {
        "id": "unique_names_exists",
        "text": "\"unique_names.txt\" 파일 생성"
      },
      {
        "id": "sorted_and_unique",
        "text": "콘텐츠에 고유하게 정렬된 이름이 있는지 확인"
      }
    ],
    "hints": [
      "먼저 이름을 알파벳순으로 정렬한 다음 중복 항목을 필터링해야 합니다.",
      "sort names.txt의 출력을 uniq로 파이프하고 이를 Unique_names.txt로 리디렉션합니다.",
      "다음을 실행해 보세요. sort names.txt | uniq > 고유_이름.txt"
    ]
  },
  "17": {
    "title": "grep",
    "description": "을 사용한 필터링 시스템 오류가 발생할 때마다 찾기 위해 수천 페이지에 달하는 방대한 로그북을 검색한다고 상상해 보십시오. 이 작업을 수동으로 수행하려면 몇 시간이 걸릴 것입니다! Linux에서는 `grep`을 디지털 돋보기로 사용하여 특정 단어나 패턴을 즉시 검색합니다.\n\n- `grep` 명령은 파일이나 파이프로 연결된 텍스트를 필터링하여 검색어와 일치하는 줄만 인쇄합니다. 예를 들어 `grep \"ERROR\" logs.txt`를 실행하면 파일을 검사하고 \"ERROR\"가 포함된 줄만 추출합니다.",
    "instructions": "로그를 필터링해 보겠습니다. `[ERROR]`이 포함된 모든 줄을 `logs.txt`에서 검색하여 `errors.log`라는 새 파일에 저장합니다.",
    "commandHelp": [
      {
        "cmd": "grep \"[ERROR]\" logs.txt",
        "desc": "[ERROR]가 포함된 행에 대한 로그.txt 검색"
      },
      {
        "cmd": "grep \"[ERROR]\" logs.txt > errors.log",
        "desc": "일치하는 오류를 오류.log에 저장"
      }
    ],
    "objectives": [
      {
        "id": "used_grep",
        "text": "\"grep\" 명령을 사용하여 log.txt 검색"
      },
      {
        "id": "errors_log_exists",
        "text": "홈 디렉토리에 \"errors.log\" 파일 생성"
      },
      {
        "id": "only_errors",
        "text": "오류.log에 [ERROR] 항목만 포함되어 있는지 확인"
      }
    ],
    "hints": [
      "특정 패턴과 일치하는 행을 필터링하는 명령이 무엇인지 생각해 보세요.",
      "grep을 사용하여 log.txt에서 '[ERROR]'를 검색하고 출력을 오류.log로 리디렉션합니다.",
      "다음을 실행해 보세요: grep \"[ERROR]\"logs.txt >errors.log"
    ]
  },
  "18": {
    "title": "파일 권한 변경",
    "description": "관리자만 수표에 서명할 수 있고 직원은 일정을 읽을 수 있으며 방문자는 상점 간판만 볼 수 있는 사업체를 운영한다고 상상해 보십시오. Linux에서는 숫자 보안 시스템(8진 표현이라고 함)을 사용하여 파일을 읽고, 쓰고, 실행할 수 있는 사람을 제어합니다.\n\n- `7` = 전체 액세스: 읽기 + 쓰기 + 실행(`rwx`)\n- `6` = 수정 액세스: 읽기 + 쓰기(`rw-`)\n- `5` = 읽기 및 실행 액세스: 읽기 + 실행(`r-x`)\n- `4` = 읽기 전용 액세스: 읽기(`r--`)\n\n`chmod <octal> <file>`을 사용하여 이러한 설정을 적용합니다. 예를 들어 `chmod 755 script.sh`을 사용하면 스크립트를 실행할 수 있지만 다른 사용자는 스크립트를 읽고 실행할 수만 있습니다. 현재 잠겨 있는 `deploy.sh`이라는 스크립트가 있습니다. 실행 가능하게 만들어 보겠습니다!",
    "instructions": "권한을 변경해 보겠습니다. `deploy.sh` 파일은 현재 제한된 권한(644)을 가지고 있습니다. `chmod 755 deploy.sh`을 실행하여 소유자가 실행 가능하고 다른 모든 사람이 읽고 실행할 수 있도록 만드세요.",
    "commandHelp": [
      {
        "cmd": "chmod 755 deploy.sh",
        "desc": "실행 권한 설정"
      },
      {
        "cmd": "ls -l deploy.sh",
        "desc": "현재 파일 권한 확인"
      }
    ],
    "objectives": [
      {
        "id": "used_chmod",
        "text": "배포.sh에서 \"chmod\" 명령 실행"
      },
      {
        "id": "is_executable",
        "text": "배포.sh의 권한을 755로 설정"
      }
    ],
    "hints": [
      "어떤 명령이 파일 권한을 변경하는지 생각해 보세요.",
      "배포.sh에서 권한 코드 755와 함께 'chmod' 명령을 사용하십시오.",
      "실행해 보세요: chmod 755 배포.sh"
    ]
  },
  "19": {
    "title": "숨겨진 파일 및 구성",
    "description": "기본 작업 공간을 어지럽히지 않도록 시스템 설정을 보관하는 책상 아래 비밀 서랍을 생각해 보세요. Linux에서는 이름을 점(`.`)으로 시작하여 숨김 파일을 만듭니다.\n\n- 이러한 도트 파일(예: `.bashrc` 또는 `.config`)은 사용자 기본 설정 및 구성 설정을 배후에 저장합니다.\n- 표준 `ls` 명령으로는 표시되지 않습니다. 이러한 숨겨진 파일을 보려면 `ls -a`를 실행하여 `-a`(모두) 플래그를 추가해야 합니다.\n\n**중요한 이유**: `-a` 없이 `ls`을 실행하면 숨겨진 파일(이름이 `.`로 시작하는 파일)이 출력에서 ​​완전히 생략됩니다. `.config_names`과 같은 중요한 파일이 표시되지 않으며 해당 파일이 누락되었다고 생각할 수도 있습니다. `-a` 플래그는 `ls`에 숨겨진 파일을 포함하여 모든 파일을 나열하도록 지시합니다.",
    "instructions": "파일을 숨기자! `mv`를 사용하여 홈 폴더에 있는 `unique_names.txt`의 이름을 `.config_names`이라는 숨겨진 파일로 바꾼 다음 `ls -a`을 실행하여 표시합니다.",
    "commandHelp": [
      {
        "cmd": "ls -a",
        "desc": "숨겨진 파일을 포함한 모든 파일 나열"
      },
      {
        "cmd": "mv file .file",
        "desc": "이름 앞에 점을 붙여 파일 숨기기"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "\"mv\"를 사용하여 파일 이름 변경"
      },
      {
        "id": "hidden_file_exists",
        "text": "홈에 숨겨진 파일 \".config_names\" 생성"
      },
      {
        "id": "old_file_removed",
        "text": "원본 고유 이름.txt가 제거되었는지 확인"
      },
      {
        "id": "used_ls_a",
        "text": "숨겨진 파일이 있는지 확인하려면 \"ls -a\" 사용"
      }
    ],
    "hints": [
      "Linux에서 숨겨진 파일 앞에 점이 붙음 (.) 특수 ls 플래그를 사용하여 표시됩니다.",
      "mv Unique_names.txt .config_names를 사용하고 ls -a를 실행하여 이를 표시합니다.",
      "실행해 보세요: mv Unique_names.txt .config_names 다음에 ls -a"
    ]
  },
  "20": {
    "title": "파일 소유권 변경",
    "description": "집을 구입하고 새 소유자 이름으로 증서를 공식적으로 등록해야 한다고 상상해 보십시오. Linux에서는 모든 파일과 폴더에 공식 소유자와 그룹이 있습니다. 파일의 소유권을 다른 사람(예: 시스템 관리자)에게 넘겨야 하는 경우 `chown`(소유자 변경) 명령을 사용합니다.\n\n- 파일 소유자를 변경하는 것은 민감한 보안 작업이므로 관리자 권한으로 실행하려면 앞에 `sudo`을 붙여야 합니다. 예를 들어, `sudo chown root reports.csv`는 파일을 \"root\" 사용자에게 할당합니다.",
    "instructions": "소유권을 이전해 보겠습니다. `sudo chown root reports.csv`을 실행하여 `/home/learner/reports.csv`의 소유자를 관리자 `root`로 변경합니다.",
    "commandHelp": [
      {
        "cmd": "sudo chown root reports.csv",
        "desc": "Reports.csv의 소유자를 루트로 변경"
      }
    ],
    "objectives": [
      {
        "id": "used_chown",
        "text": "sudo를 사용하여 \"chown\" 명령을 실행합니다."
      },
      {
        "id": "owner_changed",
        "text": "Reports.csv의 소유자를 루트로 설정합니다."
      }
    ],
    "hints": [
      "파일 소유권을 변경하는 명령에 대해 생각하고 관리자 권한이 필요하다는 점을 기억하세요.",
      "소유자를 루트로 변경하려면 'sudo' 접두어가 붙은 'chown' 명령을 사용하십시오.",
      "실행해 보세요: sudo chown root Reports.csv"
    ]
  },
  "21": {
    "title": "수퍼유저 권한(sudo)",
    "description": "중요한 운영 체제 파일을 실수로 삭제하는 것을 방지하기 위해 표준 계정으로 컴퓨터에서 작업한다고 상상해 보십시오. 소프트웨어를 설치하거나 시스템 설정을 수정해야 하는 경우 컴퓨터에서 관리자 권한을 요청합니다. Linux에서는 `sudo`(\"superuser do\"의 약어)를 관리 키 카드로 사용합니다.\n\n- `root` 사용자는 시스템에 대한 모든 권한을 가진 마스터 관리자 계정입니다.\n- 표준 사용자는 민감한 파일(예: 비밀번호 데이터베이스 `/etc/shadow`)을 읽지 못하도록 차단됩니다. 명령 앞에 `sudo`을 입력하면 임시 관리자 권한으로 명령을 실행하여 이러한 블록을 우회할 수 있습니다.",
    "instructions": "슈퍼유저 권한을 테스트해 보겠습니다. 권한 오류를 확인하려면 `cat /etc/shadow`를 실행하세요. 그런 다음 관리자 권한으로 `sudo cat /etc/shadow` 명령을 실행하여 이를 우회합니다.",
    "commandHelp": [
      {
        "cmd": "sudo command",
        "desc": "관리자/수퍼유저 권한으로 명령 실행"
      },
      {
        "cmd": "cat /etc/shadow",
        "desc": "비밀번호 해시 데이터베이스 읽기(제한됨)"
      }
    ],
    "objectives": [
      {
        "id": "tried_without_sudo",
        "text": "\"cat /etc/shadow\"를 시도하고 권한 오류 관찰"
      },
      {
        "id": "ran_sudo_cat",
        "text": "\"sudo cat /etc/shadow\"를 성공적으로 실행"
      }
    ],
    "hints": [
      "제한된 시스템 파일을 읽으려면 관리자 권한이 필요합니다.",
      "먼저 sudo 없이 cat /etc/shadow를 실행하여 오류를 확인한 다음 sudo를 앞에 추가하세요.",
      "실행해 보십시오: cat /etc/shadow 그리고 나서: sudo cat /etc/shadow"
    ]
  },
  "22": {
    "title": "패키지 관리(apt)",
    "description": "App Store나 Google Play Store를 사용하여 스마트폰에 앱을 설치한다고 생각해 보세요. 안전하고 선별되었으며 자동화되어 있습니다. Linux에서는 패키지 관리자라는 명령줄 앱 스토어를 사용하여 소프트웨어를 안전하게 가져오고 설치합니다.\n\n- Ubuntu/Debian 시스템에서 표준 패키지 관리자는 `apt`(고급 패키징 도구)입니다.\n- 소프트웨어를 설치하면 시스템 전체 폴더가 변경되므로 항상 `sudo`을 사용하여 승인해야 합니다. 예를 들어 `sudo apt install tree`는 디렉터리 시각화 도우미 \"tree\"를 다운로드하고 설치합니다.",
    "instructions": "소프트웨어를 설치해 보겠습니다. `sudo apt install tree`을 실행하여 `tree` 프로그램을 설치합니다. 완료되면 `tree`를 실행하여 홈 폴더를 깔끔한 나무 모양 형식으로 시각화하세요.",
    "commandHelp": [
      {
        "cmd": "sudo apt install tree",
        "desc": "트리 패키지 설치"
      },
      {
        "cmd": "tree",
        "desc": "트리를 실행하여 디렉터리 시각화"
      }
    ],
    "objectives": [
      {
        "id": "installed_tree",
        "text": "apt install을 사용하여 \"tree\" 패키지 설치"
      },
      {
        "id": "ran_tree",
        "text": "\"tree\" 명령을 실행하여 디렉터리 시각화"
      }
    ],
    "hints": [
      "관리자 권한이 있는 패키지 관리자를 사용하여 Ubuntu에 패키지를 설치하는 방법에 대해 생각해 보세요.",
      "sudo apt install tree를 실행한 다음 tree 명령을 실행하여 디렉터리를 시각화합니다.",
      "실행해 보세요: sudo apt install tree, 그런 다음 tree"
    ]
  },
  "23": {
    "title": "디스크 공간 확인(df)",
    "description": "거대한 비디오 게임을 다운로드하려고 하는데 \"저장 공간이 가득 참\" 오류가 발생하지만 병목 현상이 발생하는 디스크 드라이브가 무엇인지 확신할 수 없다고 상상해 보십시오. Linux에서는 `df`(디스크 없음) 명령을 사용하여 시스템의 저장 용량을 확인합니다.\n\n- `df` 명령은 연결된 모든 드라이브의 전체 공간, 사용된 공간, 사용 가능한 공간을 표시합니다.\n- `df -h`를 실행하면(\"사람이 읽을 수 있음\"을 위해 `-h` 플래그 추가) 혼란스러운 블록 수 대신 친숙한 기가바이트(G) 및 메가바이트(M)로 저장 공간이 표시되므로 어떤 드라이브(예: `/` 또는 `/home`)가 가득 찼는지 쉽게 확인할 수 있습니다.\n\n**중요한 이유**: `-h` 없이 `df`을 실행하면 크기가 원시 1K 블록 숫자로 표시됩니다(예: `47G` 대신 `49258284`). 이는 사람이 읽고 계산하기가 매우 어렵습니다. `-h` 플래그는 이러한 크기를 인간에게 친숙한 기가바이트(G) 및 메가바이트(M)로 형식화합니다.",
    "instructions": "시스템 저장 공간을 확인해 보겠습니다. `df -h`을 실행하여 사람이 읽을 수 있는 형식으로 파티션에 남은 공간을 확인하세요.",
    "commandHelp": [
      {
        "cmd": "df -h",
        "desc": "사람이 읽을 수 있는 형식으로 파일 시스템의 여유 디스크 공간을 표시합니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_df_h",
        "text": "\"df -h\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "여유 디스크 공간을 표시하는 명령을 생각해 보세요.",
      "사람이 읽을 수 있는 옵션과 함께 'df' 명령을 사용하십시오.",
      "실행해 보세요: df -h"
    ]
  },
  "24": {
    "title": "디렉토리 크기 찾기(du)",
    "description": "*어느* 드라이브가 꽉 찼는지 알고 나면 모든 공간을 차지하고 있는 특정 폴더를 어떻게 찾을 수 있습니까? 다운로드 폴더인가요, 아니면 숨겨진 캐시인가요? 우리는 `du`(디스크 사용량) 명령을 사용하여 이 미스터리를 해결합니다.\n\n- `du <directory>`은 폴더와 그 안에 있는 모든 하위 폴더의 크기를 나열합니다.\n- `du -sh <directory>`(여기서 `-s`은 \"요약\"을 의미하고 `-h`는 \"사람이 읽을 수 있음\"을 의미)는 해당 특정 폴더에 대해 단일하고 명확한 총 크기를 계산하고 인쇄합니다.\n\n**중요한 이유**: `-s` 없이 `du`을 실행하면 단일 요약을 제공하는 대신 모든 개별 하위 디렉터리와 파일을 반복적으로 나열하는 거대한 텍스트 벽을 덤프하게 됩니다. `-s` 플래그는 폴더의 전체 크기를 요약하고 `-h`은 이를 사람이 읽을 수 있도록 만듭니다.",
    "instructions": "스토리지 돼지를 추적해 보겠습니다. `du -sh /home/learner`을 실행하여 학습자 홈 디렉터리의 전체 크기를 계산합니다.",
    "commandHelp": [
      {
        "cmd": "du -sh /home/learner",
        "desc": "학습자 홈 디렉터리의 전체 크기를 표시합니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_du",
        "text": "-s 및 -h 옵션과 함께 \"du\"를 실행합니다."
      }
    ],
    "hints": [
      "폴더의 디스크 사용량을 확인하는 명령이 무엇인지 생각해 보세요.",
      "요약(-s) 및 사람이 읽을 수 있는(-h) 옵션과 함께 'du' 명령을 사용합니다.",
      "실행해 보세요: du -sh /home/learner"
    ]
  },
  "25": {
    "title": "메모리 사용량 확인(무료)",
    "description": "노트북이 지연되기 시작하고, 웹 페이지가 정지되고, 앱 전환이 고통스러울 정도로 느리게 느껴진다고 상상해 보세요. 이는 일반적으로 컴퓨터에 활성 메모리(RAM)가 부족함을 의미합니다. Linux에서는 `free` 명령을 사용하여 시스템에 숨쉴 공간이 얼마나 있는지 확인할 수 있습니다.\n\n- `free` 명령은 총 메모리, 사용된 메모리, 사용 가능한 물리적 메모리(RAM) 및 스왑 공간을 표시합니다.\n- `-h` 플래그(`free -h` 실행)를 추가하면 메모리 크기가 읽기 쉬운 기가바이트(GB) 및 메가바이트(MB)로 형식화되므로 프로그램이 모든 리소스를 소모하는지 알 수 있습니다.\n\n**중요한 이유**: `-h` 없이 `free`을 실행하면 메모리 사용량이 원시 킬로바이트(예: `16G` 대신 `16323456`)로 인쇄되므로 빠르게 해석하기 어렵습니다. `-h` 플래그는 쉽게 읽을 수 있도록 숫자를 기가바이트(G) 또는 메가바이트(M)로 자동 조정합니다.",
    "instructions": "시스템 메모리를 확인해 보겠습니다. `free -h`을 실행하여 사람이 읽을 수 있는 형식으로 사용 가능한 RAM을 확인하세요.",
    "commandHelp": [
      {
        "cmd": "free -h",
        "desc": "사람이 읽을 수 있는 형식으로 RAM 사용량을 표시합니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_free",
        "text": "-h 또는 -m 옵션을 사용하여 \"free\"를 실행합니다."
      }
    ],
    "hints": [
      "메모리 통계를 표시하는 명령에 대해 생각합니다.",
      "사람이 읽을 수 있는 옵션과 함께 'free' 명령을 사용하십시오.",
      "실행해 보세요: free -h"
    ]
  },
  "26": {
    "title": "시스템 가동 시간 및 커널 세부 정보",
    "description": "오작동을 시작한 서버의 문제를 해결하고 최근에 재부팅했는지 확인해야 하거나 내부에서 실행 중인 운영 체제 버전을 정확히 확인한다고 상상해 보세요. 몇 초 안에 이러한 시스템 세부 정보를 쿼리할 수 있습니다.\n\n- `uptime` 명령은 머신이 마지막 부팅 이후 얼마나 오랫동안 실행되었는지, 그리고 얼마나 바쁜지(시스템 로드)를 정확하게 알려줍니다.\n- `uname -a`(유닉스 이름) 명령은 시스템 커널, 플랫폼 이름 및 기계 아키텍처에 대한 전체 보고서를 인쇄합니다.\n\n**중요한 이유**: `-a` 없이 `uname`을 실행하면 기본 운영 체제 이름(예: `Linux`)만 출력됩니다. 커널 버전, 플랫폼 이름, 프로세서 아키텍처와 같은 중요한 세부 정보는 생략됩니다. `-a` 플래그는 단일 보고서에 사용 가능한 모든 시스템 세부 정보를 인쇄합니다.",
    "instructions": "시스템 통계를 살펴보겠습니다. `uptime`을 실행하여 시스템이 실행된 기간을 확인한 다음 `uname -a`을 실행하여 전체 커널 및 시스템 세부 정보를 인쇄합니다.",
    "commandHelp": [
      {
        "cmd": "uptime",
        "desc": "시스템이 실행된 기간 표시"
      },
      {
        "cmd": "uname -a",
        "desc": "모든 시스템 및 커널 정보 인쇄"
      }
    ],
    "objectives": [
      {
        "id": "ran_uptime",
        "text": "\"uptime\" 명령 실행"
      },
      {
        "id": "ran_uname",
        "text": "\"uname -a\" 명령 실행"
      }
    ],
    "hints": [
      "두 가지 명령을 실행해야 합니다. 하나는 시스템 가동 시간용이고 다른 하나는 커널 정보용입니다.",
      "'uptime' 명령을 사용하고 -a 플래그와 함께 'uname'을 사용하십시오.",
      "다음을 실행해 보십시오: uptime 그리고 다음: uname -a"
    ]
  },
  "27": {
    "title": "실행 중인 프로세스 나열(ps)",
    "description": "운영 체제를 모든 직원(또는 실행 중인 프로그램)에 프로세스 ID(PID)라는 고유한 이름 태그가 할당되는 분주한 사무실로 생각하십시오. Linux에서는 이러한 활성 프로그램을 **프로세스**라고 부르며 `ps` 명령을 사용하여 나열합니다.\n\n- `ps`만 실행하면 현재 터미널 창 내에서 실행 중인 프로그램만 표시됩니다.\n- `ps aux` 실행은 전체 시스템에서 실행 중인 모든 단일 활성 프로그램, 이를 시작한 사람, 사용 중인 CPU 및 메모리 양을 나열하는 마스터 오피스 레지스트리처럼 작동합니다.\n\n**중요한 이유**: `aux` 없이 `ps`을 실행하면 현재 터미널 창에서 실행 중인 프로세스만 표시됩니다(보통 `bash` 및 `ps` 자체). 다른 사용자가 실행하는 백그라운드 서비스, 시스템 프로세스 또는 프로그램은 표시되지 않습니다. `aux` 옵션은 시스템 전체에서 실행 중인 모든 프로세스를 표시합니다.",
    "instructions": "레지스트리를 확인해 보겠습니다. `ps aux`을 실행하여 노트북에서 실행 중인 모든 프로세스를 나열하고 PID, %CPU 및 %MEM과 같은 열을 확인하세요.",
    "commandHelp": [
      {
        "cmd": "ps aux",
        "desc": "시스템에서 실행 중인 모든 프로세스를 나열합니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_ps_aux",
        "text": "\"ps aux\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "프로세스를 나열하는 명령과 시스템의 모든 프로세스를 나열하는 방법을 생각해 보세요.",
      "aux 옵션과 함께 'ps' 명령을 사용하십시오.",
      "실행해 보세요: ps aux"
    ]
  },
  "28": {
    "title": "대화형 프로세스 모니터(위)",
    "description": "고속도로의 정적 사진을 보는 것과 실시간 교통 카메라 피드를 보는 것을 상상해 보십시오. `ps`은 현재 실행 중인 항목에 대한 빠른 스냅샷을 제공하는 반면, `top`을 사용하면 시스템 성능을 실시간으로 볼 수 있습니다.\n\n- `top` 명령은 몇 초마다 업데이트되는 대화형 실시간 대시보드를 시작합니다. CPU 사용량, 로드 평균을 표시하고 정확한 순간에 실행 중인 리소스를 가장 많이 사용하는 프로세스의 순위를 동적으로 지정합니다.",
    "instructions": "라이브 피드를 시청해 보세요. `top` 명령을 실행하여 대화형 프로세스 모니터를 시작합니다.",
    "commandHelp": [
      {
        "cmd": "top",
        "desc": "대화형 프로세스 모니터 실행"
      }
    ],
    "objectives": [
      {
        "id": "ran_top",
        "text": "\"top\" 명령 실행"
      }
    ],
    "hints": [
      "대화형 프로세스 모니터를 실행하는 명령에 대해 생각해 보세요.",
      "'top' 또는 'htop' 명령을 사용합니다.",
      "실행해 보세요: top"
    ]
  },
  "29": {
    "title": "악성 프로세스 중지(kill)",
    "description": "휴대전화의 앱이 작동을 멈추고 화면이 완전히 잠긴 후 다시 원활하게 실행하려면 앱을 강제로 닫아야 한다고 상상해 보세요. Linux에서는 `kill` 명령 뒤에 프로그램의 프로세스 ID(PID)를 사용하여 프로그램의 오작동이나 정지를 중지합니다.\n\n- `kill 1234`을 실행하면 프로그램에 작업을 저장하고 종료하도록 요청하는 정중한 요청이 전송됩니다.\n- 정지되어 폴라이트 요청을 무시하는 경우 `kill -9 1234`는 운영 체제를 강제로 즉시 종료합니다. 지금 PID `9999`이(가) 모든 CPU를 점유하고 있는 런어웨이 프로세스가 있습니다. 종료하겠습니다!",
    "instructions": "불량 프로세스를 중지하겠습니다. `kill 9999`을 실행하여 PID가 `9999`인 프로세스를 강제 종료합니다.",
    "commandHelp": [
      {
        "cmd": "kill 9999",
        "desc": "PID 9999로 프로세스 종료"
      }
    ],
    "objectives": [
      {
        "id": "process_killed",
        "text": "PID 9999로 불량 프로세스 중지"
      }
    ],
    "hints": [
      "ID로 프로세스를 종료하는 명령이 무엇인지 생각해 보세요.",
      "프로세스 ID 9999 다음에 'kill' 명령을 사용합니다.",
      "실행해 보세요: kill 9999"
    ]
  },
  "30": {
    "title": "백그라운드에서 작업 실행",
    "description": "대용량 폴더를 USB 드라이브에 복사하려고 하는데 복사하는 동안 동일한 창에서 계속 작업하고 다른 명령을 입력하고 싶다고 상상해 보십시오. Linux에서는 시간이 많이 걸리는 작업을 \"백그라운드\"에서 실행하여 명령줄이 잠기지 않도록 할 수 있습니다.\n\n- 명령 끝에 앰퍼샌드 `&`을 추가하면(예: `sleep 100 &`) 터미널이 해당 명령을 백그라운드에서 실행하고 즉시 프롬프트를 표시합니다.\n- `jobs` 명령은 현재 백그라운드에서 실행 중인 내용을 보여줍니다.\n- `fg`(전경) 명령은 백그라운드 작업을 다시 중앙 스테이지로 가져옵니다.",
    "instructions": "멀티 태스킹을 해보자. `sleep 100 &`을 실행하여 백그라운드 작업을 시작하고 `jobs`로 확인한 다음 `fg`을 실행하여 다시 포그라운드로 가져옵니다.",
    "commandHelp": [
      {
        "cmd": "sleep 100 &",
        "desc": "백그라운드에서 절전 모드 실행"
      },
      {
        "cmd": "jobs",
        "desc": "백그라운드 작업 나열"
      },
      {
        "cmd": "fg",
        "desc": "백그라운드 작업을 포그라운드로 가져오기"
      }
    ],
    "objectives": [
      {
        "id": "ran_bg_job",
        "text": "백그라운드에서 절전 명령 실행(&)"
      },
      {
        "id": "ran_jobs",
        "text": "\"jobs\" 명령 실행"
      },
      {
        "id": "ran_fg",
        "text": "\"fg\"를 사용하여 작업을 다시 포그라운드로 가져오기"
      }
    ],
    "hints": [
      "백그라운드에서 작업을 실행하려면 명령에 앰퍼샌드(&)를 추가합니다.",
      "백그라운드에서 sleep 100을 실행하고 작업을 확인한 다음 fg로 다시 가져옵니다.",
      "실행해 보세요: sleep 100 & jobs 다음에 fg"
    ]
  },
  "31": {
    "title": "연결 테스트(ping)",
    "description": "웹페이지를 로드하려고 하는데 브라우저가 끝없이 회전하여 집 Wi-Fi 연결이 끊어졌는지 또는 웹사이트 자체가 충돌했는지 궁금해 한다고 상상해 보십시오. Linux에서는 `ping` 명령을 사용하여 기본 네트워크 연결을 테스트합니다.\n\n- `ping` 명령은 작은 데이터 패킷을 서버(예: `google.com`)로 보내고 응답을 받는 데 걸리는 시간을 측정합니다.\n- Linux에서는 `ping`이 기본적으로 영원히 계속 실행됩니다. 몇 번의 시도 후에 중지하려면 `ping -c 3 google.com`를 실행하는 `-c`(count) 플래그를 사용합니다.\n\n**이것이 중요한 이유**: `-c` 없이 `ping google.com`을 실행하면 계속해서 패킷을 보내고 출력을 무한정 인쇄합니다. 다른 명령을 실행하려면 `Ctrl+C`을 사용하여 수동으로 중단해야 합니다. `-c 3` 플래그는 정확히 3개의 패킷을 보낸 후 자동으로 명령을 중지합니다.",
    "instructions": "연결을 확인해 보겠습니다. 정확히 3개의 패킷(`ping -c 3 google.com`)을 전송하여 `google.com`에 대한 연결을 테스트합니다.",
    "commandHelp": [
      {
        "cmd": "ping -c 3 google.com",
        "desc": "google.com으로 3개의 에코 패킷을 보냅니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_ping_c3",
        "text": "-c 플래그를 사용하여 google.com을 정확히 3번 핑합니다."
      }
    ],
    "hints": [
      "연결을 테스트하기 위해 ICMP 에코 패킷을 보내는 명령이 무엇인지 생각해 보세요.",
      "google.com에 대해 개수 옵션이 3으로 설정된 ping을 사용합니다.",
      "다음을 실행해 보세요: ping -c 3 google.com"
    ]
  },
  "32": {
    "title": "네트워크 인터페이스 및 로컬 IP",
    "description": "네트워크 프린터를 설정하거나 동일한 Wi-Fi에서 친구의 컴퓨터와 파일을 공유하고 컴퓨터의 로컬 IP 주소를 알아야 한다고 상상해 보십시오. Linux에서는 `ip` 명령을 사용하여 네트워크 하드웨어와 IP를 검사합니다.\n\n- `ip addr`(또는 간단하게 `ip a`)을 실행하면 할당된 로컬 IP 주소와 함께 모든 네트워크 인터페이스 장치(예: 유선 이더넷의 경우 `eth0`, 무선의 경우 `wlan0`) 목록이 인쇄됩니다.",
    "instructions": "네트워크 설정을 살펴보겠습니다. `ip addr`를 실행하여 모든 로컬 네트워크 인터페이스와 IP 주소를 표시합니다.",
    "commandHelp": [
      {
        "cmd": "ip addr",
        "desc": "네트워크 인터페이스 세부 정보 및 IP 주소 표시"
      }
    ],
    "objectives": [
      {
        "id": "ran_ip_addr",
        "text": "\"ip addr\" 또는 \"ip a\" 명령 실행"
      }
    ],
    "hints": [
      "네트워크 인터페이스 구성을 표시하는 명령을 생각해 보세요.",
      "addr 또는 인수와 함께 'ip' 명령을 사용하십시오.",
      "실행해 보세요: ip addr"
    ]
  },
  "33": {
    "title": "웹 파일 다운로드(curl)",
    "description": "브라우저를 열거나 \"다운로드\" 버튼을 클릭하지 않고 웹 서버에서 직접 파일을 다운로드하거나 설정 스크립트의 코드를 가져오고 싶다고 상상해 보십시오. Linux에서는 `curl`(\"클라이언트 URL\"의 약자)을 사용하여 웹 데이터를 가져옵니다.\n\n- `curl <url>`을 실행하면 페이지 콘텐츠가 다운로드되어 화면에 바로 인쇄됩니다.\n- 다운로드한 콘텐츠를 표시하는 대신 파일로 저장하려면 `>` 리디렉션 또는 `-o` 출력 플래그와 페어링합니다.",
    "instructions": "스크립트를 다운로드해 보겠습니다. `http://api.bashquest.com/update.sh`에서 파일을 가져오고 `curl http://api.bashquest.com/update.sh > update.sh`을 실행하여 로컬에 `update.sh`로 저장합니다.",
    "commandHelp": [
      {
        "cmd": "curl http://api.bashquest.com/update.sh > update.sh",
        "desc": "웹페이지 콘텐츠를 다운로드하고 update.sh에 저장합니다."
      }
    ],
    "objectives": [
      {
        "id": "used_curl",
        "text": "\"curl\" 명령을 사용합니다."
      },
      {
        "id": "download_saved",
        "text": "다운로드한 스크립트를 홈 폴더에 \"update.sh\"로 저장합니다."
      }
    ],
    "hints": [
      "웹 파일을 다운로드하는 명령과 파일로 리디렉션하는 방법을 생각해 보세요.",
      "컬을 사용하여 파일을 다운로드하고 '>' 리디렉션을 사용하여 update.sh로 저장합니다.",
      "실행해 보세요: 컬 http://api.bashquest.com/update.sh > update.sh"
    ]
  },
  "34": {
    "title": "이름으로 파일 찾기(find)",
    "description": "사용자 폴더 어딘가에 중요한 텍스트 파일이 잘못 배치되어 수십 개의 중첩된 디렉터리를 하나씩 검색해야 한다고 상상해 보세요. Linux에서는 초고속 시스템 전체 검색 엔진인 `find` 유틸리티를 사용하여 수동 파기를 우회합니다.\n\n- `find` 명령은 이름, 크기, 유형 또는 날짜를 기준으로 디렉토리 트리를 검색합니다.\n- 구문은 `find <where> -name \"<pattern>\"`입니다. 예를 들어 `find . -name \"*.txt\"`은 현재 디렉터리와 모든 하위 폴더에서 `.txt`로 끝나는 파일을 검색합니다.\n\n**이것이 중요한 이유**: `-name` 없이 `find . \"*.log\"`을 실행하면 `find: paths must precede expression: '*.log'` 오류가 발생합니다. 후속 패턴이 파일 이름과 일치해야 함을 지정하려면 `-name` 플래그가 필요합니다.",
    "instructions": "일부 파일을 추적해 보겠습니다. `find . -name \"*.log\"`을 실행하여 현재 디렉터리와 해당 하위 폴더에서 `.log` 확장자를 가진 파일을 검색합니다.",
    "commandHelp": [
      {
        "cmd": "find . -name \"*.log\"",
        "desc": "현재 폴더 및 하위 폴더에서 .log로 끝나는 모든 파일을 찾습니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_find",
        "text": "-name 옵션을 사용하여 \"find\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "패턴과 일치하는 이름으로 파일을 반복적으로 찾는 명령이 무엇인지 생각해 보세요.",
      "이름 패턴이 '*.log'인 현재 디렉터리(.)에서 찾기를 사용합니다.",
      "실행해 보세요: find . -이름 \"*.log\""
    ]
  },
  "35": {
    "title": "명령 기록 확인",
    "description": "10분 전에 길고 복잡한 네트워크 진단 명령을 입력했는데 이제 다시 실행해야 하는데 정확한 옵션이나 구문을 기억할 수 없다고 가정해 보세요. 머리를 긁거나 다 입력하는 대신 Linux가 이를 기억합니다!\n\n- `history` 명령은 최근에 실행한 모든 명령의 번호가 매겨진 목록을 표시합니다.\n- 느낌표와 목록 번호를 차례로 입력하여 항목을 빠르게 다시 실행할 수 있습니다(예: 명령 #42를 다시 실행하려면 `!42`).",
    "instructions": "아카이브를 확인해 보겠습니다. `history`를 실행하여 이 세션에서 실행한 명령 목록을 확인하세요.",
    "commandHelp": [
      {
        "cmd": "history",
        "desc": "최근 실행된 명령 목록을 표시합니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_history",
        "text": "\"history\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "최근에 실행한 명령을 나열하는 명령이 무엇인지 생각해 보세요.",
      "'history' 명령을 사용하십시오.",
      "실행해 보세요: 기록"
    ]
  },
  "36": {
    "title": "매뉴얼 페이지 참조",
    "description": "새 명령을 사용하려고 시도하지만 해당 명령이 지원하는 플래그가 무엇인지, 입력 형식을 어떻게 지정해야 하는지 확신할 수 없다고 상상해 보십시오. 온라인으로 검색하는 대신 Linux에는 공식적이고 포괄적인 사용자 설명서가 터미널에 내장되어 있습니다!\n\n- `man`(수동) 명령 뒤에 유틸리티 이름(예: `man ls`)을 입력하면 자세한 참조 가이드가 열립니다.\n- 가이드 내에서 화살표 키로 스크롤하고 \"/\"로 검색한 다음 `q`를 눌러 매뉴얼을 닫고 프롬프트로 돌아갑니다.",
    "instructions": "문서를 참고해 보겠습니다. `man grep`를 실행하여 `grep` 명령에 대한 내장 매뉴얼 페이지를 엽니다.",
    "commandHelp": [
      {
        "cmd": "man grep",
        "desc": "grep에 대한 매뉴얼 페이지 표시"
      }
    ],
    "objectives": [
      {
        "id": "ran_man_grep",
        "text": "\"man grep\" 명령 실행"
      }
    ],
    "hints": [
      "내장 시스템 참조 매뉴얼을 표시하는 명령에 대해 생각해 보십시오.",
      "'man' 명령과 검색하려는 명령 이름을 사용하십시오.",
      "실행해 보세요: man grep"
    ]
  },
  "37": {
    "title": "서비스 제어(systemctl)",
    "description": "컴퓨터에서 웹 사이트를 호스팅하지만 백그라운드 웹 서버 프로그램이 실행되지 않아 방문자에게 \"사이트에 연결할 수 없습니다\"라는 오류가 표시된다고 상상해 보세요. Linux에서는 자동으로 시작되어 백그라운드에서 실행되는 백그라운드 프로세스(예: 데이터베이스, 방화벽 또는 웹 서버)를 **서비스**라고 하며 `systemctl`을 사용하여 관리합니다.\n\n- `systemctl status <service>` 명령은 서비스가 활성 상태인지 중지되었는지 확인합니다.\n- 서비스를 시작하거나 중지하면 모든 사용자와 시스템 보안에 영향을 미치므로 `sudo systemctl start <service>` 또는 `sudo systemctl stop <service>`와 같은 명령을 실행하려면 `sudo`을 사용해야 합니다.",
    "instructions": "웹 서버를 시작하겠습니다. 웹 서버 서비스 `apache2`이(가) 현재 중지되었습니다. `sudo systemctl start apache2`을 실행하여 시작하고 `systemctl status apache2`으로 실행 중인지 확인하세요.",
    "commandHelp": [
      {
        "cmd": "systemctl status apache2",
        "desc": "apache2 웹 서비스 상태 확인"
      },
      {
        "cmd": "sudo systemctl start apache2",
        "desc": "apache2 웹 서비스 시작"
      }
    ],
    "objectives": [
      {
        "id": "started_service",
        "text": "\"apache2\" 웹 서비스 시작"
      },
      {
        "id": "checked_status",
        "text": "\"apache2\" 상태 확인"
      }
    ],
    "hints": [
      "apache2 상태를 확인하고 시작해야 합니다.",
      "systemctl status apache2를 사용하고 서비스를 시작하려면 관리자 권한(sudo)이 필요하다는 점을 기억하세요.",
      "다음을 실행해 보십시오: sudo systemctl start apache2 및 systemctl status apache2"
    ]
  },
  "38": {
    "title": "구성 파일 편집(나노)",
    "description": "그래픽 데스크탑이나 커서가 없고 구성 파일의 한 줄을 신속하게 수정해야 하는 원격 클라우드 서버에 SSH를 사용한다고 상상해 보십시오. 이러한 시나리오에서는 `nano`과 같은 터미널 텍스트 편집기를 사용해야 합니다.\n\n- `nano <filename>`을 실행하면 쉘 창 내부에 직접 간단하고 가벼운 텍스트 편집기가 로드됩니다.\n- 단축키는 항상 화면 하단에 표시됩니다. 변경 사항을 기록(저장)하려면 `Ctrl+O`를 누르고 편집기를 종료하려면 `Ctrl+X`을 누르세요.",
    "instructions": "구성 파일을 편집해 보겠습니다. `nano server.conf`를 사용하여 홈 디렉터리에서 `server.conf`을 열고 `port=8080`이라는 줄을 추가한 다음 저장하고 편집기를 종료합니다.",
    "commandHelp": [
      {
        "cmd": "nano server.conf",
        "desc": "Nano 텍스트 편집기에서 server.conf 열기"
      }
    ],
    "objectives": [
      {
        "id": "opened_nano",
        "text": "Nano에서 \"server.conf\" 파일 열기"
      },
      {
        "id": "port_configured",
        "text": "구성 줄 \"port=8080\" 추가 및 저장"
      }
    ],
    "hints": [
      "지침에서 사용하도록 요구하는 터미널 기반 텍스트 편집기에 대해 생각해 보십시오.",
      "nano server.conf를 실행하고 내부에 'port=8080'을 쓴 다음 Ctrl+O로 저장하고 Ctrl+X로 종료합니다.",
      "실행해 보세요: nano server.conf"
    ]
  },
  "39": {
    "title": "첫 번째 Bash 스크립트 작성",
    "description": "매일 아침 실행해야 하는 20개의 작업 목록이 있다고 상상해 보세요. 수동으로 입력하는 것은 지루하고 오타가 발생할 여지가 있습니다. Linux에서는 명령을 쉘 스크립트라는 파일에 묶어서 한꺼번에 실행할 수 있습니다!\n\n- 모든 스크립트는 첫 번째 줄에 \"shebang\"(`#!/bin/bash`)으로 시작하여 파일을 실행하는 데 사용할 쉘 해석기를 시스템에 알려줍니다.\n- 스크립트를 저장한 후 `chmod 755 script.sh`을 통해 실행 권한을 부여한 다음 `./script.sh`로 실행하여 스크립트를 실행 가능하게 만듭니다.",
    "instructions": "자동화하자! 홈 폴더에 `hello.sh`이라는 파일을 만듭니다. 첫 번째 줄에 `#!/bin/bash`를 쓰고 두 번째 줄에 `echo \"Hello, BashQuest User!\"`를 씁니다. `chmod 755 hello.sh`을 사용하여 실행 권한을 부여하고 `./hello.sh`을 사용하여 실행합니다.",
    "commandHelp": [
      {
        "cmd": "touch hello.sh",
        "desc": "스크립트 파일 생성"
      },
      {
        "cmd": "chmod 755 hello.sh",
        "desc": "실행 권한 부여"
      },
      {
        "cmd": "./hello.sh",
        "desc": "현재 디렉터리에서 스크립트 실행"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "스크립트 파일 \"hello.sh\" 생성"
      },
      {
        "id": "script_content",
        "text": "스크립트 내부에 shebang 및 hello 메시지 추가"
      },
      {
        "id": "script_executable",
        "text": "스크립트를 실행 가능하게 만듭니다(허용 홀수 숫자)"
      },
      {
        "id": "script_executed",
        "text": "\"./hello.sh\"를 사용하여 스크립트 실행"
      }
    ],
    "hints": [
      "파일 생성, shebang 및 hello 메시지 추가, 생성 실행 가능하고 실행하십시오.",
      "touch hello.sh를 사용하여 #!/bin/bash 및 hello 메시지를 포함하도록 편집한 다음 chmod 755 hello.sh를 입력하고 ./hello.sh를 실행합니다.",
      "실행해 보세요: hello.sh를 터치하고 내용을 작성하고 chmod 755 hello.sh를 입력한 후 ./hello.sh로 실행합니다."
    ]
  },
  "40": {
    "title": "변수 및 인수 ($1)",
    "description": "웹사이트에 대한 개인화된 환영 메시지를 생성한다고 상상해 보십시오. 모든 고객의 이름에 대해 별도의 스크립트를 작성하고 싶지는 않을 것입니다! 대신 실행 시 이름을 입력으로 사용하는 하나의 스크립트를 작성합니다.\n\n- Bash 스크립트에서 `$1`, `$2` 등과 같은 변수는 명령줄에서 전달하는 \"인수\" 또는 입력을 보유합니다.\n- 예를 들어 `./greet.sh Alice`를 실행하면 스크립트 내의 `$1`에 자동으로 \"Alice\"라는 텍스트가 포함됩니다. 마찬가지로 `$#`는 사용자가 제공한 입력 수를 추적합니다.",
    "instructions": "동적 스크립트를 작성해 보겠습니다. shebang과 `echo \"Hello, $1!\"` 줄을 사용하여 홈 디렉터리에 `greet.sh`을 만듭니다. 실행 가능하게 만들고 `./greet.sh Alice`을 실행하여 테스트하십시오.",
    "commandHelp": [
      {
        "cmd": "./greet.sh Alice",
        "desc": "\"Alice\" 인수로 스크립트 실행"
      }
    ],
    "objectives": [
      {
        "id": "greet_exists",
        "text": "\"greet.sh\" 스크립트 파일 생성"
      },
      {
        "id": "greet_content",
        "text": "Greeting.sh 내부에서 $1 사용"
      },
      {
        "id": "greet_executable",
        "text": "Greeting.sh를 실행 가능하게 만들기"
      },
      {
        "id": "greet_executed",
        "text": "\"Alice\" 인수로 스크립트 실행"
      }
    ],
    "hints": [
      "Greeting.sh라는 스크립트를 생성하고 $1을 사용하여 첫 번째 인수를 Greeting하고 실행 가능하게 만든 후 'Alice'로 실행합니다.",
      "에코 '안녕하세요, $1!'을 사용하세요. 스크립트 내에서 chmod 755 Greeting.sh를 입력한 다음 ./greet.sh Alice를 실행하세요.",
      "실행해 보세요: Greeting.sh를 터치하고 shebang을 추가한 후 'Hello, $1!', chmod 755 Greeting.sh 및 ./greet.sh Alice를 에코하세요."
    ]
  },
  "41": {
    "title": "조건부 논리(if/else)",
    "description": "CSV 보고서를 처리하는 스크립트를 작성하는데 보고서 파일이 실제로 디스크에 없으면 충돌이 발생한다고 상상해 보십시오. 오류를 방지하기 위해 `if/else` 조건부 논리를 사용하여 결정을 내리는 스크립트를 작성합니다.\n\n- 괄호를 사용하여 조건을 확인합니다: `if [ -f \"$1\" ]; then ... fi`.\n- `-f` 플래그는 경로가 파일을 가리키는지 확인하고, `-d`은 디렉터리인지 확인합니다. 스크립트는 조건이 true 또는 false로 평가되는지에 따라 작업을 분기합니다.",
    "instructions": "의사결정 논리를 추가해 보겠습니다. `$1`로 전달된 파일 이름이 존재하는지 확인하는 `check_file.sh`를 홈 디렉터리에 생성합니다(`if [ -f \"$1\" ]; then echo \"Exists\" else echo \"Missing\" fi` 사용). 실행 가능하게 만들고 `names.txt`에서 테스트하세요.",
    "commandHelp": [
      {
        "cmd": "if [ -f file ]; then ...",
        "desc": "파일 존재 확인을 위한 구문"
      }
    ],
    "objectives": [
      {
        "id": "check_exists",
        "text": "\"check_file.sh\" 스크립트 생성"
      },
      {
        "id": "check_logic",
        "text": "스크립트 내에서 -f 검사 구현"
      },
      {
        "id": "check_executable",
        "text": "스크립트를 실행 가능하게 만듭니다."
      },
      {
        "id": "check_executed",
        "text": "\"names.txt\"로 스크립트를 실행합니다."
      }
    ],
    "hints": [
      "check_file.sh를 생성하고 파일 이름 인수가 존재하는지 테스트하는 조건을 구현하고 실행 가능하게 만든 후 실행합니다.",
      "사용 'if [ -f \"$1\" ]; 그런 다음 check_file.sh 내부에서 echo \"Exists\" else echo \"Missing\" fi'를 실행 가능하게 만들고 names.txt로 실행합니다.",
      "실행해 보세요. check_file.sh를 터치하고 파일 검사 논리 chmod 755를 작성한 다음 ./check_file.sh names.txt를 실행하세요."
    ]
  },
  "42": {
    "title": "루프를 사용한 자동화",
    "description": "100개의 로그 파일 폴더가 있고 모든 파일의 백업 복사본을 만들어야 한다고 상상해 보십시오. 개별적으로 복사하는 것은 지칠 것입니다. Linux에서는 `for` 루프를 사용하여 전체 항목 목록에 대해 동일한 작업을 자동으로 반복합니다!\n\n- `for` 루프(예: `for file in *.txt; do ... done`)는 패턴과 일치하는 모든 항목을 반복하여 순식간에 하나씩 처리합니다.",
    "instructions": "백업을 자동화합시다. `backup_logs.sh`이라는 스크립트를 생성합니다. `backup`(`mkdir -p backup` 사용)라는 디렉터리를 만든 다음 `for` 루프를 사용하여 현재 폴더의 모든 `.log` 파일을 `backup`에 복사합니다. 실행 가능하게 만들고 실행해 보세요.",
    "commandHelp": [
      {
        "cmd": "for x in pattern; do ...",
        "desc": "For 루프 자동화 구문"
      }
    ],
    "objectives": [
      {
        "id": "backup_script_exists",
        "text": "\"backup_logs.sh\" 스크립트 생성"
      },
      {
        "id": "backup_logic",
        "text": "cp로 for 루프 구현"
      },
      {
        "id": "backup_executed",
        "text": "backup_logs.sh 스크립트 실행"
      },
      {
        "id": "backup_dir_ok",
        "text": "\"backup/\" 디렉터리에 복사본 보관"
      }
    ],
    "hints": [
      "backup_logs.sh 생성, 백업 폴더 생성, for 루프를 사용하여 모든 .log 파일 복사 및 실행.",
      "mkdir -p 백업을 사용한 다음 '*.log의 파일에 대해'를 사용하십시오. cp \"$file\" 백업을 수행합니다/; backup_logs.sh에서 done'을 입력하고 실행합니다.",
      "실행해 보세요. backup_logs.sh를 터치하고 내부에 루프를 작성하고 실행 가능하게 만든 다음 ./backup_logs.sh를 실행하세요."
    ]
  },
  "43": {
    "title": "sed",
    "description": "을 사용한 스트림 편집 거대한 데이터베이스 덤프 파일이 있고 이전 서버 IP 주소의 모든 항목을 새 주소로 바꿔야 한다고 가정해 보세요. 편집기에서 열면 컴퓨터가 정지될 수 있습니다. Linux에서는 `sed`(\"스트림 편집기\"의 약자)을 사용하여 텍스트 스트림을 즉시 편집합니다.\n\n- 텍스트를 찾고 바꾸는 기본 구문은 `sed \"s/old/new/g\" file.txt`입니다.\n- `-i`(내부) 플래그를 추가하면 수정된 텍스트를 화면에 인쇄하는 대신 대체 항목을 파일 자체에 직접 다시 저장합니다.\n\n**이것이 중요한 이유**: `-i` 없이 `sed \"s/port=80/port=8080/g\" server.conf`을 실행하면 수정된 텍스트만 터미널 화면에 인쇄됩니다. 실제 파일은 완전히 변경되지 않은 상태로 유지됩니다. 변경 사항을 파일에 직접 저장하려면 `-i`(내부) 플래그가 필요합니다.",
    "instructions": "설정을 업데이트해 보겠습니다. 홈 폴더에서 `server.conf`을 편집하세요. `sed -i \"s/port=80/port=8080/g\" server.conf`을 실행하여 `port=80`을 `port=8080`로 변경합니다.",
    "commandHelp": [
      {
        "cmd": "sed -i \"s/old/new/g\" file",
        "desc": "파일에서 내부 텍스트 대체 수행"
      }
    ],
    "objectives": [
      {
        "id": "used_sed",
        "text": "-i 플래그와 함께 \"sed\" 명령 사용"
      },
      {
        "id": "port_changed",
        "text": "server.conf에서 포트 구성을 port=8080으로 설정"
      }
    ],
    "hints": [
      "스트림 편집 및 검색 대체를 수행하는 명령에 대해 생각해 보십시오.",
      "'port=80'을 'port=8080'으로 대체하려면 내부 옵션(-i)과 함께 sed를 사용하십시오.",
      "실행해 보세요: sed -i \"s/port=80/port=8080/g\" server.conf"
    ]
  },
  "44": {
    "title": "awk",
    "description": "을 사용한 데이터 추출 열이 쉼표나 공백으로 구분되어 있고 데이터의 첫 번째 열만 추출하면 되는 일반 텍스트로 저장된 큰 스프레드시트를 받았다고 상상해 보세요. Linux에서는 강력한 언어인 `awk`을 사용하여 구조화된 텍스트 열을 구문 분석합니다.\n\n- 기본적으로 `awk`은 줄을 공백으로 분할하여 열 1을 `$1`에 할당하고 열 2를 `$2`에 할당하는 식으로 진행합니다.\n- `-F` 플래그를 사용하면 사용자 정의 구분 기호(예: 콜론의 경우 `-F:`)를 지정할 수 있습니다. 예를 들어 `awk -F: '{print $1}' /etc/passwd`은 콜론으로 구분된 목록에서 사용자 이름만 추출합니다.\n\n**중요한 이유**: `-F:` 없이 `awk '{print $1}' /etc/shadow`을 실행하면 `awk`은 콜론이 아닌 공백(기본값)으로 줄을 분할합니다. 섀도우 파일 줄에는 공백이 없으므로 전체 줄이 단일 필드로 처리되어 모든 사용자의 전체 해시 세부 정보가 인쇄됩니다. `-F:` 플래그는 `awk`이 대신 콜론으로 열을 분할하도록 강제합니다.",
    "instructions": "일부 데이터를 추출해 보겠습니다. `:` 구분 기호와 함께 `awk`을 사용하여 `/etc/shadow`에서 모든 사용자 이름(첫 번째 열)을 검색하고 `sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt`을 사용하여 `shadow_users.txt`에 저장합니다.",
    "commandHelp": [
      {
        "cmd": "awk -F: '{print $1}' file",
        "desc": "콜론으로 구분된 파일의 첫 번째 필드 인쇄"
      }
    ],
    "objectives": [
      {
        "id": "used_awk",
        "text": "필드 구분 기호 플래그와 함께 \"awk\" 사용 -F"
      },
      {
        "id": "created_shadow_users",
        "text": "이름을 \"shadow_users.txt\"로 출력"
      },
      {
        "id": "correct_shadow_users",
        "text": "Shadow_users.txt에 루트 및 학습자가 있는지 확인"
      }
    ],
    "hints": [
      "사용자 정의 필드 구분 기호를 사용하여 데이터 열을 분할하는 명령에 대해 생각해 보세요.",
      "-F:와 함께 awk를 사용하여 sudo로 /etc/shadow의 첫 번째 열($1)을 인쇄하고 출력을 Shadow_users.txt로 리디렉션합니다.",
      "다음을 실행해 보세요: sudo awk -F: '{print $1}' /etc/shadow >shadow_users.txt"
    ]
  },
  "45": {
    "title": "데이터 번역 및 잘라내기",
    "description": "거래 날짜와 이름이 포함된 CSV 스프레드시트로 작업한다고 상상해 보세요. 일관성을 위해 첫 번째 열(날짜)만 추출하고 모든 텍스트를 대문자로 변환하려고 합니다. Linux에서는 파이프라인에 경량 구문 분석 도구를 결합할 수 있습니다.\n\n- `cut` 명령은 구조화된 텍스트에서 특정 열을 분할합니다. 예를 들어 `cut -d, -f1`은 줄을 쉼표(`-d,`)로 나누고 첫 번째 열(`-f1`)을 추출합니다.\n- `tr`(번역) 명령은 소문자를 대문자(`tr \"a-z\" \"A-Z\"`)로 바꾸는 것과 같이 표준 입력의 문자를 변환합니다.\n\n**이것이 중요한 이유**: `-d,` 및 `-f1` 없이 `cut reports.csv`을 실행하면 `cut: you must specify a list of bytes, characters, or fields`이 표시됩니다. `-f1`을 지정하고 `-d,`을 생략하면 기본값은 탭으로 설정됩니다. 즉, CSV 파일을 분할하지 않고 전체 줄만 인쇄한다는 의미입니다. `-d,` 플래그는 쉼표를 열 구분 기호로 정의하고 `-f1`은 첫 번째 열만 추출하도록 지시합니다.",
    "instructions": "데이터를 분할하고 변환해 보겠습니다. `cut -d, -f1 reports.csv`를 사용하여 `reports.csv`의 첫 번째 열을 추출하고 이를 `tr \"a-z\" \"A-Z\"`에 파이프하여 대문자로 만든 다음 최종 결과를 `upper_reports.txt`로 리디렉션합니다.",
    "commandHelp": [
      {
        "cmd": "cut -d, -f1 file | tr \"a-z\" \"A-Z\"",
        "desc": "파이프 컷 필드를 번역으로 변환"
      }
    ],
    "objectives": [
      {
        "id": "used_cut",
        "text": "쉼표 구분 기호와 함께 \"cut\" 사용"
      },
      {
        "id": "used_tr",
        "text": "\"tr\"을 사용하여 문자를 대문자로 변환"
      },
      {
        "id": "upper_reports_exists",
        "text": "\"upper_reports.txt\" 파일 생성"
      },
      {
        "id": "content_uppercase",
        "text": "텍스트가 대문자인지 확인"
      }
    ],
    "hints": [
      "첫 번째 열을 추출하고 대문자로 변환하고 저장하려면 Reports.csv를 분할해야 합니다.",
      "cut -d, -f1 Reports.csv를 사용하여 tr \"a-z\" \"A-Z\"로 파이프(|)하고 upper_reports.txt로 리디렉션(>)합니다.",
      "실행해 보세요: cut -d, -f1 Reports.csv | tr \"a-z\" \"A-Z\" > upper_reports.txt"
    ]
  },
  "46": {
    "title": "환경 변수 관리",
    "description": "웹 응용 프로그램을 배포하고 안전한 로컬 \"개발\" 샌드박스에서 실행할지 아니면 라이브 \"프로덕션\" 데이터베이스에 연결할지 알아야 한다고 가정해 보겠습니다. Linux에서는 **환경 변수**를 사용하여 이와 같은 구성을 실행 중인 프로그램에 전달합니다.\n\n- `export` 명령을 사용하여 쉘에서 시작한 모든 프로그램이 변수를 읽을 수 있도록 변수를 정의합니다. 예: `export APP_ENV=production`.\n- 변수 값을 확인하거나 표시하려면 이름 앞에 달러 기호(`echo $APP_ENV`)를 붙입니다.",
    "instructions": "환경을 구성해 보겠습니다. `export APP_ENV=production`를 실행하여 `production` 값으로 `APP_ENV`이라는 변수를 설정하고 내보낸 다음 `echo $APP_ENV`을 실행하여 확인합니다.",
    "commandHelp": [
      {
        "cmd": "export VAR=val",
        "desc": "환경 변수 정의"
      },
      {
        "cmd": "echo $VAR",
        "desc": "변수 값 인쇄"
      }
    ],
    "objectives": [
      {
        "id": "exported_env",
        "text": "\"export\" 명령 실행"
      },
      {
        "id": "env_correct",
        "text": "APP_ENV 환경 변수를 \"production\"으로 설정"
      },
      {
        "id": "echoed_env",
        "text": "\"echo $APP_ENV\"를 사용하여 변수 인쇄"
      }
    ],
    "hints": [
      "어떤 명령이 환경 변수를 정의하는지 생각해 보세요.",
      "내보내기 APP_ENV=production을 사용하고 echo $APP_ENV를 사용하여 인쇄합니다.",
      "실행해 보세요: import APP_ENV=production 다음에 echo $APP_ENV가 옵니다."
    ]
  },
  "47": {
    "title": "아카이브 및 압축(tar)",
    "description": "500개의 서버 로그가 포함된 폴더가 있고 이를 동료에게 이메일로 보내거나 클라우드 스토리지에 백업한다고 가정해 보세요. 500개의 개별 파일을 보내는 것은 느리고 비효율적입니다. Linux에서는 `tar`(\"테이프 아카이브\"의 약자)을 사용하여 압축된 단일 zip 형식 파일로 압축합니다.\n\n- `-c`(생성), `-z`(gzip으로 압축), `-v`(자세한 파일 목록) 및 `-f`(파일 이름 지정) 플래그를 사용하여 압축된 아카이브를 생성합니다. 예를 들어 `tar -czvf backup.tar.gz folder/`는 디렉터리를 묶고 압축합니다.\n\n**이것이 중요한 이유**: `-f` 없이 `tar -cz logs.tar.gz logs`을 실행하면 `tar: Refusing to write archive contents to terminal`이 표시됩니다. `-f` 플래그는 원시 바이너리 아카이브 데이터를 터미널에 직접 보내는 대신 파일에 출력을 쓰도록 `tar`에 지시하기 때문에 중요합니다. 아카이브를 각각 생성하고 압축하려면 `-c` 및 `-z` 플래그도 필요합니다.",
    "instructions": "로그를 패키징해 보겠습니다. `tar -czvf logs.tar.gz logs`을 실행하여 `/home/learner` 내의 `logs` 폴더를 `logs.tar.gz`이라는 파일로 묶고 압축합니다.",
    "commandHelp": [
      {
        "cmd": "tar -czvf archive.tar.gz folder",
        "desc": "압축된 tar 아카이브 생성"
      }
    ],
    "objectives": [
      {
        "id": "used_tar_c",
        "text": "-c(create) 및 -z(gzip) 플래그와 함께 \"tar\" 명령 사용"
      },
      {
        "id": "archive_exists",
        "text": "홈 디렉터리에 \"logs.tar.gz\" 생성"
      }
    ],
    "hints": [
      "어떤 명령 패키지를 사용하고 폴더를 tarball 아카이브로 압축하는지 생각해 보세요.",
      "생성(-c), gzip(-z), 상세(-v) 및 파일(-f) 옵션과 함께 tar를 사용합니다.",
      "다음을 실행해 보십시오: tar -czvflogs.tar.gzlogs"
    ]
  },
  "48": {
    "title": "환경 검사",
    "description": "프로그램 경로를 찾을 수 없기 때문에 계속 실패하는 스크립트를 디버깅하려고 하거나 이 터미널에서 어떤 사용자 계정이 활성화되어 있는지 확인하려고 한다고 상상해 보십시오. Linux에서는 이러한 모든 세션 전체 구성이 함께 저장됩니다.\n\n- `env` 명령은 현재 활성 세션에 로드된 모든 환경 변수의 전체 디렉터리를 인쇄하므로 구성을 한 번에 확인할 수 있습니다.",
    "instructions": "환경 목록을 살펴보겠습니다. `env` 명령을 실행하여 터미널 세션의 모든 활성 환경 변수를 인쇄합니다.",
    "commandHelp": [
      {
        "cmd": "env",
        "desc": "활성 환경 변수 나열"
      }
    ],
    "objectives": [
      {
        "id": "ran_env",
        "text": "\"env\" 명령 실행"
      }
    ],
    "hints": [
      "모든 활성 환경 변수를 인쇄하는 명령에 대해 생각해 보십시오.",
      "'env' 명령을 사용합니다.",
      "실행해 보세요: env"
    ]
  },
  "49": {
    "title": "링크 생성(ln -s)",
    "description": "`/var/www/html/configs/app/settings.conf`과 같은 중첩 폴더에 구성 파일이 깊이 묻혀 있지만 이를 지속적으로 편집해야 한다고 가정해 보십시오. 매번 긴 폴더 경로를 입력하는 대신 빠른 바탕 화면 바로 가기가 필요합니다. Linux에서는 링크를 생성하여 이를 수행합니다.\n\n- **하드 링크**: 원시 파일 데이터를 가리키는 직접 복제입니다. 원본 파일을 삭제해도 링크는 계속 작동합니다.\n- **심볼릭 링크(소프트 링크)**: 경로 기반 단축키(Windows 단축키와 동일)입니다. 원본파일을 삭제하시면 링크가 깨집니다. `ln -s target link_name`을 사용하여 생성합니다.\n\n**이것이 중요한 이유**: `-s` 없이 `ln logs/app.log app_link.log`을 실행하면 기호 바로가기 대신 하드 링크가 생성됩니다. 파일이 다른 디스크 파티션에 있는 경우 `ln: failed to create hard link: Invalid cross-device link`이 표시됩니다. `-s` 플래그는 다양한 드라이브와 디렉터리에서 작동하는 유연한 기호 링크(바로가기)를 생성합니다.",
    "instructions": "바로가기를 만들어 보겠습니다. `ln -s logs/app.log app_link.log`을 실행하여 대상 파일 `logs/app.log`을 가리키는 `/home/learner`에 `app_link.log`이라는 기호 링크를 만듭니다.",
    "commandHelp": [
      {
        "cmd": "ln -s target link_name",
        "desc": "심볼릭 링크 생성"
      }
    ],
    "objectives": [
      {
        "id": "used_ln_s",
        "text": "심볼릭 플래그 -s와 함께 \"ln\" 사용"
      },
      {
        "id": "link_created",
        "text": "대상 로그/app.log를 가리키는 \"app_link.log\" 링크 생성"
      }
    ],
    "hints": [
      "파일 바로가기/링크를 생성하는 명령에 대해 생각해 보세요.",
      "대상 경로 뒤에 링크 이름이 오는 'ln -s'를 사용하십시오.",
      "다음을 실행해 보세요: ln -slogs/app.log app_link.log"
    ]
  },
  "50": {
    "title": "검색 결과 처리(xargs)",
    "description": "100개의 임시 파일을 반환하는 검색을 실행했는데 이제 모든 파일을 삭제하려고 한다고 가정해 보겠습니다. 검색 출력은 화면에 표시된 텍스트 이름 목록일 뿐입니다. 이러한 이름을 삭제 명령에 직접 입력하려면 어떻게 해야 할까요? Linux에서는 `xargs`을 사용하여 이 격차를 해소합니다.\n\n- `xargs`(인수 실행) 명령은 표준 입력(`find`의 파일 목록과 같은) 행을 가져와서 이를 다른 명령에 대한 인수로 하나씩 제공합니다.\n- 예를 들어 `find . -name \"*.tmp\" | xargs rm`은 모든 임시 파일을 찾아 한 번에 모두 제거합니다.",
    "instructions": "일부 검색 결과를 처리해 보겠습니다. `find logs -name \"*.log\"`을 사용하여 `/home/learner/logs`에서 모든 `.log` 파일을 찾아 `xargs wc -l`로 파이프하여 모든 행을 종합적으로 계산합니다.",
    "commandHelp": [
      {
        "cmd": "find path -name \"pattern\" | xargs command",
        "desc": "검색 결과를 명령에 전달"
      }
    ],
    "objectives": [
      {
        "id": "used_find",
        "text": "로그 폴더에서 \"find\" 명령을 실행합니다."
      },
      {
        "id": "used_xargs",
        "text": "결과를 \"xargs\"로 파이프합니다."
      },
      {
        "id": "ran_wc_l",
        "text": "xargs 파이프라인을 통해 \"wc -l\"을 실행합니다."
      }
    ],
    "hints": [
      "모든 로그 파일을 검색하고 xargs를 사용하여 이름을 wc -l로 파이프합니다.",
      "find log -name \"*.log\"를 사용하고 이를 xargs wc -l로 파이프(|)합니다.",
      "다음을 실행해 보세요. find 로그 -name \"*.log\" | xargs 화장실 -l"
    ]
  },
  "51": {
    "title": "파일 엿보기(머리 및 꼬리)",
    "description": "이제 `cat`을 사용하여 전체 파일을 읽을 수 있습니다. 파일에 수천 줄이 있고 위쪽이나 아래쪽만 보려면 어떻게 해야 합니까? `cat`을 사용하여 대용량 파일을 덤프하면 화면이 가득 찼습니다. 대신 `head` 및 `tail`을 사용하여 가장자리를 엿봅니다.\n\n- `head` 명령은 기본적으로 파일의 처음 10줄을 표시합니다. `-n <number>`를 사용하여 이를 변경할 수 있습니다(예: 처음 5줄의 경우 `head -n 5 log.txt`).\n- `tail` 명령은 기본적으로 마지막 10줄을 표시하며 동일한 `-n` 옵션을 지원합니다.\n- 결정적으로 `tail -f`(follow)는 파일을 실시간으로 모니터링하여 시스템에서 작성된 새 줄을 표시합니다. 이것은 실시간 로그를 보기 위해 시스템 관리자가 가장 좋아하는 도구입니다.",
    "instructions": "로그를 살펴보겠습니다. `head -n 5 logs/app.log`을 사용하면 애플리케이션 로그의 처음 5줄을 볼 수 있습니다. 그런 다음 `tail -n 3 logs/security.log`을 실행하여 마지막 3개의 보안 이벤트를 확인하세요. 마지막으로 `tail -f logs/app.log`을 실행하여 실시간 로그 모니터링을 시뮬레이션합니다(모의 항목을 인쇄하고 종료합니다).",
    "commandHelp": [
      {
        "cmd": "head -n 5 logs/app.log",
        "desc": "app.log의 처음 5줄 표시"
      },
      {
        "cmd": "tail -n 3 logs/security.log",
        "desc": "security.log의 마지막 3줄 표시"
      },
      {
        "cmd": "tail -f logs/app.log",
        "desc": "app.log 업데이트를 실시간으로 모니터링"
      }
    ],
    "objectives": [
      {
        "id": "used_head",
        "text": "log/app.log에서 -n 5와 함께 \"head\" 명령 실행"
      },
      {
        "id": "used_tail",
        "text": "log/security.log에서 -n 3과 함께 \"tail\" 명령 실행"
      },
      {
        "id": "used_tail_f",
        "text": "app.log를 따르려면 -f와 함께 \"tail\" 명령 실행"
      }
    ],
    "hints": [
      "head -n 5 뒤에 파일 이름을 입력하고 tail -n 3 뒤에 보안 로그 경로를 입력하세요.",
      "라이브 로그를 따라가려면 tail 명령에 -f 옵션을 추가하세요.",
      "다음을 실행해 보세요. head -n 5logs/app.log, tail -n 3logs/security.log, 마지막으로 tail -flogs/app.log"
    ]
  },
  "52": {
    "title": "대화형 파일 스크롤(더 적음)",
    "description": "`head` 및 `tail`을 사용하여 파일의 상단과 하단을 엿보는 것은 훌륭하지만 긴 구성 파일을 페이지별로 검색해야 하는 경우에는 어떻게 합니까? 이것이 `less` 및 `more`과 같은 호출기의 용도입니다.\n\n- 호출기는 파일을 대화형으로 로드하여 한 번에 한 페이지의 텍스트를 표시하여 대용량 파일의 시스템 속도 저하를 방지합니다.\n- `less`는 화살표 키를 사용하여 앞뒤로 스크롤하고, `/`로 텍스트를 검색하고, `q`을 눌러 종료할 수 있는 현대적인 선택입니다.\n- `more`은 앞으로만 스크롤하는 더 오래되고 간단한 호출기입니다.",
    "instructions": "긴 파일을 페이지별로 읽어보겠습니다. `less /etc/hosts`을 실행하여 스크롤 보기로 엽니다. (우리 터미널에서는 내용이 스크롤 가능한 프레임으로 출력됩니다. 돌아가려면 `q`을 누르세요).",
    "commandHelp": [
      {
        "cmd": "less /etc/hosts",
        "desc": "적은 호출기에서 호스트 파일 열기"
      },
      {
        "cmd": "more /etc/hosts",
        "desc": "추가 호출기에서 호스트 파일 열기"
      }
    ],
    "objectives": [
      {
        "id": "used_less",
        "text": "호출기에서 /etc/hosts 열기(적거나 그 이상)"
      }
    ],
    "hints": [
      "파일 경로 /etc/hosts에서 'less' 또는 'more' 명령을 사용합니다.",
      "실행해 보세요: less /etc/hosts"
    ]
  },
  "53": {
    "title": "시스템 로깅(journalctl)",
    "description": "이제 `systemctl`을 사용하여 백그라운드 서비스를 시작하고 중지할 수 있습니다. 서비스가 실패할 경우 어떻게 문제를 해결합니까? `journalctl` 유틸리티를 사용하면 systemd가 관리하는 서비스에서 생성된 시스템 로그를 검사할 수 있습니다.\n\n- 기본적으로 `journalctl`는 모든 시스템 로그를 표시합니다. 이는 규모가 클 수 있으므로 집중할 수 있도록 필터링합니다.\n- `-u <service>` 옵션은 특정 서비스(예: `journalctl -u apache2`)의 메시지만 표시하도록 로그를 필터링합니다.\n- `-n <number>` 옵션은 가장 최근 항목만 표시합니다(예: 마지막 5개 로그의 경우 `journalctl -n 5`).\n- `-f`(follow) 플래그는 로그가 기록되는 대로 실시간으로 표시합니다.",
    "instructions": "웹 서버 로그를 조사해 보겠습니다. `journalctl -u apache2`을 실행하여 `apache2` 서비스에 대한 시스템 로그를 필터링합니다. 그런 다음 `journalctl -n 5`을 실행하여 마지막 5개의 일반 시스템 로그 메시지를 확인하세요.",
    "commandHelp": [
      {
        "cmd": "journalctl -u apache2",
        "desc": "apache2 서비스에 대한 로그 표시"
      },
      {
        "cmd": "journalctl -n 5",
        "desc": "마지막 5개 시스템 로그 메시지 표시"
      }
    ],
    "objectives": [
      {
        "id": "used_journalctl_u",
        "text": "Journalctl -u를 사용하여 apache2 서비스에 대한 로그 필터링"
      },
      {
        "id": "used_journalctl_n",
        "text": "Journalctl -n을 사용하여 마지막 몇 개의 로그 항목 보기"
      }
    ],
    "hints": [
      "웹 서버 로그를 보려면 -u 옵션을 apache2로 설정하여 Journalctl을 사용합니다.",
      "로그를 마지막 5줄로 제한하려면 Journalctl -n 5를 사용하세요.",
      "다음을 실행해 보세요: Journalctl -u apache2, 그리고 다음: Journalctl -n 5"
    ]
  },
  "54": {
    "title": "재사용 가능한 논리(bash 함수)",
    "description": "스크립트에서 작업을 자동화하기 위해 루프와 조건문을 작성했습니다. 그러나 스크립트가 커짐에 따라 동일한 논리를 계속해서 복사하여 붙여넣으면 유지 관리가 어려워집니다. Bash에서는 명령을 재사용 가능한 기능으로 그룹화할 수 있습니다.\n\n- 함수를 정의하려면 이름 뒤에 괄호와 중괄호를 사용하여 선언합니다(`log_msg() { echo \"msg\"; }`).\n- 함수는 함수 본문 내에서 로컬 위치 매개변수 `$1`, `$2` 등을 사용하여 액세스되는 쉘 스크립트와 마찬가지로 인수를 받을 수 있습니다.\n- 함수를 호출하려면 다른 명령과 마찬가지로 해당 이름(`log_msg \"Backup started\"`)을 사용하면 됩니다.",
    "instructions": "모듈식 백업 스크립트를 작성해 보겠습니다. 홈 폴더에 `backup_helper.sh`라는 스크립트를 만듭니다. 타임스탬프(예: `log_msg() { echo \"[$(date +%T)] $1\"; }` 또는 이와 유사한)가 포함된 메시지를 인쇄하는 `log_msg`라는 함수를 정의하고 스크립트 내에서 이를 최소 두 번 호출하여 작업을 기록합니다. 실행 가능하게 만들고 실행해 보세요.",
    "commandHelp": [
      {
        "cmd": "func_name() { ... }",
        "desc": "bash에서 함수 정의"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "홈에 \"backup_helper.sh\" 스크립트 파일 생성"
      },
      {
        "id": "has_function",
        "text": "스크립트 내에서 log_msg 함수 정의"
      },
      {
        "id": "script_executed",
        "text": "스크립트를 실행 가능하게 만들고 실행"
      }
    ],
    "hints": [
      "touch backup_helper.sh를 사용한 다음 shebang #!/bin/bash, log_msg() { ... }를 포함하도록 편집하고 log_msg를 두 번 호출합니다.",
      "./backup_helper.sh를 실행하기 전에 chmod 755 backup_helper.sh를 실행하여 실행 가능하게 만드십시오.",
      "함수를 정의해 보십시오: log_msg() { echo \"[LOG] $1\"; } 그런 다음 다음과 같이 호출합니다. log_msg 'Starting'"
    ]
  },
  "55": {
    "title": "예약 작업(crontab)",
    "description": "이제 강력한 쉘 스크립트를 작성했으므로 백업 도우미를 실행하기 위해 자정에 로그인하고 싶지 않을 것입니다. Linux는 특정 시간에 자동으로 명령이나 스크립트를 실행하는 `cron` 서비스를 제공합니다.\n\n- cron 서비스는 `crontab`이라는 예약 테이블을 확인합니다.\n- 각 cron 일정에는 시간을 나타내는 5개의 필드가 있습니다: `minute hour day-of-month month day-of-week` 뒤에 명령이 옵니다.\n- 예를 들어 `30 2 * * * /path/to/script.sh`은 매일 오전 2시 30분에 스크립트를 실행합니다.\n- `crontab -l`를 사용하여 활성 cron 작업을 나열하고 `crontab <filename>`를 사용하여 파일에서 일정을 로드합니다.",
    "instructions": "백업 도우미를 자동화해 보겠습니다. cron 예약 문자열을 `my_cron`이라는 파일에 씁니다(예: 1분마다 실행하려면 `* * * * * /home/learner/backup_helper.sh`). `crontab my_cron`을 실행하여 이 일정을 설치하고 `crontab -l`을 실행하여 확인합니다.",
    "commandHelp": [
      {
        "cmd": "crontab my_cron",
        "desc": "my_cron 파일에서 크론 작업 설치"
      },
      {
        "cmd": "crontab -l",
        "desc": "현재 사용자의 활성 크론 작업 나열"
      }
    ],
    "objectives": [
      {
        "id": "cron_file_created",
        "text": "크론 일정을 사용하여 집에 \"my_cron\" 파일 생성"
      },
      {
        "id": "cron_installed",
        "text": "crontab my_cron을 사용하여 크론 일정 설치"
      },
      {
        "id": "cron_listed",
        "text": "crontab -l을 사용하여 활성 크론 일정 나열"
      }
    ],
    "hints": [
      "echo '* * * * * 사용 /home/learner/backup_helper.sh' > my_cron cron 파일을 생성합니다.",
      "crontab my_cron을 실행하여 cron 파일을 crontab 테이블에 로드합니다.",
      "crontab -l을 사용하여 설치된 cron 작업을 확인합니다."
    ]
  },
  "56": {
    "title": "명령 찾기(어떤)",
    "description": "이제 `PATH`(Linux가 명령을 찾는 디렉터리를 저장하는)과 같은 활성 환경 변수에 익숙해졌으므로 `ls` 또는 `grep`를 입력할 때 실행되는 프로그램의 정확한 파일 경로를 어떻게 찾을 수 있습니까? `which`을 사용하여 명령 바이너리를 찾습니다.\n\n- `which` 명령은 `$PATH` 변수에 나열된 폴더를 검색하고 명령이 실행될 때 실행된 바이너리의 절대 경로를 인쇄합니다(예: `which ls`은 `/bin/ls`을 출력합니다).\n- 도구가 설치된 위치를 찾거나 동일한 도구의 여러 버전 간의 충돌을 해결하는 데 유용합니다.",
    "instructions": "도구를 찾아봅시다. `which ls`을 실행하여 `ls` 실행 파일이 시스템에 저장된 위치를 확인하세요. 그런 다음 `which grep`을 실행하여 `grep` 명령의 경로를 찾으십시오.",
    "commandHelp": [
      {
        "cmd": "which ls",
        "desc": "ls의 절대 경로 찾기"
      },
      {
        "cmd": "which grep",
        "desc": "grep의 절대 경로 찾기"
      }
    ],
    "objectives": [
      {
        "id": "used_which_ls",
        "text": "ls에서 \"which\" 명령을 실행합니다."
      },
      {
        "id": "used_which_grep",
        "text": "grep에서 \"which\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "ls의 경로를 찾으려면 which ls를 실행하고, grep의 경로를 찾으려면 which grep을 실행합니다.",
      "실행해 보세요: which ls, 그리고 which grep"
    ]
  },
  "57": {
    "title": "사용자 정의 셸 바로 가기(별칭)",
    "description": "여러 플래그를 사용하여 긴 명령을 입력하면 지칠 수 있습니다. Linux에서는 별칭이라는 사용자 정의 바로가기를 만들 수 있습니다. 예를 들어 `ll`을 매핑하여 `ls -la`을 자동으로 실행할 수 있습니다.\n\n- 임시 별칭을 만들려면 `alias name='command'`(예: `alias ll='ls -la'`)를 실행하세요.\n- 인수 없이 `alias`을 실행하면 현재 세션의 모든 활성 별칭이 나열됩니다.\n- 재부팅 시 별칭을 영구적으로 만들기 위해 일반적으로 `.bashrc` 또는 `.bash_profile` 구성 파일에 기록됩니다.",
    "instructions": "몇 가지 단축키를 설정해 보겠습니다. `alias la='ls -a'`을 실행하여 `ls -a`을 실행하는 `la`이라는 임시 별칭을 만듭니다. 터미널에서 `la`을 실행하여 테스트하세요.",
    "commandHelp": [
      {
        "cmd": "alias la='ls -a'",
        "desc": "ls -a를 실행하기 위한 별칭 la"
      },
      {
        "cmd": "alias",
        "desc": "활성 별칭 나열"
      }
    ],
    "objectives": [
      {
        "id": "alias_created",
        "text": "ls -a에 대한 별칭 la 생성"
      },
      {
        "id": "alias_run",
        "text": "새로 생성된 별칭 la 실행"
      }
    ],
    "hints": [
      "표시된 대로 정확하게 alias la='ls -a'를 사용하여 별칭을 정의합니다.",
      "터미널에서 alias la 명령을 실행하여 작동하는지 확인합니다.",
      "다음을 실행해 보십시오: alias la='ls -a' 다음에: la"
    ]
  },
  "58": {
    "title": "사용자 관리(useradd & passwd)",
    "description": "지금까지 `learner` 사용자로 작업했습니다. 그러나 실제 서버에서는 시스템 관리자가 여러 계정을 관리해야 합니다. 새로운 사용자를 추가하고 비밀번호를 설정하는 방법을 알아보세요.\n\n- `useradd` 명령은 새로운 사용자 계정을 생성합니다. 계정 생성은 시스템 보안에 영향을 미치므로 수퍼유저 권한(예: `sudo useradd deployer`)으로 실행해야 합니다.\n- `passwd` 명령은 사용자의 비밀번호를 설정하거나 변경합니다. 배포자 사용자의 비밀번호를 설정하려면 `sudo passwd deployer`로 실행하세요.",
    "instructions": "동료의 계정을 추가해 보겠습니다. `sudo useradd deployer`을 실행하여 `deployer`이라는 새 사용자를 생성합니다. 그런 다음 `sudo passwd deployer`을 실행하여 비밀번호를 설정하세요(메시지가 나타나면 모의 비밀번호를 입력하세요).",
    "commandHelp": [
      {
        "cmd": "sudo useradd deployer",
        "desc": "새 사용자 배포자 생성"
      },
      {
        "cmd": "sudo passwd deployer",
        "desc": "사용자 배포자의 비밀번호 설정"
      }
    ],
    "objectives": [
      {
        "id": "user_created",
        "text": "useradd를 사용하여 \"배포자\" 사용자 생성"
      },
      {
        "id": "passwd_changed",
        "text": "passwd를 사용하여 \"배포자\"의 비밀번호 설정"
      }
    ],
    "hints": [
      "사용자 계정을 등록하려면 sudo useradd 배포자를 사용합니다.",
      "sudo passwd 배포자를 실행하여 비밀번호를 설정합니다.",
      "실행해 보세요: sudo useradd 배포자, 그리고 다음: sudo passwd 배포자"
    ]
  },
  "59": {
    "title": "보안 컨텍스트 전환(su)",
    "description": "이제 `deployer` 계정을 생성했으므로 해당 계정에 로컬로 로그인하여 환경을 테스트하려면 어떻게 해야 합니까? Linux에서는 로그아웃하지 않고 계정을 전환하려면 `su`(사용자 대체) 명령을 사용합니다.\n\n- `su <username>` 명령은 현재 터미널 쉘을 해당 사용자의 세션으로 전환합니다.\n- 전환 시 `whoami`을 실행하면 새 사용자 이름이 반영됩니다.\n- 원래 사용자 계정 세션으로 돌아가려면 `exit`을 입력하거나 `Ctrl+D`를 누르십시오.",
    "instructions": "컨텍스트를 전환해 보겠습니다. `su deployer`을 실행하여 `deployer` 사용자로 전환합니다. 로그인한 후 `whoami`을 실행하여 실제로 `deployer`로 실행되고 있는지 확인하세요. 완료되면 `exit`을 입력하여 다시 전환하세요.",
    "commandHelp": [
      {
        "cmd": "su deployer",
        "desc": "사용자 세션을 배포자로 대체"
      },
      {
        "cmd": "whoami",
        "desc": "활성 사용자 세션 이름 확인"
      },
      {
        "cmd": "exit",
        "desc": "활성 사용자 세션 종료"
      }
    ],
    "objectives": [
      {
        "id": "switched_user",
        "text": "su를 사용하여 쉘 컨텍스트를 배포자로 전환"
      },
      {
        "id": "verified_whoami",
        "text": "whoami를 실행하여 배포자인지 확인"
      }
    ],
    "hints": [
      "su 배포자를 사용하여 배포자 쉘 세션으로 전환.",
      "whoami를 입력하여 누가 활동 중인지 확인합니다.",
      "다음을 실행해 보세요: su 배포자, whoami, 종료"
    ]
  },
  "60": {
    "title": "Secure Shell Access(ssh)",
    "description": "사용자를 로컬로 전환하는 것은 유용하지만 클라우드 컴퓨팅에서는 서버가 원격 데이터 센터에 있습니다. 네트워크를 통해 안전하게 연결하기 위해 `ssh`(Secure Shell)을 사용합니다.\n\n- `ssh` 명령은 도청을 방지하기 위해 시스템과 원격 호스트 간의 연결을 암호화합니다.\n- 구문: `ssh user@hostname` 또는 `ssh user@ip_address`(예: `ssh admin@192.168.1.100`).\n- 첫 번째 연결에서는 고유한 ECDSA 지문을 표시하여 원격 호스트의 신뢰성을 확인하라는 메시지가 표시됩니다.\n\n**참고:** 이는 브라우저 기반 샌드박스이므로 연결할 실제 원격 서버가 없습니다. 이 명령을 실행하면 실제 라이브 대화형 세션이 아닌 예상되는 실제 출력 패턴(호스트 확인, 연결, 세션)이 즉시 표시됩니다. 실제 터미널에서 ssh는 `exit`를 입력할 때까지 완전히 별도의 원격 셸로 이동합니다.",
    "instructions": "원격 스테이징 서버에 연결해 보겠습니다. `ssh admin@192.168.1.100`을 실행하여 `admin` 사용자로 `192.168.1.100`의 서버에 연결합니다(호스트 키를 확인하라는 메시지가 나타나면 `yes`를 입력하고 비밀번호를 입력하세요).",
    "commandHelp": [
      {
        "cmd": "ssh admin@192.168.1.100",
        "desc": "원격 스테이징 서버에 안전하게 연결합니다."
      }
    ],
    "objectives": [
      {
        "id": "ssh_connected",
        "text": "관리자로 192.168.1.100의 원격 서버에 SSH로 연결합니다."
      }
    ],
    "hints": [
      "ssh 명령과 user@host를 차례로 사용합니다. 여기서 사용자는 admin이고 호스트는 192.168.1.100입니다.",
      "실행해 보세요: ssh admin@192.168.1.100"
    ]
  },
  "61": {
    "title": "보안 파일 전송(scp)",
    "description": "이제 SSH를 통해 원격 서버에 로그인하는 방법을 알았으니 로컬 파일(예: 백업 아카이브)을 어떻게 복사합니까? `scp`(보안 복사) 명령은 내부적으로 SSH를 사용하여 호스트 간에 파일을 안전하게 복사합니다.\n\n- 구문은 `scp source_path user@host:destination_path`입니다.\n- 예를 들어 `scp log.txt admin@192.168.1.100:/tmp/`는 로컬 `log.txt` 파일을 원격 `/tmp/` 폴더에 복사합니다.\n\n**참고:** SSH와 마찬가지로 여기에는 실제 원격 서버가 없습니다. 이 명령을 실행하면 로컬 파일이 존재하는지 확인하고 예상되는 전송 출력이 표시되지만 실제로 데이터를 어디로도 보내지는 않습니다.",
    "instructions": "로그 아카이브를 원격 스테이징 서버로 보내겠습니다. `scp logs.tar.gz admin@192.168.1.100:/tmp/`을 실행하여 로컬 아카이브 `logs.tar.gz`을 `192.168.1.100`의 `/tmp` 폴더에 `admin` 사용자로 복사합니다.",
    "commandHelp": [
      {
        "cmd": "scp logs.tar.gz admin@192.168.1.100:/tmp/",
        "desc": "log.tar.gz를 원격 서버 /tmp 폴더에 복사합니다."
      }
    ],
    "objectives": [
      {
        "id": "scp_completed",
        "text": "scp를 통해 log.tar.gz를 192.168.1.100:/tmp/로 전송합니다."
      }
    ],
    "hints": [
      "scp 다음에 로컬 파일 log.tar.gz를 지정한 다음 원격 대상 admin@192.168.1.100:/tmp/를 지정합니다.",
      "실행해 보세요: scplogs.tar.gz admin@192.168.1.100:/tmp/"
    ]
  },
  "62": {
    "title": "파일 압축(gzip 및 gunzip)",
    "description": "대규모 데이터 세트가 포함된 단일 텍스트 파일이 있고 디스크 공간을 절약하거나 공유 속도를 높이기 위해 크기를 줄이고 싶다고 가정해 보십시오. Linux에서는 `gzip`을 사용하여 개별 파일을 압축하고 `gunzip`을 사용하여 복원합니다.\n\n- `gzip <filename>` 명령은 파일을 압축하여 `.gz`으로 끝나는 압축 버전으로 바꿉니다(예: `backup.txt`는 `backup.txt.gz`가 됩니다).\n- `gunzip <filename.gz>` 명령은 파일의 압축을 풀어 원래 버전을 복원합니다.",
    "instructions": "공간을 절약하기 위해 파일을 압축해 보겠습니다. 홈 폴더에서 `gzip note.txt`을 실행하세요. 그런 다음 `gunzip note.txt.gz`을 실행하여 결과 `note.txt.gz` 파일의 압축을 원래 상태로 되돌립니다.",
    "commandHelp": [
      {
        "cmd": "gzip note.txt",
        "desc": "note.txt를 note.txt.gz로 압축"
      },
      {
        "cmd": "gunzip note.txt.gz",
        "desc": "note.txt.gz의 압축을 풀어 다시 note.txt로"
      }
    ],
    "objectives": [
      {
        "id": "used_gzip",
        "text": "\"gzip\" 명령을 실행하여 note.txt를 압축합니다."
      },
      {
        "id": "used_gunzip",
        "text": "\"gunzip\" 명령을 실행하여 note.txt를 복원합니다."
      }
    ],
    "hints": [
      "gzip note.txt를 사용하여 파일을 압축합니다.",
      "gunzip note.txt.gz를 사용하여 다시 압축을 풉니다.",
      "다음을 실행해 보세요: gzip note.txt 다음에 gunzip note.txt.gz"
    ]
  },
  "63": {
    "title": "그룹 관리(groupadd & groups)",
    "description": "Linux에서는 사용자가 **그룹**으로 구성되어 권한을 쉽게 공유할 수 있습니다. 예를 들어 모든 개발자는 `developers`이라는 그룹에 속할 수 있습니다. 이를 통해 팀 전체와 동시에 파일을 공유할 수 있습니다.\n\n- `groupadd` 명령은 새 그룹을 생성합니다. 이는 시스템 구성이므로 슈퍼유저 권한(예: `sudo groupadd developers`)이 필요합니다.\n- `groups [username]` 명령은 사용자가 속한 모든 그룹을 나열합니다. 인수 없이 실행하면 현재 사용자에 대한 그룹이 표시됩니다.",
    "instructions": "그룹을 관리해 보겠습니다. `sudo groupadd developers`을 실행하여 `developers`이라는 새 그룹을 만듭니다. 그런 다음 `groups` 명령을 실행하여 자신의 활성 그룹을 확인하십시오.",
    "commandHelp": [
      {
        "cmd": "sudo groupadd developers",
        "desc": "개발자라는 새 그룹 생성"
      },
      {
        "cmd": "groups",
        "desc": "현재 사용자의 활성 그룹 표시"
      }
    ],
    "objectives": [
      {
        "id": "group_created",
        "text": "groupadd를 사용하여 \"developers\" 그룹 생성"
      },
      {
        "id": "checked_groups",
        "text": "\"groups\" 명령 실행"
      }
    ],
    "hints": [
      "sudo groupadd 개발자를 사용하여 그룹을 생성합니다.",
      "그룹을 나열하려면 groups 명령을 실행하기만 하면 됩니다.",
      "실행해 보세요: sudo groupadd 개발자 다음에 그룹을 추가하세요."
    ]
  },
  "64": {
    "title": "열린 파일 나열(lsof)",
    "description": "Unix 계열 시스템에서는 \"모든 것이 파일입니다.\" 이는 텍스트 파일과 폴더뿐만 아니라 네트워크 소켓, 시스템 하드웨어 및 프로세스도 파일로 처리된다는 의미입니다. 어떤 실행 프로그램이 어떤 파일에 액세스하고 있는지 확인하려면 `lsof`(열린 파일 나열)을 사용합니다.\n\n- `lsof`을 실행하면 열려 있는 모든 파일의 전체 목록과 함께 해당 파일을 열었던 프로세스 ID(PID) 및 명령이 표시됩니다.\n- 예를 들어 `lsof -i`를 실행하면 모든 네트워크 파일/소켓이 나열됩니다. 이는 어떤 프로세스가 특정 네트워크 포트(예: 포트 80)에서 수신 대기하는지 검색하는 데 매우 유용합니다.",
    "instructions": "활성 연결과 파일을 검사해 보겠습니다. `lsof`을 실행하면 시스템에 열려 있는 모든 파일을 볼 수 있습니다.",
    "commandHelp": [
      {
        "cmd": "lsof",
        "desc": "시스템에 열려 있는 모든 파일을 나열합니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_lsof",
        "text": "\"lsof\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "열려 있는 모든 파일을 나열하려면 인수 없이 'lsof' 명령을 사용합니다.",
      "실행해 보세요: lsof"
    ]
  },
  "65": {
    "title": "CPU 세부 정보 보기(lscpu)",
    "description": "시스템 성능 문제를 해결하거나 수요가 높은 응용 프로그램을 배포할 때 시스템 CPU의 성능을 알아야 합니다. Linux에서는 `lscpu` 명령을 사용하여 자세한 CPU 아키텍처 정보를 읽습니다.\n\n- `lscpu` 명령은 커널 파일 시스템에서 직접 CPU 모델, 공급업체, 클럭 속도, 코어 수, 하이퍼스레딩 세부 정보 및 캐시 크기와 같은 프로세서 세부 정보를 표시합니다.",
    "instructions": "프로세서를 검사해 보겠습니다. 시스템의 CPU 세부 정보를 보려면 `lscpu`를 실행하세요.",
    "commandHelp": [
      {
        "cmd": "lscpu",
        "desc": "CPU 아키텍처 정보 표시"
      }
    ],
    "objectives": [
      {
        "id": "ran_lscpu",
        "text": "\"lscpu\" 명령 실행"
      }
    ],
    "hints": [
      "프로세서 구성을 표시하려면 lscpu 명령을 실행하기만 하면 됩니다.",
      "실행해 보세요: lscpu"
    ]
  },
  "66": {
    "title": "zip 및 unzip을 사용한 보관",
    "description": "`tar` 및 `gzip`은 Linux에서 표준이지만 `zip`는 크로스 플랫폼 세계(Windows/macOS)에서 가장 일반적인 보관 형식입니다. Linux에서는 `zip`을 사용하여 파일을 zip 파일로 패키징하고 압축한 다음 `unzip`를 사용하여 추출합니다.\n\n- `zip <archive.zip> <files>` 명령은 zip 아카이브를 생성합니다.\n- `unzip <archive.zip>` 명령은 아카이브에서 파일을 추출합니다.",
    "instructions": "노트를 패키지화해 보겠습니다. 홈 폴더에 `note.txt` 파일이 포함된 `note.zip`이라는 zip 아카이브를 만듭니다. 그런 다음 `unzip note.zip`을 실행하여 추출을 테스트합니다.",
    "commandHelp": [
      {
        "cmd": "zip note.zip note.txt",
        "desc": "note.txt가 포함된 note.zip 생성"
      },
      {
        "cmd": "unzip note.zip",
        "desc": "note.zip의 내용 추출"
      }
    ],
    "objectives": [
      {
        "id": "used_zip",
        "text": "\"zip\" 명령 실행"
      },
      {
        "id": "used_unzip",
        "text": "\"unzip\" 명령 실행"
      }
    ],
    "hints": [
      "zip note.zip note.txt를 먼저 사용한 다음 note.zip의 압축을 푼다.",
      "다음을 실행해 보세요. zip note.zip note.txt 그런 다음 note.zip의 압축을 풉니다."
    ]
  },
  "67": {
    "title": "대체 압축(bzip2 & xz)",
    "description": "`gzip` 및 `zip` 외에도 Linux는 CPU 속도를 희생하면서 더 높은 압축 비율에 최적화된 다른 압축 형식을 지원합니다. 이는 `bzip2`(bz2) 및 `xz`(xz)입니다.\n\n- `bzip2 <file>` 명령은 파일을 압축하여 `<file>.bz2`을 출력합니다.\n- `xz <file>` 명령은 무손실 LZMA 압축을 사용하여 `<file>.xz`을 생성합니다. 이는 매우 작은 파일 크기를 생성하므로 Linux 커널 릴리스에 이상적입니다.",
    "instructions": "형식을 비교해 보겠습니다. `bzip2 note.txt`을 사용하여 `note.txt`을 압축합니다. 그런 다음 `xz note.txt`을 사용하여 결과 파일을 압축합니다(둘 다 시뮬레이션하기 위해).",
    "commandHelp": [
      {
        "cmd": "bzip2 note.txt",
        "desc": "bzip2를 사용하여 note.txt 압축"
      },
      {
        "cmd": "xz note.txt",
        "desc": "xz를 사용하여 note.txt 압축"
      }
    ],
    "objectives": [
      {
        "id": "used_bzip2",
        "text": "bzip2 note.txt 실행"
      },
      {
        "id": "used_xz",
        "text": "xz note.txt 실행"
      }
    ],
    "hints": [
      "bzip2 note.txt를 실행하여 bzip2 압축을 테스트합니다.",
      "xz note.txt를 실행하여 xz 압축을 테스트합니다."
    ]
  },
  "68": {
    "title": "데비안 패키지 관리(dpkg)",
    "description": "`apt`이 리포지토리에서 패키지 종속성을 자동으로 다운로드하고 해결하는 동안 `.deb` 패키지 파일을 이미 수동으로 다운로드하여 검사하거나 설치하고 싶다면 어떻게 해야 합니까? Linux에서는 `dpkg`(Debian 패키지)를 사용하여 패키지와 직접 상호 작용합니다.\n\n- `dpkg -l` 명령은 현재 Debian/Ubuntu 시스템에 설치된 모든 패키지를 나열합니다.\n- `dpkg -s <package>` 명령은 특정 패키지에 대한 상태, 버전 및 아키텍처 정보를 표시합니다.",
    "instructions": "로컬 패키지 데이터베이스를 쿼리해 보겠습니다. `dpkg -l`를 실행하여 패키지 목록을 확인하세요. 그런 다음 `dpkg -s tree`을 실행하여 `tree` 프로그램에 대한 세부 정보를 쿼리합니다.",
    "commandHelp": [
      {
        "cmd": "dpkg -l",
        "desc": "설치된 Debian 패키지 목록"
      },
      {
        "cmd": "dpkg -s tree",
        "desc": "트리 패키지의 세부 정보 표시"
      }
    ],
    "objectives": [
      {
        "id": "ran_dpkg_l",
        "text": "패키지 목록을 보려면 \"dpkg -l\"을 실행합니다."
      },
      {
        "id": "ran_dpkg_s",
        "text": "세부 정보를 쿼리하려면 \"dpkg -s tree\"를 실행합니다."
      }
    ],
    "hints": [
      "전체 패키지 목록을 검색하려면 dpkg -l을 사용합니다.",
      "dpkg -s tree를 사용하여 트리 패키지의 상태를 확인합니다.",
      "다음을 실행해 보세요: dpkg -l 다음에 dpkg -s tree"
    ]
  },
  "69": {
    "title": "RedHat 패키지 관리자(yum & dnf)",
    "description": "모든 Linux 환경이 Debian/Ubuntu를 기반으로 하는 것은 아닙니다. RedHat, Fedora 또는 CentOS 시스템에서 작업하는 경우 `apt` 또는 `dpkg`을 찾을 수 없습니다. 대신 이전 `yum` 또는 최신 `dnf`(Dandified YUM) 패키지 관리자를 사용하여 패키지를 관리하게 됩니다.\n\n- `dnf check-update`(또는 `yum check-update`) 명령은 RedHat 리포지토리에 연결하여 사용 가능한 패키지 업데이트를 검색합니다.\n- `dnf install <package>` 명령은 `apt install`과 유사한 프로그램을 가져와 설치합니다.",
    "instructions": "RedHat 기반 시뮬레이터에서 업데이트를 실행해 보겠습니다. `dnf check-update`(또는 `yum check-update`)을 실행하여 업데이트가 필요한 패키지를 확인하세요.",
    "commandHelp": [
      {
        "cmd": "dnf check-update",
        "desc": "RedHat 패키지 업데이트 확인"
      },
      {
        "cmd": "yum check-update",
        "desc": "레거시 CentOS 업데이트 확인"
      }
    ],
    "objectives": [
      {
        "id": "checked_updates",
        "text": "dnf check-update 또는 yum check-update 실행"
      }
    ],
    "hints": [
      "dnf 또는 yum 명령을 check-update 인수와 함께 사용합니다.",
      "실행해 보세요: dnf check-update"
    ]
  },
  "70": {
    "title": "사용자 관리(adduser 및 userdel)",
    "description": "`useradd`은 단순히 시스템 구성 파일에 사용자 세부 정보를 등록하는 하위 수준 유틸리티인 반면, Debian/Ubuntu 시스템은 홈 폴더 생성, 암호 설정 및 셸 환경 초기화를 자동화하는 `adduser`이라는 상위 수준 대화형 스크립트를 제공합니다. 반대로 `userdel`는 사용자 계정을 완전히 삭제합니다.\n\n- `sudo adduser tester`을 실행하면 사용자 구성을 대화형으로 안내합니다.\n- `sudo userdel tester`을 실행하면 사용자 계정이 삭제됩니다.",
    "instructions": "사용자 수명주기를 처리해 보겠습니다. `sudo adduser tester`를 사용하여 사용자를 생성합니다. 그런 다음 `sudo userdel tester`을 실행하여 사용자를 삭제합니다.",
    "commandHelp": [
      {
        "cmd": "sudo adduser tester",
        "desc": "대화형으로 사용자 테스터 생성"
      },
      {
        "cmd": "sudo userdel tester",
        "desc": "사용자 테스터 계정 삭제"
      }
    ],
    "objectives": [
      {
        "id": "ran_adduser",
        "text": "sudo"
      },
      {
        "id": "ran_userdel",
        "text": "과 함께 \"adduser\" 명령 실행 sudo"
      }
    ],
    "hints": [
      "과 함께 \"userdel\" 명령 실행 sudo adduser tester와 sudo userdel tester를 차례로 사용합니다.",
      "실행해 보세요: sudo adduser tester, 그리고 다음: sudo userdel tester"
    ]
  },
  "71": {
    "title": "사용자 ID(id) 보기",
    "description": "권한 오류 문제를 해결할 때 실행 중인 정확한 사용자 및 그룹 식별자 컨텍스트를 확인해야 합니다. `id`을 사용하여 이 작업을 수행합니다.\n\n- `id`을 실행하면 현재 사용자의 사용자 ID(UID), 기본 그룹 ID(GID) 및 모든 보조 그룹 목록이 인쇄됩니다.\n- `id <username>`를 실행하면 특정 사용자에 대한 정보를 쿼리합니다.",
    "instructions": "활성 ID를 확인해 보겠습니다. `id`을 실행하여 세부 정보를 확인한 다음 `id root`을 실행하여 수퍼유저의 계정 식별자를 검사합니다.",
    "commandHelp": [
      {
        "cmd": "id",
        "desc": "활성 사용자 식별 세부 정보 표시"
      },
      {
        "cmd": "id root",
        "desc": "루트 식별 세부 정보 쿼리"
      }
    ],
    "objectives": [
      {
        "id": "ran_id_learner",
        "text": "학습자에 대해 \"id\" 명령 실행"
      },
      {
        "id": "ran_id_root",
        "text": "\"id root\" 명령 실행"
      }
    ],
    "hints": [
      "id 다음에 id root 실행.",
      "실행해 보세요: id 및 id root"
    ]
  },
  "72": {
    "title": "그룹 삭제(groupdel)",
    "description": "프로젝트 팀이 서비스를 재구성하거나 서비스를 해제할 때 해당 보안 그룹을 정리해야 합니다. Linux에서는 `groupdel`을 사용하여 그룹을 삭제합니다.\n\n- `groupdel <group_name>` 명령은 시스템 구성 파일에서 그룹을 영구적으로 삭제하므로 수퍼유저 권한이 필요합니다.",
    "instructions": "그룹을 정리하겠습니다. `sudo groupdel developers`을 실행하여 `developers` 그룹을 삭제합니다.",
    "commandHelp": [
      {
        "cmd": "sudo groupdel developers",
        "desc": "개발자 그룹 삭제"
      }
    ],
    "objectives": [
      {
        "id": "group_deleted",
        "text": "groupdel을 사용하여 \"developers\" 그룹 삭제"
      }
    ],
    "hints": [
      "sudo groupdel 개발자를 사용하여 /etc/group에서 그룹을 제거합니다.",
      "실행해 보세요: sudo groupdel 개발자"
    ]
  },
  "73": {
    "title": "인터페이스 확인(ifconfig)",
    "description": "최신 `ip` 명령 모음이 표준이 되기 전에 Linux 시스템 관리자는 `ifconfig`(인터페이스 구성자)을 사용하여 네트워크 인터페이스를 보고 관리했습니다.\n\n- `ifconfig` 명령은 활성 네트워크 인터페이스, 로컬 IP 구성, 넷마스크 세부 정보 및 MAC 하드웨어 주소를 표시합니다. 일부 최신 배포판에서는 더 이상 사용되지 않지만 레거시 서버에서는 여전히 널리 사용됩니다.",
    "instructions": "클래식 구성 도구를 실행해 보겠습니다. `ifconfig`을 실행하여 활성 네트워크 인터페이스를 검사합니다.",
    "commandHelp": [
      {
        "cmd": "ifconfig",
        "desc": "네트워크 인터페이스 구성 표시"
      }
    ],
    "objectives": [
      {
        "id": "ran_ifconfig",
        "text": "\"ifconfig\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "터미널에서 ifconfig 명령을 실행합니다.",
      "실행해 보세요: ifconfig"
    ]
  },
  "74": {
    "title": "네트워크 연결(nmcli)",
    "description": "최신 Linux 워크스테이션 및 서버에서 네트워크 인터페이스는 NetworkManager라는 시스템 데몬에 의해 관리됩니다. 구성 파일을 수동으로 편집하는 대신 `nmcli`을 사용하여 네트워크 세부 정보를 구성합니다.\n\n- `nmcli`(NetworkManager CLI) 명령을 사용하면 하드웨어 연결, 장치 상태 및 활성 Wi-Fi 네트워크를 검사할 수 있습니다.",
    "instructions": "네트워크 하드웨어 상태를 확인해 보겠습니다. `nmcli device`를 실행하여 연결 및 상태를 쿼리합니다.",
    "commandHelp": [
      {
        "cmd": "nmcli device",
        "desc": "네트워크 인터페이스 장치 및 상태 나열"
      }
    ],
    "objectives": [
      {
        "id": "ran_nmcli_device",
        "text": "\"nmcli device\" 또는 \"nmcli dev\" 명령 실행"
      }
    ],
    "hints": [
      "nmcli 장치를 사용하여 인터페이스 상태 나열.",
      "실행해 보세요: nmcli 장치"
    ]
  },
  "75": {
    "title": "소켓 및 연결 통계(netstat & ss)",
    "description": "데이터베이스나 웹 서버를 설정할 때 서비스가 올바른 포트에서 실행되고 수신 대기 중인지 확인하고 승인되지 않은 연결이 설정되었는지 확인해야 합니다. `netstat` 또는 `ss`을 사용하여 이를 수행합니다.\n\n- `netstat`(네트워크 통계) 명령은 TCP 연결 및 수신 포트를 표시하는 고전적인 도구입니다. 예: `netstat -tuln`은 TCP/UDP 수신 포트를 나열합니다.\n- `ss`(소켓 통계) 명령은 커널 네임스페이스에서 직접 소켓 연결 세부 정보를 표시하는 `netstat`에 대한 현대적이고 빠른 대안입니다.",
    "instructions": "포트를 감사하겠습니다. `netstat -tuln`을 실행하여 수신 TCP/UDP 소켓을 확인한 다음 최신 소켓 통계 명령 `ss -tuln`을 사용하여 확인합니다.",
    "commandHelp": [
      {
        "cmd": "netstat -tuln",
        "desc": "netstat를 사용하여 수신 대기 중인 TCP/UDP 포트 표시"
      },
      {
        "cmd": "ss -tuln",
        "desc": "ss를 사용하여 수신 대기 소켓 표시"
      }
    ],
    "objectives": [
      {
        "id": "ran_netstat",
        "text": "\"netstat -tuln\" 실행"
      },
      {
        "id": "ran_ss",
        "text": "\"ss -tuln\" 실행"
      }
    ],
    "hints": [
      "먼저 netstat -tuln을 실행한 다음 ss -tuln을 실행합니다.",
      "다음을 실행해 보십시오: netstat -tuln 및 ss -tuln"
    ]
  },
  "76": {
    "title": "패킷 경로 추적(traceroute)",
    "description": "웹 페이지 로드에 실패할 때 홈 라우터, 인터넷 서비스 공급자(ISP) 또는 대상 서버에 문제가 있는지 어떻게 식별합니까? Linux에서는 `traceroute`을 사용하여 패킷을 추적합니다.\n\n- `traceroute` 명령은 각 홉에 대한 응답 대기 시간과 함께 패킷이 원격 서버로 이동하는 동안 통과하는 모든 라우터 게이트웨이(홉)를 나열합니다.",
    "instructions": "웹 서버에 대한 경로를 추적해 보겠습니다. 홉을 보려면 `traceroute google.com`를 실행하세요.",
    "commandHelp": [
      {
        "cmd": "traceroute google.com",
        "desc": "추적 네트워크는 google.com으로 이동합니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_traceroute",
        "text": "\"traceroute\" 명령을 실행합니다."
      }
    ],
    "hints": [
      "google.com과 같은 도메인 이름 뒤에 Traceroute를 사용합니다.",
      "실행해 보세요: Traceroute google.com"
    ]
  },
  "77": {
    "title": "Linux 방화벽(ufw 및 iptables)",
    "description": "경비원이 입구에 서서 ID를 확인하고 무단 방문자를 차단하는 안전한 아파트 건물에 살고 있다고 상상해 보십시오. Linux에서는 **방화벽**이 네트워크 포트에 대한 보안 가드 역할을 합니다.\n\n- `ufw`(복잡하지 않은 방화벽) 명령은 방화벽 규칙을 관리하기 위한 사용자 친화적인 인터페이스입니다. `sudo ufw status`을 실행하면 방화벽이 활성화되었는지 여부와 어떤 포트(예: SSH의 경우 포트 22, 웹 서버의 경우 포트 80)가 열려 있는지 표시됩니다.\n- `iptables` 명령은 실제로 패킷을 차단하거나 리디렉션하는 낮은 수준의 기존 Netfilter 도구입니다. `sudo iptables -L`을 실행하면 활성 보안 체인과 패킷 일치 규칙이 나열됩니다.",
    "instructions": "경비원을 검사합시다. `sudo ufw status`를 실행하여 복잡하지 않은 방화벽의 상태를 확인한 다음 `sudo iptables -L`을 실행하여 하위 수준 Netfilter 규칙을 확인합니다.",
    "commandHelp": [
      {
        "cmd": "sudo ufw status",
        "desc": "ufw 방화벽 규칙 표시"
      },
      {
        "cmd": "sudo iptables -L",
        "desc": "활성 iptables 패킷 필터링 규칙 나열"
      }
    ],
    "objectives": [
      {
        "id": "checked_ufw",
        "text": "sudo와 함께 \"ufw status\" 명령 실행"
      },
      {
        "id": "checked_iptables",
        "text": "sudo와 함께 \"iptables -L\" 명령 실행"
      }
    ],
    "hints": [
      "복잡하지 않은 방화벽을 검사하려면 sudo ufw status를 사용합니다.",
      "Netfilter 규칙을 확인하려면 sudo iptables -L을 사용하십시오.",
      "실행해 보세요: sudo ufw status, 그런 다음 sudo iptables -L"
    ]
  },
  "78": {
    "title": "처리 친절함(nice & renice)",
    "description": "바쁜 사무실에서는 우선순위가 낮은 일부 작업(예: 영수증 제출)이 기다릴 수 있지만 우선순위가 높은 요청은 즉시 처리해야 합니다. Linux는 -20(가장 높은 우선순위)부터 19(가장 낮은 우선순위)까지의 **niceness** 값을 사용하여 프로세스 우선순위를 관리합니다.\n\n- `nice` 명령은 사용자 정의된 우선순위로 프로세스를 시작합니다. 예: `nice -n 10 sleep 5`은 폴라이트 우선순위 10으로 절전 명령을 시작합니다.\n- `renice` 명령은 이미 실행 중인 프로세스의 예약 우선순위를 변경합니다. 예를 들어 `sudo renice +5 9999`은 프로세스 9999의 우선순위를 낮춥니다.",
    "instructions": "우선순위를 조정해 보겠습니다. `nice -n 10 sleep 5`를 사용하여 우선순위가 낮은 명령을 실행합니다. 그런 다음 `sudo renice +5 9999`을 실행하여 실행 중인 불량 프로세스 9999의 우선순위를 낮춥니다.",
    "commandHelp": [
      {
        "cmd": "nice -n 10 sleep 5",
        "desc": "niceness 값 10으로 절전 시작"
      },
      {
        "cmd": "sudo renice +5 9999",
        "desc": "PID 9999의 낮은 우선 순위"
      }
    ],
    "objectives": [
      {
        "id": "used_nice",
        "text": "-n 10으로 \"nice\" 명령 실행"
      },
      {
        "id": "used_renice",
        "text": "sudo로 \"renice\" 명령 실행"
      }
    ],
    "hints": [
      "nice -n 10 sleep 5를 사용하여 nice 프로세스를 시작합니다.",
      "sudo renice +5 9999를 사용하여 활성 PID 우선순위를 변경합니다.",
      "실행해 보세요: nice -n 10 sleep 5 및 sudo renice +5 9999"
    ]
  },
  "79": {
    "title": "백그라운드 작업 재개(bg)",
    "description": "우리는 이미 `&`을 사용하여 백그라운드에서 작업을 시작하고 `fg`을 사용하여 다시 가져오는 방법을 살펴보았습니다. 하지만 `&` 없이 명령을 시작했거나 `Ctrl+Z`을 사용하여 일시 중지했다면 어떻게 될까요? `bg`를 사용하여 백그라운드에서 재개할 수 있습니다!\n\n- `bg` 명령은 일시 중지된 작업을 재개하여 터미널 프롬프트를 차단하지 않고 백그라운드에서 실행할 수 있도록 합니다.",
    "instructions": "백그라운드 작업을 실행해 보겠습니다. 백그라운드에서 `sleep 200 &`을 시작하고 `jobs`을 실행하여 활성 작업을 나열한 다음 `bg`을 실행하여 실행을 재개하는지 확인하세요.",
    "commandHelp": [
      {
        "cmd": "sleep 200 &",
        "desc": "백그라운드 프로세스 시작"
      },
      {
        "cmd": "jobs",
        "desc": "활성 백그라운드 작업 나열"
      },
      {
        "cmd": "bg",
        "desc": "백그라운드 작업 재개"
      }
    ],
    "objectives": [
      {
        "id": "ran_sleep_bg",
        "text": "&를 사용하여 절전 명령 시작"
      },
      {
        "id": "ran_jobs",
        "text": "\"jobs\" 명령 실행"
      },
      {
        "id": "ran_bg",
        "text": "\"bg\" 명령 실행"
      }
    ],
    "hints": [
      "절전 200을 실행한 다음 작업을 실행하고 마지막으로 bg를 실행합니다."
    ]
  },
  "80": {
    "title": "I/O 및 CPU 통계(iostat)",
    "description": "데이터베이스 또는 웹 애플리케이션이 느리게 실행되는 경우 문제가 CPU 병목 현상인지 아니면 느린 하드 드라이브인지 어떻게 판단합니까? Linux에서는 `iostat`을 사용하여 시스템 출력/입력 성능 메트릭을 모니터링합니다.\n\n- `iostat` 명령은 CPU 사용량 및 활성 장치 읽기/쓰기 처리량에 대한 보고서 통계를 표시하여 디스크 정체를 식별하는 데 도움을 줍니다.",
    "instructions": "성능 로그를 확인해 보겠습니다. I/O 통계를 인쇄하려면 `iostat` 명령을 실행하십시오.",
    "commandHelp": [
      {
        "cmd": "iostat",
        "desc": "입/출력 통계 표시"
      }
    ],
    "objectives": [
      {
        "id": "ran_iostat",
        "text": "\"iostat\" 명령 실행"
      }
    ],
    "hints": [
      "터미널에 iostat를 입력하고 Enter를 누릅니다.",
      "실행해 보세요: iostat"
    ]
  },
  "81": {
    "title": "패키지 검색(apt search)",
    "description": "Linux에 소프트웨어를 설치하기 전에 저장소에서 어떤 패키지를 사용할 수 있는지 어떻게 알 수 있습니까? Linux에서는 `apt search`을 사용하여 키워드로 소프트웨어 카탈로그를 쿼리합니다.\n\n- `apt search <keyword>` 명령은 저장소 설명을 검색하고 해당 버전과 함께 일치하는 소프트웨어 패키지를 나열합니다.\n- `apt install`와 달리 패키지 저장소 검색은 로컬 카탈로그 인덱스 파일만 읽으며 수퍼유저(`sudo`) 권한이 필요하지 **않습니다**.",
    "instructions": "패키지 저장소를 검색해 봅시다! 소프트웨어 카탈로그에서 디렉터리 시각화와 관련된 패키지를 찾으려면 `apt search tree`를 실행하세요.",
    "commandHelp": [
      {
        "cmd": "apt search tree",
        "desc": "\"tree\"와 일치하는 패키지에 대한 패키지 저장소를 검색합니다."
      }
    ],
    "objectives": [
      {
        "id": "ran_apt_search",
        "text": "\"apt search tree\"를 실행하여 패키지 카탈로그를 쿼리합니다."
      }
    ],
    "hints": [
      "조회하려는 패키지의 이름이나 키워드 뒤에 apt search 명령을 사용합니다.",
      "적절한 검색 트리를 실행하여 저장소에서 사용 가능한 패키지를 확인하세요.",
      "실행해 보세요: 적절한 검색 트리"
    ]
  },
  "82": {
    "title": "패키지 제거(apt purge)",
    "description": "Linux에서 소프트웨어를 제거할 때 표준 `apt remove`은 응용 프로그램 바이너리를 제거하지만 나중에 다시 설치할 경우를 대비해 시스템 구성 파일을 남겨 둡니다. 소프트웨어 패키지를 완전히 제거하고 관련된 모든 구성 파일을 지우려면 `apt purge`(또는 `apt remove --purge`)을 사용합니다.\n\n- `sudo apt purge <package>` 명령은 애플리케이션을 제거하고 나머지 구성 파일을 모두 지웁니다.\n- 제거는 시스템 전체 폴더 및 구성 파일을 수정하므로 수퍼유저(`sudo`) 권한이 필요합니다.",
    "instructions": "패키지와 해당 구성 파일을 완전히 제거해 보겠습니다. `sudo apt purge tree`을 실행하여 시스템에서 `tree` 프로그램을 제거합니다.",
    "commandHelp": [
      {
        "cmd": "sudo apt purge tree",
        "desc": "패키지를 제거하고 해당 구성 파일을 지웁니다."
      }
    ],
    "objectives": [
      {
        "id": "purged_tree",
        "text": "\"sudo apt purge tree\"를 사용하여 패키지 \"트리\"를 제거합니다."
      }
    ],
    "hints": [
      "구성 파일과 함께 패키지를 완전히 제거하려면 수퍼유저 권한으로 apt purge를 사용합니다.",
      "sudo apt purge tree를 실행하여 트리 패키지를 제거합니다.",
      "실행해 보세요: sudo apt purge tree"
    ]
  },
  "83": {
    "title": "Linux 디렉터리 구조 및 FHS",
    "description": "모든 Linux 시스템은 루트 디렉터리 `/`에서 시작하는 표준 파일 시스템 계층 구조를 따릅니다. `C:` 또는 `D:`와 같은 드라이브 문자를 사용하는 Windows와 달리 Linux는 모든 파일과 저장소를 `/` 아래에 통합합니다.\n\n모든 Linux 사용자가 알아야 할 주요 시스템 디렉터리는 다음과 같습니다.\n- `/`(루트): 전체 시스템의 최상위 상위 폴더입니다.\n- `/etc`: 시스템 구성을 보유합니다(예: `/etc/hosts`, `/etc/passwd`).\n- `/var`: 시간이 지남에 따라 변경되는 변수 데이터(로그, 스풀, `/var/log`과 같은 캐시)를 보유합니다.\n- `/home`: 사용자 개인 폴더(예: `/home/learner`).\n- `/tmp`: 임시 파일을 위한 임시 저장 영역입니다.\n- `/usr`: 사용자 유틸리티, 애플리케이션 및 시스템 라이브러리.",
    "instructions": "시스템 레이아웃을 살펴보겠습니다! 먼저 `cd /`을 실행하여 루트 디렉터리로 이동합니다. 그런 다음 `ls /etc`을 실행하여 `/etc`에 저장된 시스템 구성 파일을 확인하세요.",
    "commandHelp": [
      {
        "cmd": "cd /",
        "desc": "루트 디렉터리로 이동"
      },
      {
        "cmd": "ls /etc",
        "desc": "/etc의 구성 파일 나열"
      }
    ],
    "objectives": [
      {
        "id": "visited_root",
        "text": "루트 디렉터리(/)로 이동"
      },
      {
        "id": "listed_etc",
        "text": "/etc 디렉터리의 내용 나열"
      }
    ],
    "hints": [
      "루트 디렉터리로 이동하려면 'cd /'를 사용합니다.",
      "/etc 내의 구성 파일을 보려면 'ls /etc'를 사용하십시오.",
      "다음을 실행해 보십시오: cd / 그리고 다음: ls /etc"
    ]
  }
};
