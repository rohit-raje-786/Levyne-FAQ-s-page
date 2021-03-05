import React, { Component } from 'react'
import './Body.css'
import Content from './content' 
export default class Body extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        
        return (
            <div>
                <div className="header">
                   <h1>Frequently asked questions</h1>
                </div>
                
                <Content question="Can we only contact you through website form or is there an Email-ID or Contact Number?"
                ans="Customer can directly contact us on our Contact Number (9:00 a.m.-6:00 p.m) :+912235530703 Email-ID :contact@levyne.com"/>
                <Content question="Can we ask Levyne to add a new feature?"
                ans="Yes,definitely.Improving customer experience is our responsibility.If a feature is practical,it will surely be added in future updates."/>
                <Content question="Are only branded and high profile tailors and fashion designers allowed to sell on Levyne?"
                ans="No.Tailor and fashion designer from fields and areas of fashion creation can sell on Levyne.We however,have a quality control in order to maintain the standard of products being sold on our platform."/>
                <Content question="Can customer contact the fashion designer or tailor before and after buying or ordering their products?" ans="Yes.Customer can definitely connect to the fashion designer and tailors.In case of a poor response from their side,customer can mail or call us.We'll leave no stones unturned to help you."/>
                <Content question="Since Levyne is also a platform for fabric dealers,can customers trust all the dealer?"
                ans="We do make sure that all dealers on our platform sell genuine products through our quality assurance methods. If customers feel that the quality of fabric described online doesn't meet the product standards, then customers can get their product replaced. "/>
            </div>
        )
    }
}
