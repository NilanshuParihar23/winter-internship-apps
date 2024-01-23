import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Emp = () => {
  const [empList, setEmpList] = useState([]);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [age, setAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleSubmit = () => {
    let bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

    if (parseInt(age) < 17) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Age must be greater than 18',
        footer: '<a href="#"></a>',
      });
      return;
    } else if (!bloodGroups.includes(bloodGroup)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Blood Group',
        text: 'Please enter a valid blood group (A+, A-, B+, B-, O+, O-, AB+, AB-)',
        footer: '<a href="#"></a>',
      });
      return;
    }

    if (email !== '' && pass !== '' && age !== '' && bloodGroup !== '') {
      const emp = { email, pass, age, bloodGroup };

      if (empList.some((element) => element.email === emp.email)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${emp.email} is already exist!`,
          footer: '<a href="#">do not add duplicate email</a>',
        });
      } else {
        setEmpList([...empList, emp]);
        Swal.fire({
          title: 'Good Job!',
          text: 'Employee details added successfully',
          icon: 'success',
        });
        setEmail('');
        setPass('');
        setAge('');
        setBloodGroup('');
      }
    } else {
      Swal.fire({
        title: 'Cannot be empty',
        text: 'Fill all the input fields',
        icon: 'warning',
      });
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this user',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#dd3',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedList = empList.filter((a) => a.email !== id);
        setEmpList(updatedList);
        console.log(updatedList);

        Swal.fire({
          title: 'Deleted!',
          text: 'User has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  const renderTable = () => {
    if (empList.length !== 0) {
      return (
        <table className="table table-secondary table-hover">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {empList.map((e) => (
              <tr key={e.email}>
                <td>{e.email}</td>
                <td>{e.pass}</td>
                <td>{e.age}</td>
                <td>{e.bloodGroup}</td>
                <td>
                  <div className="fa fa-trash-o delete" onClick={() => handleDelete(e.email)}></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {renderTable()}
    </div>
  );
};

export default Emp;
