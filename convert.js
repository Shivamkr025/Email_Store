const HrMails = `
arpit.jaruriya@dayhawk.in
hr@technogetic.com
hr@devherds.com
reeman.mpcs@gmail.com
komal@webspero.com
`
const mails = HrMails.split('\n').map(line => line.trim()).filter(line => line !== '');
console.log(mails);