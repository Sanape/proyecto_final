import jwt from "jsonwebtoken";
import userService from "../services/User.service.js";
import { UserDto } from "../dto/User.dto.js";

async function isAuthenticated(req, res, next) {
  if (req.isAuthenticated() || (await jwtValid(req, res, next))) {
    next();
  } else {
    res.redirect("http://localhost:8080/login");
  }
}

async function isNotAuthenticated(req, res, next) {
  if (!req.isAuthenticated() && !(await jwtValid(req, res, next))) {
    next();
  } else if (req.user.role === "ADMIN") {
    res.redirect("http://localhost:8080/realtimeProducts");
  } else {
    res.redirect("http://localhost:8080/");
  }
}

async function jwtValid(req, res, next) {
  try {
    const authHeader = req.get("Authorization") || req.cookies.token;

    if (!authHeader) {
      return null;
    }

    const token = authHeader.replace("Bearer ", "");

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const foundUser = await userService.getById(payload.id);

    if (!foundUser) {
      return null;
    }

    const userDto = new UserDto(
      foundUser.id,
      foundUser.first_name,
      foundUser.last_name,
      foundUser.email,
      foundUser.role,
      foundUser.url_profile_photo
    );

    req.user = userDto;

    return foundUser;
  } catch (error) {
    next(error);
  }
}

export { isAuthenticated, isNotAuthenticated };
