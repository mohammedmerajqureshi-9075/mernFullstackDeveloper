import './Work.css'
import WorkECommerceWebsite from '../componentsReuse/WorkECommerceWebsite'
import WorkTekiskyMartApis from '../componentsReuse/WorkTekiskyMartApis'
import WorkSoftkDIPortalApis from '../componentsReuse/WorkSoftkDIPortalApis'
import WorkTekiskyMartUi from '../componentsReuse/WorkTekiskyMartUi'
const Work = () => {
  return (
    <div className='work-container'>
      <div className="work-heading">
        <h1>My Work</h1>
      </div>
      <div className="work-cards">
        <div className="work-1">
        <WorkECommerceWebsite/>
        </div>
        <div className="work-1">
        <WorkTekiskyMartApis/>
        </div>
        <div className="work-1">
        <WorkSoftkDIPortalApis/>
        </div>
        <div className="work-1">
        <WorkTekiskyMartUi/>
        </div>
      </div>
    </div>
  )
}

export default Work
