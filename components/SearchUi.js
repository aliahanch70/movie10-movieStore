import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const people = [
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
]

function SearchUi() {

        const [selectedPerson, setSelectedPerson] = useState(people[0])
        const [query, setQuery] = useState('')

        const filteredPeople =
            query === ''
                ? people
                : people.filter((person) => {
                    return person.name.toLowerCase().includes(query.toLowerCase())
                })

    return (
        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
            <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(person) => person.name}
            />

            {/* Render a `div` instead of a `ul` */}
            <Combobox.Options as="div">
                {filteredPeople.map((person) => (
                    /* Render a `span` instead of a `li` */
                    <Combobox.Option as="span" key={person.id} value={person}>
                        {person.name}
                    </Combobox.Option>
                ))}
            </Combobox.Options>
        </Combobox>
    )
}

export default SearchUi;