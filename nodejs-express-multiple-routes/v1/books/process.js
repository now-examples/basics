

function process(req, res) {
    try {
        res.json({ success: true, from : '/books' })
    } catch (error) {
        res.json({ success: false, from: '/books' })
    }
}

module.exports = process
