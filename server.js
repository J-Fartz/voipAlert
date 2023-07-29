const express = require('express');
const notifier = require('node-notifier');

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json

app.post('/notify', (req, res) => {
    let { title, message } = req.body;

    notifier.notify({
        title: title || "Default Title",
        message: message || "Default Message",
    });

    res.status(200).send('Notification sent');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
