function getCurrentDateTime() {

    var currentDate = new Date();
  

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; 
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
  

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
  

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var result = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
  
    return result;
  }
  

  console.log(getCurrentDateTime());
  