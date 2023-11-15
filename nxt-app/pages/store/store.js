import {create} from "zustand";

const useStore = create((set) => ({
    empData: [],
    addEmp: (data) =>
        set((state) => ({
            
            empData: [
                data[0]
            ],
        })),

    deleteEmp: () =>
        set((state) => ({
            empData: state.empData = [],
        })),
}));

export default useStore;