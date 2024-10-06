document.addEventListener('DOMContentLoaded', () => {
   
    const courseNameElem = document.getElementById('courseName');
    const videoTitleElem = document.getElementById('videoTitle');
    const backBtn = document.getElementById('backBtn');
    const videoContainer = document.querySelector('#videoContainer');
    const videoList = document.querySelector('aside');
    const backVideoBtn = document.getElementById('backVideoBtn');
    const nextVideoBtn = document.getElementById('nextVideoBtn');

    

    function getQueryParameter(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    window.onload = () => {
        const selectedCourse = getQueryParameter('id');

        fetch('./courses.json')
            .then(response => response.json())
            .then(data => {
                courseNameElem.textContent = data.title;
                let courseVideos;
                data.categories.forEach(category => {
                    category.courses.forEach(course => {
                        if(course => course.id === selectedCourse){
                            courseVideos = course.videos;
                        }
                    })
                });
                console.log(courseVideos);


                let currentVideoIndex = 0;

                function loadVideo(index) {
                    const video = courseVideos[index];
                    videoTitleElem.textContent = video.title; // Update the title

                    // Embed YouTube video using iframe
                    videoContainer.innerHTML = `<iframe width="100%" height="450px" src="${video.url}" frameborder="0" allowfullscreen></iframe>`;
                }

                function loadVideoList() {
                    courseVideos.forEach((video, index) => {
                        const videoItem = document.createElement('div');
                        videoItem.textContent = video.title;
                        videoItem.classList.add('video-item');
                        videoItem.addEventListener('click', () => {
                            currentVideoIndex = index;
                            loadVideo(index);
                        });
                        videoList.appendChild(videoItem);
                    });
                }
                loadVideoList();
                loadVideo(currentVideoIndex);

                backVideoBtn.addEventListener('click', () => {
                    if (currentVideoIndex > 0) {
                        currentVideoIndex--;
                        loadVideo(currentVideoIndex);
                    }
                });

                nextVideoBtn.addEventListener('click', () => {
                    if (currentVideoIndex < courseVideos.length - 1) {
                        currentVideoIndex++;
                        loadVideo(currentVideoIndex);
                    }
                });
            });

        backBtn.addEventListener('click', () => {
            window.location.href = 'myCourses.html';
        });
    }
});
