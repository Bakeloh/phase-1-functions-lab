// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    const HqLocation = 42;

    if (distance > HqLocation) {
        return distance - HqLocation;
    } else {
        return HqLocation - distance;
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {

    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculateFarePrice(start, destination) {

    
    if (distance <= 400){
        return "free sample";
    } else if (distance > 400 && distance <= 2000){
        return distance * 2;
    } else if (distance > 2000 && distance < 2500){
        return distance * 25;
    } else {
        return "cannot travel travel that far";
    }
}
