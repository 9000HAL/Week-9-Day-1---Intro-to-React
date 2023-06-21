
const NavBar = () => {
    //const items = ['SUPER DUPER BUTTON', 'NOT SO SUPER BUTTON'] ///// follow up rec'g at 00:50
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-outline-success me-2" type="button">Main button</button>
                    <button className="btn btn-sm btn-outline-secondary" type="button">Other button</button>
                </form>
            </nav>


            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="" alt="CT_Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
                    </a>
                </div>
            </nav>







            
        </>



    );
};

export default NavBar;





/*

/////////////////////////////////////////////////////////////////////////////

///////////----------BOOTSTRAP STOCK NAVBAR
<h1>NavBar</h1>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                            Bootstrap
                    </a>
                </div>
            </nav>

            */