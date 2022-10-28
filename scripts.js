//Pseudo-code
//I want to:
//1.Make a confirmation window pop-up wen someone clicks "post comment" on the blog page
//2. Have the user click yes to continue.

function confirmPost(){
    let confirmPost = confirm("Are you certain you wish to post this?"); //this part pops up the confirmation window.
    if (confirmPost){
        alert("Comment uploaded for moderator approval!");// if they click yes, it'll return this message.
    }
    else{
        alert("Upload aborted!"); //if they click cancel, it'll pop up this one instead.
    }
}

//that's it. Small. Quick. Simple. Demonstrates functional knowledge of JS while adding a bit of form-handling functionality to the page. Can't wait to be allowed to use jQuery, thats when
//the ACTUAL fun begins! The git branching portion is a touch tricky however.