import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosinstance } from "../lib/axios";
import { useAuthstore } from "./useauthstore.js";

export const useChatstore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isuserloading: false,
    ismessageloading: false,

    getuser: async () => {
        const authuser = useAuthstore.getState().authuser; // ✅ Correct way to access Zustand store
        if (!authuser) return;

        set({ isuserloading: true });
        try {
            const resp = await axiosinstance.get(`/message/users/${authuser._id}`);
            set({ users: resp.data });
        } catch (err) {
            console.error(err);
        } finally {
            set({ isuserloading: false });
        }
    },

    getmessages: async (userid) => {
        const authuser = useAuthstore.getState().authuser; // ✅ Correct access
        if (!authuser) return;

        set({ ismessageloading: true });
        try {
            const resp = await axiosinstance.get(`/message/${authuser._id}/${userid}`);
            set({ messages: resp.data });
            console.log(messages)

        } catch (err) {
            console.error(err);
        } finally {
            set({ ismessageloading: false });
        }
    },

    sendMessage: async (message) => {
        const authuser = useAuthstore.getState().authuser; // ✅ Correct access
        const { selectedUser } = get();
        if (!authuser || !selectedUser) {
            toast.error("No user selected!");
            return;
        }

        try {
            const res = await axiosinstance.post(`/message/send/${authuser._id}/${selectedUser._id}`, { text: message });
            set((state) => ({
                messages: [...state.messages, res.data],
            }));
        } catch (err) {
            console.error(err);
            toast.error("Failed to send message");
        }
    },

    setSelecteduser: (selectedUser) => set({ selectedUser }),
}));
