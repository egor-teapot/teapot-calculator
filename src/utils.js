// let testSum = "2 + 2 + 2"
// let testDiff = "7 - 7 - 1"
// let testTimes = "5 * 6"
// let testDiv = "16 / 2"
// let testBigSum = "235 + 140 + 74 + 2"
// let testLogic = "2 + 2 * 2"
// let testLogicFlip = "2 * 2 + 2"
// let testRandom = "2 * 8 / 4 + 256 - 100 * 2 * 10"
let testErr = "+ 2"

export function parseMath(str) {
    let expr = str.split(" ")
    const joined = expr.join(" ")
    const layer1 = new RegExp("[*/]", "g")
    const layer2 = new RegExp("[+-]", "g")

    try {
        while(layer1.test(joined) === true) {
            for(let i=0; i< expr.length; i++) { 
                // console.log(`>> ${expr[i]}`)
                if(expr[i] == "*") {
                    let out = parseInt(expr[i-1]) * parseInt(expr[i+1])
                    expr.splice(i-1, 3, out)
                }
        
                if(expr[i] == "/") {               
                    let out = parseInt(expr[i-1]) / parseInt(expr[i+1])
                    expr.splice(i-1, 3, out)
                }
    
                // if(expr[i] == "//") {
                //     let out = parseInt(expr[i-1]) % parseInt(expr[i+1])
                //     expr.splice(i-1, 3, out)
                // }
            // console.log(expr)
            } // for i
        } // while
    
        while(layer2.test(joined) === true) {
    
            for(let i=0; i< expr.length; i++) { //
                // console.log("second step")
                if(expr[i] == "+") {
                    let out = parseInt(expr[i-1]) + parseInt(expr[i+1])
                    expr.splice(i-1, 3, out)
                }
    
                if(expr[i] == "-") {
                    let out = parseInt(expr[i-1]) - parseInt(expr[i+1])
                    expr.splice(i-1, 3, out)
                }
    
            } // for i
        } // while
    }

    catch (err) {
        console.log(err)
        return "ERR"
    }
    return expr[0]
} // parseMath

console.log(parseMath(testErr))
// // // console.log(parseMath(testLogic))
// // // console.log(parseMath(testLogicFlip))