
const NavBar = () => {

    //const items = ['SUPER DUPER BUTTON', 'NOT SO SUPER BUTTON'] ///// follow up rec'g at 00:50:00
          

  return (
      <>

        <nav className="navbar bg-primary" data-bs-theme="dark">
                    <h1><button>HOME</button></h1>    <b>CLICK ON THE LOGO TO SEE CODING TEMPLE ON TWITTER!</b>      <h1><button>AWAY</button></h1>
         </nav>


          <nav className="navbar bg-body-tertiary">
              <form className="container-fluid justify-content-start">
                  <button className="btn btn-lg btn-outline-success me-5" type="button">Success Button</button>
                  <button className="btn btn-lg btn-outline-danger" type="button">Danger Button</button>
              </form>
          </nav>
          
          
          {/* <nav className="navbar bg-body-tertiary">
              <div className="container">
                  <a className="navbar-brand" href="https://twitter.com/codingtemple"a>
                      <img src="./src/assets/ct.logo.jpeg" alt="" width="650" height="350" class="d-inline-block align-text-top"></img>
                  </a>
              </div>
          </nav> */}
      </>
    );
};

export default NavBar;


// /Users/gabesanchez/Desktop/Week-9-Day-1---Intro-to-React/app/public/img/ct.logo.jpeg


//<a className="navbar-brand" href="#">




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