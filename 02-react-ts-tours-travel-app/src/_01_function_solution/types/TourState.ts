interface FetchStateType {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  tours:
    | {
        name: string;
        info: string;
        image: string;
        price: number;
      }[]
    | [];
}

export default FetchStateType;
