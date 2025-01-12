const express = require("express");
const {createNewCause, getAllCauses, getSelectedCause, updateCause, deleteCause, contributeToCause} = require("../collectors/cause");

const causeRouter = express.Router();


causeRouter.post("/", createNewCause);
causeRouter.get("/", getAllCauses);
causeRouter.get("/:id", getSelectedCause);
causeRouter.put("/:id", updateCause);
causeRouter.delete("/:id", deleteCause);
causeRouter.post("/:id/contribute", contributeToCause);

module.exports = causeRouter;
