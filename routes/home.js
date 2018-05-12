const express = require("express");
const router = express.Router();
const data = require("../data");
const activityTypeData = data.activityTypes;
const userActivitiesData = data.userActivities;

router.get("/", async (req, res) => {
    //res.render("main/index",null);
    //console.log("HERE");
    try{
        const activityStats = await userActivitiesData.getUserActivityStats(req.session.user._id);
        const activityList = await userActivitiesData.getAllUserActivities();
        //const activityList = await userActivitiesData.getAllUserActivitiesByUserId(req.session.user._id);
        let activityTypeLs = [];

        for(var key in activityList){
            activityTypeLs.push(activityList[key].activityType);
            //console.log(key);
        }
        console.log(activityList);
        //const activityType = await userActivitiesData.getActivityTypesById(activityTypeLs[0]);
        //console.log(activityType);
        res.render("main/index", {activities:activityList, actvityStats: activityStats});
    } catch (e) {
        //console.log("ERROR");
        res.render("main/index", null);
    }

});

module.exports = router;
