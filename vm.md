```js

// intstructions to follow

// *LOAD
// *STORE
// *ADD
// *STRCONST
// *LDRCONST

// THE VM WILL HAVE 512 SLOTS OF INTEGERS
// 6 registers





//



RAM = new Array(512);
RAM.fill (0, 0, 512);
REGS =  new Array(6);
REGS.fill(0, 0, 6);
PC = 0;

function printMachine()
{
    console.log(RAM);
    console.log("Resgisters" + REGS);
    console.log("PC: " + PC);
}
// This is the progarm that is being excuted.s
Instructions = [

    "STRCONST 10 1",// let x = 10
    "STRCONST 10 2",// let y = 30
    "STRCONST 10 3",// let z = 30
    "LOAD 0 1",// get x store in 0
    "LOAD 1 1",// get y store in 1
    "ADD 0 1",// let tmp = x + y (tmp r0 + r1)
    "STORE 0 4",// let w =tmp;
    "LOAD 2 3",
    "COMD 2 0", 
    "JUMP 2 3",


];

while(PC < Instructions.length) {
    printMachine()
    let inst = Instructions[PC];
    let instsql = inst.split(" ");

    let op = instsql =[0];
    let op1 = parseInt[instsql[1]];
    let op2 = parseInt[instsql[2]];

    if(op == 'LOAD') {
        REGS[op1] = RAM[op2];
    } else if( op == 'STORE') {
        RAM[op2] = REGS[op1];
    } else if(op == 'ADD') {
        let rv1 = REGS[op1];
        let rv2 = REGS[op2];
        REGS[op1] = rv1 = rv2;
    } else if(op == 'STRCONST') {
        REM[op2] = op1;
    } else if (op == 'LDRCONSRT') {
        REGS[op2] = op1;
    } else if(op == 'COMD') {
        let r = REGS[op1] - REGS[op2];
        if( r == 0) {
            REGS[op1] = 0;
        }
        else if( op == 'JUMP') {
            if(REGS[op1] == 0) {
                PC = op2;
            }
        }


    }

    PC++;

}


 ```