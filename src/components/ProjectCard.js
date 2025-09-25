import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, slug }) => {
  const to = slug ? `/projects/${slug}` : undefined;
  const Wrapper = to ? Link : 'div';
  const wrapperProps = to ? { to } : {};
  return (
    <Col size={12} sm={6} md={4}>
      <Wrapper {...wrapperProps} className={to ? 'proj-link' : undefined}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Wrapper>
    </Col>
  )
}
