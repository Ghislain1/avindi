
// mailto: — simplest (browser only, opens user mail client)

document.getElementById('sendMessageButton').addEventListener('click', function () {
    var to = encodeURIComponent('xetiw68983@arqsis.com');
    var subject = document.getElementById('name').value;
    var body = document.getElementById('messageBody').value;
    console.log(to, subject, body);
    // opens user's default mail client
    // window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});