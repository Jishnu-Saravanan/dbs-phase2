//import {n1,n2} from '../playerinfo/script'
var turn=true;
var a=[2,2,2,2,2,2,2,2,2];

var i=0;
var c=0;
var winner = 'none'


function place(clicked_id){
    if(winner=='none'){
    if(turn==true){
        
        var id=clicked_id;
        // console.log(id);
        // console.log(typeof id);
        num_id=Number(id);
        // console.log(num_id);
        // console.log(typeof num_id);
        if(a[num_id]==2){
            c=c+1
            document.getElementById(clicked_id).style.backgroundImage="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAKlBMVEX///8AAADMzMzGxsbCwsIEBATU1NQICAj19fXJycm/v78WFhYYGBibm5uonNJ2AAACpUlEQVR4nO2b25qCMAyELbAoKu//urvqqilSyGFSe5H/cj/MTpsMLaEcDkEQBEEQBBBO3486pt5BQp9GiYSUBriE4S8qW0SXbnRgCaKo4/3i9IMV0f08wrJm4l8COB3DKypDxCm9wRVmT6Iy3EEvR6Wjkw5sID+YIBImEpGZ4O4o/skm53e4I3tm6dTZ06GMRtJhtujTlOJZVWSwgKG6qHqLRYnL5DNKZ0KfDloLCo/RmtBa1JxSatGzSoLKlAsRxnRALG4qKFRZ07VDmk9qStPipx+LbQ4ztBY1mjJHd5/D3WfvaCwKMOVChHgmMPfYDOnOCrXWFEXsB5VdzUayB0DuPXIR7HRg92AZ3NGpd00caPCyRc9MqVoRDIs6mDJn36LiRxmbiLV/4WTKnO2CczPlQsRGOhxNmUPGuliMXE2ZU7KosykXIlYt6m7KnDWLVjBlWURf+Is7y/5EuVA9RWTpqGbKHDLyy3ypZsqciVj0bUpM94pNt6KhYiIe9B8SKjmCMiwkVK2FJ92VKLhWT8SDmWiYvyOhI6ZMl6/MQwP10IAvGrg/TCsSUF1+JqQWrjOxaMWaaGDdpPuHWyGS8qy1f/jsUFlaiCrWmn4unZcyDeyrS00//Iu4IhvPWeAXcUUaeN7cLj1gh7rMXie+gkX3x+luUU6+nWuC119w7cVwO/G8FqIK/n0Q+vKkFHiv2DzOTxya6NtL9wcOFpUbDm5RTdMPbFHd6zGoRRt4v9nAe16LzUAWtTX9IDurBs4/2DvxZosiPD7ZhtHAuSBUJ96wiuLWPnUkZCdeadEGzg2iH9sUs4o4pJYjtmgD52npuWLcvpjebRjnikeJYjai89UvEeD21rPQmSfuGzhv38R3BzcRHj0l0fcXTXyHEgRBEARBUOYXdvAO9l155WMAAAAASUVORK5CYII=)";
            

            //-----------Draw condition---------
            if(c==9){        
                winner='Draw'
                document.getElementById("play").style.cssText='width:150px; height:40px; left:55px';
                document.getElementById("save").style.cssText='width:150px; height:40px; left:55px';
                document.getElementById("turn").innerHTML = "Draw";
            }    
            //-------------Draw condition ends--------
            else{
                document.getElementById("turn").innerHTML = "O's Turn";

            
                // console.log(n1);
                // console.log(n2);
            }
            //var id=document.getElementById(clicked_id)

            // const myJSON = JSON.stringify(id);
            // console.log(myJSON);
            // console.log(typeof myJSON);   

            turn=false;      
            a[num_id]=1;
            //console.log(a[num_id]);
        }

        
    }
    else if(turn==false){
        
        var id=clicked_id;
        // console.log(id);
        // console.log(typeof id);
        num_id=Number(id);
        // console.log(num_id);
        // console.log(typeof num_id);
        if(a[num_id]==2){
            c=c+1
        document.getElementById(clicked_id).style.backgroundImage="url(data:image/png;base64,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)";
        document.getElementById("turn").innerHTML = "X's Turn";
        //var id=document.getElementById(clicked_id)
        turn=true;
        
        
        a[num_id]=0;
        console.log(a[num_id]);
        }
    }
}
   

    
    //win();
    //----------------Checking win condition------------

    if (a[0]==1 && a[1]==1 && a[2]==1){
        winner='X';
    }
    else if (a[3]==1 && a[4]==1 && a[5]==1){
        winner='X';
    }
    else if (a[6]==1 && a[7]==1 && a[8]==1){
        winner='X';
    }
    else if (a[0]==1 && a[3]==1 && a[6]==1){
        winner='X';
    }
    else if (a[1]==1 && a[4]==1 && a[7]==1){
        winner='X';
    }
    else if (a[2]==1 && a[5]==1 && a[8]==1){
        winner='X';
    }
    else if (a[0]==1 && a[4]==1 && a[8]==1){
        winner='X';
    }
    else if (a[2]==1 && a[4]==1 && a[6]==1){
        winner='X';
    }
    
    // ---------O Win condition-----------
    else if (a[0]==0 && a[1]==0 && a[2]==0){
        winner='O';
    }
    else if (a[3]==0 && a[4]==0 && a[5]==0){
        winner='O';
    }
    else if (a[6]==0 && a[7]==0 && a[8]==0){
        winner='O';
    }
    else if (a[0]==0 && a[3]==0 && a[6]==0){
        winner='O';
    }
    else if (a[1]==0 && a[4]==0 && a[7]==0){
        winner='O';
    }
    else if (a[2]==0 && a[5]==0 && a[8]==0){
        winner='O';
    }
    else if (a[0]==0 && a[4]==0 && a[8]==0){
        winner='O';
    }
    else if (a[2]==0 && a[4]==0 && a[6]==0){
        winner='O';
    }


    console.log("Count:",c);
    // if(winner!='none'){
        console.log(a[0],a[1],a[2]);
        console.log(a[3],a[4],a[5]);
        console.log(a[6],a[7],a[8]);
        console.log("The winner  is ",winner);
    // }

    if (winner=='X'){
        document.getElementById("play").style.cssText='width:150px; height:40px';
        document.getElementById("save").style.cssText='width:150px; height:40px';
        document.getElementById("turn").innerHTML = "X Wins";
    }
    else if (winner=='O'){
        document.getElementById("save").style.cssText='width:150px; height:40px';
        document.getElementById("play").style.cssText='width:150px; height:40px';
        document.getElementById("turn").innerHTML = "O Wins";
    }
    

   
}
function play(){
    location.href='';  
}
function save(){
    location.href=`save/ ${winner}`;
}



