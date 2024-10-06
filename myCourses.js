function checkUserSignedIn() {
    const loggedInUser = localStorage.getItem('currentUser');
    if (!loggedInUser) {
        alert('You need to sign in first.');
        window.location.href = 'signIn.html';
    }
}

// Function to load My Courses from localStorage and display them
function loadMyCourses() {
    //checkUserSignedIn(); // Ensure the user is signed in

    const myCoursesContainer = document.getElementById('myCoursesContainer');
    myCoursesContainer.innerHTML = ''; // Clear the container first

    const myCourses = JSON.parse(localStorage.getItem('myCourses')) || [];

    if (myCourses.length === 0) {
        myCoursesContainer.innerHTML = '<p>You have not started any courses yet.</p>';
        return;
    }

    fetch('courses.json')
        .then(response => response.json())
        .then(data => {
            myCourses.forEach(courseName => {
                let courseFound = false;

                data.categories.forEach(category => {
                    category.courses.forEach(course => {
                        if (course.name === courseName) {
                            courseFound = true;

                            const courseDiv = document.createElement('div');
                            courseDiv.className = 'course-item';

                            courseDiv.innerHTML = `
                                <h2>${course.name}</h2>
                                <img src="${course.image}" alt="${course.name}" class="course-image">
                                <p>${course.description}</p>
                                <button onclick="viewCourse(${course.id})">View Course</button>
                                <button onclick="removeCourse('${course.name}')">Remove Course</button>
                            `;

                            myCoursesContainer.appendChild(courseDiv);
                        }
                    });
                });

                if (!courseFound) {
                    console.error(`Course "${courseName}" not found in JSON data.`);
                }
            });
        })
        .catch(error => console.error('Error loading courses:', error));
}

function viewCourse(courseId) {
    window.location.href = `CourseVideo.html?id=${courseId}`;
}

// Function to remove a course from My Courses
function removeCourse(courseName) {
    let myCourses = JSON.parse(localStorage.getItem('myCourses')) || [];
    myCourses = myCourses.filter(course => course !== courseName);
    localStorage.setItem('myCourses', JSON.stringify(myCourses));
    loadMyCourses();
}

// Call loadMyCourses when the page loads
window.onload = loadMyCourses;
