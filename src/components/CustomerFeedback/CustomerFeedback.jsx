import "./CustomerFeedback.scss";
const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "REV. K FERNANDO",
      district: "Kalutara",
      feedback:
        "Excellent! Well Rewarded Great Valuable Service For The Nation & For All Of Us. Thank You Very Much.GOD BLESS YOU!",
    },
    ,
    {
      name: "MR. S MATHER",
      district: "Colombo",
      feedback:
        "Job done well within the allocated time. Thanks for the commitment shown by the technical staff. Once again a big THANK YOU. I recommend more people to use Dialog netword. Thank you so much!",
    },
  ];
  return (
    <div className="customerFeedback">
      <div className="container">
        <h1>What our customers say...</h1>
        <p>Here's what out customers are saying about our services</p>
        <div className="bottom">
          {feedbacks.map((feedback, index) => (
            <div className="feedback" key={index}>
              <div className="name">
                <p>
                  {feedback.name}
                  <br /> <span>{feedback.district}</span>
                </p>
              </div>
              <p>{feedback.feedback}</p>
            </div>
          ))}
        </div>
        <button>VIEW MORE</button>
      </div>
    </div>
  );
};

export default CustomerFeedback;
