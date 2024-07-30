import React, { useEffect, useState } from 'react'
import _fetch from '../config/api'
import { base_url } from '../config/config'
import Nav from '../Dashboard/Navbar';
import '../assets/Css/css.css'

function Dashboard({ Toggle }) {

    const [contractAddress, setContractAddress] = useState(null);
    const [rank, setRank] = useState([]);
    const [referralLink, setReferralLink] = useState(null);
    const [cappingStatus, setCappingStatus] = useState([]);
    const [transaction, setTransaction] = useState([]);
    const [token, setToken] = useState([]);
    const [account, setAccount] = useState([]);
    const [type, setType] = useState();
    const [amount, setAmount] = useState();


    // console.log('rankrank', rank);

    const fetchData = async () => {
        try {
            const request = await _fetch(`${base_url}/api/dashboard`, 'GET', {}, {});
            // console.log('request------>', request);
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


    return (
        <div className='px-2'>
            <Nav Toggle={Toggle} />

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
                                            <p id="labelTop tex-light">USDT</p>
                                            <span>/</span>
                                            <input type="text" id='amount' className="form-control" value={type}
                                                onChange={(e) => setType(e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <button type='button' onClick={handleSwap}>converter</button>
                                    </div>
                                    <div>
                                        <div className="reward-box">
                                            <div className="img-part"   >
                                                <img className='cvt' src="https://decentralized-plan.jstechservices.us/stake/Assets/img/avatar.png" alt="" />
                                                <p id="labelTop">CVT</p>
                                                <span>/</span>
                                                <input type="text" id='amount' className="form-control" value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button type='submit' class='btn btn-primary' onClick={handleSwapButton}>Swap</button>
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
                    <h4 className='mt-3 px-3'>Latest Withdraw</h4>
                    <table className="mt-table mt-2">
                        <thead>
                            <tr>
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
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
