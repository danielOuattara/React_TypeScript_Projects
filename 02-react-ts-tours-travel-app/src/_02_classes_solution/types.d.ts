interface IGlobalFetchState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours:
    | {
        id: string;
        name: string;
        info: string;
        image: string;
        price: number;
      }[]
    | [];
}

interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}
