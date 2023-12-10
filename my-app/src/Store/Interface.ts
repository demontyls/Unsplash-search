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