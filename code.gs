  //spreadsheet ids and name
  var ss = SpreadsheetApp.openById("spreadsheet id").getSheetByName("sheet name");
  // set the condition for gmail search
  var threads = GmailApp.search("is:unread in:inbox"); //you can change the string for search, reference - https://support.google.com/mail/answer/7190?hl=en-GB
  // run the loop to get data one by one
  for (var i = 0; i < threads.length; i++) { 
    var header = threads[i]; 
    var detail = header.getMessages()[0];
    var subject = detail.getSubject(); //get mail subject
    var sender = detail.getFrom(); //get mail From
    var to = detail.getTo(); //get mail To
    var cc = detail.getCc(); //get mail Cc
    var bcc = detail.getBcc() //get mail Bcc
    //append data one by one in the sheet
    ss.appendRow([sender,date,subject,to,cc,bcc]);
  }
