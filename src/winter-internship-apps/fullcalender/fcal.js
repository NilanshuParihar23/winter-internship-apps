// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // Import font-awesome locally or use another method depending on your setup
// // import 'font-awesome/css/font-awesome.min.css';
// import 'lib/fullcalendar-scheduler-6.1.9-premium/fullcalendar-scheduler-6.1.9-premium/dist/index.global.js';
// import './path-to-your/css/style.css'; // Adjust the path accordingly
// import script from './path-to-your/js/script.js'; // Adjust the path accordingly

// const AppointmentForm = () => {
//   const [name, setName] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState('a');
//   const [appointmentTime, setAppointmentTime] = useState('');
//   const [drId, setDrId] = useState('');
//   const [drName, setDrName] = useState('');

//   const handleBookAppointment = () => {
//     // Add logic for booking appointment here
//     console.log('Booking appointment...');
//   };

//   const handleSubmitDr = () => {
//     console.log('Submitting doctor details...');
//   };

//   return (
//     <div className="container my-4">
//       <form id="appointmentForm">
//         <div className="form-group">
//           <label htmlFor="name">Your Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="doctor">Choose a Doctor</label>
//           <select
//             className="form-control"
//             id="doctor"
//             value={selectedDoctor}
//             onChange={(e) => setSelectedDoctor(e.target.value)}
//             required
//           >
//             <option value="a">Doctor Abhishek</option>
//             <option value="b">Doctor Gourav</option>
//             <option value="c">Doctor Rajat</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="appointmentTime">Choose Appointment Time</label>
//           <input
//             type="datetime-local"
//             className="form-control"
//             id="appointmentTime"
//             value={appointmentTime}
//             onChange={(e) => setAppointmentTime(e.target.value)}
//             required
//           />
//         </div>
//         <button type="button" className="btn btn-success" onClick={handleBookAppointment}>
//           Book Appointment
//         </button>
//         <div className="form-group">
//           <label htmlFor="drId">Dr Id</label>
//           <input
//             type="text"
//             className="form-control"
//             id="drId"
//             placeholder="Enter your name"
//             value={drId}
//             onChange={(e) => setDrId(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="drName">Dr Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="drName"
//             placeholder="Enter your name"
//             value={drName}
//             onChange={(e) => setDrName(e.target.value)}
//             required
//           />
//         </div>
//         <button type="button" className="btn btn-success" onClick={handleSubmitDr}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };a

// export default AppointmentForm;
