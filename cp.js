const cp = require('child_process');
const os = require('os');
cosnt len = os.cpus.length;

for (let i = 0; i < len; i++) {
  cp.fork('test');
}
