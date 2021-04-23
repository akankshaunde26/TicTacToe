
let count = 1;


function mark(tap) {
    if(count<=9) {
        if(count%2 != 0) {
            document.getElementById(tap.id).innerHTML="X";
        } else {
            document.getElementById(tap.id).innerHTML="O";
        }
        count++;
        checkWinner();

    }

}


function reset() {
    for(let i=1;i<=9;i++) {
        document.getElementById("cell" + i).innerHTML="";
    }
    document.getElementById("win1").innerHTML = "";
    document.getElementById("win2").innerHTML = "";
    count=1;
}


function getCell(cell) {
    let cellData = document.getElementById(cell).innerHTML;
    return cellData;
}

function checkWinner() {
    if(isWinner) {
        if((getCell("cell1")==="X" && getCell("cell2")==="X" && getCell("cell3")==="X")||
            (getCell("cell4")==="X" && getCell("cell5")==="X" && getCell("cell6")==="X")||
            (getCell("cell7")==="X" && getCell("cell8")==="X" && getCell("cell9")==="X")|| 
            (getCell("cell1")==="X" && getCell("cell4")==="X" && getCell("cell7")==="X")||
            (getCell("cell2")==="X" && getCell("cell5")==="X" && getCell("cell8")==="X")||
            (getCell("cell3")==="X" && getCell("cell6")==="X" && getCell("cell9")==="X")||
            (getCell("cell1")==="X" && getCell("cell5")==="X" && getCell("cell9")==="X")||
            (getCell("cell3")==="X" && getCell("cell5")==="X" && getCell("cell7")==="X")) {
            document.getElementById("win1").textContent = "Winner!"
            count=10;
        } else if((getCell("cell1")==="O" && getCell("cell2")==="O" && getCell("cell3")==="O")||
                  (getCell("cell4")==="O" && getCell("cell5")==="O" && getCell("cell6")==="O")||
                  (getCell("cell7")==="O" && getCell("cell8")==="O" && getCell("cell9")==="O")|| 
                  (getCell("cell1")==="O" && getCell("cell4")==="O" && getCell("cell7")==="O")||
                  (getCell("cell2")==="O" && getCell("cell5")==="O" && getCell("cell8")==="O")||
                  (getCell("cell3")==="O" && getCell("cell6")==="O" && getCell("cell9")==="O")||
                  (getCell("cell1")==="O" && getCell("cell5")==="O" && getCell("cell9")==="O")||
                  (getCell("cell3")==="O" && getCell("cell5")==="O" && getCell("cell7")==="O")) {
            document.getElementById("win2").textContent = "Winner!";
            count=10;
        } else if(getCell("cell1")!=""&&getCell("cell2")!=""&&getCell("cell3")!=""&&
                  getCell("cell4")!=""&&getCell("cell5")!=""&&getCell("cell6")!=""&&
                  getCell("cell7")!=""&&getCell("cell8")!=""&&getCell("cell9")!="") {
                      document.getElementById("win1").textContent = "DRAW!";
                      document.getElementById("win2").textContent = "DRAW!";
                      document.getElementById("win1").classList.add("draw");
                      document.getElementById("win2").classList.add("draw");
                  }
    }
}

function isWinner() {
    
    if(getCell("cell1")==getCell("cell2") && getCell("cell2")==getCell("cell3")  && getCell("cell1")!="" && getCell("cell2")!="" && getCell("cell3")!="") {
        return true;
    } else if(getCell("cell4")==getCell("cell5") && getCell("cell5")==getCell("cell6") && getCell("cell4")!="" && getCell("cell5")!="" && getCell("cell6")!="") {
        return true;
    } else if(getCell("cell7")==getCell("cell8") && getCell("cell8")==getCell("cell9") && getCell("cell7")!="" && getCell("cell8")!="" && getCell("cell9")!="") {
        return true;
    } else if(getCell("cell1")==getCell("cell4") && getCell("cell4")==getCell("cell7") && getCell("cell1")!="" && getCell("cell4")!="" && getCell("cell7")!="") {
        return true;
    } else if(getCell("cell2")==getCell("cell5") && getCell("cell5")==getCell("cell8") && getCell("cell5")!="" && getCell("cell2")!="" && getCell("cell8")!="") {
        return true;
    } else if(getCell("cell3")==getCell("cell6") && getCell("cell6")==getCell("cell9") && getCell("cell6")!="" && getCell("cell9")!="" && getCell("cell3")!="") {
        return true;
    } else if(getCell("cell1")==getCell("cell5") && getCell("cell5")==getCell("cell9") && getCell("cell1")!="" && getCell("cell5")!="" && getCell("cell9")!="") {
        return true;
    } else if(getCell("cell3")==getCell("cell5") && getCell("cell5")==getCell("cell7") && getCell("cell5")!="" && getCell("cell7")!="" && getCell("cell3")!="") {
        return true;
    } else {
        return false;
    }
 }