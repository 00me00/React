import React from 'react'

const Footer = () => {
  return (
      <footer>
       <div className=" bg-body-secondary  py-5">
    <div className="row py-5">
      <div className='col col-6'>
      <h4 className="m-auto">Cinema App</h4>
      <p>A simple and typical web page on every website available on the Internet allows visitors to learn about the website's history as well as the website owner.</p>
      </div>
      
      <div className='col col-2'>
        <h6><u>Company:</u></h6>
        <ul className='list-unstyled'>
          <li className='b'>About</li>
          <li className='b'>Careers</li>
          <li className='b'>Our Culture</li>
          <li className='b'>Partners</li>
          <li className='b'>Blog</li>
        </ul>
      </div>
      <div className='col col-2'>
        <h6><u>Watch Free:</u></h6>
        <ul className='list-unstyled'>
          <li className='z'>Movies</li>
          <li className='z'>Series</li>
          <li className='z'>What to watch</li>
          <li className='z'>Collection</li>
        </ul>
      </div>
      <div className='col col-2'>
      <h6><u>Follow Us:</u></h6>
               <ul className="list-unstyled">
                   <li  className='a '><a href="https://www.facebook.com/your-page" ><i className="fa-brands fa-facebook text-dark"></i></a></li>
                   <li  className='a'><a href="https://instagram.com/your-handle" ><i className="fa-brands fa-instagram text-dark"></i></a></li>
                   <li  className='a' ><a href="https://www.linkedin.com/in/your-profile" ><i className="fa-brands fa-linkedin text-dark"></i></a></li>
               </ul>
      </div>
    </div>
           <p className='m-auto'>&copy;2023 Right Preserved Cinema App</p>
       </div>
      
    </footer>
  )
}

export default Footer