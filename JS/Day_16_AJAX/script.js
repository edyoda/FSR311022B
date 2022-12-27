var http = new XMLHttpRequest();
http.open('GET','https://jsonplaceholder.typicode.com/todos',true);
http.send()
var allTasks;
http.onreadystatechange = function(){
    if(http.readyState === 4){
        allTasks = JSON.parse(http.responseText)
        for(var i=0;i<allTasks.length;i++){
            var p = `<p class='styleTask'>${allTasks[i].title}</p>`
            document.body.innerHTML += p
        }
    }
}
