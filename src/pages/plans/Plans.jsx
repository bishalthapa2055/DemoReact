import "./plans.css"

import ComponentsHeaders from "../../components/ComponentsHeaders"

import Card from "../../pages/UI/Cards";
import { plans } from "../../../data";

const Plans = () => {
  return (
    <>
    <ComponentsHeaders title="Membership Plan" image="https://d11airhslbrx5o.cloudfront.net/static/header_bg_4.jpg" >
      <p>
      Provided below are the memberships plan according to our system which helps each and individuals to apply for membership plans <div className=""></div>
      </p>
    </ComponentsHeaders>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id , name , desc , price , features})  =>{
            return(
              <>
              <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
                <h4>Features  </h4>
               {
                features.map(({feature , available}) =>{
                  return (
                    <>
                    <p key={feature} className={!available ? 'disabled' : ''}>
                      {feature}
                    </p>
                    </>
                  )
                })
               }
               <button className='btn lg'>Choose Plan</button>
              </Card>
              </>
            )
            
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans