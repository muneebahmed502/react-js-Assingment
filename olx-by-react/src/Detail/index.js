import { Container, Row, Col, Button } from 'react-bootstrap';
import { getAllProducts, getSingleAd } from "../config/firebase"
import './index.css'
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Detail() {
  const { id } = useParams();
  const [detailItem, setdetailItem] = useState([])
  useEffect(() => {
    getDetail()
  }, [])

  async function getDetail() {
    // fetch(`https://dummyjson.com/products/${id}`)
    //   .then((res) => res.json())
    //   .then(res => setdetailItem(res))
    const res = await getSingleAd(id)
    console.log('res', res)
    setdetailItem(res)
  }
  console.log(detailItem.image)
  const {title, description, image } = detailItem
  // if (!title || !description || !image || !image.length) {
  //   console.error("Invalid detailItem structure");
  //   return null; // or display an error message
  // }
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  function like(sender){
  // emojie.src = 'data:image/jpeg;base64,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'
  var getclassname = sender.parentElement.parentElement.getElementsByClassName('emojies')[0]
  //   getclassname[0].append(emojie)
  getclassname.classList.remove('hide')
  sender.parentElement.classList.add('hide')
  }
  return <div>
    <div id="container" class="container-fluid">
      <div class="row" style={{ backgroundColor: '#f7f8f8' }}>
        <div class="col-3 col-md-2 "><img style={{ width: "60px", marginTop: '3%' }} class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" alt="icon" /></div>
        <div class="col-4 col-md-3 pt-1">
          <img src="data:image/png;base64,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" width={"40px"} alt="" />
          Motors</div>
        <div class="col-4 col-md-3 pt-2">
          <img width={'40px'} class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3885/3885073.png" alt="" />Property</div>
      </div>
      <div class="row" style={{ backgroundColor: '#f7f8f8', alignItems: 'center' }}>
        <div class="col">
          <nav class="navbar navbar-expand-md">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mt-2 col-12 col-lg-12">
                <li class="nav-item col-2 col-md-1 me-3">
                  <a class="nav-link active" aria-current="page" href="#">
                    <img style={{ width: "80", marginTop: "-23%" }} src="https://pixlok.com/wp-content/uploads/2021/04/OLX-Logo-PNG-768x768.jpg" class="img-fluid" alt="" /></a>
                </li>
                <li class="nav-item col-10 col-md-3 mt-1 me-3">
                  <form style={{ marginTop: '5%' }} action="">
                    <select class="form-select form-lg" name="" id="">
                      <option selected value="">chosse a country</option>
                      <option value="1">PAKISTAN</option>
                      <option value="2">AGHANISTAN</option>
                      <option value="3">Turke</option>
                      <option value="4">Saudia aribai</option>
                      <option value="5">Germeny</option>
                      <option value="6">Canada</option>
                    </select>
                  </form>
                </li>
                <li class="nav-item col-10 col-md-5 mt-1 me-3">
                  <form style={{ marginTop: '3%' }} action="" class="d-flex">
                    <div class="input-group">
                      <input class="form-control form-control-md" type="search" placeholder="find car mobile phone and more" aria-label="Search" />
                      <button class="btn btn-outline-secondary" type="submit">
                        <img width={23} src="https://assets.stickpng.com/images/585e4ae1cb11b227491c3393.png" alt="" />
                      </button>
                    </div>
                  </form>
                </li>
                <li style={{ marginTop: '-70%' }} class="nav-item col-2 col-md-1 text-center mt-2">
                  <a style={{ marginTop: '9%' }} class="nav-link" href="../login.html"><b style={{ fontSize: "larger" }}>LOGIN</b></a>
                </li>
                <li class="nav-item col-8 col-md-2 mt-2">
                  <button style={{ border: '10px solid', borderRadius: ' 20px', borderColor: 'blue yellow aqua', marginTop: '4%' }} >
                    +SELL</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <p class="d-inline-flex gap-1">
        <p data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <b>categories <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" width={'20px'} alt="" /></b>
          Mobile Phones {'\u00A0'}
          Car {'\u00A0'}
          Motorcycles {'\u00A0'}
          Houses {'\u00A0'}
          TV - Video - Audio {'\u00A0'}
          Tablets {'\u00A0'}
          Land & Plots {'\u00A0'}
        </p>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <div class="row">
            <div class="col-lg-4">
              <b>Mobiles</b><br />
              Mobile Phones<br />
              Accessories<br />
              Smart Watches<br />
              Tablets<br /><br />
              <b>Vehicles</b><br />
              Cars<br />
              Cars Accessories<br />
              Spare Parts<br />
              Buses, Vans & Trucks<br />
              Rickshaw & Chingchi<br />
              Tractors & Trailers<br />
              Cars on Installments<br />
              Other Vehicles<br />
              Boats<br /><br />
              <b>Property for Sale</b><br />
              Land & Plots
              Houses<br />
              Apartments & Flats<br />
              Shops - Offices - Commercial Space<br />
              Portions & Floors<br /><br />
            </div>
            <div class="col-lg-4">
              <b>Bikes</b><br />
              Motorcycles<br />
              Bicycles<br />
              Spare Parts<br />
              Bikes Accessories<br />
              ATV & Quads<br />
              Scooters<br /><br />
              <b>Business, Industrial & Agriculture</b><br />
              Other Business & Industry<br />
              Food & Restaurants<br />
              Medical & Pharma<br />
              Trade & Industrial Machinery<br />
              Construction & Heavy Machinery<br />
              Business for Sale<br />
              Agriculture<br /><br />
              <b>Services</b><br />
              Other Services<br />
              Tuitions & Academies<br />
              Car Rental<br />
              Home & Office Repair<br />
              Travel & Visa<br />
              Domestic Help<br />
              Web Development<br />
              Electronics & Computer Repair<br />
              Drivers & Taxi<br />
              Movers & Packers<br />
              Consultancy Services<br />
              Construction Services<br />
              Health & Beauty<br />
              Event Services<br />
              Farm & Fresh Food<br />
              Video & Photography<br />
              Architecture & Interior Design<br />
              Car Services<br />
              Catering & Restaurant<br />
              Renting Services<br />
              Camera Installation<br />
              Tailor Services<br />
              Insurance Services<br />
            </div>
            <div class="col-lg-4">
              <b>Jobs</b><br />
              Online<br />
              Other Jobs<br />
              Part Time<br />
              Marketing<br />
              Education<br />
              Sales<br />
              Customer Service<br />
              Domestic Staff<br />
              Restaurants & Hospitality<br />
              IT & Networking<br />
              Medical<br />
              Accounting & Finance<br />
              Graphic Design<br />
              Delivery Riders<br />
              Hotels & Tourism<br />
              Content Writing<br />
              Clerical & Administration<br />
              Manufacturing<br />
              Real Estate<br />
              Human Resources<br />
              Security<br />
              Engineering<br />
              Advertising & PR<br />
              Internships<br />
              Architecture & Interior Design<br /><br />
              <b>Animals</b><br />
              Hens<br />
              Parrots<br />
              Cats<br />
              Dogs<br />
              Other Birds<br />
              Pigeons<br />
              Pet Food & Accessories<br />
              Livestock<br />
              Fish<br />
              Finches<br />
              Rabbits<br />
              Doves<br />
              Other Animals<br />
              Ducks<br />
              Peacocks<br />
              Fertile Eggs<br />
              Horses<br />
            </div>
          </div>
        </div>
      </div>

      {/* <Container> */}
      <div id="container" class="container-fluid">
        <Row>
          <Col sm={8}>
            <div className="container mt-5">
              <Carousel style={{ width: '90%' }}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="Third slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <Card className='mt-3' style={{ width: '90%' }}>
              <Card.Body>
                {/* <Card.Title><h1>Rs : {price}$</h1></Card.Title> */}
                <br />
                <Card.Text>
                  <h3>
                    Title :  {title}
                  </h3>
                </Card.Text>
                <Card.Text>
                  {/* <h5>
                    {brand}
                  </h5> */}
                </Card.Text>
                <div className='emojies hide'>
        <img style={{ float: 'right', marginRight: '0px' }} width={'50px'} src="data:image/png;base64,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" alt="" />
     </div>
                <div  onClick={(e) => {like(e.target)}} style={{}}><img style={{ float: 'right', marginRight: '0px' }} width={50} src="https://static-00.iconduck.com/assets.00/heart-icon-512x461-rdoishra.png" alt="" /></div>
                <img style={{ float: 'right', marginRight: '20px' }} width={50} src="https://cdn-icons-png.flaticon.com/512/1358/1358023.png" alt="" />
              </Card.Body>
            </Card>
            <Card className='mt-3' style={{ width: '90%' }}>
              <Card.Body>
                <Card.Text>
                  <h1>Description</h1>
                  {description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
          <Card  className='mt-5' style={{ width: '100%',marginLeft:'-5%' }}>
      <Card.Body>
        <Card.Title><h4 className='details'><span><img width={'20%'} src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png" alt="" /></span>Muneeb</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Member Since Dec 2020</Card.Subtitle>
        <br />
        <Card.Text>
        <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Show Phone Number
      </Button>
      <Button variant="secondary" size="lg">
       Chat
      </Button>
    </div>.
        </Card.Text>
     
      </Card.Body>
    </Card>
    <Card className='mt-5' style={{ width: '100%',marginLeft:'-5%' }}>
      <Card.Body>
        <Card.Title><h1>Location</h1></Card.Title>
        <Card.Text>
          <img width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjwdZvFqJudRfAmH0P8oI0iQUm4Gf-6pDq2VUwEqBST8fRq9E_8xP69Vgcjou7wcSIRg&usqp=CAU" alt="" />
          G-8, Islamabad

        </Card.Text>
      </Card.Body>
    </Card>
          </Col>

        </Row>
        {/* </Container> */}
      </div>
      {/* Add more details as needed */}
      <div class="row container-fluid mt-4" style={{ backgroundColor: 'black', color: " white" }}>
        <div class="col-6 col-md-4 col-lg-2 mb-2 ">

          <b>TRENDING SEARCHES<br /></b>
          Bikes<br />
          Watches<br />
          Books<br />
          Dogs<br />
        </div>
        <div class="col-6 col-md-4 col-lg-2 mb-2 mt-2" >
          <b>ABOUT US</b><br />
          About Dubizzle Group<br />
          OLX Blog<br />
        </div>
        <div class="col-6 col-md-4 col-lg-2 mb-2 mt-2">
          <b>Contact Us</b><br />
          OLX for Businesses<br />
          OLX<br />
          Help<br />
          Sitemap<br />
          Terms of use<br />
          Privacy Policy<br />
        </div>
        <div class="col-6 col-md-4 col-lg-2 mb-2 mt-2">
          <b>Contact Us</b><br />
          OLX for Businesses<br />
          OLX<br />
          Help<br />
          Sitemap<br />
          Terms of use<br />
          Privacy Policy<br />
        </div>
        <div class="col-6 col-md-4 col-lg-2 mb-2 mt-2">
     <b>FOLLOW US</b>
     <img  src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="" height="20px" />
     <img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" height="20px" />
     <img src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="" height="20px" />
     <img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="" height="20px" /><br /><br />
     <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" height="30px" />
     <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" height="30px" />
     <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" height="30px" /><br />
     </div>

      </div>
    </div>

  </div>




 
   
    {/* <div class="col-6 col-md-4 col-lg-2 mb-2 mt-2">
     <b>FOLLOW US</b>
     <img  src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="" height="20px" />
     <img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="" height="20px" />
     <img src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="" height="20px" />
     <img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="" height="20px" /><br /><br />


     <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" height="30px" />
     <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" height="30px" />
     <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" height="30px" /><br />
     </div>
     </div>
   </div>
  //  </div> */}
}
export default Detail;