const root=document.querySelector('#root');
const get_btn=document.querySelector("#get-btn");
const url='https://api.cricapi.com/v1/currentMatches?apikey=c98cc071-432a-44a9-9aac-78e6d084ebdb&offset=0';

get_btn.addEventListener('click',()=>{
    root.innerHTML='<h1 class="text-center"><span class="text-</h1>';
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const match=data.data;
        console.log(match);
        match.forEach(element => {
            root.innerHTML+=`<div class="card col-md-3 mx-auto my-2  overflow-hidden">
                 <div class="card-header bg-dark text-white small">${element.name}</div>
                 <div class="card-body">
                    <div class="d-flex justify-content-between">
                            <div class="d-flex">
                                      <img src=${element.teamInfo[0].img} width="100px" height="100px" class="rounded-circle border ">
                                      <p> ${element.teamInfo[0].shortname}</p>
                            </div>
                            <div class="d-flex">
                          <p> ${element.teamInfo[1].shortname}</p>
                          <img id=""src=${element.teamInfo[1].img} width="100px" height="100px" class="rounded-circle border ">
                   </div>
                   
                    </div>
                    <div class="d-flex justify-content-between">
                    <div class="d-flex flex-column small">
                              <p><span class="bold">Runs:</span> ${element.score[0].r}</p>
                              <p><span class="bold">Wickets:</span> ${element.score[0].w}</p>
                              <p><span class="bold">Over:</span> ${element.score[0].o}</p>
                    </div>
                    <div class="d-flex flex-column small">
                    <p><span class="font-weight-bold">Runs:</span> ${element.score[1].r}</p>
                    <p><span class="bold">Wickets:</span> ${element.score[1].w}</p>
                    <p><span class="bold">Over:</span> ${element.score[1].o}</p>
           </div>
                    
                 </div>
                 <p class="card-text text-danger">${element.status}.</p>
             </div> `
         }); 
        
        }).catch(err=>console.log(err))
})
