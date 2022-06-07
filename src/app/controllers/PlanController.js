const Store = require('../models/Store');
const { multipleMongooseToObject } = require('../../util/mongoose');

class PlanController {

    //[GET] /plan/stored/plans
    storedPlans(req, res, next) {
        let planQuery = Store.find({ status: 'Đã'});

        // console.log(planQuery);

        if (req.query.hasOwnProperty('_sort')) {
            const isValidType = ['asc', 'desc'].includes(req.query.type);

            planQuery = planQuery.sort({
                [req.query.column]: isValidType ? req.query.type: 'asc',
            });
        }

        planQuery
            .then((stores) =>
                res.render('plan/stored-plans', {
                    stores: multipleMongooseToObject(stores),
                }),
            )
            .catch(next);
    }
}

module.exports = new PlanController();
