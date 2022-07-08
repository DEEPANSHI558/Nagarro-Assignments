   document
    .getElementById("pokemon")
    .addEventListener("click", function( e ){
        if( ! confirm("Do you really want to do this?") ){
            e.preventDefault();
        }
    });
    document
    .getElementById("portfolio")
    .addEventListener("click", function( e ){ 
        if( ! confirm("Do you really want to do this?") ){
            e.preventDefault();
        }
    });