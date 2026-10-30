import test from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from './fixtures.js';
import { lessons } from '../src/lib/lessons.js';
const solutions = {
  84: ['mkdir -p app/logs app/config app/src/modules'],
  85: ['rm temp_install.tmp old_log.txt','cp staging.conf production.conf'],
  86: ["awk '{print $1}' access.log | sort | uniq > banned_ips.txt"],
  87: ['sudo chown root:root /etc/vault.conf','sudo chmod 600 /etc/vault.conf'],
  88: ['rm /tmp/corrupt_pkg.deb','sudo apt install curl'],
  89: ['df -h','rm /var/log/huge_core_dump.log','df -h > disk_recovery.txt'],
  90: ['ps aux','kill 9999'],
  91: ["sudo sed -i '/evil-tracker.local/d' /etc/hosts",'echo "evil-tracker.local" > /etc/blocked_hosts.conf'],
  92: ['find / -name "db_backup_secure.tar.gz"','mkdir -p backups','cp /var/backups/lost/db_backup_secure.tar.gz backups/db_backup_secure.tar.gz'],
  93: ['sudo systemctl status apache2','sudo systemctl restart apache2'],
  94: ['echo "host=127.0.0.1" > server.conf','echo "port=80" >> server.conf','echo "max_connections=500" >> server.conf'],
  95: ["echo '#!/bin/bash' > healthcheck.sh",'echo "echo SYSTEM_OK" >> healthcheck.sh','chmod 755 healthcheck.sh','./healthcheck.sh'],
  96: ["cut -d: -f1,3 messy_data.csv | tr ':' ',' | tr -d ';' > clean_users.csv"],
  97: ['rm -r /tmp/evil_bin',"sed -i '/evil_bin/d' .bashrc"],
  138: ['cd backups','sha256sum -c checksums.sha256','cp /var/backups/data_backup.tar.gz data_backup.tar.gz','sha256sum -c checksums.sha256'],
  99: ['sudo userdel backdoor','sudo groupdel rogue_admins'],
  147: ['docker logs web-api','git status','git diff',"sed -i 's/3000/8080/g' server.js",'git add server.js','git commit -m "Fix port"','docker restart web-api']
};
for(const [id,commands] of Object.entries(solutions)) test(`boss ${id} can be solved using terminal commands`,()=>{
  const app=createApp();app.state.fsTree=null;app.state.activeLessonId=Number(id);app.resetFilesystem();
  const {fs,session}=window.appState;
  for(const command of commands) session.execute(command);
  const lesson=lessons.find(l=>l.id===Number(id));
  const result=lesson.verify(fs,session,commands);
  assert.equal(result.success,true,JSON.stringify(result));
});
test('boss outcomes reject empty restores and incomplete reports', () => {
  for(const [id,path,content] of [[92,'backups/db_backup_secure.tar.gz',''],[96,'clean_users.csv','alice,engineering\n'],[86,'banned_ips.txt','203.0.113.19\n198.51.100.42\nnot-an-IP\n']]) {
    const app=createApp();app.state.activeLessonId=id;app.resetFilesystem();
    const {fs,session}=window.appState;
    fs.createNode('/home/learner',path,'file',{content});
    assert.equal(lessons.find(l=>l.id===id).verify(fs,session,[]).success,false);
  }
});
