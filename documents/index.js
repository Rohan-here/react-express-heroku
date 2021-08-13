module.exports = ({ name }) => {
    console.log(name);
    return `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>${name}</title>
        </head>
        <body>
            <h1> 
                My name is : ${name}
            </h1>
        </body>
    </html>
    `
}