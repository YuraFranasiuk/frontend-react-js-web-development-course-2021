// Global Scope task

const globalScopeVar = 'globalScopeVar';

function printGlobalScopeVar() {
    console.log(globalScopeVar);
}

printGlobalScopeVar();


// Local Scope task

function printLocalScopeVar() {
    const localScopeVar = 'localScopeVar';

    console.log(localScopeVar);
}

printLocalScopeVar();

// error
// console.log(localScopeVar);


// Block Scope task

function printBlockScopeVar() {
    {
        const blockScopeVar = 'blockScopeVar';
        console.log(blockScopeVar);
    }

    // error
    // console.log(blockScopeVar);
}

printBlockScopeVar();
