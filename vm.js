//
// intstructions to follow

// *LOAD
// *STORE
// *ADD
// *STRCONST
// *LDRCONST

// THE VM WILL HAVE 512 SLOTS OF INTEGERS
// 6 registers





//



RAM = new Array(512).fill (0, 0, 512);
RAM.fill =(0, 0, 512);
REGS =  new Array(6).fill(0, 0, 6);

PC = 0;

function printMachine()
{
    console.log(RAM);
    console.log("Resgisters" + REGS);
    console.log("PC: " + PC);
}

Instructions =[

    "STRCONST 10 1",
    "STRCONST 10 2",
    "STRCONST 10 3",
    "LOAD 0 1",
    "LOAD 1 1",
    "ADD 0 1",
    "STORE 0 4",
    
];


while(PC < Instructions.Length) {
    printMachine()
    let inst = Instructions[pc];
    let instsql = inst.split(" ");

    let op = instsql =[0];
    let op1 = parseInt[instsql[1]];
    let op2 = parseInt[instsql[2]];

    if(op == 'LOAD') {
        REGS[op2] = RAM[op1];
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
    }

    PC++;

}


