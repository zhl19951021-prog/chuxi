// static/script.js

// Function to fetch attendance data
async function fetchAttendance() {
    try {
        const response = await fetch('/api/attendance');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching attendance:', error);
    }
}

// Function to submit attendance
async function submitAttendance(data) {
    try {
        const response = await fetch('/api/attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting attendance:', error);
    }
}

// Sample call to fetch attendance data on page load
document.addEventListener('DOMContentLoaded', async () => {
    const attendanceData = await fetchAttendance();
    console.log(attendanceData);
});