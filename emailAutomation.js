// Here is a quick script that will automate and email that you may need to send.                                                                                      

<script Language="javascript">

var email = "your@example.com";
var subject = "subject";
var body = "body";

document.write("<form name="form" action="\"mailto:" + email + "\?subject=" + subject + "\&body" + body + "\"
method=\"post\" enctype=\"text/plain\"></form>);

</script>

// Or this method could work too.                                                                                                                                      

<button>
onclick="mailto:my@self.com?subject=hi&body=ha">
send
</button>