// function win(){
//     // ---------X Win condition-----------
//     if (a[1]==1 && a[2]==1 && a[3]==1){
//         winner='X';
//     }
//     else if (a[4]==1 && a[5]==1 && a[6]==1){
//         winner='X';
//     }
//     else if (a[7]==1 && a[8]==1 && a[9]==1){
//         winner='X';
//     }
//     else if (a[1]==1 && a[4]==1 && a[7]==1){
//         winner='X';
//     }
//     else if (a[2]==1 && a[5]==1 && a[8]==1){
//         winner='X';
//     }
//     else if (a[3]==1 && a[6]==1 && a[9]==1){
//         winner='X';
//     }
//     else if (a[1]==1 && a[5]==1 && a[9]==1){
//         winner='X';
//     }
//     else if (a[3]==1 && a[5]==1 && a[7]==1){
//         winner='X';
//     }
    
//     // ---------O Win condition-----------
//     else if (a[1]==0 && a[2]==0 && a[3]==0){
//         winner='O';
//     }
//     else if (a[4]==0 && a[5]==0 && a[6]==0){
//         winner='O';
//     }
//     else if (a[7]==0 && a[8]==0 && a[9]==0){
//         winner='O';
//     }
//     else if (a[1]==0 && a[4]==0 && a[7]==0){
//         winner='O';
//     }
//     else if (a[2]==0 && a[5]==0 && a[8]==0){
//         winner='O';
//     }
//     else if (a[3]==0 && a[6]==0 && a[9]==0){
//         winner='O';
//     }
//     else if (a[1]==0 && a[5]==0 && a[9]==0){
//         winner='O';
//     }
//     else if (a[3]==0 && a[5]==0 && a[7]==0){
//         winner='O';
//     }
// }


