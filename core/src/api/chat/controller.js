const httpStatus = require('http-status');
const { getMessagesWT } = require('../../services/chat/getMessages');
const { wrapAsyncMiddleware } = require('../../middelwares/wrapAsyncMiddleware');

exports.getMessages = wrapAsyncMiddleware( async(req, res) => {
    const result = await getMessagesWT({
        message: 'test'
    })
    return res.status(httpStatus.OK).json(result);
})
