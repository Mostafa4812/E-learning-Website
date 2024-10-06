    var Allcat;
    var xhr = new XMLHttpRequest();
    xhr.open("GET","./courses.json")

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4  && xhr.status == 200) {

    Allcat=JSON.parse(xhr.response);

        Allcat.categories.forEach(cate => {
    const anchor = document.createElement('a');
    anchor.href = `course.html?name=${cate.name}`;

    const card = document.createElement('div');
    card.id = 'card1';
    
    const img = document.createElement('img');
    img.id = 'img1';
    img.src =cate.image;

    const p1 = document.createElement('p');
    p1.id = 'p1';
    p1.textContent =cate.name;

    const p2 = document.createElement('p');
    p2.id = 'p2';
    p2.textContent =cate.description;

    card.appendChild(img);
    card.appendChild(p1);
    card.appendChild(p2);

    anchor.appendChild(card);

    document.body.appendChild(anchor);
    anchor.addEventListener('click',function(){
        
    var date = new Date();
    date.setDate(date.getDate() + 3);

    document.cookie = "categoriesid" + "=" + cate.id + ";expires=" + date;

        });

    });

////
    }}

xhr.send()



