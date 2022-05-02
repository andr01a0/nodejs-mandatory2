export const checkSignIn = (req, res, next) => {
	if(req.session.user){
		 next()     //If session exists, proceed to page
	} else {
		 const err = new Error("Not logged in!")
		 next(err)  //Error, trying to access unauthorized page!
	}
}
