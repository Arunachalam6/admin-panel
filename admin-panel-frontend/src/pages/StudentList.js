import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../redux/slices/studentSlice';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const dispatch = useDispatch();
    const { students, loading, error } = useSelector((state) => state.students);

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    if (loading) return <p>Loading students...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="student-list">
            <h1>Students List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Date of Birth</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phoneNumber}</td>
                                <td>{student.dob}</td>
                                <td>
                                    <Link to={`/students/${student.id}/edit`}>Edit</Link>
                                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No students found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Link to="/students/add">Add New Student</Link>
        </div>
    );
};

const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Delete student with id: ${id}`);
};

export default StudentList;
