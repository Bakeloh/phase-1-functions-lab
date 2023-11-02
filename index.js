// // Code your solution in this file!

// function distanceFromHqInBlocks(distance) {
//     const HqLocation = 42;

//     if (distance > HqLocation) {
//         return distance - HqLocation;
//     } else {
//         return HqLocation - distance;
//     }
// }

// function distanceFromHqInFeet(distance) {
//     return distanceFromHqInBlocks(distance) * 264;
// }

// function distanceTravelledInFeet(start, destination) {

//     if (start < destination) {
//         return (destination - start) * 264;
//     } else {
//         return (start - destination) * 264;
//     }
// }

// function calculateFarePrice(start, destination) {

    
//     if (distance <= 400){
//         return "free sample";
//     } else if (distance > 400 && distance <= 2000){
//         return distance * 2;
//     } else if (distance > 2000 && distance < 2500){
//         return distance * 25;
//     } else {
//         return "cannot travel travel that far";
//     }
// }

////////////////////////////////////////////////////////


function distanceFromHqInBlocks(value){
    //return value;
    if (value > 42) {
        return value - 42;
    } else {
        return 42 - value;
    }

}

//distanceFromHqInBlocks(1)


function distanceFromHqInFeet(value){

    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }

}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    // when distance <= 400
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        //charges 2 cents per foot when total feet travelled is between 400 and 2000 (
            //remember the first 400 feet are free
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}