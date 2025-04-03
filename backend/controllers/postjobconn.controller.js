import Job from "../database/postjob.model.js";

export const postjobconn = async (req, res) => {
    try {
        const { recid } = req.params;
        const { title, tags, role, minSalary, maxSalary, vacancies, jobLevel, country, city, description ,recuiterid} = req.body;

        const job = new Job({
            recuiterid,
            title,
            tags,
            role,
            minSalary,
            maxSalary,
            vacancies,
            jobLevel,
            country,
            city,
            description,
        });

        await job.save();
        res.status(201).json({ message: "Job posted successfully", job });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to post job", details: error.message });
    }
};
