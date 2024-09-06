import { User } from "../entities";

const UserAccount = ({ user }: { user: User }) => {
  return (
    <>
      <h2>User Profile</h2>
      {user.isAdmin && <button>Edit</button>}
      <div>
        <strong>Name:</strong> {user.name}
      </div>
    </>
  );
};

export default UserAccount;

//1. name is available if user is passed
// 2. edit button is available if user is admin
//3. edit button is not available if user is not admin

//queryByRole
//expect().notInTheDoc
