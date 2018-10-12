function log(a) {
    if (a) {
        console.log("something was passed to Log",a)
    } else {
        console.log("You called function without arguments");
    }
}
module.exports=log;