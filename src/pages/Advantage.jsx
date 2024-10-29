import React, { useEffect, useState } from 'react'
import ScrollToTopButton from './ScrollToTopButton'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Advantage() {
  const [selectedSection, setSelectedSection] = useState(null);
  const handleMouseEnter = (section) => setSelectedSection(section);
  const handleMouseLeave = () => setSelectedSection(null);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the animation duration in milliseconds
      once: false,    // Set to false to allow animations on each scroll
      mirror: true,   // Enable animations on scroll up as well
    });
    AOS.refresh(); // Refresh AOS to detect elements on load
  }, []);

  return (
    <div className='m-14 py-8'>

      <div className="breadcrumbs text-sm px-6 md:px-36">
        <ul>
          <li><a>Home</a></li>
          <li><a >How we work Avontage</a></li>
        </ul>
      </div>

      <section className="content-section md:items-center md:justify-center md:mr-14">
        <div className="flex flex-col lg:flex-row md:items-center md:justify-center">
          <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-16">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-600 mb-6 lg:mb-10 text-start" style={{ color: '#281A2A' }}>
              The Power Of<br />
              Investour Hospitality
            </h1>
            <div className="flex my-2">
              <div className="w-1 h-[210px] lg:h-20" style={{ backgroundColor: '#281A2A' }}></div>
              <p className="text-base md:text-2lg lg:text-lg mb-6 font-500 text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4" style={{ color: '#281A2A' }}>
                Investour Hospitality succeeds when you do. Our team looks forward to working with you to understand your hotel development goals, offer our hospitality expertise and support your business objectives to achieve long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1358.54 954.51" className="transition-all duration-300 transform hover:scale-105 md:max-h-96">
          <g id="The_Power_Of_Investour" data-name="The Power Of Investour" transform="translate(-282.72 -56.41)">
            <g id="Calque_1"

            >
              <path id="Tracé_1489" data-name="Tracé 1489" d="M919.43,613H659.68A309.226,309.226,0,0,1,651,540c0-141.91,95.65-261.46,226-297.72V540h.01c-.01.12-.01.25-.01.37A83.321,83.321,0,0,0,919.43,613Z" fill={selectedSection === "Tracé_1489" ? "#a945d1" : "#662d91"}
                onMouseEnter={() => handleMouseEnter("Tracé_1489")}
                onMouseLeave={handleMouseLeave}
                className=" cursor-pointer"
              />
              <path id="Tracé_1490" data-name="Tracé 1490" d="M1257.72,457H960.37c-.12,0-.25,0-.37.01a83.33,83.33,0,0,0-73,43.73V239.68A309.226,309.226,0,0,1,960,231C1101.91,231,1221.46,326.65,1257.72,457Z" fill={selectedSection === "Tracé_1490" ? "#a945d1" : "#662d91"}
                onMouseEnter={() => handleMouseEnter("Tracé_1490")}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer"
              />
              <path id="Tracé_1491" data-name="Tracé 1491" d="M1033,581.31V840.32A309.226,309.226,0,0,1,960,849c-141.91,0-261.46-95.65-297.72-226H949.32A83.449,83.449,0,0,0,1033,581.31Z" fill={selectedSection === "Tracé_1491" ? "#a945d1" : "#662d91"}
                onMouseEnter={() => handleMouseEnter("Tracé_1491")}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer"
              />
              <path id="Tracé_1492" data-name="Tracé 1492" d="M1269,540c0,141.91-95.65,261.46-226,297.72V551.42A83.473,83.473,0,0,0,1000,467h260.32a309.223,309.223,0,0,1,8.68,73Z" fill={selectedSection === "Tracé_1492" ? "#a945d1" : "#662d91"}
                onMouseEnter={() => handleMouseEnter("Tracé_1492")}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer"
              />
              <path id="Tracé_1493" data-name="Tracé 1493" d="M960,918.5a377.264,377.264,0,1,1,147.33-29.74A376.232,376.232,0,0,1,960,918.5Zm0-755a375.3,375.3,0,1,0,146.55,29.59A373.975,373.975,0,0,0,960,163.5Zm0,736a358.379,358.379,0,1,1,139.93-28.25A357.345,357.345,0,0,1,960,899.5Zm0-717a356.353,356.353,0,1,0,139.15,28.09A355.259,355.259,0,0,0,960,182.5ZM960,850a307.015,307.015,0,0,1-189.09-64.33A312.041,312.041,0,0,1,661.32,623.26l-.35-1.27H949.46a81.2,81.2,0,0,0,10.92.73,82.555,82.555,0,0,0,71.76-41.91l1.87-3.31V841.1l-.76.19A310.908,310.908,0,0,1,960.01,850ZM663.6,624A310.107,310.107,0,0,0,772.13,784.09,305.074,305.074,0,0,0,960,848a308.886,308.886,0,0,0,72-8.47V584.95a84.556,84.556,0,0,1-71.63,39.78,86.05,86.05,0,0,1-11.12-.73ZM1042,839.04V551.29a81.425,81.425,0,0,0,.73-10.92,82.376,82.376,0,0,0-43.21-72.49L996.05,466H1261.1l.19.76A310.908,310.908,0,0,1,1270,540a307.016,307.016,0,0,1-64.33,189.09,312.041,312.041,0,0,1-162.41,109.59l-1.27.35Zm2-287.55V836.41a310.107,310.107,0,0,0,160.09-108.53A305.074,305.074,0,0,0,1268,540.01a308.886,308.886,0,0,0-8.47-72H1003.77a84.359,84.359,0,0,1,40.96,72.37,86.284,86.284,0,0,1-.73,11.12ZM923.24,614H658.9l-.19-.76A310.846,310.846,0,0,1,650,540a307.015,307.015,0,0,1,64.33-189.09A312.041,312.041,0,0,1,876.74,241.32l1.27-.35V539.01h.08l-.08,1.08v.29a82.532,82.532,0,0,0,41.92,71.76l3.31,1.87Zm-262.77-2H915.79A84.553,84.553,0,0,1,876,540.37V243.59A310.107,310.107,0,0,0,715.91,352.12,305.074,305.074,0,0,0,652,539.99a308.886,308.886,0,0,0,8.47,72ZM886,504.69V238.89l.76-.19A310.91,310.91,0,0,1,960,229.99a307.015,307.015,0,0,1,189.09,64.33,312.041,312.041,0,0,1,109.59,162.41l.35,1.27H959.99a82.384,82.384,0,0,0-72.12,43.21l-1.88,3.47Zm2-264.22v256.5a84.363,84.363,0,0,1,71.96-40.96H1256.4a310.106,310.106,0,0,0-108.53-160.09A305.074,305.074,0,0,0,960,232.01a308.886,308.886,0,0,0-72,8.47Z" fill="#0a1d5a" />
              <path id="Tracé_1494" data-name="Tracé 1494" d="M1260.32,467H1000a83.473,83.473,0,0,1,43,84.42v286.3c130.35-36.26,226-155.81,226-297.72A309.223,309.223,0,0,0,1260.32,467ZM960,457.01c.12-.01.25-.01.37-.01h297.35C1221.46,326.65,1101.91,231,960,231a309.226,309.226,0,0,0-73,8.68V500.74a83.33,83.33,0,0,1,73-43.73Zm.37,166.72a83.826,83.826,0,0,1-11.05-.73H662.28C698.54,753.35,818.09,849,960,849a309.226,309.226,0,0,0,73-8.68V581.31A83.333,83.333,0,0,1,960.37,623.73ZM877,540.37c0-.12,0-.25.01-.37H877V242.28C746.65,278.54,651,398.09,651,540a309.226,309.226,0,0,0,8.68,73H919.43A83.321,83.321,0,0,1,877,540.37Z" fill="none" stroke="#0a1d5a" stroke-miterlimit="10" stroke-width="2" />
              <circle id="Ellipse_4" data-name="Ellipse 4" cx="38" cy="38" r="38" transform="translate(922 135)" fill="#0a1d5a" />
              <circle id="Ellipse_5" data-name="Ellipse 5" cx="38" cy="38" r="38" transform="translate(552 502)" fill="#0a1d5a" />
              <circle id="Ellipse_6" data-name="Ellipse 6" cx="38" cy="38" r="38" transform="translate(1286 502)" fill="#0a1d5a" />
              <circle id="Ellipse_7" data-name="Ellipse 7" cx="38" cy="38" r="38" transform="translate(1109 818)" fill="#0a1d5a" />
              <circle id="Ellipse_8" data-name="Ellipse 8" cx="38" cy="38" r="38" transform="translate(732 818)" fill="#0a1d5a" />
              <path id="Tracé_1495" data-name="Tracé 1495" d="M887,238v1.68q-5.04,1.2-10,2.6V238Z" fill="none" />
              <path id="Tracé_1496" data-name="Tracé 1496" d="M1043,837.72V841h-10v-.68q5.04-1.2,10-2.6Z" fill="none" />
              <path id="Tracé_1497" data-name="Tracé 1497" d="M960.37,457c-.12,0-.25,0-.37.01h0Z" fill="none" />
              <path id="Tracé_1498" data-name="Tracé 1498" d="M662.28,623H651V613h8.68q1.2,5.04,2.6,10Z" fill="none" />
              <path id="Tracé_1499" data-name="Tracé 1499" d="M1035.83,100l-.83.65-38.92,30.16,1.84,2.38L1036.87,103l1.05-.81-1.69-2.19Z" fill="#1b1464" />
              <path id="Tracé_1500" data-name="Tracé 1500" d="M1474,100v3H1035v-2.35l1.7-.65Z" fill="#1b1464" />
              <text id="REVENUE_MANAGEMENT" data-name="REVENUE MANAGEMENT" transform="translate(1151.06 83.41)" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">REVENUE MANAGEMENT</tspan></text>
              <text id="DIGITAL" transform="translate(1383.26 522.41)" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">DIGITAL</tspan></text>
              <text id="Best-in-class_pricing_strategies_inventory_management_and_demand_forecasting_tools_maximize_hotel_revenue" data-name="Best-in-class pricing strategies, inventory 
management, and demand forecasting tools 
maximize hotel revenue" transform="translate(1152.9 129.92)" font-size="18" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">Best-in-class pricing strategies, inventory </tspan><tspan x="0" y="21.6">management, and demand forecasting tools </tspan><tspan x="0" y="43.2">maximize hotel revenue</tspan></text>
              <text id="Industry_leading_websites_and_mobile_apps_allow_guests_to_book_direct_on_our_lowest_cast_channels" data-name="Industry leading websites and 
mobile apps allow guests to book 
direct on our lowest cast channels" transform="translate(1383.26 565.29)" font-size="18" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">Industry leading websites and </tspan><tspan x="0" y="21.6">mobile apps allow guests to book </tspan><tspan x="0" y="43.2">direct on our lowest cast channels</tspan></text>
              <text id="CREDIT_CARD_RATES_Favorable_credit_card_interchange_rates" data-name="CREDIT CARD RATES

Favorable credit card 
interchange rates" transform="translate(993.9 343.28)" fill="#fff" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">CREDIT CARD RATES</tspan><tspan font-size="14.333"><tspan x="0" y="19"></tspan></tspan><tspan font-size="13" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="37">Favorable credit card </tspan><tspan x="0" y="54">interchange rates</tspan></tspan></text>
              <text id="SHARED_SERVICES_Shared_costs_drive_efficiencies" data-name="SHARED SERVICES

Shared costs drive 
efficiencies" transform="translate(843.9 692.73)" fill="#fff" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">SHARED SERVICES</tspan><tspan font-size="14.333"><tspan x="0" y="19"></tspan></tspan><tspan font-size="13" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="37">Shared costs drive </tspan><tspan x="0" y="54">efficiencies</tspan></tspan></text>
              <text id="INTERMEDIARY_CONTRACTS_Favorable_intermediary_commission_rates" data-name="INTERMEDIARY 
CONTRACTS

Favorable 
intermediary 
commission rates" transform="translate(1067.9 615.73)" fill="#fff" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">INTERMEDIARY </tspan><tspan x="0" y="20">CONTRACTS</tspan><tspan font-size="14.333"><tspan x="0" y="39"></tspan></tspan><tspan font-size="13" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="57">Favorable </tspan><tspan x="0" y="74">intermediary </tspan><tspan x="0" y="91">commission rates</tspan></tspan></text>
              <text id="OTA_BUSINESS_TERMS_Industry-leading_terms" data-name="OTA BUSINESS 
TERMS

Industry-leading 
terms" transform="translate(715.9 399.73)" fill="#fff" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">OTA BUSINESS </tspan><tspan x="0" y="20">TERMS</tspan><tspan font-size="14.333"><tspan x="0" y="39"></tspan></tspan><tspan font-size="13" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="57">Industry-leading </tspan><tspan x="0" y="74">terms</tspan></tspan></text>
              <path id="Tracé_1501" data-name="Tracé 1501" d="M1212.23,935l1.69-2.19-1.05-.81-38.95-30.19-1.84,2.38L1211,934.35l.83.65Z" fill="#1b1464" />
              <path id="Tracé_1502" data-name="Tracé 1502" d="M1303,935v-3h-92v2.35l.36.65Z" fill="#1b1464" />
              <path id="Tracé_1503" data-name="Tracé 1503" d="M1488,541v-3H1372v2.35l.45.65Z" fill="#1b1464" />
              <text id="RESERVATIONS" transform="translate(339.69 522.41)" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">RESERVATIONS</tspan></text>
              <g id="Groupe">
                <text id="Fully_integrated_platform_with_" data-name="Fully integrated platform with " transform="translate(282.72 566.92)" font-size="18" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">Fully integrated platform with </tspan></text>
                <text id="revenue_management_" data-name="revenue management, " transform="translate(350.11 588.52)" font-size="18" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">revenue management, </tspan></text>
                <text id="eCommerce_PMS_and_GDS" data-name="eCommerce, PMS and GDS" transform="translate(307.49 610.12)" font-size="18" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">eCommerce, PMS and GDS</tspan></text>
              </g>
              <path id="Tracé_1504" data-name="Tracé 1504" d="M542,541v-3H342v2.35l.78.65Z" fill="#1b1464" />
              <text id="SALES" transform="translate(1222.06 918.41)" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">SALES</tspan></text>
              <text id="Global_regional_and_property_based_sellers_fill_hotels_through_deep_customer_relationships_and_in-depth_market_knowledge" data-name="Global, regional and property based sellers 
fill hotels through deep customer 
relationships and in-depth market knowledge" transform="translate(1222.06 961.92)" font-size="18" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">Global, regional and property based sellers </tspan><tspan x="0" y="21.6">fill hotels through deep customer </tspan><tspan x="0" y="43.2">relationships and in-depth market knowledge</tspan></text>
              <path id="Tracé_1505" data-name="Tracé 1505" d="M705.25,927l.83-.65L745,896.19l-1.84-2.38L704.21,924l-1.05.81,1.69,2.19Z" fill="#1b1464" />
              <path id="Tracé_1506" data-name="Tracé 1506" d="M583,927v-3H706.08v2.35l-.48.65Z" fill="#1b1464" />
              <text id="LOYALTY" transform="translate(581.06 913.41)" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">LOYALTY</tspan></text>
              <g id="Groupe-2" data-name="Groupe">
                <text id="Largest_hotel_loyalty_platform_with_members_" data-name="Largest hotel loyalty platform with members " transform="translate(298.35 951.92)" font-size="18" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">Largest hotel loyalty platform with members </tspan></text>
                <text id="who_stay_more_often_and_spend_more" data-name="who stay more often and spend more" transform="translate(359.75 973.52)" font-size="18" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">who stay more often and spend more</tspan></text>
              </g>
              <g id="Calque_1-2" data-name="Calque_1">
                <path id="Tracé_1507" data-name="Tracé 1507" d="M913.33,523.71h2.97v1.97a4.669,4.669,0,0,1,4.02-2.24c2.92,0,4.58,1.93,4.58,4.92v8.21h-2.95v-7.31c0-2.02-1-3.14-2.75-3.14s-2.9,1.17-2.9,3.19v7.26h-2.97V523.7h0Z" fill="#6e3d90" />
                <path id="Tracé_1508" data-name="Tracé 1508" d="M926.76,523.71h3.17l3.46,9.45,3.49-9.45h3.09l-5.26,12.96h-2.66l-5.29-12.96h0Z" fill="#6e3d90" />
                <path id="Tracé_1509" data-name="Tracé 1509" d="M941.04,530.19v-.05c0-3.7,2.61-6.7,6.29-6.7,4.09,0,6.17,3.22,6.17,6.92a8.03,8.03,0,0,1-.05.83h-9.46a3.564,3.564,0,0,0,3.7,3.27,4.692,4.692,0,0,0,3.49-1.54l1.73,1.54a6.541,6.541,0,0,1-5.26,2.41,6.431,6.431,0,0,1-6.6-6.68h0Zm9.53-.95c-.2-1.88-1.32-3.39-3.27-3.39-1.83,0-3.07,1.36-3.34,3.39h6.6Z" fill="#6e3d90" />
                <path id="Tracé_1510" data-name="Tracé 1510" d="M955.42,534.89l1.32-2a7.275,7.275,0,0,0,4.22,1.58c1.27,0,2-.54,2-1.39v-.05c0-.97-1.36-1.34-2.88-1.8-1.88-.51-4.02-1.32-4.02-3.75v-.05c0-2.46,2.02-3.95,4.58-3.95a8.9,8.9,0,0,1,4.73,1.46l-1.17,2.1a7.522,7.522,0,0,0-3.63-1.22c-1.15,0-1.8.56-1.8,1.27v.05c0,.93,1.39,1.36,2.9,1.83,1.85.59,4,1.44,4,3.75v.05c0,2.7-2.1,4.04-4.78,4.04a8.863,8.863,0,0,1-5.46-1.93h0Z" fill="#6e3d90" />
                <path id="Tracé_1511" data-name="Tracé 1511" d="M969.04,533.01v-6.77h-1.63V523.7h1.63v-3.53h2.95v3.53h3.46v2.54h-3.46v6.31a1.408,1.408,0,0,0,1.58,1.61,4.108,4.108,0,0,0,1.83-.44v2.41a5.128,5.128,0,0,1-2.66.66c-2.17,0-3.7-.95-3.7-3.78h0Z" fill="#6e3d90" />
                <path id="Tracé_1512" data-name="Tracé 1512" d="M977.38,530.21v-.05a6.862,6.862,0,0,1,13.72-.05v.05a6.74,6.74,0,0,1-6.9,6.7,6.618,6.618,0,0,1-6.82-6.65h0Zm10.77,0v-.05a3.971,3.971,0,0,0-3.95-4.14,3.89,3.89,0,0,0-3.88,4.09v.05a3.985,3.985,0,0,0,3.92,4.12,3.847,3.847,0,0,0,3.9-4.07h0Z" fill="#6e3d90" />
                <path id="Tracé_1513" data-name="Tracé 1513" d="M993.95,531.89V523.7h2.95v7.31c0,2.02,1,3.12,2.75,3.12s2.9-1.15,2.9-3.17V523.7h2.97v12.87h-2.97v-2a4.65,4.65,0,0,1-4.02,2.27c-2.92,0-4.58-1.93-4.58-4.95Z" fill="#6e3d90" />
                <path id="Tracé_1514" data-name="Tracé 1514" d="M1009.18,523.71h2.97v2.9a4.532,4.532,0,0,1,4.56-3.14v3.12h-.17c-2.61,0-4.39,1.68-4.39,5.09v4.9h-2.97V523.71h0Z" fill="#6e3d90" />
                <path id="Tracé_1515" data-name="Tracé 1515" d="M909.14,519.51v17.06h-.01v25.37h-2.99v-7.19H898v7.19h-3V544.88h3v7.09h8.14v-15.4h0V519.51Z" fill="#6e3d90" />
                <path id="Tracé_1516" data-name="Tracé 1516" d="M912.48,555.58v-.05a6.862,6.862,0,0,1,13.72-.05v.05a6.74,6.74,0,0,1-6.9,6.7,6.618,6.618,0,0,1-6.82-6.65h0Zm10.77,0v-.05a3.971,3.971,0,0,0-3.95-4.14,3.89,3.89,0,0,0-3.88,4.09v.05a3.985,3.985,0,0,0,3.92,4.12,3.847,3.847,0,0,0,3.9-4.07h0Z" fill="#6e3d90" />
                <path id="Tracé_1517" data-name="Tracé 1517" d="M928.15,560.26l1.32-2a7.275,7.275,0,0,0,4.22,1.58c1.27,0,2-.54,2-1.39v-.05c0-.97-1.36-1.34-2.88-1.8-1.88-.51-4.02-1.32-4.02-3.75v-.05c0-2.46,2.02-3.95,4.58-3.95a8.9,8.9,0,0,1,4.73,1.46l-1.17,2.1a7.522,7.522,0,0,0-3.63-1.22c-1.15,0-1.8.56-1.8,1.27v.05c0,.93,1.39,1.36,2.9,1.83,1.85.59,4,1.44,4,3.75v.05c0,2.7-2.1,4.04-4.78,4.04a8.863,8.863,0,0,1-5.46-1.93h0Z" fill="#6e3d90" />
                <path id="Tracé_1518" data-name="Tracé 1518" d="M941.38,549.07h2.97v2.14a5.123,5.123,0,0,1,4.39-2.41c3.02,0,5.97,2.39,5.97,6.68v.05c0,4.29-2.92,6.68-5.97,6.68a5.24,5.24,0,0,1-4.39-2.27v5.9h-2.97V549.07Zm10.33,6.46v-.05a3.832,3.832,0,0,0-3.68-4.12,3.9,3.9,0,0,0-3.75,4.12v.05a3.866,3.866,0,0,0,3.75,4.12C950.05,559.65,951.71,558.07,951.71,555.53Z" fill="#6e3d90" />
                <path id="Tracé_1519" data-name="Tracé 1519" d="M957.81,544.29h3.17v2.8h-3.17Zm.09,4.78h2.97v12.87H957.9Z" fill="#6e3d90" />
                <path id="Tracé_1520" data-name="Tracé 1520" d="M965.34,558.38v-6.77h-1.63v-2.54h1.63v-3.53h2.95v3.53h3.46v2.54h-3.46v6.31a1.408,1.408,0,0,0,1.58,1.61,4.108,4.108,0,0,0,1.83-.44v2.41a5.128,5.128,0,0,1-2.66.66c-2.17,0-3.7-.95-3.7-3.78h0Z" fill="#6e3d90" />
                <path id="Tracé_1521" data-name="Tracé 1521" d="M973.87,558.23v-.05c0-2.8,2.19-4.14,5.34-4.14a10.554,10.554,0,0,1,3.46.54v-.32c0-1.85-1.12-2.8-3.19-2.8a9,9,0,0,0-3.68.8l-.8-2.32a11.529,11.529,0,0,1,4.87-1.05,5.679,5.679,0,0,1,4.26,1.44,5.375,5.375,0,0,1,1.39,3.97v7.63h-2.88v-1.61a5.232,5.232,0,0,1-4.19,1.88c-2.41,0-4.58-1.36-4.58-3.97h0Zm8.84-.92v-.88a8.182,8.182,0,0,0-2.92-.51c-1.93,0-3.02.78-3.02,2.14v.05c0,1.24,1.07,1.95,2.51,1.95,1.95,0,3.44-1.1,3.44-2.75h0Z" fill="#6e3d90" />
                <path id="Tracé_1522" data-name="Tracé 1522" d="M989.2,544.15h2.97v17.79H989.2Z" fill="#6e3d90" />
                <path id="Tracé_1523" data-name="Tracé 1523" d="M996.07,544.29h3.17v2.8h-3.17Zm.1,4.78h2.97v12.87h-2.97Z" fill="#6e3d90" />
                <path id="Tracé_1524" data-name="Tracé 1524" d="M1003.6,558.38v-6.77h-1.63v-2.54h1.63v-3.53h2.95v3.53h3.46v2.54h-3.46v6.31a1.408,1.408,0,0,0,1.58,1.61,4.108,4.108,0,0,0,1.83-.44v2.41a5.128,5.128,0,0,1-2.66.66c-2.17,0-3.7-.95-3.7-3.78h0Z" fill="#6e3d90" />
                <path id="Tracé_1525" data-name="Tracé 1525" d="M1021.93,549.07H1025l-5.12,13.21c-1.05,2.66-2.17,3.63-4.24,3.63a5.84,5.84,0,0,1-3.05-.8l1-2.17a3.737,3.737,0,0,0,1.73.49c.85,0,1.34-.37,1.83-1.46l-5.36-12.89h3.17l3.61,9.55,3.36-9.55h0Z" fill="#6e3d90" />
              </g>
              <g id="Groupe_4" data-name="Groupe 4"
                onMouseEnter={() => handleMouseEnter("Groupe_4")}
                onMouseLeave={handleMouseLeave}
                className={`${selectedSection === 'Groupe_4' ? '-translate-y-2' : ''} `}

              >
                <path id="Tracé_1526" data-name="Tracé 1526" d="M961.19,171.67a2.94,2.94,0,1,0-2.94-2.94A2.945,2.945,0,0,0,961.19,171.67Zm0-4.41a1.47,1.47,0,1,1-1.47,1.47A1.472,1.472,0,0,1,961.19,167.26Z" fill="#fff" />
                <rect id="Rectangle_24" data-name="Rectangle 24" width="1.47" height="2.94" transform="translate(979.59 149.6)" fill="#fff" />
                <rect id="Rectangle_25" data-name="Rectangle 25" width="2.94" height="1.47" transform="translate(981.06 152.54)" fill="#fff" />
                <path id="Tracé_1527" data-name="Tracé 1527" d="M981.06,154.01h-1.47v2.65a13.144,13.144,0,0,0-8.81-3.39,13.418,13.418,0,0,0-9.35,3.87l-.24.24-.24-.24a13.223,13.223,0,0,0-18.7,18.7l2.44,2.44h-6.32v9.57h7.37v-1.31l2.8.56h4.96l7.67,7.68,18.94-18.94a13.189,13.189,0,0,0-.23-18.89h1.15v-2.94Zm-36.78,32.38h-4.43v-6.62h1.47v5.15h1.47v-5.15h1.49v6.62Zm4.49-.74-3.02-.6v-3.81h5.37l2.32-1.54,5.95-2.09a.812.812,0,0,1,.63.04.765.765,0,0,1,.4.48.8.8,0,0,1-.39.94l-4.11,2.19,2.9,1.45h6.98l2.53-1.38a.611.611,0,0,1,.51-.05.639.639,0,0,1,.08,1.18l-3.55,1.75-7.19,1.44h-9.42Zm-3.02-5.89v-.41l.41.41Zm11.01-8.42a5.268,5.268,0,0,1-.55-1.32l-.14-.55h-1.5V168h1.5l.14-.55a5.118,5.118,0,0,1,.55-1.32l.29-.49-1.06-1.06,1.04-1.04,1.06,1.06.49-.29a5.267,5.267,0,0,1,1.32-.55l.55-.14v-1.5h1.47v1.5l.55.14a5.118,5.118,0,0,1,1.32.55l.49.29,1.06-1.06,1.04,1.04-1.06,1.06.29.49a5.268,5.268,0,0,1,.55,1.32l.14.55h1.5v1.47h-1.5l-.14.55a5.118,5.118,0,0,1-.55,1.32l-.29.49,1.06,1.06-1.04,1.04-1.06-1.06-.49.29a5.267,5.267,0,0,1-1.32.55l-.55.14v1.5h-1.47v-1.5l-.55-.14a5.118,5.118,0,0,1-1.32-.55l-.49-.29-1.06,1.06-1.04-1.04,1.06-1.06Zm6.27,9.9.74-1.85a.593.593,0,0,1,1-.12.567.567,0,0,1,.08.52l-.49,1.45Zm19.5-14.74a11.671,11.671,0,0,1-3.44,8.31l-17.9,17.9-5.59-5.59h2.73l7.43-1.48,3.81-1.85a2.114,2.114,0,1,0-1.95-3.75l-1.61.88.22-.66a2.046,2.046,0,0,0-3.84-1.41l-.96,2.39h-2.27l-.04-.02,1.59-.85a2.271,2.271,0,0,0,1.11-2.67,2.217,2.217,0,0,0-.51-.88h2.07v-1.86c.22-.08.43-.17.64-.27l1.31,1.31,3.12-3.12-1.31-1.31c.1-.21.19-.42.27-.64h1.86v-4.41h-1.86c-.08-.22-.17-.43-.27-.64l1.31-1.31-3.12-3.12-1.31,1.31c-.21-.1-.42-.19-.64-.27v-1.86h-4.41v1.86c-.22.08-.43.17-.64.27l-1.31-1.31-3.12,3.12,1.31,1.31c-.1.21-.19.42-.27.64h-1.86v4.41h1.86c.08.22.17.43.27.64l-1.31,1.31,3.12,3.12,1.31-1.31c.21.1.42.19.64.27v1.23a.172.172,0,0,0-.08.02l-6.04,2.12-2.19,1.43h-2.43l-4.95-4.95a11.752,11.752,0,0,1,16.62-16.62l1.28,1.28,1.28-1.28a11.752,11.752,0,0,1,20.06,8.31Z" fill="#fff" />
                <rect id="Rectangle_26" data-name="Rectangle 26" width="2.94" height="1.47" transform="translate(976.64 152.54)" fill="#fff" />
                <rect id="Rectangle_27" data-name="Rectangle 27" width="1.47" height="2.94" transform="translate(947.21 157.69)" fill="#fff" />
                <rect id="Rectangle_28" data-name="Rectangle 28" width="2.94" height="1.47" transform="translate(948.68 160.64)" fill="#fff" />
                <rect id="Rectangle_29" data-name="Rectangle 29" width="1.47" height="2.94" transform="translate(947.21 162.11)" fill="#fff" />
                <rect id="Rectangle_30" data-name="Rectangle 30" width="2.94" height="1.47" transform="translate(944.27 160.64)" fill="#fff" />
                <rect id="Rectangle_31" data-name="Rectangle 31" width="1.47" height="1.47" transform="translate(972.23 167.99)" fill="#fff" />
                <rect id="Rectangle_32" data-name="Rectangle 32" width="1.47" height="1.47" transform="translate(973.7 169.47)" fill="#fff" />
                <rect id="Rectangle_33" data-name="Rectangle 33" width="1.47" height="1.47" transform="translate(972.23 170.94)" fill="#fff" />
                <rect id="Rectangle_34" data-name="Rectangle 34" width="1.47" height="1.47" transform="translate(970.76 169.47)" fill="#fff" />
              </g>
              <g id="Groupe_5" data-name="Groupe 5"
                onMouseEnter={() => handleMouseEnter("Groupe_5")}
                onMouseLeave={handleMouseLeave}
                className={`${selectedSection === 'Groupe_5' ? '-translate-y-2' : ''} `}
              >
                <path id="Tracé_1528" data-name="Tracé 1528" d="M1325.01,546.89a6.835,6.835,0,1,1,6.8-6.86A6.839,6.839,0,0,1,1325.01,546.89Zm2.84-7.55a.715.715,0,1,0,.72.72.721.721,0,0,0-.72-.71Zm-2.33,3.6a.675.675,0,0,0-.68-.73.728.728,0,0,0-.74.69.744.744,0,0,0,.7.74.715.715,0,0,0,.73-.7Zm-3.39-3.9a.705.705,0,1,0-.04,1.41.7.7,0,0,0,.73-.69.713.713,0,0,0-.69-.73Zm3.3-2.54a.721.721,0,0,0-.71.72.713.713,0,0,0,.72.7.7.7,0,0,0,.71-.71.721.721,0,0,0-.72-.71Z" fill="#fff" />
                <path id="Tracé_1529" data-name="Tracé 1529" d="M1307.63,540.77a2.885,2.885,0,1,1-3.81-3.42,2.83,2.83,0,0,1,3.63,1.54.6.6,0,0,0,.68.44c2.55-.01,5.1-.02,7.64,0a1.086,1.086,0,0,1,.75.28.774.774,0,0,1,.08.72,1,1,0,0,1-.71.41c-1.06.04-2.13.02-3.19.01h-5.06Z" fill="#fff" />
                <path id="Tracé_1530" data-name="Tracé 1530" d="M1325.69,522.72v8.05c0,.69-.24,1.02-.73,1.01s-.71-.32-.71-.99v-7.64c0-.3-.05-.47-.37-.59a2.826,2.826,0,0,1-1.75-3.15,2.879,2.879,0,1,1,3.94,3.15c-.12.05-.25.1-.39.16Z" fill="#fff" />
                <path id="Tracé_1531" data-name="Tracé 1531" d="M1325.69,553.08v3.95a.443.443,0,0,0,.32.49,2.868,2.868,0,0,1,1.74,3.47,2.9,2.9,0,0,1-3.18,2.06,2.844,2.844,0,0,1-2.46-3.04,2.709,2.709,0,0,1,1.75-2.45.552.552,0,0,0,.4-.62c-.01-2.59,0-5.18,0-7.77,0-.53.28-.84.72-.84s.71.3.71.8v3.95Z" fill="#fff" />
                <path id="Tracé_1532" data-name="Tracé 1532" d="M1342.29,539.33c.84-1.73,1.98-2.41,3.45-2.09a2.876,2.876,0,0,1,.08,5.6c-1.51.36-2.65-.3-3.53-2.08h-6.28c-.63,0-1.26.01-1.89,0-.57,0-.88-.28-.87-.75.01-.43.33-.69.87-.69h8.16Z" fill="#fff" />
                <path id="Tracé_1533" data-name="Tracé 1533" d="M1340.09,526.32c0,1,.03,1.99-.02,2.98a1.275,1.275,0,0,1-.35.81c-.88.85-1.8,1.67-2.73,2.47a1.186,1.186,0,0,1-.72.27c-1.56.02-3.12.01-4.67.01-.54,0-.85-.26-.86-.7,0-.46.31-.73.87-.73h4.18a.933.933,0,0,0,.56-.2q1.035-.885,2.04-1.83a.855.855,0,0,0,.25-.57c.03-.72,0-1.44.02-2.16a.44.44,0,0,0-.33-.48,2.872,2.872,0,1,1,2.39-.13c-.19.1-.38.17-.62.28Zm.71-2.77a1.442,1.442,0,0,0-1.37-1.48,1.436,1.436,0,1,0-.1,2.87A1.437,1.437,0,0,0,1340.8,523.55Z" fill="#fff" />
                <path id="Tracé_1534" data-name="Tracé 1534" d="M1309.86,553.77v-2.95a1.053,1.053,0,0,1,.38-.86c.9-.79,1.77-1.62,2.68-2.39a1.4,1.4,0,0,1,.8-.31c1.54-.03,3.09-.02,4.63-.01.55,0,.88.29.87.74s-.32.7-.86.7h-4.18a.923.923,0,0,0-.56.19c-.7.6-1.39,1.23-2.07,1.86a.685.685,0,0,0-.23.4c-.02.88-.01,1.76-.01,2.63,1.7.8,2.41,1.96,2.1,3.4a2.877,2.877,0,0,1-5.62.08c-.34-1.49.34-2.64,2.08-3.49Zm-.71,2.83a1.435,1.435,0,1,0,1.42-1.44A1.43,1.43,0,0,0,1309.15,556.6Z" fill="#fff" />
                <path id="Tracé_1535" data-name="Tracé 1535" d="M1338.65,553.78v-2.62a.568.568,0,0,0-.18-.38c-.7-.65-1.41-1.3-2.14-1.92a.875.875,0,0,0-.52-.17c-1.39-.01-2.79,0-4.18,0-.57,0-.89-.26-.89-.72s.32-.72.89-.72c1.54,0,3.09-.01,4.63.01a1.24,1.24,0,0,1,.72.26c.93.8,1.85,1.62,2.73,2.47a1.286,1.286,0,0,1,.36.81c.05.88.03,1.77.01,2.65a.431.431,0,0,0,.33.48,2.874,2.874,0,1,1-3.88,3.18,2.879,2.879,0,0,1,1.61-3.11c.16-.07.33-.14.5-.22Zm-.72,2.83a1.436,1.436,0,0,0,1.43,1.43,1.435,1.435,0,1,0-.02-2.87A1.428,1.428,0,0,0,1337.93,556.61Z" fill="#fff" />
                <path id="Tracé_1536" data-name="Tracé 1536" d="M1309.86,526.36a9.278,9.278,0,0,1-1.08-.63,2.835,2.835,0,0,1-.86-3.35,2.88,2.88,0,0,1,5.51.71,2.809,2.809,0,0,1-1.66,3,.669.669,0,0,0-.49.79c.03.61.02,1.23,0,1.84a.829.829,0,0,0,.3.7c.68.59,1.33,1.21,2.01,1.79a.923.923,0,0,0,.56.19c1.3.02,2.61-.01,3.91.03a1.015,1.015,0,0,1,.7.43.783.783,0,0,1-.08.69.837.837,0,0,1-.61.28c-1.5.02-3,.02-4.49,0a1.111,1.111,0,0,1-.63-.27c-.93-.81-1.85-1.62-2.73-2.47a1.33,1.33,0,0,1-.35-.81c-.04-.99-.02-1.98-.02-2.92Zm-.71-2.86a1.425,1.425,0,1,0-.01,0Z" fill="#fff" />
                <path id="Tracé_1537" data-name="Tracé 1537" d="M1328.21,550.23v-1.17a.7.7,0,0,1,.69-.74.692.692,0,0,1,.74.72q.015,1.125,0,2.25a.5.5,0,0,0,.29.53,2.1,2.1,0,0,1,1.09,2.38,2.165,2.165,0,0,1-4.19.1,2.1,2.1,0,0,1,1.02-2.45.535.535,0,0,0,.34-.59c-.03-.34,0-.69,0-1.03Zm.74,4.21a.729.729,0,0,0,.69-.74.713.713,0,0,0-.73-.69.715.715,0,0,0,.05,1.43Z" fill="#fff" />
                <path id="Tracé_1538" data-name="Tracé 1538" d="M1318.86,553.53a2.024,2.024,0,0,1,1.14-1.7.486.486,0,0,0,.3-.52c-.01-.72,0-1.44,0-2.16,0-.52.29-.84.74-.83a.711.711,0,0,1,.7.81c0,.7.01,1.41,0,2.11a.558.558,0,0,0,.33.59,2.13,2.13,0,0,1,1,2.58,2.18,2.18,0,0,1-2.38,1.43,2.222,2.222,0,0,1-1.83-2.33Zm2.16.91a.715.715,0,0,0,.71-.72.715.715,0,1,0-.71.72Z" fill="#fff" />
                <path id="Tracé_1539" data-name="Tracé 1539" d="M1314.93,536.81h-.22a1.237,1.237,0,0,0-1.39.62,1.982,1.982,0,0,1-2.45.66,2.157,2.157,0,0,1,.35-4.12,2.106,2.106,0,0,1,2.3,1.03.613.613,0,0,0,.66.38c.58-.03,1.17-.01,1.75,0a.722.722,0,1,1,0,1.44h-.99Zm-2.55-.71a.719.719,0,0,0-.7-.72.735.735,0,0,0-.73.7.713.713,0,0,0,.7.72.726.726,0,0,0,.72-.7Z" fill="#fff" />
                <path id="Tracé_1540" data-name="Tracé 1540" d="M1314.94,544.73h-.18a1.3,1.3,0,0,0-1.47.65,1.968,1.968,0,0,1-2.41.65,2.164,2.164,0,0,1,.32-4.13,2.1,2.1,0,0,1,2.3,1.01.653.653,0,0,0,.7.39c.57-.02,1.14-.01,1.71,0a.716.716,0,0,1,.79.73.7.7,0,0,1-.77.7h-.99Zm-2.56-.74a.715.715,0,1,0-.7.73A.728.728,0,0,0,1312.38,543.99Z" fill="#fff" />
                <path id="Tracé_1541" data-name="Tracé 1541" d="M1340.44,536.14a2.149,2.149,0,0,1-1.65,2.05,2.092,2.092,0,0,1-2.37-1.02.588.588,0,0,0-.62-.36c-.58.02-1.17.01-1.75,0a.724.724,0,1,1,0-1.44c.6,0,1.2-.01,1.8,0a.513.513,0,0,0,.55-.32,2.1,2.1,0,0,1,2.44-1.05,2.157,2.157,0,0,1,1.6,2.13Zm-2.17.67a.742.742,0,0,0,.74-.69.715.715,0,1,0-.74.69Z" fill="#fff" />
                <path id="Tracé_1542" data-name="Tracé 1542" d="M1334.99,543.29h.31a1.177,1.177,0,0,0,1.31-.6,2,2,0,0,1,2.48-.69,2.16,2.16,0,0,1-.38,4.12,2.145,2.145,0,0,1-2.34-1.12.453.453,0,0,0-.48-.28c-.61.02-1.23.01-1.84,0a.729.729,0,0,1-.81-.71.708.708,0,0,1,.79-.72h.94Zm4.01.73a.71.71,0,1,0-.72.7A.719.719,0,0,0,1339,544.02Z" fill="#fff" />
                <path id="Tracé_1543" data-name="Tracé 1543" d="M1318.86,527.09a2.183,2.183,0,0,1,1.78-2.13,2.161,2.161,0,0,1,2.4,1.39,2.124,2.124,0,0,1-.94,2.6.62.62,0,0,0-.38.66c.03.46.01.93,0,1.39a.717.717,0,1,1-1.43-.01c0-.22-.01-.45,0-.67.04-.66.06-1.24-.69-1.63a1.719,1.719,0,0,1-.75-1.6Zm2.87,0a.715.715,0,1,0-.71.72A.728.728,0,0,0,1321.73,527.09Z" fill="#fff" />
                <path id="Tracé_1544" data-name="Tracé 1544" d="M1328.21,530.19v-.22a1.014,1.014,0,0,0-.55-1.15,2.02,2.02,0,0,1-.76-2.46,2.161,2.161,0,0,1,4.14.29,2.126,2.126,0,0,1-1.05,2.33.542.542,0,0,0-.35.58c.03.48.01.96,0,1.44a.718.718,0,1,1-1.43.02v-.81Zm.72-2.38a.715.715,0,0,0,.01-1.43.735.735,0,0,0-.72.71A.721.721,0,0,0,1328.93,527.81Z" fill="#fff" />
              </g>
              <g id="Groupe_6" data-name="Groupe 6"
                onMouseEnter={() => handleMouseEnter("Groupe_6")}
                onMouseLeave={handleMouseLeave}
                className={`${selectedSection === 'Groupe_6' ? '-translate-y-2' : ''} `}
              >
                <path id="Tracé_1545" data-name="Tracé 1545" d="M1133.83,871.76h4.03a1.046,1.046,0,0,0,1.04-1.04v-9.11a1.046,1.046,0,0,0-1.04-1.04h-4.03a1.046,1.046,0,0,0-1.04,1.04v9.11A1.046,1.046,0,0,0,1133.83,871.76Z" fill="#fff" />
                <path id="Tracé_1546" data-name="Tracé 1546" d="M1142.99,871.76h4.03a1.046,1.046,0,0,0,1.04-1.04V855.5a1.046,1.046,0,0,0-1.04-1.04h-4.03a1.046,1.046,0,0,0-1.04,1.04v15.22A1.046,1.046,0,0,0,1142.99,871.76Z" fill="#fff" />
                <path id="Tracé_1547" data-name="Tracé 1547" d="M1152.15,871.76h4.03a1.046,1.046,0,0,0,1.04-1.04V848.17a1.046,1.046,0,0,0-1.04-1.04h-4.03a1.046,1.046,0,0,0-1.04,1.04v22.55A1.046,1.046,0,0,0,1152.15,871.76Z" fill="#fff" />
                <path id="Tracé_1548" data-name="Tracé 1548" d="M1161.32,871.76h4.03a1.046,1.046,0,0,0,1.04-1.04V840.84a1.046,1.046,0,0,0-1.04-1.04h-4.03a1.046,1.046,0,0,0-1.04,1.04v29.88A1.046,1.046,0,0,0,1161.32,871.76Z" fill="#fff" />
                <path id="Tracé_1549" data-name="Tracé 1549" d="M1165.96,874.36h-34.58a1.046,1.046,0,0,1-1.04-1.04V838.59a1.046,1.046,0,0,0-1.04-1.04h-.37a1.046,1.046,0,0,0-1.04,1.04v37.02a1.046,1.046,0,0,0,1.04,1.04h37.02a1.046,1.046,0,0,0,1.04-1.04v-.21a1.046,1.046,0,0,0-1.04-1.04Z" fill="#fff" />
              </g>
              <g id="Groupe_7" data-name="Groupe 7"
                onMouseEnter={() => handleMouseEnter("Groupe_7")}
                onMouseLeave={handleMouseLeave}
                className={`${selectedSection === 'Groupe_7' ? '-translate-y-2' : ''} `}
              >
                <path id="Tracé_1550" data-name="Tracé 1550" d="M779.26,850.12a4.3,4.3,0,1,0-4.3-4.3A4.306,4.306,0,0,0,779.26,850.12Z" fill="#fff" />
                <path id="Tracé_1551" data-name="Tracé 1551" d="M788.65,857.91l-1.48-2.02c-.34-.46-.9-1.19-1.25-1.63l-2.18-2.73a1.478,1.478,0,0,0-1.27-.68h-5.16l-3.35-2.28a13.317,13.317,0,0,1-1.32-1.06l-.38-.36h.69a.375.375,0,0,0,.3-.14.334.334,0,0,0,.05-.32l-.46-1.64a.559.559,0,0,0-.52-.39h-1.17l-.29-1.77,1.54-1.03a24.166,24.166,0,0,1,3.11-3.61c0-1.74-.48-2.47-1.66-2.49l.29-1.12a.451.451,0,0,0-.07-.36.427.427,0,0,0-.34-.16h-8.02a.427.427,0,0,0-.34.16.416.416,0,0,0-.07.36l.29,1.12c-1.18.02-1.66.75-1.66,2.49a2.47,2.47,0,0,0,2.25,2.46,2.423,2.423,0,0,0,.86,1.15l1.55,1.03-.29,1.77h-1.01a.559.559,0,0,0-.52.39l-.46,1.64a.384.384,0,0,0,.05.32.375.375,0,0,0,.3.14h.52l-.38.36a13.607,13.607,0,0,1-1.32,1.06l-3.35,2.28h-5.07a1.679,1.679,0,0,0-1.42.68l-2.18,2.73c-.35.44-.91,1.17-1.25,1.63l-1.48,2.02a1.762,1.762,0,0,0-.33,1.35,1.842,1.842,0,0,0,.72,1.19,1.81,1.81,0,0,0,1.08.35,1.837,1.837,0,0,0,1.47-.74l1.33-1.81-.29,3.25-2.56,12.14a1.918,1.918,0,0,0,1.48,2.27,1.75,1.75,0,0,0,.4.04,1.934,1.934,0,0,0,1.88-1.53l2.39-11.36h.62l.34,3.84a16.652,16.652,0,0,1,.04,1.73l-.2,5.33a1.913,1.913,0,0,0,.51,1.38,1.89,1.89,0,0,0,1.34.61h.07a1.913,1.913,0,0,0,1.92-1.85l.2-5.33a20.568,20.568,0,0,0-.06-2.22l-.51-5.74v-.05l.56-6.21,4.4-2.99a16.066,16.066,0,0,0,1.76-1.42l.42-.39.42.39a17.074,17.074,0,0,0,1.76,1.42l4.08,2.78.58,6.43v.05l-.51,5.74a20.5,20.5,0,0,0-.06,2.22l.2,5.55a1.913,1.913,0,0,0,1.92,1.85h.07a1.95,1.95,0,0,0,1.34-.61,1.9,1.9,0,0,0,.51-1.38l-.2-5.55a14.505,14.505,0,0,1,.05-1.74l.34-3.84h.62l.91,4.32c.12.55.32,1.44.45,1.99l1.23,5.11a1.915,1.915,0,0,0,1.87,1.47,2.3,2.3,0,0,0,.45-.05,1.934,1.934,0,0,0,1.42-2.32l-1.23-5.11c-.12-.52-.31-1.36-.42-1.88l-1.07-5.1-.32-3.62c.04.06.08.11.12.16l1.48,2.02a1.81,1.81,0,0,0,1.47.74,1.833,1.833,0,0,0,1.08-.35,1.82,1.82,0,0,0,.39-2.54Zm-15.12-21.13a.273.273,0,0,0,.04-.05h.23c.42,0,.75,0,.75,1.52a1.5,1.5,0,0,1-1.02,1.42v-2.89Zm-7.61,2.89a1.5,1.5,0,0,1-1.02-1.42c0-1.52.33-1.52.75-1.52h.24c0,.01.02.02.03.04v2.9Zm2.63.15a.393.393,0,0,1-.03-.26l.31-.94h0l-.8-.58a.273.273,0,0,1-.12-.3.261.261,0,0,1,.28-.17h.99l.3-.93a.254.254,0,0,1,.5,0l.31.94h.98a.283.283,0,0,1,.28.17.273.273,0,0,1-.12.3l-.8.58h0l.3.93a.294.294,0,0,1-.03.26.258.258,0,0,1-.19.1.274.274,0,0,1-.18-.07l-.8-.58-.8.58a.265.265,0,0,1-.38-.03Z" fill="#fff" />
                <path id="Tracé_1552" data-name="Tracé 1552" d="M759.89,850.12a4.3,4.3,0,1,0-4.3-4.3A4.306,4.306,0,0,0,759.89,850.12Z" fill="#fff" />
              </g>
              <g id="Groupe_8" data-name="Groupe 8"
                onMouseEnter={() => handleMouseEnter("Groupe_8")}
                onMouseLeave={handleMouseLeave}
                className={`${selectedSection === 'Groupe_8' ? '-translate-y-2' : ''} `}
              >
                <path id="Tracé_1553" data-name="Tracé 1553" d="M608.93,550.86V530.51a1.093,1.093,0,0,0-1.09-1.09h-6.17v-4.68a1.093,1.093,0,0,0-1.09-1.09h-4.71v-1.54a5.7,5.7,0,1,0-11.4,0v1.54h-4.71a1.093,1.093,0,0,0-1.09,1.09v4.68H572.5a1.093,1.093,0,0,0-1.09,1.09v20.35a3.129,3.129,0,0,0-3.07,3.13v.54a3.128,3.128,0,0,0,3.13,3.13H608.9a3.128,3.128,0,0,0,3.13-3.13v-.54a3.129,3.129,0,0,0-3.07-3.13Zm-29.19-4.08h20.82a1.093,1.093,0,0,0,1.09-1.09V535.33h1.66v15.3H576.98v-15.3h1.66v10.36a1.093,1.093,0,0,0,1.09,1.09Zm27-15.18v19.03H605.5v-16.4a1.093,1.093,0,0,0-1.09-1.09h-2.75v-1.55h5.08Zm-20.11-9.49a3.52,3.52,0,0,1,7.04,0v1.54h-7.04v-1.54Zm-5.8,3.72h3.62v1.87a1.09,1.09,0,0,0,2.18,0v-1.87h7.04v1.87a1.09,1.09,0,0,0,2.18,0v-1.87h3.62V544.6H580.83V525.83Zm-7.26,5.77h5.08v1.55H575.9a1.093,1.093,0,0,0-1.09,1.09v16.4h-1.24V531.61h0Zm36.25,22.92a.95.95,0,0,1-.95.95H571.44a.95.95,0,0,1-.95-.95v-.54a.95.95,0,0,1,.95-.95h37.43a.95.95,0,0,1,.95.95Z" fill="#fff" />
                <path id="Tracé_1554" data-name="Tracé 1554" d="M593.34,537.55l-7.09-2.84,2.84,7.11.69-2.15,2.86,2.86,1.41-1.42-2.85-2.86Z" fill="#fff" />
              </g>
              <g id="Groupe_9" data-name="Groupe 9"
                className={`${selectedSection === 'Tracé_1490' ? '-translate-y-2' : ''} `}

              >
                <path id="Tracé_1555" data-name="Tracé 1555" d="M935.18,382.51H923.32a2.22,2.22,0,0,1,0-4.44h11.86a2.22,2.22,0,0,1,0,4.44Z" fill="#fff" />
                <path id="Tracé_1556" data-name="Tracé 1556" d="M929.25,373.62h-5.93a2.22,2.22,0,0,1,0-4.44h5.93a2.22,2.22,0,0,1,0,4.44Z" fill="#fff" />
                <path id="Tracé_1557" data-name="Tracé 1557" d="M952.98,384c-3.19,0-5.12,0-6.64-1.52s-1.52-3.45-1.52-6.64,0-5.12,1.52-6.64,3.45-1.52,6.64-1.52,5.12,0,6.64,1.52,1.52,3.45,1.52,6.64,0,5.12-1.52,6.64S956.17,384,952.98,384Zm0-11.87a13.114,13.114,0,0,0-3.49.22,27.8,27.8,0,0,0,0,6.98,27.792,27.792,0,0,0,6.98,0,27.8,27.8,0,0,0,0-6.98A13.114,13.114,0,0,0,952.98,372.13Z" fill="#fff" />
                <path id="Tracé_1558" data-name="Tracé 1558" d="M947.05,392.89H935.19a109.464,109.464,0,0,1-13.31-.45c-3.87-.52-6.49-1.65-8.51-3.67s-3.15-4.64-3.67-8.51a109.636,109.636,0,0,1-.45-13.31,109.55,109.55,0,0,1,.45-13.31c.52-3.87,1.65-6.49,3.67-8.51s4.65-3.15,8.51-3.67a109.636,109.636,0,0,1,13.31-.45h11.86a109.464,109.464,0,0,1,13.31.45c3.87.52,6.49,1.65,8.51,3.67s3.15,4.65,3.67,8.51a109.636,109.636,0,0,1,.45,13.31,2.22,2.22,0,1,1-4.44,0c0-10.56,0-15.86-2.82-18.68s-8.12-2.82-18.68-2.82H935.19c-10.56,0-15.86,0-18.68,2.82s-2.82,8.12-2.82,18.68,0,15.86,2.82,18.68,8.12,2.82,18.68,2.82h11.86c10.56,0,15.86,0,18.68-2.82,1.45-1.45,2.18-3.49,2.53-7.03a2.225,2.225,0,1,1,4.43.43c-.45,4.61-1.59,7.52-3.81,9.74-2.02,2.02-4.64,3.15-8.51,3.67a109.636,109.636,0,0,1-13.31.45Z" fill="#fff" />
                <path id="Tracé_1559" data-name="Tracé 1559" d="M970.78,363.23H938.15a2.22,2.22,0,0,1,0-4.44h32.63a2.22,2.22,0,0,1,0,4.44Zm-44.5,0H911.45a2.22,2.22,0,0,1,0-4.44h14.83a2.22,2.22,0,0,1,0,4.44Z" fill="#fff" />
              </g>
              <path id="Tracé_1560"
                className={`${selectedSection === 'Tracé_1492' ? '-translate-y-2' : ''} `}

                data-name="Tracé 1560" d="M1075.08,535.52h13.44V551.6h-13.44Zm18.77,0h10.75v2.69h-10.75Zm0,13.44h10.75v2.69h-10.75Zm0-6.75h10.75v2.69h-10.75Zm-18.77,13.54h29.48v2.69h-29.48Zm0,13.11h29.48v2.69h-29.48Zm0-6.74h29.48v2.69h-29.48Zm-.75-40.33v5.14h-5.94v53.86h43.67v-5.14H1118V521.79Zm35.04,56.36h-38.34V529.58h38.34Zm5.99-5.19h-3.3V526.88h-35.04v-2.41h38.34v48.48Z" fill="#fff" />
              <g id="Page-1"


              >
                <g id="Dribbble-Light-Preview">
                  <g id="icons">
                    <path className={`${selectedSection === 'Tracé_1491' ? '-translate-y-2' : ''} `} id="share-_x5B__x23_1099_x5D_" d="M810.13,714.38a5.94,5.94,0,1,1,5.94-5.94,5.947,5.947,0,0,1-5.94,5.94Zm-26.3,4.97a10.46,10.46,0,0,0-6.36-4.18V702.46a11.115,11.115,0,0,0,6.7-4.6l14.31,8.26a11.672,11.672,0,0,0,.03,4.78l-14.68,8.45Zm-9.31,13.21a5.94,5.94,0,1,1,5.94-5.94,5.947,5.947,0,0,1-5.94,5.94Zm-5.95-41.55a6.157,6.157,0,0,1,5.94-5.94c8.9,0,8.9,11.87,0,11.87a6.15,6.15,0,0,1-5.94-5.94h0Zm41.56,5.56a11.775,11.775,0,0,0-9,4.22l-14.86-8.58a11.847,11.847,0,1,0-23.63-1.2c0,5.53,2.96,10.13,8.9,11.45v12.71c-5.94,1.32-8.9,5.93-8.9,11.45a11.849,11.849,0,1,0,23.56-1.78l15.01-8.63a11.851,11.851,0,1,0,8.92-19.63h0Z" fill="#fff" fill-rule="evenodd" />
                  </g>
                </g>
              </g>
              <g id="Groupe_10" data-name="Groupe 10"
                className={`${selectedSection === 'Tracé_1489' ? '-translate-y-2' : ''} `}

              >
                <path id="Tracé_1561" data-name="Tracé 1561" d="M684.22,551.36c-.88-.96-1.77-1.93-2.72-2.96.2-.02.33-.05.46-.05h5.21a1.54,1.54,0,0,0,.88-.24,19.047,19.047,0,0,1,11.69-3.07,18.8,18.8,0,0,1,9.26,3.04,1.536,1.536,0,0,0,.93.27c1.66-.01,3.33,0,4.99,0h.61a4.37,4.37,0,0,1-.85,1.03c-.29.34-.6.65-.9.98s-.6.65-.93,1.02a8.571,8.571,0,0,1,.31,12.3,8.649,8.649,0,0,1-11.92.32c-.89.96-1.77,1.92-2.7,2.93-.92-.99-1.8-1.95-2.72-2.95a8.5,8.5,0,0,1-7.5,2.08,8.317,8.317,0,0,1-4.86-2.89,8.623,8.623,0,0,1,.76-11.81Zm5.82,12.09a5.706,5.706,0,1,1,0-.01Zm17.06,0a5.75,5.75,0,1,0-.01,0Zm-8.55-7c.72-3.63,3.02-5.91,6.36-7.39a16.821,16.821,0,0,0-12.72,0C695.54,550.55,697.83,552.83,698.55,556.45Z" fill="#fff" />
                <path id="Tracé_1562" data-name="Tracé 1562" d="M775.6,553.23v-4.85h2.82v14.99a11.31,11.31,0,0,1-2.81.03c-.02-.24-.04-.49-.07-.82a5.712,5.712,0,0,1-5,.82,5.531,5.531,0,0,1-3.01-2.14,5.751,5.751,0,0,1,.23-7.04,5.67,5.67,0,0,1,3.69-2.04,5.849,5.849,0,0,1,4.15,1.05ZM772.49,561a3.1,3.1,0,1,0,0,.01Z" fill="#fff" />
                <path id="Tracé_1563" data-name="Tracé 1563" d="M740.26,552.34h2.79c.02.26.04.51.07.84a5.736,5.736,0,0,1,5.44-.65,5.618,5.618,0,0,1,2.8,2.33,5.753,5.753,0,0,1-.62,6.88,5.582,5.582,0,0,1-3.61,1.86,5.709,5.709,0,0,1-4.02-1.04c-.05,1.42,0,2.76-.03,4.13H740.3c-.11-.39-.15-13.48-.03-14.36Zm5.95,8.66a3.115,3.115,0,1,0-.01,0Z" fill="#fff" />
                <path id="Tracé_1564" data-name="Tracé 1564" d="M762.35,553.2c.02-.33.04-.58.06-.85h2.81v11.09c-.92.05-1.85.02-2.8.01-.02-.29-.04-.54-.06-.87a5.76,5.76,0,0,1-5.1.8,5.594,5.594,0,0,1-2.91-2.1,5.761,5.761,0,0,1,.07-6.87,5.649,5.649,0,0,1,3.71-2.21,5.827,5.827,0,0,1,4.24,1Zm-3.09,7.8a3.115,3.115,0,1,0-3.14-3.13,3.124,3.124,0,0,0,3.14,3.13Z" fill="#fff" />
                <path id="Tracé_1565" data-name="Tracé 1565" d="M805.6,557.91a5.76,5.76,0,1,1,5.8,5.74,5.768,5.768,0,0,1-5.8-5.74Zm5.76,3.09a3.115,3.115,0,1,0-3.14-3.13,3.118,3.118,0,0,0,3.14,3.13Z" fill="#fff" />
                <path id="Tracé_1566" data-name="Tracé 1566" d="M718.44,550.92v-2.54h10.95v2.51h-4.01c-.03,1.42-.01,2.8-.02,4.17v8.38c-.96.03-1.89.02-2.88,0V550.91h-4.04Z" fill="#fff" />
                <path id="Tracé_1567" data-name="Tracé 1567" d="M804.39,555.55h-2.6a1.372,1.372,0,0,0-.73-1.06,1.889,1.889,0,0,0-1.76.05.817.817,0,0,0-.08,1.45,3.455,3.455,0,0,0,.96.42c.56.18,1.14.31,1.71.47a8.24,8.24,0,0,1,.99.34,2.982,2.982,0,0,1,1.6,4.05,3.525,3.525,0,0,1-1.91,1.92,5.387,5.387,0,0,1-4.56-.04,3.48,3.48,0,0,1-2.1-3.38,4.7,4.7,0,0,1,1.35-.06c.44-.02.88,0,1.35,0,.05.2.1.38.14.55a1.341,1.341,0,0,0,.8.93,2.078,2.078,0,0,0,1.82-.06,1.029,1.029,0,0,0,.09-1.84,3.706,3.706,0,0,0-.96-.41c-.63-.2-1.28-.34-1.91-.55a5.034,5.034,0,0,1-1.2-.55,2.832,2.832,0,0,1-.16-4.7,4.989,4.989,0,0,1,3.51-.93,4.47,4.47,0,0,1,2.1.63,3.117,3.117,0,0,1,1.55,2.77Z" fill="#fff" />
                <path id="Tracé_1568" data-name="Tracé 1568" d="M779.45,552.35h3.02c.83,2.62,1.65,5.24,2.48,7.85a.41.41,0,0,1,.11.01c.82-2.61,1.65-5.22,2.48-7.85h3.01c-1.26,3.71-2.54,7.39-3.82,11.08h-3.47Q781.37,557.935,779.45,552.35Z" fill="#fff" />
                <path id="Tracé_1569" data-name="Tracé 1569" d="M821.19,563.44h-2.85V552.42a11.422,11.422,0,0,1,2.84-.03v1.33s.06.01.1.02c.05-.09.11-.17.15-.26a1.964,1.964,0,0,1,1.62-1.11c.58-.05,1.17-.01,1.8-.01V555c-.53,0-1.02-.01-1.52,0a4.152,4.152,0,0,0-.93.11,1.458,1.458,0,0,0-1.14,1.22,4.9,4.9,0,0,0-.06.77v6.33Z" fill="#fff" />
                <path id="Tracé_1570" data-name="Tracé 1570" d="M730.89,552.36v1.36c.08-.03.12-.04.13-.06a2.133,2.133,0,0,1,2.21-1.33h1.19v2.62c-.13.02-.27.04-.41.05h-1.33a1.648,1.648,0,0,0-1.77,1.82c-.01,1.99,0,3.99,0,5.98v.64h-2.79c-.11-.4-.15-10.2-.04-11.07h2.83Z" fill="#fff" />
                <path id="Tracé_1571" data-name="Tracé 1571" d="M791.79,552.35h2.81v11.02a10.368,10.368,0,0,1-2.81.04V552.36Z" fill="#fff" />
                <path id="Tracé_1572" data-name="Tracé 1572" d="M738.53,563.42a2.643,2.643,0,0,1-.38.05h-2.36c-.12-.46-.15-10.42-.04-11.11h2.78v11.06Z" fill="#fff" />
                <path id="Tracé_1573" data-name="Tracé 1573" d="M738.88,549.66a1.745,1.745,0,1,1-1.77-1.75,1.754,1.754,0,0,1,1.77,1.75Z" fill="#fff" />
                <path id="Tracé_1574" data-name="Tracé 1574" d="M794.92,549.67a1.721,1.721,0,0,1-1.75,1.75,1.755,1.755,0,1,1,1.75-1.75Z" fill="#fff" />
                <path id="Tracé_1575" data-name="Tracé 1575" d="M693.03,557.66a3.025,3.025,0,1,1-6.05.01,3.03,3.03,0,0,1,6.06-.01Z" fill="#fff" />
                <path id="Tracé_1576" data-name="Tracé 1576" d="M707.09,554.65a3.035,3.035,0,1,1-3.02,3.02A3.019,3.019,0,0,1,707.09,554.65Z" fill="#fff" />

                <g>
                  <g id="Groupe_11" data-name="Groupe 11">
                    <path id="Tracé_1577" data-name="Tracé 1577" d="M705.1,500.43a5.956,5.956,0,0,1,.34,2.15c-.23,2.27-.41,4.55-.61,6.83a1.48,1.48,0,0,0,.03.19.862.862,0,0,0,.89-.69c.94-3.08,1.91-6.15,2.86-9.23a.705.705,0,0,1,.57-.54c1.38-.37,2.76-.75,4.12-1.17.61-.19,1.19-.51,1.78-.76a13.323,13.323,0,0,1-1.88,12.58,13.6,13.6,0,0,1-24.24-5.4c5.37-1.31,10.73-2.62,16.14-3.95Z" fill="#fff" />
                    <path id="Tracé_1578" data-name="Tracé 1578" d="M714.57,495.9a30.75,30.75,0,0,0-5.75,1.4.971.971,0,0,1-1.02-.21c-2.38-2.1-4.8-4.15-7.19-6.25a.844.844,0,0,0-1.13-.08c.71.95,1.39,1.87,2.08,2.8.75,1,1.54,1.98,2.24,3.02a11.568,11.568,0,0,1,.82,1.76c-5.32,1.79-10.55,3.54-15.77,5.3a13.568,13.568,0,0,1,25.73-7.74Z" fill="#fff" />
                    <path id="Tracé_1579" data-name="Tracé 1579" d="M678.89,516.05c-.28.68-.5,1.3-.78,1.89-.05.11-.31.18-.47.18-1.44.01-2.89,0-4.36,0v3h4.71v2.12h-4.71v4.22h5.64c-.29.72-.52,1.33-.79,1.93a.448.448,0,0,1-.35.16c-1.84.01-3.68.02-5.52,0a1.334,1.334,0,0,1-1.37-1.41V517.37a1.267,1.267,0,0,1,1.19-1.31c2.22-.03,4.44-.01,6.82-.01Z" fill="#fff" />
                    <path id="Tracé_1580" data-name="Tracé 1580" d="M715.02,530.12v-.79c-2.27.98-4.39,1.04-5.91-1.16A4.513,4.513,0,0,1,709,523c1.32-2.15,3.37-2.49,5.72-1.92v-3.06c.04-.46-.09-1.09.16-1.35a3.237,3.237,0,0,1,2.12-.83v3.11q0,4.86.01,9.72a.779.779,0,0,1-.51.84c-.47.19-.93.39-1.49.62Zm-.29-4.88c0-.7.02-1.4-.01-2.09a.587.587,0,0,0-.29-.44,2.568,2.568,0,0,0-3.66,1.87,5.1,5.1,0,0,0-.08,1.51,2.094,2.094,0,0,0,2.62,2.04,5,5,0,0,0,1.17-.38.592.592,0,0,0,.25-.42c.03-.7.01-1.39.01-2.09Z" fill="#fff" />
                    <path id="Tracé_1581" data-name="Tracé 1581" d="M689.47,521.25c1.43-.15,2.83-.4,4.24-.42a4.237,4.237,0,0,1,4.4,4.14,4.346,4.346,0,0,1-3.79,4.87,20.7,20.7,0,0,1-2.62.02v1.15c0,.89.02,1.78-.01,2.67a.733.733,0,0,1-.32.55c-.59.29-1.21.52-1.89.8V521.26Zm2.22,4.17c0,.79-.01,1.59.01,2.38a.519.519,0,0,0,.26.41,2.987,2.987,0,0,0,3.26-4.75,1.908,1.908,0,0,0-1.33-.85,13.987,13.987,0,0,0-1.83.04c-.29.01-.38.19-.38.48.02.76,0,1.53,0,2.29Z" fill="#fff" />
                    <path id="Tracé_1582" data-name="Tracé 1582" d="M728.93,521.18c.16-.08.31-.22.47-.22.52-.03,1.04-.01,1.61-.01v7.84a.6.6,0,0,1-.37.64c-.49.22-.98.43-1.54.68-.03-.39-.05-.69-.07-1.02-1.81,1.63-4.71.72-5.73-.55a5.132,5.132,0,0,1-.19-5.75,4.384,4.384,0,0,1,5.33-1.64c.16.06.32.13.49.19v-.15Zm-.19,4.14c0-.67.01-1.33,0-2a.578.578,0,0,0-.19-.43,2.444,2.444,0,0,0-3.54.95,3.947,3.947,0,0,0-.38,2.08,2.154,2.154,0,0,0,2.21,2.25,4.735,4.735,0,0,0,1.58-.41.638.638,0,0,0,.3-.49c.04-.65.01-1.3.01-1.95Z" fill="#fff" />
                    <path id="Tracé_1583" data-name="Tracé 1583" d="M707.34,525.91h-6.11a2.262,2.262,0,0,0,2.23,2.25,6.1,6.1,0,0,0,2.93-.71c.21-.1.42-.21.71-.35v1.79a.357.357,0,0,1-.18.24,7.532,7.532,0,0,1-4.76.66,4.431,4.431,0,0,1-3.25-4.68,4.357,4.357,0,0,1,3.7-4.22,3.974,3.974,0,0,1,4.09,1.4,4.522,4.522,0,0,1,.65,3.62Zm-2.08-1.3a1.816,1.816,0,0,0-1.7-1.99,2.122,2.122,0,0,0-2.27,1.99h3.96Z" fill="#fff" />
                    <path id="Tracé_1584" data-name="Tracé 1584" d="M683.88,526.75c-.7.85-1.39,1.66-2.04,2.5a.8.8,0,0,1-.72.34c-.55-.02-1.11,0-1.77,0,1.18-1.46,2.3-2.84,3.43-4.23-1.13-1.39-2.23-2.75-3.4-4.2.94,0,1.77-.01,2.6.01.12,0,.27.15.36.26.61.73,1.2,1.47,1.83,2.26.6-.72,1.19-1.4,1.73-2.12a.974.974,0,0,1,.92-.43c.53.03,1.06,0,1.7,0-1.12,1.35-2.17,2.62-3.24,3.9,1.21,1.49,2.42,2.98,3.68,4.54-.93,0-1.77.01-2.6-.01-.14,0-.29-.16-.4-.29-.69-.82-1.37-1.66-2.08-2.52Z" fill="#fff" />
                    <path id="Tracé_1585" data-name="Tracé 1585" d="M718.78,521.17h2.2v8.37h-2.2Z" fill="#fff" />
                    <path id="Tracé_1586" data-name="Tracé 1586" d="M719.89,519.38a1.349,1.349,0,0,1-1.36-1.36,1.377,1.377,0,0,1,1.36-1.37,1.415,1.415,0,0,1,1.38,1.37A1.4,1.4,0,0,1,719.89,519.38Z" fill="#fff" />
                    <path id="Tracé_1587" data-name="Tracé 1587" d="M732.05,520.91a1.615,1.615,0,1,1,1.6,1.65A1.616,1.616,0,0,1,732.05,520.91Zm3,.02a1.334,1.334,0,0,0-1.37-1.39,1.4,1.4,0,0,0-1.41,1.37,1.419,1.419,0,0,0,1.41,1.43,1.36,1.36,0,0,0,1.37-1.4Z" fill="#fff" />
                    <path id="Tracé_1588" data-name="Tracé 1588" d="M734.07,521.04c.12.25.24.48.35.71-.31.15-.42,0-.53-.25a2.744,2.744,0,0,0-.35-.49c-.05.03-.11.05-.16.08a3.527,3.527,0,0,1,0,.46.733.733,0,0,1-.17.26c-.07-.09-.18-.17-.19-.26-.02-.49,0-.98,0-1.46.59-.19,1.25-.1,1.4.18.12.23.02.49-.33.77Zm-.56-.9c-.03.05-.07.1-.1.15v.5s.07.08.11.12c.19-.13.37-.26.56-.39C733.89,520.39,733.7,520.27,733.51,520.14Z" fill="#fff" />
                  </g>
                  <g id="Groupe_12" data-name="Groupe 12">
                    <path id="Tracé_1589" data-name="Tracé 1589" d="M756.29,526.66v3.12c0,.67-.02,1.34,0,2,.02.43-.16.56-.57.55-.89-.02-1.78-.04-2.67,0-.55.03-.68-.17-.68-.7.02-4.09.01-8.17.01-12.26,0-1.6.02-3.2,0-4.79,0-.48.15-.64.63-.62a19.058,19.058,0,0,0,2,0c.58-.04.9.1.8.75a1.515,1.515,0,0,0,.07.4c.35-.27.64-.52.96-.72a5.622,5.622,0,0,1,8.03,2.52,9,9,0,0,1-.26,8.07,5.336,5.336,0,0,1-7.6,2.07c-.18-.11-.37-.21-.72-.4Zm-.37-5.82c.17.84.29,1.7.51,2.53a2.29,2.29,0,0,0,1.95,1.76,2.583,2.583,0,0,0,2.48-.96,6.031,6.031,0,0,0,.1-6.81,2.53,2.53,0,0,0-3.99.08,5.961,5.961,0,0,0-1.05,3.39Z" fill="#fff" />
                    <path id="Tracé_1590" data-name="Tracé 1590" d="M808.35,521.53H806.5c-2.45,0-4.89.01-7.34,0-.48,0-.63.14-.61.62a3.109,3.109,0,0,0,2.88,2.91,3.7,3.7,0,0,0,3.72-1.99c.06-.1.14-.19.25-.34.84.44,1.67.87,2.55,1.33a7.443,7.443,0,0,1-6.11,4.04,7.647,7.647,0,0,1-3.78-.61,6.211,6.211,0,0,1-3.61-5.18,8.328,8.328,0,0,1,1.55-6.25,6.29,6.29,0,0,1,4.43-2.44,7.2,7.2,0,0,1,4.03.45,6.461,6.461,0,0,1,3.68,5.28c.11.69.14,1.4.21,2.2Zm-7.13-2.45h2.36c.32,0,.58-.06.53-.46a2.591,2.591,0,0,0-1.3-2.19,2.855,2.855,0,0,0-4.31,2.02c-.09.45,0,.64.48.63C799.73,519.06,800.47,519.08,801.22,519.08Z" fill="#fff" />
                    <path id="Tracé_1591" data-name="Tracé 1591" d="M850.79,524.2a7.235,7.235,0,0,1-6.12,3.9,6.791,6.791,0,0,1-5.56-2,6.5,6.5,0,0,1-1.66-3.57,8.793,8.793,0,0,1,.82-5.59,6.079,6.079,0,0,1,4.95-3.33,7.271,7.271,0,0,1,3.92.43,6.391,6.391,0,0,1,3.64,4.98c.13.63.17,1.28.26,1.92.07.49-.14.62-.61.62-2.85-.02-5.7,0-8.55-.02-.56,0-.69.17-.59.72a2.947,2.947,0,0,0,2.14,2.66,3.644,3.644,0,0,0,3.84-.99c.06-.06.1-.13.15-.19a1.372,1.372,0,0,1,1.93-.35c.47.26.95.53,1.48.82Zm-6.54-5h0c.75,0,1.49-.02,2.24,0,.53.02.68-.18.58-.69a2.684,2.684,0,0,0-2.9-2.34,2.747,2.747,0,0,0-2.72,2.43c-.07.42.06.6.5.59.77-.02,1.53,0,2.3,0Z" fill="#fff" />
                    <path id="Tracé_1592" data-name="Tracé 1592" d="M827.78,514.97c1.48-1.42,3.24-1.51,5.07-1.24a3.206,3.206,0,0,1,2.74,3.04c.08,2.69.09,5.37.13,8.06v2.18c0,.33-.13.48-.46.47-.99,0-1.98-.02-2.97,0-.51,0-.47-.32-.47-.65,0-2.77-.04-5.54.02-8.31.03-1.31-.7-1.66-1.58-1.83a2.04,2.04,0,0,0-2.36,1.24,8.594,8.594,0,0,0-.24,2.09c-.02,2.37.02,4.75.03,7.12a2.054,2.054,0,0,1-.07.34h-3.41c-.42,0-.43-.27-.42-.57v-4.19c0-2.69.01-5.38-.01-8.07,0-.53.15-.72.69-.69q1.275.06,2.55,0c.52-.03.77.1.68.66a1.429,1.429,0,0,0,.09.34Z" fill="#fff" />
                    <path id="Tracé_1593" data-name="Tracé 1593" d="M792.13,523.61c.53.87,1.05,1.7,1.53,2.56a.583.583,0,0,1-.1.53,6.431,6.431,0,0,1-4.36,1.31,6.854,6.854,0,0,1-3.78-1.32,6.226,6.226,0,0,1-2.5-4.6,8.238,8.238,0,0,1,1.26-5.85,6.008,6.008,0,0,1,4.56-2.64,6.755,6.755,0,0,1,4.66,1.14c.39.27.48.45.15.89a20.6,20.6,0,0,0-1.27,2.1c-.26-.23-.57-.5-.89-.76a2.491,2.491,0,0,0-3.76.52,6.055,6.055,0,0,0-.19,5.89,2.722,2.722,0,0,0,4.47.49c.1-.1.19-.2.24-.26Z" fill="#fff" />
                    <path id="Tracé_1594" data-name="Tracé 1594" d="M810.18,517.76c0-2.99.01-5.99-.01-8.98,0-.57.14-.8.74-.77.83.05,1.66.03,2.49,0,.43-.01.62.12.62.58v18.33c0,.47-.2.59-.62.58-.87-.02-1.74-.03-2.61,0-.49.02-.62-.19-.61-.64.01-3.04,0-6.07,0-9.11Z" fill="#fff" />
                    <path id="Tracé_1595" data-name="Tracé 1595" d="M771.23,515.35a6.631,6.631,0,0,1,3.9-1.52c0,1.05.01,2.07-.02,3.09,0,.12-.24.3-.4.34-.6.15-1.23.23-1.83.39a1.722,1.722,0,0,0-1.53,1.99c0,2.39-.01,4.77,0,7.16,0,.52-.12.73-.67.71-.89-.04-1.78-.02-2.67,0-.41,0-.58-.12-.58-.55q.015-6.285,0-12.56c0-.39.14-.54.53-.53.87.02,1.74.03,2.61,0,.5-.02.71.14.65.65a7.613,7.613,0,0,0,0,.84Z" fill="#fff" />
                    <path id="Tracé_1596" data-name="Tracé 1596" d="M777.04,520.73c0-2.04.01-4.08,0-6.12,0-.47.13-.65.62-.63.89.03,1.78.02,2.67,0,.36,0,.51.12.51.49v12.55c0,.33-.12.48-.46.48-.95,0-1.9-.01-2.85,0-.44,0-.48-.24-.48-.59v-6.18Z" fill="#fff" />
                    <path id="Tracé_1597" data-name="Tracé 1597" d="M820.78,520.73c0,2.04-.01,4.08.01,6.12,0,.51-.17.67-.66.65-.85-.03-1.7-.02-2.55,0-.39,0-.59-.09-.59-.54q.015-6.21,0-12.43c0-.43.16-.56.57-.55.87.02,1.74.03,2.61,0,.49-.02.62.16.62.63-.02,2.04,0,4.08,0,6.12Z" fill="#fff" />
                    <path id="Tracé_1598" data-name="Tracé 1598" d="M778.95,512.43a2.086,2.086,0,0,1,.09-4.17,2.084,2.084,0,0,1,2.03,2.06,2.13,2.13,0,0,1-2.11,2.11Z" fill="#fff" />
                    <path id="Tracé_1599" data-name="Tracé 1599" d="M818.75,512.43a2.065,2.065,0,0,1-1.99-2.15,2.031,2.031,0,0,1,2.16-2.02,2.063,2.063,0,0,1,1.98,2.1,2.111,2.111,0,0,1-2.15,2.07Z" fill="#fff" />
                    <path id="Tracé_1600" data-name="Tracé 1600" d="M854.07,509.47a2.713,2.713,0,0,1,2.79,2.96,2.886,2.886,0,1,1-2.79-2.96Zm-2.45,2.94a2.3,2.3,0,0,0,2.31,2.3,2.365,2.365,0,1,0-2.32-2.31Z" fill="#fff" />
                    <path id="Tracé_1601" data-name="Tracé 1601" d="M854.63,512.74c.14.26.24.47.35.68l-.09.12c-.13-.09-.33-.16-.37-.29-.15-.43-.45-.48-.85-.48-.44,0-.38.33-.46.57-.02.06-.1.11-.23.25a3.263,3.263,0,0,1-.14-.49,8.145,8.145,0,0,1,0-1.21c.04-.32-.24-.77.27-.94a1.859,1.859,0,0,1,1.84.47.926.926,0,0,1-.32,1.3Zm-.11-.94c.09-.51-.23-.55-.62-.56s-.67.09-.66.57c0,.43.16.62.62.61C854.28,512.4,854.59,512.33,854.52,511.8Z" fill="#fff" />
                  </g>
                </g></g>

            </g>
          </g>
        </svg>

      </section>

      <section className="content-section mt-16" data-aos="fade-left">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:px-36">
          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
            <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">Loyalty</h2>
            <p className="text-gray-700 text-2sm md:text-2xl leading-relaxed">
              Investour Hospitality is the world’s largest travel loyalty program with over 173 million members and growing.
              Our innovative loyalty programming drives awareness and high engagement with half of total sold room nights from members. These guests stay more, spend more, and cost less because they book through our lowest cost channels.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 15.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="content-section mt-16" data-aos="fade-right">
        <div className="flex flex-col md:flex-row items-center w-full md:px-36">
          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 16.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:ml-16">
            <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">Sales</h2>
            <p className="text-gray-700 text-2sm md:text-2xl leading-relaxed">
            We strategically target guests from global, regional, and local markets across all business segments. Our expert sales teams provide B2B customers streamlined solutions, leveraging our scale, distribution channels, 
            and personalized service to meet their needs. Our total account management strategy gives clients and meeting planners a single point of contact, building long-standing trust and success.
              </p>
          </div>
        </div>
      </section>

      <section className="content-section mt-16" data-aos="fade-left">
        <div className="flex flex-col md:flex-row items-center w-full md:px-36">
          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
            <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">Global Distribution
            Strategy</h2>
            <p className="text-gray-700 text-2sm md:text-2xl leading-relaxed">
            Marriott’s global distribution platform is designed to optimize occupancy at a lower cost from every corner of the globe. 
             Our world class website and multilingual call centers ensure 24/7 guest access, while our mobile, search and online channels place our properties at guests’ fingertips, and make it easy for them to book direct. 
              </p>
            <p className="text-gray-700 text-2sm md:text-xl leading-relaxed mt-4">+ Read More</p>

          </div>

          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 17.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="content-section mt-16" data-aos="fade-right">
        <div className="flex flex-col md:flex-row items-center w-full md:px-36">
          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 18.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:ml-16">
            <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">Revenue
            Management</h2>
            <p className="text-gray-700 text-2sm md:text-2xl leading-relaxed">
            Our revenue management team leverages sophisticated systems to execute on pricing and inventory management strategies 
            that align with our demand forecasting tools to enhance Marriott’s competitiveness, increase market share and maximize hotel revenue.</p>
          </div>
        </div>
      </section>

      <section className="content-section mt-16" data-aos="fade-left">
        <div className="flex flex-col md:flex-row items-center w-full md:px-36">
          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
            <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">Cost Savings</h2>
            <p className="text-gray-700 text-2sm md:text-2xl leading-relaxed">
            Our size and scale allow us to share costs and leverage market efficiencies through shared services, 
            strong negotiated rates with intermediary partners and favorable credit card interchange rates.</p>
            <p className="text-gray-700 text-2sm md:text-xl leading-relaxed mt-4">+ Read More</p>
          </div>

          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 19.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}

export default Advantage