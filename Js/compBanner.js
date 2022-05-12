const compBanner = () => {
  const banner = document.querySelector('#compBanner');
  banner.innerHTML+=`
  
       <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

            <ol class="carousel-indicators">
                <li data-target="#carousel-example" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example" data-slide-to="1"></li>
                <li data-target="#carousel-example" data-slide-to="2"></li>
            </ol>


            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="/Images/foods/image1.PNG" alt="First slide">
                    <div class="carousel-caption">
                        <h3>COCO UOGO</h3>
                        <div class="carousel-caption-description">
                            <p>Whole Cheeses</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/Images/foods/image2.PNG" alt="Second slide">
                    <div class="carousel-caption">
                        <h3>LOCALE MARKET</h3>
                        <div class="carousel-caption-description">
                            <p>The newest.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/Images/foods/image3.PNG" alt="Third slide">
                    <div class="carousel-caption">
                        <h3>WILDFLOWERX</h3>
                        <div class="carousel-caption-description">
                            <p>Poke & More.</p>
                        </div>
                    </div>
                </div>
            </div>

            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
  
   
  `;
}

export {compBanner}