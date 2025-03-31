// import { create } from "zustand";
// import toast from "react-hot-toast";
// import { axiosinstance } from "../lib/axios";
// import {useAuthstore} from "./useauthstore.js"

// export const useChatstore = create((set, get) => ({
//     messages: [],
//     users: [],
//     selectedUser: null,
//     isuserloading: false,
//     ismessageloading: false,

//     getuser: async () => {
//         set({ isuserloading: true });
//         try {
//             const resp = await axiosinstance.get("/message/users");
//             set({ users: resp.data });
//         } catch (err) {
//             console.log(err);
//         } finally {
//             set({ isuserloading: false });
//         }
//     },

//     getmessages: async (userid) => {
//         set({ ismessageloading: true });
//         try {
//             const resp = await axiosinstance.get(`/message/${userid}`); // ✅ Changed `post` to `get`
//             set({ messages: resp.data });
//         } catch (err) {
//             console.log(err);
//         } finally {
//             set({ ismessageloading: false });
//         }
//     },

//     sendMessage: async (message) => {
//         const { selectedUser } = get(); 
//         if (!selectedUser) {
//             toast.error("No user selected!");
//             return;
//         }
//         console.log(selectedUser);
//         try {
//             const res = await axiosinstance.post(`/message/send/${selectedUser._id}`, { text: message }); // ✅ Use POST
//             set((state) => ({
//                 messages: [...state.messages, res.data], 
//             }));
//         } catch (err) {
//             console.log(err);
//             toast.error("Failed to send message");
//         }
//     },
//     // listentoMessages: () => {
//     //     const { selectedUser } = get();
//     //     if (!selectedUser) return;
        
//     //     const socketi = useAuthstore.getState().socket;
//     //     if (!socketi) {
//     //         console.error("Socket not initialized");
//     //         return;
//     //     }
    
//     //     // Remove any existing listener before adding a new one
//     //     socketi.off("newMessage");
    
//     //     // Attach a new listener
//     //     socketi.on("newMessage", (newMessage) => {
//     //         console.log(selectedUser._id);
//     //         console.log(newMessage);

//     //         const isMessageSentFromSelectedUser = newMessage.senderid == selectedUser._id;
//     //         console.log("isMessageSentFromSelectedUser "+isMessageSentFromSelectedUser)
//     //   if (!isMessageSentFromSelectedUser) return;
//     //         console.log(newMessage);
//     //         set((state) => ({
//     //             messages: [...state.messages, newMessage],
//     //         }));
//     //     });
//     // },
    
//     // removeMessages: () => {
//     //     const socketi = useAuthstore.getState().socket;
//     //     if (!socketi) {
//     //         console.error("Socket not initialized");
//     //         return;
//     //     }
    
//     //     // Remove only the specific event listener
//     //     socketi.off("newMessage");
//     // },
    
//     setSelecteduser: (selectedUser) => set({ selectedUser }),
// }));
