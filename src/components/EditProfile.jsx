import { useState } from "react";

const EditProfile = ({user}) => {
      const [firstName, setFirstName] = useState(user.firstName);
      const [lastName, setLastName] = useState(user.lastName);
      const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
      const [age, setAge] = useState(user.age);
      const [gender, setGender] = useState(user.gender)
    return (
      <div className="flex py-10 justify-center">
        <div className="card bg-base-200 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">First Name</legend>
              <input
                type="text"
                className="input"
                value={firstName}
                placeholder="Enter email here"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name</legend>
              <input
                type="text"
                className="input"
                value={lastName}
                placeholder="Enter Last Name here"
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="number"
                className="input"
                value={age}
                placeholder="Enter your age here"
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender</legend>
              <input
                type="number"
                className="input"
                value={gender}
                placeholder="Enter your gender here"
                onChange={(e) => setGender(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo url</legend>
              <input
                type="file"
                className="input"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </fieldset>
            <p className="text-red-500 ">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default EditProfile;