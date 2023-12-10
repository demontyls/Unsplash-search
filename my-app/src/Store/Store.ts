import { create } from 'zustand'
import {IData} from "./Interface";


interface IStore {
  data: IData[];
  setData: (value: IData[]) => void;
  clearData: () => void;
  currentCard: IData;
  setCurrentCard: (value: IData) => void;
}
export const useStore = create<IStore>((set) => ({
  data: [],
  currentCard: {} as IData,
  setCurrentCard: (value) => set((state) => ({currentCard: value})),
  setData: (value) => set((state) => ({ data: value})),
  clearData: () => set({ data: [] }),
}))


interface IModalStore {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
}

export const useModal= create<IModalStore>((set) => ({
  isShow: false,
  setIsShow: (value) => set((state)=> ({isShow: value})),
}))