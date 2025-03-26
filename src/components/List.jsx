export default function List({ articlesList, handleEdit, handleDelete }) {
    return (
        <>
            {
                articlesList.map(item => (
                    <div key={item.id} className="article my-4">
                        <ul className='row'>
                            <li>
                                <h3 className='col-8'>{item.title}
                                    <button onClick={() => handleEdit(item.id)} className='btn btn-warning col-2 mx-4'>Edit</button>
                                    <button onClick={() => handleDelete(item.id)} className='btn btn-danger col-2'>X</button>
                                </h3>
                            </li>
                        </ul>
                    </div>
                ))
            }
        </>
    )
}