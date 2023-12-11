export interface IData {
  id: string;
  links: {download: string};
  urls: {
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  }
}

export interface IStore {
  data: IData[];
  setData: (value: IData[]) => void;
  clearData: () => void;
  currentCard: IData;
  setCurrentCard: (value: IData) => void;
}

export interface IInputValueStore {
  value: string;
  setValue: (value: string) => void;
}

export interface IModalStore {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
}