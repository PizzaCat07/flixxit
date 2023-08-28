import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  // it will decide if you are authentic user or not
  let token = req.headers.token;
  try {
    let decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.headers["email"] = decoded.email;
    next();
  } catch (e) {
    res.json({
      status: false,
      message: "Unauthorized",
      err: e,
    });
  }
}
