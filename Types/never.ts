// TSC + FILE NAME TO COMPILE TO JS = tsc never.ts
// The never type represent a value that NEVER OCCUR



function makeOver(msg: string): never {
    throw new Error(msg)
}

// or infinity loop

function gameLoop(): never {
    while(true) {
        console.log("GAME LOOP RUNNING");
        
    }
}