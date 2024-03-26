import { Job } from "./Jobs";

function Card(props: { job: Job }) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="header">
          <div className="content">
            <div className="left">
              <img src={props.job.img} alt="software" />
              <div className="position">
                <p className="name">{props.job.tittle}</p>
                <p className="company">{props.job.company}</p>
              </div>
            </div>
            <div className="right">
              <img src="assets/icons/download.png" alt="download" />
            </div>
          </div>
          <div className="description">{props.job.description}</div>
        </div>
        <div className="contact">
          <div className="left">
            <img src="assets/icons/email.png" alt="email" />
            <p>tuyendung@alta.com.vn</p>
          </div>
          <div className="right">
            <img src="assets/icons/phone.png" alt="phone" />
            <p>0282 240 9960</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
