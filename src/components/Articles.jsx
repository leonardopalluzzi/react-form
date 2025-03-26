import { useState } from 'react'
import Input from './Input'
import List from './List'
import UpdateOverlay from './UpdateOveraly'



export default function Articles({ data }) {
    const [newArticle, setNewArticle] = useState('')
    const [articlesList, setNewList] = useState(data)
    const [display, setDisplay] = useState('d-none')
    const [itemId, setItemId] = useState('')


    function handleSubmit(e, newArticle) {
        e.preventDefault()
        console.log('submit');

        setNewList([...articlesList, {
            id: articlesList.length + 1,
            title: newArticle
        }])

        setNewArticle('')
    }
    console.log(articlesList);

    function handleDelete(id) {
        console.log('delete');
        setNewList(articlesList.filter(item => item.id != id))

    }

    function handleEdit(id) {
        console.log('modify');
        setDisplay('d-block')
        setItemId(id)

    }

    function handleUpdate(e, newArticle) {
        e.preventDefault()
        console.log('submit');
        console.log(articlesList);


        const updatedList = articlesList.map(item => {

            if (item.id == itemId) {
                return {
                    ...item,
                    title: newArticle
                }
            } else {
                return {
                    ...item
                }
            }
        })

        setNewList(updatedList)
        setNewArticle('')
        setDisplay('d-none')

        console.log(updatedList);

    }


    return (
        <>
            <UpdateOverlay display={display} setDisplay={setDisplay} handleUpdate={handleUpdate} newArticle={newArticle} setNewArticle={setNewArticle} />
            <div className="container w-50">
                <List articlesList={articlesList} handleEdit={handleEdit} handleDelete={handleDelete} />
                <Input newArticle={newArticle} setNewArticle={setNewArticle} handleSubmit={handleSubmit} />
            </div>
        </>

    )
}