function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
function loadCategoryCourses() {
    //checkUserSignedIn(); // Ensure the user is signed in

    const categoryTitle = document.getElementById('categoryTitle');
    const coursesContainer = document.getElementById('coursesContainer');
    coursesContainer.innerHTML = ''; // Clear the container first
    const categoryName = getQueryParameter('name');
    console.log(categoryName);

    fetch("./courses.json")
        .then(response => response.json())
        .then(data => {
           /* if (!data.ok) {
                throw new Error
                    (`HTTP error! Status: ${data.status}`);
            }*/
            const category = data.categories.find(cat => cat.name === categoryName);

            if (category) {
                categoryTitle.textContent = `Category: ${category.name}`;

                category.courses.forEach(course => {
                    const courseDiv = document.createElement('div');
                    courseDiv.className = 'course-item';

                    courseDiv.innerHTML = `
                        <h2>${course.name}</h2>
                        <img src="${course.image}" alt="${course.name}" class="course-image">
                        <p>${course.description}</p>
                        <button onclick="startCourse(${course.id}, '${course.name}')">Start Course</button>
                    `;

                    coursesContainer.appendChild(courseDiv);
                });
            } else {
                categoryTitle.textContent = "Category not found";
                coursesContainer.innerHTML = '<p>There are no courses available in this category.</p>';
            }
        })
        .catch(error => console.error('Error loading courses:', error));
}

function startCourse(courseId, courseName) {
  let myCourses = JSON.parse(localStorage.getItem('myCourses')) || [];
  if (!myCourses.includes(courseName)) {
      myCourses.push(courseName);
      localStorage.setItem('myCourses', JSON.stringify(myCourses));
      alert(courseName + " has been added to My Courses!");
  } else {
      alert(courseName + " is already in My Courses.");}
  }
  backBtn.addEventListener('click', () => {
    window.location.href = './tracks.html';
});
document.addEventListener('DOMContentLoaded', loadCategoryCourses());
