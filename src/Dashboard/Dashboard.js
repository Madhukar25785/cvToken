import React, { useEffect, useState } from 'react'
import _fetch from '../config/api'
import { base_url } from '../config/config'
import Nav from '../Dashboard/Navbar';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import '../assets/Css/css.css'

const Dashboard = () => {

    const [contractAddress, setContractAddress] = useState(null);
    const [rank, setRank] = useState([]);
    const [referralLink, setReferralLink] = useState(null);
    const [cappingStatus, setCappingStatus] = useState([]);
    const [transaction, setTransaction] = useState([]);
    const [token, setToken] = useState([]);
    const [account, setAccount] = useState([]);
    const [type, setType] = useState();
    const [amount, setAmount] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10); // Limit is fixed at 10 per page
    const [total, setTotal] = useState(0);
    const [toggle, setToggle] = useState(true);

    // console.log('rankrank', rank);

    const fetchData = async () => {
        try {
            const request = await _fetch(`${base_url}/api/dashboard`, 'GET', {}, {});
            // console.log('request------>', request);
            // console.log("request", request);
            setContractAddress(request?.contract_address);
            setReferralLink(request?.referral_link)
            setRank(request?.rank[0])
            setTransaction(request?.transaction)
            setCappingStatus(request?.capping_status_3x)
            setAccount(request?.account_details)
            setToken(request?.other_details)
            setTransaction(request?.transaction)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    const handleSwapButton = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const requestData = {
                type,
                amount,
            };

            const response = await fetch(`${base_url}/api/swap_token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
                body: JSON.stringify(requestData, token),
            });

            console.log("response", response);

            const data = await response.json();
            // console.log("data", data);

        } catch (error) {
            console.error('Error with token swap:', error);
        }
    };


    // console.log("transaction", transaction)
    // console.log("cappingStatus", cappingStatus);
    // console.log("account", account);
    // console.log("referral", referralLink);

    useEffect(() => {
        fetchData();
    }, []);

    const handleSwap = () => {
        const temp = type;
        setType(amount);
        setAmount(temp);
    };

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

    return (
        <div className='py-5'>
            <div className='row'>
                <form>
                    <div className='price-box col-lg-4 col-md-6 col-sm-6'>
                        <div class="price-box1">

                            <h6>Refferal Link</h6>
                            <input type="text" class="form-control" id="referralLink" value={referralLink ? (referralLink) : ''} />
                        </div>
                        <div class="price-box1">
                            <h6>Contract Address</h6>
                            <input type="text" class="form-control" id="contractAddress" value={contractAddress ? (contractAddress) : ''} />
                            <div className=''>
                                <h6>Rank</h6>
                                <input type="text" class="form-control" id="rank" value={rank ? `Rank : ${rank.rank} Achieved At ${rank.achieved_at}` : ''} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {<div className='row mt-5 px-2'>
                <div className='capping'>
                    <p className='center'>Capping Status (3X)</p>
                    <div className='row'>
                        {
                            cappingStatus && cappingStatus?.map((item, index) => {
                                return (
                                    <div className='center col-lg-3 col-md-6 col-sm-6 py-3'>
                                        <div key={index}>
                                            <div className='status'>
                                                <h6>{item.title}</h6>
                                                <p>{item.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>}


            <div className='row m-0'>
                <div className='list mt-5 col-lg-3 col-md-6 col-sm-6'>
                    <div className='account-list '>
                        <div className='center py-4'>
                            <h6>Account Details</h6>
                        </div>
                        {account?.map((item) => {
                            return (
                                <div className='details col-lg-4 col-md-6 col-sm-6'>
                                    <div className=''>
                                        <div className='details1'>
                                            <p>{item.title}</p>
                                            <h6>{item.value}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                    <div className='converter'>
                        <div className='converter1'>
                            <div className='center py-4'>
                                <h6>Currency Converter</h6>
                            </div>
                            <div className='currency'>
                                <form>
                                    <div className="reward-box">
                                        <div className="img-part">
                                            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png" alt="" />
                                            <p id="labelTop">USDT</p>
                                            <span>/</span>
                                            <input type="text" id='amount' className="form-control" value={type}
                                                onChange={(e) => setType(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button type='button' onClick={handleSwap}>converter</button>
                                    </div>
                                    <div>
                                        <div className="reward-box">
                                            <div className="img-part">
                                                <img src="https://decentralized-plan.jstechservices.us/stake/Assets/img/avatar.png" alt="" />
                                                <p id="labelTop">CVT</p>
                                                <span>/</span>
                                                <input type="text" id='amount' className="form-control" value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center gap-2'>
                                        <button type='submit' class='btn btn-info' onClick={handleSwapButton}>Swap</button>
                                        <button type='submit' class='btn btn-info'>Swap History</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row mt-5'>
                {token?.map((item, index) => {
                    return (
                        <div className='g-4 col-lg-4 col-md-6 col-sm-6'>
                            <div className="icon-box" key={index}>
                                <div className="icon-box1">
                                    <div className="box">
                                        <h6>{item.value}</h6>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


            <div className='col-md-12 mt-5'>
                <div className='table-responsive'>
                    <h4 className='mt-3 px-3'>Latest Withdrawals</h4>
                    <table className="mt-table mt-2">
                        <thead>
                            <tr className='border-b2'>
                                <th scope="col">S.No</th>
                                <th scope="col">Asset</th>
                                <th scope="col">Transaction Hash</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Payable Amount</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaction && transaction.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.asset}</td>
                                        <td>{item.transaction_hash}</td>
                                        <td>{item.date}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.payable_amount}</td>
                                        <td style={{ color: `${item.status === 'APPROVED' ? 'green' : item.status === 'REJECTED' ? 'red' : ''}` }}>{item.status}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='market-table'>
                        {transaction.length > 0 ? (
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
        </div>
    );
}

export default Dashboard;
