const cds = require("@sap/cds");

module.exports = cds.service.impl(async function (srv) {
    srv.on('printhello', req => {
        console.log(req.data.input) //print the request coming from server
        return `${req.data.input} world`
    })

    srv.on('addition', req => {
        console.log(req.data)
        let res = req.data.num1 + req.data.num2;
        return res

    })

    srv.on('MyFunction', req => {
        let result = {}
        if (req.data.category == 1) {
            result.stock = 120,
                result.product = 'Thar',
                result.price = '12879 USD',
                result.type = 'Car'
        }
        else {
            result.stock = 150,
                result.product = 'Benz',
                result.price = '1900 USD',
                result.Array = {
                    'Type': 'Car',
                    'Discount': '35 %'
                }
        }
        console.log(result);
        return result
    })
})
