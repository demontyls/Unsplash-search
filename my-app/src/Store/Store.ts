import { create } from 'zustand'
import { IData, IInputValueStore, IModalStore, IStore } from './Interface';

export const useStore = create<IStore>((set) => ({
  data: [],
  currentCard: {} as IData,
  setCurrentCard: (value) => set((state) => ({currentCard: value})),
  setData: (value) => set((state) => ({ data: value})),
  clearData: () => set({ data: [] }),
}));

export const useInputValue = create<IInputValueStore>((set)=> ({
  value: '',
  setValue: (value) => set( state => ({value: value}))
}));

export const useModal= create<IModalStore>((set) => ({
  isShow: false,
  setIsShow: (value) => set((state)=> ({isShow: value})),
}));