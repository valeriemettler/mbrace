//check if a program has correctly matching () and [] and {}
// "cat = {name:dog}" -- ok
// "cat = {name:dog[1]}" -- ok
// "cat = {name:dog[1}" -- not ok
// "cat = {name:dog1[]}" -- ok
// "cat = {name:dog1}[]{}" -- ok
// "cat = {name:dog{[]}" -- not ok
// {[]} -- ok
// {[}] -- not ok

//get rid of all other characters except for brackets
//then go through to check if brackets are not matching
//check if a condition doesn't exist
//check for brackets in a very similar way
// push open brackets
//pop off open brackets as you see the closed brackets

debugger;
var match = function(s) {
    var str = s;
    // console.log("str length", str.length);
    var status; //correct or incorrect
    var i = 0;
    var arr = [];

    while (true) {

        //checking string length and array length to end or continue program
        if (i >= str.length) {
            if (arr.length <= 0) {
                $("#x").html("They match! You are an excellent programmer!");
                return "correct";
            } else {
                $("#x").html("Hmmm, back to school, yo.");
                return "incorrect";
            }
            // break;
        }

        //if no brackets exist anywhere?? for a future iteration?

        //checking for open brackets
        if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
            //if there is an open bracket, push it into the array and increment
            arr.push(str[i]);
            i = i + 1;

             //checking for closed brackets
        } else if  (str[i] === "}" || str[i] === "]" || str[i] === ")") {
            //if a closed bracket exisits, and no opening brackets are in the array, return incorrect
            if (arr[0] === undefined) {
                    $("#x").html("Hmmm, back to school, yo.");
                    return "incorrect";
            }

            //if a closed bracket exists, and there is one or more opening brackets in the array, pass the closed bracket
            //to the matching_char function to return the matching bracket and check if it is the same as the last
            //bracket in the array. If it is, remove that bracket from the array

            // console.log(arr.slice(-1)[0]);
            // console.log("string being passed", str[i]);
            var a = matching_char(str[i]);
            // console.log("returned string", a);
                if (arr.slice(-1)[0] === a) {
                    arr.pop();

                //if it doesn't match, return incorrect
                }else {
                     $("#x").html("Hmmm, back to school, yo.");
                    return "incorrect";
                }

            //increment by one
            i = i + 1;
            //if no brackets are found, increment by one
        } else {
            i = i + 1;
        }


    }
}
var matching_char = function(char) {
    if (char === "}") {
        return "{";
    }
    if (char === "]") {
        return "[";
    }
    if (char === ")") {
        return "(";
    }
}

var test = function() {

    //testing for correct input
        var l = [
        "{()}",
        "cat = {name:dog}"
        ];
        for (var i = 0; i < l.length; i++){
            if (match(l[i]) === "correct") {
               console.log("test passed: got correct for", l[i] );
            } else {
                console.log("test failed (fix it!): got incorrect for", l[i] );
            }
    }

    //testing for incorrect input
    var n = [
        "())",
        "(})",
        "{()",
        "{[}]",
        "cat = {name:dog[1}"
    ];
    for (var i = 0; i < n.length; i++) {
        if (match(n[i]) === "incorrect") {
            console.log("test passed: got incorrect for", n[i]);
        } else {
            console.log("test failed (fix it!): got correct for", n[i]);
        }
    }
}
// test();


$("button").on('click',function(e){
    e.stopPropagation();
    console.log($("textarea").val());
    if ($("textarea").val() === ""){
    $("#x").html("Hey! Enter something in the box please!");
     } else {
   var a = match($("textarea").val());
   console.log("a", a);
     }
});