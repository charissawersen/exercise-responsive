// (function () {
//     //  code goes here
//     let facingForward = true;
//     let position = 0;

//     function moveForward(distance) {
//         // increase position by distance
//         if (facingForward) {
//             position = position + distance;
//         }
//         else {
//             position = position - distance;
//         }
//     }
//     function moveBackward(distance) {
//         if (facingForward) {
//             position = position - distance;
//         }
//         else {
//             position = position + distance;
//         }
//     }
//     function turnAround() {
//         // // switch value of facing forward
//         facingForward = !facingForward;
        
//     }
//     function printLocation() {
//         console.log(`User is at ${position}.`);
//     }

//     moveForward(5);
//     moveBackward(3);
//     printLocation(position);
//     turnAround(facingForward);
//     moveForward(10);
//     moveBackward(5);
//     printLocation(position);

// })();

// 2 dimensional Extended Challenge
(function () {
    //  code goes here
    let facing = "N";
    let xPos = 0;
    let yPos = 0;

    function moveForward(distance) {
        // increase position by distance
        if (facing === "N") {
            yPos += distance;
        }
        else if (facing === "S") {
           yPos -= distance;
        }
        else if (facing === "E") {
            xPos += distance;
        }
        else {
            xPos -= distance;
        }
    }
    function moveBackward(distance) {
        if (facing === "N") {
            yPos = distance * -1; 
        }
        else {
            xPos = distance * -1;
        }
    }
    function turnLeft() {
        if (facing === "N") {
            facing = "W";
        }
        else if (facing === "W")
    }
    function turnRight() {
        if (facing === "N") {
            facing === "E";
        }
    }
    function printLocation() {
        console.log(`User is at ${position}.`);
    }

})()