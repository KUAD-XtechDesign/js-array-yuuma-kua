$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })


  $("#button01").on("click",function(){
    let students_txt ="";

    for(let i=0; i<students.length; i++){
      students_txt +=students
      students_txt += '/'
    }

    $("#content").text(students_txt);
  })

  $("#button02").on("click",function(){
    let students_txt = "";
    
    for(let i=0; i<students.length;i++){
      students_txt += "<div id='student" + i + "'class='student'>" +students[i] + "</div>"
    }

    $("#content").html(students_txt);
  })



})