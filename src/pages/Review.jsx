
function Review() {

// make a review section
// input a score, description and image (later feature)
// return the 3 inputs and add the score to the database which you can use to make an average score, 
// this will can be used to sort by review score of sellers
    return (
        <form>
            <label for="score">Score</label>
            <input id="score"></input>
            <input placeholder="Review description"></input>
        </form>
    )
}

export default Review