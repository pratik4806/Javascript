
// let counter=10;
// for (index = 1; index <=10; index++) {
//     if(index==5) continue;
//     console.log(index)
// }

outer: for(let i=1;i<=10;i++){
    document.write(i  + "outer loop")
    document.write('<br>');
   

    for(let i1=1;i1<3;i1++){
        if(i==3) break outer;
        document.write(i1  + "inner loop")
        document.write('<br>');
    }
}