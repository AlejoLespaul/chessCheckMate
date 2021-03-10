const challengeFunction = function(kingWhite, rookBlack, bishopBlack, knightBlack){
    let kingWhitePositions = getKingPositions(kingWhite)
    //console.log("kingWhitePositions -> ", kingWhitePositions)
    
    let rookBlackPositions = getRookPositions(rookBlack)
    //console.log("rookBlackPositions -> ", rookBlackPositions)

    let bishopBlackPositions = getBishopPositions(bishopBlack)
    //console.log("bishopBlackPositions -> ", bishopBlackPositions)

    let knightPositions = getKnightBlackPositions(knightBlack)
    //console.log("knightPositions -> ", knightPositions)

    let availablePositions =  availablePositionsForKing(kingWhitePositions, rookBlackPositions)
    availablePositions =  availablePositionsForKing(availablePositions, bishopBlackPositions)
    availablePositions =  availablePositionsForKing(availablePositions, knightPositions)


    return availablePositions.length > 0 ? "jaque" : "jaque mate"
}
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

function availablePositionsForKing(kingPositions, otherPiecePositions){
    let availablePositions = []

    kingPositions.forEach( p => {
        if (otherPiecePositions.indexOf(p) < 0){
            availablePositions.push(p)
        }
    })

    console.log("king -> ", kingPositions)
    console.log("other -> ", otherPiecePositions)
    console.log("available -> ", availablePositions)
    return availablePositions;
}

function getRookPositions(rook){
    let positions = []
    let position = rook.split('');
    let column = letters.indexOf(position[0]);
    let row = parseInt(position[1]);

    for(var i = 1; i <= 8; i++){
        positions.push(letters[column]+i)
    }
    for(var i = 0; i < 8; i++){
        positions.push(letters[i]+row)
    }
    return positions;
}

function getKingPositions(king){
    let positions = []
    let position = king.split('');
    let column = letters.indexOf(position[0]);
    let row = parseInt(position[1]);

    if (column - 1 >= 0 ){
        positions.push(letters[column-1]+row)
        if(row+1<=8){
            positions.push(letters[column-1]+(row+1))
        }
        if(row-1>=1){
            positions.push(letters[column-1]+(row-1))
        }
    }

    if(row+1<=8){
        positions.push(letters[column]+(row+1))
    }
    if(row-1>=1){
        positions.push(letters[column]+(row-1))
    }

    if (column + 1 < 8 ){
        positions.push(letters[column+1]+row)
        if(row+1<=8){
            positions.push(letters[column+1]+(row+1))
        }
        if(row-1>=1){
            positions.push(letters[column+1]+(row-1))
        }
    }

    return positions;
}

function getKnightBlackPositions(knight){
    let position = knight.split('');
    let positions = []
    let column = letters.indexOf(position[0]);
    let row = parseInt(position[1]);

    if(column + 1 <8) {
        if(row + 2 <=8)
            positions.push(letters[column + 1]+(row + 2))
        if(row - 2 >=1)
            positions.push(letters[column + 1]+(row - 2))
    }

    if(column + 2 <8) {
        if(row + 1 <=8)
            positions.push(letters[column + 2]+(row + 1))
        if(row - 1 >=1)
            positions.push(letters[column + 2]+(row - 1))
    }

    if(column - 1 >= 0) {
        if(row + 2 <=8)
            positions.push(letters[column - 1]+(row + 2))
        if(row - 2 >=1)
            positions.push(letters[column - 1]+(row - 2))
    }
    
    if(column - 2 >= 0) {
        if(row + 1 <=8)
            positions.push(letters[column - 2]+(row + 1))
        if(row - 1 >=1)
            positions.push(letters[column - 2]+(row - 1))
    }

    return positions;
}

function getBishopPositions(bishop){
    let result = []
    let position = bishop.split('');

    let column = letters.indexOf(position[0]);
    let row = parseInt(position[1]);

    let reference = 1
    for(var i = column - 1; i >= 0 ; i--) {
        if(row + reference <= 8){
            result.push(letters[i]+(row + reference))
        }
        if(row - reference >=  1){
            result.push(letters[i]+(row - reference))
        }
        reference ++;
    }

    reference = 1
    for(var i = column + 1; i <= 7 ; i++) {
        if(row + reference <= 8){
            result.push(letters[i]+(row + reference))
        }
        if(row - reference >=  1){
            result.push(letters[i]+(row - reference))
        }
        reference ++;
    }

    return result;
}

module.exports = challengeFunction
