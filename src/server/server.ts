const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Catch-all handler
app.use((req: any, res: any) => res.sendStatus(404));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
