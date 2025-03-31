import axios from 'axios';

export async function connectML(req, res) {
    const { title, city, salary, job } = req.body;

    const dataToSend = {};
    if (title) dataToSend.title = title;
    if (city) dataToSend.city = city;
    if (salary) dataToSend.salary = salary;
    if (job) dataToSend.job = job;

    try {
        const response = await axios.post('http://127.0.0.1:8001/recommends', dataToSend);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error("Error calling FastAPI service:", error.message || error);
        res.status(500).json({ message: "Error fetching recommendations." });
    }
}
