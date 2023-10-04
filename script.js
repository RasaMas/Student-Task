function init() {
    const studentForm = document.querySelector('#student-form')
    const studentsList = document.querySelector('#students-list')

    studentForm.addEventListener('submit', function(event) {
        event.preventDefault()

        const form = event.target

        const name = document.querySelector('#name').value
        const surname = studentForm.querySelector('#surname').value
        const age = form.querySelector('#age').value

        const phone = form.phone.value
        const email = form.email.value
        const itKnowledge = form['it-knowledge'].value

        const group = form.group.value
        const interests = form.querySelectorAll('input[name="interests"]:checked')

        const studentItem = document.createElement('div')
        studentItem.classList.add('student-item')

        const nameElement = document.createElement('h2')
        nameElement.textContent = `${name} ${surname}`

        const ageElement = document.createElement('p')
        ageElement.textContent = `Age: ${age}`

        const phoneElement = document.createElement('p')
        phoneElement.textContent = `Phone: ${phone}`

        const emailElement = document.createElement('p')
        emailElement.textContent = `Email: ${email}`

        const itKnowledgeElement = document.createElement('p')
        itKnowledgeElement.textContent = `IT Knowledge: ${itKnowledge}`

        const groupElement = document.createElement('p')
        emailElement.textContent = `Group: ${group} gr`
        
        const interestsWrapper = document.createElement('div')
        interestsWrapper.classList.add('interests-wrapper')

        const interestsTitle = document.createElement('h3')
        interestsTitle.textContent = 'Interests:'

        const interestsList = document.createElement('ul')

        for (let i = 0; i < interests.length; i++) {
            const interestsItem = document.createElement('li')
            interestsItem.textContent = interests[i].value
            interestsList.append(interestsItem)
        }

        interestsWrapper.append(interestsTitle, interestsList)

        studentItem.append(nameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, interestsWrapper)
        srudentsList.prepend(studentItem)

        form.reset
    })
}

init()