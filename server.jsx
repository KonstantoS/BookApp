import express from 'express';


const app = express();

app.use((req, res) => {
    const HTML = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BookApp</title>
</head>
<body>
<div id="root">
</div>
<script type="application/javascript" src="/bundle.js"></script>
</body>
</html>
  `;

    res.end(HTML);
});

export default app;