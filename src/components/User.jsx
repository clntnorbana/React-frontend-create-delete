const User = ({ user, onDelete }) => {
  return (
    <div className="user">
      <p className="username">{user.username}</p>
      <h2 className="name">
        {user.firstname} {user.lastname}
      </h2>
      <span className="delete" onClick={() => onDelete(user.id)}>
        x
      </span>
    </div>
  );
};

export default User;
