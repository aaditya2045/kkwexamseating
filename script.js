const examForm = document.getElementById('examForm');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');
const branchDisplay = document.getElementById('branch');
const semesterDisplay = document.getElementById('semester');
const rollNumberDisplay = document.getElementById('rollNumberDisplay');
const subjectDisplay = document.getElementById('subject');
const examTimeDisplay = document.getElementById('examTime');
const roomNumberDisplay = document.getElementById('roomNumber');
const wingDisplay = document.getElementById('wing');
const departmentDisplay = document.getElementById('department');

// Dummy data
const students = [
    { 
        rollNumber: 'S221306001', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306002', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306003', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306004', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306005', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306006', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306007', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306008', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306009', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306010', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306011', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306012', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S2213060013', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    { 
        rollNumber: 'S221306014', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },
    
    { 
        rollNumber: 'S223', 
        branch: 'Electrical Department', 
        semester: '4th', 
        subject: 'Electical Network Analysis', 
        examTime: '10:00 AM', 
        roomNumber: 'A101',
        wing: 'A',
        department: 'Electrical Department'
    },





    // Micro Controller Embedded System

    { 
        rollNumber: 'S221306015', 
        branch: 'Eletrical Department', 
        semester: '4th', 
        subject: 'Micro Controller Embedded System', 
        examTime: '2:00 PM', 
        roomNumber: 'D101',
        wing: 'A',
        department: 'Mechanical Department'
    },


];

examForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const rollNumber = document.getElementById('rollNumber').value;
    const student = students.find(s => s.rollNumber === rollNumber);

    if (student) {
        // Display exam details
        resultDiv.classList.remove('hidden');
        branchDisplay.textContent = `Branch: ${student.branch}`;
        semesterDisplay.textContent = `Semester: ${student.semester}`;
        rollNumberDisplay.textContent = `Roll Number: ${student.rollNumber}`;
        subjectDisplay.textContent = `Subject: ${student.subject}`;
        examTimeDisplay.textContent = `Exam Time: ${student.examTime}`;
        roomNumberDisplay.textContent = `Room Number: ${student.roomNumber}`;
        wingDisplay.textContent = `Wing: ${student.wing}`;
        departmentDisplay.textContent = `Department: ${student.department}`;
        
        // Hide error message
        errorDiv.classList.add('hidden');
        errorMessage.textContent = '';
    } else {
        // Display error message
        errorDiv.classList.remove('hidden');
        errorMessage.textContent = 'Invalid roll number. Please try again.';
        
        // Hide exam details
        resultDiv.classList.add('hidden');
        branchDisplay.textContent = '';
        semesterDisplay.textContent = '';
        rollNumberDisplay.textContent = '';
        subjectDisplay.textContent = '';
        examTimeDisplay.textContent = '';
        roomNumberDisplay.textContent = '';
        wingDisplay.textContent = '';
        departmentDisplay.textContent = '';
    }
});
