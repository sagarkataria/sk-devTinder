const UserCard = ({user}) => {
    console.log("user card", user);
    const {firstName,lastName,photoUrl,gender,about,age} = user;
    return (
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img src={user?.photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + ' ' + lastName} </h2>
          {age && gender && <p>{age + ', ' + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-between">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Send Interested</button>
          </div>
        </div>
      </div>
    );
}

export default UserCard;