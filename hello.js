const data = [
    {name:"unko1", height:180, weight:80},
    {name:"unko2", height:232, weight:85},
    {name:"unko3", height:191, weight:86},
    {name:"unko4", height:125, weight:82},
    {name:"unko5", height:180, weight:80},
    {name:"unko6", height:172, weight:79},
    {name:"unko7", height:141, weight:86},
    {name:"unko8", height:171, weight:82}
];



const inarow = (data)=>{
    console.log(data);//並べ替え前
    let tmp;
    for(let i=0;i<data.length;i++){
        for(let j=i+1;j<data.length;j++){
            if(data[i].height > data[j].height){
                tmp = data[i];
                data[i] = data[j];
                data[j] = tmp;
            }
        }
    }
    console.log(data);//並べ替え後
}

inarow(data);


