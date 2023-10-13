(function (){
    function createSelect(id) {
        const select = document.getElementById(id)
        const valueItem = select.querySelector('.select__value')
        const listItem = select.querySelector('.select__list')
        const nativeItem = select.querySelector('.select__native')

        const options = nativeItem.querySelectorAll('option')
        Array.from(options).forEach((option) => {
            const value = option.value
            const item = document.createElement('div')
            item.innerText = value
            item.classList.add('select__item')
            listItem.appendChild(item)
        })

        valueItem.onclick = () => {
            select.classList.toggle('select_open')
        }

        listItem.onclick = (event) => {
            const item = event.target
            const value = item.innerText
            valueItem.innerText = value
            select.classList.remove('select_open')
        }
    }

    createSelect('select')


}) ()