const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Portfolio _ Atharv Sabde.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
