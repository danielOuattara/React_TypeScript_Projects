interface GlobalFetchStateType {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours:
    | {
        id: string;
        name: string;
        info: string;
        image: string;
        price: string;
      }[]
    | [];
}

export default GlobalFetchStateType;
