export default function List({ articlesList, handleEdit, handleDelete }) {
    return (
        <>
            {
                articlesList.map(item => (
                    <div key={item.id} className="col-4 gy-4" >
                        <div className="card">
                            <div className="card-body">
                                <h3 className='col-8'>{item.title}</h3>
                                <p>{item.content}</p>
                                <button onClick={() => handleEdit(item.id)} className='btn btn-warning col-2 mx-4'>Edit</button>
                                <button onClick={() => handleDelete(item.id)} className='btn btn-danger col-2'>X</button>
                            </div>
                        </div>
                    </div >
                ))
            }
        </>
    )
}