import Rating from "@mui/material/Rating";
import { Col } from "react-bootstrap";
import CheckDevice from "./CheckDevice";

const Comments = ({
  starRate,
  date,
  title,
  mutedTitle,
  user,
}: {
  starRate: number;
  date: Date;
  title: string;
  mutedTitle: string;
  user: string;
}) => {
  const device = CheckDevice();
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  const [firstName, surname] = user.split(" ");
  const formattedUser = `${firstName} ${surname.charAt(0)}.`;
  return (
    <Col xs={6} md={4} xl={3} className="mt-3">
      <div className="d-flex align-items-center">
        {device == "desktop" ? (
          <></>
        ) : (
          <Rating className="pe-3" name="read-only" value={starRate} readOnly />
        )}
        <span className="comment-date">{formattedDate}</span>
      </div>

      <h6 className="comment-title ps-0 ms-0">{title}</h6>
      <p className="comment-mutedTitle ">{mutedTitle}</p>
      <p className="comment-user ps-0 ms-0">{formattedUser}</p>
    </Col>
  );
};

export default Comments;
