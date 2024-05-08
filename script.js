
console.log('Hello, World!');
fetch('https://reqres.in/api/users')
    .then(response =>  response.json())
    .then(data => {
        console.log(data);
        const suggestionList = document.getElementById('suggestion');
        data.data.forEach(user => {
            const nameItem = document.createElement('li');
            nameItem.textContent = `Name: ${user.first_name} ${user.last_name}`;
            suggestionList.appendChild(nameItem);
        })

        // Apply CSS styling to replace bullet with square
        const listItems = suggestionList.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.listStyleType = 'square';
        }
    })
    .catch(error => console.log('Something went wrong!', error));
