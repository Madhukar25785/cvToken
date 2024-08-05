import React, { useEffect, useState } from 'react'
import _fetch from '../config/api';
import { base_url } from '../config/config'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const DirectIncome = () => {
    const [directIncome, setDirectINcome] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10); // Limit is fixed at 10 per page
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        const skip = (currentPage - 1) * limit;
        fetchData(skip);
    }, [currentPage, limit]);


    const handlePreviousPage = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = (e) => {
        e.preventDefault();
        const totalPages = Math.ceil(total / limit);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const fetchData = async () => {
        try {
            const request = await _fetch(`${base_url}/api/direct-staking-income`, 'GET', {}, {})
            // console.log("direct_staking_income", request);
            setDirectINcome(request.data)

        } catch (error) {
            console.log("Error fetching d   ata:", error);
        }
    }

    return (
        <>

            <div className='col-md-12 mt-5'>
                <div className='table-responsive'>
                    <h4 className='mt-3 px-3'>Latest Withdraw</h4>
                    <table className="mt-table mt-2">
                        <thead>
                            <tr>
                                <th scope="col">S No.</th>
                                <th scope="col">Holding</th>
                                <th scope="col">Income</th>
                                <th scope="col">Description</th>
                                <th scope='col'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {directIncome && directIncome.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.Holding}</td>
                                        <td>{item.Income}</td>
                                        <td>{item.Description}</td>
                                        <td>{item.Date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='market-table-footer'>
                        {directIncome && directIncome.length > 0 ? (
                            <>
                                <div className='total-page'>
                                    <p>Page {currentPage} of {Math.ceil(total / limit)}</p>
                                </div>
                                <div className='pagination-div'>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <a className="page-link page-link1" onClick={handlePreviousPage}>
                                                    <GrFormPrevious />
                                                </a>
                                            </li>

                                            <li className={`page-item`}>
                                                <a className="page-link page-link1" >
                                                    {currentPage}
                                                </a>
                                            </li>

                                            <li className={`page-item ${currentPage === Math.ceil(total / limit) ? 'disabled' : ''}`}>
                                                <a className="page-link page-link1" onClick={handleNextPage}>
                                                    <GrFormNext />
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </>
                        ) : (
                            null
                        )
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default DirectIncome

