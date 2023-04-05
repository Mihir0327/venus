<section className="property">
<div className="center">
  <h3>Popular Designs</h3>
</div>

<div className="row">

{
  detail.map((detail)=>{
    return(
      <div className="column">
        <div className="single-property">
          <div className="card">


            <div className="property-thumb max-w-xs">
              
              <img src={detail.Image} alt="" />
            </div>

            <div className="property-content">
              <h3>{detail.title}</h3>
             

              
            </div>

           

          </div>
        </div>
      </div>

    )
  })
}


</div>


<div className="more-property"></div>
<a href="#" className="property-btn">More Designs</a>
</section>