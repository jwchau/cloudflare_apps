const html = `
<!doctype html>
<html>
    <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet">
        <link href="styles" rel="stylesheet">
    </head>
    <body>
        <div id='super-container' class='flex-col center-center'>
            <div id='introduction'>
                <h1>Welcome to John's Worker Page</h1>
            </div>

            <div id='avatar'>
                <img id='face' src='$replace'></img>
            <div>

            <div class='flex-col center-center' id="links">
                <a id='link_1' href="$link1">A sample URL</a>
                <a href="$link2">Another sample URL</a>
                <a href="$link3">A final sample URL</a>
            </div>
        </div>
    </body>
</html>
`

const styles = `
h1 {
    font-family: Pacifico, sans-serif;
    font-size: 4em;
    color: #3eb5f1;
    margin: 0;
}

h2 {
    font-weight: 300;
    font-family: sans-serif;
}

.centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

#ferris {
    width: 75%;
}

.flex-col {
    display: flex;
    flex-direction: column;
}

.center-center {
    justify-content: center;
    align-items: center;
}
`

module.exports = {
    html,
    styles,
}

