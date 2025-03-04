// src/App.jsx
import React from 'react';
import StudentResults from './components/StudentResults';

const studentData = {
  Java: [
    { firstName: 'Sokunthea', lastName: 'Poeun', score: 45 },
    { firstName: 'Sreymom', lastName: 'Chak', score: 51 },
    { firstName: 'Radit', lastName: 'Thy', score: 75 },
    { firstName: 'Kadin', lastName: 'Sit', score: 25 },
    { firstName: 'Sokunthea', lastName: 'Poeun', score: 45 },
    { firstName: 'Sreymom', lastName: 'Chak', score: 51 },
  ],
  HTML: [
    { firstName: 'Sokunthea', lastName: 'Poeun', score: 45 },
    { firstName: 'Sreymom', lastName: 'Chak', score: 51 },
    { firstName: 'Radit', lastName: 'Thy', score: 75 },
    { firstName: 'Kadin', lastName: 'Sit', score: 25 },
    { firstName: 'Sokunthea', lastName: 'Poeun', score: 45 },
    { firstName: 'Sreymom', lastName: 'Chak', score: 51 },
  ],
  Python: [
    { firstName: 'Sokunthea', lastName: 'Poeun', score: 45 },
    { firstName: 'Sreymom', lastName: 'Chak', score: 51 },
    { firstName: 'Radit', lastName: 'Thy', score: 75 },
    { firstName: 'Kadin', lastName: 'Sit', score: 25 },
    { firstName: 'Sokunthea', lastName: 'Poeun', score: 45 },
    { firstName: 'Sreymom', lastName: 'Chak', score: 51 },
  ],
  English: [
    { firstName: 'Sokunthea', lastName: 'Poeun', score: 45 },
    { firstName: 'Sreymom', lastName: 'Chak', score: 51 },
    { firstName: 'Radit', lastName: 'Thy', score: 75 },
    { firstName: 'Kadin', lastName: 'Sit', score: 25 },
    { firstName: 'Sokunthea', lastName: 'Poeun', score: 45 },
    { firstName: 'Sreymom', lastName: 'Chak', score: 51 },
  ],
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5 text-center flex flex-col justify-center items-center gap-1.5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiVO10wU3pkGg-yba_cfDDI8dor2LOflVSg&s" alt="" className='max-w-20 rounded-4xl' />
      <h2 className="text-2xl font-bold ">Students Results for PNC Batch 2024</h2>
      <div className="flex flex-wrap justify-center gap-6 align-baseline flex-row mt-20">
        {Object.entries(studentData).map(([subject, students]) => (
          <StudentResults key={subject} subject={subject} students={students} />
        ))}
      </div>
    </div>
  );
}

export default App;