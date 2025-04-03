import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosinstance } from "../lib/axios";
import { useAuthstore } from "./useauthstore.js";

export const useRecuiterstore = create((set, get) => ({
    postjob: async (data) => {
        const authuser = useAuthstore.getState().authuser;
        
        if (!authuser || !authuser._id) {
            toast.error("User not authenticated!");
            console.error("Error: authuser is undefined or missing _id");
            return;
        }

        try {
            const res = await axiosinstance.post(`/postjob/${authuser._id}`, { 
                ...data, 
                recuiterid: authuser._id // Ensure recruiter ID is included in the request body
            });
            toast.success("Job posted successfully!");
        } catch (err) {
            console.error("Failed to post job:", err);
            toast.error("Failed to post job");
        }
    }
}));
