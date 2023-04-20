const express = require("express");
const Router = express.Router();
const cvcrud = require("../Controller/cvcrud");
const { auth } = require("../Middleware/auth");
Router.post("/postcv", cvcrud.PostCv);
Router.post("/getdatabyuserid", auth, cvcrud.GetUserdata);
Router.post("/getresumedata", auth, cvcrud.GetResume);
Router.post("/getresumedatabyid", auth, cvcrud.GetResumeById);
Router.post("/updatecv", auth, cvcrud.UpdateCv);
Router.post("/deletecv", auth, cvcrud.DeleteCv);
module.exports = Router;
