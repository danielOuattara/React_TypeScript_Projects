interface IPerson {
  id: string;
  name: string;
  age: number;
  image: string;
}

type TypePerson = {
  id: string;
  name: string;
  age: number;
  image: string;
};

type TypeListProps = {
  people: PersonType[];
  handleRemoveOnePerson: Function;
};

type TypeFriendsState = {
  id: string;
  name: string;
  age: number;
  image: string;
}[];

type TypeFriendsAction =
  | { type: "REMOVE_FRIEND"; payload: string }
  | { type: "REMOVE_ALL_FRIENDS" }
  | { type: "RESET_ALL_FRIENDS"; payload: TypeFriendsState };

//----------- class component

type TypePersonClass = {
  people: {
    id: string;
    name: string;
    age: number;
    image: string;
  };
  country: string;
};

type TypeListPropsClass = {
  people: PersonType[];
  handleRemoveOnePerson: Function;
};
