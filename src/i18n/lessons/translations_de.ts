import type { LessonTranslation } from "./types";

export const translations_de: Record<number, LessonTranslation> = {
  "1": {
    "title": "Wer bin ich und wo bin ich?",
    "description": "Stellen Sie sich vor, Sie betreten eine riesige, dunkle Bibliothek mit Millionen von Büchern, haben aber keine Karte und können sich nicht einmal an Ihr eigenes Namensschild erinnern. Bevor Sie etwas nachschlagen können, müssen Sie wissen, wer Sie sind und wo Sie stehen. In der Linux-Shell beginnen wir mit genau den gleichen Fragen!\n\n- Der Befehl `whoami` gibt den Benutzernamen aus, unter dem Sie derzeit angemeldet sind.\n- Der Befehl `pwd` (Arbeitsverzeichnis drucken) funktioniert wie ein GPS und zeigt Ihnen den genauen Ordnerpfad an, in dem Sie sich gerade befinden.",
    "instructions": "Finden wir uns zurecht! Führen Sie zunächst `whoami` aus, um Ihren aktiven Benutzernamen anzuzeigen, und führen Sie dann `pwd` aus, um Ihren aktuellen Ordnerspeicherort im Dateisystem auszugeben.",
    "commandHelp": [
      {
        "cmd": "whoami",
        "desc": "Gibt den aktiven Benutzernamen aus."
      },
      {
        "cmd": "pwd",
        "desc": "Gibt das aktuelle Arbeitsverzeichnis aus."
      }
    ],
    "objectives": [
      {
        "id": "ran_whoami",
        "text": "Führen Sie den Befehl „whoami“ aus."
      },
      {
        "id": "ran_pwd",
        "text": "Führen Sie den Befehl „pwd“ aus."
      }
    ],
    "hints": [
      "Überprüfen Sie, welche Befehle Sie ausführen müssen, um Ihren Benutzer und Pfad zu identifizieren.",
      "Der Befehl „whoami“ zeigt Ihren Benutzernamen und „pwd“ Ihren aktuellen Pfad.",
      "Versuchen Sie Folgendes: whoami und dann pwd"
    ]
  },
  "2": {
    "title": "Navigieren und Auflisten von Dateien",
    "description": "Nachdem Sie nun wissen, wo Sie sich befinden, wie können Sie sich umschauen und in einen anderen Raum in dieser digitalen Bibliothek wechseln? Unter Linux machen wir das mit zwei einfachen Befehlen:\n\n- `ls`: Es ist, als würde man das Licht in einem Raum einschalten, um alle darin befindlichen Dateien und Ordner zu sehen.\n- `cd <path>`: Abkürzung für „Verzeichnis wechseln“, damit können Sie durch eine Tür in einen anderen Ordner gehen.\n\nUm anzugeben, wohin Sie gehen möchten, können Sie **absolute** Pfade (beginnend mit dem Stammverzeichnis `/` des Systems, wie `/var/log`) oder **relative** Pfade (basierend darauf, wo Sie sich gerade befinden, wie mit `..`, um zurück in den übergeordneten Ordner zu gelangen) verwenden.",
    "instructions": "Lassen Sie uns erkunden. Gehen Sie in den Ordner `/var/log`, indem Sie `cd /var/log` ausführen, und führen Sie dann den Befehl `ls` aus, um die darin gespeicherten Protokolldateien anzuzeigen.",
    "commandHelp": [
      {
        "cmd": "ls",
        "desc": "Listet Dateien im aktuellen Verzeichnis auf."
      },
      {
        "cmd": "cd /var/log",
        "desc": "Ändern Sie das Verzeichnis in /var/log."
      }
    ],
    "objectives": [
      {
        "id": "in_var_log",
        "text": "Ändern Sie das Verzeichnis in /var/log."
      },
      {
        "id": "ran_ls",
        "text": "Führen Sie den Befehl „ls“ in /var/log aus."
      }
    ],
    "hints": [
      "Überlegen Sie, wie Sie in einem bestimmten Verzeichnis navigieren und Dateien auflisten.",
      "Wechseln Sie mit cd in das Verzeichnis /var/log und verwenden Sie dann ls.",
      "Versuchen Sie Folgendes auszuführen: cd /var/log und dann ls"
    ]
  },
  "3": {
    "title": "Erstellen von Verzeichnissen",
    "description": "Stellen Sie sich vor, auf Ihrem Schreibtisch stapeln sich lose Papiere und Sie benötigen physische Ordner, um für Ordnung zu sorgen. Unter Linux organisieren wir Dateien, indem wir mit dem Befehl `mkdir` (Verzeichnis erstellen) Ordner (Verzeichnisse) erstellen.\n\nWenn Sie `mkdir code` ausführen, wird genau dort, wo Sie sich befinden, ein brandneuer Ordner mit dem Namen „code“ erstellt. Sie können Ordner an einer beliebigen Stelle im Dateisystem erstellen, indem Sie `mkdir` einen relativen oder absoluten Pfad zuweisen.",
    "instructions": "Lassen Sie uns einen Arbeitsbereich erstellen. Gehen Sie zurück zu Ihrem Home-Verzeichnis, indem Sie `cd ~` (oder `cd /home/learner`) ausführen, und erstellen Sie darin einen neuen Ordner mit dem Namen `projects`.",
    "commandHelp": [
      {
        "cmd": "cd ~",
        "desc": "Zurück zum Home-Verzeichnis"
      },
      {
        "cmd": "mkdir projects",
        "desc": "Projektordner erstellen"
      }
    ],
    "objectives": [
      {
        "id": "in_home",
        "text": "Befinden Sie sich in Ihrem Home-Ordner (/home/learner)"
      },
      {
        "id": "used_mkdir",
        "text": "Verwenden Sie den Befehl „mkdir“"
      },
      {
        "id": "dir_exists",
        "text": "Erstellen Sie ein Verzeichnis mit dem Namen „projects“"
      }
    ],
    "hints": [
      "Stellen Sie sicher, dass Sie sich zuerst im richtigen Startverzeichnis befinden.",
      "Gehen Sie zu Ihrem Home-Verzeichnis (~ oder /home/learner) und verwenden Sie den Befehl mkdir.",
      "Versuchen Sie Folgendes: cd ~ gefolgt von mkdir-Projekten"
    ]
  },
  "4": {
    "title": "Verschachtelte Verzeichnisse und Optionen",
    "description": "Stellen Sie sich vor, Sie versuchen, eine Reihe von Nistpuppen zu bauen, aber Sie müssen die äußersten Puppen bauen, bevor Sie die winzige Puppe im Inneren bauen können. Standardmäßig ist `mkdir` so: Es weigert sich, einen Ordner tief in Ordnern zu erstellen, die noch nicht vorhanden sind. Um den Aufwand, Ordner einzeln zu erstellen, zu vermeiden, verwenden wir einen Schalter:\n\n– Die Option `-p` (oder `--parents`) weist `mkdir` an, auf dem Weg zum endgültigen Ordner automatisch alle fehlenden übergeordneten Ordner zu erstellen. Beispielsweise erstellt `mkdir -p workspace/src/utils` `workspace`, `workspace/src` und `workspace/src/utils` in einem einzigen Befehl.\n\n**Warum das wichtig ist**: Wenn Sie `mkdir workspace/src/utils` ohne `-p` ausführen und `workspace` und `workspace/src` noch nicht vorhanden sind, erhalten Sie: `mkdir: cannot create directory 'workspace/src/utils': No such file or directory`. Das Flag `-p` behebt dieses Problem, indem alle fehlenden übergeordneten Ordner automatisch erstellt werden.",
    "instructions": "Lassen Sie uns eine tiefe Ordnerstruktur erstellen. Erstellen Sie mit `mkdir -p workspace/src/utils` einen verschachtelten Pfad `workspace/src/utils` in Ihrem Home-Ordner.",
    "commandHelp": [
      {
        "cmd": "mkdir -p path",
        "desc": "Verschachtelte Verzeichnisse und übergeordnete Verzeichnisse erstellen"
      }
    ],
    "objectives": [
      {
        "id": "nested_dir_exists",
        "text": "Verschachteltes Verzeichnis workspace/src/utils erstellen"
      },
      {
        "id": "used_p_switch",
        "text": "Verwenden Sie den Schalter -p oder --parents in mkdir"
      }
    ],
    "hints": [
      "Suchen Sie nach einem mkdir-Flag, das übergeordnete Verzeichnisse automatisch erstellt, wenn diese nicht vorhanden sind.",
      "Verwenden Sie mkdir mit dem Schalter -p, um verschachtelte Ordner zu erstellen.",
      "Versuchen Sie Folgendes: mkdir -p workspace/src/utils"
    ]
  },
  "5": {
    "title": "Den Bildschirm freimachen",
    "description": "Sind Sie schon einmal überwältigt, wenn Ihr Schreibtisch voller unordentlicher Notizen und Papiere ist? Ihr Terminal kann genauso überfüllt sein. Wenn dies der Fall ist, können Sie den gesamten alten Text entfernen und neu beginnen.\n\n– Der Befehl `clear` löscht den sichtbaren Bildschirm und verschiebt die vorherige Ausgabe aus dem Blickfeld, sodass Sie oben im Terminal eine neue, leere Leinwand haben.",
    "instructions": "Gönnen Sie sich etwas Luft zum Atmen! Führen Sie `clear` aus, um den Bildschirm zu reinigen.",
    "commandHelp": [
      {
        "cmd": "clear",
        "desc": "Löschen Sie den Terminalbildschirm."
      }
    ],
    "objectives": [
      {
        "id": "ran_clear",
        "text": "Führen Sie den Befehl „clear“ aus."
      }
    ],
    "hints": [
      "Entfernen Sie den gesamten alten Text und beginnen Sie neu.",
      "Führen Sie den Befehl aus, der den Terminalbildschirm löscht.",
      "Versuchen Sie Folgendes: klar"
    ]
  },
  "6": {
    "title": "Shell-Hilfe finden",
    "description": "Wenn Sie ein neues Brettspiel kaufen, werfen Sie normalerweise einen Blick auf das Regelbuch oder die Referenzkarte, um zu sehen, welche Züge erlaubt sind. In unserem Terminalemulator gibt es einen integrierten Spickzettel!\n\n– Der Befehl `help` listet jeden einzelnen Befehl auf, den dieser Simulator unterstützt, zusammen mit Details darüber, ob er die Weiterleitung oder Umleitung von Ausgaben unterstützt.",
    "instructions": "Sehen wir uns das Regelwerk an. Führen Sie `help` aus, um die vollständige Liste der Befehle anzuzeigen, mit denen Sie spielen können.",
    "commandHelp": [
      {
        "cmd": "help",
        "desc": "Verfügbare Befehle auflisten"
      }
    ],
    "objectives": [
      {
        "id": "ran_help",
        "text": "Führen Sie den Befehl „help“ aus."
      }
    ],
    "hints": [
      "Sehen Sie sich die Anweisungen an, um den geeigneten Befehl für die Hilfe zum Regelwerk zu finden.",
      "Verwenden Sie den Befehl „help“.",
      "Versuchen Sie Folgendes: Hilfe"
    ]
  },
  "7": {
    "title": "Erstellen leerer Dateien",
    "description": "Stellen Sie sich vor, Sie möchten mit dem Schreiben eines neuen Tagebucheintrags beginnen, benötigen aber zunächst ein leeres Blatt Papier. Unter Linux holen wir uns mit dem Befehl `touch` eine neue, leere Textdatei.\n\n– Der Befehl `touch` erstellt eine brandneue, leere Datei, wenn sie noch nicht existiert (wie das Ausführen von `touch draft.txt`, um `draft.txt` zu erstellen). Wenn die Datei bereits vorhanden ist, wird einfach der Zeitstempel „zuletzt geändert“ der Datei aktualisiert, ohne ihren Inhalt zu ändern. Legen wir eine Datei in unserem neuen Projektordner ab.",
    "instructions": "Lassen Sie uns eine leere Tafel erstellen. Erstellen Sie eine leere Datei mit dem Namen `task.txt` im Ordner `projects` (geben Sie entweder zuerst den Ordner ein oder verwenden Sie `touch projects/task.txt`).",
    "commandHelp": [
      {
        "cmd": "cd projects",
        "desc": "Geben Sie den Projektordner ein."
      },
      {
        "cmd": "touch task.txt",
        "desc": "Erstellen Sie die Datei task.txt."
      }
    ],
    "objectives": [
      {
        "id": "used_touch",
        "text": "Verwenden Sie den Befehl „touch“."
      },
      {
        "id": "file_exists",
        "text": "Erstellen Sie die Datei „task.txt“ innerhalb von „Projekten“."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl eine neue leere Datei erstellt.",
      "Verwenden Sie den Befehl „touch“ im Verzeichnis „projects“.",
      "Versuchen Sie Folgendes: touch project/task.txt"
    ]
  },
  "8": {
    "title": "Dateiinhalte lesen",
    "description": "Stellen Sie sich vor, Sie öffnen einen Ordner, ziehen eine Textseite heraus und halten sie zum Lesen hoch. Unter Linux können wir Dateien mit dem Befehl `cat` (verketten) sofort lesen, ohne einen umfangreichen Texteditor öffnen zu müssen.\n\n- Der Befehl `cat` druckt den gesamten Inhalt einer Datei direkt auf Ihrem Terminalbildschirm. Wenn Sie beispielsweise `cat notes.txt` ausführen, können Sie sofort sehen, was in `notes.txt` geschrieben ist.",
    "instructions": "Lassen Sie uns eine Systemdatei lesen. Drucken Sie den Inhalt der lokalen Netzwerkkonfigurationsdatei unter `/etc/hosts` aus, indem Sie `cat /etc/hosts` ausführen.",
    "commandHelp": [
      {
        "cmd": "cat /etc/hosts",
        "desc": "Hosts-Dateiinhalt drucken"
      }
    ],
    "objectives": [
      {
        "id": "cat_hosts",
        "text": "Führen Sie den Befehl „cat“ auf /etc/hosts aus"
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl den Inhalt einer Datei ausgibt/anzeiget.",
      "Verwenden Sie den Befehl „cat“ für die Datei /etc/hosts.",
      "Versuchen Sie Folgendes: cat /etc/hosts"
    ]
  },
  "9": {
    "title": "Umgang mit Leerzeichen in Dateinamen",
    "description": "Wenn Sie einem Roboter sagen, er solle „mein Schlafzimmer blau streichen“, muss er wissen, ob „mein Schlafzimmer“ ein einzelner Ort ist oder ob „mein“ und „Schlafzimmer“ zwei verschiedene Anweisungen sind. Linux verwendet Leerzeichen, um Befehle von ihren Argumenten zu trennen. Wenn Sie also `mkdir my folder` ausführen, geht Linux davon aus, dass Sie zwei separate Ordner erstellen möchten: einen mit dem Namen „my“ und einen mit dem Namen „folder“!\n\n– Um Linux mitzuteilen, dass ein Name mit Leerzeichen ein einzelnes Element ist, müssen wir ihn in Anführungszeichen setzen (`\"my folder\"` oder `'my folder'`) oder einen Backslash verwenden, um das Leerzeichen zu maskieren (`my\\ folder`).",
    "instructions": "Lassen Sie uns Namen mit Leerzeichen behandeln. Erstellen Sie einen Ordner mit dem Namen `\"my code\"` in Ihrem Home-Verzeichnis und erstellen Sie darin eine leere Datei mit dem Namen `\"my task\"`.",
    "commandHelp": [
      {
        "cmd": "mkdir \"my code\"",
        "desc": "Einen Ordner mit einem Leerzeichen im Namen erstellen"
      },
      {
        "cmd": "touch \"my code/my task\"",
        "desc": "Eine Datei mit einem Leerzeichen im Namen erstellen"
      }
    ],
    "objectives": [
      {
        "id": "dir_with_space_exists",
        "text": "Verzeichnis „mein Code“ erstellen"
      },
      {
        "id": "file_with_space_exists",
        "text": "Datei „meine Aufgabe“ in „mein Code“ erstellen"
      }
    ],
    "hints": [
      "Wenn Sie Dateien oder Verzeichnisse mit Leerzeichen im Namen erstellen, setzen Sie den Namen in Anführungszeichen.",
      "Verwenden Sie mkdir „mein Code“, gefolgt von touch „mein Code/meine Aufgabe“.",
      "Versuchen Sie Folgendes: mkdir „mein Code“ und berühren Sie „mein Code/meine Aufgabe“."
    ]
  },
  "10": {
    "title": "Dateien schreiben und überschreiben",
    "description": "Wenn Sie eine Nachricht an eine Tafel schreiben möchten, wischen Sie die Tafel zunächst vollständig sauber und schreiben dann Ihre neuen Wörter. Unter Linux schreiben wir Nachrichten mit dem Operator `>` (Ausgabeumleitung) in Dateien.\n\n- Der Befehl `echo \"message\"` gibt normalerweise Text auf dem Bildschirm aus.\n– Durch das Hinzufügen des `>`-Symbols leiten wir diesen Text stattdessen in eine Datei um. Beispielsweise schreibt `echo \"Hi\" > greeting.txt` „Hallo“ in `greeting.txt`. Wenn die Datei bereits Text enthält, überschreibt `>` diesen vollständig mit der neuen Nachricht.",
    "instructions": "Schreiben wir in eine neue Datei. Speichern Sie den Text „System Online“ in einer Datei mit dem Namen `status.txt` in Ihrem Home-Ordner `/home/learner`.",
    "commandHelp": [
      {
        "cmd": "echo \"System Online\" > status.txt",
        "desc": "Status.txt mit Text erstellen"
      }
    ],
    "objectives": [
      {
        "id": "used_echo_redirect",
        "text": "Echo mit >-Umleitung verwenden"
      },
      {
        "id": "file_created",
        "text": "„status.txt“ im Home-Verzeichnis erstellen"
      },
      {
        "id": "content_correct",
        "text": "Dateiinhalt ist genau „System Online“"
      }
    ],
    "hints": [
      "Um Text in eine Datei zu schreiben, können Sie die Ausgabe des Echo-Befehls umleiten.",
      "Verwenden Sie den Operator „>“, um echo „System Online“ an status.txt umzuleiten.",
      "Versuchen Sie Folgendes: echo „System Online“ > status.txt"
    ]
  },
  "11": {
    "title": "An Dateien anhängen",
    "description": "Anstatt die Tafel zu bereinigen, was wäre, wenn Sie unten einfach eine neue Zeile hinzufügen möchten? Unter Linux fügen wir mithilfe des Operators `>>` (Umleitung anhängen) Text am Ende einer Datei hinzu, ohne den vorhandenen Inhalt zu berühren.\n\n- Der `>>`-Operator hängt Ihren neuen Text ganz unten an die Datei an. Beispielsweise fügt `echo \"New Line\" >> logs.txt` „Neue Zeile“ am Ende von `logs.txt` hinzu, während alle Ihre alten Protokolle sicher bleiben.",
    "instructions": "Fügen wir eine Zeile hinzu. Hängen Sie den Text „All Checks Green“ am Ende Ihrer `status.txt`-Datei in Ihrem Home-Ordner `/home/learner` an und führen Sie dann `cat` darauf aus, um beide Zeilen anzuzeigen.",
    "commandHelp": [
      {
        "cmd": "echo \"All Checks Green\" >> status.txt",
        "desc": "Text an status.txt anhängen"
      }
    ],
    "objectives": [
      {
        "id": "used_append",
        "text": "Echo mit >> Append-Umleitung verwenden"
      },
      {
        "id": "has_first_line",
        "text": "Erste Zeile ist immer noch „System Online“"
      },
      {
        "id": "has_second_line",
        "text": "Zweite Zeile hat „Alle Prüfungen grün“"
      },
      {
        "id": "used_cat",
        "text": "Überprüfen Sie das Ergebnis mit dem Befehl „cat“"
      }
    ],
    "hints": [
      "Verwenden Sie die Append-Umleitung, damit Sie den vorhandenen Dateiinhalt nicht überschreiben.",
      "Verwenden Sie den Operator „>>“, um Text anzuhängen, und „cat“, um ihn zu überprüfen.",
      "Versuchen Sie Folgendes auszuführen: echo „All Checks Green“ >> status.txt und cat status.txt"
    ]
  },
  "12": {
    "title": "Kopieren und Verschieben von Dateien",
    "description": "Stellen Sie sich vor, Sie würden Ihren Raum neu organisieren: Manchmal möchten Sie eine Fotokopie eines Dokuments erstellen, um es in einer anderen Schublade aufzubewahren, und ein anderes Mal möchten Sie einfach einen Ordner nehmen und ihn in ein neues Regal schieben oder die Beschriftung ändern. Wir machen das unter Linux mit einfachen Befehlen:\n\n- `cp <source> <destination>` erstellt ein identisches Duplikat einer Datei an einem neuen Speicherort.\n- `mv <source> <destination>` verschiebt eine Datei in einen neuen Ordner oder benennt die Datei um, wenn Sie sie im selben Ordner behalten (z. B. `mv old.txt new.txt`).",
    "instructions": "Lassen Sie uns eine Datei umbenennen. Ändern Sie den Namen von `status.txt` in Ihrem Home-Ordner mit dem Befehl `mv` in `system.log`.",
    "commandHelp": [
      {
        "cmd": "mv status.txt system.log",
        "desc": "Status.txt in system.log umbenennen"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "Mit dem Befehl „mv“ umbenennen"
      },
      {
        "id": "old_removed",
        "text": "Ursprüngliche status.txt wurde gelöscht/umbenannt"
      },
      {
        "id": "new_created",
        "text": "Neue Datei system.log mit korrektem Inhalt vorhanden"
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl eine Datei umbenennt oder verschiebt.",
      "Verwenden Sie den Befehl „mv“, um status.txt in system.log umzubenennen.",
      "Versuchen Sie Folgendes: mv status.txt system.log"
    ]
  },
  "13": {
    "title": "Platzhalter und Operationen mit mehreren Dateien",
    "description": "Stellen Sie sich vor, Sie haben einen Stapel Ordner mit den Bezeichnungen „log_monday“, „log_tuesday“ und „log_wednesday“ und möchten alle auf einmal öffnen und lesen, ohne jeden Namen eintippen zu müssen. Unter Linux können Sie **Platzhalter** als Suchverknüpfungen verwenden!\n\n- Das Symbol `*` entspricht allen Zeichen beliebiger Länge. Beispielsweise liest `cat log_*` jede Datei, die mit „log_“ beginnt.\n- Das Symbol `?` fungiert als Platzhalter für ein einzelnes Zeichen. Beispielsweise stimmt `log_?.txt` mit `log_1.txt` überein, ignoriert jedoch `log_12.txt`.",
    "instructions": "Lassen Sie uns mehrere Protokolle zusammenführen. Kombinieren Sie den Inhalt aller Dateien, die mit `log_` beginnen, in Ihrem Home-Verzeichnis in einer einzigen Datei mit dem Namen `combined.log`, indem Sie den Platzhalter `*` und die Umleitung `>` verwenden.",
    "commandHelp": [
      {
        "cmd": "cat log_* > combined.log",
        "desc": "Kombinieren Sie alle übereinstimmenden Dateien in „combined.log“."
      }
    ],
    "objectives": [
      {
        "id": "used_wildcard",
        "text": "Verwenden Sie cat mit Platzhaltermuster (log_*)."
      },
      {
        "id": "combined_exists",
        "text": "Erstellen Sie „combined.log“ im Home-Verzeichnis."
      },
      {
        "id": "content_combined",
        "text": "Überprüfen Sie, ob Protokolle von log_1, log_2 und log_3 vorhanden sind."
      }
    ],
    "hints": [
      "Überlegen Sie, wie Sie Platzhalter verwenden, um mehrere Dateien abzugleichen, die mit log_ beginnen.",
      "Verwenden Sie cat log_*, um alle Match-Dateien zu lesen und die Ausgabe an Combined.log umzuleiten.",
      "Versuchen Sie es mit folgendem Befehl: cat log_* > Combined.log"
    ]
  },
  "14": {
    "title": "Entfernen von Dateien und Ordnern",
    "description": "Wenn Sie Ihren Schreibtisch aufräumen, werfen Sie möglicherweise alte Papiere in einen Papierkorb, wo Sie sie zurückholen können, wenn Sie einen Fehler gemacht haben. Unter Linux gibt es kein Sicherheitsnetz – wenn Sie etwas vom Terminal löschen, ist es für immer verloren!\n\n- Der Befehl `rm` löscht Dateien.\n– Da Ordner andere Dateien enthalten können, löscht `rm` standardmäßig keinen Ordner. Sie müssen das Flag `-r` (rekursiv) hinzufügen, um Linux anzuweisen, in den Ordner einzutauchen und ihn mit allem darin zu löschen.\n\n**Warum das wichtig ist**: Wenn Sie `rm downloads` ohne `-r` ausführen, während `downloads` ein Ordner ist, erhalten Sie: `rm: cannot remove 'downloads': Is a directory`. Das Flag `-r` weist Linux an, den Ordner und alles darin rekursiv zu löschen.",
    "instructions": "Lass uns unser Home-Verzeichnis aufräumen. Löschen Sie den Ordner `downloads` und seinen gesamten Inhalt dauerhaft, indem Sie `rm -r downloads` ausführen.",
    "commandHelp": [
      {
        "cmd": "rm -r downloads",
        "desc": "Ordner rekursiv löschen"
      }
    ],
    "objectives": [
      {
        "id": "used_rm",
        "text": "Verwenden Sie den Befehl „rm“ mit der Flagge -r"
      },
      {
        "id": "downloads_removed",
        "text": "Verzeichnis /home/learner/downloads wird gelöscht"
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl eine Datei oder ein Verzeichnis rekursiv entfernt.",
      "Verwenden Sie den Befehl „rm“ mit der rekursiven Option (-r).",
      "Versuchen Sie Folgendes: rm -r downloads"
    ]
  },
  "15": {
    "title": "Einführung in Rohre und WC",
    "description": "Stellen Sie sich ein Fließband vor, an dem ein Arbeiter ein Produkt verpackt und es sofort dem nächsten Arbeiter übergibt, der es in einen Karton verpackt – keine Zwischenlagerung erforderlich. Unter Linux verbinden wir Befehle genau so mit einer **Pipe** (`|`).\n\n– Eine Pipe (`|`) leitet die Ausgabe eines Befehls direkt an die Eingabe des nächsten Befehls weiter. Beispielsweise listet `ls | wc -l` Dateien auf und übergibt diese Liste sofort an `wc -l` (Wortzählung – Zeilen), der sie im laufenden Betrieb zählt, ohne dass temporäre Dateien erforderlich sind.\n\n**Warum das wichtig ist**: Wenn Sie `wc` ohne `-l` ausführen, werden drei separate Zahlen ausgegeben: Zeilen, Wörter und Bytes (z. B. `  5  10  85`). Dies erschwert die Verwendung in Pipelines oder Skripten, die eine saubere Einzelzahlzählung erfordern. Das Flag `-l` begrenzt die Ausgabe auf die Zeilenanzahl.",
    "instructions": "Lassen Sie uns einige Befehle verbinden. Zählen Sie die Dateien in `/home/learner` mithilfe einer Pipe (`ls | wc -l`) und schreiben Sie die endgültige Anzahl mithilfe der `>`-Umleitung in eine Datei mit dem Namen `file_count.txt`.",
    "commandHelp": [
      {
        "cmd": "ls | wc -l",
        "desc": "Dateien und Ordner im aktuellen Verzeichnis zählen"
      },
      {
        "cmd": "ls | wc -l > file_count.txt",
        "desc": "Dateianzahl in file_count.txt schreiben"
      }
    ],
    "objectives": [
      {
        "id": "used_pipe",
        "text": "Pipe (|) verwenden, um ls mit wc zu verbinden"
      },
      {
        "id": "file_count_exists",
        "text": "Datei „file_count.txt“ im Home-Verzeichnis erstellen"
      },
      {
        "id": "count_is_correct",
        "text": "Überprüfen Sie, ob die Datei die richtige numerische Dateianzahl enthält"
      }
    ],
    "hints": [
      "Überlegen Sie, wie Sie die Ausgabe eines Befehls mithilfe einer Pipe in einen anderen umleiten können.",
      "Leiten Sie die Ausgabe von ls an wc -l weiter und leiten Sie das Ergebnis dann an file_count.txt um.",
      "Versuchen Sie Folgendes: ls | wc -l > file_count.txt"
    ]
  },
  "16": {
    "title": "Unikate sortieren und finden",
    "description": "Stellen Sie sich vor, Sie sortieren ein Kartenspiel, in dem überall Duplikate verstreut sind. Um Duplikate leicht zu erkennen und zu entfernen, gruppieren Sie zunächst die identischen Karten. Unter Linux filtert der Befehl `uniq` sich wiederholende Zeilen heraus, hat aber einen Haken: Er erkennt **nur Duplikate, die direkt nebeneinander liegen**!\n\n– Um alle Duplikate aus einer unübersichtlichen Liste zu entfernen, müssen Sie die Zeilen zunächst mit `sort` sortieren und dann das Ergebnis an `uniq` übergeben. Beispielsweise organisiert und bereinigt `sort raw.txt | uniq` die Liste auf einmal.",
    "instructions": "Lass uns eine unordentliche Gästeliste aufräumen. Die Datei `names.txt` enthält doppelte Namen. Verbinden Sie `sort` und `uniq` mit einer Pipe, um alle eindeutigen Namen alphabetisch zu finden, und speichern Sie sie in `unique_names.txt`.",
    "commandHelp": [
      {
        "cmd": "sort names.txt",
        "desc": "Zeilen von „names.txt“ alphabetisch sortieren"
      },
      {
        "cmd": "sort names.txt | uniq > unique_names.txt",
        "desc": "Duplikate in einer Datei sortieren und filtern"
      }
    ],
    "objectives": [
      {
        "id": "used_sort",
        "text": "Den Befehl „sort“ für „names.txt“ verwenden"
      },
      {
        "id": "used_uniq",
        "text": "Sortierte Ausgabe in den Befehl „uniq“ umleiten"
      },
      {
        "id": "unique_names_exists",
        "text": "Datei „unique_names.txt“ erstellen"
      },
      {
        "id": "sorted_and_unique",
        "text": "Überprüfen Sie, ob der Inhalt eindeutig sortierte Namen hat"
      }
    ],
    "hints": [
      "Sie müssen die Namen zuerst alphabetisch sortieren und dann Duplikate herausfiltern.",
      "Leiten Sie die Ausgabe von sort name.txt an uniq weiter und leiten Sie sie an unique_names.txt um.",
      "Versuchen Sie es mit folgendem Befehl: sort labels.txt | uniq > unique_names.txt"
    ]
  },
  "17": {
    "title": "Filtern mit grep",
    "description": "Stellen Sie sich vor, Sie durchsuchen ein riesiges, tausendseitiges Logbuch, um jedes Mal zu finden, wann ein Systemfehler aufgetreten ist. Dies manuell zu erledigen, würde Stunden dauern! Unter Linux verwenden wir `grep` als unsere digitale Lupe, um sofort nach bestimmten Wörtern oder Mustern zu suchen.\n\n– Der Befehl `grep` filtert Dateien oder weitergeleiteten Text und druckt nur die Zeilen, die Ihrem Suchwort entsprechen. Wenn Sie beispielsweise `grep \"ERROR\" logs.txt` ausführen, wird die Datei gescannt und nur die Zeilen extrahiert, die „ERROR“ enthalten.",
    "instructions": "Lassen Sie uns unsere Protokolle filtern. Durchsuchen Sie `logs.txt` nach allen Zeilen, die `[ERROR]` enthalten, und speichern Sie sie in einer neuen Datei mit dem Namen `errors.log`.",
    "commandHelp": [
      {
        "cmd": "grep \"[ERROR]\" logs.txt",
        "desc": "Durchsuchen Sie logs.txt nach Zeilen, die [ERROR] enthalten."
      },
      {
        "cmd": "grep \"[ERROR]\" logs.txt > errors.log",
        "desc": "Speichern Sie übereinstimmende Fehler in „errors.log“."
      }
    ],
    "objectives": [
      {
        "id": "used_grep",
        "text": "Verwenden Sie den Befehl „grep“, um logs.txt zu durchsuchen."
      },
      {
        "id": "errors_log_exists",
        "text": "Erstellen Sie die Datei „errors.log“ im Home-Verzeichnis."
      },
      {
        "id": "only_errors",
        "text": "Überprüfen Sie, ob „errors.log“ nur [ERROR]-Einträge enthält."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Zeilen filtert, die einem bestimmten Muster entsprechen.",
      "Verwenden Sie grep, um logs.txt nach „[ERROR]“ zu durchsuchen und die Ausgabe anerrors.log umzuleiten.",
      "Versuchen Sie Folgendes: grep „[ERROR]“ logs.txt >errors.log"
    ]
  },
  "18": {
    "title": "Ändern von Dateiberechtigungen",
    "description": "Stellen Sie sich vor, Sie führen ein Unternehmen, in dem nur Manager Schecks unterzeichnen können, Mitarbeiter Zeitpläne lesen können und Besucher nur auf das Ladenschild schauen können. Unter Linux steuern wir mithilfe eines Sicherheitssystems aus Zahlen (sogenannte Oktaldarstellung), wer Dateien lesen, schreiben oder ausführen kann:\n\n- `7` = Vollzugriff: Lesen + Schreiben + Ausführen (`rwx`)\n- `6` = Zugriff ändern: Lesen + Schreiben (`rw-`)\n- `5` = Lese- und Ausführungszugriff: Lesen + Ausführen (`r-x`)\n- `4` = Nur-Lese-Zugriff: Lesen (`r--`)\n\nWir wenden diese Einstellungen mit `chmod <octal> <file>` an. Mit `chmod 755 script.sh` können Sie beispielsweise das Skript ausführen, während andere es nur lesen und ausführen können. Wir haben ein Skript namens `deploy.sh`, das derzeit gesperrt ist – machen wir es ausführbar!",
    "instructions": "Lassen Sie uns die Berechtigungen ändern. Die Datei `deploy.sh` verfügt derzeit über eingeschränkte Berechtigungen (644). Führen Sie `chmod 755 deploy.sh` aus, um es für den Besitzer ausführbar und für alle anderen lesbar/ausführbar zu machen.",
    "commandHelp": [
      {
        "cmd": "chmod 755 deploy.sh",
        "desc": "Legen Sie die Berechtigungen für ausführbare Dateien fest."
      },
      {
        "cmd": "ls -l deploy.sh",
        "desc": "Überprüfen Sie die aktuellen Dateiberechtigungen."
      }
    ],
    "objectives": [
      {
        "id": "used_chmod",
        "text": "Führen Sie den Befehl „chmod“ auf „deploy.sh“ aus."
      },
      {
        "id": "is_executable",
        "text": "Setzen Sie die Berechtigungen von „deploy.sh“ auf 755."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl die Dateiberechtigungen ändert.",
      "Verwenden Sie den Befehl „chmod“ mit dem Berechtigungscode 755 für „deploy.sh“.",
      "Versuchen Sie Folgendes: chmod 755ploy.sh"
    ]
  },
  "19": {
    "title": "Versteckte Dateien und Konfigurationen",
    "description": "Stellen Sie sich eine geheime Schublade unter Ihrem Schreibtisch vor, in der Sie Systemeinstellungen aufbewahren, damit diese Ihren Hauptarbeitsplatz nicht überladen. Unter Linux erstellen wir versteckte Dateien, indem wir ihre Namen einfach mit einem Punkt (`.`) beginnen.\n\n– Diese Dotfiles (wie `.bashrc` oder `.config`) speichern Benutzereinstellungen und Konfigurationseinstellungen im Hintergrund.\n– Ein Standardbefehl `ls` zeigt sie nicht an. Um einen Blick auf diese versteckten Dateien zu werfen, müssen Sie das Flag `-a` (alle) hinzufügen und `ls -a` ausführen.\n\n**Warum das wichtig ist**: Wenn Sie `ls` ohne `-a` ausführen, werden versteckte Dateien (deren Namen mit `.` beginnen) vollständig aus der Ausgabe weggelassen. Sie werden wichtige Dateien wie `.config_names` nicht sehen und denken möglicherweise, dass sie fehlen. Das Flag `-a` weist `ls` an, alle Dateien aufzulisten, einschließlich der versteckten.",
    "instructions": "Lass uns eine Datei verstecken! Benennen Sie `unique_names.txt` in Ihrem Home-Ordner mit `mv` in eine versteckte Datei mit dem Namen `.config_names` um und zeigen Sie sie dann an, indem Sie `ls -a` ausführen.",
    "commandHelp": [
      {
        "cmd": "ls -a",
        "desc": "Alle Dateien auflisten, einschließlich versteckter Dateien"
      },
      {
        "cmd": "mv file .file",
        "desc": "Eine Datei ausblenden, indem ihrem Namen ein Punkt vorangestellt wird"
      }
    ],
    "objectives": [
      {
        "id": "used_mv",
        "text": "Verwenden Sie „mv“, um die Datei umzubenennen."
      },
      {
        "id": "hidden_file_exists",
        "text": "Versteckte Datei „.config_names“ im Home-Bereich erstellen."
      },
      {
        "id": "old_file_removed",
        "text": "Überprüfen Sie, ob die ursprüngliche Datei „unique_names.txt“ entfernt wurde."
      },
      {
        "id": "used_ls_a",
        "text": "Verwenden Sie „ls -a“, um zu überprüfen, ob eine versteckte Datei vorhanden ist."
      }
    ],
    "hints": [
      "Unter Linux wird versteckten Dateien ein Punkt vorangestellt (.) und mit einem speziellen ls-Flag angezeigt.",
      "Verwenden Sie mv unique_names.txt .config_names und führen Sie ls -a aus, um es anzuzeigen.",
      "Versuchen Sie Folgendes auszuführen: mv unique_names.txt .config_names gefolgt von ls -a"
    ]
  },
  "20": {
    "title": "Ändern des Dateieigentums",
    "description": "Stellen Sie sich vor, Sie kaufen ein Haus und müssen die Urkunde offiziell unter dem Namen eines neuen Eigentümers registrieren. Unter Linux hat jede Datei und jeder Ordner einen offiziellen Besitzer und eine Gruppe. Wenn Sie den Besitz einer Datei an eine andere Person (z. B. den Systemadministrator) übergeben müssen, verwenden Sie den Befehl `chown` (Eigentümer ändern).\n\n- Da es sich bei der Änderung des Eigentümers einer Datei um eine sensible Sicherheitsmaßnahme handelt, müssen Sie ihr `sudo` voranstellen, um sie mit Administratorrechten auszuführen. Beispielsweise weist `sudo chown root reports.csv` die Datei dem Benutzer „root“ zu.",
    "instructions": "Lassen Sie uns das Eigentum übertragen. Ändern Sie den Besitzer von `/home/learner/reports.csv` in den Administrator `root`, indem Sie `sudo chown root reports.csv` ausführen.",
    "commandHelp": [
      {
        "cmd": "sudo chown root reports.csv",
        "desc": "Ändern Sie den Besitzer von „reports.csv“ in „root“."
      }
    ],
    "objectives": [
      {
        "id": "used_chown",
        "text": "Führen Sie den Befehl „chown“ mit sudo aus."
      },
      {
        "id": "owner_changed",
        "text": "Setzen Sie den Besitzer von „reports.csv“ auf „root“."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl den Eigentümer der Datei ändert, und denken Sie daran, dass dafür Administratorrechte erforderlich sind.",
      "Verwenden Sie den Befehl „chown“ mit dem Präfix „sudo“, um den Besitzer in „root“ zu ändern.",
      "Versuchen Sie Folgendes: sudo chown root reporting.csv"
    ]
  },
  "21": {
    "title": "Superuser-Berechtigungen (sudo)",
    "description": "Stellen Sie sich vor, Sie arbeiten an Ihrem Computer mit einem Standardkonto, um zu verhindern, dass versehentlich wichtige Betriebssystemdateien gelöscht werden. Wenn Sie Software installieren oder Systemeinstellungen ändern müssen, fordert Ihr Computer eine Administratorautorisierung an. Unter Linux verwenden wir `sudo` (kurz für „Superuser Do“) als unsere Verwaltungsschlüsselkarte.\n\n- Der Benutzer `root` ist das Hauptadministratorkonto mit vollständiger Kontrolle über das System.\n- Standardbenutzern ist das Lesen sensibler Dateien (wie der Passwortdatenbank `/etc/shadow`) untersagt. Durch die Eingabe von `sudo` vor einem Befehl führen Sie ihn mit temporären Administratorrechten aus, um diese Blöcke zu umgehen.",
    "instructions": "Testen wir die Superuser-Fähigkeiten. Führen Sie `cat /etc/shadow` aus, um den Berechtigungsfehler anzuzeigen. Umgehen Sie es dann, indem Sie den Befehl mit Administratorrechten ausführen: `sudo cat /etc/shadow`.",
    "commandHelp": [
      {
        "cmd": "sudo command",
        "desc": "Führen Sie einen Befehl mit Administrator-/Superuser-Rechten aus."
      },
      {
        "cmd": "cat /etc/shadow",
        "desc": "Lesen Sie die Passwort-Hashes-Datenbank (eingeschränkt)."
      }
    ],
    "objectives": [
      {
        "id": "tried_without_sudo",
        "text": "Versuchen Sie „cat /etc/shadow“ und beobachten Sie den Berechtigungsfehler."
      },
      {
        "id": "ran_sudo_cat",
        "text": "Führen Sie „sudo cat /etc/shadow“ erfolgreich aus."
      }
    ],
    "hints": [
      "Sie benötigen Administratorrechte, um eingeschränkte Systemdateien zu lesen.",
      "Führen Sie zuerst cat /etc/shadow ohne sudo aus, um den Fehler anzuzeigen, und stellen Sie ihm dann sudo voran.",
      "Versuchen Sie Folgendes: cat /etc/shadow und dann: sudo cat /etc/shadow"
    ]
  },
  "22": {
    "title": "Paketverwaltung (apt)",
    "description": "Denken Sie an die Installation von Apps auf Ihrem Smartphone über den App Store oder Google Play Store. Es ist sicher, kuratiert und automatisiert. Unter Linux verwenden wir einen Befehlszeilen-App-Store namens Paketmanager, um Software sicher abzurufen und zu installieren.\n\n- Auf Ubuntu/Debian-Systemen ist der Standardpaketmanager `apt` (Advanced Packaging Tool).\n- Durch die Installation von Software werden systemweite Ordner geändert, daher müssen Sie sie immer mit `sudo` autorisieren. Beispielsweise lädt `sudo apt install tree` den Verzeichnisvisualisierer „tree“ herunter und installiert ihn.",
    "instructions": "Lassen Sie uns etwas Software installieren. Führen Sie `sudo apt install tree` aus, um das Programm `tree` zu installieren. Sobald der Vorgang abgeschlossen ist, führen Sie `tree` aus, um Ihren Home-Ordner in einem übersichtlichen baumähnlichen Format anzuzeigen.",
    "commandHelp": [
      {
        "cmd": "sudo apt install tree",
        "desc": "Installieren Sie das Tree-Paket."
      },
      {
        "cmd": "tree",
        "desc": "Führen Sie Tree aus, um Verzeichnisse anzuzeigen."
      }
    ],
    "objectives": [
      {
        "id": "installed_tree",
        "text": "Installieren Sie das Paket „tree“ mit apt install."
      },
      {
        "id": "ran_tree",
        "text": "Führen Sie den Befehl „tree“ aus, um Verzeichnisse anzuzeigen."
      }
    ],
    "hints": [
      "Überlegen Sie, wie Sie Pakete unter Ubuntu mithilfe des Paketmanagers mit Administratorrechten installieren.",
      "Führen Sie „sudo apt install tree“ aus und visualisieren Sie dann die Verzeichnisse, indem Sie den Befehl „tree“ ausführen.",
      "Versuchen Sie Folgendes: sudo apt install tree und dann tree"
    ]
  },
  "23": {
    "title": "Überprüfen des Speicherplatzes (df)",
    "description": "Stellen Sie sich vor, Sie versuchen, ein riesiges Videospiel herunterzuladen und erhalten die Fehlermeldung „Speicher voll“, aber Sie sind sich nicht sicher, welches Laufwerk der Engpass ist. Unter Linux überprüfen wir die Speicherkapazität unseres Systems mit dem Befehl `df` (disk free).\n\n– Der Befehl `df` zeigt den gesamten, belegten und verfügbaren Speicherplatz auf allen angeschlossenen Laufwerken an.\n- Durch Ausführen von `df -h` (Hinzufügen des `-h`-Flags für „für Menschen lesbar“) sehen Sie den Speicher in benutzerfreundlichen Gigabyte (G) und Megabyte (M) statt verwirrender Blockzahlen, sodass Sie leicht erkennen können, welches Laufwerk (wie `/` oder `/home`) voll ist.\n\n**Warum das wichtig ist**: Wenn Sie `df` ohne `-h` ausführen, werden die Größen in rohen 1K-Blockzahlen angezeigt (z. B. `49258284` anstelle von `47G`), was für einen Menschen äußerst schwer zu lesen und zu berechnen ist. Das Flag `-h` formatiert diese Größen in benutzerfreundliche Gigabyte (G) und Megabyte (M).",
    "instructions": "Lassen Sie uns unseren Systemspeicher überprüfen. Führen Sie `df -h` aus, um in einem für Menschen lesbaren Format zu sehen, wie viel Speicherplatz noch auf Ihren Partitionen vorhanden ist.",
    "commandHelp": [
      {
        "cmd": "df -h",
        "desc": "Zeigt freien Speicherplatz auf Dateisystemen in einem für Menschen lesbaren Format an."
      }
    ],
    "objectives": [
      {
        "id": "ran_df_h",
        "text": "Führen Sie den Befehl „df -h“ aus."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl freien Speicherplatz anzeigt.",
      "Verwenden Sie den Befehl „df“ mit der für Menschen lesbaren Option.",
      "Versuchen Sie Folgendes: df -h"
    ]
  },
  "24": {
    "title": "Verzeichnisgrößen ermitteln (du)",
    "description": "Wenn Sie wissen, *welches* Laufwerk voll ist, wie finden Sie dann den spezifischen Ordner, der Ihren gesamten Speicherplatz hortet? Ist es Ihr Download-Ordner oder vielleicht ein versteckter Cache? Wir lösen dieses Rätsel mit dem Befehl `du` (Festplattennutzung).\n\n- `du <directory>` listet die Größe eines Ordners und aller darin enthaltenen Unterordner auf.\n- `du -sh <directory>` (wobei `-s` „Zusammenfassung“ und `-h` „für Menschen lesbar“ bedeutet) berechnet und druckt eine einzelne, saubere Gesamtgröße für diesen bestimmten Ordner.\n\n**Warum das wichtig ist**: Wenn Sie `du` ohne `-s` ausführen, wird eine riesige Textwand ausgegeben, die jedes einzelne Unterverzeichnis und jede einzelne Datei rekursiv auflistet, anstatt eine einzige Zusammenfassung zu geben. Das Flag `-s` fasst die Gesamtgröße des Ordners zusammen und `-h` macht ihn für Menschen lesbar.",
    "instructions": "Machen wir uns auf die Suche nach Lagerfressern. Berechnen Sie die Gesamtgröße des Home-Verzeichnisses des Lernenden, indem Sie `du -sh /home/learner` ausführen.",
    "commandHelp": [
      {
        "cmd": "du -sh /home/learner",
        "desc": "Zeigt die Gesamtgröße des Home-Verzeichnisses des Lernenden an."
      }
    ],
    "objectives": [
      {
        "id": "ran_du",
        "text": "Führen Sie „du“ mit den Optionen -s und -h aus."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl die Festplattennutzung für Ordner überprüft.",
      "Verwenden Sie den Befehl „du“ mit den Optionen „Zusammenfassung“ (-s) und „für Menschen lesbar“ (-h).",
      "Versuchen Sie Folgendes auszuführen: du -sh /home/learner"
    ]
  },
  "25": {
    "title": "Überprüfen der Speichernutzung (kostenlos)",
    "description": "Stellen Sie sich vor, Ihr Laptop fängt an zu stagnieren, Webseiten frieren ein und der Wechsel zwischen Apps fühlt sich quälend langsam an. Dies bedeutet normalerweise, dass Ihr Computer nicht mehr über genügend aktiven Speicher (RAM) verfügt. Unter Linux können wir mit dem Befehl `free` überprüfen, wie viel Spielraum unser System hat.\n\n– Der Befehl `free` zeigt den gesamten, verwendeten und verfügbaren physischen Speicher (RAM) und Auslagerungsspeicher an.\n– Durch das Hinzufügen des Flags `-h` (unter Ausführung von `free -h`) werden die Speichergrößen in leicht lesbare Gigabyte (GB) und Megabyte (MB) formatiert, sodass Sie erkennen können, ob ein Programm alle Ihre Ressourcen verbraucht.\n\n**Warum das wichtig ist**: Wenn Sie `free` ohne `-h` ausführen, wird die Speichernutzung in rohen Kilobytes ausgegeben (z. B. `16323456` statt `16G`), was schnell schwer zu interpretieren ist. Das Flag `-h` skaliert die Zahlen automatisch auf Gigabyte (G) oder Megabyte (M), um das Lesen zu erleichtern.",
    "instructions": "Lassen Sie uns den Speicher des Systems überprüfen. Überprüfen Sie den verfügbaren RAM in einem für Menschen lesbaren Format, indem Sie `free -h` ausführen.",
    "commandHelp": [
      {
        "cmd": "free -h",
        "desc": "RAM-Nutzung in für Menschen lesbarem Format anzeigen"
      }
    ],
    "objectives": [
      {
        "id": "ran_free",
        "text": "„Free“ mit der Option -h oder -m ausführen"
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Speicherstatistiken anzeigt.",
      "Verwenden Sie den Befehl „free“ mit einer für Menschen lesbaren Option.",
      "Versuchen Sie Folgendes: free -h"
    ]
  },
  "26": {
    "title": "Systemverfügbarkeit und Kernel-Details",
    "description": "Stellen Sie sich vor, Sie müssten Fehler bei einem Server beheben, der sich nicht mehr richtig verhält, und möchten wissen, ob er kürzlich neu gestartet wurde, oder genau überprüfen, welche Betriebssystemversion unter der Haube läuft. Wir können diese Systemdetails in Sekundenschnelle abfragen:\n\n- Der Befehl `uptime` sagt Ihnen genau, wie lange Ihre Maschine seit dem letzten Start in Betrieb war und wie ausgelastet sie war (Systemauslastung).\n– Der Befehl `uname -a` (Unix-Name) druckt einen vollständigen Bericht über den Kernel, den Plattformnamen und die Maschinenarchitektur Ihres Systems.\n\n**Warum das wichtig ist**: Wenn Sie `uname` ohne `-a` ausführen, wird nur der grundlegende Betriebssystemname ausgegeben (z. B. `Linux`). Wichtige Details wie die Kernel-Version, der Plattformname und die Prozessorarchitektur werden weggelassen. Das Flag `-a` druckt alle verfügbaren Systemdetails in einem einzigen Bericht.",
    "instructions": "Sehen wir uns die Systemstatistiken an. Führen Sie `uptime` aus, um zu überprüfen, wie lange das System bereits läuft, und führen Sie dann `uname -a` aus, um die vollständigen Kernel- und Maschinendetails auszudrucken.",
    "commandHelp": [
      {
        "cmd": "uptime",
        "desc": "Zeigt an, wie lange das System bereits läuft."
      },
      {
        "cmd": "uname -a",
        "desc": "Gibt alle System- und Kernelinformationen aus."
      }
    ],
    "objectives": [
      {
        "id": "ran_uptime",
        "text": "Führen Sie den Befehl „uptime“ aus."
      },
      {
        "id": "ran_uname",
        "text": "Führen Sie den Befehl „uname -a“ aus."
      }
    ],
    "hints": [
      "Sie müssen zwei Befehle ausführen: einen für die Systemverfügbarkeit und einen für Kernelinformationen.",
      "Verwenden Sie den Befehl „uptime“ und „uname“ mit dem Flag -a.",
      "Versuchen Sie Folgendes: uptime und dann: uname -a"
    ]
  },
  "27": {
    "title": "Auflisten laufender Prozesse (ps)",
    "description": "Stellen Sie sich Ihr Betriebssystem wie ein geschäftiges Büro vor, in dem jedem Mitarbeiter (oder jedem ausgeführten Programm) ein eindeutiges Namensschild namens Prozess-ID (PID) zugewiesen wird. Unter Linux nennen wir diese aktiven Programme **Prozesse** und listen sie mit dem Befehl `ps` auf.\n\n- Wenn Sie `ps` alleine ausführen, werden nur Programme angezeigt, die in Ihrem aktuellen Terminalfenster ausgeführt werden.\n- Das Ausführen von `ps aux` verhält sich wie eine Master-Office-Registrierung, die jedes einzelne aktive Programm, das im gesamten System ausgeführt wird, auflistet, wer es gestartet hat und wie viel CPU und Speicher es verbraucht.\n\n**Warum das wichtig ist**: Wenn Sie `ps` ohne `aux` ausführen, sehen Sie nur Prozesse, die in Ihrem aktuellen Terminalfenster ausgeführt werden (normalerweise nur `bash` und `ps` selbst). Hintergrunddienste, Systemprozesse oder von anderen Benutzern ausgeführte Programme werden Ihnen nicht angezeigt. Die `aux`-Optionen zeigen alle laufenden Prozesse systemweit an.",
    "instructions": "Lassen Sie uns die Registrierung überprüfen. Führen Sie `ps aux` aus, um alle laufenden Prozesse auf dem Laptop aufzulisten und Spalten wie PID, %CPU und %MEM zu beachten.",
    "commandHelp": [
      {
        "cmd": "ps aux",
        "desc": "Alle laufenden Prozesse auf dem System auflisten"
      }
    ],
    "objectives": [
      {
        "id": "ran_ps_aux",
        "text": "Führen Sie den Befehl „ps aux“ aus"
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Prozesse auflistet und wie alle Prozesse auf dem System aufgelistet werden.",
      "Verwenden Sie den Befehl „ps“ mit den Aux-Optionen.",
      "Versuchen Sie Folgendes: ps aux"
    ]
  },
  "28": {
    "title": "Interaktiver Prozessmonitor (oben)",
    "description": "Stellen Sie sich vor, Sie betrachten ein statisches Foto einer Autobahn und nicht den Live-Feed einer Verkehrskamera. Während `ps` Ihnen einen schnellen Überblick darüber gibt, was gerade läuft, können Sie mit `top` die Leistung Ihres Systems live verfolgen.\n\n– Der Befehl `top` startet ein interaktives Echtzeit-Dashboard, das alle paar Sekunden aktualisiert wird. Es zeigt die CPU-Auslastung und die durchschnittliche Auslastung an und ordnet dynamisch die ressourcenintensivsten Prozesse, die genau zu diesem Zeitpunkt ausgeführt werden.",
    "instructions": "Schauen wir uns den Live-Feed an. Starten Sie den interaktiven Prozessmonitor, indem Sie den Befehl `top` ausführen.",
    "commandHelp": [
      {
        "cmd": "top",
        "desc": "Starten Sie den interaktiven Prozessmonitor."
      }
    ],
    "objectives": [
      {
        "id": "ran_top",
        "text": "Führen Sie den Befehl „top“ aus."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl den interaktiven Prozessmonitor startet.",
      "Verwenden Sie den Befehl „top“ oder „htop“.",
      "Versuchen Sie Folgendes: oben"
    ]
  },
  "29": {
    "title": "Stoppen unerwünschter Prozesse (Kill)",
    "description": "Stellen Sie sich vor, eine App auf Ihrem Telefon friert ein, sperrt Ihren Bildschirm vollständig und Sie müssen das Schließen erzwingen, damit alles wieder reibungslos läuft. Unter Linux stoppen wir Fehlverhalten oder eingefrorene Programme, indem wir den Befehl `kill` gefolgt von der Prozess-ID (PID) des Programms verwenden.\n\n- Beim Ausführen von `kill 1234` wird eine höfliche Anfrage gesendet, in der das Programm aufgefordert wird, seine Arbeit zu speichern und zu schließen.\n– Wenn es eingefroren ist und die höfliche Anfrage ignoriert, zwingt `kill -9 1234` das Betriebssystem, es sofort herunterzufahren. Wir haben gerade einen außer Kontrolle geratenen Prozess mit PID `9999`, der unsere gesamte CPU beansprucht – schalten wir ihn ab!",
    "instructions": "Stoppen wir den Schurkenprozess. Erzwingen Sie das Schließen des Prozesses mit PID `9999`, indem Sie `kill 9999` ausführen.",
    "commandHelp": [
      {
        "cmd": "kill 9999",
        "desc": "Prozess mit PID 9999 beenden"
      }
    ],
    "objectives": [
      {
        "id": "process_killed",
        "text": "Stoppen Sie den unerwünschten Prozess mit PID 9999"
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Prozesse anhand ihrer ID beendet.",
      "Verwenden Sie den Befehl „kill“, gefolgt von der Prozess-ID 9999.",
      "Versuchen Sie Folgendes: kill 9999"
    ]
  },
  "30": {
    "title": "Ausführen von Jobs im Hintergrund",
    "description": "Stellen Sie sich vor, Sie versuchen, einen riesigen Ordner auf ein USB-Laufwerk zu kopieren, möchten aber während des Kopierens weiterarbeiten und andere Befehle im selben Fenster eingeben. Unter Linux können wir zeitaufwändige Aufgaben im „Hintergrund“ ausführen, damit sie unsere Befehlszeile nicht blockieren.\n\n– Durch das Hinzufügen eines kaufmännischen Und-Zeichens `&` am Ende eines Befehls (z. B. `sleep 100 &`) wird das Terminal angewiesen, ihn im Hintergrund auszuführen und Ihnen sofort Ihre Eingabeaufforderung zu geben.\n- Der Befehl `jobs` zeigt an, was gerade im Hintergrund läuft.\n– Der Befehl `fg` (Vordergrund) zieht eine Hintergrundaufgabe zurück in den Mittelpunkt.",
    "instructions": "Lass uns Multitasking betreiben. Führen Sie `sleep 100 &` aus, um eine Hintergrundaufgabe zu starten, überprüfen Sie sie mit `jobs` und holen Sie sie dann durch Ausführen von `fg` wieder in den Vordergrund.",
    "commandHelp": [
      {
        "cmd": "sleep 100 &",
        "desc": "Sleep im Hintergrund ausführen"
      },
      {
        "cmd": "jobs",
        "desc": "Hintergrundjobs auflisten"
      },
      {
        "cmd": "fg",
        "desc": "Hintergrundjob in den Vordergrund bringen"
      }
    ],
    "objectives": [
      {
        "id": "ran_bg_job",
        "text": "Einen Sleep-Befehl im Hintergrund ausführen (&)"
      },
      {
        "id": "ran_jobs",
        "text": "Den Befehl „Jobs“ ausführen"
      },
      {
        "id": "ran_fg",
        "text": "Den Job mit „fg“ wieder in den Vordergrund holen"
      }
    ],
    "hints": [
      "Um einen Job im Hintergrund auszuführen, hängen Sie ein kaufmännisches Und (&) an den Befehl an.",
      "Führen Sie „sleep 100“ im Hintergrund aus, prüfen Sie die Jobs und bringen Sie es mit fg zurück.",
      "Versuchen Sie Folgendes: Sleep 100 & gefolgt von Jobs und dann FG"
    ]
  },
  "31": {
    "title": "Testen der Konnektivität (Ping)",
    "description": "Stellen Sie sich vor, Sie versuchen, eine Webseite zu laden, aber Ihr Browser dreht sich endlos und Sie fragen sich, ob die WLAN-Verbindung zu Hause unterbrochen ist oder ob die Website selbst abgestürzt ist. Unter Linux testen wir unsere grundlegende Netzwerkverbindung mit dem Befehl `ping`.\n\n– Der Befehl `ping` sendet winzige Datenpakete an einen Server (wie `google.com`) und misst, wie viele Millisekunden es dauert, eine Antwort zu erhalten.\n– Unter Linux läuft `ping` standardmäßig für immer weiter. Damit es nach ein paar Versuchen stoppt, verwenden wir das Flag `-c` (count) und führen `ping -c 3 google.com` aus.\n\n**Warum das wichtig ist**: Wenn Sie `ping google.com` ohne `-c` ausführen, werden unbegrenzt weiterhin Pakete gesendet und die Ausgabe gedruckt. Sie müssen es manuell mit `Ctrl+C` unterbrechen, um andere Befehle auszuführen. Das Flag `-c 3` stoppt den Befehl automatisch, nachdem genau 3 Pakete gesendet wurden.",
    "instructions": "Lassen Sie uns unsere Konnektivität überprüfen. Testen Sie Ihre Verbindung zu `google.com`, indem Sie genau 3 Pakete senden: `ping -c 3 google.com`.",
    "commandHelp": [
      {
        "cmd": "ping -c 3 google.com",
        "desc": "Senden Sie 3 Echopakete an google.com"
      }
    ],
    "objectives": [
      {
        "id": "ran_ping_c3",
        "text": "Pingen Sie google.com genau dreimal mit der Flagge -c"
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl ICMP-Echopakete sendet, um die Verbindung zu testen.",
      "Verwenden Sie Ping mit der Count-Option auf 3 für google.com.",
      "Versuchen Sie Folgendes: ping -c 3 google.com"
    ]
  },
  "32": {
    "title": "Netzwerkschnittstellen und lokale IP",
    "description": "Stellen Sie sich vor, Sie richten einen Netzwerkdrucker ein oder teilen Dateien mit dem Computer eines Freundes über dasselbe WLAN und müssen die lokale IP-Adresse Ihres Geräts kennen. Unter Linux überprüfen wir unsere Netzwerkhardware und IPs mit dem Befehl `ip`.\n\n- Wenn Sie `ip addr` (oder einfach `ip a`) ausführen, wird eine Liste aller Ihrer Netzwerkschnittstellengeräte (wie `eth0` für kabelgebundenes Ethernet oder `wlan0` für WLAN) zusammen mit den ihnen zugewiesenen lokalen IP-Adressen gedruckt.",
    "instructions": "Lassen Sie uns unser Netzwerk-Setup überprüfen. Zeigen Sie alle lokalen Netzwerkschnittstellen und IP-Adressen an, indem Sie `ip addr` ausführen.",
    "commandHelp": [
      {
        "cmd": "ip addr",
        "desc": "Netzwerkschnittstellendetails und IP-Adressen anzeigen"
      }
    ],
    "objectives": [
      {
        "id": "ran_ip_addr",
        "text": "Führen Sie den Befehl „ip addr“ oder „ip a“ aus."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Netzwerkschnittstellenkonfigurationen anzeigt.",
      "Verwenden Sie den Befehl „ip“ mit der Adresse oder einem Argument.",
      "Versuchen Sie Folgendes: IP-Adresse"
    ]
  },
  "33": {
    "title": "Herunterladen von Webdateien (curl)",
    "description": "Stellen Sie sich vor, Sie möchten eine Datei herunterladen oder den Code eines Setup-Skripts direkt von einem Webserver abrufen, ohne einen Browser zu öffnen und auf die Schaltfläche „Herunterladen“ zu klicken. Unter Linux rufen wir Webdaten mit `curl` (kurz für „Client URL“) ab.\n\n- Wenn Sie `curl <url>` ausführen, wird der Seiteninhalt heruntergeladen und direkt auf Ihrem Bildschirm gedruckt.\n– Um den heruntergeladenen Inhalt als Datei zu speichern, anstatt ihn anzuzeigen, koppeln wir ihn mit der `>`-Umleitung oder dem `-o`-Ausgabeflag.",
    "instructions": "Laden wir ein Skript herunter. Rufen Sie die Datei unter `http://api.bashquest.com/update.sh` ab und speichern Sie sie lokal als `update.sh`, indem Sie `curl http://api.bashquest.com/update.sh > update.sh` ausführen.",
    "commandHelp": [
      {
        "cmd": "curl http://api.bashquest.com/update.sh > update.sh",
        "desc": "Laden Sie den Inhalt der Webseite herunter und speichern Sie ihn in update.sh."
      }
    ],
    "objectives": [
      {
        "id": "used_curl",
        "text": "Verwenden Sie den Befehl „curl“."
      },
      {
        "id": "download_saved",
        "text": "Speichern Sie das heruntergeladene Skript als „update.sh“ im Home-Ordner."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Webdateien herunterlädt und wie Sie ihn in eine Datei umleiten.",
      "Verwenden Sie Curl, um die Datei herunterzuladen, und die Umleitung „>“, um sie als update.sh zu speichern.",
      "Versuchen Sie Folgendes auszuführen: curl http://api.bashquest.com/update.sh > update.sh"
    ]
  },
  "34": {
    "title": "Dateien nach Namen suchen (find)",
    "description": "Stellen Sie sich vor, Sie hätten eine wichtige Textdatei irgendwo in Ihrem Benutzerordner verlegt und müssten Dutzende verschachtelter Verzeichnisse nacheinander durchsuchen. Unter Linux umgehen wir das manuelle Suchen, indem wir das Dienstprogramm `find` als blitzschnelle systemweite Suchmaschine verwenden.\n\n– Der Befehl `find` durchsucht Verzeichnisbäume nach Name, Größe, Typ oder Datum.\n- Die Syntax ist `find <where> -name \"<pattern>\"`. Beispielsweise durchsucht `find . -name \"*.txt\"` das aktuelle Verzeichnis und alle Unterordner nach Dateien mit der Endung `.txt`.\n\n**Warum das wichtig ist**: Wenn Sie `find . \"*.log\"` ohne `-name` ausführen, erhalten Sie die Fehlermeldung: `find: paths must precede expression: '*.log'`. Das Flag `-name` ist erforderlich, um anzugeben, dass das nachfolgende Muster mit den Dateinamen abgeglichen werden soll.",
    "instructions": "Lassen Sie uns einige Dateien aufspüren. Durchsuchen Sie das aktuelle Verzeichnis und seine Unterordner nach Dateien mit der Erweiterung `.log`, indem Sie `find . -name \"*.log\"` ausführen.",
    "commandHelp": [
      {
        "cmd": "find . -name \"*.log\"",
        "desc": "Alle Dateien mit der Endung .log im aktuellen Ordner und in Unterordnern finden."
      }
    ],
    "objectives": [
      {
        "id": "ran_find",
        "text": "Führen Sie den Befehl „find“ mit der Option „-name“ aus."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Dateien rekursiv nach Namen findet, die einem Muster entsprechen.",
      "Verwenden Sie die Suche im aktuellen Verzeichnis (.) mit dem Namensmuster „*.log“.",
      "Versuchen Sie Folgendes: find . -name „*.log“"
    ]
  },
  "35": {
    "title": "Überprüfen des Befehlsverlaufs",
    "description": "Stellen Sie sich vor, Sie haben vor zehn Minuten einen langen, komplexen Netzwerkdiagnosebefehl eingegeben und müssen ihn jetzt erneut ausführen, können sich aber nicht an die genauen Optionen oder Syntax erinnern. Anstatt sich den Kopf zu zerkratzen oder alles noch einmal abzutippen, merkt sich Linux alles für Sie!\n\n- Der Befehl `history` zeigt eine nummerierte Liste aller Befehle an, die Sie kürzlich ausgeführt haben.\n- Sie können jedes Element schnell erneut ausführen, indem Sie ein Ausrufezeichen gefolgt von seiner Listennummer eingeben (z. B. `!42`, um Befehl Nr. 42 erneut auszuführen).",
    "instructions": "Lassen Sie uns die Archive überprüfen. Führen Sie `history` aus, um die Liste der Befehle anzuzeigen, die Sie in dieser Sitzung ausgeführt haben.",
    "commandHelp": [
      {
        "cmd": "history",
        "desc": "Zeigt eine Liste der zuletzt ausgeführten Befehle an."
      }
    ],
    "objectives": [
      {
        "id": "ran_history",
        "text": "Führen Sie den Befehl „history“ aus."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl die zuletzt ausgeführten Befehle auflistet.",
      "Verwenden Sie den Befehl „history“.",
      "Versuchen Sie Folgendes: Verlauf"
    ]
  },
  "36": {
    "title": "Konsultieren von Handbuchseiten",
    "description": "Stellen Sie sich vor, Sie versuchen, einen neuen Befehl zu verwenden, sind sich aber nicht sicher, welche Flags er unterstützt oder wie seine Eingaben formatiert werden sollen. Anstatt online zu suchen, verfügt Linux über ein offizielles, umfassendes Benutzerhandbuch, das direkt in das Terminal integriert ist!\n\n- Der Befehl `man` (manuell) gefolgt von einem beliebigen Dienstprogrammnamen (z. B. `man ls`) öffnet ein detailliertes Referenzhandbuch.\n- Innerhalb der Anleitung scrollen Sie mit den Pfeiltasten, suchen mit „/“ und drücken `q`, um das Handbuch zu schließen und zu Ihrer Eingabeaufforderung zurückzukehren.",
    "instructions": "Sehen wir uns die Dokumente an. Öffnen Sie die integrierte Handbuchseite für den Befehl `grep`, indem Sie `man grep` ausführen.",
    "commandHelp": [
      {
        "cmd": "man grep",
        "desc": "Handbuchseite für grep anzeigen"
      }
    ],
    "objectives": [
      {
        "id": "ran_man_grep",
        "text": "Führen Sie den Befehl „man grep“ aus."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl das integrierte Systemreferenzhandbuch anzeigt.",
      "Verwenden Sie den Befehl „man“, gefolgt vom Befehlsnamen, den Sie suchen möchten.",
      "Versuchen Sie Folgendes: man grep"
    ]
  },
  "37": {
    "title": "Steuern von Diensten (systemctl)",
    "description": "Stellen Sie sich vor, Sie hosten eine Website auf Ihrem Computer, aber Besucher erhalten die Fehlermeldung „Website kann nicht erreicht werden“, weil das Hintergrundprogramm des Webservers nicht ausgeführt wird. Unter Linux werden Hintergrundprozesse, die automatisch starten und im Hintergrund laufen (wie Datenbanken, Firewalls oder Webserver), **Dienste** genannt und wir verwalten sie mit `systemctl`.\n\n– Der Befehl `systemctl status <service>` prüft, ob ein Dienst aktiv oder gestoppt ist.\n- Da das Starten oder Stoppen eines Dienstes Auswirkungen auf alle Benutzer und die Sicherheit des Systems hat, müssen Sie `sudo` verwenden, um Befehle wie `sudo systemctl start <service>` oder `sudo systemctl stop <service>` auszuführen.",
    "instructions": "Lassen Sie uns einen Webserver starten. Der Webserverdienst `apache2` ist derzeit gestoppt. Starten Sie es, indem Sie `sudo systemctl start apache2` ausführen, und überprüfen Sie, ob es mit `systemctl status apache2` ausgeführt wird.",
    "commandHelp": [
      {
        "cmd": "systemctl status apache2",
        "desc": "Überprüfen Sie den Status des Apache2-Webdienstes."
      },
      {
        "cmd": "sudo systemctl start apache2",
        "desc": "Starten Sie den Apache2-Webdienst."
      }
    ],
    "objectives": [
      {
        "id": "started_service",
        "text": "Starten Sie den „Apache2“-Webdienst."
      },
      {
        "id": "checked_status",
        "text": "Überprüfen Sie den Status von „Apache2“."
      }
    ],
    "hints": [
      "Sie müssen den Status von Apache2 überprüfen und ihn starten.",
      "Verwenden Sie systemctl status apache2 und denken Sie daran, dass zum Starten von Diensten Administratorrechte (sudo) erforderlich sind.",
      "Versuchen Sie Folgendes: sudo systemctl start apache2 und dann systemctl status apache2"
    ]
  },
  "38": {
    "title": "Bearbeiten von Konfigurationsdateien (nano)",
    "description": "Stellen Sie sich eine SSH-Verbindung zu einem Remote-Cloud-Server vor, auf dem Sie keinen grafischen Desktop oder Cursor haben und schnell eine Zeile in einer Konfigurationsdatei korrigieren müssen. In diesen Szenarien müssen Sie einen Terminal-Texteditor wie `nano` verwenden.\n\n- Beim Ausführen von `nano <filename>` wird ein einfacher, leichter Texteditor direkt in Ihr Shell-Fenster geladen.\n- Die Verknüpfungen werden immer unten auf dem Bildschirm angezeigt: Drücken Sie `Ctrl+O`, um Ihre Änderungen zu schreiben (zu speichern), und `Ctrl+X`, um den Editor zu verlassen.",
    "instructions": "Lassen Sie uns eine Konfigurationsdatei bearbeiten. Öffnen Sie `server.conf` in Ihrem Home-Verzeichnis mit `nano server.conf`, fügen Sie eine Zeile mit der Aufschrift `port=8080` hinzu, speichern Sie dann und beenden Sie den Editor.",
    "commandHelp": [
      {
        "cmd": "nano server.conf",
        "desc": "Öffnen Sie server.conf im Nano-Texteditor"
      }
    ],
    "objectives": [
      {
        "id": "opened_nano",
        "text": "Öffnen Sie die Datei „server.conf“ in Nano"
      },
      {
        "id": "port_configured",
        "text": "Fügen Sie die Konfigurationszeile „port=8080“ hinzu und speichern Sie"
      }
    ],
    "hints": [
      "Überlegen Sie, welchen terminalbasierten Texteditor Sie in der Anleitung verwenden sollen.",
      "Führen Sie nano server.conf aus, schreiben Sie „port=8080“ hinein, speichern Sie es dann mit Strg+O und beenden Sie es mit Strg+X.",
      "Versuchen Sie Folgendes: nano server.conf"
    ]
  },
  "39": {
    "title": "Schreiben Ihres ersten Bash-Skripts",
    "description": "Stellen Sie sich vor, Sie hätten eine Liste mit 20 Aufgaben, die Sie jeden Morgen ausführen müssen. Das manuelle Eintippen ist mühsam und lässt Platz für Tippfehler. Unter Linux bündeln wir Befehle in einer Datei namens Shell-Skript, damit wir sie alle auf einmal ausführen können!\n\n– Jedes Skript beginnt mit einem „shebang“ (`#!/bin/bash`) in der allerersten Zeile, um dem System mitzuteilen, welchen Shell-Interpreter es zum Ausführen der Datei verwenden soll.\n- Nachdem Sie Ihr Skript gespeichert haben, machen Sie es ausführbar, indem Sie ihm über `chmod 755 script.sh` die Ausführungsberechtigung erteilen und es dann mit `./script.sh` ausführen.",
    "instructions": "Lasst uns automatisieren! Erstellen Sie eine Datei mit dem Namen `hello.sh` in Ihrem Home-Ordner. Schreiben Sie `#!/bin/bash` in die erste Zeile und `echo \"Hello, BashQuest User!\"` in die zweite. Gewähren Sie ihm Ausführungsberechtigungen mit `chmod 755 hello.sh` und führen Sie es mit `./hello.sh` aus.",
    "commandHelp": [
      {
        "cmd": "touch hello.sh",
        "desc": "Skriptdatei erstellen"
      },
      {
        "cmd": "chmod 755 hello.sh",
        "desc": "Ausführungsberechtigungen erteilen"
      },
      {
        "cmd": "./hello.sh",
        "desc": "Skript im aktuellen Verzeichnis ausführen"
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Skriptdatei „hello.sh“ erstellen"
      },
      {
        "id": "script_content",
        "text": "Shebang- und Hallo-Nachricht im Skript hinzufügen"
      },
      {
        "id": "script_executable",
        "text": "Skript ausführbar machen (Berechtigungen mit ungerader Ziffer)"
      },
      {
        "id": "script_executed",
        "text": "Skript mit „./hello.sh“ ausführen"
      }
    ],
    "hints": [
      "Datei erstellen, Shebang- und Hallo-Nachricht hinzufügen, ausführbar machen und ausführen es.",
      "Verwenden Sie touch hello.sh, bearbeiten Sie es so, dass es #!/bin/bash und die Hallo-Nachricht enthält, dann chmod 755 hello.sh und führen Sie ./hello.sh aus.",
      "Versuchen Sie Folgendes: Berühren Sie hello.sh, schreiben Sie den Inhalt, chmod 755 hello.sh und führen Sie es mit ./hello.sh aus"
    ]
  },
  "40": {
    "title": "Variablen und Argumente ($1)",
    "description": "Stellen Sie sich vor, Sie erstellen eine personalisierte Willkommensnachricht für eine Website. Sie möchten nicht für jeden einzelnen Kundennamen ein eigenes Skript schreiben! Stattdessen schreiben Sie ein Skript, das beim Ausführen einen Namen als Eingabe verwendet.\n\n– In Bash-Skripten enthalten Variablen wie `$1`, `$2` usw. die „Argumente“ oder Eingaben, die Sie an der Befehlszeile übergeben.\n- Das Ausführen von `./greet.sh Alice` bedeutet beispielsweise, dass `$1` im Skript automatisch den Text „Alice“ enthält. Ebenso verfolgt `$#`, wie viele Eingaben der Benutzer gemacht hat.",
    "instructions": "Lassen Sie uns ein dynamisches Skript erstellen. Erstellen Sie `greet.sh` in Ihrem Home-Verzeichnis mit dem Shebang und der Zeile `echo \"Hello, $1!\"`. Machen Sie es ausführbar und führen Sie `./greet.sh Alice` aus, um es zu testen.",
    "commandHelp": [
      {
        "cmd": "./greet.sh Alice",
        "desc": "Skript mit dem Argument „Alice“ ausführen"
      }
    ],
    "objectives": [
      {
        "id": "greet_exists",
        "text": "Skriptdatei „greet.sh“ erstellen"
      },
      {
        "id": "greet_content",
        "text": "$1 in „greet.sh“ verwenden"
      },
      {
        "id": "greet_executable",
        "text": "„greet.sh“ ausführbar machen"
      },
      {
        "id": "greet_executed",
        "text": "Das Skript mit dem Argument „Alice“ ausführen"
      }
    ],
    "hints": [
      "Ein Skript mit dem Namen „greet.sh“ erstellen, mit $1 das erste Argument begrüßen, es ausführbar machen und es mit „Alice“ ausführen.",
      "Verwenden Sie echo 'Hallo, $1!' Geben Sie im Skript chmod 755greet.sh ein und führen Sie dann ./greet.sh Alice aus.",
      "Versuchen Sie Folgendes auszuführen: touchgreet.sh, fügen Sie shebang und echo „Hallo, $1!“, chmod 755greet.sh und ./greet.sh Alice hinzu"
    ]
  },
  "41": {
    "title": "Bedingte Logik (if/else)",
    "description": "Stellen Sie sich vor, Sie erstellen ein Skript, das einen CSV-Bericht verarbeitet, aber es stürzt ab, wenn die Berichtsdatei nicht tatsächlich auf der Festplatte vorhanden ist. Um Fehler zu vermeiden, schreiben wir Skripte, die Entscheidungen mithilfe der bedingten Logik `if/else` treffen.\n\n- Wir überprüfen Bedingungen mit Klammern: `if [ -f \"$1\" ]; then ... fi`.\n- Das Flag `-f` prüft, ob ein Pfad auf eine Datei verweist, während `-d` prüft, ob es sich um ein Verzeichnis handelt. Das Skript verzweigt seine Aktionen abhängig davon, ob die Bedingung wahr oder falsch ist.",
    "instructions": "Fügen wir Entscheidungslogik hinzu. Erstellen Sie `check_file.sh` in Ihrem Home-Verzeichnis, das prüft, ob der als `$1` übergebene Dateiname existiert (mithilfe von `if [ -f \"$1\" ]; then echo \"Exists\" else echo \"Missing\" fi`). Machen Sie es ausführbar und testen Sie es auf `names.txt`.",
    "commandHelp": [
      {
        "cmd": "if [ -f file ]; then ...",
        "desc": "Syntax für Dateiexistenzprüfungen"
      }
    ],
    "objectives": [
      {
        "id": "check_exists",
        "text": "Skript „check_file.sh“ erstellen"
      },
      {
        "id": "check_logic",
        "text": "-f-Prüfungen im Skript implementieren"
      },
      {
        "id": "check_executable",
        "text": "Skript ausführbar machen"
      },
      {
        "id": "check_executed",
        "text": "Skript mit „names.txt“ ausführen"
      }
    ],
    "hints": [
      "check_file.sh erstellen, eine Bedingung implementieren, um zu testen, ob das Dateinamenargument vorhanden ist, es ausführbar machen und ausführen.",
      "Verwenden Sie 'if [ -f \"$1\" ]; then echo „Exists“ else echo „Missing“ fi' in check_file.sh, machen Sie es ausführbar und führen Sie es mit der Datei „names.txt“ aus.",
      "Versuchen Sie Folgendes: Berühren Sie check_file.sh, schreiben Sie die Dateiprüflogik, chmod 755, und führen Sie ./check_file.sh namens.txt aus"
    ]
  },
  "42": {
    "title": "Automatisieren mit Schleifen",
    "description": "Stellen Sie sich vor, Sie hätten einen Ordner mit 100 Protokolldateien und müssten von jeder einzelnen eine Sicherungskopie erstellen. Sie einzeln zu kopieren wäre anstrengend. Unter Linux verwenden wir `for`-Schleifen, um dieselbe Aktion automatisch für eine ganze Liste von Elementen zu wiederholen!\n\n- Eine `for`-Schleife (wie `for file in *.txt; do ... done`) durchläuft alle Elemente, die einem Muster entsprechen, und verarbeitet sie in Sekundenbruchteilen nacheinander.",
    "instructions": "Lassen Sie uns Backups automatisieren. Erstellen Sie ein Skript mit dem Namen `backup_logs.sh`. Lassen Sie ein Verzeichnis mit dem Namen `backup` erstellen (unter Verwendung von `mkdir -p backup`) und verwenden Sie dann eine `for`-Schleife, um alle `.log`-Dateien im aktuellen Ordner in `backup` zu kopieren. Machen Sie es ausführbar und führen Sie es aus.",
    "commandHelp": [
      {
        "cmd": "for x in pattern; do ...",
        "desc": "For-Schleifen-Automatisierungssyntax"
      }
    ],
    "objectives": [
      {
        "id": "backup_script_exists",
        "text": "Skript „backup_logs.sh“ erstellen"
      },
      {
        "id": "backup_logic",
        "text": "Eine for-Schleife mit cp implementieren"
      },
      {
        "id": "backup_executed",
        "text": "Das Skript „backup_logs.sh“ ausführen"
      },
      {
        "id": "backup_dir_ok",
        "text": "Das Verzeichnis „backup/“ enthält Kopien"
      }
    ],
    "hints": [
      "Erstellen Sie „backup_logs.sh“, erstellen Sie einen Sicherungsordner, verwenden Sie eine for-Schleife, um alle .log-Dateien zu kopieren, und führen Sie es aus.",
      "Verwenden Sie mkdir -p backup, dann 'for file in *.log; do cp \"$file\" backup/; done‘ in backup_logs.sh und führen Sie es aus.",
      "Versuchen Sie Folgendes: Berühren Sie backup_logs.sh, schreiben Sie die Schleife hinein, machen Sie sie ausführbar und führen Sie ./backup_logs.sh aus"
    ]
  },
  "43": {
    "title": "Stream-Bearbeitung mit sed",
    "description": "Stellen Sie sich vor, Sie haben eine riesige Datenbank-Dump-Datei und müssen alle Vorkommen einer alten Server-IP-Adresse durch eine neue ersetzen. Wenn Sie es in einem Editor öffnen, friert Ihr Computer möglicherweise ein. Unter Linux bearbeiten wir Textströme im laufenden Betrieb mit `sed` (kurz für „Stream Editor“).\n\n- Die grundlegende Syntax ist `sed \"s/old/new/g\" file.txt` zum Suchen und Ersetzen von Text.\n– Durch das Hinzufügen des Flags `-i` (in-place) werden die Ersetzungen direkt wieder in der Datei selbst gespeichert, anstatt nur den geänderten Text auf dem Bildschirm auszugeben.\n\n**Warum das wichtig ist**: Wenn Sie `sed \"s/port=80/port=8080/g\" server.conf` ohne `-i` ausführen, wird nur der geänderte Text auf Ihrem Terminalbildschirm gedruckt. Die eigentliche Datei bleibt völlig unverändert. Das Flag `-i` (in-place) ist erforderlich, um die Änderungen direkt wieder in der Datei zu speichern.",
    "instructions": "Lassen Sie uns eine Einstellung aktualisieren. Bearbeiten Sie `server.conf` in Ihrem Home-Ordner. Ändern Sie `port=80` direkt in `port=8080`, indem Sie `sed -i \"s/port=80/port=8080/g\" server.conf` ausführen.",
    "commandHelp": [
      {
        "cmd": "sed -i \"s/old/new/g\" file",
        "desc": "Direkte Textersetzung in einer Datei durchführen"
      }
    ],
    "objectives": [
      {
        "id": "used_sed",
        "text": "Verwenden Sie den Befehl „sed“ mit dem Flag -i."
      },
      {
        "id": "port_changed",
        "text": "Stellen Sie die Portkonfiguration in server.conf auf port=8080 ein."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl die Stream-Bearbeitung und die Suche/Ersetzung durchführt.",
      "Verwenden Sie sed mit der In-Place-Option (-i), um „port=80“ durch „port=8080“ zu ersetzen.",
      "Versuchen Sie Folgendes auszuführen: sed -i \"s/port=80/port=8080/g\" server.conf"
    ]
  },
  "44": {
    "title": "Datenextraktion mit awk",
    "description": "Stellen Sie sich vor, Sie erhalten eine große Tabelle, die als einfacher Text gespeichert ist, in der die Spalten durch Kommas oder Leerzeichen getrennt sind und Sie nur die allererste Datenspalte extrahieren müssen. Unter Linux analysieren wir strukturierte Textspalten mit der leistungsstarken Sprache `awk`.\n\n- Standardmäßig teilt `awk` Zeilen durch Leerzeichen auf und weist Spalte 1 `$1`, Spalte 2 `$2` usw. zu.\n– Mit dem Flag `-F` können Sie ein benutzerdefiniertes Trennzeichen angeben (z. B. `-F:` für Doppelpunkte). Beispielsweise extrahiert `awk -F: '{print $1}' /etc/passwd` nur die Benutzernamen aus einer durch Doppelpunkte getrennten Liste.\n\n**Warum das wichtig ist**: Wenn Sie `awk '{print $1}' /etc/shadow` ohne `-F:` ausführen, teilt `awk` Zeilen durch Leerzeichen (Standardeinstellung) und nicht durch Doppelpunkte. Da Schattendateizeilen keine Leerzeichen enthalten, wird die gesamte Zeile als einzelnes Feld behandelt und die vollständigen Hash-Details jedes Benutzers gedruckt. Das Flag `-F:` zwingt `awk` dazu, Spalten stattdessen durch Doppelpunkte zu teilen.",
    "instructions": "Lassen Sie uns einige Daten extrahieren. Rufen Sie alle Benutzernamen (die erste Spalte) aus `/etc/shadow` ab, indem Sie `awk` mit einem Doppelpunkt als Trennzeichen `:` verwenden, und speichern Sie sie in `shadow_users.txt`, indem Sie `sudo awk -F: '{print $1}' /etc/shadow > shadow_users.txt` verwenden.",
    "commandHelp": [
      {
        "cmd": "awk -F: '{print $1}' file",
        "desc": "Erstes Feld der durch Doppelpunkte getrennten Datei drucken"
      }
    ],
    "objectives": [
      {
        "id": "used_awk",
        "text": "Verwenden Sie „awk“ mit dem Feldtrenner-Flag -F"
      },
      {
        "id": "created_shadow_users",
        "text": "Geben Sie Namen in „shadow_users.txt“ aus"
      },
      {
        "id": "correct_shadow_users",
        "text": "Überprüfen Sie, ob „shadow_users.txt“ Root und Learner hat"
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Datenspalten mithilfe eines benutzerdefinierten Feldtrennzeichens aufteilt.",
      "Verwenden Sie awk mit -F:, um die erste Spalte ($1) von /etc/shadow mit sudo zu drucken und die Ausgabe anshadow_users.txt umzuleiten.",
      "Versuchen Sie Folgendes auszuführen: sudo awk -F: '{print $1}' /etc/shadow >shadow_users.txt"
    ]
  },
  "45": {
    "title": "Übersetzen und Schneiden von Daten",
    "description": "Stellen Sie sich vor, Sie arbeiten mit einer CSV-Tabelle mit Transaktionsdaten und -namen. Sie möchten nur die erste Spalte (Datumsangaben) extrahieren und den gesamten Text aus Konsistenzgründen in Großbuchstaben umwandeln. Unter Linux können wir leichtgewichtige Parsing-Tools in einer Pipeline kombinieren:\n\n– Der Befehl `cut` schneidet bestimmte Spalten aus strukturiertem Text heraus. Beispielsweise teilt `cut -d, -f1` Zeilen durch Kommas auf (`-d,`) und extrahiert die erste Spalte (`-f1`).\n– Der Befehl `tr` (übersetzen) wandelt Zeichen aus der Standardeingabe um, indem er beispielsweise Kleinbuchstaben durch Großbuchstaben ersetzt (`tr \"a-z\" \"A-Z\"`).\n\n**Warum das wichtig ist**: Wenn Sie `cut reports.csv` ohne `-d,` und `-f1` ausführen, erhalten Sie: `cut: you must specify a list of bytes, characters, or fields`. Wenn Sie `-f1` angeben, aber `-d,` weglassen, werden standardmäßig Tabulatoren verwendet, was bedeutet, dass eine CSV-Datei nicht geteilt wird, sondern nur die gesamte Zeile gedruckt wird. Das Flag `-d,` definiert das Komma als Spaltentrennzeichen und `-f1` weist es an, nur die erste Spalte zu extrahieren.",
    "instructions": "Lassen Sie uns Daten aufteilen und transformieren. Extrahieren Sie die erste Spalte von `reports.csv` mit `cut -d, -f1 reports.csv`, leiten Sie sie an `tr \"a-z\" \"A-Z\"` weiter, um sie in Großbuchstaben umzuwandeln, und leiten Sie das Endergebnis an `upper_reports.txt` um.",
    "commandHelp": [
      {
        "cmd": "cut -d, -f1 file | tr \"a-z\" \"A-Z\"",
        "desc": "Ausgeschnittenes Feld in Übersetzung umwandeln"
      }
    ],
    "objectives": [
      {
        "id": "used_cut",
        "text": "Verwenden Sie „cut“ mit Komma-Trennzeichen"
      },
      {
        "id": "used_tr",
        "text": "Übersetzen Sie Zeichen mit „tr“ in Großbuchstaben"
      },
      {
        "id": "upper_reports_exists",
        "text": "Erstellen Sie die Datei „upper_reports.txt“"
      },
      {
        "id": "content_uppercase",
        "text": "Überprüfen Sie, ob der Text GROSSBUCHSTABEN ist"
      }
    ],
    "hints": [
      "Sie müssen „reports.csv“ in Scheiben schneiden, um die erste Spalte zu extrahieren, in Großbuchstaben umwandeln und speichern.",
      "Verwenden Sie cut -d, -f1 reporting.csv, leiten Sie es per Pipe (|) in tr „a-z“ „A-Z“ und leiten Sie (>) zu Upper_reports.txt um.",
      "Versuchen Sie Folgendes auszuführen: cut -d, -f1 reporting.csv | tr „a-z“ „A-Z“ > Upper_reports.txt"
    ]
  },
  "46": {
    "title": "Verwalten von Umgebungsvariablen",
    "description": "Stellen Sie sich vor, Sie stellen eine Webanwendung bereit und diese muss wissen, ob sie in einer sicheren lokalen „Entwicklungs“-Sandbox ausgeführt oder mit der Live-„Produktions“-Datenbank verbunden werden soll. Unter Linux übergeben wir Konfigurationen wie diese mithilfe von **Umgebungsvariablen** an laufende Programme.\n\n- Wir verwenden den Befehl `export`, um eine Variable zu definieren, damit alle von unserer Shell gestarteten Programme sie lesen können. Z. B. `export APP_ENV=production`.\n- Um den Wert einer Variablen zu überprüfen oder anzuzeigen, stellen wir ihrem Namen ein Dollarzeichen voran: `echo $APP_ENV`.",
    "instructions": "Lassen Sie uns die Umgebung konfigurieren. Legen Sie eine Variable namens `APP_ENV` mit dem Wert `production` fest, exportieren Sie sie, indem Sie `export APP_ENV=production` ausführen, und überprüfen Sie sie dann, indem Sie `echo $APP_ENV` ausführen.",
    "commandHelp": [
      {
        "cmd": "export VAR=val",
        "desc": "Umgebungsvariable definieren"
      },
      {
        "cmd": "echo $VAR",
        "desc": "Variablenwert drucken"
      }
    ],
    "objectives": [
      {
        "id": "exported_env",
        "text": "Befehl „export“ ausführen"
      },
      {
        "id": "env_correct",
        "text": "Umgebungsvariable APP_ENV auf „Produktion“ setzen"
      },
      {
        "id": "echoed_env",
        "text": "Variable mit „echo $APP_ENV“ drucken"
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Umgebungsvariablen definiert.",
      "Verwenden Sie export APP_ENV=produktion und drucken Sie es mit echo $APP_ENV aus.",
      "Versuchen Sie Folgendes auszuführen: export APP_ENV=produktion gefolgt von echo $APP_ENV"
    ]
  },
  "47": {
    "title": "Archive & Komprimierung (tar)",
    "description": "Stellen Sie sich vor, Sie haben einen Ordner mit 500 Serverprotokollen und möchten ihn per E-Mail an einen Kollegen senden oder im Cloud-Speicher sichern. Das Senden von 500 einzelnen Dateien ist langsam und ineffizient. Unter Linux komprimieren wir sie mit `tar` (kurz für „Tape Archive“) in eine einzige, kompakte ZIP-Datei.\n\n- Wir erstellen komprimierte Archive mit den Flags: `-c` (erstellen), `-z` (mit gzip komprimieren), `-v` (ausführliche Auflistung der Dateien) und `-f` (Dateinamen angeben). Beispielsweise bündelt und komprimiert `tar -czvf backup.tar.gz folder/` das Verzeichnis.\n\n**Warum das wichtig ist**: Wenn Sie `tar -cz logs.tar.gz logs` ohne `-f` ausführen, erhalten Sie: `tar: Refusing to write archive contents to terminal`. Das Flag `-f` ist von entscheidender Bedeutung, da es `tar` anweist, die Ausgabe in eine Datei zu schreiben, anstatt rohe Binärarchivdaten direkt an Ihr Terminal zu senden. Die Flags `-c` und `-z` sind außerdem erforderlich, um das Archiv zu erstellen bzw. zu komprimieren.",
    "instructions": "Verpacken wir unsere Protokolle. Bündeln und komprimieren Sie den Ordner `logs` in `/home/learner` in einer Datei mit dem Namen `logs.tar.gz`, indem Sie `tar -czvf logs.tar.gz logs` ausführen.",
    "commandHelp": [
      {
        "cmd": "tar -czvf archive.tar.gz folder",
        "desc": "Erstellen Sie ein komprimiertes TAR-Archiv."
      }
    ],
    "objectives": [
      {
        "id": "used_tar_c",
        "text": "Verwenden Sie den Befehl „tar“ mit den Flags -c (erstellen) und -z (gzip)."
      },
      {
        "id": "archive_exists",
        "text": "Erstellen Sie „logs.tar.gz“ im Home-Verzeichnis."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Ordner in Tarball-Archiven packt und komprimiert.",
      "Verwenden Sie tar mit den Optionen create (-c), gzip (-z), verbose (-v) und file (-f).",
      "Versuchen Sie Folgendes auszuführen: tar -czvf logs.tar.gz logs"
    ]
  },
  "48": {
    "title": "Untersuchen der Umgebung",
    "description": "Stellen Sie sich vor, Sie versuchen, ein Skript zu debuggen, das immer wieder fehlschlägt, weil es den Pfad eines Programms nicht finden kann, oder Sie möchten sehen, welches Benutzerkonto in diesem Terminal aktiv ist. Unter Linux werden alle diese sitzungsweiten Konfigurationen zusammen gespeichert.\n\n– Der Befehl `env` gibt ein vollständiges Verzeichnis aller derzeit in Ihrer aktiven Sitzung geladenen Umgebungsvariablen aus, sodass Sie Konfigurationen auf einmal überprüfen können.",
    "instructions": "Sehen wir uns die Umgebungsliste an. Drucken Sie alle aktiven Umgebungsvariablen in Ihrer Terminalsitzung, indem Sie den Befehl `env` ausführen.",
    "commandHelp": [
      {
        "cmd": "env",
        "desc": "Aktive Umgebungsvariablen auflisten"
      }
    ],
    "objectives": [
      {
        "id": "ran_env",
        "text": "Führen Sie den Befehl „env“ aus."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl alle aktiven Umgebungsvariablen ausgibt.",
      "Verwenden Sie den Befehl „env“.",
      "Versuchen Sie Folgendes: env"
    ]
  },
  "49": {
    "title": "Erstellen von Links (ln -s)",
    "description": "Stellen Sie sich vor, Sie haben eine Konfigurationsdatei tief in einem verschachtelten Ordner, sagen wir `/var/www/html/configs/app/settings.conf`, aber Sie müssen sie ständig bearbeiten. Anstatt jedes Mal den langen Ordnerpfad einzugeben, möchten Sie eine schnelle Desktop-Verknüpfung. Unter Linux tun wir dies, indem wir Links erstellen.\n\n- **Hard Link**: Ein direkter Klon, der auf die Rohdaten der Datei verweist. Wenn Sie die Originaldatei löschen, funktioniert der Link weiterhin.\n- **Symbolischer Link (Soft Link)**: Eine pfadbasierte Verknüpfung (genau wie Windows-Verknüpfungen). Wenn Sie die Originaldatei löschen, wird die Verknüpfung unterbrochen. Wir erstellen sie mit `ln -s target link_name`.\n\n**Warum das wichtig ist**: Wenn Sie `ln logs/app.log app_link.log` ohne `-s` ausführen, erstellen Sie einen festen Link anstelle einer symbolischen Verknüpfung. Wenn sich die Dateien auf verschiedenen Festplattenpartitionen befinden, erhalten Sie: `ln: failed to create hard link: Invalid cross-device link`. Das Flag `-s` erstellt einen flexiblen symbolischen Link (Verknüpfung), der über verschiedene Laufwerke und Verzeichnisse hinweg funktioniert.",
    "instructions": "Lassen Sie uns eine Verknüpfung erstellen. Erstellen Sie einen symbolischen Link mit dem Namen `app_link.log` in `/home/learner`, der auf die Zieldatei `logs/app.log` verweist, indem Sie `ln -s logs/app.log app_link.log` ausführen.",
    "commandHelp": [
      {
        "cmd": "ln -s target link_name",
        "desc": "Symbolischen Link erstellen"
      }
    ],
    "objectives": [
      {
        "id": "used_ln_s",
        "text": "Verwenden Sie „ln“ mit dem symbolischen Flag -s"
      },
      {
        "id": "link_created",
        "text": "Erstellen Sie den Link „app_link.log“, der auf Zielprotokolle/app.log verweist."
      }
    ],
    "hints": [
      "Überlegen Sie, welcher Befehl Dateiverknüpfungen/Links erstellt.",
      "Verwenden Sie „ln -s“ mit dem Zielpfad, gefolgt vom Linknamen.",
      "Versuchen Sie Folgendes: ln -s logs/app.log app_link.log"
    ]
  },
  "50": {
    "title": "Suchergebnisse verarbeiten (xargs)",
    "description": "Stellen Sie sich vor, Sie hätten eine Suche durchgeführt, bei der 100 temporäre Dateien gefunden wurden, und Sie möchten diese nun alle löschen. Die Suchausgabe ist lediglich eine Liste von Textnamen auf Ihrem Bildschirm – wie geben Sie diese Namen als direkte Eingaben an den Löschbefehl ein? Unter Linux schließen wir diese Lücke mit `xargs`.\n\n- Der Befehl `xargs` (Argumente ausführen) übernimmt Standardeingabezeilen (wie die Dateiliste von `find`) und gibt sie einzeln als Argumente an einen anderen Befehl weiter.\n– Beispielsweise findet `find . -name \"*.tmp\" | xargs rm` alle temporären Dateien und entfernt sie alle in einem einzigen Durchlauf.",
    "instructions": "Lassen Sie uns einige Suchergebnisse verarbeiten. Suchen Sie alle `.log`-Dateien in `/home/learner/logs` mit `find logs -name \"*.log\"` und leiten Sie sie an `xargs wc -l` weiter, um alle ihre Zeilen gemeinsam zu zählen.",
    "commandHelp": [
      {
        "cmd": "find path -name \"pattern\" | xargs command",
        "desc": "Übergeben Sie Suchergebnisse an den Befehl"
      }
    ],
    "objectives": [
      {
        "id": "used_find",
        "text": "Führen Sie den Befehl „find“ im Protokollordner aus."
      },
      {
        "id": "used_xargs",
        "text": "Leiten Sie die Ergebnisse an „xargs“ weiter."
      },
      {
        "id": "ran_wc_l",
        "text": "Führen Sie „wc -l“ über die xargs-Pipeline aus."
      }
    ],
    "hints": [
      "Suchen Sie nach allen Protokolldateien und leiten Sie die Namen mithilfe von xargs an wc -l weiter.",
      "Verwenden Sie find logs -name „*.log“ und leiten Sie es per Pipe (|) an xargs wc -l weiter.",
      "Versuchen Sie Folgendes: find logs -name \"*.log\" | xargs wc -l"
    ]
  },
  "51": {
    "title": "Einen Blick auf Dateien werfen (Kopf und Ende)",
    "description": "Da Sie nun mit `cat` eine ganze Datei lesen können, stellt sich die Frage, ob die Datei Tausende von Zeilen enthält und Sie nur den oberen oder unteren Rand sehen möchten. Das Dumpen einer riesigen Datei mit `cat` überschwemmt Ihren Bildschirm. Stattdessen verwenden wir `head` und `tail`, um einen Blick auf die Kanten zu werfen.\n\n– Der Befehl `head` zeigt standardmäßig die ersten 10 Zeilen einer Datei an. Sie können dies mit `-n <number>` ändern (z. B. `head -n 5 log.txt` für die ersten 5 Zeilen).\n– Der Befehl `tail` zeigt standardmäßig die letzten 10 Zeilen an und unterstützt dieselbe `-n`-Option.\n- Entscheidend ist, dass `tail -f` (folgen) eine Datei in Echtzeit überwacht und neue Zeilen anzeigt, während sie vom System geschrieben werden. Dies ist das beliebteste Tool eines Systemadministrators zum Ansehen von Live-Protokollen.",
    "instructions": "Sehen wir uns die Protokolle an. Verwenden Sie `head -n 5 logs/app.log`, um die ersten fünf Zeilen des Anwendungsprotokolls anzuzeigen. Führen Sie als Nächstes `tail -n 3 logs/security.log` aus, um die letzten drei Sicherheitsereignisse anzuzeigen. Führen Sie abschließend `tail -f logs/app.log` aus, um die Protokollüberwachung in Echtzeit zu simulieren (es werden Scheineinträge gedruckt und beendet).",
    "commandHelp": [
      {
        "cmd": "head -n 5 logs/app.log",
        "desc": "Zeigt die ersten 5 Zeilen von app.log an."
      },
      {
        "cmd": "tail -n 3 logs/security.log",
        "desc": "Zeigt die letzten 3 Zeilen von security.log an."
      },
      {
        "cmd": "tail -f logs/app.log",
        "desc": "Überwacht app.log-Updates in Echtzeit."
      }
    ],
    "objectives": [
      {
        "id": "used_head",
        "text": "Führen Sie den Befehl „head“ mit -n 5 für logs/app.log aus."
      },
      {
        "id": "used_tail",
        "text": "Führen Sie den Befehl „tail“ mit -n 3 für logs/security.log aus."
      },
      {
        "id": "used_tail_f",
        "text": "Führen Sie den Befehl „tail“ mit -f aus, um app.log zu folgen."
      }
    ],
    "hints": [
      "Verwenden Sie head -n 5 gefolgt vom Dateinamen und tail -n 3 gefolgt vom Sicherheitsprotokollpfad.",
      "Um Live-Protokolle zu verfolgen, fügen Sie die Option -f zum Befehl tail hinzu.",
      "Versuchen Sie Folgendes auszuführen: head -n 5 logs/app.log, dann tail -n 3 logs/security.log und schließlich tail -f logs/app.log"
    ]
  },
  "52": {
    "title": "Interaktives Scrollen von Dateien (weniger und mehr)",
    "description": "Der Blick auf den Anfang und das Ende einer Datei mit `head` und `tail` ist großartig, aber was ist, wenn Sie eine lange Konfigurationsdatei Seite für Seite durchsuchen müssen? Dafür gibt es Pager wie `less` und `more`.\n\n- Pager laden Dateien interaktiv und zeigen jeweils eine Textseite an, um eine Systemverlangsamung bei großen Dateien zu verhindern.\n- `less` ist die moderne Wahl, mit der Sie mit den Pfeiltasten vorwärts und rückwärts scrollen, mit `/` nach Text suchen und durch Drücken von `q` beenden können.\n- `more` ist ein älterer, einfacherer Pager, der nur vorwärts scrollt.",
    "instructions": "Lassen Sie uns Seite für Seite eine lange Datei lesen. Führen Sie `less /etc/hosts` aus, um es in einer Scrollansicht zu öffnen. (In unserem Terminal wird dadurch der Inhalt in einem scrollbaren Rahmen ausgegeben. Drücken Sie `q`, um zurückzukehren.)",
    "commandHelp": [
      {
        "cmd": "less /etc/hosts",
        "desc": "Hosts-Datei im Less-Pager öffnen"
      },
      {
        "cmd": "more /etc/hosts",
        "desc": "Hosts-Datei im More-Pager öffnen"
      }
    ],
    "objectives": [
      {
        "id": "used_less",
        "text": "/etc/hosts in einem Pager öffnen (less oder more)"
      }
    ],
    "hints": [
      "Verwenden Sie den Befehl „less“ oder „more“ im Dateipfad /etc/hosts.",
      "Versuchen Sie Folgendes: less /etc/hosts"
    ]
  },
  "53": {
    "title": "Systemprotokollierung (journalctl)",
    "description": "Da Sie nun Hintergrunddienste mit `systemctl` starten und stoppen können, wie beheben Sie Fehler, wenn sie ausfallen? Mit dem Dienstprogramm `journalctl` können Sie Systemprotokolle überprüfen, die von von systemd verwalteten Diensten generiert werden.\n\n– Standardmäßig zeigt `journalctl` alle Systemprotokolle an. Da dies massiv sein kann, filtern wir sie, um konzentriert zu bleiben.\n– Die Option `-u <service>` filtert Protokolle, um nur Nachrichten von einem bestimmten Dienst anzuzeigen (z. B. `journalctl -u apache2`).\n- Die Option `-n <number>` zeigt nur die neuesten Einträge an (z. B. `journalctl -n 5` für die letzten 5 Protokolle).\n– Das Flag `-f` (follow) zeigt Protokolle in Echtzeit an, während sie geschrieben werden.",
    "instructions": "Lassen Sie uns die Webserverprotokolle untersuchen. Führen Sie `journalctl -u apache2` aus, um Systemprotokolle für den `apache2`-Dienst zu filtern. Führen Sie dann `journalctl -n 5` aus, um die letzten fünf allgemeinen Systemprotokollmeldungen anzuzeigen.",
    "commandHelp": [
      {
        "cmd": "journalctl -u apache2",
        "desc": "Protokolle für den Apache2-Dienst anzeigen"
      },
      {
        "cmd": "journalctl -n 5",
        "desc": "Die letzten 5 Systemprotokollmeldungen anzeigen"
      }
    ],
    "objectives": [
      {
        "id": "used_journalctl_u",
        "text": "Protokolle für den Apache2-Dienst mit „journalctl -u“ filtern"
      },
      {
        "id": "used_journalctl_n",
        "text": "Die letzten Protokolleinträge mit „journalctl -n“ anzeigen"
      }
    ],
    "hints": [
      "Verwenden Sie „journalctl“ mit der Option „-u“ auf „apache2“, um Webserverprotokolle anzuzeigen.",
      "Um die Protokolle auf die letzten 5 Zeilen zu beschränken, verwenden Sie „journalctl -n 5“.",
      "Führen Sie Folgendes aus: „journalctl -u apache2“ und dann: „journalctl -n 5“."
    ]
  },
  "54": {
    "title": "Wiederverwendbare Logik (Bash-Funktionen)",
    "description": "Sie haben Schleifen und Bedingungen geschrieben, um Aktionen in Skripten zu automatisieren. Wenn Ihre Skripte jedoch wachsen, wird es schwierig, sie immer wieder zu verwalten, wenn Sie immer wieder dieselbe Logik kopieren. In Bash können wir Befehle in wiederverwendbare Funktionen gruppieren.\n\n- Um eine Funktion zu definieren, deklarieren wir sie mit ihrem Namen, gefolgt von Klammern und geschweiften Klammern: `log_msg() { echo \"msg\"; }`.\n– Funktionen können wie Shell-Skripte Argumente empfangen, auf die über lokale Positionsparameter `$1`, `$2` usw. im Funktionskörper zugegriffen wird.\n- Um eine Funktion aufzurufen, verwenden Sie einfach ihren Namen wie jeden anderen Befehl: `log_msg \"Backup started\"`.",
    "instructions": "Lassen Sie uns ein modulares Backup-Skript erstellen. Erstellen Sie ein Skript mit dem Namen `backup_helper.sh` in Ihrem Home-Ordner. Definieren Sie eine Funktion namens `log_msg`, die eine Nachricht mit einem Zeitstempel (z. B. `log_msg() { echo \"[$(date +%T)] $1\"; }` oder ähnlich) ausgibt, und rufen Sie sie mindestens zweimal im Skript auf, um Aktionen zu protokollieren. Machen Sie es ausführbar und führen Sie es aus.",
    "commandHelp": [
      {
        "cmd": "func_name() { ... }",
        "desc": "Definieren Sie eine Funktion in Bash."
      }
    ],
    "objectives": [
      {
        "id": "script_exists",
        "text": "Erstellen Sie die Skriptdatei „backup_helper.sh“ im Home-Bereich."
      },
      {
        "id": "has_function",
        "text": "Definieren Sie die Funktion log_msg im Skript."
      },
      {
        "id": "script_executed",
        "text": "Machen Sie das Skript ausführbar und führen Sie es aus."
      }
    ],
    "hints": [
      "Verwenden Sie touch backup_helper.sh, bearbeiten Sie es dann, um Shebang #!/bin/bash, log_msg() { ... } einzuschließen, und rufen Sie log_msg zweimal auf.",
      "Denken Sie daran, chmod 755 backup_helper.sh auszuführen, um es ausführbar zu machen, bevor Sie ./backup_helper.sh ausführen.",
      "Versuchen Sie, die Funktion zu definieren: log_msg() { echo \"[LOG] $1\"; } und rufen Sie es dann wie folgt auf: log_msg 'Starting'"
    ]
  },
  "55": {
    "title": "Aufgaben planen (crontab)",
    "description": "Nachdem Sie nun robuste Shell-Skripte geschrieben haben, möchten Sie sich nicht mehr um Mitternacht anmelden, nur um Ihren Backup-Helfer auszuführen. Linux bietet den Dienst `cron`, um Befehle oder Skripte zu bestimmten Zeiten automatisch auszuführen.\n\n– Der Cron-Dienst überprüft eine Planungstabelle namens `crontab`.\n– Jeder Cron-Zeitplan verfügt über 5 Felder, die die Zeit darstellen: `minute hour day-of-month month day-of-week` gefolgt vom Befehl.\n– Beispielsweise führt `30 2 * * * /path/to/script.sh` jeden Tag um 2:30 Uhr ein Skript aus.\n- Wir verwenden `crontab -l`, um unsere aktiven Cron-Jobs aufzulisten, und `crontab <filename>`, um Zeitpläne aus einer Datei zu laden.",
    "instructions": "Lassen Sie uns unseren Backup-Helfer automatisieren. Schreiben Sie eine Cron-Planungszeichenfolge in eine Datei mit dem Namen `my_cron` (z. B. `* * * * * /home/learner/backup_helper.sh`, um jede Minute ausgeführt zu werden). Installieren Sie diesen Zeitplan, indem Sie `crontab my_cron` ausführen, und überprüfen Sie ihn, indem Sie `crontab -l` ausführen.",
    "commandHelp": [
      {
        "cmd": "crontab my_cron",
        "desc": "Cron-Jobs aus der Datei my_cron installieren"
      },
      {
        "cmd": "crontab -l",
        "desc": "Aktive Cron-Jobs für den aktuellen Benutzer auflisten"
      }
    ],
    "objectives": [
      {
        "id": "cron_file_created",
        "text": "Datei „my_cron“ in Home mit Cron-Zeitplan erstellen"
      },
      {
        "id": "cron_installed",
        "text": "Cron-Zeitplan mit Crontab my_cron installieren"
      },
      {
        "id": "cron_listed",
        "text": "Aktiven Cron-Zeitplan mit crontab -l auflisten"
      }
    ],
    "hints": [
      "Echo '* * * * * /home/learner/backup_helper.sh' > verwenden my_cron, um die Cron-Datei zu erstellen.",
      "Laden Sie die Cron-Datei in die Crontab-Tabelle, indem Sie crontab my_cron ausführen.",
      "Überprüfen Sie die installierten Cron-Jobs mit crontab -l"
    ]
  },
  "56": {
    "title": "Befehle finden (die)",
    "description": "Nachdem Sie nun mit aktiven Umgebungsvariablen wie `PATH` (der die Verzeichnisse speichert, in denen Linux nach Befehlen sucht) vertraut sind, wie finden Sie den genauen Dateipfad des Programms, das ausgeführt wird, wenn Sie `ls` oder `grep` eingeben? Wir verwenden `which`, um Befehlsbinärdateien zu finden.\n\n– Der Befehl `which` durchsucht die in Ihrer Variable `$PATH` aufgeführten Ordner und gibt den absoluten Pfad der Binärdatei aus, die ausgeführt wird, wenn der Befehl ausgeführt wird (z. B. `which ls` gibt `/bin/ls` aus).\n– Dies ist nützlich, um herauszufinden, wo ein Tool installiert ist, oder um Konflikte zwischen mehreren Versionen desselben Tools zu lösen.",
    "instructions": "Finden wir unsere Werkzeuge. Führen Sie `which ls` aus, um zu sehen, wo die ausführbare Datei `ls` auf dem System gespeichert ist. Suchen Sie dann den Pfad des Befehls `grep`, indem Sie `which grep` ausführen.",
    "commandHelp": [
      {
        "cmd": "which ls",
        "desc": "Absoluten Pfad von ls finden"
      },
      {
        "cmd": "which grep",
        "desc": "Absoluten Pfad von grep finden"
      }
    ],
    "objectives": [
      {
        "id": "used_which_ls",
        "text": "Den Befehl „which“ auf ls ausführen"
      },
      {
        "id": "used_which_grep",
        "text": "Den Befehl „which“ auf grep ausführen"
      }
    ],
    "hints": [
      "Führen Sie which ls aus, um den Pfad von ls zu finden, und which grep, um den Pfad von grep zu finden.",
      "Versuchen Sie Folgendes auszuführen: which ls und dann which grep"
    ]
  },
  "57": {
    "title": "Benutzerdefinierte Shell-Verknüpfungen (Alias)",
    "description": "Das Eingeben langer Befehle mit mehreren Flags kann anstrengend werden. Unter Linux können wir benutzerdefinierte Verknüpfungen erstellen, die Aliase genannt werden. Beispielsweise können Sie `ll` so zuordnen, dass `ls -la` automatisch ausgeführt wird.\n\n- Um einen temporären Alias ​​zu erstellen, führen Sie `alias name='command'` aus (z. B. `alias ll='ls -la'`).\n– Wenn Sie `alias` ohne Argumente ausführen, werden alle aktiven Aliase in der aktuellen Sitzung aufgelistet.\n– Um Aliase über Neustarts hinweg dauerhaft zu machen, werden sie normalerweise in die Konfigurationsdateien `.bashrc` oder `.bash_profile` geschrieben.",
    "instructions": "Lassen Sie uns einige Verknüpfungen einrichten. Erstellen Sie einen temporären Alias ​​mit dem Namen `la`, der `ls -a` ausführt, indem Sie `alias la='ls -a'` ausführen. Testen Sie es, indem Sie `la` in Ihrem Terminal ausführen.",
    "commandHelp": [
      {
        "cmd": "alias la='ls -a'",
        "desc": "Alias ​​la zum Ausführen von ls -a"
      },
      {
        "cmd": "alias",
        "desc": "Aktive Aliase auflisten"
      }
    ],
    "objectives": [
      {
        "id": "alias_created",
        "text": "Alias ​​la für ls -a erstellen"
      },
      {
        "id": "alias_run",
        "text": "Den neu erstellten Alias ​​la ausführen"
      }
    ],
    "hints": [
      "Definieren Sie den Alias ​​mit alias la='ls -a' genau wie gezeigt.",
      "Führen Sie den Befehl alias la im Terminal aus, um zu überprüfen, ob er funktioniert.",
      "Versuchen Sie Folgendes auszuführen: alias la='ls -a' gefolgt von: la"
    ]
  },
  "58": {
    "title": "Benutzerverwaltung (useradd & passwd)",
    "description": "Bisher haben Sie als Benutzer `learner` gearbeitet. Auf realen Servern müssen Systemadministratoren jedoch mehrere Konten verwalten. Erfahren Sie, wie Sie neue Benutzer hinzufügen und ihre Passwörter festlegen.\n\n- Der Befehl `useradd` erstellt ein brandneues Benutzerkonto. Da das Erstellen von Konten Auswirkungen auf die Systemsicherheit hat, muss es mit Superuser-Berechtigungen ausgeführt werden (z. B. `sudo useradd deployer`).\n– Der Befehl `passwd` legt das Passwort eines Benutzers fest oder ändert es. Führen Sie es als `sudo passwd deployer` aus, um das Kennwort des Deployer-Benutzers festzulegen.",
    "instructions": "Fügen wir das Konto eines Kollegen hinzu. Erstellen Sie einen neuen Benutzer mit dem Namen `deployer`, indem Sie `sudo useradd deployer` ausführen. Legen Sie dann ein Passwort für sie fest, indem Sie `sudo passwd deployer` ausführen (geben Sie ein beliebiges Scheinpasswort ein, wenn Sie dazu aufgefordert werden).",
    "commandHelp": [
      {
        "cmd": "sudo useradd deployer",
        "desc": "Neuen Benutzer-Deployer erstellen"
      },
      {
        "cmd": "sudo passwd deployer",
        "desc": "Kennwort für Benutzer-Deployer festlegen"
      }
    ],
    "objectives": [
      {
        "id": "user_created",
        "text": "Benutzer „deployer“ mit useradd erstellen"
      },
      {
        "id": "passwd_changed",
        "text": "Kennwort für „deployer“ mit passwd festlegen"
      }
    ],
    "hints": [
      "Verwenden Sie sudo useradd deployer, um das Benutzerkonto zu registrieren.",
      "Legen Sie das Passwort fest, indem Sie sudo passwdployer ausführen.",
      "Führen Sie Folgendes aus: sudo useraddployer und dann: sudo passwdployer"
    ]
  },
  "59": {
    "title": "Sicherheitskontexte wechseln (su)",
    "description": "Nachdem Sie nun das Konto `deployer` erstellt haben, wie melden Sie sich lokal an, um seine Umgebung zu testen? Unter Linux verwenden wir den Befehl `su` (substitute user), um Konten zu wechseln, ohne uns abzumelden.\n\n– Der Befehl `su <username>` schaltet die aktuelle Terminal-Shell auf die Sitzung dieses Benutzers um.\n– Bei der Umstellung wird beim Ausführen von `whoami` der neue Benutzername angezeigt.\n- Um zu Ihrer ursprünglichen Benutzerkontositzung zurückzukehren, geben Sie `exit` ein oder drücken Sie `Ctrl+D`.",
    "instructions": "Lassen Sie uns den Kontext wechseln. Wechseln Sie zum Benutzer `deployer`, indem Sie `su deployer` ausführen. Führen Sie nach der Anmeldung `whoami` aus, um zu überprüfen, ob Sie tatsächlich als `deployer` ausgeführt werden. Wenn Sie fertig sind, geben Sie `exit` ein, um zurückzuschalten.",
    "commandHelp": [
      {
        "cmd": "su deployer",
        "desc": "Ersetzen Sie die Benutzersitzung durch den Deployer."
      },
      {
        "cmd": "whoami",
        "desc": "Überprüfen Sie den Namen der aktiven Benutzersitzung."
      },
      {
        "cmd": "exit",
        "desc": "Beenden Sie die aktive Benutzersitzung."
      }
    ],
    "objectives": [
      {
        "id": "switched_user",
        "text": "Wechseln Sie den Shell-Kontext mit su zum Deployer."
      },
      {
        "id": "verified_whoami",
        "text": "Führen Sie whoami aus, um zu bestätigen, dass Sie Deployer sind."
      }
    ],
    "hints": [
      "Verwenden Sie su Deployer, um zur Deployer-Shell-Sitzung zu wechseln.",
      "Überprüfen Sie, wer aktiv ist, indem Sie whoami eingeben.",
      "Versuchen Sie Folgendes auszuführen: suployer, dann whoami und dann beenden"
    ]
  },
  "60": {
    "title": "Secure Shell Access (ssh)",
    "description": "Der lokale Wechsel von Benutzern ist nützlich, aber beim Cloud Computing befinden sich Server in entfernten Rechenzentren. Um eine sichere Verbindung über das Netzwerk herzustellen, verwenden wir `ssh` (Secure Shell).\n\n– Der Befehl `ssh` verschlüsselt die Verbindung zwischen Ihrem Computer und einem Remote-Host, um Abhören zu verhindern.\n- Syntax: `ssh user@hostname` oder `ssh user@ip_address` (z. B. `ssh admin@192.168.1.100`).\n- Bei der ersten Verbindung werden Sie aufgefordert, die Authentizität des Remote-Hosts durch Anzeige eines eindeutigen ECDSA-Fingerabdrucks zu überprüfen.\n\n**Hinweis:** Da es sich um eine browserbasierte Sandbox handelt, gibt es keinen echten Remote-Server, zu dem eine Verbindung hergestellt werden kann. Wenn Sie diesen Befehl ausführen, wird Ihnen sofort das erwartete reale Ausgabemuster (Hostüberprüfung, Verbindung, Sitzung) angezeigt, und nicht eine tatsächliche interaktive Live-Sitzung. In einem echten Terminal würde ssh Sie in eine wirklich separate Remote-Shell versetzen, bis Sie `exit` eingeben.",
    "instructions": "Stellen wir eine Verbindung zu einem Remote-Staging-Server her. Stellen Sie eine Verbindung zum Server unter `192.168.1.100` als Benutzer `admin` her, indem Sie `ssh admin@192.168.1.100` ausführen (geben Sie `yes` ein, wenn Sie zur Überprüfung des Hostschlüssels aufgefordert werden, und geben Sie ein beliebiges Kennwort ein).",
    "commandHelp": [
      {
        "cmd": "ssh admin@192.168.1.100",
        "desc": "Sichere Verbindung zum Remote-Staging-Server herstellen"
      }
    ],
    "objectives": [
      {
        "id": "ssh_connected",
        "text": "SSH-Verbindung zum Remote-Server unter 192.168.1.100 als Administrator herstellen"
      }
    ],
    "hints": [
      "Verwenden Sie den Befehl ssh gefolgt von user@host. Hier ist der Benutzer admin und der Host 192.168.1.100.",
      "Versuchen Sie Folgendes: ssh admin@192.168.1.100"
    ]
  },
  "61": {
    "title": "Secure File Transfer (scp)",
    "description": "Nachdem Sie nun wissen, wie Sie sich über SSH bei einem Remote-Server anmelden, wie kopieren Sie eine lokale Datei (z. B. ein Backup-Archiv) darauf? Der Befehl `scp` (sichere Kopie) kopiert Dateien mithilfe von SSH unter der Haube sicher zwischen Hosts.\n\n- Die Syntax ist `scp source_path user@host:destination_path`.\n- Beispielsweise kopiert `scp log.txt admin@192.168.1.100:/tmp/` die lokale Datei `log.txt` in den Remote-Ordner `/tmp/`.\n\n**Hinweis:** Genau wie bei ssh gibt es hier keinen echten Remote-Server. Wenn Sie diesen Befehl ausführen, wird die Existenz Ihrer lokalen Datei bestätigt und die erwartete Übertragungsausgabe angezeigt, es werden jedoch keine Daten gesendet.",
    "instructions": "Senden wir unser Protokollarchiv an den Remote-Staging-Server. Kopieren Sie das lokale Archiv `logs.tar.gz` in den Ordner `/tmp` auf `192.168.1.100` als `admin`-Benutzer, indem Sie `scp logs.tar.gz admin@192.168.1.100:/tmp/` ausführen.",
    "commandHelp": [
      {
        "cmd": "scp logs.tar.gz admin@192.168.1.100:/tmp/",
        "desc": "Logs.tar.gz in den Ordner /tmp des Remote-Servers kopieren"
      }
    ],
    "objectives": [
      {
        "id": "scp_completed",
        "text": "Logs.tar.gz über scp nach 192.168.1.100:/tmp/ übertragen"
      }
    ],
    "hints": [
      "Geben Sie scp gefolgt von der lokalen Datei logs.tar.gz und dann dem Remote-Ziel admin@192.168.1.100:/tmp/ an.",
      "Versuchen Sie Folgendes: scp logs.tar.gz admin@192.168.1.100:/tmp/"
    ]
  },
  "62": {
    "title": "Dateikomprimierung (gzip & gunzip)",
    "description": "Stellen Sie sich vor, Sie haben eine einzelne Textdatei mit einem riesigen Datensatz und möchten deren Größe reduzieren, um Speicherplatz zu sparen oder die Freigabe zu beschleunigen. Unter Linux komprimieren wir einzelne Dateien mit `gzip` und stellen sie mit `gunzip` wieder her.\n\n- Der Befehl `gzip <filename>` komprimiert eine Datei und ersetzt sie durch eine komprimierte Version mit der Endung `.gz` (z. B. wird `backup.txt` zu `backup.txt.gz`).\n– Der Befehl `gunzip <filename.gz>` dekomprimiert die Datei und stellt die Originalversion wieder her.",
    "instructions": "Komprimieren wir eine Datei, um Platz zu sparen. Führen Sie `gzip note.txt` in Ihrem Home-Ordner aus. Dann dekomprimieren Sie die resultierende `note.txt.gz`-Datei wieder in ihren ursprünglichen Zustand, indem Sie `gunzip note.txt.gz` ausführen.",
    "commandHelp": [
      {
        "cmd": "gzip note.txt",
        "desc": "Note.txt zu note.txt.gz komprimieren"
      },
      {
        "cmd": "gunzip note.txt.gz",
        "desc": "note.txt.gz zurück zu note.txt dekomprimieren"
      }
    ],
    "objectives": [
      {
        "id": "used_gzip",
        "text": "Führen Sie den Befehl „gzip“ aus, um note.txt zu komprimieren."
      },
      {
        "id": "used_gunzip",
        "text": "Führen Sie den Befehl „gunzip“ aus, um note.txt wiederherzustellen."
      }
    ],
    "hints": [
      "Verwenden Sie gzip note.txt, um die Datei zu komprimieren.",
      "Verwenden Sie gunzip note.txt.gz, um es wieder zu dekomprimieren.",
      "Versuchen Sie Folgendes auszuführen: gzip note.txt gefolgt von gunzip note.txt.gz"
    ]
  },
  "63": {
    "title": "Gruppenverwaltung (groupadd & groups)",
    "description": "Unter Linux sind Benutzer in **Gruppen** organisiert, um Berechtigungen einfach zu teilen. Beispielsweise könnten alle Entwickler einer Gruppe mit dem Namen `developers` angehören. Dadurch können wir Dateien gleichzeitig mit dem gesamten Team teilen.\n\n- Der Befehl `groupadd` erstellt eine neue Gruppe. Da es sich um eine Systemkonfiguration handelt, sind Superuser-Rechte erforderlich (z. B. `sudo groupadd developers`).\n– Der Befehl `groups [username]` listet alle Gruppen auf, denen ein Benutzer angehört. Wird ohne Argumente ausgeführt und zeigt Gruppen für den aktuellen Benutzer an.",
    "instructions": "Lassen Sie uns Gruppen verwalten. Erstellen Sie eine neue Gruppe mit dem Namen `developers`, indem Sie `sudo groupadd developers` ausführen. Überprüfen Sie dann Ihre eigenen aktiven Gruppen, indem Sie den Befehl `groups` ausführen.",
    "commandHelp": [
      {
        "cmd": "sudo groupadd developers",
        "desc": "Erstellen Sie eine neue Gruppe mit dem Namen „developers“."
      },
      {
        "cmd": "groups",
        "desc": "Zeigen Sie aktive Gruppen für den aktuellen Benutzer an."
      }
    ],
    "objectives": [
      {
        "id": "group_created",
        "text": "Erstellen Sie die Gruppe „developers“ mit „groupadd“."
      },
      {
        "id": "checked_groups",
        "text": "Führen Sie den Befehl „groups“ aus."
      }
    ],
    "hints": [
      "Verwenden Sie sudo groupadd Developers, um die Gruppe zu erstellen.",
      "Führen Sie einfach den Befehl groups aus, um Gruppen aufzulisten.",
      "Versuchen Sie Folgendes: sudo groupadd Developers gefolgt von groups"
    ]
  },
  "64": {
    "title": "Offene Dateien auflisten (lsof)",
    "description": "In Unix-ähnlichen Systemen ist „alles eine Datei“. Das bedeutet, dass nicht nur Textdateien und Ordner, sondern auch Netzwerk-Sockets, Systemhardware und Prozesse als Dateien behandelt werden. Um herauszufinden, auf welche Dateien von welchen laufenden Programmen zugegriffen wird, verwenden wir `lsof` (List Open Files).\n\n- Beim Ausführen von `lsof` wird eine umfassende Liste aller geöffneten Dateien angezeigt, zusammen mit der Prozess-ID (PID) und dem Befehl, mit dem sie geöffnet wurden.\n- Wenn Sie beispielsweise `lsof -i` ausführen, werden alle Netzwerkdateien/Sockets aufgelistet. Dies ist äußerst nützlich, um herauszufinden, welcher Prozess einen bestimmten Netzwerkport (z. B. Port 80) überwacht.",
    "instructions": "Lassen Sie uns unsere aktiven Verbindungen und Dateien überprüfen. Führen Sie `lsof` aus, um alle geöffneten Dateien im System anzuzeigen.",
    "commandHelp": [
      {
        "cmd": "lsof",
        "desc": "Alle geöffneten Dateien auf dem System auflisten"
      }
    ],
    "objectives": [
      {
        "id": "ran_lsof",
        "text": "Führen Sie den Befehl „lsof“ aus."
      }
    ],
    "hints": [
      "Verwenden Sie den Befehl „lsof“ ohne Argumente, um alle geöffneten Dateien aufzulisten.",
      "Versuchen Sie Folgendes: lsof"
    ]
  },
  "65": {
    "title": "Anzeigen von CPU-Details (lscpu)",
    "description": "Bei der Fehlerbehebung bei der Systemleistung oder der Bereitstellung stark beanspruchter Anwendungen müssen Sie die Fähigkeiten der CPU Ihres Systems kennen. Unter Linux lesen wir detaillierte Informationen zur CPU-Architektur mit dem Befehl `lscpu`.\n\n– Der Befehl `lscpu` zeigt Prozessordetails wie CPU-Modell, Hersteller, Taktrate, Anzahl der Kerne, Hyper-Threading-Details und Cache-Größen direkt aus dem Kernel-Dateisystem an.",
    "instructions": "Lassen Sie uns den Prozessor untersuchen. Führen Sie `lscpu` aus, um die CPU-Details Ihres Systems anzuzeigen.",
    "commandHelp": [
      {
        "cmd": "lscpu",
        "desc": "Informationen zur CPU-Architektur anzeigen"
      }
    ],
    "objectives": [
      {
        "id": "ran_lscpu",
        "text": "Führen Sie den Befehl „lscpu“ aus."
      }
    ],
    "hints": [
      "Führen Sie einfach den Befehl lscpu aus, um die Prozessorkonfiguration anzuzeigen.",
      "Versuchen Sie Folgendes: lscpu"
    ]
  },
  "66": {
    "title": "Archivieren mit zip & unzip",
    "description": "Während `tar` und `gzip` unter Linux Standard sind, ist `zip` das am häufigsten verwendete Archivformat in der Cross-Plattform-Welt (Windows/macOS). Unter Linux verpacken und komprimieren wir Dateien mit `zip` in ZIP-Dateien und extrahieren sie mit `unzip`.\n\n- Der Befehl `zip <archive.zip> <files>` erstellt ein Zip-Archiv.\n- Der Befehl `unzip <archive.zip>` extrahiert die Dateien aus dem Archiv.",
    "instructions": "Verpacken wir unsere Notizen. Erstellen Sie in Ihrem Home-Ordner ein Zip-Archiv mit dem Namen `note.zip`, das die Datei `note.txt` enthält. Testen Sie dann die Extraktion, indem Sie `unzip note.zip` ausführen.",
    "commandHelp": [
      {
        "cmd": "zip note.zip note.txt",
        "desc": "Erstellen Sie note.zip mit note.txt."
      },
      {
        "cmd": "unzip note.zip",
        "desc": "Extrahieren Sie den Inhalt von note.zip."
      }
    ],
    "objectives": [
      {
        "id": "used_zip",
        "text": "Führen Sie den Befehl „zip“ aus."
      },
      {
        "id": "used_unzip",
        "text": "Führen Sie den Befehl „unzip“ aus."
      }
    ],
    "hints": [
      "Verwenden Sie zuerst zip note.zip note.txt und anschließend unzip note.zip.",
      "Führen Sie Folgendes aus: zip note.zip note.txt und entpacken Sie dann note.zip"
    ]
  },
  "67": {
    "title": "Alternative Komprimierung (bzip2 und xz)",
    "description": "Neben `gzip` und `zip` unterstützt Linux andere Komprimierungsformate, die für höhere Komprimierungsraten auf Kosten der CPU-Geschwindigkeit optimiert sind. Dies sind `bzip2` (bz2) und `xz` (xz).\n\n– Der Befehl `bzip2 <file>` komprimiert eine Datei und gibt `<file>.bz2` aus.\n– Der Befehl `xz <file>` verwendet verlustfreie LZMA-Komprimierung, um `<file>.xz` zu erstellen, was zu außergewöhnlich kleinen Dateigrößen führt und sich ideal für Linux-Kernel-Releases eignet.",
    "instructions": "Vergleichen wir Formate. Komprimieren Sie `note.txt` mit `bzip2 note.txt`. Komprimieren Sie dann die resultierenden Dateien mit `xz note.txt` (um beides zu simulieren).",
    "commandHelp": [
      {
        "cmd": "bzip2 note.txt",
        "desc": "Note.txt mit bzip2 komprimieren"
      },
      {
        "cmd": "xz note.txt",
        "desc": "note.txt mit xz komprimieren"
      }
    ],
    "objectives": [
      {
        "id": "used_bzip2",
        "text": "bzip2 note.txt ausführen"
      },
      {
        "id": "used_xz",
        "text": "xz note.txt ausführen"
      }
    ],
    "hints": [
      "bzip2 note.txt ausführen, um die bzip2-Komprimierung zu testen.",
      "Führen Sie xz note.txt aus, um die xz-Komprimierung zu testen."
    ]
  },
  "68": {
    "title": "Debian-Paketverwaltung (dpkg)",
    "description": "Während `apt` das Herunterladen und Auflösen von Paketabhängigkeiten aus Repositorys automatisiert, was ist, wenn Sie eine `.deb`-Paketdatei bereits manuell heruntergeladen haben und diese überprüfen oder installieren möchten? Unter Linux verwenden wir `dpkg` (Debian-Paket), um direkt mit Paketen zu interagieren.\n\n– Der Befehl `dpkg -l` listet alle Pakete auf, die derzeit auf Ihrem Debian/Ubuntu-System installiert sind.\n– Der Befehl `dpkg -s <package>` zeigt Status-, Versions- und Architekturinformationen für ein bestimmtes Paket an.",
    "instructions": "Lassen Sie uns die lokale Paketdatenbank abfragen. Überprüfen Sie die Liste der Pakete, indem Sie `dpkg -l` ausführen. Fragen Sie dann Details für das Programm `tree` ab, indem Sie `dpkg -s tree` ausführen.",
    "commandHelp": [
      {
        "cmd": "dpkg -l",
        "desc": "Installierte Debian-Pakete auflisten"
      },
      {
        "cmd": "dpkg -s tree",
        "desc": "Details des Baumpakets anzeigen"
      }
    ],
    "objectives": [
      {
        "id": "ran_dpkg_l",
        "text": "Führen Sie „dpkg -l“ aus, um Pakete aufzulisten"
      },
      {
        "id": "ran_dpkg_s",
        "text": "Führen Sie „dpkg -s tree“ aus, um Details abzufragen"
      }
    ],
    "hints": [
      "Verwenden Sie dpkg -l, um die vollständige Paketliste abzurufen.",
      "Überprüfen Sie den Status des Baumpakets mit dpkg -s tree.",
      "Versuchen Sie Folgendes auszuführen: dpkg -l gefolgt von dpkg -s tree"
    ]
  },
  "69": {
    "title": "RedHat-Paketmanager (yum & dnf)",
    "description": "Nicht alle Linux-Umgebungen basieren auf Debian/Ubuntu. Wenn Sie auf RedHat-, Fedora- oder CentOS-Systemen arbeiten, werden Sie `apt` oder `dpkg` nicht finden. Stattdessen verwalten Sie Pakete mit älteren `yum`- oder modernen `dnf`-Paketmanagern (Dandified YUM).\n\n– Der Befehl `dnf check-update` (oder `yum check-update`) stellt eine Verbindung zu RedHat-Repositorys her, um nach verfügbaren Paketaktualisierungen zu suchen.\n- Der Befehl `dnf install <package>` ruft und installiert Programme ähnlich wie `apt install`.",
    "instructions": "Lassen Sie uns Updates auf einem RedHat-basierten Simulator ausführen. Suchen Sie nach Paketen, die Updates benötigen, indem Sie `dnf check-update` (oder `yum check-update`) ausführen.",
    "commandHelp": [
      {
        "cmd": "dnf check-update",
        "desc": "Nach RedHat-Paketaktualisierungen suchen"
      },
      {
        "cmd": "yum check-update",
        "desc": "Nach älteren CentOS-Updates suchen"
      }
    ],
    "objectives": [
      {
        "id": "checked_updates",
        "text": "dnf check-update oder yum check-update ausführen"
      }
    ],
    "hints": [
      "Verwenden Sie entweder den Befehl dnf oder yum mit dem Argument check-update.",
      "Versuchen Sie Folgendes: dnf check-update"
    ]
  },
  "70": {
    "title": "Benutzer verwalten (adduser & userdel)",
    "description": "Während `useradd` ein Low-Level-Dienstprogramm ist, das lediglich Benutzerdetails in Systemkonfigurationsdateien registriert, stellen Debian/Ubuntu-Systeme ein High-Level-interaktives Skript namens `adduser` zur Verfügung, das die Erstellung von Home-Ordnern, das Festlegen von Passwörtern und die Initialisierung von Shell-Umgebungen automatisiert. Umgekehrt löscht `userdel` Benutzerkonten sauber.\n\n- Das Ausführen von `sudo adduser tester` führt Sie interaktiv durch die Benutzerkonfiguration.\n– Durch das Ausführen von `sudo userdel tester` wird das Benutzerkonto gelöscht.",
    "instructions": "Lassen Sie uns die Benutzerlebenszyklen verwalten. Erstellen Sie einen Benutzer mit `sudo adduser tester`. Löschen Sie anschließend den Benutzer, indem Sie `sudo userdel tester` ausführen.",
    "commandHelp": [
      {
        "cmd": "sudo adduser tester",
        "desc": "Benutzertester interaktiv erstellen"
      },
      {
        "cmd": "sudo userdel tester",
        "desc": "Benutzertesterkonto löschen"
      }
    ],
    "objectives": [
      {
        "id": "ran_adduser",
        "text": "Führen Sie den Befehl „adduser“ mit sudo aus"
      },
      {
        "id": "ran_userdel",
        "text": "Führen Sie den Befehl „userdel“ mit sudo aus"
      }
    ],
    "hints": [
      "Verwenden Sie sudo adduser tester gefolgt von sudo userdel tester.",
      "Führen Sie Folgendes aus: sudo adduser tester und dann: sudo userdel tester"
    ]
  },
  "71": {
    "title": "Anzeigen von Benutzeridentitäten (id)",
    "description": "Bei der Fehlerbehebung bei Berechtigungsfehlern müssen Sie den genauen Benutzer- und Gruppen-ID-Kontext überprüfen, unter dem Sie ausgeführt werden. Wir tun dies mit `id`.\n\n- Beim Ausführen von `id` werden die Benutzer-ID (UID), die primäre Gruppen-ID (GID) und alle zusätzlichen Gruppenlisten des aktuellen Benutzers gedruckt.\n– Beim Ausführen von `id <username>` werden Informationen für einen bestimmten Benutzer abgefragt.",
    "instructions": "Lassen Sie uns die aktiven Identitäten überprüfen. Führen Sie `id` aus, um Ihre Details anzuzeigen, und führen Sie dann `id root` aus, um die Konto-IDs des Superusers zu überprüfen.",
    "commandHelp": [
      {
        "cmd": "id",
        "desc": "Aktive Benutzeridentifikationsdetails anzeigen"
      },
      {
        "cmd": "id root",
        "desc": "Root-Identifikationsdetails abfragen"
      }
    ],
    "objectives": [
      {
        "id": "ran_id_learner",
        "text": "Führen Sie den Befehl „id“ für den Lernenden aus."
      },
      {
        "id": "ran_id_root",
        "text": "Führen Sie den Befehl „id root“ aus."
      }
    ],
    "hints": [
      "Führen Sie id gefolgt von id root aus.",
      "Versuchen Sie Folgendes: id und id root"
    ]
  },
  "72": {
    "title": "Löschen von Gruppen (groupdel)",
    "description": "Wenn Projektteams Dienste neu organisieren oder außer Betrieb nehmen, müssen die entsprechenden Sicherheitsgruppen bereinigt werden. Unter Linux löschen wir Gruppen mit `groupdel`.\n\n– Der Befehl `groupdel <group_name>` löscht eine Gruppe dauerhaft aus den Systemkonfigurationsdateien und erfordert Superuser-Rechte.",
    "instructions": "Lasst uns unsere Gruppen aufräumen. Löschen Sie die Gruppe `developers`, indem Sie `sudo groupdel developers` ausführen.",
    "commandHelp": [
      {
        "cmd": "sudo groupdel developers",
        "desc": "Löschen Sie die Entwicklergruppe."
      }
    ],
    "objectives": [
      {
        "id": "group_deleted",
        "text": "Löschen Sie die Gruppe „developers“ mit groupdel."
      }
    ],
    "hints": [
      "Verwenden Sie sudo groupdel Developers, um die Gruppe aus /etc/group zu entfernen.",
      "Versuchen Sie Folgendes: sudo groupdel Developers"
    ]
  },
  "73": {
    "title": "Überprüfen von Schnittstellen (ifconfig)",
    "description": "Bevor die moderne Befehlssuite `ip` zum Standard wurde, verließen sich Linux-Systemadministratoren auf `ifconfig` (Schnittstellenkonfigurator), um Netzwerkschnittstellen anzuzeigen und zu verwalten.\n\n– Der Befehl `ifconfig` zeigt aktive Netzwerkschnittstellen, lokale IP-Konfiguration, Netzmaskendetails und MAC-Hardwareadressen an. Obwohl es auf einigen neueren Distributionen veraltet ist, wird es auf älteren Servern weiterhin häufig verwendet.",
    "instructions": "Lassen Sie uns das klassische Konfigurationstool ausführen. Führen Sie `ifconfig` aus, um aktive Netzwerkschnittstellen zu überprüfen.",
    "commandHelp": [
      {
        "cmd": "ifconfig",
        "desc": "Netzwerkschnittstellenkonfigurationen anzeigen"
      }
    ],
    "objectives": [
      {
        "id": "ran_ifconfig",
        "text": "Führen Sie den Befehl „ifconfig“ aus."
      }
    ],
    "hints": [
      "Führen Sie den Befehl ifconfig im Terminal aus.",
      "Versuchen Sie Folgendes: ifconfig"
    ]
  },
  "74": {
    "title": "Netzwerkverbindungen (nmcli)",
    "description": "Auf modernen Linux-Workstations und -Servern werden Netzwerkschnittstellen von einem System-Daemon namens NetworkManager verwaltet. Anstatt Konfigurationsdateien manuell zu bearbeiten, konfigurieren wir Netzwerkdetails mithilfe von `nmcli`.\n\n– Mit dem Befehl `nmcli` (NetworkManager CLI) können Sie Hardwareverbindungen, Gerätezustände und aktive Wi-Fi-Netzwerke überprüfen.",
    "instructions": "Lassen Sie uns den Hardwarestatus des Netzwerks überprüfen. Führen Sie `nmcli device` aus, um Verbindungen und Status abzufragen.",
    "commandHelp": [
      {
        "cmd": "nmcli device",
        "desc": "Netzwerkschnittstellengeräte und -zustände auflisten"
      }
    ],
    "objectives": [
      {
        "id": "ran_nmcli_device",
        "text": "Führen Sie den Befehl „nmcli device“ oder „nmcli dev“ aus."
      }
    ],
    "hints": [
      "Verwenden Sie nmcli device, um Schnittstellenstatus aufzulisten.",
      "Versuchen Sie Folgendes: nmcli-Gerät"
    ]
  },
  "75": {
    "title": "Socket- und Verbindungsstatistiken (netstat & ss)",
    "description": "Beim Einrichten einer Datenbank oder eines Webservers müssen Sie sicherstellen, dass der Dienst ausgeführt wird und den richtigen Port überwacht, und prüfen, ob nicht autorisierte Verbindungen hergestellt werden. Wir tun dies mit `netstat` oder `ss`.\n\n- Der Befehl `netstat` (Netzwerkstatistik) ist ein klassisches Tool zum Anzeigen von TCP-Verbindungen und zum Abhören von Ports. Z.B. `netstat -tuln` listet TCP/UDP-Abhörports auf.\n– Der Befehl `ss` (Socket-Statistik) ist die moderne, schnellere Alternative zu `netstat`, der Socket-Verbindungsdetails direkt aus dem Kernel-Namespace anzeigt.",
    "instructions": "Lassen Sie uns Ports prüfen. Überprüfen Sie die lauschenden TCP/UDP-Sockets, indem Sie `netstat -tuln` ausführen, und überprüfen Sie sie dann mit dem modernen Socket-Statistikbefehl `ss -tuln`.",
    "commandHelp": [
      {
        "cmd": "netstat -tuln",
        "desc": "Abhörende TCP/UDP-Ports mit Netstat anzeigen"
      },
      {
        "cmd": "ss -tuln",
        "desc": "Abhörende Sockets mit SS anzeigen"
      }
    ],
    "objectives": [
      {
        "id": "ran_netstat",
        "text": "„netstat -tuln“ ausführen"
      },
      {
        "id": "ran_ss",
        "text": "„ss -tuln“ ausführen"
      }
    ],
    "hints": [
      "Zuerst netstat -tuln und anschließend ss -tuln ausführen.",
      "Versuchen Sie Folgendes: netstat -tuln und dann ss -tuln"
    ]
  },
  "76": {
    "title": "Verfolgen von Paketrouten (Traceroute)",
    "description": "Wenn eine Webseite nicht geladen werden kann, wie können Sie feststellen, ob das Problem bei Ihrem Heimrouter, Ihrem Internetdienstanbieter (ISP) oder dem Zielserver liegt? Unter Linux verfolgen wir Pakete mit `traceroute`.\n\n– Der Befehl `traceroute` listet jedes Router-Gateway (Hop) auf, das ein Paket auf seinem Weg zu einem Remote-Server durchquert, zusammen mit der Antwortlatenz für jeden Hop.",
    "instructions": "Lassen Sie uns den Pfad zu einem Webserver verfolgen. Führen Sie `traceroute google.com` aus, um die Hops anzuzeigen.",
    "commandHelp": [
      {
        "cmd": "traceroute google.com",
        "desc": "Verfolgen Sie Netzwerk-Hops zu google.com."
      }
    ],
    "objectives": [
      {
        "id": "ran_traceroute",
        "text": "Führen Sie den Befehl „traceroute“ aus."
      }
    ],
    "hints": [
      "Verwenden Sie „traceroute“, gefolgt von einem Domänennamen wie „google.com“.",
      "Versuchen Sie Folgendes: Traceroute google.com"
    ]
  },
  "77": {
    "title": "Linux-Firewalls (ufw & iptables)",
    "description": "Stellen Sie sich vor, Sie leben in einem sicheren Wohnhaus, in dem ein Wachmann am Eingang steht, der Ausweise überprüft und unbefugte Besucher blockiert. Unter Linux fungiert eine **Firewall** als Sicherheitswächter für Ihre Netzwerkports.\n\n- Der Befehl `ufw` (Uncomplicated Firewall) ist eine benutzerfreundliche Oberfläche zum Verwalten von Firewall-Regeln. Durch Ausführen von `sudo ufw status` wird angezeigt, ob die Firewall aktiv ist und welche Ports (z. B. Port 22 für SSH oder Port 80 für Webserver) geöffnet sind.\n– Der Befehl `iptables` ist das traditionelle Netfilter-Tool auf niedriger Ebene, das tatsächlich Pakete blockiert oder umleitet. Beim Ausführen von `sudo iptables -L` werden die aktiven Sicherheitsketten und Paketabgleichsregeln aufgelistet.",
    "instructions": "Lassen Sie uns unsere Sicherheitsleute inspizieren. Zeigen Sie den Status der unkomplizierten Firewall an, indem Sie `sudo ufw status` ausführen, und überprüfen Sie dann die Netfilter-Regeln der unteren Ebene, indem Sie `sudo iptables -L` ausführen.",
    "commandHelp": [
      {
        "cmd": "sudo ufw status",
        "desc": "UFW-Firewallregeln anzeigen"
      },
      {
        "cmd": "sudo iptables -L",
        "desc": "Aktive iptables-Paketfilterregeln auflisten"
      }
    ],
    "objectives": [
      {
        "id": "checked_ufw",
        "text": "Führen Sie den Befehl „ufw status“ mit sudo aus"
      },
      {
        "id": "checked_iptables",
        "text": "Führen Sie den Befehl „iptables -L“ mit sudo aus"
      }
    ],
    "hints": [
      "Verwenden Sie sudo ufw status, um die unkomplizierte Firewall zu überprüfen.",
      "Verwenden Sie sudo iptables -L, um die Netfilter-Regeln zu überprüfen.",
      "Versuchen Sie Folgendes: sudo ufw status und dann sudo iptables -L"
    ]
  },
  "78": {
    "title": "Prozessfreundlichkeit (nice & renice)",
    "description": "In einem geschäftigen Büro können einige Aufgaben mit niedriger Priorität (wie das Ablegen von Belegen) warten, während Anfragen mit hoher Priorität sofort bearbeitet werden müssen. Linux verwaltet die Prozesspriorität mithilfe von **Niceness**-Werten zwischen -20 (höchste Priorität) und 19 (niedrigste Priorität).\n\n– Der Befehl `nice` startet einen Prozess mit einer benutzerdefinierten Priorität. Z.B. `nice -n 10 sleep 5` startet einen Sleep-Befehl mit einer höflichen Priorität von 10.\n– Der Befehl `renice` ändert die Planungspriorität eines bereits laufenden Prozesses. Beispielsweise verringert `sudo renice +5 9999` die Priorität des Prozesses 9999.",
    "instructions": "Passen wir die Prioritäten an. Führen Sie einen Befehl mit niedriger Priorität mit `nice -n 10 sleep 5` aus. Verringern Sie dann die Priorität des laufenden Rogue-Prozesses auf 9999, indem Sie `sudo renice +5 9999` ausführen.",
    "commandHelp": [
      {
        "cmd": "nice -n 10 sleep 5",
        "desc": "Sleep mit einem Niceness-Wert von 10 starten"
      },
      {
        "cmd": "sudo renice +5 9999",
        "desc": "Niedrigere Priorität von PID 9999"
      }
    ],
    "objectives": [
      {
        "id": "used_nice",
        "text": "Führen Sie den Befehl „nice“ mit -n 10 aus"
      },
      {
        "id": "used_renice",
        "text": "Führen Sie den Befehl „renice“ mit sudo aus"
      }
    ],
    "hints": [
      "Verwenden Sie nice -n 10 Sleep 5, um einen Nice-Prozess zu initiieren.",
      "Ändern Sie die aktive PID-Priorität mit sudo renice +5 9999.",
      "Versuchen Sie Folgendes: nice -n 10 sleep 5 und sudo renice +5 9999"
    ]
  },
  "79": {
    "title": "Hintergrundjobs fortsetzen (bg)",
    "description": "Wir haben bereits gesehen, wie man eine Aufgabe im Hintergrund mit `&` startet und mit `fg` wieder zurückholt. Aber was wäre, wenn Sie einen Befehl ohne `&` gestartet oder mit `Ctrl+Z` angehalten hätten? Sie können es mit `bg` im Hintergrund fortsetzen!\n\n– Der Befehl `bg` setzt angehaltene Jobs fort, sodass sie im Hintergrund ausgeführt werden können, ohne dass Ihre Terminal-Eingabeaufforderung blockiert wird.",
    "instructions": "Lassen Sie uns einen Hintergrundjob ausführen. Starten Sie `sleep 200 &` im Hintergrund, führen Sie `jobs` aus, um aktive Jobs aufzulisten, und führen Sie dann `bg` aus, um sicherzustellen, dass die Ausführung fortgesetzt wird.",
    "commandHelp": [
      {
        "cmd": "sleep 200 &",
        "desc": "Hintergrundprozess starten"
      },
      {
        "cmd": "jobs",
        "desc": "Aktive Hintergrundjobs auflisten"
      },
      {
        "cmd": "bg",
        "desc": "Hintergrundjobs fortsetzen"
      }
    ],
    "objectives": [
      {
        "id": "ran_sleep_bg",
        "text": "Sleep-Befehl mit & starten"
      },
      {
        "id": "ran_jobs",
        "text": "Befehl „jobs“ ausführen"
      },
      {
        "id": "ran_bg",
        "text": "Befehl „bg“ ausführen"
      }
    ],
    "hints": [
      "Sleep 200 ausführen & gefolgt von jobs und schließlich bg."
    ]
  },
  "80": {
    "title": "E/A- und CPU-Statistiken (iostat)",
    "description": "Wenn eine Datenbank oder Webanwendung langsam läuft, wie können Sie feststellen, ob das Problem ein CPU-Engpass oder eine langsame Festplatte ist? Unter Linux überwachen wir Systemausgabe-/Eingabeleistungsmetriken mithilfe von `iostat`.\n\n– Der Befehl `iostat` zeigt Berichtsstatistiken zur CPU-Auslastung und zum Lese-/Schreibdurchsatz des aktiven Geräts an und hilft Ihnen, Festplattenüberlastungen zu erkennen.",
    "instructions": "Lassen Sie uns die Leistungsprotokolle überprüfen. Führen Sie den Befehl `iostat` aus, um E/A-Statistiken zu drucken.",
    "commandHelp": [
      {
        "cmd": "iostat",
        "desc": "Eingabe-/Ausgabestatistiken anzeigen"
      }
    ],
    "objectives": [
      {
        "id": "ran_iostat",
        "text": "Führen Sie den Befehl „iostat“ aus."
      }
    ],
    "hints": [
      "Geben Sie iostat in das Terminal ein und drücken Sie die Eingabetaste.",
      "Versuchen Sie Folgendes: iostat"
    ]
  },
  "81": {
    "title": "Durchsuchen von Paketen (apt search)",
    "description": "Wie finden Sie vor der Installation von Software unter Linux heraus, welche Pakete im Repository verfügbar sind? Unter Linux verwenden wir `apt search`, um den Softwarekatalog nach Schlüsselwörtern abzufragen.\n\n– Der Befehl `apt search <keyword>` durchsucht die Repository-Beschreibungen und listet passende Softwarepakete zusammen mit ihren Versionen auf.\n– Im Gegensatz zu `apt install` werden beim Durchsuchen von Paketrepositorys nur lokale Katalogindexdateien gelesen und **keine** Superuser-Berechtigungen (`sudo`) erforderlich.",
    "instructions": "Lassen Sie uns das Paket-Repository durchsuchen! Führen Sie `apt search tree` aus, um Pakete im Zusammenhang mit der Verzeichnisvisualisierung im Softwarekatalog zu finden.",
    "commandHelp": [
      {
        "cmd": "apt search tree",
        "desc": "Durchsuchen Sie Paket-Repositorys nach Paketen, die mit „tree“ übereinstimmen."
      }
    ],
    "objectives": [
      {
        "id": "ran_apt_search",
        "text": "Führen Sie „apt search tree“ aus, um den Paketkatalog abzufragen."
      }
    ],
    "hints": [
      "Verwenden Sie den Befehl „apt search“, gefolgt vom Namen oder Schlüsselwort des Pakets, das Sie suchen möchten.",
      "Führen Sie apt search tree aus, um verfügbare Pakete im Repository anzuzeigen.",
      "Versuchen Sie Folgendes: apt search tree"
    ]
  },
  "82": {
    "title": "Pakete bereinigen (apt purge)",
    "description": "Bei der Deinstallation von Software unter Linux deinstalliert der Standard-`apt remove` die Binärdateien der Anwendungen, hinterlässt aber die Systemkonfigurationsdateien für den Fall einer späteren Neuinstallation. Um ein Softwarepaket vollständig zu entfernen UND alle zugehörigen Konfigurationsdateien zu löschen, verwenden wir `apt purge` (oder `apt remove --purge`).\n\n– Der Befehl `sudo apt purge <package>` entfernt die Anwendung und löscht alle verbleibenden Konfigurationsdateien.\n– Da beim Löschen systemweite Ordner und Konfigurationsdateien geändert werden, sind Superuser-Berechtigungen (`sudo`) erforderlich.",
    "instructions": "Lassen Sie uns ein Paket und seine Konfigurationsdateien vollständig entfernen. Führen Sie `sudo apt purge tree` aus, um das Programm `tree` vom System zu entfernen.",
    "commandHelp": [
      {
        "cmd": "sudo apt purge tree",
        "desc": "Paket löschen und seine Konfigurationsdateien löschen"
      }
    ],
    "objectives": [
      {
        "id": "purged_tree",
        "text": "Paket „tree“ mit „sudo apt purge tree“ löschen"
      }
    ],
    "hints": [
      "Verwenden Sie apt purge mit Superuser-Rechten, um ein Paket zusammen mit seinen Konfigurationsdateien vollständig zu entfernen.",
      "Führen Sie sudo apt purge tree aus, um das Baumpaket zu löschen.",
      "Versuchen Sie Folgendes: sudo apt purge tree"
    ]
  },
  "83": {
    "title": "Linux-Verzeichnisstruktur und FHS",
    "description": "Jedes Linux-System folgt einer Standard-Dateisystemhierarchie, beginnend mit dem Stammverzeichnis `/`. Im Gegensatz zu Windows (das Laufwerksbuchstaben wie `C:` oder `D:` verwendet) vereinheitlicht Linux alle Dateien und Speicher unter `/`.\n\nHier sind die wichtigsten Systemverzeichnisse, die jeder Linux-Benutzer kennen sollte:\n- `/` (Root): Der übergeordnete Ordner der obersten Ebene des gesamten Systems.\n- `/etc`: Enthält Systemkonfigurationen (z. B. `/etc/hosts`, `/etc/passwd`).\n- `/var`: Enthält variable Daten, die sich im Laufe der Zeit ändern (Protokolle, Spool, Caches wie `/var/log`).\n- `/home`: Persönliche Ordner des Benutzers (z. B. `/home/learner`).\n- `/tmp`: Temporärer Speicherbereich für transiente Dateien.\n- `/usr`: Benutzerdienstprogramme, Anwendungen und Systembibliotheken.",
    "instructions": "Lassen Sie uns das Systemlayout erkunden! Navigieren Sie zunächst zum Stammverzeichnis, indem Sie `cd /` ausführen. Führen Sie dann `ls /etc` aus, um die in `/etc` gespeicherten Systemkonfigurationsdateien anzuzeigen.",
    "commandHelp": [
      {
        "cmd": "cd /",
        "desc": "Zum Stammverzeichnis navigieren"
      },
      {
        "cmd": "ls /etc",
        "desc": "Konfigurationsdateien in /etc auflisten"
      }
    ],
    "objectives": [
      {
        "id": "visited_root",
        "text": "Zum Stammverzeichnis (/) navigieren"
      },
      {
        "id": "listed_etc",
        "text": "Inhalte des Verzeichnisses /etc auflisten"
      }
    ],
    "hints": [
      "Verwenden Sie „cd /“, um zum Stammverzeichnis zu springen.",
      "Verwenden Sie „ls /etc“, um Konfigurationsdateien in /etc anzuzeigen.",
      "Versuchen Sie, Folgendes auszuführen: cd / und dann: ls /etc"
    ]
  }
};
