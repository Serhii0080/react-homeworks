import { User } from "./HW1";

// type AddressType = {
//   street: string; // ПОДПРАВЛЯЕМ any
//   city: string; // ПОДПРАВЛЯЕМ any
// };

// type UserType = {
//   // ПРИДЕТСЯ САМОМУ)
// };

type UserListPropsType = {
  // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
  users: User[];
};

type Props = UserListPropsType;

export const UserList = (props: Props) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {user.address.street}, {user.address.city}
          </li>
        ))}
      </ul>
    </div >
  );
};
