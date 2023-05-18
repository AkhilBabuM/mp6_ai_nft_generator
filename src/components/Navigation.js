import { ethers } from 'ethers';

import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap'
import logo from '../assets/melo_logo.png'
//import { Link } from 'react-router-dom';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (<>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
           <Navbar.Brand href="#home">
                    <img
                    src={logo}
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
              
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="flex-grow-1 pe-3 justify-content-end">
                        <Nav.Link to="http://localhost:3001/">Home</Nav.Link>
                        <Nav.Link to="/my-listed-items">My Listed Items</Nav.Link>
                        <Nav.Link to="/my-purchases">My Purchases</Nav.Link>
                    </Nav>
                    <Nav>
                    {account ? (
                <Button
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </Button>
            ) : (
                <Button
                    onClick={connectHandler}
                >
                    Connect
                </Button>
            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/*<nav>
            <div className='nav__brand'>
                <h1>AI NFT Generator</h1>
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
            </nav>*/}
    </>
        
    );
}

export default Navigation;