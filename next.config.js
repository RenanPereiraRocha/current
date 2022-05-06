const path = require('path')

module.exports = {
sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],},
    images: {
        domains: ['rntecinfo.com.br', 'localhost'],},
}