

function process(req, res) {
    try {
        res.json({ success: true, from: '/users' })
    } catch (error) {
        res.json({ success: false, from: '/users' })
    }
}

module.exports = process
