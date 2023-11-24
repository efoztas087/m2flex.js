let canvas = document.getElementById("canvas")
let g = canvas.getContext("2d")

const gamestate_start=0;
const gamestate_ingame=1;
const gamestate_gameover=2;
 
 
const ingamestate_start=0;
const ingamestate_roll=1;
const ingamestate_end=0;
 
let boardPositionSize= 50;
let pawnPositions= [];
let boardPositions=[];
let playeramountButtons = [];
 
function createRect(x,y,w,h)
{
    let rectangle = {
        x:x,
        y:y,
        x2 :x+w,
        y2 :y+h,
        w:w,
        h:h,
    };
    return rectangle;
    
}

function clearCanvas()
{
    g.fillsStyle = "lightslategray"
    g.fillRect(0,0, canvas.clientWidth, canvas.height);
}


function draw()
{
    clearCanvas();
    for(let i =0 ; i<boardPositions.length;i++)
    {
        let pos = boardPositions[i];

        g.fillStyle  = "#004400";
        //we gebruiken hier de x en y van het rectangle object
        // vul bij de ??? ook de h & w in, net als bij de x en y gedaan is!
        g.fillRect(pos.x,pos.y,pos.w,pos.h);
        g.fillStyle  = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);
    }
}



function createBoardPositions()
{
    let x= 0;
    let y = canvas.height - boardPositionSize;
    let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ;

    for(let i =0 ; i<path.length;i++)
    {

        if(path[i] == 1)//gaan naar rechts
        {
            x += boardPositionSize;
        }
        else if(path[i] == 3)//gaan naar links
        {
            x -= boardPositionSize;
        }
        else if(path[i] == 0)//gaan hier naar boven
        {
            y -= boardPositionSize;
        }
        boardPositions.push(createRect(x, y, boardPositionSize, boardPositionSize));
    }
}

createBoardPositions();
draw();
