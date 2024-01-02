import e1 from '../images/7.jpg'
export default function Navbar() {
  return (

    <section className='d-flex justify-content-around bg-black'>
        <input type="search" placeholder='search here' className='form-control-lg w-25 text-center text-warning ' />
<img src={e1} alt="" className='rounded-circle' width={70} />
<ul className='navlink'>
    <li><a href="#!">About</a></li>
    <li><a href="#!">Contact</a> </li>
 
</ul>
    </section>
  )
}
