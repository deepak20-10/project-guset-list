name_of_the_student_array=[];
function submit(){
    var name_one=document.getElementById("student1").value ;
    var name_two=document.getElementById("student2").value ;
    var name_three=document.getElementById("student3").value ;
    var name_four=document.getElementById("student4").value ;
    name_of_the_student_array.push(name_one);
    name_of_the_student_array.push(name_two);
    name_of_the_student_array.push(name_three);
    name_of_the_student_array.push(name_four);
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML=name_of_the_student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

    
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML=name_of_the_student_array;
        
}

