// const obj = {
//     name: 'Adilet',
//     age: 20,
// }
//
// // AJAX, XML => JSON
// // XHR -XML Nttp Request
//
// const button = document.querySelector('#btn')
//
// button.addEventListener('click', () => {
//     const xhr = new XMLHttpRequest() // 1. Создание запроса
//     xhr.open('GET','data.json')    // 2. Ууазание метода запроса и указание пути
//     xhr.setRequestHeader('Content-type', 'application/json') // 3. Указание заголовка запроса
//     xhr.send()// 4. Отправкпа запроса
//
//     xhr.addEventListener('load', () => {
//         const data = JSON.parse(xhr.response)
//         document.querySelector('.name').innerHTML = data.name
//         document.querySelector('.age').innerHTML = data.age
//     })
// })
//
// const subject = prompt('Subject')
//
// const doHomeWork = (finish, subject = 'Math') => {
//     console.log(`starting my ${subject} homework`)
//     console.log('Working...')
//     setTimeout(finish,3000)
// }
// const alertFinish = () => console.log('Finish homework!')
//
// doHomeWork(alertFinish, subject)
//
// const logger = (a = '1') => {
//     console.log(a)
// }
// logger()

const persons = [
    {
        name: 'Узумаки Наруто',
        age: 17,
        photo: 'https://avatars.mds.yandex.net/i?id=4f1049f0027d66787858235d17cdfde95c694104-10158687-images-thumbs&n=13'
    },
    {
        name: 'Учиха Саске',
        age: 17,
        photo: 'https://avatars.mds.yandex.net/i?id=5da1e7c9b4ecea532e5644c1d3ff576421bbddf7-8810682-images-thumbs&n=13'
    },
    {
        name: 'Харуно Сакура',
        age:16,
        photo: 'https://avatars.mds.yandex.net/i?id=794668257500d551db537fafcf019a773b07a4ef-10981924-images-thumbs&n=13'
    },
    {
        name: 'Хатаке Какаши',
        age: 30,
        photo: 'https://avatars.mds.yandex.net/i?id=5c97127a5b97b0ce247b5dd1d06bab25c9dc0551-10803837-images-thumbs&n=13'
    },
    {
        name: 'Учиха Итачи',
        age: 21,
        photo: 'https://avatars.mds.yandex.net/i?id=79b8d6d1872d9df4a5a418bab33bb5a44c994f3f-10807817-images-thumbs&n=13'
    },
    {
        name: 'Учиха Мадара',
        age: 150,
        photo: 'https://avatars.mds.yandex.net/i?id=df3fbcc093c88c14aba1d8a7f23554bed4fcf76f-4958646-images-thumbs&n=13'
    },
    {
        name: 'Джирая',
        age: 58,
        photo: 'https://avatars.mds.yandex.net/i?id=9649210a037b9ecc47a63a4b4e72bb15e96ceb83-10948701-images-thumbs&n=13'
    },
    {
        name: 'Орочимаро',
        age: 58,
        photo: 'https://avatars.mds.yandex.net/i?id=53e9948a2ce0ad7ac5840ff57c0ced46abb7d026-10914274-images-thumbs&n=13'
    },
    {
        name: 'Цунаде',
        age:58,
        photo: 'https://avatars.mds.yandex.net/i?id=83f72aefe8308e1e0d929faa0db819f7c67695a2-10310748-images-thumbs&n=13'
    },
    {
        name: 'Ямато',
        age: 26,
        photo: 'https://avatars.mds.yandex.net/i?id=c9593a83fb954dfac5d0722c79ab67ea9d8932c0-10411335-images-thumbs&n=13'
    },
    {
        name: 'Хината',
        age: 16,
        photo: 'https://avatars.mds.yandex.net/i?id=b0fb7c5eefb71e68b63c436600ee1fd63db27fdf-11003961-images-thumbs&n=13'
    },
    {
        name: 'Нагато',
        age: 34,
        photo: 'https://avatars.mds.yandex.net/i?id=b10bcecfadf7c06a5fdb5db1f6ae8ae4f1a4923d-9097903-images-thumbs&n=13'
    }

]

const personsWrapper = document.querySelector('.persons')

const defaultUserPHoto = 'https://avatars.mds.yandex.net/i?id=0a07125b1707daca2291f4970d23fbdfbc24daec-10811575-images-thumbs&n=13'

persons.forEach((person,personIndex) => {
    const personCard = document.createElement('div')
    personCard.setAttribute('class', 'personCard')

    personCard.innerHTML = `
        <div class="personImage">
                <img src="${person.photo || defaultUserPHoto}" alt="${person.name}">
        </div>
        <p>${person.name}</p>
        <p>Age: ${person.age}</p>
    `

    personsWrapper.append(personCard)
})










