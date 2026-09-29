exports.requireAuth=(req,res,next)=>req.session.user?next():res.redirect('/login?error=Please%20log%20in%20first');
