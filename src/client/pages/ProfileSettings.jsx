import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getUser from '@wasp/queries/getUser';
import updateUser from '@wasp/actions/updateUser';

export function ProfileSettings() {
  const { id } = useParams();
  const { data: user, isLoading, error } = useQuery(getUser, { id });
  const updateUserFn = useAction(updateUser);

  const [age, setAge] = useState(user.age);
  const [job, setJob] = useState(user.job);
  const [education, setEducation] = useState(user.education);
  const [income, setIncome] = useState(user.income);
  const [familySituation, setFamilySituation] = useState(user.familySituation);
  const [gender, setGender] = useState(user.gender);
  const [location, setLocation] = useState(user.location);

  const handleUpdateUser = () => {
    updateUserFn({
      age,
      job,
      education,
      income,
      familySituation,
      gender,
      location
    });
  };

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div>
      <h1>Profile Settings</h1>

      <h2>Correlation factors:</h2>
      <ul>
        <li>Age: {user.age}</li>
        <li>Job: {user.job}</li>
        <li>Education: {user.education}</li>
        <li>Income: {user.income}</li>
        <li>Family Situation: {user.familySituation}</li>
        <li>Gender: {user.gender}</li>
        <li>Location: {user.location}</li>
      </ul>

      <h2>Edit correlation factors:</h2>
      <div>
        <label>
          Age:
          <input value={age} onChange={(e) => setAge(e.target.value)} />
        </label>

        <label>
          Job:
          <input value={job} onChange={(e) => setJob(e.target.value)} />
        </label>

        <label>
          Education:
          <input value={education} onChange={(e) => setEducation(e.target.value)} />
        </label>

        <label>
          Income:
          <input value={income} onChange={(e) => setIncome(e.target.value)} />
        </label>

        <label>
          Family Situation:
          <input value={familySituation} onChange={(e) => setFamilySituation(e.target.value)} />
        </label>

        <label>
          Gender:
          <input value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>

        <label>
          Location:
          <input value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
      </div>

      <button onClick={handleUpdateUser}>Save</button>
      <Link to={`/user/${id}`} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'>
        Back to Profile
      </Link>
    </div>
  );
}