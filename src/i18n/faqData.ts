import type { SupportedLanguage } from "./languages";

export interface FAQItem {
  q: string;
  a: string;
}

export const localizedFaqs: Record<SupportedLanguage, FAQItem[]> = {
  en: [
    {
      q: "How can I do free online Linux terminal practice without installing anything?",
      a: "You can do free online Linux terminal practice directly on BashQuest. Our interactive online Linux terminal runs completely inside your browser with a virtual simulated filesystem, so you can practice Linux terminal commands without dual-booting, installing Linux, or configuring virtual machines.",
    },
    {
      q: "What makes BashQuest one of the best Linux learning resources and websites?",
      a: "BashQuest stands out among Linux learning websites because it is an interactive bash learning game rather than passive text or video. With 60+ progressive quests, instant command validation, XP tracking, and visual directory exploration, students achieve practical Linux terminal learning in a fun, frictionless environment.",
    },
    {
      q: "What are the core terminal learning objectives covered in this bash learning game?",
      a: "Every quest in BashQuest is built around concrete terminal learning objectives: mastering filesystem navigation, creating and modifying files, managing user permissions (chmod/chown), searching with grep and regex, chaining commands with pipes, running processes, editing files with GNU Nano, and writing automated bash scripts.",
    },
    {
      q: "What Linux terminal commands can I practice in this online Linux terminal?",
      a: "You can practice all essential Linux terminal commands including pwd, cd, ls, mkdir, touch, cat, echo, cp, mv, rm, chmod, chown, grep, awk, sed, find, ps, top, kill, systemctl, curl, ping, ip, and interactive GNU Nano text editing, as well as pipes and redirection.",
    },
    {
      q: "Is there a safe online Linux terminal simulator for beginners?",
      a: "Yes. BashQuest is a simulated sandbox running entirely in client-side JavaScript. It behaves like a real Linux shell, but because it is a simulation, there is no risk of running destructive commands or damaging your computer.",
    },
    {
      q: "Does this online Bash terminal practice save my progress?",
      a: "Yes. Your progress, XP, collected badges, and simulated directory state are saved locally on your device inside your browser's local storage. Your data remains completely private on your system.",
    },
    {
      q: "Is BashQuest good for learning Linux command line for DevOps?",
      a: "Absolutely. BashQuest covers essential DevOps-relevant topics including filesystem navigation, process management (ps, top, kill), service management (systemctl), networking basics (ping, curl, ip), log analysis with grep/awk/sed, and shell scripting.",
    },
    {
      q: "Can I practice Bash scripting for coding interviews here?",
      a: "Yes. BashQuest includes quests on shell scripting fundamentals, text processing with grep, awk, sed, and cut, piping and redirection, file manipulation, and command chaining — all common topics in Linux-focused technical interviews.",
    },
  ],

  es: [
    {
      q: "¿Cómo puedo practicar en una terminal Linux en línea gratis sin instalar nada?",
      a: "Puedes realizar prácticas gratuitas de la terminal Linux directamente en BashQuest. Nuestra terminal interactiva se ejecuta completamente en tu navegador con un sistema de archivos simulado, permitiéndote practicar comandos sin necesidad de instalar Linux ni configurar máquinas virtuales.",
    },
    {
      q: "¿Qué hace que BashQuest sea una de las mejores plataformas para aprender Linux?",
      a: "BashQuest se destaca por ser un juego interactivo de aprendizaje en lugar de tutoriales pasivos en video. Con más de 60 misiones, validación instantánea de comandos y sistema de XP, los estudiantes aprenden comandos de terminal de forma entretenida y efectiva.",
    },
    {
      q: "¿Cuáles son los principales objetivos de aprendizaje cubiertos en este juego de Bash?",
      a: "Cada misión está diseñada con objetivos claros: dominar la navegación del sistema de archivos, crear y modificar archivos, gestionar permisos (chmod/chown), realizar búsquedas con grep y regex, encadenar comandos con pipes y crear scripts en Bash.",
    },
    {
      q: "¿Qué comandos de Linux puedo practicar en esta terminal en línea?",
      a: "Puedes practicar todos los comandos esenciales de Linux, incluidos pwd, cd, ls, mkdir, touch, cat, echo, cp, mv, rm, chmod, chown, grep, awk, sed, find, ps, top, kill, systemctl, curl, ping, ip y el editor de texto interactivo GNU Nano.",
    },
    {
      q: "¿Es seguro este simulador de terminal Linux para principiantes?",
      a: "Sí. BashQuest es un entorno seguro que se ejecuta 100% en el navegador con JavaScript. No existe ningún riesgo de dañar tu sistema o ejecutar comandos destructivos en tu equipo real.",
    },
    {
      q: "¿Se guarda mi progreso al practicar en esta terminal en línea?",
      a: "Sí. Todo tu progreso, puntos de XP y logros se guardan localmente en el almacenamiento de tu navegador (localStorage), asegurando total privacidad de tus datos.",
    },
    {
      q: "¿Es útil BashQuest para aprender la línea de comandos de Linux para DevOps?",
      a: "Totalmente. BashQuest cubre temas esenciales para DevOps: administración de procesos (ps, top, kill), control de servicios (systemctl), redes básicas (curl, ping, ip), análisis de logs con grep/awk/sed y scripting en shell.",
    },
    {
      q: "¿Puedo practicar scripting en Bash para entrevistas de trabajo técnicas?",
      a: "Sí. BashQuest incluye desafíos de fundamentos de scripting en shell, procesamiento de texto con pipelines y manipulación de archivos requeridos comúnmente en entrevistas técnicas.",
    },
  ],

  ja: [
    {
      q: "何もインストールせずに無料でオンラインLinuxターミナルの練習をするには？",
      a: "BashQuestを利用すれば、ブラウザ上で直接Linuxターミナルの練習が可能です。仮想ファイルシステムを備えたシミュレータにより、仮想マシンの構築やLinuxのインストールなしで安全に学べます。",
    },
    {
      q: "BashQuestがおすすめのLinux学習プラットフォームである理由は？",
      a: "動画を見るだけの受動的な学習とは異なり、60以上の実践クエスト、コマンドの即時判定、XP獲得システムを通じて、ゲーム感覚で手を動かしながら本物のコマンドラインスキルを習得できる点です。",
    },
    {
      q: "このBash学習ゲームで学べる主な目標は何ですか？",
      a: "ファイルシステムの移動、ファイルの作成・編集、パーミッション管理（chmod/chown）、grepや正規表現による検索、パイプライン連携、プロセスの監視、GNU Nanoエディタの操作、Bashスクリプト作成などです。",
    },
    {
      q: "どのようなLinuxコマンドを練習できますか？",
      a: "pwd, cd, ls, mkdir, touch, cat, echo, cp, mv, rm, chmod, chown, grep, awk, sed, find, ps, top, kill, systemctl, curl, ping, ipなどの必須コマンドやGNU Nanoエディタを練習できます。",
    },
    {
      q: "初心者でも安全に操作できるシミュレータですか？",
      a: "はい。BashQuestはブラウザ内のJavaScriptで完結する安全なサンドボックスです。実際のPC環境を破損するリスクは一切ありません。",
    },
    {
      q: "学習の進捗状況は保存されますか？",
      a: "はい。獲得したXP、クリアしたクエスト、実績バッジはお使いのブラウザのローカルストレージに自動保存され、プライバシーも保護されます。",
    },
    {
      q: "DevOpsエンジニアを目指す人にも適していますか？",
      a: "非常に適しています。プロセス管理、systemctlによるサービス管理、ネットワーク診断（ping, curl）、grep/awk/sedを用いたログ解析など、実務で必須のスキルを網羅しています。",
    },
    {
      q: "コーディング面接や認定試験対策としてBashの練習ができますか？",
      a: "はい。シェルスクリプトの基礎、パイプライン処理、テキスト加工など、エンジニア採用面接や資格試験で頻出のコマンド操作を効率的に反復練習できます。",
    },
  ],

  fr: [
    {
      q: "Comment s'entraîner gratuitement au terminal Linux en ligne sans rien installer ?",
      a: "Vous pouvez vous entraîner directement sur BashQuest. Notre terminal interactif s'exécute dans votre navigateur avec un système de fichiers virtuel, sans nécessiter de machine virtuelle ni de double amorçage.",
    },
    {
      q: "Qu'est-ce qui fait de BashQuest l'un des meilleurs sites pour apprendre Linux ?",
      a: "BashQuest combine apprentissage pratique et ludique. Avec plus de 60 quêtes guidées, la validation immédiate des commandes et un système de progression XP, vous apprenez activement en tapant les commandes.",
    },
    {
      q: "Quels sont les objectifs pédagogiques clés de ce jeu d'apprentissage Bash ?",
      a: "Navigation dans le système de fichiers, création et manipulation de fichiers, gestion des permissions (chmod/chown), recherche textuelle (grep, regex), chaînage par pipes, gestion de processus et scripts Bash.",
    },
    {
      q: "Quelles commandes Linux peut-on pratiquer sur ce terminal en ligne ?",
      a: "Toutes les commandes fondamentales : pwd, cd, ls, mkdir, touch, cat, echo, cp, mv, rm, chmod, chown, grep, awk, sed, find, ps, top, kill, systemctl, curl, ping, ip et l'éditeur GNU Nano.",
    },
    {
      q: "Est-ce un environnement sûr pour les débutants ?",
      a: "Oui. BashQuest fonctionne entièrement côté client dans votre navigateur. Il n'y a aucun risque d'endommager votre ordinateur ou d'exécuter des commandes destructrices.",
    },
    {
      q: "Ma progression est-elle enregistrée ?",
      a: "Oui. Votre progression, vos points XP et vos badges sont enregistrés localement dans votre navigateur (localStorage), garantissant la confidentialité absolue de vos données.",
    },
    {
      q: "BashQuest est-il adapté pour se préparer aux métiers du DevOps ?",
      a: "Absolument. Les quêtes couvrent la gestion des processus, les services systemctl, les outils réseau (curl, ping) et l'analyse de logs avec grep/awk/sed indispensables en DevOps.",
    },
    {
      q: "Peut-on s'entraîner aux entretiens techniques et questions Bash ?",
      a: "Oui. BashQuest propose des exercices sur les pipelines, le traitement de texte et les scripts shell fréquemment demandés lors des entretiens d'embauche de développeurs et administrateurs système.",
    },
  ],

  de: [
    {
      q: "Wie kann ich kostenlos online Linux-Befehle üben, ohne etwas zu installieren?",
      a: "Sie können Linux-Terminal-Befehle direkt auf BashQuest üben. Das interaktive Terminal läuft vollständig im Webbrowser mit einem simulierten Dateisystem, ganz ohne virtuelle Maschinen oder Dual-Boot.",
    },
    {
      q: "Was macht BashQuest zu einer der besten Plattformen zum Erlernen von Linux?",
      a: "BashQuest setzt auf aktives Lernen statt passiver Videos. Mit über 60 Quests, sofortiger Befehlsüberprüfung und XP-Fortschrittssystem erlernen Sie die Linux-Kommandozeile spielerisch und praxisnah.",
    },
    {
      q: "Welche Kernkompetenzen werden in diesem Bash-Lernspiel vermittelt?",
      a: "Dateisystem-Navigation, Erstellen und Bearbeiten von Dateien, Rechteverwaltung (chmod/chown), Textsuche mit grep und regulären Ausdrücken, Pipelines, Prozessverwaltung und Bash-Shell-Scripting.",
    },
    {
      q: "Welche Linux-Befehle können online geübt werden?",
      a: "Alle wesentlichen Befehle wie pwd, cd, ls, mkdir, touch, cat, echo, cp, mv, rm, chmod, chown, grep, awk, sed, find, ps, top, kill, systemctl, curl, ping, ip sowie der Editor GNU Nano.",
    },
    {
      q: "Ist der Online-Terminal-Simulator für Anfänger sicher?",
      a: "Ja. BashQuest ist eine reine Browser-Sandbox in JavaScript. Es besteht keinerlei Gefahr, Ihr Betriebssystem oder Ihren Rechner durch falsche Eingaben zu beschädigen.",
    },
    {
      q: "Wird mein Lernfortschritt gespeichert?",
      a: "Ja. Sämtliche Fortschritte, XP-Punkte und Auszeichnungen werden lokal im Speicher Ihres Browsers gesichert – vollkommen privat und ohne Tracking.",
    },
    {
      q: "Eignet sich BashQuest für angehende DevOps- und Cloud-Entwickler?",
      a: "Sehr gut. Die Module behandeln zentrale DevOps-Themen wie Prozess- und Servicesteuerung (systemctl), Netzwerkanalyse (curl, ping, ip) und Log-Auswertung mit grep/awk/sed.",
    },
    {
      q: "Kann ich mich hiermit auf technische Bewerbungsgespräche vorbereiten?",
      a: "Ja. Die Quests zu Shell-Scripting, Textmanipulation und Pipeline-Befehlsketten spiegeln typische Aufgaben aus IT-Vorstellungsgesprächen wider.",
    },
  ],

  pt: [
    {
      q: "Como posso praticar comandos do terminal Linux online grátis sem instalar nada?",
      a: "Você pode praticar comandos Linux diretamente no BashQuest. Nosso terminal interativo roda no seu navegador com um sistema de arquivos virtual simulado, sem exigir máquinas virtuais ou dual-boot.",
    },
    {
      q: "O que torna o BashQuest uma das melhores plataformas para aprender Linux?",
      a: "Ao invés de videoaulas passivas, o BashQuest é um jogo de aprendizado interativo com mais de 60 missões, validação imediata de comandos e sistema de XP que ensina na prática.",
    },
    {
      q: "Quais são os principais objetivos de aprendizado deste jogo de Bash?",
      a: "Navegação no sistema de arquivos, criação e edição de arquivos, permissões (chmod/chown), busca com grep e regex, encadeamento de comandos com pipes, processos e scripts bash.",
    },
    {
      q: "Quais comandos do terminal Linux posso praticar?",
      a: "Comandos essenciais como pwd, cd, ls, mkdir, touch, cat, echo, cp, mv, rm, chmod, chown, grep, awk, sed, find, ps, top, kill, systemctl, curl, ping, ip e o editor GNU Nano.",
    },
    {
      q: "O simulador de terminal Linux é seguro para iniciantes?",
      a: "Sim. O BashQuest é um ambiente simulado em JavaScript que roda exclusivamente no navegador, sem risco de danificar seu computador.",
    },
    {
      q: "Meu progresso fica salvo ao praticar online?",
      a: "Sim. Seu progresso, XP e conquistas são salvos localmente no armazenamento do navegador (localStorage), mantendo seus dados protegidos e privados.",
    },
    {
      q: "O BashQuest é indicado para quem estuda Linux para DevOps?",
      a: "Com certeza. O conteúdo inclui gerenciamento de processos, controle de serviços com systemctl, rede (curl, ping, ip) e análise de logs com grep/awk/sed indispensáveis para DevOps.",
    },
    {
      q: "Posso treinar scripts em Bash para entrevistas de emprego?",
      a: "Sim. O BashQuest traz exercícios práticos sobre manipulação de texto, pipes e lógica de scripts frequentemente cobrados em entrevistas técnicas de TI.",
    },
  ],

  ko: [
    {
      q: "설치 없이 무료로 온라인에서 리눅스 터미널을 연습하려면 어떻게 하나요?",
      a: "BashQuest에서 브라우저를 통해 바로 리눅스 터미널을 무료 실습할 수 있습니다. 가상 파일 시스템이 내장되어 있어 가상 머신 설정이나 리눅스 설치 없이 안전하게 명령어를 연습할 수 있습니다.",
    },
    {
      q: "BashQuest가 리눅스 학습에 가장 좋은 사이트인 이유는 무엇인가요?",
      a: "지루한 동영상 강의와 달리 60개 이상의 단계별 실습 퀘스트, 명령어 즉시 채점, XP 보상 시스템을 통해 직접 타이핑하며 재미있게 실무 감각을 익힐 수 있기 때문입니다.",
    },
    {
      q: "이 Bash 학습 게임에서 다루는 핵심 학습 목표는 무엇인가요?",
      a: "파일 시스템 탐색, 파일 생성 및 편집, 권한 관리(chmod/chown), grep 및 정규표현식 검색, 파이프라인 연계, 프로세스 관리, GNU Nano 에디터 사용법, 쉘 스크립트 작성 등입니다.",
    },
    {
      q: "어떤 리눅스 터미널 명령어를 연습할 수 있나요?",
      a: "pwd, cd, ls, mkdir, touch, cat, echo, cp, mv, rm, chmod, chown, grep, awk, sed, find, ps, top, kill, systemctl, curl, ping, ip 및 대화형 GNU Nano 텍스트 에디터를 실습할 수 있습니다.",
    },
    {
      q: "초보자가 사용하기에 안전한 리눅스 터미널 시뮬레이터인가요?",
      a: "네. BashQuest는 브라우저 내부의 자바스크립트로 실행되는 안전한 가상 샌드박스이므로 실제 컴퓨터에 어떠한 영향도 주지 않습니다.",
    },
    {
      q: "온라인 연습 중 진행 상황이 저장되나요?",
      a: "네. 획득한 XP와 완료한 퀘스트 내역은 브라우저의 로컬 스토리지에 자동으로 안전하게 보관됩니다.",
    },
    {
      q: "데브옵스(DevOps) 및 클라우드 학습자에게도 유용한가요?",
      a: "매우 유용합니다. 프로세스 관리, systemctl 서비스 제어, 네트워크 명령어(curl, ping), grep/awk/sed를 활용한 로그 분석 등 현업 필수 기술을 제공합니다.",
    },
    {
      q: "기술 면접이나 코딩 테스트 대비로 Bash 스크립트를 연습할 수 있나요?",
      a: "네. 파이프라인 데이터 가공, 텍스트 필터링, 자동화 쉘 스크립트 등 개발자 기술 면접에 자주 출제되는 핵심 주제들을 실전 연습할 수 있습니다.",
    },
  ],

  it: [
    {
      q: "Come posso fare pratica con il terminale Linux online gratis senza installare nulla?",
      a: "Puoi esercitarti direttamente su BashQuest. Il nostro terminale interattivo viene eseguito nel tuo browser con un filesystem virtuale, senza dover installare macchine virtuali o configurare partizioni.",
    },
    {
      q: "Cosa rende BashQuest una delle migliori piattaforme per imparare Linux?",
      a: "BashQuest unisce pratica diretta e gamification: oltre 60 missioni progressive, verifica istantanea dei comandi e sistema a punti XP per imparare attivamente digitando la riga di comando.",
    },
    {
      q: "Quali sono i principali obiettivi didattici di questo gioco educativo su Bash?",
      a: "Navigazione del filesystem, gestione di file e cartelle, permessi (chmod/chown), ricerca con grep e regex, pipe e redirezione dei comandi, gestione dei processi e scripting in Bash.",
    },
    {
      q: "Quali comandi Linux posso provare in questo terminale online?",
      a: "Tutti i comandi essenziali: pwd, cd, ls, mkdir, touch, cat, echo, cp, mv, rm, chmod, chown, grep, awk, sed, find, ps, top, kill, systemctl, curl, ping, ip e l'editor di testo GNU Nano.",
    },
    {
      q: "Questo simulatore di terminale Linux è sicuro per i principianti?",
      a: "Sì. BashQuest è un ambiente virtuale JavaScript isolato nel browser. Non c'è alcun rischio di danneggiare il tuo sistema operativo o il tuo computer.",
    },
    {
      q: "I progressi fatti durante la pratica online vengono salvati?",
      a: "Sì. Punti XP, missioni completate e badge vengono salvati localmente nella memoria del tuo browser (localStorage) nel pieno rispetto della privacy.",
    },
    {
      q: "BashQuest è utile per chi vuole imparare Linux in ottica DevOps?",
      a: "Certamente. I moduli coprono argomenti fondamentali per DevOps come la gestione dei processi, servizi systemctl, strumenti di rete (curl, ping, ip) e analisi dei log con grep/awk/sed.",
    },
    {
      q: "Posso prepararmi a colloqui tecnici ed esami con BashQuest?",
      a: "Sì. I percorsi su pipeline, manipolazione del testo e scripting shell includono le domande e gli esercizi più frequenti nei colloqui per sviluppatori e sistemisti.",
    },
  ],
};
