// src/components/StudentResults.jsx
import React from 'react';

const StudentResults = ({ subject, students }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md w-auto border-cyan-600 border-2">
      <h2 className="text-xl font-semibold mb-2 text-gray-200">{subject}</h2>
      <table className="w-full text-white">
        <thead>
          <tr>
            <th className="py-2 px-4 ">First Name</th>
            <th className="py-2 px-4 ">Last Name</th>
            <th className="py-2 px-4 ">Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              className='text-gray-400'
            >
              <td className="py-2 px-4">{student.firstName}</td>
              <td className="py-2 px-4">{student.lastName}</td>
              <td ckey={index}
              className={student.score < 50 ? 'text-red-600' : 'bg-gray-800'}>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentResults;