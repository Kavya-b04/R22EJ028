import express from "express"
const app = express();
app.use(express.json()); 

app.post("/calculate-average", (req, res) => {
    const numbers = req.body.numbers;
    
    if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: "Invalid input" });
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    res.json({ average, responseTime: `${Date.now()} ms` });
});

app.listen(3000, () => 
    console.log("Server running on port 3000"   
    ));
