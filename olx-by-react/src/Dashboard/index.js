import { useEffect,useState } from "react"
import {useNavigate } from "react-router-dom"
import { getAllProducts } from "../config/firebase"
function Dashboard(){
  const navigate = useNavigate()
    const[products,setproducts] = useState([]) 

    useEffect(() =>{
        getproducts()
    },[])
    async function getproducts(){
        // fetch('https://dummyjson.com/products')
        // .then((res) => res.json() )
        // .then(res => setproducts(res.products))
        const res = await getAllProducts()
        console.log('res', res)
        setproducts(res)
    }
    console.log(products)
    // const cont = document.getElementsByClassName('producted')
    // var row
    // for (let i= 0; i < products.length; i++){
    //   if (i % 4 == 0)
    //   {
    //     row = document.createElement('div')
    //     row.className = 'row row-cols-1 row-cols-md-4 g-4 '
    //     cont.append(row)
    //   }
    // }
    return <div>
      <div id="container" class="container-fluid">
<div class="row" style={{backgroundColor:'#f7f8f8'}}>
<div class="col-3 col-md-2 "><img style={{width: "60px", marginTop:'3%'}} class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" alt="icon" /></div>
<div class="col-4 col-md-3 pt-1">
<img src="data:image/png;base64,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" width={"40px"} alt="" />
Motors</div>
<div class="col-4 col-md-3 pt-2">
  <img width={'40px'} class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3885/3885073.png" alt="" />Property</div>
</div>
<div class="row" style={{backgroundColor: '#f7f8f8', alignItems: 'center'}}>
<div class="col">
<nav class="navbar navbar-expand-md">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mt-2 col-12 col-lg-12">
      <li class="nav-item col-2 col-md-1 me-3">
                  <a class="nav-link active" aria-current="page" href="#">
                  <img style={{width: "80", marginTop: "-31%"}}  src="https://pixlok.com/wp-content/uploads/2021/04/OLX-Logo-PNG-768x768.jpg" class="img-fluid" alt="" /></a>
                  </li>
                  <li class="nav-item col-10 col-md-3 mt-1 me-3">
                  <form action="">
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
                  <form action="" class="d-flex">
                  <div class="input-group">
                  <input class="form-control form-control-md" type="search" placeholder="find car mobile phone and more" aria-label="Search" />
                  <button class="btn btn-outline-secondary" type="submit">
                    <img width={23} src="https://assets.stickpng.com/images/585e4ae1cb11b227491c3393.png" alt="" />
                  </button>
                  </div>
                  </form>   
                  </li>
                  <li style={{marginTop: '-70%'}} class="nav-item col-2 col-md-1 text-center mt-2">
                  <a style={{marginTop:'-5%'}} class="nav-link" href="../login.html"><b style={{fontSize: "larger"}}>LOGIN</b></a>
                  </li>
                  <li class="nav-item col-8 col-md-2 mt-2">
                  <button style={{border: '10px solid',borderRadius:' 20px', borderColor: 'blue yellow aqua' , marginTop: '-3%'}} >
    +SELL</button> 
                  </li>
      </ul>
      </div>
</nav>
</div>
</div>
<p class="d-inline-flex gap-1">
<p  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
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
Houses<br/>
Apartments & Flats<br/>
Shops - Offices - Commercial Space<br/>
Portions & Floors<br/><br />
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
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
  <img src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp" class="d-block w-100" alt="" />
</div>
<div class="carousel-item">
  <img src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp" class="d-block w-100" alt="" />
</div>
<div class="carousel-item">
  <img src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp" class="d-block w-100" alt="" />
</div>
</div>
</div>
</div>
<div>
<div className="container-fluid mt-2 mb-6">
  <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
    {products.map(item => {
      const { title, description, id, image} = item;
      return (
        <div key={id} className="col mb-4">
          <div className="card h-100" onClick={() => navigate('detail/'+id)}>
            <img style={{height:'250px'}} src={image} className="card-img-top w-100" alt="" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  </div></div>
     

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
    }  
    
export default Dashboard;