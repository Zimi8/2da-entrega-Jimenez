import CartWidget from '../cartwidget/cartwidget'

const NavBar = () => {
    return (  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
              <button className="margin nav-item nav-link active">Principal</button>
              <button className="margin nav-item nav-link">Productos Annah</button>
              <button className="margin nav-item nav-link">Historia</button>
              <button className="margin nav-item nav-link">Cotizá</button>
          </div>
      </div>
      <CartWidget/>
    </nav >
    )
}

export default NavBar

