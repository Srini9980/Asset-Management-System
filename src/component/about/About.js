import React from 'react';
import { useNavigate } from 'react-router-dom';
import ab1 from '../assets/ab1.webp';

function About() {

    const navigate = useNavigate();

    return (
        <div style={{ backgroundImage: `url(${ab1})`, width: "100%", height: "2350px", color:"whitesmoke"}}>
            <div>
                <div><br></br>
                    <h2><b><u><i>Asset - Management - System</i></u></b></h2>
                    <p style={{fontSize:"20px"}}>An asset management company (AMC) is an asset management / investment management company/firm that invests the pooled
                        funds of retail investors in securities in line with the stated investment objectives. For a fee, the company/firm provides
                        more diversification, liquidity, and professional management consulting service than is normally available to individual
                        investors. The diversification of portfolio is done by investing in such securities which are inversely correlated to each
                        other. Money is collected from investors by way of floating various collective investment schemes, e.g. mutual fund schemes.
                        In general, an AMC is a company that is engaged primarily in the business of investing in, and managing, portfolios of
                        securities. A study by consulting firm Casey Quirk, which is owned by Deloitte, found that asset management firms ended
                        2020 with record highs in both revenue and assets under management.</p><br></br>
                </div>
                <div>
                    <h3 style={{fontSize:"30px"}}>Largest Companies in the world(as of 2022)</h3><br></br>
                    <table border="4px solid black" align="center" style={{fontSize:"20px"}}>
                        <tr>
                            <th>Rank</th>
                            <th>Firm/Company</th>
                            <th>Country</th>
                            <th>AUM (billion USD)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>BlackRock</td>
                            <td>United States</td>
                            <td>9,570</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Vanguard Group</td>
                            <td>United States</td>
                            <td>8,100</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>UBS</td>
                            <td>Switzerland</td>
                            <td>4,380</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Fidelity Invsetments</td>
                            <td>United States</td>
                            <td>4283</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>State Street Global Advisors</td>
                            <td>United States</td>
                            <td>4,020</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Morgan Stanley</td>
                            <td>United States</td>
                            <td>3,230</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>JPMorgan Chase</td>
                            <td>United States</td>
                            <td>2,960</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Allianz</td>
                            <td>Germany</td>
                            <td>2,760</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Capital Group</td>
                            <td>United States</td>
                            <td>2,700</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Goldman Sachs</td>
                            <td>United States</td>
                            <td>2,394</td>
                        </tr>
                    </table><br></br>
                </div>
                <div style={{fontSize:"20px"}}>
                    <h3>History :</h3>
                    <p style={{fontSize:"20px"}}>The company was established in 1983 through a management buy-out of an investment trust.It was then listed on the
                        London Stock Exchange in 1991.In recent years, it has seen significant growth from acquisitions. In 2000 it
                        acquired Murray Johnstone, followed by Edinburgh Fund Managers in 2003, parts of Deutsche Asset Management in 2005
                        and 2007,Glasgow Investment Managers in 2007, Goodman Property Investors in 2008, certain investment businesses
                        of Credit Suisse Asset Management in 2009, and certain contracts and assets from RBS Asset Management in 2010.</p>
                    <p>In November 2013, Lloyds Banking Group sold Scottish Widows Investment Partnership (SWIP) to Aberdeen Asset Management
                        in a £660m deal.The deal made Aberdeen Asset Management the second largest listed fund manager in Europe after Schroders,
                        currently managing £308.1bnIn May 2015, the firm agreed to acquire its US counterpart Flag Capital Management for
                        an undisclosed deal that would double the private equity assets under the company's control.</p>
                    <p>The Company sponsored The Boat Race between 1999 and 2001.In 2010 it signed a four-year sponsorship agreement with the
                        Dad Vail Regatta to be title sponsor until 2013, the event's 75th Anniversary. The agreement has helped to keep the
                        famous college rowing regatta in Philadelphia, the Group's North American headquarters.In March 2012 it took over
                        sponsorship of golf's Scottish Open for the following three years. Other sponsorships include the Cowes Week sailing
                        regatta, Aberdeen Brunei Senior Masters Golf Tournament,Edinburgh Rugby club,professional golfers Colin Montgomerie
                        and Paul Lawrie, and former Formula One driver Paul di Resta.</p><br></br>
                </div>
                <div style={{fontSize:"20px"}}>
                    <h3>Operations</h3>
                    <p>The company operated mainly in the United Kingdom but had a growing presence worldwide, particularly Asia, Oceania and
                        the Americas, with over 2,500 staff, across 37 offices in 25 countries. Its headquarters were in the city of Aberdeen,
                        where Group functions including legal, group information and human resources were located, and it had its major investment
                        desks in London, Philadelphia and Singapore.</p><br></br>
                </div>
                <div style={{fontSize:"20px"}}>
                    <h3>Assets:</h3>
                    <p>In financial accounting, an asset is any resource owned or controlled by a business or an economic entity. It is
                        anything (tangible or intangible) that can be used to produce positive economic value. Assets represent value of
                        ownership that can be converted into cash (although cash itself is also considered an asset). The balance sheet of
                        a firm records the monetary value of the assets owned by that firm. It covers money and other valuables belonging
                        to an individual or to a business.</p>
                    <p>Assets can be grouped into two major classes: tangible assets and intangible assets. Tangible assets contain
                        various subclasses, including current assets and fixed assets.Current assets include cash, inventory, accounts
                        receivable, while fixed assets include land, buildings and equipment.Intangible assets are non-physical resources
                        and rights that have a value to the firm because they give the firm an advantage in the marketplace. Intangible
                        assets include goodwill, copyrights, trademarks, patents, computer programs,and financial assets, including
                        financial investments, bonds, and stocks.</p><br></br>
                </div>
                <div style={{fontSize:"20px"}}>
                    <h3>Shipments</h3>
                    <p>Shipping is the transportation of cargo.Cargo consists of bulk goods conveyed by water, air, or land. In economics,
                        freight is cargo that is transported at a freight rate for commercial gain. Cargo was originally a shipload but now
                        covers all types of freight, including transport by rail, van, truck, or intermodal container.The term cargo is
                        also used in case of goods in the cold-chain, because the perishable inventory is always in transit towards a final
                        end-use, even when it is held in cold storage or other similar climate-controlled facility. The term freight is
                        commonly used to describe the movements of flows of goods being transported by any mode of transportation.</p>
                    <p>Multi-modal container units, designed as reusable carriers to facilitate unit load handling of the goods contained,
                        are also referred to as cargo, specially by shipping lines and logistics operators. Similarly, aircraft ULD boxes are
                        also documented as cargo, with associated packing list of the items contained within. When empty containers are shipped
                        each unit is documented as a cargo and when goods are stored within, the contents are termed as containerised cargo.</p><br></br>
                </div>
                <div style={{fontSize:"20px"}}>
                    <h3>Warehouses : </h3>
                    <p>A warehouse is a building for storing goods.Warehouses are used by manufacturers, importers, exporters, wholesalers,
                        transport businesses, customs, etc. They are usually large plain buildings in industrial parks on the outskirts of
                        cities, towns, or villages.</p>
                    <p>They usually have loading docks to load and unload goods from trucks. Sometimes warehouses are designed for the loading
                        and unloading of goods directly from railways, airports, or seaports. They often have cranes and forklifts for moving
                        goods, which are usually placed on ISO standard pallets and then loaded into pallet racks. Stored goods can include any
                        raw materials, packing materials, spare parts, components, or finished goods associated with agriculture, manufacturing,
                        and production. In India and Hong Kong, a warehouse may be referred to as a "godown".There are also godowns in the Shanghai
                        Bund.</p><br></br>
                </div>
            </div>
            <button className='btn btn-secondary' onClick={()=>(navigate(-1))}>Back</button>
        </div>
    )
}

export default About;