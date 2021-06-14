    
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    console.log("Print arr: ",arr);
    // for( var i = 0; i < arr.length; i++){ 
    //     console.log("Print arr i: "+ i);
    //     console.log("Print arr.length: "+ arr.length);
    //     if ( arr[i] === 5) { 
    //         arr.splice(i, 1); 
    //         console.log("Print arr: ",arr);
    //     }
    // }
    

    for( var i = 0; i < arr.length; i++){ 
        console.log("Print arr i: "+ i);
        console.log("Print arr.length: "+ arr.length);
                                   
        if ( arr[i] === 1) { 
            console.log("remove arr[i]: ");
            arr.splice(i, 1); 
            i--; 
        }
    }
    //=> [1, 2, 3, 4, 6, 7, 8, 9, 0]