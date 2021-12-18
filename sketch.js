var buttons=["1","2","3","4","5","6","7","8","9","-","+","x","/"]
var inp;
var del,ok;
function setup(){
 createCanvas(300,400)   
 fontSize=30;
 del=createButton("⛔")
 del.style('font-size', '34px');
 del.position(0,260)
 del.size(100,55)
 ok=createButton("✅")
 ok.style('font-size', '34px');
 ok.position(200,260)
 ok.size(100,55)
 buttons[0]=createButton("1️⃣")
 buttons[0].style('font-size', '34px');
 buttons[0].position(0,100)
 buttons[0].size(100,55)
 buttons[1]=createButton("2️⃣")
 buttons[1].style('font-size', '34px');
 buttons[1].position(100,100)
 buttons[1].size(100,55)
 buttons[2]=createButton("3️⃣")
 buttons[2].style('font-size', '34px');
 buttons[2].position(200,100)
 buttons[2].size(100,55)
 buttons[3]=createButton("4️⃣")
 buttons[3].style('font-size', '34px');
 buttons[3].position(0,155)
 buttons[3].size(100,55)
 buttons[4]=createButton("5️⃣")
 buttons[4].style('font-size', '34px');
 buttons[4].position(100,155)
 buttons[4].size(100,55)
 buttons[5]=createButton("6️⃣")
 buttons[5].style('font-size', '34px');
 buttons[5].position(200,155)
 buttons[5].size(100,55)
 buttons[6]=createButton("7️⃣")
 buttons[6].style('font-size', '34px');
 buttons[6].position(0,205)
 buttons[6].size(100,55)
 buttons[7]=createButton("8️⃣")
 buttons[7].style('font-size', '34px');
 buttons[7].position(100,205)
 buttons[7].size(100,55)
 buttons[8]=createButton("9️⃣")
 buttons[8].style('font-size', '34px');
 buttons[8].position(200,205)
 buttons[8].size(100,55)
 buttons[9]=createButton("0️⃣")
 buttons[9].style('font-size', '34px');
 buttons[9].position(100,260)
 buttons[9].size(100,55)
 buttons[10]=createButton("➖")
 buttons[10].style('font-size', '34px');
 buttons[10].position(0,315)
 buttons[10].size(75,50)
 buttons[11]=createButton("➕")
 buttons[11].style('font-size', '34px');
 buttons[11].position(75,315)
 buttons[11].size(75,50)
 buttons[12]=createButton("➗")
 buttons[12].style('font-size', '34px');
 buttons[12].position(150,315)
 buttons[12].size(75,50)
 buttons[13]=createButton("❌")
 buttons[13].style('font-size', '34px');
 buttons[13].position(225,315)
 buttons[13].size(75,50)
 inp=createInput("")
 inp.style('font-size', '34px');
 inp.size(291,94)
 inp.position(0,0)
}
function draw(){
    background("lime")
    del.mouseClicked(()=>{
      inp.value(inp.value().slice(0,inp.value().length-1))
    });
    ok.mouseClicked(()=>{

      try {
        inp.value(eval(inp.value()))
      } catch(err) {
        //catch error
        document.getElementById("demo").innerHTML = err.message;
      }

    })
    if(keyCode==13){
        console.log("enter")

        //new code
        try {
          inp.value(eval(inp.value()))
        } catch(err) {
          //catch error
          document.getElementById("demo").innerHTML = err.message;
        }


   }
    buttons[0].mouseClicked(()=>{
    inp.value(inp.value()+"1")
    })
    buttons[1].mouseClicked(()=>{
        inp.value(inp.value()+"2")
        })
    buttons[2].mouseClicked(()=>{
            inp.value(inp.value()+"3")
            })
    buttons[3].mouseClicked(()=>{
                inp.value(inp.value()+"4")
                })
    buttons[4].mouseClicked(()=>{
                inp.value(inp.value()+"5")
                })
    buttons[5].mouseClicked(()=>{
                inp.value(inp.value()+"6")
                 })
    buttons[6].mouseClicked(()=>{
                inp.value(inp.value()+"7")
                })
    buttons[7].mouseClicked(()=>{
                inp.value(inp.value()+"8")
                })
    buttons[8].mouseClicked(()=>{
                inp.value(inp.value()+"9")
                })
    buttons[9].mouseClicked(()=>{
                inp.value(inp.value()+"0")
                })
    buttons[10].mouseClicked(()=>{
                inp.value(inp.value()+"-")
                })
    buttons[11].mouseClicked(()=>{
                inp.value(inp.value()+"+")
                })
    buttons[12].mouseClicked(()=>{
                inp.value(inp.value()+"/")
                })
    buttons[13].mouseClicked(()=>{
                inp.value(inp.value()+"*")
                })


}