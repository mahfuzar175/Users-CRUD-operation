import useUsers from "../../../Hooks/useUsers";

const Users = () => {
  const [allUser] = useUsers();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((row, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
