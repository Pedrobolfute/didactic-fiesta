const args = process.argv.slice(2);

args.forEach(element => {
    let envVar = process.env[element];

    if(envVar === undefined){
        console.log(`${element} não existe!`);
    }
    else{
        console.log(envVar);
    }
    
});