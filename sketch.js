let cells;
let size;
let cellSize;
let frameRateValue = 20;



function setup() {
  createCanvas(800,800);
  size=80;
  cellSize=width/size;
  cells = Array(size).fill().map(() => Array(size).fill(0));
  cellSize=width/size;
  //cells = createRandomGrid();

// Acorn
cells[10][10] = 1;
cells[11][12] = 1;
cells[12][9] = 1;
cells[12][10] = 1;
cells[12][13] = 1;
cells[12][14] = 1;
cells[12][15] = 1;


  
  
  frameRate(frameRateValue);
  

}


function createRandomGrid() {
  let grid = new Array(size);
  for (let i = 0; i < size; i++) {
    grid[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      grid[i][j] = floor(random(2));
    }
  }
  return grid;
}


function draw() {
  background(0);
  cellsDraw();

  generate();
  
}



function cellsDraw(){
  noStroke();
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
       if(cells[i][j]==1){
        square(cellSize*i,cellSize*j,cellSize);
        
       }
  
    }
  }
}

function generate(){
  let gen= Array(size).fill().map(() => Array(size).fill(0));
  let cellsAlive;
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      cellsAlive=life(i,j); 
      if(cells[i][j]==1){
        if(cellsAlive==2 || cellsAlive==3){
          gen[i][j]=1;
        }
       }else{
        if(cellsAlive==3){
          gen[i][j]=1;
        }
      }
  
    }
  }
  cells=gen;
}


function life(x,y){
  let sum=0
  if(x>0 && y>0 && x<(size-1) && y<(size-1)){
     for (let i = -1; i < 2  ; i++) {
        for (let j = -1; j < 2; j++) {
          
            sum+=cells[x+i][y+j];
          
         
        
      }
    }
    sum-=cells[x][y]
 }
return sum;
}

