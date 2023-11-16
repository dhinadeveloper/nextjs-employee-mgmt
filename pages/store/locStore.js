import {create} from "zustand";

const useLocStore = create((set) => ({
    empData: [],
    addEmp: (data) =>
        set((state) => ({
            
            empData: [
                data
            ],
        })),

    deleteEmp: () =>
        set((state) => ({
            empData: state.empData = [],
        })),
}));

export default useLocStore;