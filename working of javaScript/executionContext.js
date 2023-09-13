// Execution context is the execution environment created by javaScript at the time of proram execution.
// It has two segments
    // 1. Memory allocation
    // 2. Code Execution
    /*
    Execution context goes through two phases
    1.Creation phase
    2.Execution phase
    Creation phase: While you run program while in the creation phase, your varuables and functons will be allocated some memory by js engine.
    and it will be stored as key value pair
    for an instance for 
    const a = 20
    a : undefined
    will be stored
    It doesn't metter if whatever the value you've assigned while in creating phase all your variables will be assigned a placeholder undefined
    In case of function the key will be the name of the function and the value will be the body of the function.
    for and istance for const sum = function(a,b){
        return a + b;
    }
    sum: function(a, b){
        return a + b;
    }
    will be stored
    Execution phase:
    when const a = 20 will reach the execution phase,
    the first that will be done is: The actual value 20 will be assigned to a 
    a:20
    whenever a function call will be encountered in the execution phase, javaCript engine  will create a new execution context for the function
    called as a local exececution context.
    and the root execution context of the program is known as the Global execution context
    when Ever the execution of the function call is complete, the execution turns back to the global execution context discarding the newly created execution context
    The other names memory allocation is knows as is: Variable Environment
    The execution context is also known as thread of the execution
    */ 
//    write any javaScript program , got to develper's tool under srouces you'll find a javaScript debugger, make use of it and see this theory in action yourself.

